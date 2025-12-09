"use client"

import React from "react"
import {
    User,
    Linkedin,
    Trash2,
    Plus
} from "lucide-react"
import { Button } from "@/components/ui/button"

const alumniData = [
    {
        name: "Er. Rajesh Sharma",
        role: "Senior Software Engineer",
        company: "Google",
        batch: "2010",
        degree: "B.E. Computer Engineering",
        quote: "GCET Jammu gave me the technical foundation to succeed in the tech industry.",
    },
    {
        name: "Er. Priya Gupta",
        role: "Project Manager",
        company: "L&T Construction",
        batch: "2012",
        degree: "B.E. Civil Engineering",
        quote: "The practical exposure at GCET was invaluable for my career in civil engineering.",
    },
    {
        name: "Er. Amit Singh",
        role: "Assistant Executive Engineer",
        company: "JKPDD",
        batch: "2008",
        degree: "B.E. Electrical Engineering",
        quote: "Proud to be an alumnus of the first engineering college in Jammu.",
    },
]

export default function AlumniPage() {
    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            {/* Page Heading & Controls */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Alumni Management</h2>
                    <p className="text-gray-500 text-sm mt-1">Connect with and manage alumni network</p>
                </div>

                <div className="flex items-center gap-3 mt-4 md:mt-0">
                    <Button variant="outline" className="h-10 rounded-xl bg-white border-gray-200 text-gray-600 hover:bg-gray-50 font-medium">
                        Directory
                    </Button>
                    <div className="relative">
                        <Button variant="outline" className="h-10 rounded-xl bg-white border-gray-200 text-gray-600 hover:bg-gray-50 font-medium pr-8">
                            Requests
                        </Button>
                        <span className="absolute top-1/2 -translate-y-1/2 right-3 w-5 h-5 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white">
                            1
                        </span>
                    </div>
                    <Button className="h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-xl gap-2 font-semibold shadow-md">
                        <Plus className="w-4 h-4" />
                        Add Alumni
                    </Button>
                </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
                {alumniData.map((alumni, index) => (
                    <div key={index} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                                <User className="w-6 h-6 text-gray-600" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">{alumni.name}</h3>
                                <p className="text-sm text-gray-600 font-medium mt-0.5">{alumni.role}</p>
                                <p className="text-sm text-gray-500 mt-0.5">{alumni.company}</p>
                            </div>
                        </div>

                        <div className="space-y-1 mb-6">
                            <div className="text-sm">
                                <span className="font-semibold text-gray-900">Batch:</span>
                                <span className="text-gray-600 ml-1">{alumni.batch}</span>
                            </div>
                            <div className="text-sm">
                                <span className="font-semibold text-gray-900">Degree:</span>
                                <span className="text-gray-600 ml-1">{alumni.degree}</span>
                            </div>
                        </div>

                        <div className="bg-gray-50/50 rounded-xl p-4 mb-6 italic text-sm text-gray-600 leading-relaxed min-h-[80px]">
                            "{alumni.quote}"
                        </div>

                        <div className="flex items-center justify-between pt-2">
                            <a href="#" className="flex items-center gap-2 text-blue-500 hover:text-blue-600 text-sm font-semibold transition-colors">
                                <Linkedin className="w-4 h-4" />
                                LinkedIn Profile
                            </a>
                            <button className="text-gray-400 hover:text-red-500 transition-colors p-2 hover:bg-red-50 rounded-full">
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
