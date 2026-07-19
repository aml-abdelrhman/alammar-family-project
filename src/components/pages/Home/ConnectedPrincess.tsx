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

const princes = [
  {
    name: "سمو الأمير",
    role: "الاسم الكريم",
    desc: "سيرة موجزة تُضاف لاحقًا من قبل العائلة، وفق البيانات الرسمية.",
    image: "/images/princes/1.jpg",
  },
  {
    name: "سمو الأمير",
    role: "الاسم الكريم",
    desc: "سيرة موجزة تُضاف لاحقًا من قبل العائلة، وفق البيانات الرسمية.",
    image: "/images/princes/2.jpg",
  },
  {
    name: "سمو الأمير",
    role: "الاسم الكريم",
    desc: "سيرة موجزة تُضاف لاحقًا من قبل العائلة، وفق البيانات الرسمية.",
    image: "/images/princes/3.jpg",
  },
  {
    name: "سمو الأمير",
    role: "الاسم الكريم",
    desc: "سيرة موجزة تُضاف لاحقًا من قبل العائلة، وفق البيانات الرسمية.",
    image: "/images/princes/1.jpg",
  },
  {
    name: "سمو الأمير",
    role: "الاسم الكريم",
    desc: "سيرة موجزة تُضاف لاحقًا من قبل العائلة، وفق البيانات الرسمية.",
    image: "/images/princes/2.jpg",
  },
];

const DecorativeBorder = () => (
  <div className="w-full h-5 overflow-hidden bg-[#F7F2EA]">
    <svg
      viewBox="0 0 1440 20"
      className="w-full h-full"
      preserveAspectRatio="none"
    >
      {/* الخط الأول */}
      <path
        d="M0 10 L20 0 L40 10 L60 0 L80 10 L100 0 L120 10 L140 0 L160 10 L180 0 L200 10 L220 0 L240 10 L260 0 L280 10 L300 0 L320 10 L340 0 L360 10 L380 0 L400 10 L420 0 L440 10 L460 0 L480 10 L500 0 L520 10 L540 0 L560 10 L580 0 L600 10 L620 0 L640 10 L660 0 L680 10 L700 0 L720 10 L740 0 L760 10 L780 0 L800 10 L820 0 L840 10 L860 0 L880 10 L900 0 L920 10 L940 0 L960 10 L980 0 L1000 10 L1020 0 L1040 10 L1060 0 L1080 10 L1100 0 L1120 10 L1140 0 L1160 10 L1180 0 L1200 10 L1220 0 L1240 10 L1260 0 L1280 10 L1300 0 L1320 10 L1340 0 L1360 10 L1380 0 L1400 10 L1420 0 L1440 10"
        fill="none"
        stroke="#E5C397"
        strokeWidth="2"
      />
      {/* الخط الثاني (أقرب للخط الأول الآن) */}
      <path
        d="M0 20 L20 10 L40 20 L60 10 L80 20 L100 10 L120 20 L140 10 L160 20 L180 10 L200 20 L220 10 L240 20 L260 10 L280 20 L300 10 L320 20 L340 10 L360 20 L380 10 L400 20 L420 10 L440 20 L460 10 L480 20 L500 10 L520 20 L540 10 L560 20 L580 10 L600 20 L620 10 L640 20 L660 10 L680 20 L700 10 L720 20 L740 10 L760 20 L780 10 L800 20 L820 10 L840 20 L860 10 L880 20 L900 10 L920 20 L940 10 L960 20 L980 10 L1000 20 L1020 10 L1040 20 L1060 10 L1080 20 L1100 10 L1120 20 L1140 10 L1160 20 L1180 10 L1200 20 L1220 10 L1240 20 L1260 10 L1280 20 L1300 10 L1320 20 L1340 10 L1360 20 L1380 10 L1400 20 L1420 10 L1440 20"
        fill="none"
        stroke="#D97A7A"
        strokeWidth="2"
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
    <section className="w-full bg-[#F7F2EA]">
      <DecorativeBorder />
      <div className="px-4 py-14 sm:px-6 md:px-10 lg:px-20 max-w-[1500px] mx-auto">
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
                كنموذج تصميمي، وستُستكمل بالأسماء والسير الرسمية المعتمدة من
                العائلة.
              </p>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-8 md:mt-0">
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
          opts={{ align: "start", direction: "rtl", loop: true }}
          plugins={[autoplayRef.current]}
          className="w-full"
        >
          <CarouselContent className="-mr-4 md:-mr-6">
            {princes.map((item, i) => (
              <CarouselItem
                key={i}
                className="pr-4 md:pr-6 basis-[90%] sm:basis-1/2 md:basis-1/3 lg:basis-1/3"
              >
                <div className="relative w-full h-[260px] md:h-[340px] rounded-xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 right-0 p-6 text-right text-white">
                    <div className="flex items-center gap-1">
                      <p className="text-xs font-normal">{item.name}</p>
                      <div className="flex items-center">
                        <span className="mx-1 text-xs font-normal opacity-80">
                          —
                        </span>
                        <p className="text-xl font-semibold">{item.role}</p>
                      </div>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed opacity-90">
                      {item.desc}
                    </p>
                  </div>
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

export default ConnectedPrinces;
