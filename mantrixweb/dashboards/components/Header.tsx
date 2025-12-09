"use client"

import React from "react"
import { Bell, ChevronDown, LogOut } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/AuthContext"

interface HeaderProps {
  title: string
}

export function Header({ title }: HeaderProps) {
  const { logout, userData } = useAuth()

  return (
    <header className="px-10 py-6 bg-white/50 backdrop-blur-sm sticky top-0 z-10">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>

        <div className="flex items-center gap-6">
          {/* Search removed for user view */}

          <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>

          <Button
            onClick={logout}
            variant="ghost"
            size="sm"
            className="text-gray-600 hover:text-gray-900"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>

          <div className="flex items-center gap-3 pl-4 border-l border-gray-100">
            <div className="text-right hidden md:block">
              <p className="text-sm font-bold text-gray-900">{userData?.name || "User"}</p>
              <p className="text-xs text-gray-400 font-medium">{userData?.role || "Student"}</p>
            </div>
            <Avatar className="w-10 h-10 border-2 border-white shadow-sm cursor-pointer">
              <AvatarFallback className="bg-blue-100 text-blue-600 font-bold">
                {userData?.name?.substring(0, 2).toUpperCase() || "RF"}
              </AvatarFallback>
            </Avatar>
            <ChevronDown className="w-4 h-4 text-gray-400 cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  )
}
