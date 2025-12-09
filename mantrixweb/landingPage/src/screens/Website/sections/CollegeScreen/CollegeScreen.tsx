import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";

const colleges = [
    {
        id: 1,
        name: "Government College for Women, M.A. Road Srinagar",
        location: "Srinagar",
        type: "Government",
        rating: 4.5,
        courses: ["B.A.", "B.Sc.", "B.Com", "M.A."],
        image: "https://images.unsplash.com/photo-1562774053-701939374585?w=500&q=80",
    },
    {
        id: 2,
        name: "Amar Singh College",
        location: "Srinagar",
        type: "Government",
        rating: 4.3,
        courses: ["B.A.", "B.Sc.", "B.Com", "M.Sc."],
        image: "https://images.unsplash.com/photo-1562774053-701939374585?w=500&q=80",
    },
    {
        id: 3,
        name: "Government Degree College Baramulla",
        location: "Baramulla",
        type: "Government",
        rating: 4.2,
        courses: ["B.A.", "B.Sc.", "B.Com"],
        image: "https://images.unsplash.com/photo-1562774053-701939374585?w=500&q=80",
    },
];

export const CollegeScreen = (): JSX.Element => {
    return (
        <section id="colleges" className="flex w-full items-center justify-center px-[100px] py-[88px] bg-white">
            <div className="flex flex-col w-full max-w-[1400px] items-center gap-12">
                <div className="text-center">
                    <h2 className="[font-family:'Montserrat',Helvetica] font-bold text-[#002b6b] text-5xl mb-4">
                        Top Colleges in Jammu & Kashmir
                    </h2>
                    <p className="[font-family:'Manrope',Helvetica] text-[#414d60] text-xl">
                        Explore the best colleges across J&K for your higher education
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                    {colleges.map((college) => (
                        <Card
                            key={college.id}
                            className="bg-white rounded-[20px] border border-solid border-[#edeef0] hover:shadow-xl hover:border-[#a45dff] transition-all duration-300 cursor-pointer overflow-hidden"
                        >
                            <CardContent className="p-0">
                                <div className="h-48 w-full">
                                    <img
                                        src={college.image}
                                        alt={college.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-3">
                                        <h3 className="[font-family:'Montserrat',Helvetica] font-semibold text-[#002b6b] text-xl leading-tight flex-1">
                                            {college.name}
                                        </h3>
                                    </div>

                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-sm text-[#414d60]">📍 {college.location}</span>
                                        <span className="text-sm text-[#414d60]">•</span>
                                        <span className="text-sm text-[#414d60]">{college.type}</span>
                                    </div>

                                    <div className="flex items-center gap-1 mb-4">
                                        <span className="text-yellow-500">⭐</span>
                                        <span className="[font-family:'Manrope',Helvetica] font-semibold text-[#002b6b]">
                                            {college.rating}
                                        </span>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {college.courses.slice(0, 3).map((course, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 bg-[#f2e7fb] text-[#a45dff] rounded-full text-sm [font-family:'Manrope',Helvetica] font-medium"
                                            >
                                                {course}
                                            </span>
                                        ))}
                                    </div>

                                    <Button
                                        className="w-full bg-gradient-to-r from-[#a45dff] to-[#8e44eb] hover:from-[#9346f3] hover:to-[#7d32e0] text-white rounded-full"
                                        onClick={() => window.location.href = 'http://localhost:3000/user/college-search'}
                                    >
                                        View Details
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <Button
                    className="px-8 py-6 bg-white border-2 border-[#002b6b] text-[#002b6b] rounded-full hover:bg-[#f2e7fb] hover:border-[#a45dff] transition-all duration-300 text-lg font-semibold"
                    onClick={() => window.location.href = 'http://localhost:3000/user/college-search'}
                >
                    View All Colleges
                </Button>
            </div>
        </section>
    );
};
