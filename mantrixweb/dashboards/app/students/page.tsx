"use client"

import React from "react"
import { 
  MoreVertical,
  Filter,
  Grid,
  List,
  Clock,
  Search,
  ChevronDown
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sidebar } from "@/components/Sidebar"
import { Header } from "@/components/Header"

const students = [
  {
    name: "Henry Paulists",
    email: "henry.p@gmail.com",
    role: "CREATIVE DIRECTOR",
    progress: 100,
    avatar: "HP",
    online: true,
  },
  {
    name: "Evan Jefferson",
    email: "jefferson@gmail.com",
    role: "CREATIVE DIRECTOR",
    progress: 82,
    avatar: "EJ",
    online: true,
  },
  {
    name: "Marh Tomos",
    email: "marh.t@gmail.com",
    role: "CREATIVE DIRECTOR",
    progress: 66,
    avatar: "MT",
    online: false,
  },
  {
    name: "Mai Ahmed",
    email: "mai.ahmed@gmail.com",
    role: "CREATIVE DIRECTOR",
    progress: 100,
    avatar: "MA",
    online: true,
  },
  {
    name: "Evan Jefferson",
    email: "jefferson@gmail.com",
    role: "CREATIVE DIRECTOR",
    progress: 82,
    avatar: "EJ",
    online: false,
  },
  {
    name: "Alice McKnsie",
    email: "alice.m@gmail.com",
    role: "CREATIVE DIRECTOR",
    progress: 44,
    avatar: "AM",
    online: true,
  },
]

export default function StudentsPage() {
  return (
    <div className="flex h-screen bg-[#F8FAFC] font-sans">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-64 flex flex-col min-w-0">
        <Header title="Students" />

        <main className="p-10 overflow-y-auto">
          <div className="space-y-8">
            {/* Title Section */}
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Students</h1>
            </div>

            {/* Tabs & Controls */}
            <div className="space-y-6">
              <Tabs defaultValue="all" className="w-full">
                <div className="flex items-center justify-between border-b border-gray-200 pb-1">
                  <TabsList className="bg-transparent h-auto p-0 gap-8">
                    <TabsTrigger 
                      value="all" 
                      className="bg-transparent border-b-2 border-transparent data-[state=active] data-[state=active]:text-blue-600 rounded-none px-0 pb-3 text-base font-medium text-gray-500 shadow-none"
                    >
                      All
                    </TabsTrigger>
                    <TabsTrigger 
                      value="organization" 
                      className="bg-transparent border-b-2 border-transparent data-[state=active] data-[state=active]:text-blue-600 rounded-none px-0 pb-3 text-base font-medium text-gray-500 shadow-none"
                    >
                      Organization
                    </TabsTrigger>
                  </TabsList>

                  <div className="flex items-center gap-2">
                     <Search className="w-4 h-4 text-gray-400" />
                     <span className="text-sm text-gray-400">Search by name</span>
                  </div>
                </div>

                <div className="flex items-center justify-between py-6">
                  <div className="flex items-center gap-3">
                    <Select defaultValue="design">
                      <SelectTrigger className="w-[140px] bg-blue-50/50 border-none text-blue-600 font-medium h-10 rounded-lg">
                        <SelectValue placeholder="Team" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="design">Design Team</SelectItem>
                        <SelectItem value="dev">Dev Team</SelectItem>
                        <SelectItem value="marketing">Marketing</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select>
                      <SelectTrigger className="w-[120px] bg-white border border-gray-100 h-10 rounded-lg text-gray-600 font-medium hover:bg-gray-50">
                        <SelectValue placeholder="Position" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="lead">Lead</SelectItem>
                        <SelectItem value="senior">Senior</SelectItem>
                        <SelectItem value="junior">Junior</SelectItem>
                      </SelectContent>
                    </Select>

                    <Button variant="outline" className="h-10 border-gray-100 text-gray-600 font-medium gap-2 rounded-lg hover:bg-gray-50">
                      More <Filter className="w-3 h-3" />
                    </Button>
                  </div>

                  <div className="flex items-center gap-4">
                     <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                        Sort by: <span className="text-gray-900 cursor-pointer flex items-center gap-1">All <ChevronDown className="w-3 h-3" /></span>
                     </div>
                     <div className="flex items-center gap-1 bg-white border border-gray-100 p-1 rounded-lg">
                        <button className="p-1.5 bg-gray-100 rounded text-gray-900">
                           <Grid className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 text-gray-400 hover:text-gray-600">
                           <List className="w-4 h-4" />
                        </button>
                     </div>
                  </div>
                </div>

                <TabsContent value="all" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {students.map((student, idx) => (
                      <Card key={idx} className="border-none shadow-[0_2px_20px_-5px_rgba(0,0,0,0.05)] rounded-3xl hover:translate-y-[-2px] transition-transform duration-300">
                        <CardContent className="p-8">
                          <div className="flex justify-end mb-2">
                             <button className="text-gray-400 hover:bg-gray-50 p-1 rounded-full">
                                <MoreVertical className="w-5 h-5" />
                             </button>
                          </div>
                          
                          <div className="flex flex-col items-center text-center mb-8">
                            <div className="relative mb-4">
                               <Avatar className="w-20 h-20 border-4 border-white shadow-lg">
                                  <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${student.name}`} />
                                  <AvatarFallback className="bg-blue-100 text-blue-600 text-xl font-bold">{student.avatar}</AvatarFallback>
                               </Avatar>
                               {student.online && (
                                  <span className="absolute bottom-1 right-1 w-4 h-4 bg-blue-500 border-2 border-white rounded-full"></span>
                               )}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-1">{student.name}</h3>
                            <p className="text-sm text-gray-400">{student.email}</p>
                          </div>

                          <div className="space-y-6">
                             <div className="flex items-center gap-4">
                                <Clock className="w-4 h-4 text-gray-300" />
                                <Progress value={student.progress} className="h-1.5 bg-gray-100" indicatorClassName="bg-blue-600" />
                                <span className="text-xs font-bold text-gray-900 w-8 text-right">{student.progress}%</span>
                             </div>
                             
                             <div className="text-center pt-2 border-t border-gray-50">
                                <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">{student.role}</p>
                             </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="organization">
                   <div className="text-center py-20 text-gray-400">
                      Organization view coming soon
                   </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

