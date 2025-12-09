"use client"

import React, { useState } from "react"
import { Header } from "@/components/Header"
import { ParentSidebar } from "@/components/ParentSidebar"
import { Plus, UserPlus, X, Mail, CreditCard, Users } from "lucide-react"

export default function ParentDashboardPage() {
    const [showAddModal, setShowAddModal] = useState(false)

    // Mock children data - Empty by default
    const children: any[] = []

    return (
        <div className="flex h-full bg-[#F8FAFC]">
            <ParentSidebar />
            <div className="flex-1 flex flex-col min-h-0 ml-64">
                <Header title="Parent Dashboard" />
                <div className="flex-1 overflow-y-auto p-8">
                    <div className="max-w-7xl mx-auto space-y-8 h-full flex flex-col">

                        {/* Welcome Section with Add Button */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex items-center justify-between shrink-0">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back!</h2>
                                <p className="text-gray-500 text-lg">Monitor your children's progress and manage your account.</p>
                            </div>
                            <button
                                onClick={() => setShowAddModal(true)}
                                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
                            >
                                <Plus className="w-5 h-5" />
                                <span>Add Student</span>
                            </button>
                        </div>

                        {/* Main Content Area */}

                        {children.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Add Another Child Card - Only shown if User has children (and we want to add more) */}
                                <div className="border-2 border-dashed border-gray-200 rounded-3xl p-8 flex flex-col items-center justify-center text-center text-gray-400 hover:border-blue-400 hover:text-blue-500 hover:bg-blue-50 transition-all cursor-pointer group h-64" onClick={() => setShowAddModal(true)}>
                                    <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                                        <UserPlus className="w-8 h-8" />
                                    </div>
                                    <h3 className="font-bold text-lg text-gray-900 mb-1">Add Another Child</h3>
                                    <p className="text-sm">Link a new student account to your dashboard</p>
                                </div>
                            </div>
                        ) : (
                            /* No Children - Empty State */
                            <div className="flex-1 flex flex-col items-center justify-center text-center p-12 border-2 border-dashed border-gray-200 rounded-3xl bg-gray-50/50">
                                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                                    <Users className="w-10 h-10 text-gray-300" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">No Children Linked Yet</h3>
                                <p className="text-gray-500 max-w-sm mb-8">
                                    Link your child's student account to start monitoring their progress, attendance, and performance.
                                </p>

                            </div>
                        )}

                    </div>
                </div>
            </div>

            {/* Add Student Modal */}
            {showAddModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-3xl w-full max-w-lg p-8 relative shadow-2xl animate-in zoom-in-95 duration-200">
                        <div className="flex justify-between items-start mb-6">
                            <h2 className="text-2xl font-bold text-gray-900">Add Student</h2>
                            <button
                                onClick={() => setShowAddModal(false)}
                                className="p-1.5 bg-gray-100 rounded-full text-gray-500 hover:bg-gray-200 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Enter your child's email address to send a connection request. They will receive a notification to approve your request.
                        </p>

                        <div className="space-y-4">
                            {/* Student Email Input */}
                            <div className="space-y-1.5">
                                <label className="text-sm font-bold text-gray-900 ml-1">Student Email</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="email"
                                        placeholder="student@example.com"
                                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 font-medium transition-all text-gray-900"
                                    />
                                </div>
                            </div>

                            {/* Parent Aadhaar Input */}
                            <div className="space-y-1.5">
                                <label className="text-sm font-bold text-gray-900 ml-1">Parent Aadhaar Number</label>
                                <div className="relative">
                                    <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Enter Parent Aadhaar"
                                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 font-medium transition-all text-gray-900"
                                    />
                                </div>
                            </div>

                            {/* Child Aadhaar Input */}
                            <div className="space-y-1.5">
                                <label className="text-sm font-bold text-gray-900 ml-1">Child Aadhaar Number</label>
                                <div className="relative">
                                    <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Enter Child Aadhaar"
                                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 font-medium transition-all text-gray-900"
                                    />
                                </div>
                            </div>

                            <div className="flex gap-4 pt-2">
                                <button
                                    onClick={() => setShowAddModal(false)}
                                    className="flex-1 bg-gray-100 text-gray-700 font-bold py-3.5 rounded-xl hover:bg-gray-200 transition-all"
                                >
                                    Cancel
                                </button>
                                <button className="flex-1 bg-gray-300 text-white font-bold py-3.5 rounded-xl hover:bg-blue-600 transition-all cursor-pointer">
                                    Send Request
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </div>
    )
}
