"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { logout as logoutRequest } from "@/lib/api/auth";
import { ApiError } from "@/lib/api/client";

export type CodingProfile = {
  platform: string;
  profileUrl: string;
};

export type AuthUser = {
  _id?: string;
  fullname: string;
  studentId: string;
  email: string;
  profileImage?: string | null;
  authProvider?: "local" | "google";
  branch: string;
  college: string;
  collegeId: string;
  university?: string | null;
  currentYear: number;
  passingYear: number;
  cgpa?: number | null;
  tenthPercentage?: number | null;
  twelfthPercentage?: number | null;
  skills?: string[];
  codingProfiles?: CodingProfile[];
  resumeUrl?: string | null;
  portfolioUrl?: string | null;
  role?: string;
  createdAt?: string;
  updatedAt?: string;
};

type AuthContextValue = {
  user: AuthUser | null;
  loading: boolean;
  isAuthenticated: boolean;
  setUser: (user: AuthUser | null) => void;
  logout: () => Promise<void>;
  resetEmail: string | null;
  resetToken: string | null;
  setResetEmail: (email: string) => void;
  setResetToken: (token: string) => void;
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
  const [resetToken, setResetTokenState] = useState<string | null>(null);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem(STORAGE_KEY);
      if (storedUser) {
        setUserState(JSON.parse(storedUser) as AuthUser);
      }
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (loading) return;
    if (pathname.startsWith("/admin")) return;
    const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));

    if (!user && !isAuthRoute) {
      router.replace("/login");
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
      router.replace("/login");
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
      resetToken,
      setResetEmail: setResetEmailState,
      setResetToken: setResetTokenState,
      clearResetFlow: () => {
        setResetEmailState(null);
        setResetTokenState(null);
      },
    }),
    [loading, logout, resetEmail, resetToken, setUser, user],
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
      resetToken: null,
      setResetEmail: () => undefined,
      setResetToken: () => undefined,
      clearResetFlow: () => undefined,
    } satisfies AuthContextValue;
  }

  return context;
}
