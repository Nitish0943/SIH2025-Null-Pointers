"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Star, Maximize2 } from "lucide-react";

export default function CollegeInfoPage() {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
                    College Information
                </h2>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-200 rounded-full px-6">
                    Edit Details
                </Button>
            </div>

            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden group shadow-2xl">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{
                        backgroundImage: 'url("https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2670&auto=format&fit=crop")',
                    }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 p-8 w-full">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center p-1 shadow-lg">
                            {/* College Logo Placeholder - matching the sidebar roughly */}
                            <div className="w-full h-full rounded-full bg-blue-100 flex items-center justify-center">
                                <span className="text-blue-700 font-bold text-sm">GCET</span>
                            </div>
                        </div>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-md">
                        Government College of Engineering and Technology (GCET), Jammu
                    </h1>
                    <div className="flex flex-wrap gap-3">
                        <Badge variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-medium">
                            Government
                        </Badge>
                        <Badge variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-medium">
                            AICTE Approved
                        </Badge>
                    </div>
                </div>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Location</p>
                            <p className="text-sm font-medium text-gray-900 leading-relaxed">
                                Chak Bhalwal, Jammu, Jammu and Kashmir - 181122
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                            <Calendar className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Established</p>
                            <p className="text-sm font-medium text-gray-900 leading-relaxed">
                                1994
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                            <Star className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Rating</p>
                            <p className="text-sm font-medium text-gray-900 leading-relaxed">
                                4.2 / 5.0
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                            <Maximize2 className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Campus Size</p>
                            <p className="text-sm font-medium text-gray-900 leading-relaxed">
                                86 Acres
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">About the Institute</h3>
                <p className="text-gray-600 leading-relaxed">
                    Government College of Engineering and Technology (GCET), Jammu was established in the year 1994 under the Department of Technical Education, Govt. of Jammu and Kashmir. The institute is approved by AICTE, New Delhi and affiliated to University of Jammu, Jammu. The college runs 5 undergraduate B.E. courses in Civil Engineering, Mechanical Engineering, Electrical Engineering, Electronics & Communication Engineering and Computer Engineering.
                </p>
            </div>
        </div>
    );
}
