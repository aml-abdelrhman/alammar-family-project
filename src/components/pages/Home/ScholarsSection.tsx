"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const scholars = [
  {
    name: "الاسم الكريم",
    role: "طالب علم",
    desc: "نبذة عن المسيرة العلمية والمسار الدراسي — تُضاف لاحقاً نبذة عن المسيرة العلمية والمسار الدراسي.",
    tags: ["علم الفقه", "علم الحديث"],
  },
  {
    name: "الاسم الكريم",
    role: "طالب علم",
    desc: "نبذة عن المسيرة العلمية والمسار الدراسي — تُضاف لاحقاً نبذة عن المسيرة العلمية والمسار الدراسي.",
    tags: ["علم الفقه", "علم الحديث"],
  },
  {
    name: "الاسم الكريم",
    role: "طالب علم",
    desc: "نبذة عن المسيرة العلمية والمسار الدراسي — تُضاف لاحقاً نبذة عن المسيرة العلمية والمسار الدراسي.",
    tags: ["علم الفقه", "علم الحديث"],
  },
  {
    name: "الاسم الكريم",
    role: "طالب علم",
    desc: "نبذة عن المسيرة العلمية والمسار الدراسي — تُضاف لاحقاً نبذة عن المسيرة العلمية والمسار الدراسي.",
    tags: ["علم الفقه", "علم الحديث"],
  },
  {
    name: "الاسم الكريم",
    role: "طالب علم",
    desc: "نبذة عن المسيرة العلمية والمسار الدراسي — تُضاف لاحقاً نبذة عن المسيرة العلمية والمسار الدراسي.",
    tags: ["علم الفقه", "علم الحديث"],
  },
  {
    name: "الاسم الكريم",
    role: "طالب علم",
    desc: "نبذة عن المسيرة العلمية والمسار الدراسي — تُضاف لاحقاً نبذة عن المسيرة العلمية والمسار الدراسي.",
    tags: ["علم الفقه", "علم الحديث"],
  },
];

const REPEAT_COUNT = 4;
const slides = Array.from({ length: REPEAT_COUNT }, () => scholars.slice(0, 6));

export const ScholarsSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [pressedArrow, setPressedArrow] = useState<"next" | "prev" | null>(
    null,
  );

  const autoplayRef = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
    }),
  );

  const handleNext = () => {
    api?.scrollNext();
    setPressedArrow("next");
  };

  const handlePrev = () => {
    api?.scrollPrev();
    setPressedArrow("prev");
  };

  return (
    // Outer Section: Width 1440px max, Padding Top/Bottom 60px, Left/Right 80px (lg:px-[80px] lg:py-[60px])
    <section className="w-full bg-white py-10 lg:py-[60px] px-4 sm:px-8 lg:px-[80px]">
      {/* Inner Content: Width 1280px max, Height ~593px (Min-height on desktop), Gap 56px between Header & Carousel */}
      <div className="max-w-[1280px] mx-auto flex flex-col gap-8 lg:gap-[56px]">
        {/* Header Section */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="flex flex-col items-start max-w-2xl text-right">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 md:w-10 h-[1px] bg-[#723F00]" />
              {/* <div className="relative flex items-center justify-center w-6 h-6 overflow-hidden md:w-7 md:h-7">
                <Image src="/images/icon.png" alt="Icon" fill className="object-contain" />
              </div> */}
              <span className="text-xs md:text-sm font-normal text-[#723F00]">
                اهل العلم
              </span>
            </div>
            <h2 className="w-full text-right font-bold text-[36px] sm:text-[45px] md:text-[60px] leading-[139%] text-[#201912] mb-3">
              المشائخ وطلبة العلم
            </h2>
            <p className="text-xs sm:text-sm font-normal text-[#525252] leading-relaxed">
              توثيق لمسيرة أبناء العائلة من العلماء وطلبة العلم الشرعي، ومجالات
              تخصصهم وأثرهم العلمي.
            </p>
          </div>

          {/* Nav Buttons */}
          <div className="flex items-center self-end gap-2 md:self-auto shrink-0">
            <button
              onClick={handlePrev}
              className={`flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-lg transition-colors ${
                pressedArrow === "prev"
                  ? "bg-[#323232] text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
              aria-label="Previous slide"
            >
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button
              onClick={handleNext}
              className={`flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-lg transition-colors ${
                pressedArrow === "next"
                  ? "bg-[#323232] text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
              aria-label="Next slide"
            >
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Content Container */}
        <Carousel
          setApi={setApi}
          plugins={[autoplayRef.current]}
          opts={{ align: "start", direction: "rtl", loop: true, duration: 55 }}
          className="w-full"
        >
          <CarouselContent>
            {slides.map((group, slideIdx) => (
              <CarouselItem key={slideIdx} className="basis-full">
                {/* 3 Columns Grid with Gap 24px - 40px */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[24px]">
                  {group.map((item, i) => (
                    <div
                      key={i}
                      className="flex flex-col justify-between bg-[#F8F5F0] rounded-2xl p-5 sm:p-6 h-auto w-full gap-4 border border-[#EFE9DF]"
                    >
                      <div className="flex flex-col text-right">
                        <p className="flex flex-wrap items-center justify-start gap-1 mb-2 text-base font-bold text-black sm:text-lg">
                          <span>{item.name}</span>
                          <span className="text-[#733F00] font-normal">—</span>
                          <span className="text-[#733F00] text-xs sm:text-sm font-normal">
                            {item.role}
                          </span>
                        </p>
                        <p className="text-xs leading-relaxed text-gray-600 sm:text-sm">
                          {item.desc}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2 pt-2 mt-auto">
                        {item.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 text-xs text-gray-700 bg-white border border-gray-200 rounded-xl"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default ScholarsSection;
