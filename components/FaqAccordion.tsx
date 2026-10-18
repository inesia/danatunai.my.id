"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ_LIST } from "@/lib/constants";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-2.5 max-w-3xl mx-auto">
      {FAQ_LIST.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`border rounded-xl transition-colors ${
              isOpen ? "bg-white border-slate-300 shadow-sm" : "bg-white border-slate-200 hover:border-slate-300"
            }`}
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full py-4 px-5 text-left flex justify-between items-center space-x-4 focus:outline-none"
            >
              <span className={`font-semibold text-sm sm:text-base ${isOpen ? "text-blue-900" : "text-slate-900"}`}>
                {item.question}
              </span>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${
                  isOpen ? "rotate-180 text-blue-700" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
