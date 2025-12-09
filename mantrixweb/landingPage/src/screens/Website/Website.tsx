import React from "react";
import { CareerShowcaseSection } from "./sections/CareerShowcaseSection";
import { CtaFooterSection } from "./sections/CtaFooterSection";
import { FaqSection } from "./sections/FaqSection";
import { HeroSection } from "./sections/HeroSection";
import { JobSeekersSection } from "./sections/JobSeekersSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { CollegeScreen } from "./sections/CollegeScreen";
import { CourseScreen } from "./sections/CourseScreen";

export const Website = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-center bg-pure-white-ffffff">
      <HeroSection />
      <JobSeekersSection />
      <CollegeScreen />
      <CourseScreen />
      <CareerShowcaseSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaFooterSection />
    </div>
  );
};
