"use client"

import React, { useEffect, useMemo, useRef, useState } from "react"
import { 
  Plus,
  Video,
  FileText,
  Link as LinkIcon,
  Paperclip,
  Play
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sidebar } from "@/components/Sidebar"
import { Header } from "@/components/Header"
import { supabase } from "@/lib/supabase"
import { db } from "@/lib/firebase"
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from "firebase/firestore"

type UploadState = "idle" | "uploading" | "success" | "error"

type CourseMaterial = {
  id: string
  title: string
  description?: string
  category?: string
  duration?: string
  videoUrl: string
  thumbnailUrl?: string
}

export default function CourseDataPage() {
  const [activeTab, setActiveTab] = useState("video")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [videoFile, setVideoFile] = useState<File | null>(null)
  const [thumbFile, setThumbFile] = useState<File | null>(null)
  const [uploadState, setUploadState] = useState<UploadState>("idle")
  const [errorMsg, setErrorMsg] = useState<string>("")
  const [helperMsg, setHelperMsg] = useState<string>("")
  const [progressMsg, setProgressMsg] = useState<string>("")
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [materials, setMaterials] = useState<CourseMaterial[]>([])
  const [loadingMaterials, setLoadingMaterials] = useState<boolean>(true)

  const videoPreviewUrl = useMemo(() => (videoFile ? URL.createObjectURL(videoFile) : ""), [videoFile])
  const thumbPreviewUrl = useMemo(() => (thumbFile ? URL.createObjectURL(thumbFile) : ""), [thumbFile])

  // cleanup object URLs to avoid memory leaks
  useEffect(() => {
    return () => {
      if (videoPreviewUrl) URL.revokeObjectURL(videoPreviewUrl)
      if (thumbPreviewUrl) URL.revokeObjectURL(thumbPreviewUrl)
    }
  }, [videoPreviewUrl, thumbPreviewUrl])

  const buckets = {
    videos: process.env.NEXT_PUBLIC_SUPABASE_VIDEOS_BUCKET || "videos",
    thumbnails: process.env.NEXT_PUBLIC_SUPABASE_THUMBNAILS_BUCKET || "thumbnails",
  }

  async function handleUpload() {
    setErrorMsg("")
    setHelperMsg("")
    setProgressMsg("")
    setUploadState("uploading")
    try {
      if (!title.trim() || !videoFile || !thumbFile) throw new Error("Title, video and thumbnail are required")

      // Frontend validations
      const MAX_VIDEO_SIZE = 200 * 1024 * 1024 // 200MB
      const MAX_IMAGE_SIZE = 5 * 1024 * 1024 // 5MB
      const allowedVideoTypes = ["video/mp4", "video/webm", "video/ogg"]
      const allowedImageTypes = ["image/jpeg", "image/png", "image/webp"]

      if (!allowedVideoTypes.includes(videoFile.type)) throw new Error("Unsupported video type. Use MP4/WebM/Ogg")
      if (videoFile.size > MAX_VIDEO_SIZE) throw new Error("Video file too large (max 200MB)")
      if (!allowedImageTypes.includes(thumbFile.type)) throw new Error("Unsupported image type. Use JPG/PNG/WebP")
      if (thumbFile.size > MAX_IMAGE_SIZE) throw new Error("Thumbnail too large (max 5MB)")

      const timestamp = Date.now()
      const safeTitle = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")

      const videoPath = `${timestamp}-${safeTitle}.${videoFile.name.split(".").pop()}`
      const thumbPath = `${timestamp}-${safeTitle}.${thumbFile.name.split(".").pop()}`

      setProgressMsg("Uploading video...")
      const videoRes = await supabase.storage.from(buckets.videos).upload(videoPath, videoFile, {
        upsert: false,
        contentType: videoFile.type || "video/mp4",
        cacheControl: "3600",
      })
      if (videoRes.error) throw videoRes.error

      setProgressMsg("Uploading thumbnail...")
      const thumbRes = await supabase.storage.from(buckets.thumbnails).upload(thumbPath, thumbFile, {
        upsert: false,
        contentType: thumbFile.type || "image/png",
        cacheControl: "3600",
      })
      if (thumbRes.error) throw thumbRes.error

      const videoUrl = supabase.storage.from(buckets.videos).getPublicUrl(videoPath).data.publicUrl
      const thumbnailUrl = supabase.storage.from(buckets.thumbnails).getPublicUrl(thumbPath).data.publicUrl

      const meta = {
        title: title.trim(),
        description: description.trim(),
        category: "IT & Software",
        duration: videoRef.current ? `${Math.round(videoRef.current.duration)}s` : undefined,
        createdAt: serverTimestamp(),
        videoPath,
        videoUrl,
        thumbnailPath: thumbPath,
        thumbnailUrl,
      }

      setProgressMsg("Saving metadata...")
      await addDoc(collection(db, "courseMaterials"), meta)

      setUploadState("success")
      setTitle("")
      setDescription("")
      setVideoFile(null)
      setThumbFile(null)
    } catch (err: any) {
      setUploadState("error")
      setErrorMsg(err?.message || "Upload failed")
    } finally {
      setProgressMsg("")
    }
  }

  useEffect(() => {
    const q = query(collection(db, "courseMaterials"), orderBy("createdAt", "desc"))
    const unsub = onSnapshot(q, (snap) => {
      const list: CourseMaterial[] = snap.docs.map((d) => {
        const data = d.data() as any
        return {
          id: d.id,
          title: data.title || "Untitled",
          description: data.description,
          category: data.category,
          duration: data.duration,
          videoUrl: data.videoUrl,
          thumbnailUrl: data.thumbnailUrl,
        }
      })
      setMaterials(list)
      setLoadingMaterials(false)
    })
    return () => unsub()
  }, [])

  return (
    <div className="flex h-screen bg-[#F8FAFC] font-sans">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-64 flex flex-col min-w-0">
        <Header title="Resource Center" />

        <main className="p-10 overflow-y-auto">
          <div className="space-y-8">
            {/* Page Title & Description */}
            

            {/* Add New Material Card */}
            <Card className="border-none shadow-[0_2px_20px_-5px_rgba(0,0,0,0.05)] rounded-3xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-6">
                  <Plus className="w-5 h-5 text-gray-600" />
                  <h2 className="text-xl font-bold text-gray-900">Add New Material</h2>
                </div>

                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="bg-transparent border-b border-gray-200 rounded-none p-0 h-auto mb-8">
                    <TabsTrigger
                      value="video"
                      className="bg-transparent border-b-2 border-transparent data-[state=active] data-[state=active]:text-blue-600 rounded-none px-0 pb-3 mr-8 text-base font-medium text-gray-500 shadow-none"
                    >
                      <div className="flex items-center gap-2">
                        <Video className="w-4 h-4" />
                        <span>Add Video</span>
                      </div>
                    </TabsTrigger>
                    <TabsTrigger
                      value="material"
                      className="bg-transparent border-b-2 border-transparent data-[state=active] data-[state=active]:text-blue-600 rounded-none px-0 pb-3 text-base font-medium text-gray-500 shadow-none"
                    >
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        <span>Add Study Material</span>
                      </div>
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="video" className="mt-0 space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Title</label>
                      <Input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="e.g., Introduction to React Hooks"
                        className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Upload Video</label>
                      <Input
                        type="file"
                        accept="video/mp4,video/webm,video/ogg"
                        onChange={(e) => {
                          const f = e.target.files?.[0] || null
                          setVideoFile(f)
                          if (f && !["video/mp4", "video/webm", "video/ogg"].includes(f.type)) {
                            setHelperMsg("Unsupported video type. Use MP4/WebM/Ogg")
                          } else {
                            setHelperMsg("")
                          }
                        }}
                        aria-label="Upload course video"
                      />
                      {videoPreviewUrl && (
                        <div className="mt-3">
                          <video
                            ref={videoRef}
                            src={videoPreviewUrl}
                            controls
                            className="w-full rounded-xl border border-gray-200"
                          />
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Description</label>
                      <Textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Add a brief description..."
                        className="min-h-[120px] border-gray-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Thumbnail</label>
                      <Input
                        type="file"
                        accept="image/jpeg,image/png,image/webp"
                        onChange={(e) => {
                          const f = e.target.files?.[0] || null
                          setThumbFile(f)
                          if (f && !["image/jpeg", "image/png", "image/webp"].includes(f.type)) {
                            setHelperMsg("Unsupported image type. Use JPG/PNG/WebP")
                          } else {
                            setHelperMsg("")
                          }
                        }}
                        aria-label="Upload course thumbnail"
                      />
                      {thumbPreviewUrl && (
                        <div className="mt-3">
                          <img src={thumbPreviewUrl} alt="Thumbnail preview" className="w-full max-h-64 object-cover rounded-xl border border-gray-200" />
                        </div>
                      )}
                    </div>

                    {helperMsg && (
                      <p className="text-sm text-amber-600">{helperMsg}</p>
                    )}
                    {uploadState === "error" && (
                      <p className="text-sm text-red-600">{errorMsg}</p>
                    )}
                    {uploadState === "success" && (
                      <p className="text-sm text-green-600">Uploaded successfully</p>
                    )}
                    {progressMsg && (
                      <p className="text-sm text-gray-600">{progressMsg}</p>
                    )}
                    <Button
                      onClick={handleUpload}
                      disabled={uploadState === "uploading" || !title.trim() || !videoFile || !thumbFile}
                      className="w-full bg-gray-900 hover:bg-gray-800 text-white h-12 text-base font-semibold rounded-xl"
                    >
                      {uploadState === "uploading" ? "Uploading..." : "Add Video"}
                    </Button>
                  </TabsContent>

                  <TabsContent value="material" className="mt-0 space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Title</label>
                      <Input
                        placeholder="e.g., Advanced JavaScript Concepts"
                        className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Description</label>
                      <Textarea
                        placeholder="Add a brief description..."
                        className="min-h-[120px] border-gray-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Attachments <span className="text-gray-400 font-normal">(Required)</span>
                      </label>
                      <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:border-blue-300 transition-colors cursor-pointer group">
                        <Paperclip className="w-8 h-8 text-gray-300 mx-auto mb-3 group-hover:text-blue-400 transition-colors" />
                        <p className="text-sm text-gray-500">
                          Add supporting files PDF, DOCX, etc.
                        </p>
                      </div>
                    </div>

                    <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white h-12 text-base font-semibold rounded-xl">
                      Add Study Material
                    </Button>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Dynamic Materials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {loadingMaterials && (
                <p className="text-sm text-gray-500">Loading materials...</p>
              )}
              {!loadingMaterials && materials.length === 0 && (
                <p className="text-sm text-gray-500">No materials uploaded yet.</p>
              )}
              {materials.map((m) => (
                <Card
                  key={m.id}
                  className="border-none shadow-[0_2px_20px_-5px_rgba(0,0,0,0.05)] rounded-3xl overflow-hidden hover:translate-y-[-4px] transition-transform duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    {m.thumbnailUrl ? (
                      <img
                        src={m.thumbnailUrl}
                        alt={m.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="flex items-center justify-center w-full h-full bg-gray-100">
                        <Video className="w-8 h-8 text-gray-400" />
                      </div>
                    )}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <a
                        href={m.videoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-16 h-16 bg-white/70 rounded-full flex items-center justify-center group-hover:bg-white/80 transition-colors"
                      >
                        <Play className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" />
                      </a>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                      {m.title}
                    </h3>
                    {m.description && (
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">{m.description}</p>
                    )}
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{m.category || "Course"}</span>
                      {m.duration && <span>{m.duration}</span>}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

