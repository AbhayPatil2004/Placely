"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ApiError, apiRequest } from "@/lib/api/client";

export type AuthUser = {
  _id?: string;
  fullname: string;
  studentId: number;
  email: string;
  authProvider?: "local" | "google";
  branch: string;
  college: string;
  collegeId: string;
  currentYear: number;
  passingYear: number;
  tenthPercentage?: number;
  twelfthPercentage?: number;
};

type AuthContextValue = {
  user: AuthUser | null;
  loading: boolean;
  isAuthenticated: boolean;
  setUser: (user: AuthUser) => void;
  logout: () => Promise<void>;
  resetEmail: string | null;
  resetToken: string | null;
  setResetEmail: (email: string) => void;
  setResetToken: (token: string) => void;
  clearResetFlow: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);
const authRoutes = ["/login", "/signup", "/forgot-password", "/reset-password"];

export function AuthProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading] = useState(false);
  const [resetEmail, setResetEmailState] = useState<string | null>(null);
  const [resetToken, setResetTokenState] = useState<string | null>(null);

  useEffect(() => {
    if (loading) return;
    const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));
    if (!user && !isAuthRoute) router.replace("/login");
    if (user && isAuthRoute) router.replace("/dashboard");
  }, [loading, pathname, router, user]);

  const logout = useCallback(async () => {
    try {
      await apiRequest("/api/student/logout", { method: "POST" });
    } catch (error) {
      if (!(error instanceof ApiError) || (error.status !== 401 && error.status !== 403)) {
        console.error("Logout request failed", error);
      }
    } finally {
      setUser(null);
      router.replace("/login");
    }
  }, [router]);

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
    [loading, logout, resetEmail, resetToken, user],
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
