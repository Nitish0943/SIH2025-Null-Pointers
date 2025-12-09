import { MailIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

const quickLinks = [
  { label: "Pricing", href: "#" },
  { label: "Jobs", href: "#" },
  { label: "Employeer", href: "#" },
  { label: "Сareers", href: "#" },
  { label: "Contact Us", href: "#" },
];

const othersLinks = [
  { label: "How it works", href: "#" },
  { label: "Terms and condition", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "About Us", href: "#" },
];

const aboutUsLinks = [
  { label: "Career milestone", href: "#" },
  { label: "Web mail", href: "#" },
  { label: "Mentors", href: "#" },
  { label: "Senior Management", href: "#" },
];

export const CtaFooterSection = (): JSX.Element => {
  return (
    <section id="about-us" className="relative w-full">
      <div className="relative flex flex-col items-center px-[100px] pt-0 pb-12 bg-white-2-fafafa">
        <div className="relative w-full max-w-[1240px] bg-white-2-fafafa rounded-3xl overflow-hidden shadow-[0px_16px_40px_#391de814] pt-[88px] pb-14 px-10 mb-[100px]">

          <div className="relative flex flex-col items-center justify-center gap-8 max-w-[670px] mx-auto">
            <div className="flex flex-col items-center justify-center gap-4 w-full">
              <h2 className="[font-family:'Montserrat',Helvetica] font-semibold text-[#002b6b] text-[40px] text-center tracking-[0] leading-[48.0px]">
                Join Mantrix and unlock your dream career today
              </h2>

              <p className="w-full max-w-[561px] [font-family:'Manrope',Helvetica] font-normal text-neutralneutral-600 text-base text-center tracking-[0] leading-6">
                Unlock your true potential and discover a world of opportunities
                that align with your skills, interests, and aspirations
              </p>
            </div>

            <div className="flex items-start justify-center gap-2 w-full">
              <div className="flex-1 max-w-96 flex items-center gap-2 px-6 py-4 bg-neutral-10 rounded-[56px] border border-solid border-[#ededed] shadow-[8px_8px_56px_#0000000d]">
                <MailIcon className="w-6 h-6 text-neutralneutral-300" />
                <Input
                  type="email"
                  placeholder="Your mail address"
                  className="flex-1 border-0 bg-transparent p-0 font-body-m font-[number:var(--body-m-font-weight)] text-neutralneutral-300 text-[length:var(--body-m-font-size)] tracking-[var(--body-m-letter-spacing)] leading-[var(--body-m-line-height)] [font-style:var(--body-m-font-style)] focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>

              <Button className="h-auto px-12 py-4 bg-[#f2e7fb] border-[#a45dff] rounded-[100px] border border-solid [font-family:'Manrope',Helvetica] font-bold text-black text-base tracking-[0] leading-6 whitespace-nowrap hover:bg-[#e8d9f7]">
                Join Us
              </Button>
            </div>
          </div>
        </div>

        <footer className="relative w-full flex flex-col items-start gap-[100px] bg-white-2-fafafa pt-8 pb-16 min-h-[500px]">

          <div className="relative flex items-start justify-between w-full">
            <div className="inline-flex flex-col items-start gap-[15px]">
              <div className="flex items-center gap-3">
                <div className="inline-flex flex-col items-center justify-center gap-2.5 px-0 py-[18px] rounded-xl">
                  <h3 className="text-[42px] leading-none [font-family:'Montserrat',Helvetica] font-extrabold text-[#1a1a1a] tracking-tight whitespace-nowrap">
                    Mantrix
                  </h3>
                </div>
              </div>
            </div>

            <nav className="flex flex-col w-[132px] items-start gap-[13px]">
              <h4 className="font-body-l-b font-[number:var(--body-l-b-font-weight)] text-neutralneutral-900 text-[length:var(--body-l-b-font-size)] tracking-[var(--body-l-b-letter-spacing)] leading-[var(--body-l-b-line-height)] [font-style:var(--body-l-b-font-style)]">
                Quick Links
              </h4>

              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="font-body-r font-[number:var(--body-r-font-weight)] text-neutralneutral-600 text-[length:var(--body-r-font-size)] tracking-[var(--body-r-letter-spacing)] leading-[var(--body-r-line-height)] [font-style:var(--body-r-font-style)] hover:text-neutralneutral-900 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <nav className="flex flex-col w-[190px] items-start gap-2">
              <h4 className="font-body-l-b font-[number:var(--body-l-b-font-weight)] text-neutralneutral-900 text-[length:var(--body-l-b-font-size)] tracking-[var(--body-l-b-letter-spacing)] leading-[var(--body-l-b-line-height)] [font-style:var(--body-l-b-font-style)]">
                Others
              </h4>

              {othersLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="font-body-r font-[number:var(--body-r-font-weight)] text-neutralneutral-600 text-[length:var(--body-r-font-size)] tracking-[var(--body-r-letter-spacing)] leading-[var(--body-r-line-height)] [font-style:var(--body-r-font-style)] hover:text-neutralneutral-900 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <nav className="inline-flex flex-col items-start gap-[13px]">
              <h4 className="font-body-l-b font-[number:var(--body-l-b-font-weight)] text-neutralneutral-900 text-[length:var(--body-l-b-font-size)] tracking-[var(--body-l-b-letter-spacing)] leading-[var(--body-l-b-line-height)] [font-style:var(--body-l-b-font-style)]">
                About us
              </h4>

              {aboutUsLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="font-body-r font-[number:var(--body-r-font-weight)] text-neutralneutral-600 text-[length:var(--body-r-font-size)] tracking-[var(--body-r-letter-spacing)] leading-[var(--body-r-line-height)] [font-style:var(--body-r-font-style)] hover:text-neutralneutral-900 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="relative flex items-center justify-between w-full">
            <p className="w-[400px] font-body-r font-[number:var(--body-r-font-weight)] text-primaryprimary-900 text-[length:var(--body-r-font-size)] tracking-[var(--body-r-letter-spacing)] leading-[var(--body-r-line-height)] [font-style:var(--body-r-font-style)]">
              ©2025 All rights reserved
            </p>

            <img
              className="flex-shrink-0"
              alt="Social media icons"
              src="/frame-1000003067.svg"
            />
          </div>
        </footer>
      </div>
    </section>
  );
};
