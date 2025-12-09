"use client"

import React, { useMemo, useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { CalendarDays, BookOpen, Trash2, UploadCloud, ArrowRight } from "lucide-react"
import { db } from "@/lib/firebase"
import { collection, getDocs } from "firebase/firestore"

type MicroCourse = {
  id: string
  title: string
  blog_content: string
  created_at: string
  milestone_id: string
  user_id: string
  sources: Array<{ title: string; url: string }>
  test: {
    max_questions: number
    passing_score: number
    questions: Array<{
      question: string
      options: string[]
      correct_answer: number
      explanation: string
      difficulty: string
    }>
  }
}

export default function MicroCoursesPage() {
  const [query, setQuery] = useState("")
  const [tab, setTab] = useState("all")
  const [courses, setCourses] = useState<MicroCourse[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "microcourses"))
        const fetchedCourses = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as MicroCourse[]
        setCourses(fetchedCourses)
      } catch (error) {
        console.error("Error fetching microcourses:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchCourses()
  }, [])

  const filtered = useMemo(() => {
    const list = [...courses]
    // simple tab behavior
    if (tab === "newest") {
      list.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    }
    const q = query.trim().toLowerCase()
    return q ? list.filter((c) => c.title?.toLowerCase().includes(q)) : list
  }, [query, tab, courses])

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-4xl font-extrabold text-gray-900">Micro Courses</h2>
        <div className="flex items-center gap-3">
          <Button className="h-11 rounded-xl bg-blue-600 hover:bg-blue-700 text-white">
            <UploadCloud className="w-4 h-4 mr-2" /> CREATE COURSE
          </Button>
        </div>
      </div>
      <p className="text-gray-600 mb-6">Manage your micro learning content</p>

      {/* Tabs */}
      <Tabs value={tab} onValueChange={setTab} className="w-full">
        <TabsList className="bg-transparent border-b border-gray-200 rounded-none p-0 h-auto mb-6">
          <TabsTrigger value="all" className="bg-transparent border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 rounded-none px-0 pb-3 mr-8 text-base font-medium text-gray-600">
            All Courses
          </TabsTrigger>
          <TabsTrigger value="popular" className="bg-transparent border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 rounded-none px-0 pb-3 mr-8 text-base font-medium text-gray-600">
            Popular
          </TabsTrigger>
          <TabsTrigger value="newest" className="bg-transparent border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 rounded-none px-0 pb-3 text-base font-medium text-gray-600">
            Newest
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-0">
          <MicroCoursesGrid query={query} setQuery={setQuery} items={filtered} loading={loading} />
        </TabsContent>
        <TabsContent value="popular" className="mt-0">
          <MicroCoursesGrid query={query} setQuery={setQuery} items={filtered} loading={loading} />
        </TabsContent>
        <TabsContent value="newest" className="mt-0">
          <MicroCoursesGrid query={query} setQuery={setQuery} items={filtered} loading={loading} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

function MicroCoursesGrid({
  query,
  setQuery,
  items,
  loading
}: {
  query: string
  setQuery: (v: string) => void
  items: MicroCourse[]
  loading: boolean
}) {
  if (loading) {
    return <div className="text-center py-20 text-gray-500">Loading courses...</div>
  }

  return (
    <div>
      {/* Search */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex-1 max-w-md">
          <Input
            placeholder="Search courses..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="h-11 bg-white border border-gray-200 rounded-xl focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((c, i) => (
          <Card key={c.id || i} className="rounded-2xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-all flex flex-col h-full">
            <div className="relative h-40 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white">
              <BookOpen className="w-12 h-12 opacity-50" />
              <span className="absolute bottom-2 right-2 text-[11px] px-2 py-1 rounded-md bg-black/40 text-white font-semibold backdrop-blur-sm">
                Short Course
              </span>
            </div>
            <CardContent className="p-5 flex-1 flex flex-col">
              <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{c.title}</h3>
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                <span className="flex items-center gap-1">
                  <CalendarDays className="w-3.5 h-3.5" /> {new Date(c.created_at).toLocaleDateString()}
                </span>
              </div>

              <div className="text-sm text-gray-600 mb-4 line-clamp-3 prose prose-sm">
                {/* Strip markdown headers for preview roughly */}
                {c.blog_content?.replace(/#/g, '').substring(0, 120)}...
              </div>

              <div className="mt-auto flex items-center justify-between pt-3 border-t border-gray-50">
                <Button variant="outline" className="rounded-xl h-9 text-blue-600 border-blue-100 hover:bg-blue-50">
                  Read Content <ArrowRight className="w-3.5 h-3.5 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
        {!loading && items.length === 0 && (
          <div className="col-span-full text-center py-10 text-gray-400">
            No micro courses found.
          </div>
        )}
      </div>
    </div>
  )
}
