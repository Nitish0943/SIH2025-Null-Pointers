"use client"

import React, { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Users, Settings, ShieldCheck, LogOut, ChevronDown, ChevronUp } from "lucide-react"

export function ParentSidebar() {
    const pathname = usePathname()
    const [isChildrenOpen, setIsChildrenOpen] = useState(false)

    // Mock data for children - Set to empty as requested for the "no card" state
    const children: any[] = []
    // Example populated data for future reference:
    // const children = [
    //     { id: 1, name: "Rahul Sharma", grade: "10th Grade", image: "https://i.pravatar.cc/150?u=rahul", href: "/parent/child/1" },
    //     { id: 2, name: "Priya Sharma", grade: "12th Grade", image: "https://i.pravatar.cc/150?u=priya", href: "/parent/child/2" }
    // ]

    return (
        <aside className="w-64 bg-white border-r border-gray-100 flex flex-col shrink-0 fixed h-full z-20">
            <div className="p-8 flex items-center justify-between">
                <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">Mantrix</h1>
                <ShieldCheck className="w-5 h-5 text-blue-600" />
            </div>

            <nav className="flex-1 px-4 space-y-2">

                {/* Home Link */}
                <Link
                    href="/parent/dashboard"
                    className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 ${pathname === "/parent/dashboard"
                            ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                            : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                        }`}
                >
                    <Home className={`w-5 h-5 ${pathname === "/parent/dashboard" ? "text-white" : "text-gray-400"}`} />
                    <span>Home</span>
                </Link>

                {/* Children Dropdown */}
                <div className="flex flex-col gap-1">
                    <button
                        onClick={() => setIsChildrenOpen(!isChildrenOpen)}
                        className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 ${isChildrenOpen ? "bg-gray-50 text-gray-900" : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                            }`}
                    >
                        <div className="flex items-center gap-3">
                            <Users className="w-5 h-5 text-gray-400" />
                            <span>Children</span>
                        </div>
                        {isChildrenOpen ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                    </button>

                    {/* Children Cards Dropdown */}
                    {isChildrenOpen && (
                        <div className="pl-4 pr-2 py-2 space-y-2 animate-in slide-in-from-top-2 duration-200">
                            {children.length > 0 ? (
                                children.map((child) => (
                                    <Link
                                        key={child.id}
                                        href={child.href}
                                        className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-xl hover:border-blue-200 hover:shadow-sm transition-all group"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden shrink-0 border border-gray-200">
                                            <img src={child.image} alt={child.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1 min-w-0 text-left">
                                            <div className="text-sm font-bold text-gray-900 truncate group-hover:text-blue-600 transition-colors">{child.name}</div>
                                            <div className="text-xs text-gray-500 truncate">{child.grade}</div>
                                        </div>
                                    </Link>
                                ))
                            ) : (
                                <div className="p-3 text-sm text-gray-400 text-center italic border border-dashed border-gray-200 rounded-xl">
                                    No children linked
                                </div>
                            )}
                        </div>
                    )}
                </div>

            </nav>

            <div className="p-6 border-t border-gray-50">
                <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors mb-2">
                    <Settings className="w-5 h-5" />
                    <span>Settings</span>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-500 hover:bg-red-50 hover:text-red-600 rounded-xl transition-colors">
                    <LogOut className="w-5 h-5" />
                    <span>Log Out</span>
                </button>
            </div>
        </aside>
    )
}
