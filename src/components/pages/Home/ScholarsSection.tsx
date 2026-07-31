"use client";

import React, { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useGetScholars } from "@/queries";

export const ScholarsSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [pressedArrow, setPressedArrow] = useState<"next" | "prev" | null>(
    null,
  );

  const { data: scholars = [], isLoading, isError } = useGetScholars();
  const autoplayRef = useRef(
    Autoplay({
      delay: 3000,
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

  // تقسيم الكروت لأعمدة، كل عمود فيه كارتين (صفين)
  const columns: (typeof scholars)[] = [];
  for (let i = 0; i < scholars.length; i += 2) {
    columns.push(scholars.slice(i, i + 2));
  }

  // لو عدد الأعمدة قليل (زي 3 أعمدة بالظبط = نفس العرض الظاهر)
  // embla هيلاقي مفيش حاجة زيادة يقلب عليها ومش هيتحرك خالص.
  // فبنكرر الأعمدة نفسها لحد ما يبقى فيه محتوى كفاية للحركة والـ loop
  const MIN_COLUMNS_FOR_LOOP = 7;
  const displayColumns: { key: string; pair: typeof scholars }[] = [];
  if (columns.length > 0) {
    let dupIndex = 0;
    while (displayColumns.length < MIN_COLUMNS_FOR_LOOP) {
      columns.forEach((pair, colIdx) => {
        displayColumns.push({ key: `${dupIndex}-${colIdx}`, pair });
      });
      dupIndex++;
      // أمان: لو عدد الأعمدة الأصلي كبير أصلاً، مانكررش أكتر من مرتين
      if (dupIndex >= 2 && displayColumns.length >= columns.length) break;
    }
  }

  return (
    <section className="w-full bg-white py-10 lg:py-[60px] px-4 sm:px-8 lg:px-[80px]">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-8 lg:gap-[56px]">
        {/* Header Section */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="flex flex-col items-start max-w-2xl text-right">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 md:w-10 h-[1px] bg-[#723F00]" />
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
          opts={{
            align: "start",
            direction: "rtl",
            loop: true,
            duration: 25,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-5">
            {displayColumns.map(({ key, pair }) => (
              <CarouselItem
                key={key}
                className="pl-5 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <div className="grid grid-rows-2 gap-5 lg:gap-[24px] h-full">
                  {" "}
                  {pair.map((item, i) => (
                    <div
                      key={i}
                      className="flex flex-col justify-between bg-[#F8F5F0] rounded-2xl p-5 sm:p-6 w-full gap-4 border border-[#EFE9DF]"
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
