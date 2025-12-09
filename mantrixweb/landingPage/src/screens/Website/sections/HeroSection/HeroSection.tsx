import React, { useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Search } from "lucide-react";

const dummyKeywords = [
  "Computer Science",
  "Mechanical Engineering",
  "Business & Management",
  "Medical Sciences",
  "Civil Engineering",
  "Information Technology",
  "Arts & Humanities",
  "Mentors in J&K",
  "Top Colleges in Srinagar"
];

export const HeroSection = (): JSX.Element => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    window.location.href = `http://localhost:3000?q=${encodeURIComponent(searchValue)}`;
  };

  return (
    <section className="relative w-full bg-white min-h-screen overflow-hidden flex flex-col">
      <div className="relative flex flex-col w-full items-center gap-[40px] z-10 pb-20">
        <header className="flex items-center h-28 justify-between gap-[86px] px-[53px] py-3 w-full bg-white shadow-sm">
          <div className="w-[255px] flex items-center gap-3">
            <div className="inline-flex flex-col items-center justify-center gap-2.5 px-0 py-[18px] rounded-xl">
              <h1 className="text-[42px] leading-none w-fit [font-family:'Montserrat',Helvetica] font-extrabold text-[#1a1a1a] tracking-tight whitespace-nowrap ml-20">
                Mantrix
              </h1>
            </div>
          </div>

          <nav className="flex items-center gap-8">
            <a
              href="#mentors"
              className="[font-family:'Manrope',Helvetica] font-semibold text-[#002b6b] text-base hover:text-[#a45dff] transition-colors duration-300 whitespace-nowrap"
            >
              Mentors
            </a>
            <a
              href="#courses"
              className="[font-family:'Manrope',Helvetica] font-semibold text-[#002b6b] text-base hover:text-[#a45dff] transition-colors duration-300 whitespace-nowrap"
            >
              Courses
            </a>
            <a
              href="#colleges"
              className="[font-family:'Manrope',Helvetica] font-semibold text-[#002b6b] text-base hover:text-[#a45dff] transition-colors duration-300 whitespace-nowrap"
            >
              Colleges
            </a>
            <a
              href="#success-stories"
              className="[font-family:'Manrope',Helvetica] font-semibold text-[#002b6b] text-base hover:text-[#a45dff] transition-colors duration-300 whitespace-nowrap"
            >
              Success Stories
            </a>
            <a
              href="#about-us"
              className="[font-family:'Manrope',Helvetica] font-semibold text-[#002b6b] text-base hover:text-[#a45dff] transition-colors duration-300 whitespace-nowrap"
            >
              About Us
            </a>
          </nav>

          <div className="inline-flex items-center gap-[58px] flex-[0_0_auto] mr-20">
            <Button
              variant="outline"
              onClick={() => window.location.href = 'http://localhost:3000'}
              className="items-center justify-center gap-4 pl-6 pr-1 py-1 mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] border-black backdrop-blur-[5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5px)_brightness(100%)] inline-flex rounded-[100px] border border-solid h-auto cursor-pointer"
            >
              <span className="flex items-center justify-center w-fit [font-family:'Manrope',Helvetica] font-bold text-black text-base tracking-[0] leading-6 whitespace-nowrap ">
                Login
              </span>
              <img
                className="w-10 h-10"
                alt="Iconoir arrow up"
                src="/iconoir-arrow-up-right.svg"
              />
            </Button>
          </div>
        </header>

        <div className="flex items-center justify-between gap-16 w-full max-w-[1400px] mt-12 px-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {/* Left Side - Mantrix Introduction */}
          <div className="flex-1 max-w-[650px]">
            <h2 className="[font-family:'Montserrat',Helvetica] font-bold text-[#002b6b] text-6xl mb-6 leading-tight">
              Your Gateway to Success<br />in Jammu & Kashmir
            </h2>
            <p className="[font-family:'Manrope',Helvetica] text-[#414d60] text-xl leading-relaxed">
              Mantrix is a comprehensive career guidance and mentorship platform designed specifically for students in Jammu & Kashmir.
              We connect aspiring students with experienced mentors, provide access to quality educational resources, and guide you through
              college admissions, competitive exams, and career planning.
            </p>
          </div>

          {/* Right Side - Popular Streams */}
          <div className="flex-1 flex flex-col items-center gap-6">
            {/* Popular Streams Heading */}
            <div className="text-center">
              <h3 className="[font-family:'Montserrat',Helvetica] font-bold text-[#002b6b] text-3xl mb-2 leading-tight">
                Popular Streams in J&K
              </h3>
              <p className="[font-family:'Manrope',Helvetica] text-[#414d60] text-base leading-relaxed">
                Discover top-rated career paths across Jammu & Kashmir
              </p>
            </div>

            {/* Stream Buttons */}
            <div className="flex flex-col items-center gap-4 w-full">
              {/* First Row */}
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => window.location.href = 'http://localhost:3000'}
                  className="px-8 py-3 rounded-full border-2 border-[#002b6b] bg-white hover:bg-[#f2e7fb] hover:border-[#a45dff] transition-all duration-300 [font-family:'Manrope',Helvetica] font-semibold text-[#002b6b] text-base whitespace-nowrap"
                >
                  Computer Science & Technology
                </button>
                <button
                  onClick={() => window.location.href = 'http://localhost:3000'}
                  className="px-8 py-3 rounded-full border-2 border-[#002b6b] bg-white hover:bg-[#f2e7fb] hover:border-[#a45dff] transition-all duration-300 [font-family:'Manrope',Helvetica] font-semibold text-[#002b6b] text-base whitespace-nowrap"
                >
                  Medical & Health Sciences
                </button>
                <button
                  onClick={() => window.location.href = 'http://localhost:3000'}
                  className="px-8 py-3 rounded-full border-2 border-[#002b6b] bg-white hover:bg-[#f2e7fb] hover:border-[#a45dff] transition-all duration-300 [font-family:'Manrope',Helvetica] font-semibold text-[#002b6b] text-base whitespace-nowrap"
                >
                  Civil Engineering
                </button>
              </div>

              {/* Second Row */}
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => window.location.href = 'http://localhost:3000'}
                  className="px-8 py-3 rounded-full border-2 border-[#002b6b] bg-white hover:bg-[#f2e7fb] hover:border-[#a45dff] transition-all duration-300 [font-family:'Manrope',Helvetica] font-semibold text-[#002b6b] text-base whitespace-nowrap"
                >
                  Tourism & Hospitality
                </button>
                <button
                  onClick={() => window.location.href = 'http://localhost:3000'}
                  className="px-8 py-3 rounded-full border-2 border-[#002b6b] bg-white hover:bg-[#f2e7fb] hover:border-[#a45dff] transition-all duration-300 [font-family:'Manrope',Helvetica] font-semibold text-[#002b6b] text-base whitespace-nowrap"
                >
                  Agriculture & Horticulture
                </button>
              </div>

              {/* Third Row */}
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => window.location.href = 'http://localhost:3000'}
                  className="px-8 py-3 rounded-full border-2 border-[#002b6b] bg-white hover:bg-[#f2e7fb] hover:border-[#a45dff] transition-all duration-300 [font-family:'Manrope',Helvetica] font-semibold text-[#002b6b] text-base whitespace-nowrap"
                >
                  Business & Management
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Search Bar - Moved to Bottom & Widened */}
        <div className="w-full max-w-[1200px] px-6 mt-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="flex w-full items-center gap-2 relative">
            <div className="relative w-full">
              <Search className="absolute left-6 top-1/2 h-6 w-6 -translate-y-1/2 text-gray-400" />
              <Input
                style={{ paddingLeft: '5rem' }}
                className="pl-20 pr-4 h-[72px] rounded-full border-2 border-[#e5e7eb] focus-visible:ring-[#a45dff] text-xl bg-white shadow-xl w-full"
                placeholder="Search mentors, colleges, courses..."
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onFocus={() => setShowDropdown(true)}
                onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
              />

              {/* Dropdown */}
              {showDropdown && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-20 animate-in fade-in zoom-in-95 duration-200">
                  <div className="p-2">
                    <p className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      Popular Searches
                    </p>
                    {dummyKeywords.filter(k => k.toLowerCase().includes(searchValue.toLowerCase())).map((keyword, index) => (
                      <div
                        key={index}
                        className="px-4 py-3 hover:bg-gray-50 rounded-xl cursor-pointer text-gray-700 flex items-center gap-6 transition-colors text-lg"
                        onClick={() => {
                          window.location.href = `http://localhost:3000?q=${encodeURIComponent(keyword)}`;
                        }}
                      >
                        <Search className="h-4 w-4 text-gray-400" />
                        {keyword}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Button
              onClick={handleSearch}
              className="rounded-full px-12 h-[72px] bg-[#002b6b] hover:bg-[#001f4d] text-white text-xl font-bold shadow-lg transition-all hover:shadow-xl hover:scale-105"
            >
              Search
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};
