"use client"

import React from "react"
import { CheckCircle, Clock, BookOpen, TrendingUp, Award, Sparkles, ChevronRight, GraduationCap } from "lucide-react"
import { Header } from "@/components/Header"
import { UserSidebar } from "@/components/UserSidebar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function StreamPredictionPage() {
    const streams = [
        {
            title: "Science (PCB)",
            subtitle: "STREAM OPTION",
            description: "This stream aligns with your interest in Biology and Chemistry, crucial for medical and environmental science careers.",
            match: "Best Fit",
            matchColor: "bg-blue-600",
            basedOn: "10_g1, 10_g4"
        },
        {
            title: "Science (PCM)",
            subtitle: "STREAM OPTION",
            description: "This stream is suitable given your strength in Physics and interest in scientific experimentation.",
            match: "Good Fit",
            matchColor: "bg-yellow-500",
            basedOn: "10_g2, personality"
        },
        {
            title: "Commerce",
            subtitle: "STREAM OPTION",
            description: "If you consider a shift, Commerce offers a blend of analytical and creative skills applicable in various fields.",
            match: "Consider",
            matchColor: "bg-gray-400",
            basedOn: "10_g3"
        },
        {
            title: "Arts/Humanities",
            subtitle: "STREAM OPTION",
            description: "This stream could be considered if you wish to explore more creative avenues outside pure sciences.",
            match: "Consider",
            matchColor: "bg-gray-400",
            basedOn: "10_g5"
        }
    ]

    const roadmapSteps = [
        {
            title: "Immediate Focus (0-3 Months)",
            color: "bg-blue-600",
            tasks: [
                "Explore basic concepts in Biology and Chemistry through online resources.",
                "Engage in science-related projects or experiments at home."
            ]
        },
        {
            title: "Short Term (3-12 Months)",
            color: "bg-yellow-500",
            tasks: [
                "Prepare for NEET if pursuing Science (PCB) by reviewing previous exam patterns.",
                "Join a science club or workshop for practical exposure."
            ]
        },
        {
            title: "Long Term (12+ Months)",
            color: "bg-blue-400",
            tasks: [
                "Consider colleges offering courses in Medicine or Environmental Science based on NEET results.",
                "Research potential careers in fields like Medicine, Biotechnology."
            ]
        }
    ]

    const scholarships = [
        {
            title: "National Merit Scholarship",
            issuer: "Ministry of Education",
            amount: "₹50,000/year",
            score: "Match Score: 95%",
            deadline: "Deadline: 2024-12-31"
        },
        {
            title: "Pragati Scholarship for Girls",
            issuer: "AICTE",
            amount: "₹50,000/year",
            score: "Match Score: 90%",
            deadline: "Deadline: 2024-11-30"
        },
        {
            title: "Central Sector Scholarship",
            issuer: "Ministry of Education",
            amount: "₹20,000/year",
            score: "Match Score: 70%",
            deadline: "Deadline: 2024-10-15"
        }
    ]

    return (
        <div className="flex h-full bg-[#F8FAFC]">
            <UserSidebar />
            <div className="flex-1 flex flex-col min-h-0 ml-64">
                <Header title="Stream Prediction" />
                <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">

                    {/* Top Banner (Purple Card) */}
                    <div className="bg-[#2563eb] rounded-2xl p-6 md:p-8 text-white shadow-lg relative overflow-hidden">

                        {/* Decorative circles */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-10 -mb-10 blur-xl"></div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-2">
                                <h1 className="text-2xl md:text-3xl font-bold">Your Career Blueprint</h1>
                            </div>
                            <p className="text-blue-100 mb-6 max-w-xl">
                                Based on your skills and interests, we've analyzed your profile to generate this personalized roadmap.
                            </p>

                            <div className="flex flex-wrap gap-3">
                                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full text-sm font-medium border border-white/10">
                                    <CheckCircle className="w-4 h-4" />
                                    <span>Government Verified (RCS-1-98968)</span>
                                </div>
                                <div className="bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full text-sm font-medium border border-white/10">
                                    85% Match
                                </div>
                                <div className="bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full text-sm font-medium border border-white/10">
                                    Science
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-8xl space-y-8">

                        {/* Recommended Streams */}
                        <section>
                            <h2 className="text-lg font-bold text-gray-900 mb-4">Recommended Streams</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {streams.map((stream, idx) => (
                                    <Card key={idx} className="border-none shadow-sm rounded-xl overflow-hidden bg-white hover:shadow-md transition-all h-full">
                                        <CardContent className="p-5 flex flex-col h-full">
                                            <div className="flex justify-between items-start mb-2">
                                                <div>
                                                    <h3 className="text-lg font-bold text-gray-900">{stream.title}</h3>
                                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">{stream.subtitle}</span>
                                                </div>
                                                <Badge className={`${stream.matchColor} text-white border-none shrink-0`}>
                                                    {stream.match}
                                                </Badge>
                                            </div>
                                            <p className="text-sm text-gray-600 mb-4 leading-relaxed flex-1">
                                                {stream.description}
                                            </p>
                                            <div className="text-xs text-gray-400 font-medium">
                                                Based on: {stream.basedOn}
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </section>

                        {/* Your Roadmap */}
                        <section>
                            <h2 className="text-lg font-bold text-gray-900 mb-4">Your Roadmap</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {roadmapSteps.map((step, idx) => (
                                    <div key={idx} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col h-full hover:shadow-md transition-all">
                                        <div className={`w-3 h-3 rounded-full ${step.color} mb-4`}></div>
                                        <h3 className="text-base font-bold text-gray-900 mb-3">{step.title}</h3>
                                        <ul className="space-y-2 flex-1">
                                            {step.tasks.map((task, tIdx) => (
                                                <li key={tIdx} className="flex items-start gap-2 text-sm text-gray-600">
                                                    <span className="mt-1.5 w-1.5 h-1.5 bg-gray-400 rounded-full shrink-0"></span>
                                                    <span className="leading-relaxed">{task}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Government Scholarships */}
                        <section>
                            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <GraduationCap className="w-5 h-5 text-gray-500" />
                                Government Scholarships
                            </h2>
                            <div className="space-y-3">
                                {scholarships.map((sch, idx) => (
                                    <Card key={idx} className="border border-green-50 shadow-sm rounded-xl bg-green-50/30 overflow-hidden">
                                        <CardContent className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <h3 className="font-bold text-gray-900">{sch.title}</h3>
                                                    <div className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Verified</div>
                                                </div>
                                                <p className="text-xs text-gray-500 mb-2">{sch.issuer}</p>
                                                <div className="text-green-700 font-bold text-lg">{sch.amount}</div>
                                                <div className="text-xs text-gray-500 mt-1 flex gap-3">
                                                    <span className="text-green-600 font-medium">{sch.score}</span>
                                                    <span>{sch.deadline}</span>
                                                </div>
                                            </div>
                                            <ChevronRight className="w-5 h-5 text-green-600 hidden sm:block" />
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </section>

                        {/* AI Insights - Bottom Card */}
                        <section>
                            <h2 className="text-lg font-bold text-gray-900 mb-4">AI Insights</h2>
                            <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-5 md:p-6 space-y-6">

                                <div>
                                    <div className="flex items-center gap-2 mb-2 text-blue-600 font-bold text-sm uppercase tracking-wide">
                                        <TrendingUp className="w-4 h-4" />
                                        Assessment Analysis
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        The user shows a strong interest in Science (PCB) with strengths in Physics and Chemistry, alongside a creative learning style.
                                    </p>
                                </div>

                                <hr className="border-gray-100" />

                                <div>
                                    <div className="flex items-center gap-2 mb-2 text-blue-600 font-bold text-sm uppercase tracking-wide">
                                        <Sparkles className="w-4 h-4" />
                                        Why this path?
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        The recommended path stems from the user's interest in Biology and Chemistry, strength in Physics, and a preference for creative experimentation.
                                    </p>
                                </div>

                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    )
}
