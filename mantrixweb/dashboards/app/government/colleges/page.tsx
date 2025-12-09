"use client"

import React from "react"
import {
    GraduationCap,
    TrendingUp,
    Building2,
    Award,
    Search
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    AreaChart,
    Area
} from "recharts"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"

// --- Mock Data ---

const sparklineData1 = [
    { value: 100 }, { value: 120 }, { value: 130 }, { value: 140 }, { value: 160 }, { value: 180 }, { value: 200 }
]
const sparklineData2 = [
    { value: 10 }, { value: 11 }, { value: 12 }, { value: 13 }, { value: 14 }, { value: 15 }, { value: 16 }
]
const sparklineData3 = [ // Flat
    { value: 100 }, { value: 100 }, { value: 100 }, { value: 100 }, { value: 100 }, { value: 100 }, { value: 100 }
]
const sparklineData4 = [
    { value: 50 }, { value: 60 }, { value: 55 }, { value: 70 }, { value: 80 }, { value: 90 }, { value: 110 }
]

const mainChartData = [
    { year: "2020-21", total: 380000, state: 220000, district: 180000 },
    { year: "2021-22", total: 410000, state: 230000, district: 190000 },
    { year: "2022-23", total: 430000, state: 235000, district: 200000 },
    { year: "2023-24", total: 450000, state: 240000, district: 210000 },
    { year: "2024-25", total: 485230, state: 250000, district: 230000 },
]

export default function CollegesPage() {
    return (
        <div className="flex flex-col h-full">

            {/* Header Section */}
            <div className="bg-white text-gray-900 p-6 shadow-md z-10 shrink-0 border-b border-gray-100">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <div className="flex items-center gap-3 mb-1">
                            <GraduationCap className="w-8 h-8 text-blue-600" />
                            <h1 className="text-2xl font-bold tracking-tight text-gray-900">Government College Admission Analytics Dashboard</h1>
                        </div>
                        <p className="text-gray-600 text-sm font-medium ml-11">Department of Higher Education | Government of India</p>
                    </div>

                    <div className="flex items-center gap-3 w-full md:w-auto">
                        <Select defaultValue="2024-25">
                            <SelectTrigger className="w-[120px] bg-blue-50 border-blue-200 text-blue-600 placeholder:text-blue-400 focus:ring-0">
                                <SelectValue placeholder="Year" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="2024-25">2024-25</SelectItem>
                                <SelectItem value="2023-24">2023-24</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select defaultValue="all">
                            <SelectTrigger className="w-[160px] bg-blue-50 border-blue-200 text-blue-600 placeholder:text-blue-400 focus:ring-0">
                                <SelectValue placeholder="District" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Districts (J&K)</SelectItem>
                                <SelectItem value="jammu">Jammu</SelectItem>
                                <SelectItem value="srinagar">Srinagar</SelectItem>
                                <SelectItem value="baramulla">Baramulla</SelectItem>
                                <SelectItem value="anantnag">Anantnag</SelectItem>
                                <SelectItem value="kupwara">Kupwara</SelectItem>
                                <SelectItem value="pulwama">Pulwama</SelectItem>
                                <SelectItem value="shopian">Shopian</SelectItem>
                                <SelectItem value="kulgam">Kulgam</SelectItem>
                                <SelectItem value="bandipora">Bandipora</SelectItem>
                                <SelectItem value="ganderbal">Ganderbal</SelectItem>
                                <SelectItem value="budgam">Budgam</SelectItem>
                                <SelectItem value="kathua">Kathua</SelectItem>
                                <SelectItem value="udhampur">Udhampur</SelectItem>
                                <SelectItem value="poonc h">Poonch</SelectItem>
                                <SelectItem value="rajouri">Rajouri</SelectItem>
                                <SelectItem value="doda">Doda</SelectItem>
                                <SelectItem value="kishtwar">Kishtwar</SelectItem>
                                <SelectItem value="ramban">Ramban</SelectItem>
                                <SelectItem value="samba">Samba</SelectItem>
                                <SelectItem value="reasi">Reasi</SelectItem>
                            </SelectContent>
                        </Select>

                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-400" />
                            <Input
                                placeholder="Search colleges..."
                                className="pl-9 bg-blue-50 border-blue-200 text-blue-600 placeholder:text-blue-400 focus-visible:ring-0 w-[200px]"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">

                {/* KPI Cards Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {/* Card 1: Total Admissions */}
                    <Card className="border-none shadow-sm rounded-xl overflow-hidden relative">
                        <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-2">
                                <p className="text-sm font-medium text-gray-500">Total Admissions</p>
                                <div className="bg-blue-50 p-2 rounded-lg text-blue-600">
                                    <GraduationCap className="w-5 h-5" />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-1">4,85,230</h3>
                            <div className="flex items-center text-xs font-medium text-emerald-600 mb-4">
                                <TrendingUp className="w-3 h-3 mr-1" />
                                <span>vs last year</span>
                            </div>

                            {/* Sparkline */}
                            <div className="h-10 -mx-6 -mb-6">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={sparklineData1}>
                                        <defs>
                                            <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                                                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <Area type="monotone" dataKey="value" stroke="#3B82F6" fill="url(#colorBlue)" strokeWidth={2} />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Card 2: YoY Change */}
                    <Card className="border-none shadow-sm rounded-xl overflow-hidden relative">
                        <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-2">
                                <p className="text-sm font-medium text-gray-500">YoY Change</p>
                                <div className="bg-blue-50 p-2 rounded-lg text-blue-600">
                                    <TrendingUp className="w-5 h-5" />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-1">+8.5%</h3>
                            <div className="flex items-center text-xs font-medium text-emerald-600 mb-4">
                                <TrendingUp className="w-3 h-3 mr-1" />
                                <span>growth rate</span>
                            </div>
                            <div className="h-10 -mx-6 -mb-6">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={sparklineData2}>
                                        <Line type="monotone" dataKey="value" stroke="#3B82F6" dot={false} strokeWidth={2} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Card 3: Colleges Covered */}
                    <Card className="border-none shadow-sm rounded-xl overflow-hidden relative">
                        <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-2">
                                <p className="text-sm font-medium text-gray-500">Colleges Covered</p>
                                <div className="bg-blue-50 p-2 rounded-lg text-blue-600">
                                    <Building2 className="w-5 h-5" />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-1">342</h3>
                            <div className="flex items-center text-xs font-medium text-emerald-600 mb-4">
                                <TrendingUp className="w-3 h-3 mr-1" />
                                <span>active Institutions</span>
                            </div>
                            <div className="h-10 -mx-6 -mb-6">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={sparklineData3}>
                                        <Line type="monotone" dataKey="value" stroke="#3B82F6" dot={false} strokeWidth={2} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Card 4: Fastest Growing */}
                    <Card className="border-none shadow-sm rounded-xl overflow-hidden relative">
                        <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-2">
                                <p className="text-sm font-medium text-gray-500">Fastest Growing</p>
                                <div className="bg-blue-50 p-2 rounded-lg text-blue-600">
                                    <Award className="w-5 h-5" />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-1">Jammu University</h3>
                            <div className="flex items-center text-xs font-medium text-emerald-600 mb-4">
                                <TrendingUp className="w-3 h-3 mr-1" />
                                <span>+24.5% growth</span>
                            </div>
                            <div className="h-10 -mx-6 -mb-6">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={sparklineData4}>
                                        <Line type="monotone" dataKey="value" stroke="#3B82F6" dot={false} strokeWidth={2} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>

                </div>

                {/* Main Chart Section */}
                <Card className="border-none shadow-sm rounded-xl p-2">
                    <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                            <h3 className="text-lg font-bold text-gray-900">Admissions Trend (Last 5 Years)</h3>

                            <div className="flex bg-gray-100 p-1 rounded-lg">
                                <button className="px-4 py-1.5 rounded-md text-xs font-semibold bg-white text-gray-900 shadow-sm transition-all">State Level</button>
                                <button className="px-4 py-1.5 rounded-md text-xs font-semibold text-gray-500 hover:text-gray-700 transition-all">District Level</button>
                                <button className="px-4 py-1.5 rounded-md text-xs font-semibold text-gray-500 hover:text-gray-700 transition-all">Course Level</button>
                            </div>
                        </div>

                        <div className="h-[400px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={mainChartData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                                    <CartesianGrid vertical={true} horizontal={true} stroke="#E2E8F0" strokeDasharray="3 3" />
                                    <XAxis
                                        dataKey="year"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#64748B', fontSize: 12 }}
                                        dy={10}
                                    />
                                    <YAxis
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#64748B', fontSize: 12 }}
                                        tickFormatter={(value) => `${value / 1000}K`}
                                    />
                                    <Tooltip
                                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="total"
                                        stroke="#0284c7"
                                        strokeWidth={3}
                                        dot={{ r: 4, fill: '#0284c7', strokeWidth: 2, stroke: '#fff' }}
                                        activeDot={{ r: 6, fill: '#0284c7', strokeWidth: 0 }}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="state"
                                        stroke="#22c55e"
                                        strokeWidth={3}
                                        dot={{ r: 4, fill: '#22c55e', strokeWidth: 2, stroke: '#fff' }}
                                        activeDot={{ r: 6, fill: '#22c55e', strokeWidth: 0 }}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="district"
                                        stroke="#eab308"
                                        strokeWidth={3}
                                        dot={{ r: 4, fill: '#eab308', strokeWidth: 2, stroke: '#fff' }}
                                        activeDot={{ r: 6, fill: '#eab308', strokeWidth: 0 }}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

            </div>
        </div>
    )
}
