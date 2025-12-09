"use client"

import React, { useState } from "react"
import { Bookmark, Star, Users, Clock, PlayCircle, ChevronLeft } from "lucide-react"
import { Header } from "@/components/Header"
import { UserSidebar } from "@/components/UserSidebar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function UserDashboardPage() {
  const [showCatAssessment, setShowCatAssessment] = useState(false)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const otherStreams = [
    {
      title: "Science (PCM)",
      description: "This stream is suitable given your strength in Physics and interest in scientific experimentation.",
      priority: "MEDIUM Priority",
      priorityColor: "bg-blue-100 text-blue-600",
    },
    {
      title: "Commerce",
      description: "If you consider a shift, Commerce offers a blend of analytical and creative skills applicable in various fields.",
      priority: "LOW Priority",
      priorityColor: "bg-sky-100 text-sky-600",
    },
    {
      title: "Arts/Humanities",
      description: "This stream could be considered if you wish to explore more creative avenues outside core sciences.",
      priority: "LOW Priority",
      priorityColor: "bg-sky-100 text-sky-600",
    }
  ]

  const recommendedCourses = [
    {
      title: "Basics of Environmental Science",
      level: "beginner level",
      levelColor: "text-blue-600",
      rating: 4.8,
      duration: "45 minutes",
      students: "8k People",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&q=80"
    },
    {
      title: "Mathematics Mastery: Building Blocks",
      level: "beginner level",
      levelColor: "text-blue-600",
      rating: 4.8,
      duration: "1 Hours",
      students: "8k People",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&q=80"
    },
    {
      title: "Introduction to Physics",
      level: "intermediate level",
      levelColor: "text-sky-600",
      rating: 4.5,
      duration: "2 Hours",
      students: "5k People",
      image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=500&q=80"
    }
  ]

  return (
    <div className="flex h-full bg-[#F8FAFC]">
      <UserSidebar />
      <div className="flex-1 flex flex-col min-h-0 ml-64">
        <Header title="My Dashboard" />
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">
          <div className="max-w-7xl mx-auto w-full space-y-8">

            {/* Trigger for CAT Assessment - Replaced the Recommended Stream with a CTA for assessment */}
            {/* Alternatively, we can add a new button or use a specific element to trigger it. 
                  Based on the user request "pop up screen to be opened in the users dashboard itself", 
                  I'll add a prominent button or card to start the assessment.
              */}

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                {/* <h2 className="text-lg font-bold text-gray-900">Recommended Stream</h2> */}
                {/* Button to trigger assessment explicitly if needed, but maybe the big card is better */}
              </div>
              {/* <div className="bg-[#2563eb] rounded-3xl p-8 text-white shadow-xl relative overflow-hidden group cursor-pointer transition-all hover:scale-[1.01]" onClick={() => setShowCatAssessment(true)}>
                <h2 className="text-2xl font-bold mb-2">Take CAT Assessment</h2>
                <p className="text-blue-100 max-w-2xl mb-6 leading-relaxed">
                  Not sure which stream to pick? Take our specific Career Assessment Test to find out your best fit!
                </p>
                <span className="inline-block bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide">
                  Start Now
                </span>
              </div> */}
            </div>

            {/* Other Stream Options */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold text-gray-900">Other Stream Options</h2>
                <button className="text-sm font-semibold text-blue-600 hover:text-blue-700">See All</button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {otherStreams.map((stream, idx) => (
                  <Card key={idx} className="border-none shadow-sm hover:shadow-md transition-all duration-200 rounded-3xl overflow-hidden bg-white h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{stream.title}</h3>
                      <p className="text-sm text-gray-500 mb-4 leading-relaxed flex-1">
                        {stream.description}
                      </p>
                      <div>
                        <span className={`inline-block px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wide ${stream.priorityColor}`}>
                          {stream.priority}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Recommended Courses */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold text-gray-900">Recommended Courses</h2>
                <button className="text-sm font-semibold text-blue-600 hover:text-blue-700">See All</button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendedCourses.map((course, idx) => (
                  <Card key={idx} className="border-none shadow-sm hover:shadow-md transition-all duration-200 rounded-3xl overflow-hidden bg-white group cursor-pointer h-full">
                    <CardContent className="p-6 relative h-full flex flex-col">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1 pr-4">
                          <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-2">{course.title}</h3>
                          <p className={`text-sm font-bold ${course.levelColor} mb-2`}>{course.level}</p>
                        </div>
                        <div className="w-16 h-16 shrink-0 rounded-xl overflow-hidden bg-gray-100">
                          <img src={course.image} alt={course.title} className="w-full h-full object-cover mix-blend-multiply" />
                        </div>
                      </div>

                      <div className="mt-auto flex items-center gap-3">
                        <div className="flex items-center bg-gray-50 px-2.5 py-1 rounded-lg text-xs font-semibold text-gray-700">
                          <Star className="w-3 h-3 text-yellow-500 fill-yellow-500 mr-1.5" />
                          {course.rating}
                        </div>
                        <div className="flex items-center bg-gray-50 px-2.5 py-1 rounded-lg text-xs font-semibold text-gray-700">
                          <Clock className="w-3 h-3 text-gray-400 mr-1.5" />
                          {course.duration}
                        </div>
                        <div className="flex items-center bg-gray-50 px-2.5 py-1 rounded-lg text-xs font-semibold text-gray-700">
                          <Users className="w-3 h-3 text-blue-500 mr-1.5" /> {course.students}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Quick Learning */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-gray-900">Quick Learning</h2>
                <div className="bg-blue-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">3</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border-none shadow-sm hover:shadow-md transition-all duration-200 rounded-3xl overflow-hidden bg-white group cursor-pointer h-full">
                  <CardContent className="p-6 relative h-full flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1 pr-4">
                        <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-2">Mathematics Mastery: Building Blocks for Success</h3>
                        <p className="text-sm font-bold text-blue-600 mb-2">beginner level</p>
                      </div>
                      <div className="w-16 h-16 shrink-0 rounded-xl overflow-hidden bg-gray-100">
                        <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&q=80" alt="Math" className="w-full h-full object-cover mix-blend-multiply" />
                      </div>
                    </div>

                    <div className="mt-auto flex items-center gap-3">
                      <div className="flex items-center bg-gray-50 px-2.5 py-1 rounded-lg text-xs font-semibold text-gray-700">
                        <Star className="w-3 h-3 text-yellow-500 fill-yellow-500 mr-1.5" />
                        4.8
                      </div>
                      <div className="flex items-center bg-gray-50 px-2.5 py-1 rounded-lg text-xs font-semibold text-gray-700">
                        <Clock className="w-3 h-3 text-gray-400 mr-1.5" />
                        1 Hours
                      </div>
                      <div className="flex items-center bg-gray-50 px-2.5 py-1 rounded-lg text-xs font-semibold text-gray-700">
                        <Users className="w-3 h-3 text-blue-500 mr-1.5" /> 8k People
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* CAT Assessment Modal - S22 Ultra dimensions */}
      {showCatAssessment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          {/* S22 Ultra Aspect Ratio Container (approx 19.3:9) */}
          <div className="w-[380px] h-[800px] bg-white rounded-[32px] overflow-hidden shadow-2xl relative flex flex-col">

            {/* Header Area - Light Blue */}
            <div className="bg-[#5ea1ff] px-6 pt-12 pb-8 flex flex-col relative shrink-0">
              <button
                onClick={() => {
                  setShowCatAssessment(false)
                  setSelectedOption(null)
                }}
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors mb-6 backdrop-blur-sm"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="flex items-center justify-between text-white/90 text-sm font-semibold mb-2">
                <span>1 of 15</span>
              </div>

              {/* Progress Bar */}
              <div className="h-1.5 bg-white/20 rounded-full w-full mb-6">
                <div className="h-full bg-white rounded-full w-[10%]"></div>
              </div>

              <div className="inline-flex items-center self-start bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-[10px] font-bold uppercase tracking-wider mb-4">
                STREAMINTENT
              </div>

              <h2 className="text-2xl font-bold text-white leading-snug">
                Which subject do you find most fascinating?
              </h2>
            </div>

            {/* Body - White with rounded top that slightly overlaps */}
            <div className="flex-1 bg-white relative -mt-6 rounded-t-[32px] px-6 py-8 flex flex-col gap-4">

              <button
                onClick={() => setSelectedOption("physics")}
                className={`w-full p-4 rounded-2xl border-2 flex items-center gap-4 transition-all ${selectedOption === "physics"
                    ? "border-[#5ea1ff] bg-blue-50"
                    : "border-gray-100 hover:border-gray-200"
                  }`}
              >
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedOption === "physics"
                    ? "border-[#5ea1ff]"
                    : "border-gray-300"
                  }`}>
                  {selectedOption === "physics" && <div className="w-3 h-3 bg-[#5ea1ff] rounded-full"></div>}
                </div>
                <span className={`font-semibold text-lg ${selectedOption === "physics" ? "text-blue-900" : "text-gray-500"
                  }`}>
                  Physics
                </span>
              </button>

              <button
                onClick={() => setSelectedOption("biology")}
                className={`w-full p-4 rounded-2xl border-2 flex items-center gap-4 transition-all ${selectedOption === "biology"
                    ? "border-[#5ea1ff] bg-blue-50"
                    : "border-gray-100 hover:border-gray-200"
                  }`}
              >
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedOption === "biology"
                    ? "border-[#5ea1ff]"
                    : "border-gray-300"
                  }`}>
                  {selectedOption === "biology" && <div className="w-3 h-3 bg-[#5ea1ff] rounded-full"></div>}
                </div>
                <span className={`font-semibold text-lg ${selectedOption === "biology" ? "text-blue-900" : "text-gray-500"
                  }`}>
                  Biology
                </span>
              </button>

            </div>

            {/* Bottom Button Area */}
            <div className="p-6 pb-8 bg-white mt-auto">
              <button className="w-full bg-[#E2E8F0] text-gray-500 font-bold text-lg py-4 rounded-2xl hover:bg-gray-200 transition-colors">
                Next
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  )
}
