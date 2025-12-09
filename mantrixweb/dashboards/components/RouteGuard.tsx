"use client"

import { usePathname } from "next/navigation"
import ProtectedRoute from "@/components/ProtectedRoute"

const PUBLIC_PATHS = new Set([
  "/",
  "/auth/signin",
  "/auth/signup",
])

export default function RouteGuard({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "/"

  if (PUBLIC_PATHS.has(pathname)) {
    return <>{children}</>
  }

  return (
    <ProtectedRoute>
      {children}
    </ProtectedRoute>
  )
}
