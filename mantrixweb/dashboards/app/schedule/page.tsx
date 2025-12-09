"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { Sidebar } from "@/components/Sidebar"
import { Header } from "@/components/Header"
import {
    Calendar as CalendarIcon,
    Clock,
    Video,
    MoreVertical,
    ChevronLeft,
    ChevronRight,
    Mic,
    MicOff,
    VideoOff,
    PhoneOff,
    MonitorUp,
    MessageSquare,
    Users,
    // ... imports (cleaned up)
    Maximize
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

// --- Mock Data ---

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
]

const days = [
    { p: "Mon", d: 1 },
    { p: "Tue", d: 2 },
    { p: "Wed", d: 3 },
    { p: "Thu", d: 4 },
    { p: "Fri", d: 5 },
    { p: "Sat", d: 6 },
    { p: "Sun", d: 7, active: true },
    { p: "Mon", d: 8 },
    { p: "Tue", d: 9 },
    { p: "Wed", d: 10 },
    { p: "Thu", d: 11 },
    { p: "Fri", d: 12 },
    { p: "Sat", d: 13 },
    { p: "Sun", d: 14 }
]

const scheduleItems = [
    {
        id: 1,
        title: "UI Designer's Roadmap to Career Success",
        date: "Sunday, 7 December",
        startTime: "08:30",
        endTime: "10:00",
        attendees: [
            { img: "https://api.dicebear.com/7.x/avataaars/svg?seed=1" },
            { img: "https://api.dicebear.com/7.x/avataaars/svg?seed=2" },
            { img: "https://api.dicebear.com/7.x/avataaars/svg?seed=3" },
        ],
        totalAttendees: 2437,
        type: "Live Lessons",
        status: "upcoming"
    },
    {
        id: 2,
        title: "Figma Basics for beginner",
        date: "Sunday, 7 December",
        startTime: "11:15",
        endTime: "12:30",
        attendees: [
            { img: "https://api.dicebear.com/7.x/avataaars/svg?seed=4" },
            { img: "https://api.dicebear.com/7.x/avataaars/svg?seed=5" },
            { img: "https://api.dicebear.com/7.x/avataaars/svg?seed=6" },
        ],
        totalAttendees: 2437,
        type: "Live Lessons",
        status: "upcoming"
    },
    {
        id: 3,
        title: "Design Add with New Students",
        date: "Sunday, 7 December",
        startTime: "13:15",
        endTime: "14:30",
        attendees: [
            { img: "https://api.dicebear.com/7.x/avataaars/svg?seed=7" },
            { img: "https://api.dicebear.com/7.x/avataaars/svg?seed=8" },
            { img: "https://api.dicebear.com/7.x/avataaars/svg?seed=9" },
        ],
        totalAttendees: 2437,
        type: "Live Lessons",
        status: "upcoming"
    }
]

const timeSlots = [
    "08.00", "08.30", "09.00", "09.30", "10.00", "10.30", "11.00",
    "11.30", "12.00", "12.30", "01.00", "01.30", "02.00", "02.30", "03.00"
]

export default function SchedulePage() {
    const router = useRouter()
    const [selectedMonth, setSelectedMonth] = useState("December")
    const [view, setView] = useState<"Day" | "Week">("Day")
    const [isInCall, setIsInCall] = useState(false)

    return (
        <div className="flex h-screen bg-[#F8FAFC] font-sans overflow-hidden">
            <Sidebar />

            <div className="flex-1 ml-64 flex flex-col min-w-0">
                <Header title="My Schedule" />

                <main className="flex-1 p-8 overflow-y-auto">
                    {/* Main Card Container */}
                    <div className="bg-white rounded-[40px] shadow-sm p-8 min-h-full">

                        {/* Calendar Controls Header */}
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-4">
                            <h2 className="text-2xl font-bold text-gray-900">December 07, 2025</h2>

                            <div className="flex bg-gray-50 p-1.5 rounded-2xl">
                                <button
                                    onClick={() => setView("Day")}
                                    className={cn(
                                        "px-6 py-2 rounded-xl text-sm font-semibold transition-all",
                                        view === "Day" ? "bg-white shadow-md text-gray-900" : "text-gray-400 hover:text-gray-600"
                                    )}
                                >
                                    Day
                                </button>
                                <button
                                    onClick={() => setView("Week")}
                                    className={cn(
                                        "px-6 py-2 rounded-xl text-sm font-semibold transition-all",
                                        view === "Week" ? "bg-white shadow-md text-gray-900" : "text-gray-400 hover:text-gray-600"
                                    )}
                                >
                                    Week
                                </button>
                            </div>
                        </div>

                        {/* Month Selector */}
                        <div className="flex items-center justify-center mb-8 overflow-x-auto pb-4 scrollbar-hide">
                            <div className="flex items-center gap-10 min-w-max px-2">
                                {months.map((month) => (
                                    <button
                                        key={month}
                                        onClick={() => setSelectedMonth(month)}
                                        className={cn(
                                            "text-base font-semibold transition-all relative px-2 py-1",
                                            selectedMonth === month
                                                ? "text-gray-900"
                                                : "text-gray-500 hover:text-gray-800"
                                        )}
                                    >
                                        {month}
                                        {selectedMonth === month && (
                                            <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gray-900 rounded-full" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Days Strip */}
                        <div className="flex justify-between items-center mb-12 overflow-x-auto pb-4 px-2">
                            {days.map((day, idx) => (
                                <div key={idx} className="flex flex-col items-center gap-3 min-w-[60px] group cursor-pointer">
                                    <span className={cn(
                                        "text-sm font-bold transition-colors",
                                        day.active ? "text-gray-900" : "text-gray-500 group-hover:text-gray-700"
                                    )}>{day.d}</span>
                                    <button
                                        className={cn(
                                            "w-14 h-16 rounded-[20px] flex flex-col items-center justify-center text-sm font-bold transition-all shadow-sm border",
                                            day.active
                                                ? "bg-[#0F172A] text-white border-[#0F172A] shadow-xl shadow-gray-200 transform scale-110"
                                                : "bg-white text-gray-600 border-gray-100 hover:border-gray-200 hover:bg-gray-50 hover:text-gray-900"
                                        )}
                                    >
                                        {day.p}
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Timeline & Schedule Cards */}
                        <div className="relative pl-16">
                            {/* Background Grid Lines */}
                            <div className="absolute inset-0 pointer-events-none">
                                {timeSlots.map((time, idx) => (
                                    <div key={idx} className="h-24 border-t border-dashed border-gray-100 w-full relative">
                                        <span className="absolute -left-16 -top-3 text-xs text-gray-300 font-medium w-10 text-right">
                                            {time}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Event Cards Placement */}
                            <div className="relative pt-6 space-y-24">
                                {scheduleItems.map((item) => (
                                    <div key={item.id} className="relative z-10">
                                        <div className="flex flex-col md:flex-row gap-4 p-6 bg-white border border-gray-100 rounded-3xl shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all duration-300 group">
                                            {/* Left: Indicator Line */}
                                            <div className="absolute left-0 top-6 bottom-6 w-1.5 bg-blue-500 rounded-r-lg"></div>

                                            {/* Content */}
                                            <div className="flex-1 ml-4">
                                                <div className="flex justify-between items-start mb-2">
                                                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                                        {item.title}
                                                    </h3>
                                                    <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-wider rounded-lg">
                                                        {item.type}
                                                    </span>
                                                </div>

                                                <div className="flex items-center gap-4 text-xs text-gray-500 mb-6">
                                                    <div className="flex items-center gap-1.5">
                                                        <CalendarIcon className="w-4 h-4 text-gray-400" />
                                                        {item.date}
                                                    </div>
                                                    <div className="flex items-center gap-1.5">
                                                        <Clock className="w-4 h-4 text-gray-400" />
                                                        Time: {item.startTime} to {item.endTime}
                                                    </div>
                                                </div>

                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-3">
                                                        <div className="flex -space-x-3">
                                                            {item.attendees.map((att, i) => (
                                                                <Avatar key={i} className="w-8 h-8 border-2 border-white">
                                                                    <AvatarImage src={att.img} />
                                                                    <AvatarFallback>U</AvatarFallback>
                                                                </Avatar>
                                                            ))}
                                                        </div>
                                                        <span className="text-xs text-gray-400 font-medium">
                                                            and {item.totalAttendees} others registered
                                                        </span>
                                                    </div>

                                                    <Button
                                                        onClick={() => setIsInCall(true)}
                                                        className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 h-10 text-sm font-semibold shadow-lg shadow-blue-200/50 transition-all hover:translate-y-[-2px]"
                                                    >
                                                        <Video className="w-4 h-4 mr-2" />
                                                        Join Call
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </main>
            </div>

            {/* Video Call Overlay */}
            {isInCall && (
                <VideoCallOverlay onClose={() => setIsInCall(false)} />
            )}
        </div>
    )
}

function VideoCallOverlay({ onClose }: { onClose: () => void }) {
    const router = useRouter()
    const [isMicOn, setIsMicOn] = useState(true)
    const [isCameraOn, setIsCameraOn] = useState(true)
    const [showMoreMenu, setShowMoreMenu] = useState(false)

    const handleFullPage = () => {
        router.push('/meeting')
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8 animate-in fade-in duration-200">
            <div className="w-full max-w-6xl aspect-video bg-gray-900 rounded-[32px] overflow-hidden relative shadow-2xl flex flex-col group">

                {/* Main Video Generation / Content */}
                <div className="relative flex-1 bg-gray-800">
                    {/* Main User Feed */}
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop"
                            alt="Conference Host"
                            className="w-full h-full object-cover opacity-90"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60"></div>
                    </div>

                    {/* Host Label */}
                    <div className="absolute bottom-32 left-8 bg-black/40 backdrop-blur-md text-white px-4 py-2 rounded-xl text-sm font-medium border border-white/10">
                        Jane Cooper (Host)
                    </div>

                    {/* User PIP (Picture in Picture) */}
                    <div className="absolute bottom-32 right-8 w-64 h-40 bg-gray-700 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
                        {isCameraOn ? (
                            <img
                                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=2574&auto=format&fit=crop"
                                alt="You"
                                className="w-full h-full object-cover transform scale-x-[-1]"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gray-800 text-gray-500">
                                <div className="flex flex-col items-center gap-2">
                                    <div className="bg-gray-700 p-3 rounded-full">
                                        <VideoOff className="w-6 h-6" />
                                    </div>
                                    <span className="text-xs">Camera Off</span>
                                </div>
                            </div>
                        )}
                        <div className="absolute bottom-3 left-3 text-xs font-medium text-white drop-shadow-md">You</div>
                    </div>
                </div>

                {/* Footer Controls */}
                <div className="bg-[#1C1C1E] h-24 px-8 flex items-center justify-between shrink-0 relative z-20">
                    {/* Left placeholder if needed */}
                    <div className="hidden md:flex items-center gap-4 text-white/50 text-sm font-medium">
                        <span>10:30 AM</span>
                        <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                        <span>ui-design-class</span>
                    </div>

                    {/* Center Controls */}
                    <div className="flex items-center gap-4 absolute left-1/2 -translate-x-1/2">
                        <button
                            onClick={() => setIsMicOn(!isMicOn)}
                            className={cn(
                                "p-4 rounded-full transition-all duration-200",
                                isMicOn ? "bg-gray-800 text-white hover:bg-gray-700 hover:scale-105" : "bg-red-500/10 text-red-500 hover:bg-red-500/20"
                            )}
                        >
                            {isMicOn ? <Mic className="w-6 h-6" /> : <MicOff className="w-6 h-6" />}
                        </button>

                        <button
                            onClick={() => setIsCameraOn(!isCameraOn)}
                            className={cn(
                                "p-4 rounded-full transition-all duration-200",
                                isCameraOn ? "bg-gray-800 text-white hover:bg-gray-700 hover:scale-105" : "bg-red-500/10 text-red-500 hover:bg-red-500/20"
                            )}
                        >
                            {isCameraOn ? <Video className="w-6 h-6" /> : <VideoOff className="w-6 h-6" />}
                        </button>

                        <button className="p-4 rounded-full bg-gray-800 text-white hover:bg-gray-700 hover:scale-105 transition-all duration-200">
                            <MonitorUp className="w-6 h-6" />
                        </button>

                        <button
                            onClick={onClose}
                            className="px-8 h-14 bg-red-600 hover:bg-red-700 text-white rounded-full font-bold flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-red-900/20 mx-2"
                        >
                            <PhoneOff className="w-5 h-5" />
                            End Call
                        </button>

                        <button className="p-4 rounded-full bg-gray-800 text-white hover:bg-gray-700 hover:scale-105 transition-all duration-200">
                            <MessageSquare className="w-6 h-6" />
                        </button>

                        <button className="p-4 rounded-full bg-gray-800 text-white hover:bg-gray-700 hover:scale-105 transition-all duration-200">
                            <Users className="w-6 h-6" />
                        </button>

                        <div className="relative">
                            <button
                                onClick={() => setShowMoreMenu(!showMoreMenu)}
                                className="p-4 rounded-full bg-gray-800 text-white hover:bg-gray-700 hover:scale-105 transition-all duration-200"
                            >
                                <MoreVertical className="w-6 h-6" />
                            </button>

                            {/* More Menu Dropdown */}
                            {showMoreMenu && (
                                <div className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 w-48 bg-gray-800 border border-gray-700 rounded-2xl shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                                    <button
                                        onClick={handleFullPage}
                                        className="w-full px-4 py-3 flex items-center gap-3 text-white hover:bg-gray-700 transition-colors text-sm font-medium"
                                    >
                                        <Maximize className="w-4 h-4" />
                                        Full Page View
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right placeholder */}
                    <div></div>
                </div>

            </div>
        </div>
    )
}
