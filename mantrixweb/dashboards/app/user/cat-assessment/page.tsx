"use client"

import React, { useState } from "react"
import { UserSidebar } from "@/components/UserSidebar"
import { Header } from "@/components/Header"

export default function CatAssessmentPage() {
    const [selectedOption, setSelectedOption] = useState<string | null>(null)

    return (
        <div className="flex h-full bg-[#F8FAFC]">
            <UserSidebar />
            <div className="flex-1 flex flex-col min-h-0 ml-64 bg-white">
                <Header title="Career Assessment" />

                <div className="flex-1 flex flex-col items-center justify-center p-8 max-w-4xl mx-auto w-full">

                    {/* Assessment Container (Web View - Vertical Stack) */}
                    <div className="w-full bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col min-h-[600px]">

                        {/* Top Area - Question and Info */}
                        <div className="bg-blue-600 p-10 flex flex-col relative shrink-0 text-white text-center">

                            <div className="flex items-center justify-between text-white/90 text-sm font-semibold mb-4 w-full max-w-2xl mx-auto">
                                <span>Question 1 of 15</span>
                            </div>

                            {/* Progress Bar */}
                            <div className="h-2 bg-white/20 rounded-full w-full max-w-2xl mx-auto mb-8">
                                <div className="h-full bg-white rounded-full w-[10%]"></div>
                            </div>

                            <div className="inline-flex items-center self-center bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-xs font-bold uppercase tracking-wider mb-6 w-fit mx-auto">
                                STREAMINTENT
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4 max-w-3xl mx-auto">
                                Which subject do you find most fascinating?
                            </h2>
                        </div>

                        {/* Bottom Area - Options */}
                        <div className="flex-1 bg-white p-10 flex flex-col justify-start gap-6 items-center">

                            <div className="w-full max-w-2xl space-y-4">
                                <button
                                    onClick={() => setSelectedOption("physics")}
                                    className={`w-full p-6 rounded-2xl border-2 flex items-center gap-6 transition-all group ${selectedOption === "physics"
                                        ? "border-blue-600 bg-blue-50"
                                        : "border-gray-100 hover:border-gray-200 hover:bg-gray-50"
                                        }`}
                                >
                                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center shrink-0 ${selectedOption === "physics"
                                        ? "border-blue-600"
                                        : "border-gray-300 group-hover:border-gray-400"
                                        }`}>
                                        {selectedOption === "physics" && <div className="w-4 h-4 bg-blue-600 rounded-full"></div>}
                                    </div>
                                    <span className={`font-semibold text-xl text-left ${selectedOption === "physics" ? "text-blue-800" : "text-gray-600"
                                        }`}>
                                        Physics
                                    </span>
                                </button>

                                <button
                                    onClick={() => setSelectedOption("biology")}
                                    className={`w-full p-6 rounded-2xl border-2 flex items-center gap-6 transition-all group ${selectedOption === "biology"
                                        ? "border-blue-600 bg-blue-50"
                                        : "border-gray-100 hover:border-gray-200 hover:bg-gray-50"
                                        }`}
                                >
                                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center shrink-0 ${selectedOption === "biology"
                                        ? "border-blue-600"
                                        : "border-gray-300 group-hover:border-gray-400"
                                        }`}>
                                        {selectedOption === "biology" && <div className="w-4 h-4 bg-blue-600 rounded-full"></div>}
                                    </div>
                                    <span className={`font-semibold text-xl text-left ${selectedOption === "biology" ? "text-blue-800" : "text-gray-600"
                                        }`}>
                                        Biology
                                    </span>
                                </button>
                            </div>

                            <div className="mt-8 flex justify-center w-full max-w-2xl">
                                <button
                                    className={`w-full py-4 font-bold text-lg rounded-xl transition-all shadow-sm ${selectedOption
                                            ? "bg-blue-600 text-white hover:bg-blue-700"
                                            : "bg-[#E2E8F0] text-gray-500 hover:bg-gray-200"
                                        }`}
                                >
                                    Next Question
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
