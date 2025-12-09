"use client"

import React from "react";
import { CollegeSidebar } from "@/components/CollegeSidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useAuth } from "@/contexts/AuthContext";
import { LogOut } from "lucide-react";

export default function CollegesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { logout, userData } = useAuth();

    return (
        <div className="flex bg-gray-50 min-h-screen font-[family-name:var(--font-outfit)]">
            <CollegeSidebar />
            <main className="flex-1 ml-64">
                <header className="px-8 py-5 flex items-center justify-between bg-white/50 backdrop-blur-sm sticky top-0 z-10 border-b border-gray-100/50">
                    <h1 className="text-xl font-bold text-gray-900">
                        JAMS - GCET | Automation and Management System Dashboard
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
                                {userData?.name?.substring(0, 2).toUpperCase() || "AD"}
                            </AvatarFallback>
                        </Avatar>
                        <div className="text-left">
                            <p className="text-sm font-bold text-gray-900 leading-none">{userData?.name || "Admin User"}</p>
                        </div>
                    </div>
                </header>
                <div className="p-8">
                    <ProtectedRoute>
                        {children}
                    </ProtectedRoute>
                </div>
            </main>
        </div>
    );
}
