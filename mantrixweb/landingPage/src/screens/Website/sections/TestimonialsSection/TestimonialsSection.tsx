import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-10 px-[100px] py-[88px] bg-white-2-fafafa">
      <div className="flex w-full max-w-[614px] items-center justify-center">
        <h2 className="flex-1 [font-family:'Montserrat',Helvetica] font-semibold text-[#002b6b] text-[56px] tracking-[0] leading-[67.2px] text-center">
          What our Mentor say
        </h2>
      </div>

      <div className="flex items-center justify-center gap-6 w-full">
        <Card className="flex-1 bg-[#1e242c] rounded-[20px] h-[500px]  border-0 overflow-hidden">
          <CardContent className="flex flex-col items-center justify-center gap-10 px-4 py-12">
            <div className="inline-flex items-center gap-4">
              <h3 className="[font-family:'Manrope',Helvetica] font-semibold text-pure-white-ffffff text-xl tracking-[0] leading-[30px] whitespace-nowrap">
                Mahesh Babu
              </h3>

              <img className="w-[5px] h-[5px]" alt="Separator" src="/-.svg" />

              <p className="font-body-l-m font-[number:var(--body-l-m-font-weight)] text-neutralneutral-200 text-[length:var(--body-l-m-font-size)] leading-[var(--body-l-m-line-height)] whitespace-nowrap tracking-[var(--body-l-m-letter-spacing)] [font-style:var(--body-l-m-font-style)]">
                Front-End Lead
              </p>
            </div>

            <blockquote className="w-full max-w-[528px] [font-family:'General_Sans-Medium',Helvetica] font-medium text-pure-white-ffffff text-[28px] text-center tracking-[0] leading-[33.6px]">
              &quot;Working with Mantrix.in has been an incredibly rewarding
              experience
            </blockquote>

            <div className="flex flex-col w-[214px] items-start gap-2.5">
              <div className="relative w-[214px] h-[125px]">
                <div className="absolute left-0 top-0 w-[125px] h-[125px] rounded-[62.5px] bg-[linear-gradient(141deg,rgba(255,251,0,1)_0%,rgba(2,2,0,1)_100%)] border border-solid border-black" />
                <div className="absolute left-[89px] top-0 w-[125px] h-[125px] rounded-[62.5px] bg-[linear-gradient(141deg,rgba(220,193,255,1)_0%,rgba(88,72,137,1)_85%)] border-[0.6px] border-solid border-black" />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="w-[500px] h-[500px] rounded-[20px] bg-[url(/6037150-businesswoman-business-3840x2160-1.png)] bg-cover bg-[50%_50%]" />
      </div>
    </section>
  );
};
