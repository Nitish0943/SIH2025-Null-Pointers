"use client"

import React from "react"
import { Search, Upload, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const applications = [
    {
        name: "Rohan Kumar",
        course: "B.E. Computer Engineering",
        date: "2025-06-10",
        contact: { email: "rohan@example.com", phone: "9906012345" },
        status: "Pending",
    },
    {
        name: "Saniya Khan",
        course: "B.E. Civil Engineering",
        date: "2025-06-09",
        contact: { email: "saniya@example.com", phone: "9906012346" },
        status: "Approved",
    },
    {
        name: "Vikram Singh",
        course: "B.E. Mechanical Engineering",
        date: "2025-06-08",
        contact: { email: "vikram@example.com", phone: "9906012347" },
        status: "Rejected",
    },
    {
        name: "Anjali Sharma",
        course: "B.E. Electronics & Comm. Engg",
        date: "2025-06-07",
        contact: { email: "anjali@example.com", phone: "9906012348" },
        status: "Pending",
    },
    {
        name: "Mohd Irfan",
        course: "B.E. Electrical Engineering",
        date: "2025-06-05",
        contact: { email: "irfan@example.com", phone: "9906012349" },
        status: "Approved",
    },
]

export default function ApplicationsPage() {
    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Applications Management</h2>

            {/* Controls */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                        placeholder="Search by student or course..."
                        className="pl-12 h-12 rounded-xl border-none shadow-sm bg-white text-base focus-visible:ring-blue-500"
                    />
                </div>
                <div className="flex items-center gap-4 w-full md:w-auto">
                    <Button className="h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 gap-2 font-medium shadow-md transition-all">
                        <Upload className="w-4 h-4" />
                        Upload Applications
                    </Button>

                    <Select defaultValue="all">
                        <SelectTrigger className="w-[140px] h-12 border-none shadow-sm bg-white rounded-xl focus:ring-blue-500">
                            <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Status</SelectItem>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="approved">Approved</SelectItem>
                            <SelectItem value="rejected">Rejected</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-100">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-gray-100 bg-gray-50/30">
                                <th className="text-left py-5 px-6 text-sm font-bold text-gray-900">Student Name</th>
                                <th className="text-left py-5 px-6 text-sm font-bold text-gray-900">Course Applied</th>
                                <th className="text-left py-5 px-6 text-sm font-bold text-gray-900">Date</th>
                                <th className="text-left py-5 px-6 text-sm font-bold text-gray-900">Contact</th>
                                <th className="text-left py-5 px-6 text-sm font-bold text-gray-900">Status</th>
                                <th className="text-left py-5 px-6 text-sm font-bold text-gray-900">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {applications.map((app, index) => (
                                <tr key={index} className="border-b border-gray-50 last:border-0 hover:bg-blue-50/30 transition-colors group">
                                    <td className="py-5 px-6 text-gray-900 font-medium">{app.name}</td>
                                    <td className="py-5 px-6 text-gray-700">{app.course}</td>
                                    <td className="py-5 px-6 text-gray-600">{app.date}</td>
                                    <td className="py-5 px-6">
                                        <div className="flex flex-col">
                                            <span className="text-gray-900 text-sm font-medium">{app.contact.email}</span>
                                            <span className="text-gray-500 text-xs">{app.contact.phone}</span>
                                        </div>
                                    </td>
                                    <td className="py-5 px-6">
                                        <Badge className={`rounded-full px-3 py-1 text-xs font-semibold border-none shadow-none ${app.status === 'Pending' ? 'bg-yellow-50 text-yellow-600 hover:bg-yellow-100' :
                                            app.status === 'Approved' ? 'bg-green-50 text-green-600 hover:bg-green-100' :
                                                'bg-red-50 text-red-600 hover:bg-red-100'
                                            }`}>
                                            {app.status}
                                        </Badge>
                                    </td>
                                    <td className="py-5 px-6">
                                        <Button className="h-9 bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 text-xs font-medium shadow-md shadow-blue-100 gap-2 opacity-90 group-hover:opacity-100 transition-opacity">
                                            <Eye className="w-3.5 h-3.5" />
                                            View Details
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
