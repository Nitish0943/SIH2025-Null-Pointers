import React, { useState } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const categories = [
  { id: "developer", label: "Developer", icon: "/icon-8.svg" },
  { id: "ui-designer", label: "UI Designer", icon: "/icon-1.svg" },
  { id: "project-manager", label: "Project Manager", icon: "/icon.svg" },
  { id: "designer", label: "Designer", icon: "/icon-4.svg" },
  { id: "accountant", label: "Accountant", icon: "/icon-6.svg" },
  { id: "human-resource", label: "Human Resource", icon: "/icon-3.svg" },
  { id: "marketing", label: "Marketing", icon: "/icon-5.svg" },
];

const mentors = [
  {
    id: 1,
    name: "Zrand Hobs",
    profession: "Developer",
    avatar: "/-avatar.png",
    rating: 4.8,
    reviews: 6,
    skills: ["Gimp", "Wordpress"],
    verified: true,
    featured: false,
  },
  {
    id: 2,
    name: "Dorothy Wood",
    profession: "Teacher",
    avatar: "/-avatar-1.png",
    rating: 4.8,
    reviews: 6,
    skills: ["Elementor", "Wix", "Illustrator"],
    verified: false,
    featured: false,
  },
  {
    id: 3,
    name: "Timothy Baker",
    profession: "Teacher",
    avatar: "/-avatar-2.png",
    rating: 4.8,
    reviews: 6,
    skills: ["Figma", "Elementor", "Wordpress"],
    verified: true,
    featured: false,
  },
  {
    id: 4,
    name: "Shane Pratt",
    profession: "Developer",
    avatar: "/-avatar-3.png",
    rating: 4.8,
    reviews: 6,
    skills: ["Figma", "Wordpress", "Gimp"],
    verified: true,
    featured: false,
  },
  {
    id: 5,
    name: "Frances Washing",
    profession: "Developer",
    avatar: "/-avatar-4.png",
    rating: 4.8,
    reviews: 6,
    skills: ["Wordpress", "Wix", "Illustrator"],
    verified: false,
    featured: false,
  },
  {
    id: 6,
    name: "Jason Bell",
    profession: "Web Designer",
    avatar: "/-avatar-5.png",
    rating: 4.8,
    reviews: 6,
    skills: ["Elementor", "Wordpress"],
    verified: true,
    featured: false,
  },
  {
    id: 7,
    name: "Kathryn Sanchez",
    profession: "Teacher",
    avatar: "/-avatar-6.png",
    rating: 4.8,
    reviews: 6,
    skills: ["Framer", "Webflow", "Wix"],
    verified: false,
    featured: false,
  },
  {
    id: 8,
    name: "Jaime Strickland",
    profession: "Web Designer",
    avatar: "/-avatar-7.png",
    rating: 4.8,
    reviews: 6,
    skills: ["Gimp", "Figma", "Webflow"],
    verified: false,
    featured: false,
  },
];

export const JobSeekersSection = (): JSX.Element => {
  const [activeCategory, setActiveCategory] = useState("ui-designer");
  const [selectedMentor, setSelectedMentor] = useState<number | null>(null);

  const handleMentorClick = (mentorId: number) => {
    window.location.href = "http://localhost:3000/user/mentor-connect";
  };

  return (
    <section id="mentors" className="flex flex-col w-full items-center gap-10 px-[100px] py-[88px] bg-white-2-fafafa">
      <header className="inline-flex flex-col items-center justify-center gap-4">
        <h2 className="w-[792px] [font-family:'General_Sans-Semibold',Helvetica] font-normal text-[#002b6b] text-[56px] text-center tracking-[0] leading-[67.2px]">
          Mentors to Connect
          <br />
          Popular field Professionals
        </h2>

        <p className="w-[548px] [font-family:'Manrope',Helvetica] font-normal text-neutralneutral-600 text-base text-center tracking-[0] leading-6">
          Find mentors for your specific needs and kickstart your career journey
        </p>
      </header>

      <nav className="flex items-start gap-2 w-full border-b border-solid border-[#c6cad1]">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`group flex items-center justify-center gap-2 px-0 py-3 flex-1 border-b-2 transition-all duration-300 ${activeCategory === category.id
              ? "border-[#a35dff] bg-[linear-gradient(180deg,rgba(238,210,255,0)_50%,rgba(248,237,255,1)_100%)]"
              : "border-transparent hover:border-[#a35dff]/30 hover:bg-gray-50"
              }`}
          >
            <img
              className={`w-6 h-6 transition-all duration-300 ${activeCategory === category.id ? "[filter:invert(44%)_sepia(86%)_saturate(2206%)_hue-rotate(246deg)_brightness(99%)_contrast(104%)]" : "grayscale group-hover:[filter:invert(44%)_sepia(86%)_saturate(2206%)_hue-rotate(246deg)_brightness(99%)_contrast(104%)]"
                }`}
              alt={category.label}
              src={category.icon}
            />
            <span
              className={`font-body-m font-[number:var(--body-m-font-weight)] text-[length:var(--body-m-font-size)] tracking-[var(--body-m-letter-spacing)] leading-[var(--body-m-line-height)] whitespace-nowrap [font-style:var(--body-m-font-style)] transition-colors duration-300 ${activeCategory === category.id
                ? "text-[#a45dff]"
                : "text-neutralneutral-400 group-hover:text-[#a45dff]"
                }`}
            >
              {category.label}
            </span>
          </button>
        ))}
      </nav>

      <div className="flex flex-col items-center justify-center gap-6 w-full">
        <div className="grid grid-cols-4 gap-6 w-full">
          {mentors.slice(0, 4).map((mentor) => (
            <Card
              key={mentor.id}
              onClick={() => handleMentorClick(mentor.id)}
              className={`flex flex-col items-center justify-center gap-[21px] px-4 py-6 rounded-[20px] overflow-hidden border border-solid cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-[#a45dff] hover:bg-[#f2e7fb] ${selectedMentor === mentor.id
                ? "bg-[#f2e7fb] border-[#a45dff] shadow-drop-shadow"
                : mentor.featured
                  ? "bg-[#f2e7fb] border-[#a45dff] shadow-drop-shadow"
                  : "bg-white border-[#edeef0]"
                }`}
            >
              <CardContent className="flex flex-col w-[185px] items-center gap-[7px] p-0">
                <div className="relative">
                  <Avatar className="w-16 h-16">
                    <AvatarImage
                      src={mentor.avatar}
                      alt={mentor.name}
                      className="object-cover"
                    />
                    <AvatarFallback>{mentor.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  {mentor.verified && (
                    <img
                      className="absolute top-[49px] left-[46px] w-3 h-3"
                      alt="Verified"
                      src="/vector.svg"
                    />
                  )}
                </div>

                <div className="inline-flex items-center justify-center gap-2.5 px-2.5 py-0">
                  <img
                    className="w-[15px] h-[15px]"
                    alt="Star"
                    src="/iconoir-star-solid.svg"
                  />
                  <div className="[font-family:'Manrope',Helvetica] font-normal text-sm tracking-[0] leading-[14px]">
                    <span className="font-[number:var(--bodysmall-sm-font-weight)] text-[#272f3a] leading-[var(--bodysmall-sm-line-height)] font-bodysmall-sm [font-style:var(--bodysmall-sm-font-style)] tracking-[var(--bodysmall-sm-letter-spacing)] text-[length:var(--bodysmall-sm-font-size)]">
                      {mentor.rating}{" "}
                    </span>
                    <span className="text-[#272f3a] text-xs leading-[18px]">
                      ({mentor.reviews})
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-center w-full">
                  <h3 className="font-body-l-b font-[number:var(--body-l-b-font-weight)] text-neutralneutral-900 text-[length:var(--body-l-b-font-size)] text-center tracking-[var(--body-l-b-letter-spacing)] leading-[var(--body-l-b-line-height)] [font-style:var(--body-l-b-font-style)]">
                    {mentor.name}
                  </h3>
                  <p className="font-body-too-small-r font-[number:var(--body-too-small-r-font-weight)] text-neutralneutral-500 text-[length:var(--body-too-small-r-font-size)] text-center tracking-[var(--body-too-small-r-letter-spacing)] leading-[var(--body-too-small-r-line-height)] [font-style:var(--body-too-small-r-font-style)]">
                    {mentor.profession}
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-[4px_4px] w-full">
                  {mentor.skills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className={`inline-flex items-center justify-center gap-1.5 px-3 py-1 rounded-[100px] border border-solid ${mentor.featured
                        ? "border-[#a45dff]"
                        : "border-[#edeef0]"
                        }`}
                    >
                      <span className="font-body-too-small-m font-[number:var(--body-too-small-m-font-weight)] text-neutralneutral-700 text-[length:var(--body-too-small-m-font-size)] tracking-[var(--body-too-small-m-letter-spacing)] leading-[var(--body-too-small-m-line-height)] [font-style:var(--body-too-small-m-font-style)]">
                        {skill}
                      </span>
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-4 gap-6 w-full">
          {mentors.slice(4, 8).map((mentor) => (
            <Card
              key={mentor.id}
              onClick={() => handleMentorClick(mentor.id)}
              className={`flex flex-col items-center justify-center gap-[21px] px-4 py-6 rounded-[20px] overflow-hidden border border-solid cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-[#a45dff] hover:bg-[#f2e7fb] ${selectedMentor === mentor.id
                ? "bg-[#f2e7fb] border-[#a45dff] shadow-drop-shadow"
                : mentor.featured
                  ? "bg-[#f2e7fb] border-[#a45dff] shadow-drop-shadow"
                  : "bg-white border-[#edeef0]"
                }`}
            >
              <CardContent className="flex flex-col w-[185px] items-center gap-[7px] p-0">
                <div className="relative">
                  <Avatar className="w-16 h-16">
                    <AvatarImage
                      src={mentor.avatar}
                      alt={mentor.name}
                      className="object-cover"
                    />
                    <AvatarFallback>{mentor.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  {mentor.verified && (
                    <img
                      className="absolute top-[49px] left-[46px] w-3 h-3"
                      alt="Verified"
                      src="/vector.svg"
                    />
                  )}
                </div>

                <div className="inline-flex items-center justify-center gap-2.5 px-2.5 py-0">
                  <img
                    className="w-[15px] h-[15px]"
                    alt="Star"
                    src="/iconoir-star-solid.svg"
                  />
                  <div className="[font-family:'Manrope',Helvetica] font-normal text-sm tracking-[0] leading-[14px]">
                    <span className="font-[number:var(--bodysmall-sm-font-weight)] text-[#272f3a] leading-[var(--bodysmall-sm-line-height)] font-bodysmall-sm [font-style:var(--bodysmall-sm-font-style)] tracking-[var(--bodysmall-sm-letter-spacing)] text-[length:var(--bodysmall-sm-font-size)]">
                      {mentor.rating}{" "}
                    </span>
                    <span className="text-[#272f3a] text-xs leading-[18px]">
                      ({mentor.reviews})
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-center w-full">
                  <h3 className="font-body-l-b font-[number:var(--body-l-b-font-weight)] text-neutralneutral-900 text-[length:var(--body-l-b-font-size)] text-center tracking-[var(--body-l-b-letter-spacing)] leading-[var(--body-l-b-line-height)] [font-style:var(--body-l-b-font-style)]">
                    {mentor.name}
                  </h3>
                  <p className="font-body-too-small-r font-[number:var(--body-too-small-r-font-weight)] text-neutralneutral-500 text-[length:var(--body-too-small-r-font-size)] text-center tracking-[var(--body-too-small-r-letter-spacing)] leading-[var(--body-too-small-r-line-height)] [font-style:var(--body-too-small-r-font-style)]">
                    {mentor.profession}
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-[4px_4px] w-full">
                  {mentor.skills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className={`inline-flex items-center justify-center gap-1.5 px-3 py-1 rounded-[100px] border border-solid ${mentor.featured
                        ? "border-[#a45dff]"
                        : "border-[#edeef0]"
                        }`}
                    >
                      <span className="font-body-too-small-m font-[number:var(--body-too-small-m-font-weight)] text-neutralneutral-700 text-[length:var(--body-too-small-m-font-size)] tracking-[var(--body-too-small-m-letter-spacing)] leading-[var(--body-too-small-m-line-height)] [font-style:var(--body-too-small-m-font-style)]">
                        {skill}
                      </span>
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        onClick={() => window.location.href = "http://localhost:3000/user/mentor-connect"}
        className="inline-flex items-center gap-4 pl-6 pr-1 py-1 h-auto bg-pure-white-ffffff rounded-[100px] border border-solid border-[#a45dff] backdrop-blur-[5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5px)_brightness(100%)]"
      >
        <span className="font-body-b font-[number:var(--body-b-font-weight)] text-black text-[length:var(--body-b-font-size)] tracking-[var(--body-b-letter-spacing)] leading-[var(--body-b-line-height)] [font-style:var(--body-b-font-style)]">
          View All
        </span>
        <img
          className="w-10 h-10"
          alt="Arrow up right"
          src="/iconoir-arrow-up-right.svg"
        />
      </Button>
    </section>
  );
};
