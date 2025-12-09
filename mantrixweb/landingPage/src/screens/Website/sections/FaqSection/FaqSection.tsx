import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

const faqData = [
  {
    id: "01",
    question:
      "Are government college degrees recognized by employers and for higher studies?",
    answer: "",
    column: "left",
  },
  {
    id: "02",
    question: "How do I apply for a job through the platform?",
    answer: "",
    column: "left",
  },
  {
    id: "03",
    question:
      "I'm confused about choosing between Arts, Science, and Commerce after Class 10/12.",
    answer: "",
    column: "left",
  },
  {
    id: "04",
    question: "How do I create an account on the job board?",
    answer:
      "Use the search bar on the homepage to enter keywords related to your skills, job title, or preferred location. You can also use the advanced search filters to narrow down results by industry, job type (full-time, part-time, freelance), and experience level.",
    column: "right",
  },
  {
    id: "05",
    question:
      "Can I access study materials or skill development resources through the platform?",
    answer: "",
    column: "right",
  },
];

export const FaqSection = (): JSX.Element => {
  const [selectedFaq, setSelectedFaq] = useState<string | null>("04");
  const leftColumnFaqs = faqData.filter((faq) => faq.column === "left");
  const rightColumnFaqs = faqData.filter((faq) => faq.column === "right");

  const handleFaqClick = (faqId: string) => {
    setSelectedFaq(selectedFaq === faqId ? null : faqId);
  };

  return (
    <section className="flex flex-col w-full items-center justify-center gap-2.5 px-[100px] py-[88px] bg-pure-white-ffffff">
      <div className="w-full max-w-[1240px]">
        <h2 className="mb-[102px] [font-family:'Montserrat',Helvetica] font-semibold text-[#002b6b] text-[56px] tracking-[0] leading-[67.2px]">
          Frequently asked Questions By Students
        </h2>

        <div className="flex items-start justify-center gap-[30px]">
          <div className="flex flex-col items-start gap-[30px] flex-1">
            <Accordion
              type="single"
              collapsible
              value={selectedFaq || undefined}
              onValueChange={(value) => handleFaqClick(value)}
              className="w-full space-y-[30px]"
            >
              {leftColumnFaqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className={`bg-white rounded-[20px] border border-solid border-[#e5e9ea] cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-[#a45dff] hover:bg-[#f2e7fb] data-[state=open]:bg-[#f2e7fb] data-[state=open]:border-[#a45dff] data-[state=open]:shadow-drop-shadow ${selectedFaq === faq.id ? 'shadow-drop-shadow' : ''}`}
                >
                  <AccordionTrigger className="flex items-start gap-4 p-6 hover:no-underline">
                    <div className="flex items-start gap-4 flex-1">
                      <div className={`relative w-14 h-14 rounded-[48px] overflow-hidden flex-shrink-0 transition-all duration-300 ${selectedFaq === faq.id ? 'bg-[#a45dff]' : 'bg-neutralneutral-50'}`}>
                        <div className={`absolute top-[calc(50.00%_-_15px)] left-[calc(50.00%_-_16px)] w-8 font-body-l text-[length:var(--body-l-font-size)] text-center leading-[var(--body-l-line-height)] font-[number:var(--body-l-font-weight)] tracking-[var(--body-l-letter-spacing)] [font-style:var(--body-l-font-style)] transition-colors duration-300 ${selectedFaq === faq.id ? 'text-white' : 'text-primaryprimary-900'}`}>
                          {faq.id}
                        </div>
                      </div>
                      <div className="flex-1 mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-neutralneutral-900 text-2xl tracking-[0] leading-[28.8px] text-left transition-colors duration-300">
                        {faq.question}
                      </div>
                    </div>
                  </AccordionTrigger>
                  {faq.answer && (
                    <AccordionContent className="px-6 pb-6">
                      <div className="pl-[72px] font-body-r font-[number:var(--body-r-font-weight)] text-neutralneutral-600 text-[length:var(--body-r-font-size)] tracking-[var(--body-r-letter-spacing)] leading-[var(--body-r-line-height)] [font-style:var(--body-r-font-style)]">
                        {faq.answer}
                      </div>
                    </AccordionContent>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="flex flex-col items-start gap-[30px] flex-1">
            <Accordion
              type="single"
              collapsible
              value={selectedFaq || undefined}
              onValueChange={(value) => handleFaqClick(value)}
              className="w-full space-y-[30px]"
            >
              {rightColumnFaqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className={`bg-white rounded-[20px] border border-solid border-[#e5e9ea] cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-[#a45dff] hover:bg-[#f2e7fb] data-[state=open]:bg-[#f2e7fb] data-[state=open]:border-[#a45dff] data-[state=open]:shadow-drop-shadow ${selectedFaq === faq.id ? 'shadow-drop-shadow' : ''}`}
                >
                  <AccordionTrigger className="flex items-start gap-4 p-6 hover:no-underline">
                    <div className="flex items-start gap-4 flex-1">
                      <div className={`relative w-14 h-14 rounded-[48px] overflow-hidden flex-shrink-0 transition-all duration-300 ${selectedFaq === faq.id ? 'bg-[#a45dff]' : 'bg-neutralneutral-50'}`}>
                        <div className={`absolute top-[calc(50.00%_-_15px)] left-[calc(50.00%_-_16px)] w-8 font-body-l text-[length:var(--body-l-font-size)] text-center leading-[var(--body-l-line-height)] font-[number:var(--body-l-font-weight)] tracking-[var(--body-l-letter-spacing)] [font-style:var(--body-l-font-style)] transition-colors duration-300 ${selectedFaq === faq.id ? 'text-white' : 'text-primaryprimary-900'}`}>
                          {faq.id}
                        </div>
                      </div>
                      <div className="flex-1 mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-neutralneutral-900 text-2xl tracking-[0] leading-[28.8px] text-left transition-colors duration-300">
                        {faq.question}
                      </div>
                    </div>
                  </AccordionTrigger>
                  {faq.answer && (
                    <AccordionContent className="px-6 pb-6">
                      <div className="pl-[72px] font-body-r font-[number:var(--body-r-font-weight)] text-neutralneutral-600 text-[length:var(--body-r-font-size)] tracking-[var(--body-r-letter-spacing)] leading-[var(--body-r-line-height)] [font-style:var(--body-r-font-style)]">
                        {faq.answer}
                      </div>
                    </AccordionContent>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};
