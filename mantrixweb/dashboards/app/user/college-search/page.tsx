"use client"

import React, { useEffect, useState } from "react"
import { Search, Heart } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Header } from "@/components/Header"
import { UserSidebar } from "@/components/UserSidebar"
import { db } from "@/lib/firebase"
import { collection, getDocs } from "firebase/firestore"
import Link from "next/link"

interface College {
    id: string
    college_name: string
    district: string
    major_courses: string[]
    rating_overall: number
    image?: string
    fee?: string
}

export default function CollegeSearchPage() {
    const [colleges, setColleges] = useState<College[]>([])
    const [loading, setLoading] = useState(true)
    const [selectedLocation, setSelectedLocation] = useState("All")
    const [selectedStream, setSelectedStream] = useState("All")
    const [searchQuery, setSearchQuery] = useState("")

    useEffect(() => {
        const fetchColleges = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "colleges"))
                const stockImages = [
                    "https://images.unsplash.com/photo-1562774053-701939374585?w=500&q=80",
                    "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=500&q=80",
                    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=500&q=80",
                    "https://images.unsplash.com/photo-1590012314607-689d01d45d8c?w=500&q=80",
                    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&q=80",
                    "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=500&q=80"
                ]

                const collegesData = querySnapshot.docs.map((doc, index) => {
                    const data = doc.data()
                    return {
                        id: doc.id,
                        college_name: data.college_name,
                        district: data.district,
                        major_courses: data.major_courses || [],
                        rating_overall: data.rating_overall,
                        // Fallback data since not present in screenshot
                        fee: "₹20k / yr",
                        // Use a deterministic image based on index
                        image: stockImages[index % stockImages.length]
                    } as College
                })
                setColleges(collegesData)
            } catch (error) {
                console.error("Error fetching colleges:", error)
            } finally {
                setLoading(false)
            }
        }

        fetchColleges()
    }, [])

    // Extract unique locations and streams
    // We filter out undefined/null values just in case
    const locations = ["All", ...Array.from(new Set(colleges.map(c => c.district).filter(Boolean))).sort()]
    const streams = ["All", ...Array.from(new Set(colleges.flatMap(c => c.major_courses || []).filter(Boolean))).sort()]

    const filteredColleges = colleges.filter(college => {
        const matchesSearch = (college.college_name?.toLowerCase() || "").includes(searchQuery.toLowerCase()) ||
            (college.district?.toLowerCase() || "").includes(searchQuery.toLowerCase())
        const matchesLocation = selectedLocation === "All" || college.district === selectedLocation
        const matchesStream = selectedStream === "All" || (college.major_courses || []).includes(selectedStream)

        return matchesSearch && matchesLocation && matchesStream
    })

    return (
        <div className="flex h-full bg-[#F8FAFC]">
            <UserSidebar />
            <div className="grid grids-col-2 min-h-0 ml-64 w-full">
                <Header title="Explore Colleges" />
                <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">

                    {/* Header Section */}
                    <div className="max-w-xl">
                        <p className="text-sm font-medium text-gray-500 mb-1">Colleges</p>

                        {/* Search Bar */}
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <Input
                                placeholder="Search colleges, locations, degrees..."
                                className="pl-11 h-12 bg-gray-50 border-gray-100 rounded-xl focus:bg-white transition-all text-base shadow-sm"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Filters Section */}
                    <div className="flex flex-wrap gap-4">
                        <select
                            className="bg-white border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 outline-none min-w-[150px]"
                            value={selectedLocation}
                            onChange={(e) => setSelectedLocation(e.target.value)}
                        >
                            <option value="All">All Locations</option>
                            {locations.filter(l => l !== "All").map(loc => (
                                <option key={loc} value={loc}>{loc}</option>
                            ))}
                        </select>

                        <select
                            className="bg-white border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 outline-none min-w-[150px]"
                            value={selectedStream}
                            onChange={(e) => setSelectedStream(e.target.value)}
                        >
                            <option value="All">All Streams</option>
                            {streams.filter(s => s !== "All").map(stream => (
                                <option key={stream} value={stream}>{stream}</option>
                            ))}
                        </select>
                    </div>

                    <div className="space-y-4 max-w-8xl">
                        <h2 className="text-lg font-bold text-gray-900">
                            {loading ? "Loading..." : `${filteredColleges.length} colleges found`}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {filteredColleges.map((college, index) => (
                                <Card key={college.id} className="border-none shadow-sm hover:shadow-md transition-all duration-200 rounded-2xl overflow-hidden bg-white group cursor-pointer">
                                    <div className="flex flex-row h-full">
                                        {/* Image Section */}
                                        <div className="w-28 sm:w-48 relative shrink-0">
                                            <img
                                                src={college.image || "https://images.unsplash.com/photo-1562774053-701939374585?w=500&q=80"}
                                                alt={college.college_name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        {/* Content Section */}
                                        <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between relative min-w-0">
                                            {/* Heart Icon */}
                                            <button className="absolute top-4 right-4 p-1.5 rounded-full bg-white sm:bg-transparent hover:bg-gray-50 text-gray-400 hover:text-red-500 transition-colors z-10">
                                                <Heart className="w-5 h-5" />
                                            </button>

                                            <div className="pr-8">
                                                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2 line-clamp-2 leading-snug">
                                                    {college.college_name}
                                                </h3>
                                                <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3 font-medium">
                                                    {college.district}
                                                </p>

                                                <div className="flex flex-wrap items-center text-xs sm:text-sm mb-3 text-gray-600 gap-y-1">
                                                    {/* Fee removed here */}
                                                    <span className="text-gray-500 line-clamp-1">
                                                        {college.major_courses?.slice(0, 3).join(" • ")}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-1 text-xs font-medium text-amber-500">
                                                    <span>★</span>
                                                    <span>{college.rating_overall}</span>
                                                </div>
                                            </div>

                                            <div className="mt-auto pt-1">
                                                <Link
                                                    href={`/colleges/collegeinfo?id=${college.id}`}
                                                    className="text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                                                >
                                                    View details
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
