import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";

const courses = [
    {
        id: 1,
        name: "Computer Science & Engineering",
        duration: "4 Years",
        degree: "B.Tech",
        colleges: "50+ Colleges",
        avgFees: "₹50,000/year",
        icon: "💻",
        color: "from-[#e1e9fe] to-[#d4e4ff]",
    },
    {
        id: 2,
        name: "Medicine (MBBS)",
        duration: "5.5 Years",
        degree: "MBBS",
        colleges: "10+ Colleges",
        avgFees: "₹1,00,000/year",
        icon: "🩺",
        color: "from-[#ffe2e2] to-[#ffd4d4]",
    },
    {
        id: 3,
        name: "Business Administration",
        duration: "3 Years",
        degree: "BBA",
        colleges: "30+ Colleges",
        avgFees: "₹40,000/year",
        icon: "💼",
        color: "from-[#fff4d4] to-[#ffe8b3]",
    },
    {
        id: 4,
        name: "Civil Engineering",
        duration: "4 Years",
        degree: "B.Tech",
        colleges: "40+ Colleges",
        avgFees: "₹45,000/year",
        icon: "🏗️",
        color: "from-[#d4f4dd] to-[#c3e8cc]",
    },
    {
        id: 5,
        name: "Hotel Management",
        duration: "3 Years",
        degree: "BHM",
        colleges: "15+ Colleges",
        avgFees: "₹60,000/year",
        icon: "🏨",
        color: "from-[#f5e2ff] to-[#ead4ff]",
    },
    {
        id: 6,
        name: "Agriculture",
        duration: "4 Years",
        degree: "B.Sc Agriculture",
        colleges: "20+ Colleges",
        avgFees: "₹35,000/year",
        icon: "🌾",
        color: "from-[#e8f5d4] to-[#d9ecc3]",
    },
];

export const CourseScreen = (): JSX.Element => {
    return (
        <section id="courses" className="flex w-full items-center justify-center px-[100px] py-[88px] bg-[#fafafa]">
            <div className="flex flex-col w-full max-w-[1400px] items-center gap-12">
                <div className="text-center">
                    <h2 className="[font-family:'Montserrat',Helvetica] font-bold text-[#002b6b] text-5xl mb-4">
                        Popular Courses in J&K
                    </h2>
                    <p className="[font-family:'Manrope',Helvetica] text-[#414d60] text-xl">
                        Discover the most sought-after courses and build your dream career
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                    {courses.map((course) => (
                        <Card
                            key={course.id}
                            className="bg-white rounded-[20px] border border-solid border-[#edeef0] hover:shadow-xl hover:border-[#a45dff] transition-all duration-300 cursor-pointer"
                        >
                            <CardContent className="p-6">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center text-3xl mb-4`}>
                                    {course.icon}
                                </div>

                                <h3 className="[font-family:'Montserrat',Helvetica] font-semibold text-[#002b6b] text-xl mb-3 leading-tight">
                                    {course.name}
                                </h3>

                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center gap-2 text-[#414d60]">
                                        <span className="text-sm">🎓</span>
                                        <span className="text-sm [font-family:'Manrope',Helvetica]">{course.degree}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-[#414d60]">
                                        <span className="text-sm">⏱️</span>
                                        <span className="text-sm [font-family:'Manrope',Helvetica]">{course.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-[#414d60]">
                                        <span className="text-sm">🏛️</span>
                                        <span className="text-sm [font-family:'Manrope',Helvetica]">{course.colleges}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-[#414d60]">
                                        <span className="text-sm">💰</span>
                                        <span className="text-sm [font-family:'Manrope',Helvetica] font-semibold">{course.avgFees}</span>
                                    </div>
                                </div>

                                <Button
                                    className="w-full bg-gradient-to-r from-[#a45dff] to-[#8e44eb] hover:from-[#9346f3] hover:to-[#7d32e0] text-white rounded-full"
                                    onClick={() => window.location.href = 'http://localhost:3000/user/course-search'}
                                >
                                    Explore Course
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <Button
                    className="px-8 py-6 bg-white border-2 border-[#002b6b] text-[#002b6b] rounded-full hover:bg-[#f2e7fb] hover:border-[#a45dff] transition-all duration-300 text-lg font-semibold"
                    onClick={() => window.location.href = 'http://localhost:3000/user/course-search'}
                >
                    View All Courses
                </Button>
            </div>
        </section>
    );
};
