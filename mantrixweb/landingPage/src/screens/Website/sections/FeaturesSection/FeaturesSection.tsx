import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const featureCards = [
  {
    id: 1,
    position: "top-[83px] left-[548px]",
    type: "compact",
    icon: "/frame-1.svg",
    title: "Networking Opportunities",
    hasButton: false,
  },
  {
    id: 2,
    position: "top-[187px] left-[548px]",
    type: "full",
    icon: "/teachers-day-1.png",
    iconClass: "w-[79.17%] top-1.5 left-[14.58%] h-[38px] object-cover",
    title: "Qualified & Experienced Professors",
    subtitle: "(PhD Holders)",
    buttonText: "Build Resume",
    buttonClass: "bg-[#dcc1ff] border-[#a45dff]",
  },
  {
    id: 3,
    position: "top-[150px] left-[-174px]",
    type: "full",
    icon: "/iconly-pc-1723800402620-1.svg",
    title: "Affordable  Education",
    subtitle: "& Scholarships",
    buttonText: "Add Work",
    buttonClass: "bg-[#dcc1ff] border-[#a45dff]",
  },
  {
    id: 4,
    position: "top-[400px] left-[-174px]",
    type: "compact",
    icon: "/global-search.svg",
    title: "Trusted & Recognized (UGC & AICTE)",
    hasButton: false,
  },
];

const circles = [
  {
    size: "w-[636px] h-[636px]",
    position: "top-[calc(50.00%_-_318px)] left-[calc(50.00%_-_318px)]",
    bg: "bg-[#0066ff0a]",
    rounded: "rounded-[318px]",
    border: "border-[#b0d0ff]",
  },
  {
    size: "w-[532px] h-[532px]",
    position: "top-[calc(50.00%_-_266px)] left-[calc(50.00%_-_266px)]",
    bg: "bg-[#0066ff0d]",
    rounded: "rounded-[266px]",
    border: "border-[#8ab9ff]",
  },
  {
    size: "w-[408px] h-[408px]",
    position: "top-[calc(50.00%_-_204px)] left-[calc(50.00%_-_204px)]",
    bg: "bg-[#0066ff12]",
    rounded: "rounded-[204px]",
    border: "border-[#a45dff]",
  },
  {
    size: "w-[286px] h-[286px]",
    position: "top-[calc(50.00%_-_144px)] left-[calc(50.00%_-_143px)]",
    bg: "bg-[#0066ff57]",
    rounded: "rounded-[143px]",
    border: "border-[#0066ff]",
  },
];

export const FeaturesSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-[52px] px-0 py-[88px] relative">
      <header className="flex flex-col w-full max-w-[534px] items-center justify-center gap-4 relative">
        <h2 className="relative flex items-center justify-center w-full max-w-[654px] [font-family:'Montserrat',Helvetica] font-semibold text-[#002b6b] text-[56px] text-center tracking-[0] leading-[67.2px]">
          Why Choose Government Degree?
        </h2>

        <p className="relative w-full max-w-[502px] font-body-m font-[number:var(--body-m-font-weight)] text-neutralneutral-600 text-[length:var(--body-m-font-size)] text-center tracking-[var(--body-m-letter-spacing)] leading-[var(--body-m-line-height)] [font-style:var(--body-m-font-style)]">
          Unlock your quality education, and affordably, and that align with
          clear skills, interests and aspirations.
        </p>
      </header>

      <div className="relative w-[635px] h-[635px]">
        {circles.map((circle, index) => (
          <div
            key={`circle-${index}`}
            className={`${circle.position} ${circle.size} ${circle.bg} ${circle.rounded} ${circle.border} absolute border-[0.48px] border-solid`}
          />
        ))}

        <img
          className="absolute top-[3px] left-[552px] w-[84px] h-16"
          alt="Arrow"
          src="/arrow.png"
        />

        <img
          className="absolute top-[538px] left-1.5 w-[95px] h-[65px]"
          alt="Arrow"
          src="/arrow-1.png"
        />

        {featureCards.map((card) => {
          if (card.type === "compact") {
            return (
              <Card
                key={card.id}
                className={`flex w-[260px] items-center gap-3 p-4 absolute ${card.position} bg-pure-white-ffffff rounded-[20px] border-[0.85px] border-solid border-[#edeef0] shadow-drop-shadow`}
              >
                <CardContent className="flex items-center gap-3 p-0">
                  <img
                    className="relative w-12 h-12"
                    alt="Feature icon"
                    src={card.icon}
                  />

                  <div className="relative flex-1 font-body-l-b font-[number:var(--body-l-b-font-weight)] text-neutralneutral-900 text-[length:var(--body-l-b-font-size)] tracking-[var(--body-l-b-letter-spacing)] leading-[var(--body-l-b-line-height)] [font-style:var(--body-l-b-font-style)]">
                    {card.title}
                  </div>
                </CardContent>
              </Card>
            );
          }

          return (
            <Card
              key={card.id}
              className={`flex flex-col w-[260px] items-center justify-center gap-4 p-6 absolute ${card.position} bg-pure-white-ffffff rounded-[20px] border border-solid border-[#edeef0] shadow-drop-shadow`}
            >
              <CardContent className="flex flex-col items-center justify-center gap-4 p-0">
                <div className="relative w-12 h-12">
                  <img
                    className={
                      card.iconClass
                        ? `absolute ${card.iconClass}`
                        : "relative w-12 h-12"
                    }
                    alt="Feature icon"
                    src={card.icon}
                  />
                </div>

                <div className="flex flex-col items-center relative">
                  <div className="relative font-body-l-b font-[number:var(--body-l-b-font-weight)] text-neutralneutral-900 text-[length:var(--body-l-b-font-size)] text-center tracking-[var(--body-l-b-letter-spacing)] leading-[var(--body-l-b-line-height)] [font-style:var(--body-l-b-font-style)]">
                    {card.title}
                  </div>

                  {card.subtitle && (
                    <div className="relative font-body-too-small-r font-[number:var(--body-too-small-r-font-weight)] text-neutralneutral-600 text-[length:var(--body-too-small-r-font-size)] text-center tracking-[var(--body-too-small-r-letter-spacing)] leading-[var(--body-too-small-r-line-height)] [font-style:var(--body-too-small-r-font-style)]">
                      {card.subtitle}
                    </div>
                  )}
                </div>

                {card.buttonText && (
                  <Button
                    variant="outline"
                    className={`h-auto items-start gap-2.5 px-6 py-2 ${card.buttonClass} inline-flex relative rounded-[100px] border border-solid`}
                  >
                    <span className="relative w-fit font-body-too-small-m font-[number:var(--body-too-small-m-font-weight)] text-black text-[length:var(--body-too-small-m-font-size)] tracking-[var(--body-too-small-m-letter-spacing)] leading-[var(--body-too-small-m-line-height)] whitespace-nowrap [font-style:var(--body-too-small-m-font-style)]">
                      {card.buttonText}
                    </span>
                  </Button>
                )}
              </CardContent>
            </Card>
          );
        })}

        <Card className="absolute top-[calc(50.00%_-_286px)] left-[calc(50.00%_-_175px)] w-[349px] h-[572px] bg-pure-white-ffffff rounded-[20px] overflow-hidden border-0">
          <CardContent className="relative w-full h-full p-0">
            <img
              className="absolute top-0 left-0 w-[349px] h-[572px] object-cover"
              alt="Gemini generated"
              src="/gemini-generated-image-hjns7thjns7thjns-1.png"
            />

            <div className="absolute top-[511px] left-[calc(50.00%_-_80px)] [font-family:'General_Sans-Medium',Helvetica] font-medium text-pure-white-ffffff text-2xl text-center tracking-[0] leading-[28.8px] whitespace-nowrap">
              Video Resume
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
