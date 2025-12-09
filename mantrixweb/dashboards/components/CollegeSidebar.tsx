"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Building2,
  BookOpen,
  GraduationCap,
  Users,
  BarChart3,
  FileText,
  Image,
  Phone,
  LogOut
} from "lucide-react"

const navigationItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/colleges/dashboard" },
  { icon: Building2, label: "College Info", href: "/colleges/collegeinfo" },
  { icon: BookOpen, label: "Courses", href: "/colleges/courses" },
  { icon: GraduationCap, label: "Micro Courses", href: "/colleges/micro-courses" },
  { icon: Users, label: "Alumni", href: "/colleges/alumni" },
  { icon: BarChart3, label: "Analytics", href: "/colleges/analytics" },
  { icon: FileText, label: "Applications", href: "/colleges/applications" },
  { icon: Image, label: "Media Gallery", href: "/colleges/media-gallery" },
  { icon: Phone, label: "Contact", href: "/colleges/contact" },
]

export function CollegeSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-white border-r border-gray-100 flex flex-col shrink-0 fixed h-full z-20">
      <div className="p-8">
        <div className="mb-6">
          <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight mb-4" style={{ fontFamily: 'cursive' }}>
            Mantrix
          </h1>
          <div className="flex items-center justify-center mb-2">
            <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center shadow-lg">
              <span className="text-2xl font-bold text-white">GCET</span>
            </div>
          </div>
          <p className="text-[10px] text-center text-gray-600 leading-tight px-2">
            GOVERNMENT COLLEGE OF ENGINEERING AND TECHNOLOGY,JAMMU
          </p>
        </div>
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
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
        <p className="text-xs text-gray-400 text-center mt-4">
          Copyright. All rights reserved
        </p>
      </div>
    </aside>
  )
}

