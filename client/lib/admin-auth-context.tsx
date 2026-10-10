"use client";

import { createContext, useContext, useMemo, useState } from "react";
import type { AdminUser } from "@/services/adminAuthService";

type AdminAuthContextValue = {
  admin: AdminUser | null;
  setAdmin: (admin: AdminUser | null) => void;
};

const AdminAuthContext = createContext<AdminAuthContextValue | null>(null);

export function AdminAuthProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [admin, setAdmin] = useState<AdminUser | null>(null);
  const value = useMemo(() => ({ admin, setAdmin }), [admin]);
  return <AdminAuthContext.Provider value={value}>{children}</AdminAuthContext.Provider>;
}

export function useAdminAuth() {
  const context = useContext(AdminAuthContext);
  if (!context) throw new Error("useAdminAuth must be used inside AdminAuthProvider");
  return context;
}
