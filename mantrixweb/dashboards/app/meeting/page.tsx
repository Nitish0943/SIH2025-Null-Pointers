"use client"

import React, { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
    Mic,
    MicOff,
    Video as VideoIcon,
    VideoOff,
    PhoneOff,
    MonitorUp,
    MessageSquare,
    Users,
    MoreVertical,
    Maximize
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function MeetingPage() {
    const router = useRouter()
    const [isMicOn, setIsMicOn] = useState(true)
    const [isCameraOn, setIsCameraOn] = useState(true)
    const [showMoreMenu, setShowMoreMenu] = useState(false)

    const toggleFullScreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch((err) => {
                console.error(`Error attempting to enable fullscreen mode: ${err.message} (${err.name})`);
            });
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
        setShowMoreMenu(false)
    }

    return (
        <div className="h-screen bg-gray-900 flex flex-col overflow-hidden">

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
                {/* Left info */}
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
                        {isCameraOn ? <VideoIcon className="w-6 h-6" /> : <VideoOff className="w-6 h-6" />}
                    </button>

                    <button className="p-4 rounded-full bg-gray-800 text-white hover:bg-gray-700 hover:scale-105 transition-all duration-200">
                        <MonitorUp className="w-6 h-6" />
                    </button>

                    <button
                        onClick={() => router.push('/schedule')}
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
                                    onClick={toggleFullScreen}
                                    className="w-full px-4 py-3 flex items-center gap-3 text-white hover:bg-gray-700 transition-colors text-sm font-medium"
                                >
                                    <Maximize className="w-4 h-4" />
                                    Full Screen
                                </button>
                                {/* Add more options here if needed */}
                            </div>
                        )}
                    </div>
                </div>

                {/* Right placeholder */}
                <div></div>
            </div>

        </div>
    )
}
