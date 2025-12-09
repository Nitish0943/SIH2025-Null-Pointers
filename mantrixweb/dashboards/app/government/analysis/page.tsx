"use client"

import React, { useState } from "react"
import {
    MapPin,
    BarChart3,
    Building2,
    Users,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import JKMap from "@/components/JKMap"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

// --- Mock Data ---

const districtData: Record<string, {
    name: string;
    totalColleges: number;
    totalAdmissions: string;
    yoyChange: string;
    genderDistribution: { male: number; female: number };
    coursePreference: { name: string; val: string }[];
    awarenessScore: number;
}> = {
    'all': {
        name: "State Overview",
        totalColleges: 342,
        totalAdmissions: "4,85,230",
        yoyChange: "+8.5%",
        genderDistribution: { male: 51, female: 49 },
        coursePreference: [
            { name: "Commerce", val: "29%" },
            { name: "Arts", val: "28%" },
            { name: "Science", val: "27%" },
            { name: "Engineering", val: "16%" },
        ],
        awarenessScore: 72
    },
    'srinagar': {
        name: "Srinagar",
        totalColleges: 45,
        totalAdmissions: "28,200",
        yoyChange: "+6.8%",
        genderDistribution: { male: 52, female: 48 },
        coursePreference: [
            { name: "Science", val: "35%" },
            { name: "Engineering", val: "30%" },
            { name: "Arts", val: "20%" },
            { name: "Commerce", val: "15%" },
        ],
        awarenessScore: 85
    },
    'jammu': {
        name: "Jammu",
        totalColleges: 52,
        totalAdmissions: "32,500",
        yoyChange: "+7.1%",
        genderDistribution: { male: 53, female: 47 },
        coursePreference: [
            { name: "Engineering", val: "32%" },
            { name: "Commerce", val: "28%" },
            { name: "Science", val: "25%" },
            { name: "Arts", val: "15%" },
        ],
        awarenessScore: 82
    },
    'baramulla': {
        name: "Baramulla",
        totalColleges: 28,
        totalAdmissions: "9,750",
        yoyChange: "+4.9%",
        genderDistribution: { male: 49, female: 51 },
        coursePreference: [
            { name: "Arts", val: "40%" },
            { name: "Science", val: "30%" },
            { name: "Commerce", val: "20%" },
            { name: "Education", val: "10%" },
        ],
        awarenessScore: 68
    },
    'anantnag': {
        name: "Anantnag",
        totalColleges: 30,
        totalAdmissions: "8,900",
        yoyChange: "+5.4%",
        genderDistribution: { male: 50, female: 50 },
        coursePreference: [
            { name: "Arts", val: "35%" },
            { name: "Science", val: "30%" },
            { name: "Commerce", val: "25%" },
            { name: "Medical", val: "10%" },
        ],
        awarenessScore: 70
    },
    // Default fallback for other districts (simplified for brevity)
    'default': {
        name: "District View",
        totalColleges: 15,
        totalAdmissions: "4,500",
        yoyChange: "+3.2%",
        genderDistribution: { male: 55, female: 45 },
        coursePreference: [
            { name: "Arts", val: "45%" },
            { name: "Science", val: "25%" },
            { name: "Commerce", val: "20%" },
            { name: "Vocational", val: "10%" },
        ],
        awarenessScore: 60
    }
};

export default function AnalysisPage() {
    const [selectedDistrict, setSelectedDistrict] = useState<string>("all");

    // Helper to get data for current district or default if mock data missing
    const currentData = districtData[selectedDistrict] || {
        ...districtData['default'],
        name: selectedDistrict.charAt(0).toUpperCase() + selectedDistrict.slice(1) // Capitalize name
    };

    return (
        <div className="flex flex-col h-full bg-[#F8FAFC]">

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">

                {/* Section Header */}
                <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <h2 className="text-xl font-bold text-gray-900">District-Wise Analytics</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Box 1: JK Map */}
                    <Card className="border-none shadow-sm rounded-xl overflow-hidden bg-white lg:col-span-2">
                        <CardContent className="p-6 md:p-8">
                            <JKMap onSelectDistrict={(id) => setSelectedDistrict(id)} />
                        </CardContent>
                    </Card>

                    {/* Box 2: State/District Overview */}
                    <Card className="border-none shadow-sm rounded-xl overflow-hidden bg-white">
                        <CardContent className="p-6 md:p-8">
                            <div className="flex items-center gap-2 mb-6">
                                <BarChart3 className="w-5 h-5 text-blue-600" />
                                <h3 className="text-lg font-bold text-gray-900">{currentData.name} Overview</h3>
                                {selectedDistrict !== 'all' && (
                                    <button
                                        onClick={() => setSelectedDistrict('all')}
                                        className="ml-auto text-xs text-blue-600 hover:text-blue-800 underline disabled:opacity-50"
                                    >
                                        Reset to State
                                    </button>
                                )}
                            </div>
                            <div className="space-y-8">
                                {/* Key Stats */}
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-3 text-gray-600">
                                            <Building2 className="w-4 h-4" />
                                            <span className="text-sm font-medium">Total Colleges</span>
                                        </div>
                                        <span className="text-sm font-bold text-gray-900">{currentData.totalColleges}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-3 text-gray-600">
                                            <Users className="w-4 h-4" />
                                            <span className="text-sm font-medium">Total Admissions</span>
                                        </div>
                                        <span className="text-sm font-bold text-gray-900">{currentData.totalAdmissions}</span>
                                    </div>
                                    <div className="flex justify-between items-center pt-2 border-t border-gray-50">
                                        <span className="text-sm font-medium text-gray-600">YoY Change</span>
                                        <Badge className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-3 py-0.5 text-xs font-bold">
                                            {currentData.yoyChange}
                                        </Badge>
                                    </div>
                                </div>

                                {/* Gender Distribution */}
                                <div className="space-y-3">
                                    <p className="text-sm font-semibold text-gray-500">Gender Distribution</p>
                                    <div className="space-y-1">
                                        <div className="flex justify-between text-xs mb-1.5">
                                            <span className="font-medium text-gray-700">Male</span>
                                            <span className="font-bold text-gray-900">{currentData.genderDistribution.male}%</span>
                                        </div>
                                        <Progress value={currentData.genderDistribution.male} className="h-2 bg-blue-100" indicatorClassName="bg-blue-600" />
                                    </div>
                                    <div className="space-y-1 pt-2">
                                        <div className="flex justify-between text-xs mb-1.5">
                                            <span className="font-medium text-gray-700">Female</span>
                                            <span className="font-bold text-gray-900">{currentData.genderDistribution.female}%</span>
                                        </div>
                                        <Progress value={currentData.genderDistribution.female} className="h-2 bg-blue-100" indicatorClassName="bg-blue-500" />
                                    </div>
                                </div>

                                {/* Course Preference */}
                                <div className="space-y-3">
                                    <p className="text-sm font-semibold text-gray-500">Course Preference</p>
                                    <div className="space-y-2">
                                        {currentData.coursePreference.map((course, i) => (
                                            <div key={i} className="flex justify-between items-center text-sm">
                                                <span className="text-gray-600">#{i + 1} {course.name}</span>
                                                <span className="font-bold text-gray-900">{course.val}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Awareness Score */}
                                <div className="space-y-2 pt-2">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-sm font-medium text-gray-500">Awareness Score</span>
                                        <span className="text-sm font-bold text-blue-600">{currentData.awarenessScore}/100</span>
                                    </div>
                                    <Progress value={currentData.awarenessScore} className="h-2 bg-blue-100" indicatorClassName="bg-blue-600" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
