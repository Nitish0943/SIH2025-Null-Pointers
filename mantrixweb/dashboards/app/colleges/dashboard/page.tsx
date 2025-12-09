"use client"

import React from "react"
import Link from "next/link"
import {
  Users,
  BookOpen,
  FileCheck,
  TrendingUp,
  User,
  Calendar,
  Plus
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const summaryCards = [
  {
    title: "Total Applications",
    value: "5",
    description: "Active applications",
    icon: Users,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "Active Courses",
    value: "8",
    description: "Available for enrollment",
    icon: BookOpen,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "Pending Reviews",
    value: "2",
    description: "Applications to review",
    icon: FileCheck,
    color: "text-gray-600",
    bgColor: "bg-gray-50",
  },
  {
    title: "Alumni Network",
    value: "4",
    description: "Registered alumni",
    icon: TrendingUp,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
]

const quickActions = [
  {
    label: "Manage Students",
    icon: User,
    href: "/colleges/applications",
  },
  {
    label: "View Courses",
    icon: BookOpen,
    href: "/colleges/micro-courses",
  },
  {
    label: "Schedule Events",
    icon: Calendar,
    href: "/colleges/events",
  },
]

export default function CollegesDashboardPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
        <p className="text-gray-600 mt-1">
          Welcome to Mantrix - Your College Management System
        </p>
      </div>

      {/* Summary Cards - Matching dashboard style */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryCards.map((card, idx) => {
          return (
            <Card
              key={idx}
              className="border-none shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] rounded-3xl hover:translate-y-[-2px] transition-transform duration-300"
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <p className="text-sm font-medium text-gray-500">{card.title}</p>
                </div>
                <div className="flex items-end gap-3 mb-2">
                  <h3 className="text-3xl font-bold text-gray-900">{card.value}</h3>
                </div>
                <p className={`text-xs font-medium ${card.color}`}>{card.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Quick Actions & Add Widget */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <Card className="lg:col-span-1 border-none shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] rounded-3xl hover:translate-y-[-2px] transition-transform duration-300">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Quick Actions</h3>
            <div className="space-y-3">
              {quickActions.map((action, idx) => {
                const Icon = action.icon
                return (
                  <Link
                    key={idx}
                    href={action.href}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-gray-700 hover:bg-gray-50 transition-colors group"
                  >
                    <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-blue-50 transition-colors">
                      <Icon className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
                    </div>
                    <span className="font-medium">{action.label}</span>
                  </Link>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Add Widget Card */}
        <Card className="lg:col-span-2 border-2 border-dashed border-gray-200 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] rounded-3xl hover:border-blue-300 transition-colors hover:translate-y-[-2px] transition-transform duration-300">
          <CardContent className="p-12 flex flex-col items-center justify-center min-h-[300px] text-center">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4 group-hover:bg-blue-50 transition-colors">
              <Plus className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Add more widgets</h3>
            <p className="text-gray-500 text-sm">
              to customize your dashboard!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
