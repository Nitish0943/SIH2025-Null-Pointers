import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { ChevronLeft, ChevronRight, Clock, Eye } from "lucide-react";

const successStories = [
  {
    id: 1,
    name: "Kavita Bisht",
    title: "Acid Attack Survivor, Social Reformer, and Real-Life Heroine",
    subtitle: "Acid Attack Survivor & Social Reformer",
    image: "data:image/jpeg;base64,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",
    timeAgo: "1 week ago",
    readTime: "2 Min",
    views: "11390",
  },
  {
    id: 2,
    name: "Aisha Khan",
    title: "From Village to IIT Delhi: Breaking Barriers",
    subtitle: "Engineering Student & Mentor",
    image: "/success-story-2.png",
    timeAgo: "2 weeks ago",
    readTime: "3 Min",
    views: "8540",
  },
  {
    id: 3,
    name: "Rohan Sharma",
    title: "Medical Dream Realized: First Doctor in Family",
    subtitle: "MBBS Student at GMC Srinagar",
    image: "/success-story-3.png",
    timeAgo: "3 weeks ago",
    readTime: "4 Min",
    views: "9820",
  },
];

export const CareerShowcaseSection = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? successStories.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === successStories.length - 1 ? 0 : prev + 1));
  };

  const currentStory = successStories[currentIndex];

  return (
    <section id="success-stories" className="flex w-full items-center justify-center px-[100px] py-[88px] bg-[#f8f9fa]">
      <div className="flex flex-col w-full max-w-[1200px] items-center gap-12">
        {/* Header */}
        <div className="text-center">
          <h2 className="[font-family:'Montserrat',Helvetica] font-bold text-[#1a1a1a] text-5xl mb-3">
            Inspiring Success Stories
          </h2>
          <p className="[font-family:'Manrope',Helvetica] text-[#6b7280] text-lg">
            Read empowering success stories of incredible women
          </p>
        </div>

        {/* Story Card */}
        <div className="w-full bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="flex items-center gap-8 p-8">
            {/* Left Side - Image */}
            <div className="flex-shrink-0 w-[450px] h-[280px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#ffd4a3] to-[#ff9a76]">
              <img
                src={currentStory.image}
                alt={currentStory.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Side - Content */}
            <div className="flex-1 flex flex-col gap-4">
              <h3 className="[font-family:'Montserrat',Helvetica] font-bold text-[#1a1a1a] text-3xl leading-tight">
                {currentStory.title}
              </h3>

              <div className="flex flex-col gap-2">
                <p className="[font-family:'Manrope',Helvetica] font-semibold text-[#e91e63] text-lg">
                  {currentStory.name}
                </p>
                <p className="[font-family:'Manrope',Helvetica] text-[#6b7280] text-base">
                  {currentStory.subtitle}
                </p>
              </div>

              <div className="h-px bg-gray-200 my-2" />

              {/* Meta Info */}
              <div className="flex items-center gap-6 text-[#9ca3af]">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="[font-family:'Manrope',Helvetica] text-sm">{currentStory.timeAgo}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="[font-family:'Manrope',Helvetica] text-sm">📖 {currentStory.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  <span className="[font-family:'Manrope',Helvetica] text-sm">{currentStory.views}</span>
                </div>
              </div>

              {/* Read More Button */}
              <Button
                className="self-start mt-2 px-6 py-2 bg-white border-0 text-[#e91e63] hover:text-[#c2185b] transition-colors [font-family:'Manrope',Helvetica] font-semibold text-base"
                variant="ghost"
                onClick={() => window.location.href = 'http://localhost:3000'}
              >
                Read More →
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-4">
          <button
            onClick={handlePrevious}
            className="w-12 h-12 rounded-full border-2 border-[#e5e7eb] bg-white hover:bg-gray-50 hover:border-[#e91e63] transition-all duration-300 flex items-center justify-center"
          >
            <ChevronLeft className="w-5 h-5 text-[#6b7280]" />
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border-2 border-[#e5e7eb] bg-white hover:bg-gray-50 hover:border-[#e91e63] transition-all duration-300 flex items-center justify-center"
          >
            <ChevronRight className="w-5 h-5 text-[#6b7280]" />
          </button>
        </div>
      </div>
    </section>
  );
};
