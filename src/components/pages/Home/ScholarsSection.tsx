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
  { name: "الاسم الكريم", role: "طالب علم", desc: "نبذة عن المسيرة العلمية والمسار الدراسي — تُضاف لاحقاً نبذة عن المسيرة العلمية والمسار الدراسي — تُضاف لاحقاً..", tags: ["علم الفقه", "علم الحديث"], image: "/images/scholars/1.jpg" },
  { name: "الاسم الكريم", role: "طالب علم", desc: "نبذة عن المسيرة العلمية والمسار الدراسي — تُضاف لاحقاً نبذة عن المسيرة العلمية والمسار الدراسي — تُضاف لاحقاً..", tags: ["علم الفقه", "علم الحديث"], image: "/images/scholars/2.jpg" },
  { name: "الاسم الكريم", role: "طالب علم", desc: "نبذة عن المسيرة العلمية والمسار الدراسي — تُضاف لاحقاً نبذة عن المسيرة العلمية والمسار الدراسي — تُضاف لاحقاً..", tags: ["علم الفقه", "علم الحديث"], image: "/images/scholars/2.jpg" },
  { name: "الاسم الكريم", role: "طالب علم", desc: "نبذة عن المسيرة العلمية والمسار الدراسي — تُضاف لاحقاً نبذة عن المسيرة العلمية والمسار الدراسي — تُضاف لاحقاً..", tags: ["علم الفقه", "علم الحديث"], image: "/images/scholars/1.jpg" },
];

const REPEAT_COUNT = 4;
const slides = Array.from({ length: REPEAT_COUNT }, () => scholars);

export const ScholarsSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [pressedArrow, setPressedArrow] = useState<"next" | "prev" | null>(null);

  const autoplayRef = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
    })
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
    <section className="w-full px-4 bg-white py-14 md:px-20">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex flex-col items-start justify-between gap-6 mb-10 md:flex-row">
          <div className="flex flex-col items-start text-right">
            <div className="flex items-center gap-0 mb-3 md:mb-4">
              <div className="w-8 md:w-10 h-[1px] bg-[#723F00]" />
              <div className="relative flex items-center justify-center overflow-hidden w-7 h-7 md:w-8 md:h-8">
                <Image src="/images/icon.png" alt="Icon" fill className="object-contain p-1" />
              </div>
              <span className="text-[11px] md:text-xs font-bold text-[#723F00]">أهل العلم</span>
            </div>
            <h2 className="mb-3 text-3xl font-bold text-black md:mb-4 sm:text-4xl md:text-6xl">العلماء وطلبة العلم</h2>
            <p className="text-xs font-normal text-[#525252] sm:text-sm">
              توثيق لمسيرة أبناء العائلة من العلماء وطلبة العلم الشرعي، ومجالات تخصصهم وأثرهم العلمي.
            </p>
          </div>

          <div className="flex justify-center w-full gap-2 mt-5 md:w-auto md:justify-end md:mt-0">
            <button
              onClick={handlePrev}
              className={`flex items-center justify-center w-9 h-9 md:w-10 md:h-10 transition-colors ${pressedArrow === "prev" ? "bg-[#323232]" : "bg-gray-300"}`}
            >
              <ArrowRight className="w-4 h-4 text-white md:w-5 md:h-5" />
            </button>
            <button
              onClick={handleNext}
              className={`flex items-center justify-center w-9 h-9 md:w-10 md:h-10 transition-colors ${pressedArrow === "next" ? "bg-[#323232]" : "bg-gray-300"}`}
            >
              <ArrowLeft className="w-4 h-4 text-white md:w-5 md:h-5" />
            </button>
          </div>
        </div>

        <Carousel
          setApi={setApi}
          plugins={[autoplayRef.current]}
          opts={{ align: "start", direction: "rtl", loop: true, duration: 55 }}
          className="w-full"
        >
          <CarouselContent>
            {slides.map((group, slideIdx) => (
              <CarouselItem key={slideIdx} className="basis-full">
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {group.map((item, i) => (
                    <div
                      key={i}
                      className="flex bg-[#F8F5F0] rounded-2xl p-4 h-[220px] items-center w-full gap-4"
                    >
                      {/* قمت بنقل الصورة لتكون في البداية (قبل النص) */}
                      <div className="relative w-[120px] sm:w-[262px] h-full rounded-xl overflow-hidden shrink-0">
                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                      </div>
                      
                      <div className="flex flex-col justify-center flex-1 h-full text-right">
                        <p className="mb-1 text-lg font-bold text-black">
                          {item.name}
                          <span className="mx-1 text-[#733F00] text-sm font-normal">—</span>
                          <span className="text-[#733F00] text-sm font-normal">{item.role}</span>
                        </p>
                        <p className="mb-4 text-sm leading-relaxed text-gray-600">{item.desc}</p>
                        <div className="flex gap-2">
                          {item.tags.map((tag, idx) => (
                            <span key={idx} className="px-3 py-2 text-xs text-gray-700 bg-white border border-gray-200 rounded-xl">{tag}</span>
                          ))}
                        </div>
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