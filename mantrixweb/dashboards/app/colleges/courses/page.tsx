"use client"

import React, { useMemo, useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Eye, Plus } from "lucide-react"

type Course = {
    name: string
    duration: string
    seats: number
    fees: string
    applications: number
}

const initialCourses: Course[] = [
    { name: "B.E. Civil Engineering", duration: "4 Years", seats: 60, fees: "₹22,000/Year", applications: 250 },
    { name: "B.E. Mechanical Engineering", duration: "4 Years", seats: 60, fees: "₹22,000/Year", applications: 230 },
    { name: "B.E. Electrical Engineering", duration: "4 Years", seats: 60, fees: "₹22,000/Year", applications: 240 },
    { name: "B.E. Computer Engineering", duration: "4 Years", seats: 60, fees: "₹22,000/Year", applications: 400 },
    { name: "B.E. Electronics & Comm. Engg", duration: "4 Years", seats: 60, fees: "₹22,000/Year", applications: 350 },
    { name: "M.Tech Computer Science & Engg", duration: "2 Years", seats: 18, fees: "₹35,000/Year", applications: 80 },
    { name: "M.Tech Electronics & Comm. Engg", duration: "2 Years", seats: 18, fees: "₹35,000/Year", applications: 60 },
    { name: "M.Tech Mechanical Engineering", duration: "2 Years", seats: 18, fees: "₹35,000/Year", applications: 50 },
]

export default function CoursesPage() {
    const [query, setQuery] = useState("")

    const filtered = useMemo(() => {
        if (!query.trim()) return initialCourses
        const q = query.toLowerCase()
        return initialCourses.filter((c) => c.name.toLowerCase().includes(q))
    }, [query])

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
                Course Management
            </h2>

            {/* Main Content Container matching other pages */}
            <div className="mx-auto">
                {/* Top actions */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex-1 max-w-md">
                        <div className="relative">
                            <Input
                                placeholder="Search courses..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="h-12 pl-4 pr-12 bg-white border border-gray-200 rounded-xl focus:ring-blue-100"
                            />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">Enter</span>
                        </div>
                    </div>
                    <Button className="ml-6 h-12 px-5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-md">
                        <Plus className="w-4 h-4 mr-2" />
                        Add New Course
                    </Button>
                </div>

                {/* Table */}
                <div className="overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm">
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm">
                            <thead>
                                <tr className="bg-gray-50/50 border-b border-gray-100 text-gray-600">
                                    <th className="text-left font-bold px-6 py-4">Course Name</th>
                                    <th className="text-left font-bold px-6 py-4">Duration</th>
                                    <th className="text-left font-bold px-6 py-4">Seats</th>
                                    <th className="text-left font-bold px-6 py-4">Fees</th>
                                    <th className="text-left font-bold px-6 py-4">Applications</th>
                                    <th className="text-left font-bold px-6 py-4">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {filtered.map((c, idx) => (
                                    <tr key={idx} className="hover:bg-blue-50/30 transition-colors">
                                        <td className="px-6 py-4 font-medium text-gray-900">{c.name}</td>
                                        <td className="px-6 py-4 text-gray-600">{c.duration}</td>
                                        <td className="px-6 py-4 text-gray-600">{c.seats}</td>
                                        <td className="px-6 py-4 text-gray-600 font-medium">{c.fees}</td>
                                        <td className="px-6 py-4">
                                            <span className="text-blue-600 font-medium bg-blue-50 px-2.5 py-0.5 rounded-full text-xs">
                                                {c.applications}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full h-8 px-4">
                                                <Eye className="w-3.5 h-3.5 mr-2" /> View Details
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
