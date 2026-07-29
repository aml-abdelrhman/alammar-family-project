"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const princes = [
  {
    title: "القرن الخامس عشر",
    description: "الأمير الأول من آل حُمَيْد",
    content: "سيرة موجزة تُضاف لاحقًا من قبل العائلة، وفق البيانات الرسمية المعتمدة.",
  },
  {
    title: "القرن الخامس عشر",
    description: "الأمير الأول من آل حُمَيْد",
    content: "سيرة موجزة تُضاف لاحقًا من قبل العائلة، وفق البيانات الرسمية المعتمدة.",
  },
  {
    title: "القرن الخامس عشر",
    description: "الأمير الأول من آل حُمَيْد",
    content: "سيرة موجزة تُضاف لاحقًا من قبل العائلة، وفق البيانات الرسمية المعتمدة.",
  },
  {
    title: "القرن الخامس عشر",
    description: "الأمير الأول من آل حُمَيْد",
    content: "سيرة موجزة تُضاف لاحقًا من قبل العائلة، وفق البيانات الرسمية المعتمدة.",
  },
  {
    title: "القرن الخامس عشر",
    description: "الأمير الأول من آل حُمَيْد",
    content: "سيرة موجزة تُضاف لاحقًا من قبل العائلة، وفق البيانات الرسمية المعتمدة.",
  },
  {
    title: "القرن الخامس عشر",
    description: "الأمير الأول من آل حُمَيْد",
    content: "سيرة موجزة تُضاف لاحقًا من قبل العائلة، وفق البيانات الرسمية المعتمدة.",
  },
  {
    title: "القرن الخامس عشر",
    description: "الأمير الأول من آل حُمَيْد",
    content: "سيرة موجزة تُضاف لاحقًا من قبل العائلة، وفق البيانات الرسمية المعتمدة.",
  }
];

// زخرفة في الأعلى بخطين متوازيين وبسمك أخف
const TopDecorativeBorder = () => (
  <div className="w-full h-8 overflow-hidden bg-[#F7F2EA]">
    <svg
      viewBox="0 0 1440 20"
      className="w-full h-full"
      preserveAspectRatio="none"
    >
      {/* الخط الأول (سمك أخف) */}
      <path
        d="M0 5 L20 0 L40 5 L60 0 L80 5 L100 0 L120 5 L140 0 L160 5 L180 0 L200 5 L220 0 L240 5 L260 0 L280 5 L300 0 L320 5 L340 0 L360 5 L380 0 L400 5 L420 0 L440 5 L460 0 L480 5 L500 0 L520 5 L540 0 L560 5 L580 0 L600 5 L620 0 L640 5 L660 0 L680 5 L700 0 L720 5 L740 0 L760 5 L780 0 L800 5 L820 0 L840 5 L860 0 L880 5 L900 0 L920 5 L940 0 L960 5 L980 0 L1000 5 L1020 0 L1040 5 L1060 0 L1080 5 L1100 0 L1120 5 L1140 0 L1160 5 L1180 0 L1200 5 L1220 0 L1240 5 L1260 0 L1280 5 L1300 0 L1320 5 L1340 0 L1360 5 L1380 0 L1400 5 L1420 0 L1440 5"
        fill="none"
        stroke="#E5C397"
        strokeWidth="1.2"
      />
      {/* الخط الثاني تحته (سمك أخف) */}
      <path
        d="M0 12 L20 7 L40 12 L60 7 L80 12 L100 7 L120 12 L140 7 L160 12 L180 7 L200 12 L220 7 L240 12 L260 7 L280 12 L300 7 L320 12 L340 7 L360 12 L380 7 L400 12 L420 7 L440 12 L460 7 L480 12 L500 7 L520 12 L540 7 L560 12 L580 7 L600 12 L620 7 L640 12 L660 7 L680 12 L700 7 L720 12 L740 7 L760 12 L780 7 L800 12 L820 7 L840 12 L860 7 L880 12 L900 7 L920 12 L940 7 L960 12 L980 7 L1000 12 L1020 7 L1040 12 L1060 7 L1080 12 L1100 7 L1120 12 L1140 7 L1160 12 L1180 7 L1200 12 L1220 7 L1240 12 L1260 7 L1280 12 L1300 7 L1320 12 L1340 7 L1360 12 L1380 7 L1400 12 L1420 7 L1440 12"
        fill="none"
        stroke="#D97A7A"
        strokeWidth="1"
      />
    </svg>
  </div>
);

export const ConnectedPrinces = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [pressedArrow, setPressedArrow] = useState<"next" | "prev" | null>(
    null,
  );

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

  return (
    <section className="w-full bg-[#F7F2EA] flex flex-col justify-center">
      {/* الزخرفة في الأعلى بخطوط أخف */}
      <TopDecorativeBorder />
      
      <div className="px-4 py-14 sm:px-6 md:px-10 lg:px-20 max-w-[1440px] mx-auto w-full">
        <div className="flex flex-col mb-8 md:flex-row md:items-center md:justify-between md:mb-10">
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
                مقام رفيع
              </span>
            </div>
            <h2 className="mb-3 text-3xl font-bold text-black sm:text-4xl md:text-6xl">
              أمراء متّصلون بالأسرة
            </h2>
            <div className="flex flex-col max-w-xl gap-1 text-sm font-normal text-black">
              <p>
                نخصص هذا القسم لتوثيق سِيَر أفراد العائلة الذين تركوا أثرًا في
                مجتمعهم لحقول أدناه معدّة.
              </p>
              <p>
                كنمودج تصميمي، وستُستكمل بالأسماء والسير الرسمية المعتمدة من
                العائلة.
              </p>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-8 md:mt-0">
            <button
              onClick={handlePrev}
              onMouseDown={() => setPressedArrow("prev")}
              onMouseUp={() => setPressedArrow(null)}
              onTouchStart={() => setPressedArrow("prev")}
              onTouchEnd={() => setPressedArrow(null)}
              className={`flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-[9px] transition-colors ${
                pressedArrow === "prev" ? "bg-[#323232]" : "bg-gray-300"
              }`}
            >
              <ArrowRight className="w-4 h-4 text-white md:w-5 md:h-5" />
            </button>
            <button
              onClick={handleNext}
              onMouseDown={() => setPressedArrow("next")}
              onMouseUp={() => setPressedArrow(null)}
              onTouchStart={() => setPressedArrow("next")}
              onTouchEnd={() => setPressedArrow(null)}
              className={`flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-[9px] transition-colors ${
                pressedArrow === "next" ? "bg-[#323232]" : "bg-gray-300"
              }`}
            >
              <ArrowLeft className="w-4 h-4 text-white md:w-5 md:h-5" />
            </button>
          </div>
        </div>

        <Carousel
          setApi={setApi}
          opts={{ align: "start", direction: "rtl", loop: true }}
          plugins={[autoplayRef.current]}
          className="w-full"
        >
          <CarouselContent className="flex gap-[16px] -mr-0">
            {princes.map((item, i) => (
              <CarouselItem
                key={i}
                className="pl-0 basis-[90%] sm:basis-[calc(50%-8px)] lg:basis-[416px] shrink-0"
              >
                <Card 
                  className="w-full lg:w-[416px] h-[236px] rounded-[8px] pt-[48px] pr-[32px] pb-[48px] pl-[32px] gap-[10px] overflow-hidden border-0 flex flex-col justify-center items-end relative bg-[#1B0F00]"
                >
                  
                  {/* طبقة الصورة الخلفية مع الشفافية 15% وقلبها رأسياً */}
                  <div 
                    className="absolute inset-0 bg-center bg-cover pointer-events-none scale-y-[-1]"
                    style={{
                      backgroundImage: `url('/images/bg-princess-card.jpg')`,
                      opacity: 0.15,
                    }}
                  />

                  {/* طبقة التدرج اللوني بالقيمة المطلوبة بالضبط */}
                  <div 
                    className="absolute inset-0 pointer-events-none" 
                    style={{
                      background: "linear-gradient(265.36deg, rgba(0, 0, 0, 0) -0.1%, #733F00 102.19%)",
                      mixBlendMode: "hue",
                    }}
                  />

                  {/* طبقة اللون الثابت بالقيمة المطلوبة بالضبط مع دمج الألوان */}
                  <div 
                    className="absolute inset-0 bg-[#4a2a03] pointer-events-none"
                    style={{
                      mixBlendMode: "color",
                    }}
                  />

                  {/* محتوى الكارت (النصوص) */}
                  <div className="relative z-10 flex flex-col items-end w-full px-7">
                    <CardHeader className="w-full p-0 space-y-1 text-right text-white">
                      
                      {/* السطر العلوي (الشرطة وitem.title أصبحت هنا مع لون #FFC379) */}
                      <div className="flex items-center gap-2">
                        <div className="w-[26px] h-[0px] border border-[#FFC379]" />
                        <CardDescription className="text-xs font-normal text-[#FFC379]">
                          {item.title}
                        </CardDescription>
                      </div>

                      {/* العنوان الرئيسي (item.description أصبح هنا كـ Title باللون الأبيض وبحجم العرض المطلوب) */}
                      <CardTitle className="mt-2 text-xl font-semibold text-white">
                        {item.description}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="w-full p-0 mt-[10px] text-right text-white">
                      <p className="text-sm leading-relaxed opacity-90">
                        {item.content}
                      </p>
                    </CardContent>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="w-full h-[1px] bg-[#996729]" />
    </section>
  );
};

export default ConnectedPrinces;