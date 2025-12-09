"use client"

import { GovernmentSidebar } from "@/components/GovernmentSidebar"
import ProtectedRoute from "@/components/ProtectedRoute"
import { useAuth } from "@/contexts/AuthContext"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"

export default function GovernmentLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const { logout, userData } = useAuth();

    return (
        <div className="flex h-screen bg-[#F8FAFC] font-sans">
            <GovernmentSidebar />
            <div className="flex-1 ml-64 min-w-0 h-full overflow-hidden flex flex-col">
                <header className="px-8 py-5 flex items-center justify-between bg-white/50 backdrop-blur-sm border-b border-gray-100/50">
                    <h1 className="text-xl font-bold text-gray-900">
                        Government Dashboard
                    </h1>
                    <div className="flex items-center gap-3">
                        <Button
                            onClick={logout}
                            variant="ghost"
                            size="sm"
                            className="text-gray-600 hover:text-gray-900"
                        >
                            <LogOut className="w-4 h-4 mr-2" />
                            Logout
                        </Button>
                        <Avatar className="w-9 h-9 bg-blue-600 text-white border-2 border-white shadow-sm">
                            <AvatarFallback className="bg-blue-600 text-white font-medium text-xs">
                                {userData?.name?.substring(0, 2).toUpperCase() || "GV"}
                            </AvatarFallback>
                        </Avatar>
                        <div className="text-left">
                            <p className="text-sm font-bold text-gray-900 leading-none">{userData?.name || "Government User"}</p>
                        </div>
                    </div>
                </header>
                <div className="flex-1 overflow-auto">
                    <ProtectedRoute>
                        {children}
                    </ProtectedRoute>
                </div>
            </div>
        </div>
    )
}
