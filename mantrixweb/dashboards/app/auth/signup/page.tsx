"use client"

import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { AlertCircle, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useAuth } from "@/contexts/AuthContext"
import Aurora from "@/components/Aurora"
import ClickSpark from "@/components/ClickSpark"

export default function SignUpPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState<"Mentor" | "Admin" | "College" | "User" | "Parent">("Mentor")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const { signUp, user } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      await signUp(email, password, name, role)
      // AuthContext handles role-based redirect
    } catch (err: any) {
      setError(err.message || "Failed to create account")
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
          colorStops={["#FFFFFF", "#E0C3FC", "#8EC5FC"]}
          blend={0.6}
          amplitude={0.8}
          speed={0.3}
        />
      </div>

      <ClickSpark
        sparkColor='#000'
        sparkSize={8}
        sparkRadius={20}
        sparkCount={8}
        duration={400}
      >
        <div className="relative z-10 w-full max-w-[1000px] grid md:grid-cols-2 gap-8 items-center md:place-items-center">

          {/* Left Side - Illustration/Brand */}
          <div className="hidden md:flex flex-col justify-center items-start p-8 lg:p-12 space-y-6 order-2 md:order-1">
            <div className="relative">
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

              <h1 className="relative text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Start Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#3F3D56]">Journey</span>
              </h1>
            </div>
            <p className="text-lg text-gray-600 max-w-md leading-relaxed">
              Create an account to access personalized career guidance and tools.
            </p>
          </div>

          {/* Right Side - Sign Up Form */}
          <div className="bg-white/80 backdrop-blur-xl rounded-[40px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white p-8 md:p-12 w-full max-w-md mx-auto order-1 md:order-2 justify-self-center self-center">

            <Link href="/" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 mb-8 transition-colors">
              <ChevronLeft className="w-4 h-4 mr-1" /> Back
            </Link>


            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Create Account.</h2>
              <p className="text-gray-500 text-sm">Let's get you started!</p>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-100 text-red-600 px-4 py-3 rounded-2xl flex items-center gap-2 text-sm mb-6">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="h-14 bg-gray-50 border-transparent focus:bg-white focus:border-[#6C63FF] focus:ring-[#6C63FF]/20 rounded-2xl px-5 text-base transition-all placeholder:text-gray-400"
              />

              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-14 bg-gray-50 border-transparent focus:bg-white focus:border-[#6C63FF] focus:ring-[#6C63FF]/20 rounded-2xl px-5 text-base transition-all placeholder:text-gray-400"
              />

              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                className="h-14 bg-gray-50 border-transparent focus:bg-white focus:border-[#6C63FF] focus:ring-[#6C63FF]/20 rounded-2xl px-5 text-base transition-all placeholder:text-gray-400"
              />

              <div className="space-y-1">
                <label className="text-xs font-medium text-gray-500 ml-1">I am a...</label>
                <Select value={role} onValueChange={(value: "Mentor" | "Admin" | "College" | "User" | "Parent") => setRole(value)}>
                  <SelectTrigger className="h-14 bg-gray-50 border-transparent focus:bg-white focus:border-[#6C63FF] focus:ring-[#6C63FF]/20 rounded-2xl px-5 text-base transition-all">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl border-gray-100 shadow-lg">
                    <SelectItem value="Mentor" className="py-3 rounded-lg cursor-pointer">Mentor</SelectItem>
                    <SelectItem value="Admin" className="py-3 rounded-lg cursor-pointer">Admin</SelectItem>
                    <SelectItem value="College" className="py-3 rounded-lg cursor-pointer">College</SelectItem>
                    <SelectItem value="User" className="py-3 rounded-lg cursor-pointer">User</SelectItem>
                    <SelectItem value="Parent" className="py-3 rounded-lg cursor-pointer">Parent</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-14 bg-[#6C63FF] hover:bg-[#5a52d5] text-white text-base font-bold rounded-2xl shadow-lg shadow-indigo-200/50 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 mt-2"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  "Sign Up"
                )}
              </Button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-500 text-sm">
                Already have an account?{" "}
                <Link href="/auth/signin" className="font-bold text-gray-900 hover:text-[#6C63FF] transition-colors">
                  Sign In
                </Link>
              </p>
            </div>
          </div>

        </div>
      </ClickSpark>
    </div>
  )
}
