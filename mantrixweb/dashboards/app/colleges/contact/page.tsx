"use client"

import React from "react"
import {
    Mail,
    Phone,
    Globe,
    MapPin,
    Facebook,
    Twitter,
    Linkedin,
    Instagram
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex justify-between items-center mb-10">
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Contact Management</h2>
                <Button className="h-11 bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 font-semibold shadow-md transition-all hover:scale-105 active:scale-95">
                    Edit Contact Info
                </Button>
            </div>

            <div className="space-y-8">
                {/* Top Row: Email, Phone, Website */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
                        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3 text-gray-700">
                            <Mail className="w-5 h-5 text-gray-500" />
                            <span>gcet_jammu1994@gmail.com</span>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 ml-1">Phone Number</label>
                        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3 text-gray-700">
                            <Phone className="w-5 h-5 text-gray-500" />
                            <span>0191-2623087</span>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 ml-1">Website URL</label>
                        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3 text-gray-700">
                            <Globe className="w-5 h-5 text-gray-500" />
                            <a href="http://www.gcetjammu.org.in" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">
                                http://www.gcetjammu.org.in
                            </a>
                        </div>
                    </div>
                </div>

                {/* Principal Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 ml-1">Principal's Email</label>
                        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3 text-gray-700">
                            <Mail className="w-5 h-5 text-gray-500" />
                            <span>principal.gcet@jkgov.in</span>
                        </div>
                    </div>
                </div>

                {/* Address */}
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 ml-1">Physical Address</label>
                    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3 text-gray-700">
                        <MapPin className="w-5 h-5 text-gray-500" />
                        <span>Chak Bhalwal, Jammu, Jammu and Kashmir - 181122</span>
                    </div>
                </div>

                {/* Office Hours */}
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 ml-1">Office Hours</label>
                    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3 text-gray-700">
                        <span>Mon-Fri: 10:00 AM - 4:00 PM</span>
                    </div>
                </div>

                {/* Social Media Section */}
                <div className="pt-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-6">Social Media Links</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 ml-1">Facebook</label>
                            <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3 text-gray-700">
                                <Facebook className="w-5 h-5 text-gray-500" />
                                <a href="https://www.facebook.com/gcetjammuofficial" className="truncate hover:text-blue-600 transition-colors">
                                    https://www.facebook.com/gcetjammuofficial
                                </a>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 ml-1">Twitter</label>
                            <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3 text-gray-700">
                                <Twitter className="w-5 h-5 text-gray-500" />
                                <span>#</span>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 ml-1">Instagram</label>
                            <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3 text-gray-700">
                                <Instagram className="w-5 h-5 text-gray-500" />
                                <span>#</span>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 ml-1">LinkedIn</label>
                            <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3 text-gray-700">
                                <Linkedin className="w-5 h-5 text-gray-500" />
                                <span>#</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
