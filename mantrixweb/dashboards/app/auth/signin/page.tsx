"use client"

import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { AlertCircle, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/contexts/AuthContext"
import Aurora from "@/components/Aurora"
import ClickSpark from "@/components/ClickSpark"

export default function SignInPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const { signIn, user } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      await signIn(email, password)
      // AuthContext handles role-based redirect
    } catch (err: any) {
      setError(err.message || "Failed to sign in")
    } finally {
      setLoading(false)
    }
  }

  // Redirect is handled by AuthContext based on user role

  return (
    <div className="min-h-screen relative overflow-hidden bg-white flex items-center justify-center p-4 font-sans">
      {/* Aurora Background - Soft & Light */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#FFFFFF", "#E0C3FC", "#8EC5FC"]} // White, Light Lavender, Light Blue
          blend={0.6}
          amplitude={0.8}
          speed={0.3}
        />
      </div>
      
      {/* Click Spark Wrapper */}
      <ClickSpark
        sparkColor='#000'
        sparkSize={8}
        sparkRadius={20}
        sparkCount={8}
        duration={400}
      >
        <div className="relative z-10 w-full max-w-[1000px] grid md:grid-cols-2 gap-8 items-center justify-items-center">
          
          {/* Left Side - Illustration/Brand (Hidden on small screens) */}
          <div className="hidden md:flex flex-col justify-center items-start p-8 lg:p-12 space-y-6">
             <div className="relative">
                {/* Abstract decorative circle */}
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                
                <h1 className="relative text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Learn to <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#3F3D56]">Grow</span>
                </h1>
             </div>
             <p className="text-lg text-gray-600 max-w-md leading-relaxed">
               Join Mantrix today and unlock your potential with the best career advice and courses.
             </p>
          </div>

          {/* Right Side - Login Form */}
          <div className="bg-white/80 backdrop-blur-xl rounded-[40px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white p-8 md:p-12 w-full max-w-md mx-auto">
            
            {/* Back Button */}
            <Link href="/" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 mb-8 transition-colors">
              <ChevronLeft className="w-4 h-4 mr-1" /> Back
            </Link>

            {/* Learn to Grow text inside card */}
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Learn to {" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#3F3D56]">Grow</span>
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Join Mantrix today and unlock your potential with the best career advice and courses.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Let's Sign In.</h2>
              <p className="text-gray-500 text-sm">Welcome back, you've been missed!</p>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-100 text-red-600 px-4 py-3 rounded-2xl flex items-center gap-2 text-sm mb-6">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Email or Phone"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-14 bg-gray-50 border-transparent focus:bg-white focus:border-[#6C63FF] focus:ring-[#6C63FF]/20 rounded-2xl px-5 text-base transition-all placeholder:text-gray-400"
                />
              </div>

              <div className="space-y-2">
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-14 bg-gray-50 border-transparent focus:bg-white focus:border-[#6C63FF] focus:ring-[#6C63FF]/20 rounded-2xl px-5 text-base transition-all placeholder:text-gray-400"
                />
                <div className="flex justify-end">
                  <Link href="#" className="text-xs font-semibold text-gray-900 hover:text-[#6C63FF] transition-colors">
                    Recovery Password
                  </Link>
                </div>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-14 bg-[#6C63FF] hover:bg-[#5a52d5] text-white text-base font-bold rounded-2xl shadow-lg shadow-indigo-200/50 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-500 text-sm">
                Don't have an account?{" "}
                <Link href="/auth/signup" className="font-bold text-gray-900 hover:text-[#6C63FF] transition-colors">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>

        </div>
      </ClickSpark>
    </div>
  )
}
