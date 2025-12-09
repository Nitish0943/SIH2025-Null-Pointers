"use client"

import React, { useState } from "react"
import {
  ArrowUp,
  ArrowDown,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  Calendar as CalendarIcon,
  Clock
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Sidebar } from "@/components/Sidebar"
import { Header } from "@/components/Header"

// --- Data & Types ---

const summaryCards = [
  {
    title: "Tutoring Hours",
    value: "242",
    change: "3.15%",
    changeType: "increase",
    subtitle: "In August 2021",
    color: "bg-green-500",
  },
  {
    title: "Students",
    value: "104",
    change: "2.11%",
    changeType: "increase",
    subtitle: "In August 2021",
    color: "bg-yellow-500",
  },
  {
    title: "Classes",
    value: "20",
    change: "0.22%",
    changeType: "decrease",
    subtitle: "In August 2021",
    color: "bg-blue-500",
  },
]

const performanceData = [
  { month: "Jan", tutoringHours: 60, students: 40, classes: 20 },
  { month: "Feb", tutoringHours: 80, students: 45, classes: 25 },
  { month: "Mar", tutoringHours: 110, students: 55, classes: 35 },
  { month: "Apr", tutoringHours: 140, students: 70, classes: 45 },
  { month: "May", tutoringHours: 180, students: 90, classes: 60 },
  { month: "Jun", tutoringHours: 230, students: 100, classes: 70 },
  { month: "Jul", tutoringHours: 220, students: 105, classes: 65 },
  { month: "Aug", tutoringHours: 250, students: 120, classes: 80 },
  { month: "Sep", tutoringHours: 270, students: 130, classes: 90 },
  { month: "Oct", tutoringHours: 260, students: 135, classes: 95 },
  { month: "Nov", tutoringHours: 280, students: 140, classes: 100 },
  { month: "Dec", tutoringHours: 310, students: 150, classes: 110 },
]

const schedules = [
  { time: "08:00", name: "Courtney Henry", duration: "08:00 - 09:00", avatar: "CH", image: "" },
  { time: "09:00", name: "Leslie Alexander", duration: "09:30 - 11:00", avatar: "LA", active: true, image: "" },
  { time: "12:00", name: "Launch break", duration: "", avatar: null, isBreak: true },
  { time: "13:00", name: "Cameron Fox", duration: "13:00 - 14:00", avatar: "CF", image: "" },
  { time: "14:30", name: "John Doe", duration: "14:30 - 15:45", avatar: "JD", image: "" },
]

// --- Custom Components ---

function CustomCalendar() {
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  // Starting Dec 2025. Dec 1 is Monday.
  // Previous month padding
  const dates = [
    { day: 30, current: false },
    { day: 1, current: true }, { day: 2, current: true }, { day: 3, current: true }, { day: 4, current: true }, { day: 5, current: true }, { day: 6, current: true },
    { day: 7, current: true, selected: true }, { day: 8, current: true }, { day: 9, current: true }, { day: 10, current: true }, { day: 11, current: true }, { day: 12, current: true }, { day: 13, current: true },
    { day: 14, current: true }, { day: 15, current: true }, { day: 16, current: true }, { day: 17, current: true }, { day: 18, current: true }, { day: 19, current: true }, { day: 20, current: true },
    { day: 21, current: true }, { day: 22, current: true }, { day: 23, current: true }, { day: 24, current: true }, { day: 25, current: true }, { day: 26, current: true }, { day: 27, current: true },
    { day: 28, current: true }, { day: 29, current: true }, { day: 30, current: true }, { day: 31, current: true }, { day: 1, current: false }, { day: 2, current: false }, { day: 3, current: false }
  ];

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold text-gray-900">December 2025</h3>
        <CalendarIcon className="w-4 h-4 text-gray-400" />
      </div>
      <div className="grid grid-cols-7 gap-y-4 text-center">
        {days.map((d, i) => (
          <div key={i} className="text-xs text-gray-400 font-medium">{d}</div>
        ))}
        {dates.map((date, i) => (
          <div key={i} className="flex justify-center">
            <button
              className={`w-8 h-8 flex items-center justify-center rounded-full text-sm transition-colors
                ${!date.current ? 'text-gray-300' : 'text-gray-700 hover:bg-gray-100'}
                ${date.selected ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md' : ''}
              `}
            >
              {date.day}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function ScheduleTimeline() {
  return (
    <div className="space-y-6 relative">
      {/* Vertical line connecting the timeline */}
      <div className="absolute left-[59px] top-3 bottom-3 w-px bg-gray-100 hidden md:block"></div>

      {schedules.map((item, idx) => (
        <div key={idx} className="flex gap-4 relative">
          {/* Time Column */}
          <div className="w-12 text-xs text-gray-400 font-medium pt-3 shrink-0 text-right">
            {item.time}
          </div>

          {/* Dot on timeline */}
          <div className="hidden md:flex flex-col items-center pt-3 z-10">
            <div className={`w-2 h-2 rounded-full border-2 ${item.active ? 'border-blue-500 bg-white' : 'border-gray-200 bg-gray-50'}`}></div>
          </div>

          {/* Content Card */}
          <div className="flex-1">
            {item.isBreak ? (
              <div className="py-2 px-4 text-sm text-gray-400 bg-gray-50/50 rounded-lg border border-dashed border-gray-200 text-center w-full">
                {item.name}
              </div>
            ) : (
              <div className={`p-3 rounded-xl transition-all duration-200 flex items-start gap-3 
                ${item.active ? 'bg-blue-50/50 border border-blue-100 shadow-sm' : 'bg-transparent'}`}>
                <Avatar className="w-10 h-10 border-2 border-white shadow-sm">
                  <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${item.name}`} />
                  <AvatarFallback className="bg-gray-200 text-gray-600 text-xs">{item.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">{item.name}</h4>
                  <p className="text-xs text-gray-500 mt-0.5">{item.duration}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

// --- Main Dashboard Component ---

export default function Dashboard() {
  const [timeFrame, setTimeFrame] = useState("Month")

  return (
    <div className="flex h-screen bg-[#F8FAFC] font-sans">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-64 flex flex-col min-w-0">
        <Header title="Dashboard" />

        <main className="p-10 overflow-y-auto">
          <div className="grid grid-cols-12 gap-8">

            {/* Left Column (Stats & Chart) */}
            <div className="col-span-12 lg:col-span-8 space-y-8">

              {/* Top Row: Upcoming Class + Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Upcoming Class Card (Large) */}
                <Card className="col-span-1 md:col-span-2 bg-white border-none shadow-[0_2px_20px_-5px_rgba(0,0,0,0.05)] rounded-3xl overflow-hidden relative">
                  <CardContent className="p-8 flex items-center justify-between relative z-10">
                    <div>
                      <div className="flex items-center gap-4 mb-2">
                        <div className="bg-blue-50 p-3 rounded-2xl">
                          <CalendarIcon className="w-6 h-6 text-blue-600" />
                        </div>
                        <span className="text-3xl font-bold text-gray-900">12</span>
                        <span className="text-xl font-semibold text-gray-700">Upcoming Class</span>
                      </div>
                      <p className="text-gray-400 text-sm pl-[72px]">This Week</p>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-8 py-6 text-base font-semibold shadow-lg shadow-blue-200 transition-all hover:scale-105 active:scale-95">
                      See Schedules
                    </Button>
                  </CardContent>
                  {/* Decorative Circle */}
                  <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-50/50 rounded-full blur-3xl"></div>
                </Card>

                {/* 3 Summary Cards Row */}
                <div className="col-span-1 md:col-span-2 grid grid-cols-3 gap-6">
                  {summaryCards.map((card, idx) => (
                    <Card key={idx} className="border-none shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] rounded-3xl hover:translate-y-[-2px] transition-transform duration-300">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <p className="text-sm font-medium text-gray-500">{card.title}</p>
                          {/* Indicator dot */}
                          {/* <div className={`w-2 h-2 rounded-full ${card.color}`}></div> */}
                        </div>
                        <div className="flex items-end gap-3 mb-2">
                          <h3 className="text-3xl font-bold text-gray-900">{card.value}</h3>
                          <div className={`flex items-center text-xs font-bold mb-1.5 ${card.changeType === 'increase' ? 'text-emerald-500' : 'text-red-500'
                            }`}>
                            {card.changeType === 'increase' ? <ArrowUp className="w-3 h-3 mr-0.5" /> : <ArrowDown className="w-3 h-3 mr-0.5" />}
                            {card.change}
                          </div>
                        </div>
                        <p className="text-xs text-gray-400">{card.subtitle}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

              </div>

              {/* Performance Chart */}
              <Card className="border-none shadow-[0_2px_20px_-5px_rgba(0,0,0,0.05)] rounded-3xl p-2">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-lg font-bold text-gray-900">Performance Stat</h3>
                    <div className="flex bg-gray-50 p-1 rounded-xl">
                      {['Weeks', 'Month', 'Year'].map(t => (
                        <button
                          key={t}
                          onClick={() => setTimeFrame(t)}
                          className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${timeFrame === t
                              ? 'bg-emerald-500 text-white shadow-md'
                              : 'text-gray-400 hover:text-gray-600'
                            }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Legend */}
                  <div className="flex gap-6 mb-8">
                    {summaryCards.map((c, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className={`w-2.5 h-2.5 rounded-full ${c.color}`}></div>
                        <span className="text-xs font-semibold text-gray-500">{c.title}</span>
                      </div>
                    ))}
                  </div>

                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={performanceData}>
                        <CartesianGrid vertical={false} stroke="#F1F5F9" strokeDasharray="3 3" />
                        <XAxis
                          dataKey="month"
                          axisLine={false}
                          tickLine={false}
                          tick={{ fill: '#94A3B8', fontSize: 12 }}
                          dy={10}
                        />
                        <YAxis
                          axisLine={false}
                          tickLine={false}
                          tick={{ fill: '#94A3B8', fontSize: 12 }}
                          domain={[0, 350]}
                          ticks={[0, 80, 160, 240, 320]}
                        />
                        <Tooltip
                          contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                          cursor={{ stroke: '#CBD5E1', strokeWidth: 1, strokeDasharray: '4 4' }}
                        />
                        <Line
                          type="monotone"
                          dataKey="tutoringHours"
                          stroke="#10B981"
                          strokeWidth={3}
                          dot={false}
                          activeDot={{ r: 6, fill: '#10B981', strokeWidth: 0 }}
                        />
                        <Line
                          type="monotone"
                          dataKey="students"
                          stroke="#EAB308"
                          strokeWidth={3}
                          dot={false}
                          activeDot={{ r: 6, fill: '#EAB308', strokeWidth: 0 }}
                        />
                        <Line
                          type="monotone"
                          dataKey="classes"
                          stroke="#3B82F6"
                          strokeWidth={3}
                          dot={false}
                          activeDot={{ r: 6, fill: '#3B82F6', strokeWidth: 0 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column (Calendar & Schedule) */}
            <div className="col-span-12 lg:col-span-4 space-y-8">

              {/* Calendar Card */}
              <Card className="border-none shadow-[0_2px_20px_-5px_rgba(0,0,0,0.05)] rounded-3xl bg-white">
                <CardContent className="p-6">
                  <CustomCalendar />
                </CardContent>
              </Card>

              {/* Schedule Card */}
              <div className="bg-white rounded-3xl shadow-[0_2px_20px_-5px_rgba(0,0,0,0.05)] p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Today Schedules</h3>
                    <p className="text-xs text-gray-400 mt-1">5 Schedule</p>
                  </div>
                  <button className="text-gray-400 hover:bg-gray-50 p-1 rounded-lg transition-colors">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>

                <ScheduleTimeline />
              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
