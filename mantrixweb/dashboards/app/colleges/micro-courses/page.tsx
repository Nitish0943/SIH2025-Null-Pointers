"use client"

import React, { useEffect, useMemo, useRef, useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { CalendarDays, Eye, Trash2, UploadCloud, Clock } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { supabase } from "@/lib/supabase"
import { db } from "@/lib/firebase"
import { addDoc, collection, onSnapshot, orderBy, query as fsQuery, serverTimestamp } from "firebase/firestore"

type MicroCourse = {
  id: string
  title: string
  description: string
  createdAt?: any
  views?: number
  duration?: string
  thumbnailUrl?: string
  videoUrl: string
}

export default function MicroCoursesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [tab, setTab] = useState("all")
  const [materials, setMaterials] = useState<MicroCourse[]>([])
  const [loading, setLoading] = useState(true)

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [videoFile, setVideoFile] = useState<File | null>(null)
  const [thumbFile, setThumbFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const formRef = useRef<HTMLDivElement | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [preview, setPreview] = useState<{ title: string; url: string } | null>(null)

  const videoPreview = useMemo(() => (videoFile ? URL.createObjectURL(videoFile) : ""), [videoFile])
  const thumbPreview = useMemo(() => (thumbFile ? URL.createObjectURL(thumbFile) : ""), [thumbFile])

  useEffect(() => {
    return () => {
      if (videoPreview) URL.revokeObjectURL(videoPreview)
      if (thumbPreview) URL.revokeObjectURL(thumbPreview)
    }
  }, [videoPreview, thumbPreview])

  useEffect(() => {
    const colRef = collection(db, "courses")
    const unsubscribe = onSnapshot(fsQuery(colRef, orderBy("createdAt", "desc")), (snap) => {
      const list = snap.docs.map((d) => ({ id: d.id, ...(d.data() as any) })) as MicroCourse[]
      setMaterials(list)
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    const list = (q
      ? materials.filter((c) => (c.title || "").toLowerCase().includes(q))
      : [...materials])
    if (tab === "popular") list.sort((a, b) => (b.views || 0) - (a.views || 0))
    if (tab === "newest") list.sort((a, b) => {
      const ad = (a.createdAt?.seconds || 0) * 1000
      const bd = (b.createdAt?.seconds || 0) * 1000
      return bd - ad
    })
    return list
  }, [materials, tab, searchQuery])

  return (
    <div className="flex min-h-screen bg-[#F8FAFC] font-sans">
      <div className="flex-1 flex flex-col min-w-0">
        <main className="p-10">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-4xl font-extrabold text-gray-900">Micro Courses</h2>
              <div className="flex items-center gap-3">
                <div className="hidden md:block text-gray-700 text-sm">Admin User</div>
                <Button
                  className="h-11 rounded-xl bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => {
                    setShowForm(true)
                    setTimeout(() => {
                      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
                    }, 50)
                  }}
                >
                  <UploadCloud className="w-4 h-4 mr-2" /> Upload Course
                </Button>
              </div>
            </div>
            <p className="text-gray-600 mb-6">Manage your micro learning content</p>

            <Tabs value={tab} onValueChange={setTab} className="w-full">
              <TabsList className="bg-transparent rounded-none p-0 h-auto mb-6">
                <TabsTrigger value="all" className="bg-transparent border-0 focus:outline-none focus:ring-0 hover:text-blue-600 data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none px-0 pb-3 mr-8 text-base font-medium text-gray-600">
                  All Courses
                </TabsTrigger>
                <TabsTrigger value="popular" className="bg-transparent border-0 focus:outline-none focus:ring-0 hover:text-blue-600 data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none px-0 pb-3 mr-8 text-base font-medium text-gray-600">
                  Popular
                </TabsTrigger>
                <TabsTrigger value="newest" className="bg-transparent border-0 focus:outline-none focus:ring-0 hover:text-blue-600 data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none px-0 pb-3 text-base font-medium text-gray-600">
                  Newest
                </TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-0">
                {showForm && (
                  <UploadForm
                    ref={formRef}
                  title={title}
                  setTitle={setTitle}
                  description={description}
                  setDescription={setDescription}
                  videoFile={videoFile}
                  setVideoFile={setVideoFile}
                  thumbFile={thumbFile}
                  setThumbFile={setThumbFile}
                  uploading={uploading}
                  errorMsg={errorMsg}
                  onUpload={async () => {
                    setErrorMsg("")
                    if (!title.trim() || !videoFile || !thumbFile) {
                      setErrorMsg("Title, video and thumbnail are required")
                      return
                    }
                    setUploading(true)
                    try {
                      const buckets = {
                        videos: process.env.NEXT_PUBLIC_SUPABASE_VIDEOS_BUCKET || "videos",
                        thumbnails: process.env.NEXT_PUBLIC_SUPABASE_THUMBNAILS_BUCKET || "thumbnails",
                      }
                      const timestamp = Date.now()
                      const safeTitle = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
                      const videoPath = `${timestamp}-${safeTitle}.${videoFile.name.split(".").pop()}`
                      const thumbPath = `${timestamp}-${safeTitle}.${thumbFile.name.split(".").pop()}`

                      const vRes = await supabase.storage.from(buckets.videos).upload(videoPath, videoFile, {
                        upsert: false,
                        contentType: videoFile.type || "video/mp4",
                        cacheControl: "3600",
                      })
                      if (vRes.error) throw vRes.error
                      const tRes = await supabase.storage.from(buckets.thumbnails).upload(thumbPath, thumbFile, {
                        upsert: false,
                        contentType: thumbFile.type || "image/png",
                        cacheControl: "3600",
                      })
                      if (tRes.error) throw tRes.error

                      const videoUrl = supabase.storage.from(buckets.videos).getPublicUrl(videoPath).data.publicUrl
                      const thumbnailUrl = supabase.storage.from(buckets.thumbnails).getPublicUrl(thumbPath).data.publicUrl

                      await addDoc(collection(db, "courses"), {
                        title: title.trim(),
                        description: description.trim(),
                        videoUrl,
                        thumbnailUrl,
                        duration: videoRef.current ? `${Math.round(videoRef.current.duration)}s` : undefined,
                        views: 0,
                        createdAt: serverTimestamp(),
                      })

                      setTitle("")
                      setDescription("")
                      setVideoFile(null)
                      setThumbFile(null)
                    } catch (e: any) {
                      setErrorMsg(e?.message || "Upload failed")
                    } finally {
                      setUploading(false)
                    }
                  }}
                  videoPreviewRef={videoRef}
                  videoPreviewUrl={videoPreview}
                  thumbPreviewUrl={thumbPreview}
                  />
                )}
                <MicroCoursesGrid
                  query={searchQuery}
                  setQuery={setSearchQuery}
                  items={filtered}
                  onPreview={(item) => setPreview({ title: item.title, url: item.videoUrl })}
                />
              </TabsContent>
              <TabsContent value="popular" className="mt-0">
                <MicroCoursesGrid
                  query={searchQuery}
                  setQuery={setSearchQuery}
                  items={filtered}
                  onPreview={(item) => setPreview({ title: item.title, url: item.videoUrl })}
                />
              </TabsContent>
              <TabsContent value="newest" className="mt-0">
                <MicroCoursesGrid
                  query={searchQuery}
                  setQuery={setSearchQuery}
                  items={filtered}
                  onPreview={(item) => setPreview({ title: item.title, url: item.videoUrl })}
                />
              </TabsContent>
            </Tabs>
            {preview && (
              <VideoPreviewModal
                title={preview.title}
                url={preview.url}
                onClose={() => setPreview(null)}
              />
            )}
          </div>
        </main>
      </div>
    </div>
  )
}

function MicroCoursesGrid({
  query,
  setQuery,
  items,
  onPreview,
}: {
  query: string
  setQuery: (v: string) => void
  items: MicroCourse[]
  onPreview: (item: MicroCourse) => void
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex-1 max-w-md">
          <Input
            placeholder="Search courses..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="h-11 bg-white border border-gray-200 rounded-xl focus:ring-blue-100"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((c) => (
          <Card key={c.id} className="rounded-2xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-all">
            <div className="relative h-40 bg-gray-100">
              <img src={c.thumbnail} alt={c.title} className="w-full h-full object-cover" />
              <span className="absolute bottom-2 right-2 text-[11px] px-2 py-1 rounded-md bg-black/70 text-white font-semibold">
                {c.duration}
              </span>
            </div>
            <CardContent className="p-4">
              <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-2">{c.title}</h3>
              <div className="flex items-center gap-4 text-xs text-gray-600 mb-2">
                <span className="flex items-center gap-1">
                  <CalendarDays className="w-3.5 h-3.5" /> {c.date}
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5" /> {c.views} views
                </span>
              </div>
              <p className="text-sm text-gray-700 mb-4 line-clamp-2 leading-relaxed">{c.description}</p>
              <div className="flex items-center justify-between pt-2 border-t border-gray-50">
                <Button
                  variant="outline"
                  className="rounded-xl h-9 text-xs font-medium"
                  onClick={() => onPreview(c)}
                >
                  <Clock className="w-3.5 h-3.5 mr-2" /> View
                </Button>
                <Button variant="ghost" className="text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full h-9 w-9 p-0">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

const UploadForm = React.forwardRef<HTMLDivElement, any>(function UploadForm({
  title,
  setTitle,
  description,
  setDescription,
  videoFile,
  setVideoFile,
  thumbFile,
  setThumbFile,
  uploading,
  errorMsg,
  onUpload,
  videoPreviewRef,
  videoPreviewUrl,
  thumbPreviewUrl,
}, ref) {
  return (
    <div id="upload-form" ref={ref} className="mb-8">
      <Card className="border border-gray-200 rounded-2xl shadow-sm">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-700">Title</label>
              <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g., React Hooks Explained" />

              <label className="text-sm font-medium text-gray-700">Description</label>
              <Textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Short description..." className="min-h-[100px]" />

              <label className="text-sm font-medium text-gray-700">Thumbnail</label>
              <Input type="file" accept="image/*" onChange={(e) => setThumbFile(e.target.files?.[0] || null)} />
              {thumbPreviewUrl && <img src={thumbPreviewUrl} alt="thumb" className="rounded-xl border border-gray-200 max-h-40 object-cover" />}
            </div>

            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-700">Video</label>
              <Input type="file" accept="video/*" onChange={(e) => setVideoFile(e.target.files?.[0] || null)} />
              {videoPreviewUrl && (
                <video ref={videoPreviewRef} src={videoPreviewUrl} controls className="w-full rounded-xl border border-gray-200" />
              )}
            </div>
          </div>

          {errorMsg && <p className="text-sm text-red-600 mt-4">{errorMsg}</p>}
          <div className="mt-6">
            <Button onClick={onUpload} disabled={uploading} className="bg-gray-900 hover:bg-gray-800 text-white rounded-xl">
              {uploading ? "Uploading..." : "Upload Course"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
})

function VideoPreviewModal({ title, url, onClose }: { title: string; url: string; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-xl w-[95vw] max-w-3xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
          <h3 className="text-sm font-semibold text-gray-900 line-clamp-1">{title}</h3>
          <Button variant="ghost" className="text-gray-500" onClick={onClose}>Close</Button>
        </div>
        <div className="p-4">
          <div className="aspect-video w-full bg-black rounded-xl overflow-hidden">
            <video src={url} controls className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
