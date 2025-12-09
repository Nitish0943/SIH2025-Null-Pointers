"use client"

import React, { useEffect, useState } from "react"
import { Search, Heart, Star, Clock, Grid, PlayCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/Header"
import { UserSidebar } from "@/components/UserSidebar"
import { db } from "@/lib/firebase"
import { collection, getDocs, query } from "firebase/firestore"

interface CourseData {
    category: string;
    createdAt: string;
    description: string;
    duration: string;
    thumbnailPath: string;
    thumbnailUrl: string;
    title: string;
    videoPath: string;
    videoUrl: string;
    // Optional Fallback fields
    level?: string;
    rating?: number;
    students?: string;
    textColor?: string;
    color?: string;
}

export default function CourseSearchPage() {
    const [courses, setCourses] = useState<CourseData[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [showAllCategories, setShowAllCategories] = useState(false);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const q = query(collection(db, "courses"));
                const querySnapshot = await getDocs(q);

                const courseList: CourseData[] = [];
                querySnapshot.forEach((doc) => {
                    const data = doc.data() as CourseData;
                    courseList.push({
                        ...data,
                        level: "Beginner",
                        rating: 4.5,
                        students: "10k",
                        textColor: "text-blue-600",
                        color: "bg-blue-100"
                    });
                });

                if (courseList.length > 0) {
                    setCourses(courseList);
                } else {
                    setCourses([]);
                }
            } catch (error) {
                console.error("Error fetching courses:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    // Extract unique categories dynamically
    const categories = ["All", ...Array.from(new Set(courses.map(c => c.category))).filter(Boolean)];

    const filteredCourses = courses.filter(course => {
        const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (course.description || "").toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="flex h-full bg-[#F8FAFC]">
            <UserSidebar />
            <div className="flex-1 flex flex-col min-h-0 ml-64">
                <Header title="Find Courses" />
                <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">

                    {/* Top Section */}
                    <div className="max-w-4xl space-y-6">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-sm font-medium text-gray-500 mb-1">Search</p>
                            </div>
                            <button className="p-2 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors">
                                <Grid className="w-5 h-5 text-gray-600" />
                            </button>
                        </div>

                        {/* Search Bar */}
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <Input
                                placeholder="Search courses, topics..."
                                className="pl-11 h-12 bg-gray-50 border-gray-100 rounded-2xl focus:bg-white transition-all text-base shadow-sm"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        {/* Filter Chips */}
                        <div className="flex flex-wrap gap-3">
                            {categories.slice(0, showAllCategories ? undefined : 7).map((cat, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all shadow-sm ${selectedCategory === cat
                                        ? "bg-blue-600 text-white border-blue-600"
                                        : "bg-white border-gray-100 text-gray-600 hover:bg-gray-50 border"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}

                            {categories.length > 7 && (
                                <button
                                    onClick={() => setShowAllCategories(!showAllCategories)}
                                    className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                                >
                                    {showAllCategories ? "Show less" : `+ ${categories.length - 7} more`}
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Course List */}
                    <div className="max-w-8xl space-y-4">
                        <div className="flex justify-between items-end">
                            <h2 className="text-xl font-bold text-gray-900">
                                {loading ? "Loading Courses..." : `${filteredCourses.length} Courses Found`}
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredCourses.map((course, index) => (
                                <Card key={index} className="border-none shadow-sm hover:shadow-md transition-all duration-200 rounded-3xl overflow-hidden bg-white group cursor-pointer h-full">
                                    <CardContent className="p-0 h-full flex flex-col">

                                        {/* Thumbnail Image */}
                                        <div className="relative h-48 w-full overflow-hidden">
                                            <img
                                                src={course.thumbnailUrl || "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&q=80"}
                                                alt={course.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                                            <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white text-gray-400 hover:text-red-500 transition-colors z-10">
                                                <Heart className="w-5 h-5" />
                                            </button>
                                            <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md text-white text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1">
                                                <PlayCircle className="w-3 h-3" />
                                                {course.duration}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-5 flex-1 flex flex-col">
                                            <div className="flex justify-between items-start mb-2">
                                                <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-lg">
                                                    {course.category}
                                                </Badge>
                                                <div className="flex items-center text-xs font-semibold text-gray-500 bg-gray-50 px-2 py-1 rounded-lg">
                                                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500 mr-1" />
                                                    {course.rating || 4.5}
                                                </div>
                                            </div>

                                            <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight line-clamp-2">
                                                {course.title}
                                            </h3>

                                            <p className="text-sm text-gray-500 line-clamp-2 mb-4">
                                                {course.description || "No description available for this course."}
                                            </p>

                                            <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between text-xs text-gray-400 font-medium">
                                                <span>{new Date(course.createdAt).toLocaleDateString() || "Recently Added"}</span>
                                                <span className="text-blue-600 font-bold hover:underline">Watch Now</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}

                            {!loading && courses.length === 0 && (
                                <div className="col-span-full py-12 text-center text-gray-500">
                                    No courses found in the database.
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
