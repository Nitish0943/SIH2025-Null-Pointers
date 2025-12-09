"use client"

import React, { useState, useEffect } from "react"
import { Search, ChevronLeft, Clock, Filter, ArrowLeft, Users, Star } from "lucide-react"
import { Header } from "@/components/Header"
import { UserSidebar } from "@/components/UserSidebar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import { db } from "@/lib/firebase"
import { collection, getDocs } from "firebase/firestore"

interface Mentor {
    id: string
    name: string
    role: string
    experienceLevel: string
    imageUrl: string | null
    level: string
    popularity: number
    studentsMentored: number
    tagline: string
    image: string // Computed property for UI
    bgColor?: string
}

interface Session {
    id: string
    mentor_name: string
    topic: string
    date: string
    status: "pending" | "upcoming" | "past"
    duration: string
    time: string
}

export default function MentorConnectPage() {
    const [activeTab, setActiveTab] = useState<"mentors" | "sessions">("mentors")
    const [sessionFilter, setSessionFilter] = useState<"pending" | "upcoming" | "past">("pending")
    const [mentorCategory, setMentorCategory] = useState("All")
    const [mentors, setMentors] = useState<Mentor[]>([])
    const [sessions, setSessions] = useState<Session[]>([])
    const [loading, setLoading] = useState(true)

    // Using a curated list of varied avatars for fallbacks to make it look good
    const stockAvatars = [
        "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul&backgroundColor=b6e3f4",
        "https://api.dicebear.com/7.x/avataaars/svg?seed=Nitish&backgroundColor=ffdfbf",
        "https://api.dicebear.com/7.x/avataaars/svg?seed=Anjali&backgroundColor=ffdfbf",
        "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram&backgroundColor=b6e3f4",
        "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=c0aede",
        "https://api.dicebear.com/7.x/avataaars/svg?seed=John&backgroundColor=d1d4f9",
    ]

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch Mentors
                console.log("Fetching mentors...")
                const mentorsSnap = await getDocs(collection(db, "mentors"))
                console.log("Mentors snapshot size:", mentorsSnap.size)

                const mentorsData = mentorsSnap.docs.map((doc, index) => {
                    const data = doc.data()
                    return {
                        id: doc.id,
                        name: data.name,
                        role: data.role,
                        experienceLevel: data.experienceLevel,
                        imageUrl: data.imageUrl,
                        level: data.level,
                        popularity: data.popularity,
                        studentsMentored: data.studentsMentored,
                        tagline: data.tagline,
                        image: data.imageUrl || stockAvatars[index % stockAvatars.length],
                        bgColor: "bg-gray-100"
                    } as Mentor
                })
                setMentors(mentorsData)

                // Fetch Sessions
                console.log("Fetching sessions from 'mentorsessions'...")
                const sessionsSnap = await getDocs(collection(db, "mentorsessions"))
                console.log("Sessions snapshot size:", sessionsSnap.size)

                const sessionsData = sessionsSnap.docs.map(doc => {
                    console.log("Session doc:", doc.id, doc.data())
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                }) as Session[]
                setSessions(sessionsData)

            } catch (error) {
                console.error("Error fetching data:", error)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    const categories = ["All", ...Array.from(new Set(mentors.map(m => m.role)))]

    const filteredMentors = mentorCategory === "All"
        ? mentors
        : mentors.filter(m => m.role === mentorCategory || m.role.includes(mentorCategory))

    const filteredSessions = sessions.filter(s => s.status === sessionFilter)

    return (
        <div className="flex h-full bg-[#F8FAFC]">
            <UserSidebar />
            <div className="flex-1 flex flex-col min-h-0 ml-64">
                <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
                    <div className="max-w-7xl mx-auto w-full space-y-6">

                        {/* Header logic similar to design */}
                        <div className="space-y-1">
                            <p className="text-sm text-gray-500 font-medium">Guidance from real people</p>
                            <h1 className="text-3xl font-bold text-gray-900">
                                {activeTab === "mentors" ? "Mentors to connect" : "My Sessions"}
                            </h1>
                        </div>

                        {/* Main Tab Switcher */}
                        <div className="flex bg-gray-100 p-1 rounded-full w-full">
                            <button
                                onClick={() => setActiveTab("mentors")}
                                className={`flex-1 py-2.5 rounded-full text-sm font-semibold transition-all ${activeTab === "mentors"
                                    ? "bg-white text-gray-900 shadow-sm"
                                    : "text-gray-500 hover:text-gray-700"
                                    }`}
                            >
                                Mentors
                            </button>
                            <button
                                onClick={() => setActiveTab("sessions")}
                                className={`flex-1 py-2.5 rounded-full text-sm font-semibold transition-all ${activeTab === "sessions"
                                    ? "bg-white text-gray-900 shadow-sm"
                                    : "text-gray-500 hover:text-gray-700"
                                    }`}
                            >
                                Sessions
                            </button>
                        </div>

                        {/* Content Area */}
                        {activeTab === "mentors" ? (
                            <div className="space-y-6">
                                {/* Filter Chips */}
                                <div className="space-y-3">
                                    <h3 className="text-sm font-bold text-gray-900">Filter by expertise</h3>
                                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                                        {categories.map((cat) => (
                                            <button
                                                key={cat}
                                                onClick={() => setMentorCategory(cat)}
                                                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${mentorCategory === cat
                                                    ? "bg-[#6366f1] text-white"
                                                    : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
                                                    }`}
                                            >
                                                {cat}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Mentors Grid */}
                                <div className="space-y-4">
                                    <div className="flex justify-between items-end">
                                        <h3 className="text-lg font-bold text-gray-900">
                                            {loading ? "Loading mentors..." : `${mentors.length} mentors available`}
                                        </h3>
                                        <span className="text-xs text-gray-400">Find your guide</span>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                        {filteredMentors.map((mentor) => (
                                            <Card key={mentor.id} className="border-none shadow-sm hover:shadow-md transition-all rounded-3xl overflow-hidden bg-white cursor-pointer group">
                                                <div className="p-4 flex flex-col items-center relative">

                                                    {/* Badge for Experience/Level */}
                                                    <div className="absolute top-4 right-4">
                                                        <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100 text-xs font-semibold">
                                                            {mentor.experienceLevel}
                                                        </Badge>
                                                    </div>

                                                    {/* Avatar Area */}
                                                    <div className={`w-28 h-28 rounded-full ${mentor.bgColor} mb-4 overflow-hidden relative ring-4 ring-white shadow-sm`}>
                                                        <img
                                                            src={mentor.image}
                                                            alt={mentor.name}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>

                                                    {/* Info */}
                                                    <div className="text-center w-full space-y-2">
                                                        <div>
                                                            <h3 className="text-lg font-bold text-gray-900 leading-tight">{mentor.name}</h3>
                                                            <p className="text-sm text-blue-600 font-medium">{mentor.role}</p>
                                                        </div>

                                                        {mentor.tagline && (
                                                            <p className="text-xs text-gray-500 line-clamp-2 px-2 italic">
                                                                "{mentor.tagline}"
                                                            </p>
                                                        )}

                                                        <div className="pt-3 w-full border-t border-gray-100 grid grid-cols-2 gap-2 text-center">
                                                            <div>
                                                                <p className="text-xs text-gray-400 font-medium">Students</p>
                                                                <div className="flex items-center justify-center gap-1 text-sm font-bold text-gray-700">
                                                                    <Users className="w-3.5 h-3.5 text-gray-400" />
                                                                    {mentor.studentsMentored}
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <p className="text-xs text-gray-400 font-medium">Popularity</p>
                                                                <div className="flex items-center justify-center gap-1 text-sm font-bold text-gray-700">
                                                                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                                                                    {mentor.popularity}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Card>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                {/* Session Sub-tabs */}
                                <div className="flex gap-2">
                                    {["pending", "upcoming", "past"].map((filter) => (
                                        <button
                                            key={filter}
                                            onClick={() => setSessionFilter(filter as any)}
                                            className={`flex-1 py-2 rounded-xl text-sm font-semibold capitalize transition-all ${sessionFilter === filter
                                                ? "bg-white text-gray-900 shadow-sm border border-gray-100"
                                                : "text-gray-400 hover:text-gray-600 hover:bg-gray-50"
                                                }`}
                                        >
                                            {filter}
                                        </button>
                                    ))}
                                </div>

                                {/* Sessions List */}
                                <div className="space-y-4">
                                    {filteredSessions.length > 0 ? (
                                        filteredSessions.map((session) => (
                                            <Card key={session.id} className="border-none shadow-sm hover:shadow-md transition-all rounded-2xl p-4 bg-white flex flex-col md:flex-row gap-4 items-start md:items-center">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <Badge variant={session.status === 'upcoming' ? 'default' : 'outline'} className={
                                                            session.status === 'upcoming' ? 'bg-green-600 hover:bg-green-700' :
                                                                session.status === 'pending' ? 'text-amber-600 border-amber-200 bg-amber-50' :
                                                                    'text-gray-500 border-gray-200'
                                                        }>
                                                            {session.status}
                                                        </Badge>
                                                        <span className="text-xs text-gray-400 font-medium ml-2">{session.duration}</span>
                                                    </div>
                                                    <h3 className="text-base font-bold text-gray-900 mt-1">{session.topic}</h3>
                                                    <p className="text-sm text-gray-500">with <span className="font-semibold text-gray-700">{session.mentor_name}</span></p>
                                                </div>

                                                <div className="flex items-center gap-4 w-full md:w-auto mt-2 md:mt-0">
                                                    <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-3 py-1.5 rounded-lg">
                                                        <Clock className="w-4 h-4" />
                                                        <span>{session.date} at {session.time}</span>
                                                    </div>
                                                    {session.status === 'upcoming' && (
                                                        <Button size="sm" className="rounded-lg bg-blue-600 hover:bg-blue-700">
                                                            Join
                                                        </Button>
                                                    )}
                                                </div>
                                            </Card>
                                        ))
                                    ) : (
                                        <Card className="border border-gray-100 shadow-sm rounded-2xl bg-white min-h-[300px] flex items-center justify-center">
                                            <CardContent className="flex flex-col items-center justify-center text-center p-8">
                                                <div className="w-16 h-16 rounded-full border-2 border-gray-300 flex items-center justify-center mb-4 text-gray-400">
                                                    <Clock className="w-8 h-8" />
                                                </div>
                                                <h3 className="text-gray-500 font-medium">No {sessionFilter} sessions</h3>
                                            </CardContent>
                                        </Card>
                                    )}
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    )
}
