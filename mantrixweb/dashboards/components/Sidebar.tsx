"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Calendar as CalendarIcon,
  MessageSquare,
  Users,
  BookOpen,
  Settings
} from "lucide-react"

const navigationItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: CalendarIcon, label: "Schedules", href: "/schedule" },
  { icon: MessageSquare, label: "Messages", href: "/messages" },
  { icon: Users, label: "Students", href: "/students" },
  { icon: BookOpen, label: "Course Data", href: "/course-data" },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-white border-r border-gray-100 flex flex-col shrink-0 fixed h-full z-20">
      <div className="p-8">
        <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">Mantrix</h1>
      </div>
      <nav className="flex-1 px-4 space-y-2">
        {navigationItems.map((item) => {
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
      <div className="p-6">
        <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </button>
      </div>
    </aside>
  )
}

