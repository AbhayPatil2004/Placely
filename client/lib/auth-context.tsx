"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { getCurrentUser, logout as logoutRequest } from "@/lib/api/auth";
import { ApiError } from "@/lib/api/client";
import type { AuthUser } from "@/lib/api/auth";

export type { AuthUser } from "@/lib/api/auth";

type AuthContextValue = {
  user: AuthUser | null;
  loading: boolean;
  isAuthenticated: boolean;
  setUser: (user: AuthUser | null) => void;
  logout: () => Promise<void>;
  resetEmail: string | null;
  resetOtp: string | null;
  setResetEmail: (email: string) => void;
  setResetOtp: (otp: string) => void;
  clearResetFlow: () => void;
};

const STORAGE_KEY = "placely-auth-user";
const AuthContext = createContext<AuthContextValue | null>(null);
const authRoutes = ["/login", "/signup", "/forgot-password", "/reset-password"];

export function AuthProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUserState] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [resetEmail, setResetEmailState] = useState<string | null>(null);
  const [resetOtp, setResetOtpState] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const restoreSession = async () => {
      let storedUser: AuthUser | null = null;

      try {
        const serializedUser = localStorage.getItem(STORAGE_KEY);
        if (serializedUser) {
          storedUser = JSON.parse(serializedUser) as AuthUser;
        }
      } catch {
        localStorage.removeItem(STORAGE_KEY);
      }

      try {
        const currentUser = await getCurrentUser();
        if (!cancelled) {
          setUserState(currentUser);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(currentUser));
        }
      } catch (error) {
        if (
          !cancelled &&
          error instanceof ApiError &&
          (error.status === 401 || error.status === 403 || error.status === 404)
        ) {
          setUserState(null);
          localStorage.removeItem(STORAGE_KEY);
        } else if (!cancelled && storedUser) {
          setUserState(storedUser);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    void restoreSession();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (loading) return;
    if (pathname.startsWith("/admin")) return;

    const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));

    if (!user && !isAuthRoute && pathname !== "/") {
      router.replace("/");
      return;
    }

    if (user && isAuthRoute) {
      router.replace("/dashboard");
    }
  }, [loading, pathname, router, user]);

  const setUser = useCallback((nextUser: AuthUser | null) => {
    setUserState(nextUser);

    if (nextUser) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nextUser));
      return;
    }

    localStorage.removeItem(STORAGE_KEY);
  }, []);

  const logout = useCallback(async () => {
    try {
      await logoutRequest();
    } catch (error) {
      if (!(error instanceof ApiError) || (error.status !== 401 && error.status !== 403)) {
        console.error("Logout request failed", error);
      }
    } finally {
      setUser(null);
      router.replace("/");
    }
  }, [router, setUser]);

  const value = useMemo(
    () => ({
      user,
      loading,
      isAuthenticated: Boolean(user),
      setUser,
      logout,
      resetEmail,
      resetOtp,
      setResetEmail: setResetEmailState,
      setResetOtp: setResetOtpState,
      clearResetFlow: () => {
        setResetEmailState(null);
        setResetOtpState(null);
      },
    }),
    [loading, logout, resetEmail, resetOtp, setUser, user],
  );

  if (loading) {
    return (
      <main className="grid min-h-screen place-items-center bg-abyss text-sm text-muted-gray">
        Restoring session...
      </main>
    );
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    return {
      user: null,
      loading: false,
      isAuthenticated: false,
      setUser: () => undefined,
      logout: async () => undefined,
      resetEmail: null,
      resetOtp: null,
      setResetEmail: () => undefined,
      setResetOtp: () => undefined,
      clearResetFlow: () => undefined,
    } satisfies AuthContextValue;
  }

  return context;
}
