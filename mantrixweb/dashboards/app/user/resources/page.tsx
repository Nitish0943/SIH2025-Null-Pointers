"use client"

import React, { useState } from "react"
import { Search, ChevronLeft, Play, FileText, Clock, Star, PlayCircle, Book } from "lucide-react"
import { Header } from "@/components/Header"
import { UserSidebar } from "@/components/UserSidebar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function ResourcesPage() {
    const [activeTab, setActiveTab] = useState<"video" | "ebook">("video")
    const categories = ["All", "Design", "Development", "Business", "Marketing", "Finance"]

    const resources = [
        {
            id: 1,
            title: "Basics of Environmental Science",
            category: "Science",
            duration: "45 minutes",
            rating: 4.5,
            description: "Understand the basics of ecosystems and environment.",
            type: "video"
        },
        {
            id: 2,
            title: "Basics of Computers",
            category: "Computer Fundamentals",
            duration: "45 minutes",
            rating: 4.5,
            description: "Introduction to basic computer concepts, parts, and operations.",
            type: "video"
        },
        {
            id: 3,
            title: "Intro to UI Design",
            category: "Design",
            duration: "60 minutes",
            rating: 4.8,
            description: "Learn the fundamental principles of user interface design.",
            type: "video"
        },
        {
            id: 4,
            title: "Digital Marketing 101",
            category: "Marketing",
            duration: "30 minutes",
            rating: 4.2,
            description: "Overview of digital marketing channels and strategies.",
            type: "video"
        },
        {
            id: 5,
            title: "Design Principles Handbook",
            category: "Design",
            duration: "150 pages",
            rating: 4.9,
            description: "A comprehensive guide to design theory.",
            type: "ebook"
        },
        {
            id: 6,
            title: "Coding Best Practices",
            category: "Development",
            duration: "200 pages",
            rating: 4.7,
            description: "Clean code styles and patterns.",
            type: "ebook"
        }
    ]

    const filteredResources = resources.filter(r => r.type === activeTab)

    return (
        <div className="flex h-full bg-[#F8FAFC]">
            <UserSidebar />
            <div className="flex-1 flex flex-col min-h-0 ml-64">
                <Header title="Resources Hub" />
                <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">

                    <div className="max-w-7xl mx-auto w-full space-y-6">

                        {/* Type Toggles */}
                        <div className="flex gap-4 bg-white p-1.5 rounded-2xl border border-gray-100 shadow-sm">
                            <button
                                onClick={() => setActiveTab("video")}
                                className={`flex-1 flex flex-col items-center justify-center gap-2 py-3 rounded-xl font-medium transition-all ${activeTab === "video"
                                    ? "bg-blue-50 text-blue-600"
                                    : "text-gray-400 hover:bg-gray-50 hover:text-gray-600"
                                    }`}
                            >
                                <PlayCircle className={`w-5 h-5 ${activeTab === "video" ? "fill-current" : ""}`} />
                                <span className="text-sm">Videos</span>
                            </button>
                            <button
                                onClick={() => setActiveTab("ebook")}
                                className={`flex-1 flex flex-col items-center justify-center gap-2 py-3 rounded-xl font-medium transition-all ${activeTab === "ebook"
                                    ? "bg-blue-50 text-blue-600"
                                    : "text-gray-400 hover:bg-gray-50 hover:text-gray-600"
                                    }`}
                            >
                                <Book className="w-5 h-5" />
                                <span className="text-sm">Ebooks</span>
                            </button>
                        </div>

                        {/* Categories */}
                        <div className="space-y-2">
                            <h3 className="font-bold text-lg text-gray-900">Categories</h3>
                            <div className="flex flex-wrap gap-2">
                                {categories.map((cat, idx) => (
                                    <button
                                        key={idx}
                                        className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${idx === 0
                                            ? "bg-blue-600 text-white shadow-sm"
                                            : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Resources Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {filteredResources.map((item) => (
                                <Card key={item.id} className="border-none shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden bg-white rounded-3xl flex flex-col h-full group cursor-pointer">
                                    {/* Card Header (Blue) */}
                                    <div className="bg-[#2563eb] p-8 flex flex-col items-center justify-center text-center relative min-h-[200px]">
                                        <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-4 backdrop-blur-sm group-hover:scale-110 transition-transform">
                                            {item.type === "video" ? (
                                                <Play className="w-6 h-6 text-white fill-white ml-1" />
                                            ) : (
                                                <Book className="w-6 h-6 text-white" />
                                            )}
                                        </div>
                                        <h3 className="text-xl font-bold text-white leading-tight w-full line-clamp-2">{item.title}</h3>
                                    </div>

                                    {/* Card Body */}
                                    <CardContent className="p-5 flex flex-col flex-1 gap-4">
                                        <div className="flex items-center justify-between">
                                            <Badge variant="secondary" className="bg-blue-50 text-blue-600 hover:bg-blue-100 border-none rounded-lg px-3 py-1 font-semibold">
                                                {item.category}
                                            </Badge>
                                            <div className="flex items-center gap-1 text-sm font-bold text-yellow-500">
                                                <span>{item.rating}</span>
                                                <Star className="w-4 h-4 fill-current" />
                                            </div>
                                        </div>

                                        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 flex-1">
                                            {item.description}
                                        </p>

                                        <div className="flex items-center text-xs font-medium text-gray-400 mt-auto pt-2">
                                            {item.type === "video" ? <Clock className="w-4 h-4 mr-1.5" /> : <FileText className="w-4 h-4 mr-1.5" />}
                                            {item.duration}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
