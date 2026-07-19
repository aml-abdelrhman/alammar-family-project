"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { FileText, ArrowRight, ArrowLeft } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const books = [
  {
    title: "أَنْسَابُ آلِ الغُرَيْر",
    tag: "PDF",
    date: "١٤٤٠هـ",
    size: "12MB",
  },
  {
    title: "أَنْسَابُ آلِ الغُرَيْر",
    tag: "PDF",
    date: "١٤٤٠هـ",
    size: "12MB",
  },
  {
    title: "أَنْسَابُ آلِ الغُرَيْر",
    tag: "PDF",
    date: "١٤٤٠هـ",
    size: "12MB",
  },
  {
    title: "أَنْسَابُ آلِ الغُرَيْر",
    tag: "PDF",
    date: "١٤٤٠هـ",
    size: "12MB",
  },
  {
    title: "أَنْسَابُ آلِ الغُرَيْر",
    tag: "PDF",
    date: "١٤٤٠هـ",
    size: "12MB",
  },
  {
    title: "أَنْسَابُ آلِ الغُرَيْر",
    tag: "PDF",
    date: "١٤٤٠هـ",
    size: "12MB",
  },
  {
    title: "أَنْسَابُ آلِ الغُرَيْر",
    tag: "PDF",
    date: "١٤٤٠هـ",
    size: "12MB",
  },
  {
    title: "أَنْسَابُ آلِ الغُرَيْر",
    tag: "PDF",
    date: "١٤٤٠هـ",
    size: "12MB",
  },
];

// قم بتعديل دالة الزخرفة لتأخذ كامل العرض
const DecorativeBorder = () => (
  <div className="w-full h-5 overflow-hidden">
    <svg
      viewBox="0 0 1440 20"
      className="w-full h-full"
      preserveAspectRatio="none"
    >
      <path
        d="M0 10 L20 0 L40 10 L60 0 L80 10 L100 0 L120 10 L140 0 L160 10 L180 0 L200 10 L220 0 L240 10 L260 0 L280 10 L300 0 L320 10 L340 0 L360 10 L380 0 L400 10 L420 0 L440 10 L460 0 L480 10 L500 0 L520 10 L540 0 L560 10 L580 0 L600 10 L620 0 L640 10 L660 0 L680 10 L700 0 L720 10 L740 0 L760 10 L780 0 L800 10 L820 0 L840 10 L860 0 L880 10 L900 0 L920 10 L940 0 L960 10 L980 0 L1000 10 L1020 0 L1040 10 L1060 0 L1080 10 L1100 0 L1120 10 L1140 0 L1160 10 L1180 0 L1200 10 L1220 0 L1240 10 L1260 0 L1280 10 L1300 0 L1320 10 L1340 0 L1360 10 L1380 0 L1400 10 L1420 0 L1440 10"
        fill="none"
        stroke="#E5C397"
        strokeWidth="2"
      />
      <path
        d="M0 20 L20 10 L40 20 L60 10 L80 20 L100 10 L120 20 L140 10 L160 20 L180 10 L200 20 L220 10 L240 20 L260 10 L280 20 L300 10 L320 20 L340 10 L360 20 L380 10 L400 20 L420 10 L440 20 L460 10 L480 20 L500 10 L520 20 L540 10 L560 20 L580 10 L600 20 L620 10 L640 20 L660 10 L680 20 L700 10 L720 20 L740 10 L760 20 L780 10 L800 20 L820 10 L840 20 L860 10 L880 20 L900 10 L920 20 L940 10 L960 20 L980 10 L1000 20 L1020 10 L1040 20 L1060 10 L1080 20 L1100 10 L1120 20 L1140 10 L1160 20 L1180 10 L1200 20 L1220 10 L1240 20 L1260 10 L1280 20 L1300 10 L1320 20 L1340 10 L1360 20 L1380 10 L1400 20 L1420 10 L1440 20"
        fill="none"
        stroke="#D97A7A"
        strokeWidth="2"
      />
    </svg>
  </div>
);

export const DigitalLibrary = () => {
  const [api, setApi] = useState<CarouselApi>();
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

  const bookGroups: (typeof books)[number][][] = [];
  for (let i = 0; i < books.length; i += 2) {
    bookGroups.push(books.slice(i, i + 2));
  }

  const REPEAT_COUNT = 3;
  const displayGroups = Array.from(
    { length: REPEAT_COUNT },
    () => bookGroups,
  ).flat();

  return (
    <section className="w-full bg-[#F7F2EA]">
      <DecorativeBorder />

      <div className="px-4 py-14 md:px-20 max-w-[1500px] mx-auto">
        <div className="flex flex-col mb-8 md:flex-row md:items-end md:justify-between md:mb-10">
          <div className="flex flex-col items-start gap-2 text-right">
            <div className="flex items-center gap-0 mb-3">
              <div className="w-8 md:w-10 h-[1px] bg-[#723F00]" />
              <div className="relative flex items-center justify-center overflow-hidden w-7 h-7 md:w-8 md:h-8">
                <Image
                  src="/images/icon.png"
                  alt="Icon"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <span className="text-[11px] md:text-xs font-bold text-[#723F00]">
                {" "}
                أرشيف موثّق
              </span>
            </div>
            <h2 className="mb-1 text-3xl font-bold text-black sm:text-4xl md:text-6xl">
              المكتبة الرقمية
            </h2>
            <p className="text-sm font-normal text-gray-600">
              مرجع رقمي يضم الوثائق التاريخية، والكتب، والأبحاث، ووثائق الأنساب
              المتعلقة بالعائلة.
            </p>
          </div>

          <div className="flex justify-center gap-2 mt-8 md:mt-0">
            <button
              onClick={() => api?.scrollPrev()}
              className="flex items-center justify-center w-10 h-10 bg-[#707070] hover:bg-black transition-colors "
            >
              <ArrowRight className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={() => api?.scrollNext()}
              className="flex items-center justify-center w-10 h-10 bg-[#707070] hover:bg-black transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          opts={{ align: "start", direction: "rtl", loop: true }}
          className="w-full"
        >
          <CarouselContent>
            {displayGroups.map((group, i) => (
              <CarouselItem
                key={i}
                className="pl-4 md:pl-6 basis-[90%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <div className="flex flex-col gap-6">
                  {group.map((book, j) => (
                    <div
                      key={j}
                      className="flex flex-col p-6 h-[220px] bg-white border border-gray-100 shadow-sm rounded-xl"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-center justify-center p-3 bg-[#FEF2F2] border border-red-100 rounded-lg text-red-600 w-fit">
                          <FileText className="h-7 w-7" />
                        </div>
                        <span className="text-[11px] text-[#733F00] font-medium">
                          {book.date}
                        </span>
                      </div>

                      {/* الحاوية التي توسّط العنوان عمودياً */}
                      <div className="flex flex-col items-start justify-center flex-1 py-2">
                        <div className="flex items-center justify-start gap-2">
                          <p className="text-xl font-bold text-right text-gray-900">
                            {book.title}
                          </p>
                          <span className="text-[10px] text-gray-400 mt-1">
                            PDF — {book.size}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button className="flex-1 py-4 text-xs font-bold text-black bg-transparent border border-black rounded-lg hover:bg-gray-100">
                          معاينة
                        </button>
                        <button className="flex-1 py-4 text-xs font-bold text-white bg-black rounded-lg hover:bg-gray-800">
                          تحميل
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <DecorativeBorder />
    </section>
  );
};

export default DigitalLibrary;
