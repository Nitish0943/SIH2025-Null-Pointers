"use client"

import React, { useState } from "react"
import { Sidebar } from "@/components/Sidebar"
import { Header } from "@/components/Header"
import {
    Search,
    Phone,
    Video,
    MoreVertical,
    Paperclip,
    Smile,
    Send,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

// --- Mock Data ---

const contacts = [
    {
        id: 1,
        name: "Jane Cooper",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
        lastMessage: "My iphone pro max is not arrived yet.",
        time: "3:00 PM",
        unread: 0,
        online: false
    },
    {
        id: 2,
        name: "Esther Howard",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Esther",
        lastMessage: "I would like to get back my money.",
        time: "9:40 PM",
        unread: 2,
        online: false
    },
    {
        id: 3,
        name: "Leslie Alexander",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Leslie",
        lastMessage: "How is delivery charge calculated?",
        time: "8:00 PM",
        unread: 0,
        online: true
    },
    {
        id: 4,
        name: "Annette Black",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Annette",
        lastMessage: "Ami jani na bisoy. ok dekhteesi ki...",
        time: "7:10 PM",
        unread: 0,
        online: true,
        active: true
    },
    {
        id: 5,
        name: "Courtney Henry",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Courtney",
        lastMessage: "Ok. I will wait till next monday.",
        time: "6:30 PM",
        unread: 0,
        online: false
    },
    {
        id: 6,
        name: "Bessie Cooper",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bessie",
        lastMessage: "Give us a screenshot of your payment.",
        time: "3:40 PM",
        unread: 0,
        online: false
    },
    {
        id: 7,
        name: "Devon Lane",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Devon",
        lastMessage: "Laptop display has been broken.",
        time: "4:50 PM",
        unread: 0,
        online: true
    },
]

const initialMessages = [
    {
        id: 1,
        sender: "other",
        text: "Ami jani na bisoy. ok dekhteesi ki kora jay. valo solution khojte hobe. wait for couple of month and lets see waht happen. its the right things to do, good luck and lets see waht happen.",
        time: "12:45 PM"
    },
    {
        id: 2,
        sender: "me",
        text: "Ami jani na bisoy. ok dekhteesi ki kora jay. valo solution khojte hobe. wait for couple of month and lets see waht happen.",
        time: "12:45 PM"
    },
    {
        id: 3,
        sender: "other",
        text: "Ami jani na bisoy. ok dekhteesi ki kora jay. valo solution khojte hobe.",
        time: "12:45 PM"
    },
    {
        id: 4,
        sender: "other",
        text: "Ami jani na bisoy. ok dekhteesi ki kora jay. valo solution khojte hobe.",
        time: "12:45 PM"
    },
    {
        id: 5,
        sender: "me",
        text: "Ami jani na bisoy. ok dekhteesi ki kora jay. valo solution khojte hobe.",
        time: "12:45 PM"
    },
]

export default function MessagesPage() {
    const [activeContactId, setActiveContactId] = useState(4)
    // Initialize specific messages for Annette Black (id: 4) and empty for others for demo
    const [messagesMap, setMessagesMap] = useState<Record<number, typeof initialMessages>>({
        4: initialMessages
    })
    const [inputValue, setInputValue] = useState("")

    const activeContact = contacts.find(c => c.id === activeContactId)
    const currentMessages = messagesMap[activeContactId] || []

    const handleSendMessage = () => {
        if (!inputValue.trim()) return

        const newMessage = {
            id: Date.now(),
            sender: "me",
            text: inputValue,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }

        setMessagesMap(prev => ({
            ...prev,
            [activeContactId]: [...(prev[activeContactId] || []), newMessage]
        }))
        setInputValue("")
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSendMessage()
        }
    }

    return (
        <div className="flex h-screen bg-[#F8FAFC] font-sans overflow-hidden">
            <Sidebar />

            <div className="flex-1 ml-64 flex flex-col min-w-0">
                <Header title="Messages" />

                <main className="flex-1 p-6 h-[calc(100vh-88px)]">
                    <div className="bg-white rounded-3xl shadow-[0_2px_20px_-5px_rgba(0,0,0,0.05)] h-full flex overflow-hidden border border-gray-100">

                        {/* Contacts List Sidebar */}
                        <div className="w-80 md:w-96 border-r border-gray-100 flex flex-col bg-white">
                            {/* Search */}
                            <div className="p-6 pb-2">
                                <div className="relative">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <Input
                                        placeholder="Search"
                                        className="pl-10 h-12 bg-gray-50 border-transparent focus:bg-white focus:border-blue-100 rounded-2xl transition-all"
                                    />
                                </div>
                            </div>

                            {/* List */}
                            <div className="flex-1 overflow-y-auto px-4 py-2 space-y-1">
                                {contacts.map((contact) => (
                                    <div
                                        key={contact.id}
                                        onClick={() => setActiveContactId(contact.id)}
                                        className={`flex items-start gap-3 p-4 rounded-2xl cursor-pointer transition-all duration-200 
                      ${activeContactId === contact.id ? 'bg-blue-50/80 shadow-sm border border-blue-100' : 'hover:bg-gray-50 border border-transparent'}
                    `}
                                    >
                                        <div className="relative shrink-0">
                                            <Avatar className="w-12 h-12">
                                                <AvatarImage src={contact.avatar} />
                                                <AvatarFallback>{contact.name[0]}</AvatarFallback>
                                            </Avatar>
                                            {contact.online && (
                                                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                                            )}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center justify-between mb-0.5">
                                                <h4 className={`text-sm font-bold ${activeContactId === contact.id ? 'text-blue-900' : 'text-gray-900'}`}>
                                                    {contact.name}
                                                </h4>
                                                <span className={`text-xs ${activeContactId === contact.id ? 'text-blue-400' : 'text-gray-400'}`}>
                                                    {contact.time}
                                                </span>
                                            </div>
                                            <p className={`text-xs truncate leading-relaxed ${activeContactId === contact.id ? 'text-blue-600/80 font-medium' : 'text-gray-500'}`}>
                                                {contact.lastMessage}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Chat Area */}
                        <div className="flex-1 flex flex-col bg-white">
                            {/* Chat Header */}
                            {activeContact && (
                                <div className="h-20 px-8 border-b border-gray-100 flex items-center justify-between shrink-0">
                                    <div className="flex items-center gap-4">
                                        <div className="relative">
                                            <Avatar className="w-10 h-10">
                                                <AvatarImage src={activeContact.avatar} />
                                                <AvatarFallback>{activeContact.name[0]}</AvatarFallback>
                                            </Avatar>
                                            {activeContact.online && (
                                                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></span>
                                            )}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">{activeContact.name}</h3>
                                            <p className="text-xs text-green-500 font-medium">{activeContact.online ? 'Active Now' : 'Offline'}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 text-gray-400">
                                        <button className="p-2 hover:bg-gray-50 rounded-full transition-colors"><Phone className="w-5 h-5" /></button>
                                        <button className="p-2 hover:bg-gray-50 rounded-full transition-colors"><Video className="w-5 h-5" /></button>
                                        <button className="p-2 hover:bg-gray-50 rounded-full transition-colors"><MoreVertical className="w-5 h-5" /></button>
                                    </div>
                                </div>
                            )}

                            {/* Messages Feed */}
                            <div className="flex-1 overflow-y-auto p-8 space-y-6 bg-white">
                                {currentMessages.length === 0 ? (
                                    <div className="flex h-full items-center justify-center text-gray-400 text-sm">
                                        No messages yet. Say hi to {activeContact?.name.split(' ')[0]}!
                                    </div>
                                ) : (
                                    currentMessages.map((msg, idx) => (
                                        <div key={idx} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                                            {msg.sender === 'other' && activeContact && (
                                                <Avatar className="w-8 h-8 mr-3 mt-1 shadow-sm">
                                                    <AvatarImage src={activeContact.avatar} />
                                                    <AvatarFallback>{activeContact.name[0]}</AvatarFallback>
                                                </Avatar>
                                            )}
                                            <div className={`max-w-[70%] space-y-1`}>
                                                <div
                                                    className={`p-4 rounded-2xl text-sm leading-relaxed shadow-sm
                          ${msg.sender === 'me'
                                                            ? 'bg-blue-600 text-white rounded-tr-none'
                                                            : 'bg-gray-50 text-gray-700 rounded-tl-none border border-gray-100'
                                                        }
                        `}
                                                >
                                                    {msg.text}
                                                </div>
                                                <p className={`text-[10px] font-medium ${msg.sender === 'me' ? 'text-right text-gray-400' : 'text-gray-400'}`}>
                                                    {msg.time}
                                                </p>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>

                            {/* Input Area */}
                            <div className="p-6 bg-white shrink-0">
                                <div className="flex items-center gap-4 bg-gray-50 p-2 rounded-[20px] border border-gray-100 focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-200 transition-all">
                                    <Input
                                        className="flex-1 border-none bg-transparent shadow-none focus-visible:ring-0 text-gray-700 placeholder:text-gray-400 h-10 px-4"
                                        placeholder="Type here..."
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        onKeyDown={handleKeyDown}
                                    />
                                    <div className="flex items-center gap-2 pr-2">
                                        <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
                                            <Smile className="w-5 h-5" />
                                        </button>
                                        <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
                                            <Paperclip className="w-5 h-5" />
                                        </button>
                                        <Button
                                            size="icon"
                                            onClick={handleSendMessage}
                                            className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl w-10 h-10 shadow-lg shadow-blue-200/50 transition-all hover:scale-105 active:scale-95"
                                        >
                                            <Send className="w-4 h-4 ml-0.5" />
                                        </Button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
