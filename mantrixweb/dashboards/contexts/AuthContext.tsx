"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import {
  User,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth"
import { doc, getDoc, setDoc } from "firebase/firestore"
import { auth, db } from "@/lib/firebase"

interface UserData {
  email: string
  name: string
  role: "Mentor" | "Admin" | "College" | "User" | "Parent"
}

interface AuthContextType {
  user: User | null
  userData: UserData | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, name: string, role: "Mentor" | "Admin" | "College" | "User" | "Parent") => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [userData, setUserData] = useState<UserData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser)
        // Fetch user data from Firestore
        const userDoc = await getDoc(doc(db, "users", firebaseUser.uid))
        if (userDoc.exists()) {
          setUserData(userDoc.data() as UserData)
        }
      } else {
        setUser(null)
        setUserData(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const signIn = async (email: string, password: string) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    const userDoc = await getDoc(doc(db, "users", userCredential.user.uid))
    if (userDoc.exists()) {
      const data = userDoc.data() as UserData
      setUserData(data)
      // Redirect will happen via useEffect in ProtectedRoute or page
      if (typeof window !== "undefined") {
        redirectByRole(data.role)
      }
    } else {
      throw new Error("User data not found")
    }
  }

  const signUp = async (
    email: string,
    password: string,
    name: string,
    role: "Mentor" | "Admin" | "College" | "User" | "Parent"
  ) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const userData: UserData = { email, name, role }

    // Save user data to Firestore
    await setDoc(doc(db, "users", userCredential.user.uid), userData)
    setUserData(userData)

    // Redirect will happen via useEffect
    if (typeof window !== "undefined") {
      redirectByRole(role)
    }
  }

  const logout = async () => {
    await signOut(auth)
    setUser(null)
    setUserData(null)
    if (typeof window !== "undefined") {
      window.location.href = "/"
    }
  }

  const redirectByRole = (role: "Mentor" | "Admin" | "College" | "User" | "Parent") => {
    if (typeof window === "undefined") return
    switch (role) {
      case "Mentor":
        window.location.href = "/dashboard"
        break
      case "Admin":
        window.location.href = "/government/dashboard"
        break
      case "College":
        window.location.href = "/colleges/dashboard"
        break
      case "User":
        window.location.href = "/user/dashboard"
        break
      case "Parent":
        window.location.href = "/parent/dashboard"
        break
    }
  }

  return (
    <AuthContext.Provider value={{ user, userData, loading, signIn, signUp, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

