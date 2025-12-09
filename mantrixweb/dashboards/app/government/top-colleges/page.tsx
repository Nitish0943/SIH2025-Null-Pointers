"use client"

import React from "react"
import {
    TrendingUp,
    TrendingDown,
    Users,
    Star,
    AlertTriangle,
    Building2,
    MapPin
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function TopCollegesPage() {
    return (
        <div className="flex flex-col h-full bg-[#F8FAFC]">

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Left Column: Top Performing Colleges */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 mb-2">
                            <TrendingUp className="w-5 h-5 text-emerald-600" />
                            <h2 className="text-xl font-bold text-gray-900">Top Performing Colleges</h2>
                        </div>

                        {/* Card 1 */}
                        <Card className="border-none shadow-sm rounded-xl overflow-hidden bg-white hover:shadow-md transition-shadow">
                            <CardContent className="p-5">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-gray-400 font-medium text-sm">#1</span>
                                            <h3 className="font-bold text-gray-900">Government College for Women, Parade Ground Jammu</h3>
                                        </div>
                                        <p className="text-sm text-gray-500 mb-3 ml-6">Jammu</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="flex items-center text-emerald-600 font-bold text-sm bg-emerald-50 px-2 py-1 rounded-lg mb-1">
                                            <TrendingUp className="w-3 h-3 mr-1" />
                                            +24.5%
                                        </div>
                                        <div className="flex items-center justify-end text-xs text-gray-500 gap-1">
                                            <Users className="w-3 h-3" />
                                            4,850
                                        </div>
                                    </div>
                                </div>

                                <div className="ml-6 space-y-3">
                                    <div className="flex flex-wrap gap-2">
                                        <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100 font-normal border-blue-100">B.Sc Computer Science</Badge>
                                        <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100 font-normal border-blue-100">B.Com</Badge>
                                    </div>
                                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500">
                                        <div className="flex items-center gap-1 text-yellow-600">
                                            <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                                            <span>Modern Labs</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-yellow-600">
                                            <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                                            <span>Strong Faculty</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-yellow-600">
                                            <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                                            <span>Industry Partnerships</span>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Card 2 */}
                        <Card className="border-none shadow-sm rounded-xl overflow-hidden bg-white hover:shadow-md transition-shadow">
                            <CardContent className="p-5">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-gray-400 font-medium text-sm">#2</span>
                                            <h3 className="font-bold text-gray-900">Amar Singh College, Srinagar</h3>
                                        </div>
                                        <p className="text-sm text-gray-500 mb-3 ml-6">Srinagar</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="flex items-center text-emerald-600 font-bold text-sm bg-emerald-50 px-2 py-1 rounded-lg mb-1">
                                            <TrendingUp className="w-3 h-3 mr-1" />
                                            +18.2%
                                        </div>
                                        <div className="flex items-center justify-end text-xs text-gray-500 gap-1">
                                            <Users className="w-3 h-3" />
                                            5,200
                                        </div>
                                    </div>
                                </div>

                                <div className="ml-6 space-y-3">
                                    <div className="flex flex-wrap gap-2">
                                        <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100 font-normal border-blue-100">BA English</Badge>
                                        <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100 font-normal border-blue-100">B.Sc Chemistry</Badge>
                                    </div>
                                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500">
                                        <div className="flex items-center gap-1 text-yellow-600">
                                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                            <span>Central Location</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-yellow-600">
                                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                            <span>Experienced Faculty</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-yellow-600">
                                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                            <span>Good Library</span>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Card 3 */}
                        <Card className="border-none shadow-sm rounded-xl overflow-hidden bg-white hover:shadow-md transition-shadow">
                            <CardContent className="p-5">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-gray-400 font-medium text-sm">#3</span>
                                            <h3 className="font-bold text-gray-900">Government Degree College, Baramulla</h3>
                                        </div>
                                        <p className="text-sm text-gray-500 mb-3 ml-6">Baramulla</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="flex items-center text-emerald-600 font-bold text-sm bg-emerald-50 px-2 py-1 rounded-lg mb-1">
                                            <TrendingUp className="w-3 h-3 mr-1" />
                                            +15.8%
                                        </div>
                                        <div className="flex items-center justify-end text-xs text-gray-500 gap-1">
                                            <Users className="w-3 h-3" />
                                            3,100
                                        </div>
                                    </div>
                                </div>

                                <div className="ml-6 space-y-3">
                                    <div className="flex flex-wrap gap-2">
                                        <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100 font-normal border-blue-100">B.Sc Agriculture</Badge>
                                        <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100 font-normal border-blue-100">B.Com</Badge>
                                    </div>
                                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500">
                                        <div className="flex items-center gap-1 text-yellow-600">
                                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                            <span>Affordable Fees</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-yellow-600">
                                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                            <span>Large Campus</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-yellow-600">
                                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                            <span>Good Hostel</span>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Card 4 */}
                        <Card className="border-none shadow-sm rounded-xl overflow-hidden bg-white hover:shadow-md transition-shadow">
                            <CardContent className="p-5">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-gray-400 font-medium text-sm">#4</span>
                                            <h3 className="font-bold text-gray-900">GGM Science College, Jammu</h3>
                                        </div>
                                        <p className="text-sm text-gray-500 mb-3 ml-6">Jammu</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="flex items-center text-emerald-600 font-bold text-sm bg-emerald-50 px-2 py-1 rounded-lg mb-1">
                                            <TrendingUp className="w-3 h-3 mr-1" />
                                            +12.4%
                                        </div>
                                        <div className="flex items-center justify-end text-xs text-gray-500 gap-1">
                                            <Users className="w-3 h-3" />
                                            2,750
                                        </div>
                                    </div>
                                </div>

                                <div className="ml-6 space-y-3">
                                    <div className="flex flex-wrap gap-2">
                                        <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100 font-normal border-blue-100">B.Sc Biotechnology</Badge>
                                        <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100 font-normal border-blue-100">B.Com</Badge>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                    </div>

                    {/* Right Column: Colleges Needing Attention */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 mb-2">
                            <TrendingDown className="w-5 h-5 text-red-600" />
                            <h2 className="text-xl font-bold text-gray-900">Colleges Needing Attention</h2>
                        </div>

                        {/* Card 1 */}
                        <Card className="border-none shadow-sm rounded-xl overflow-hidden bg-white hover:shadow-md transition-shadow">
                            <CardContent className="p-5">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-gray-400 font-medium text-sm">#1</span>
                                            <h3 className="font-bold text-gray-900">Government Degree College, Kulgam</h3>
                                        </div>
                                        <p className="text-sm text-gray-500 mb-3 ml-6">Kulgam</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="flex items-center text-red-600 font-bold text-sm bg-red-50 px-2 py-1 rounded-lg mb-1">
                                            <TrendingDown className="w-3 h-3 mr-1" />
                                            -18.5%
                                        </div>
                                        <div className="flex items-center justify-end text-xs text-gray-500 gap-1">
                                            <Users className="w-3 h-3" />
                                            980
                                        </div>
                                    </div>
                                </div>

                                <div className="ml-6">
                                    <div className="flex flex-wrap gap-2">
                                        <Badge variant="secondary" className="bg-red-50 text-red-700 hover:bg-red-100 font-medium border-red-100 flex items-center gap-1">
                                            <AlertTriangle className="w-3 h-3" />
                                            Low Awareness
                                        </Badge>
                                        <Badge variant="secondary" className="bg-red-50 text-red-700 hover:bg-red-100 font-medium border-red-100 flex items-center gap-1">
                                            <AlertTriangle className="w-3 h-3" />
                                            Poor Connectivity
                                        </Badge>
                                        <Badge variant="secondary" className="bg-red-50 text-red-700 hover:bg-red-100 font-medium border-red-100 flex items-center gap-1">
                                            <AlertTriangle className="w-3 h-3" />
                                            Outdated Courses
                                        </Badge>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Card 2 */}
                        <Card className="border-none shadow-sm rounded-xl overflow-hidden bg-white hover:shadow-md transition-shadow">
                            <CardContent className="p-5">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-gray-400 font-medium text-sm">#2</span>
                                            <h3 className="font-bold text-gray-900">Government Degree College, Shopian</h3>
                                        </div>
                                        <p className="text-sm text-gray-500 mb-3 ml-6">Shopian</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="flex items-center text-red-600 font-bold text-sm bg-red-50 px-2 py-1 rounded-lg mb-1">
                                            <TrendingDown className="w-3 h-3 mr-1" />
                                            -15.2%
                                        </div>
                                        <div className="flex items-center justify-end text-xs text-gray-500 gap-1">
                                            <Users className="w-3 h-3" />
                                            720
                                        </div>
                                    </div>
                                </div>

                                <div className="ml-6">
                                    <div className="flex flex-wrap gap-2">
                                        <Badge variant="secondary" className="bg-red-50 text-red-700 hover:bg-red-100 font-medium border-red-100 flex items-center gap-1">
                                            <AlertTriangle className="w-3 h-3" />
                                            Remote Location
                                        </Badge>
                                        <Badge variant="secondary" className="bg-red-50 text-red-700 hover:bg-red-100 font-medium border-red-100 flex items-center gap-1">
                                            <AlertTriangle className="w-3 h-3" />
                                            Faculty Shortage
                                        </Badge>
                                        <Badge variant="secondary" className="bg-red-50 text-red-700 hover:bg-red-100 font-medium border-red-100 flex items-center gap-1">
                                            <AlertTriangle className="w-3 h-3" />
                                            No Hostel
                                        </Badge>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Card 3 */}
                        <Card className="border-none shadow-sm rounded-xl overflow-hidden bg-white hover:shadow-md transition-shadow">
                            <CardContent className="p-5">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-gray-400 font-medium text-sm">#3</span>
                                            <h3 className="font-bold text-gray-900">Government Degree College, Kupwara</h3>
                                        </div>
                                        <p className="text-sm text-gray-500 mb-3 ml-6">Kupwara</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="flex items-center text-red-600 font-bold text-sm bg-red-50 px-2 py-1 rounded-lg mb-1">
                                            <TrendingDown className="w-3 h-3 mr-1" />
                                            -12.8%
                                        </div>
                                        <div className="flex items-center justify-end text-xs text-gray-500 gap-1">
                                            <Users className="w-3 h-3" />
                                            890
                                        </div>
                                    </div>
                                </div>

                                <div className="ml-6">
                                    <div className="flex flex-wrap gap-2">
                                        <Badge variant="secondary" className="bg-red-50 text-red-700 hover:bg-red-100 font-medium border-red-100 flex items-center gap-1">
                                            <AlertTriangle className="w-3 h-3" />
                                            Course Mismatch
                                        </Badge>
                                        <Badge variant="secondary" className="bg-red-50 text-red-700 hover:bg-red-100 font-medium border-red-100 flex items-center gap-1">
                                            <AlertTriangle className="w-3 h-3" />
                                            Weak Placement
                                        </Badge>
                                        <Badge variant="secondary" className="bg-red-50 text-red-700 hover:bg-red-100 font-medium border-red-100 flex items-center gap-1">
                                            <AlertTriangle className="w-3 h-3" />
                                            Old Infrastructure
                                        </Badge>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Card 4 */}
                        <Card className="border-none shadow-sm rounded-xl overflow-hidden bg-white hover:shadow-md transition-shadow">
                            <CardContent className="p-5">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-gray-400 font-medium text-sm">#4</span>
                                            <h3 className="font-bold text-gray-900">Government Degree College, Poonch</h3>
                                        </div>
                                        <p className="text-sm text-gray-500 mb-3 ml-6">Poonch</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="flex items-center text-red-600 font-bold text-sm bg-red-50 px-2 py-1 rounded-lg mb-1">
                                            <TrendingDown className="w-3 h-3 mr-1" />
                                            -10.5%
                                        </div>
                                        <div className="flex items-center justify-end text-xs text-gray-500 gap-1">
                                            <Users className="w-3 h-3" />
                                            1,050
                                        </div>
                                    </div>
                                </div>

                                <div className="ml-6">
                                    <div className="flex flex-wrap gap-2">
                                        <Badge variant="secondary" className="bg-red-50 text-red-700 hover:bg-red-100 font-medium border-red-100 flex items-center gap-1">
                                            <AlertTriangle className="w-3 h-3" />
                                            Competition from Private
                                        </Badge>
                                        <Badge variant="secondary" className="bg-red-50 text-red-700 hover:bg-red-100 font-medium border-red-100 flex items-center gap-1">
                                            <AlertTriangle className="w-3 h-3" />
                                            Limited Seats
                                        </Badge>
                                        <Badge variant="secondary" className="bg-red-50 text-red-700 hover:bg-red-100 font-medium border-red-100 flex items-center gap-1">
                                            <AlertTriangle className="w-3 h-3" />
                                            No New Courses
                                        </Badge>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Card 5 */}
                        <Card className="border-none shadow-sm rounded-xl overflow-hidden bg-white hover:shadow-md transition-shadow">
                            <CardContent className="p-5">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-gray-400 font-medium text-sm">#5</span>
                                            <h3 className="font-bold text-gray-900">Government Degree College, Doda</h3>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="flex items-center text-red-600 font-bold text-sm bg-red-50 px-2 py-1 rounded-lg mb-1">
                                            <TrendingDown className="w-3 h-3 mr-1" />
                                            -8.9%
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                    </div>
                </div>

            </div>
        </div>
    )
}
