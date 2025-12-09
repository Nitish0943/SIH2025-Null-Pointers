"use client"

import React from "react"
import Link from "next/link"
import { LogIn, UserPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        {/* Logo/Brand */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Mantrix</h1>
          <p className="text-gray-600">Your learning management platform</p>
        </div>

        {/* Auth Card */}
        <Card className="border-none shadow-xl rounded-3xl">
          <CardContent className="p-8 space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
              <p className="text-gray-500 text-sm">
                Sign in to access your dashboard
              </p>
            </div>

            <div className="space-y-4">
              <Link href="/dashboard" className="block">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-base font-semibold rounded-xl flex items-center justify-center gap-2">
                  <LogIn className="w-5 h-5" />
                  Sign In
                </Button>
              </Link>

              <Link href="/dashboard" className="block">
                <Button 
                  variant="outline" 
                  className="w-full border-gray-200 hover:bg-gray-50 h-12 text-base font-semibold rounded-xl flex items-center justify-center gap-2"
                >
                  <UserPlus className="w-5 h-5" />
                  Create Account
                </Button>
              </Link>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <p className="text-xs text-center text-gray-400">
                By continuing, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Quick Links */}
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-2">Quick Access:</p>
          <div className="flex gap-4 justify-center">
            <Link href="/dashboard" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
              Dashboard
            </Link>
            <Link href="/students" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
              Students
            </Link>
            <Link href="/course-data" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
              Course Data
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
