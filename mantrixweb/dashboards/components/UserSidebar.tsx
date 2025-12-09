"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Building2, BookOpen, Settings, ShieldCheck, Rocket, Zap, FileText, UserPlus, LogOut } from "lucide-react"
import { useAuth } from "@/contexts/AuthContext"

const userNavItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/user/dashboard" },
  { icon: Building2, label: "College Search", href: "/user/college-search" },
  { icon: BookOpen, label: "Course Search", href: "/user/course-search" },
  { icon: Rocket, label: "CAT Assessment", href: "/user/cat-assessment" },
  { icon: Zap, label: "Stream Prediction", href: "/user/stream-prediction" },
  { icon: FileText, label: "Resources Hub", href: "/user/resources" },
  { icon: UserPlus, label: "Mentor Connect", href: "/user/mentor-connect" },
]

export function UserSidebar() {
  const pathname = usePathname()
  const { logout } = useAuth()

  return (
    <aside className="w-64 bg-white border-r border-gray-100 flex flex-col shrink-0 fixed h-full z-20">
      <div className="p-8 flex items-center justify-between">
        <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">Mantrix</h1>
        <ShieldCheck className="w-5 h-5 text-blue-600" />
      </div>
      <nav className="flex-1 px-4 space-y-2">
        {userNavItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 ${isActive
                ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-gray-400"}`} />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>
      <div className="p-6 space-y-2">
        <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </button>
        <button
          onClick={logout}
          className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-500 hover:text-red-700 hover:bg-red-50 rounded-xl transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  )
}
