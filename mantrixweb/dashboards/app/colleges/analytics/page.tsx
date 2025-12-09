"use client";

import React from "react";
import { Search, Users, BookOpen, TrendingUp, Target } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface StatCardProps {
    label: string;
    value: string;
    subtext?: string;
    icon: React.ElementType;
    iconColor: string;
}

function StatCard({ label, value, subtext, icon: Icon, iconColor }: StatCardProps) {
    return (
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gray-50 ${iconColor}`}>
                    <Icon className="w-6 h-6" />
                </div>
            </div>
            <div>
                <p className="text-sm font-bold text-gray-500 mb-1">{label}</p>
                <h3 className="text-3xl font-bold text-gray-900 mb-1">{value}</h3>
                {subtext && <p className="text-xs font-medium text-green-600">{subtext}</p>}
            </div>
        </div>
    );
}

interface CourseStat {
    id: string;
    name: string;
    seats: number;
    applications: number;
    demand: string;
    status: "High Demand" | "Moderate Demand" | "Low Demand";
}

const courseStats: CourseStat[] = [
    {
        id: "1",
        name: "B.E. Civil Engineering",
        seats: 60,
        applications: 250,
        demand: "417%",
        status: "High Demand",
    },
    {
        id: "2",
        name: "B.E. Mechanical Engineering",
        seats: 60,
        applications: 230,
        demand: "383%",
        status: "High Demand",
    },
    {
        id: "3",
        name: "B.E. Electrical Engineering",
        seats: 60,
        applications: 240,
        demand: "400%",
        status: "High Demand",
    },
    {
        id: "4",
        name: "B.E. Computer Engineering",
        seats: 60,
        applications: 400,
        demand: "667%",
        status: "High Demand",
    },
    {
        id: "5",
        name: "B.E. Electronics & Comm. Engg",
        seats: 60,
        applications: 350,
        demand: "583%",
        status: "High Demand",
    },
    {
        id: "6",
        name: "M.Tech Computer Science & Engg",
        seats: 18,
        applications: 80,
        demand: "444%",
        status: "High Demand",
    },
    {
        id: "7",
        name: "M.Tech Electronics & Comm.",
        seats: 18,
        applications: 65,
        demand: "361%",
        status: "High Demand",
    },
    {
        id: "8",
        name: "M.Tech Mechanical Engineering",
        seats: 18,
        applications: 45,
        demand: "250%",
        status: "High Demand",
    },
];

export default function AnalyticsPage() {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div>
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-6">
                    Analytics Dashboard
                </h2>

                {/* Top Stats Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <StatCard
                        label="Total Applications"
                        value="1660"
                        subtext="+12% vs last year"
                        icon={Users}
                        iconColor="text-blue-600"
                    />
                    <StatCard
                        label="Total Seats"
                        value="354"
                        icon={BookOpen}
                        iconColor="text-green-600"
                    />
                    <StatCard
                        label="Avg. Demand Ratio"
                        value="4.7x"
                        subtext="High Demand"
                        icon={TrendingUp}
                        iconColor="text-orange-600"
                    />
                    <StatCard
                        label="Occupancy Rate"
                        value="469%"
                        icon={Target}
                        iconColor="text-purple-600"
                    />
                </div>
            </div>

            {/* Course Occupancy & Demand Section */}
            <div>
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900">
                        Course Occupancy & Demand
                    </h3>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input
                            placeholder="Search course..."
                            className="pl-10 w-[300px] bg-white border-gray-200 rounded-full text-sm"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courseStats.map((course) => (
                        <div key={course.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                            <div className="flex justify-between items-start mb-4">
                                <h4 className="font-bold text-gray-900 text-sm w-2/3">
                                    {course.name}
                                </h4>
                                <Badge variant="secondary" className="bg-red-50 text-red-400 hover:bg-red-100 border-0 rounded-full px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                                    {course.status}
                                </Badge>
                            </div>

                            <div className="grid grid-cols-2 gap-y-4 pt-2">
                                <div>
                                    <p className="text-xs text-gray-400 font-bold uppercase">Seats</p>
                                    <p className="text-lg font-bold text-gray-900">{course.seats}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-gray-400 font-bold uppercase">Applications</p>
                                    <p className="text-lg font-bold text-gray-900">{course.applications}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 font-bold uppercase">Demand</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-lg font-bold text-gray-900">{course.demand}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
