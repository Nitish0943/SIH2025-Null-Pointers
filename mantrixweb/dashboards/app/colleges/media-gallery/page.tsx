"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload, Video, Image as ImageIcon, Trash2, Play } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface MediaItem {
    id: string;
    type: "video" | "image";
    title: string;
    date: string;
    size: string;
    thumbnail?: string; // For images
}

const initialMedia: MediaItem[] = [
    {
        id: "1",
        type: "video",
        title: "Introduction to Computer Science",
        date: "2024-01-15",
        size: "45 MB",
    },
    {
        id: "2",
        type: "video",
        title: "Data Structures Lecture 1",
        date: "2024-01-14",
        size: "52 MB",
    },
    {
        id: "3",
        type: "image",
        title: "Campus Event 2024",
        date: "2024-01-13",
        size: "2.5 MB",
        thumbnail: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2670&auto=format&fit=crop",
    },
    {
        id: "4",
        type: "image",
        title: "Annual Day Celebration",
        date: "2024-01-12",
        size: "3.1 MB",
        thumbnail: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2670&auto=format&fit=crop",
    },
];

export default function MediaGalleryPage() {
    const [media] = useState<MediaItem[]>(initialMedia);

    const videos = media.filter((item) => item.type === "video");
    const images = media.filter((item) => item.type === "image");

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
                        Media Gallery
                    </h2>
                    <p className="text-gray-500 mt-1">
                        Upload and manage video lectures and images
                    </p>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-md rounded-full px-6 flex items-center gap-2">
                    <Upload className="w-4 h-4" />
                    Upload Media
                </Button>
            </div>

            {/* Upload Dropzone */}
            <div className="border-2 border-dashed border-gray-200 rounded-3xl p-12 bg-white flex flex-col items-center justify-center text-center transition-colors hover:border-blue-300 hover:bg-blue-50/10">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                    <Upload className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Drop files here or click to upload
                </h3>
                <p className="text-sm text-gray-500 mb-6">
                    Support for videos (MP4, AVI, MOV) and images (JPG, PNG, GIF)
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8">
                    Choose Files
                </Button>
            </div>

            <Tabs defaultValue="all" className="w-full">
                <div className="border-b border-gray-200 mb-6">
                    <TabsList className="bg-transparent h-auto p-0 gap-8">
                        <TabsTrigger
                            value="all"
                            className="bg-transparent border-b-2 border-transparent  data-[state=active]:text-blue-600 data-[state=active]:shadow-none rounded-none px-0 py-3 text-gray-500 font-medium text-sm hover:text-gray-700 transition-colors"
                        >
                            All Media ({media.length})
                        </TabsTrigger>
                        <TabsTrigger
                            value="videos"
                            className="bg-transparent border-b-2 border-transparent  data-[state=active]:text-blue-600 data-[state=active]:shadow-none rounded-none px-0 py-3 text-gray-500 font-medium text-sm hover:text-gray-700 transition-colors"
                        >
                            <span className="flex items-center gap-2">
                                <Video className="w-4 h-4" />
                                Videos ({videos.length})
                            </span>
                        </TabsTrigger>
                        <TabsTrigger
                            value="images"
                            className="bg-transparent border-b-2 border-transparent  data-[state=active]:text-blue-600 data-[state=active]:shadow-none rounded-none px-0 py-3 text-gray-500 font-medium text-sm hover:text-gray-700 transition-colors"
                        >
                            <span className="flex items-center gap-2">
                                <ImageIcon className="w-4 h-4" />
                                Images ({images.length})
                            </span>
                        </TabsTrigger>
                    </TabsList>
                </div>

                <TabsContent value="all" className="mt-0">
                    <MediaGrid items={media} />
                </TabsContent>
                <TabsContent value="videos" className="mt-0">
                    <MediaGrid items={videos} />
                </TabsContent>
                <TabsContent value="images" className="mt-0">
                    <MediaGrid items={images} />
                </TabsContent>
            </Tabs>
        </div>
    );
}

function MediaGrid({ items }: { items: MediaItem[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
                <div
                    key={item.id}
                    className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group"
                >
                    {/* Thumbnail / Preview Area */}
                    <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
                        {item.type === "video" ? (
                            <div className="w-full h-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
                                <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center pl-1 cursor-pointer hover:scale-110 transition-transform bg-white/10 backdrop-blur-sm">
                                    <Play className="w-5 h-5 text-white fill-current" />
                                </div>
                                {/* Video Icon in top left */}
                                <div className="absolute top-3 left-3">
                                    <Video className="w-5 h-5 text-white/80" />
                                </div>
                            </div>
                        ) : (
                            <div
                                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                style={{ backgroundImage: `url(${item.thumbnail})` }}
                            >
                                {/* Image Icon in top left */}
                                <div className="absolute top-3 left-3 bg-black/20 backdrop-blur-sm p-1 rounded">
                                    <ImageIcon className="w-4 h-4 text-white" />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Details */}
                    <div className="p-4">
                        <h4 className="font-bold text-gray-900 mb-1 line-clamp-1">
                            {item.title}
                        </h4>
                        <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                                <span>{item.date}</span>
                                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                <span>{item.size}</span>
                            </div>
                            <button className="text-gray-400 hover:text-red-500 transition-colors p-1 rounded-md hover:bg-red-50">
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
