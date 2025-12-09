import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const steps = [
  {
    number: "01",
    title: "CAT Assesment",
    description: "Answer fun questions to unlock your strength & streams",
    icon: "/assesement-1.png",
    iconBg: "bg-[#e1e9fe]",
    numberPosition: "left",
    shadow: "shadow-drop-shadow",
  },
  {
    number: "02",
    title: "Visualize Career Map",
    description:
      "Explore salaries, jobs, entrance exams & higher study options",
    icon: "/career-1.png",
    iconBg: "bg-[#ffeed2]",
    numberPosition: "right",
    shadow: "shadow-[10px_25px_100px_#002b6b40]",
  },
  {
    number: "03",
    title: "Apply to college Near you",
    description: "Find colleges, check cut-offs, and track Admission Dates",
    icon: "/education-1.png",
    iconBg: "bg-[#f5e2ff]",
    numberPosition: "left",
    shadow: "shadow-drop-shadow",
  },
];

export const HowItWorksSection = (): JSX.Element => {
  return (
    <section className="flex w-full items-start justify-center px-[100px] py-[88px] bg-pure-white-ffffff">
      <div className="flex flex-col w-[581px] items-start gap-[9px] m-[20px] mr-[30px]">
        <h2 className="self-stretch mt-[-1.00px] [font-family:'General_Sans-Medium',Helvetica] font-medium text-neutralneutral-900 text-[56px] tracking-[0] leading-[67.2px]">
          How It Works
        </h2>

        <div className="flex flex-col items-start gap-[30px] self-stretch w-full">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-center gap-6 self-stretch w-full"
            >
              {step.numberPosition === "left" && (
                <div className="w-fit opacity-15 [font-family:'General_Sans-Medium',Helvetica] text-[108px] leading-[129.6px] whitespace-nowrap font-medium text-primaryprimary-900 tracking-[0]">
                  {step.number}
                </div>
              )}

              <Card
                className={`flex-1 bg-pure-white-ffffff rounded-[20px] border border-solid border-[#edeef0] ${step.shadow}`}
              >
                <CardContent className="gap-4 p-6 flex items-center">
                  <div
                    className={`inline-flex items-center justify-center gap-2.5 p-4 flex-[0_0_auto] ${step.iconBg} rounded-[43px] overflow-hidden`}
                  >
                    <img
                      className={`object-cover ${step.number === "01"
                        ? "w-[34px] h-[34px]"
                        : step.number === "02"
                          ? "w-[42px] h-[42px]"
                          : "w-9 h-9"
                        }`}
                      alt={step.title}
                      src={step.icon}
                    />
                  </div>

                  <div className="flex flex-col items-start justify-center gap-1 flex-1">
                    <h3 className="mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-neutralneutral-900 text-2xl tracking-[0] leading-[28.8px]">
                      {step.title}
                    </h3>

                    <p className="font-body-r font-[number:var(--body-r-font-weight)] text-neutralneutral-600 text-[length:var(--body-r-font-size)] tracking-[var(--body-r-letter-spacing)] leading-[var(--body-r-line-height)] [font-style:var(--body-r-font-style)]">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {step.numberPosition === "right" && (
                <div className="w-fit opacity-15 [font-family:'General_Sans-Medium',Helvetica] text-[108px] leading-[129.6px] whitespace-nowrap font-medium text-primaryprimary-900 tracking-[0]">
                  {step.number}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="self-stretch w-[579px] relative">
        <div className="left-[238px] w-[341px] h-[493px] [background:url(../photo.png)_50%_50%_/_cover] absolute top-0 rounded-[20px]" />

        <div className="left-0 w-[214px] h-[339px] flex overflow-hidden [background:url(../photo-1.png)_50%_50%_/_cover] absolute top-0 rounded-[20px]">
          <img
            className="w-[214px] h-[339px]"
            alt="Shutterstock"
            src="/shutterstock-2484576879-1-640x560-1.png"
          />
        </div>

        <Card className="inline-flex items-center justify-center gap-4 p-4 absolute top-[363px] left-0 bg-pure-white-ffffff rounded-[20px] border border-solid border-[#edeef0] shadow-drop-shadow">
          <CardContent className="p-0 flex items-center gap-4">
            <img className="flex-[0_0_auto]" alt="Frame" src="/frame-1-1.svg" />

            <div className="inline-flex flex-col items-start justify-center">
              <div className="w-fit mt-[-1.44px] font-body-l-b font-[number:var(--body-l-b-font-weight)] text-[#a45dff] text-[length:var(--body-l-b-font-size)] tracking-[var(--body-l-b-letter-spacing)] leading-[var(--body-l-b-line-height)] whitespace-nowrap [font-style:var(--body-l-b-font-style)]">
                10K +
              </div>

              <div className="w-[87px] font-bodysmall-sm font-[number:var(--bodysmall-sm-font-weight)] text-neutralneutral-600 text-[length:var(--bodysmall-sm-font-size)] tracking-[var(--bodysmall-sm-letter-spacing)] leading-[var(--bodysmall-sm-line-height)] [font-style:var(--bodysmall-sm-font-style)]">
                Students & Mentors
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
