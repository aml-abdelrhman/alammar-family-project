"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const figures = [
  {
    name: "الاسم الكريم",
    role: "— رائد أعمال",
    desc: "نبذة تعريفية موجزة عن مسيرة الشخصية وإسهامها في خدمة المجتمع والعائلة — تُضاف لاحقًا.",
    image: "/images/figures/1.jpg",
  },
  {
    name: "الاسم الكريم",
    role: "— رائد أعمال",
    desc: "نبذة تعريفية موجزة عن مسيرة الشخصية وإسهامها في خدمة المجتمع والعائلة — تُضاف لاحقًا.",
    image: "/images/figures/1.jpg",
  },
  {
    name: "الاسم الكريم",
    role: "— رائد أعمال",
    desc: "نبذة تعريفية موجزة عن مسيرة الشخصية وإسهامها في خدمة المجتمع والعائلة — تُضاف لاحقًا.",
    image: "/images/figures/1.jpg",
  },
  {
    name: "الاسم الكريم",
    role: "— رائد أعمال",
    desc: "نبذة تعريفية موجزة عن مسيرة الشخصية وإسهامها في خدمة المجتمع والعائلة — تُضاف لاحقًا.",
    image: "/images/figures/1.jpg",
  },
  {
    name: "الاسم الكريم",
    role: "— رائد أعمال",
    desc: "نبذة تعريفية موجزة عن مسيرة الشخصية وإسهامها في خدمة المجتمع والعائلة — تُضاف لاحقًا.",
    image: "/images/figures/1.jpg",
  },
];

export const QuranFigures = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);
  const [pressedArrow, setPressedArrow] = useState<"next" | "prev" | null>(
    null,
  );

  const autoplayRef = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
    }),
  );

  useEffect(() => {
    if (!api) return;

    setActiveIndex(api.selectedScrollSnap());

    api.on("select", () => {
      setActiveIndex(api.selectedScrollSnap());
    });
  }, [api]);

  const handleNext = () => {
    api?.scrollNext();
    setPressedArrow("next");
  };

  const handlePrev = () => {
    api?.scrollPrev();
    setPressedArrow("prev");
  };

  return (
    <section className="w-full px-4 py-10 bg-white sm:px-6 md:px-10 lg:px-20 md:py-16">
      <div className="max-w-[1500px] mx-auto">
        {/* Header */}
        <div className="flex flex-col mb-8 md:flex-row md:items-end md:justify-between md:mb-10">
          {" "}
          <div className="flex flex-col items-start mb-6 text-right md:mb-0 md:max-w-xl">
            <div className="flex items-center gap-0 mb-3 md:mb-4">
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
                شخصيات من القرائن
              </span>
            </div>

            <h2 className="mb-3 text-3xl font-bold text-black md:mb-4 sm:text-4xl md:text-6xl">
              شخصيات من القُرَائِن
            </h2>

            <p className="text-xs font-normal text-black sm:text-sm">
              أعلامٌ من عائلة العمار تركوا أثراً في مجتمعهم ووطنهم — علماء،
              وقادة، ورعاة للعمل الخيري والاجتماعي.
            </p>
          </div>
          <div className="flex justify-center w-full gap-2 mt-5 md:w-auto md:justify-end md:mt-0">
            <button
              onClick={handlePrev}
              className={`flex items-center justify-center w-9 h-9 md:w-10 md:h-10 transition-colors ${
                pressedArrow === "prev" ? "bg-[#323232]" : "bg-gray-300"
              }`}
            >
              <ArrowRight className="w-4 h-4 text-white md:w-5 md:h-5" />
            </button>

            <button
              onClick={handleNext}
              className={`flex items-center justify-center w-9 h-9 md:w-10 md:h-10 transition-colors ${
                pressedArrow === "next" ? "bg-[#323232]" : "bg-gray-300"
              }`}
            >
              <ArrowLeft className="w-4 h-4 text-white md:w-5 md:h-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            direction: "rtl",
            loop: true,
            slidesToScroll: 1,
            skipSnaps: false,
            containScroll: false,
          }}
          plugins={[autoplayRef.current]}
          className="w-full"
        >
          <CarouselContent className="-mr-4 md:-mr-6">
            {[...figures, ...figures].map((item, i) => {
              const isActive = i === activeIndex;

              return (
                <CarouselItem
                  key={i}
                  className="pr-4 md:pr-6 basis-[75%] xs:basis-[65%] sm:basis-1/2 md:basis-1/3 lg:basis-1/3 xl:basis-1/4"
                >
                  <div className="h-full overflow-hidden bg-[#F7F2EA] rounded-xl flex flex-col transition-all duration-500">
                    {/* Text */}
                    <div className="p-3 sm:p-4">
                      <div className="text-right">
                        <div className="flex flex-wrap items-center gap-2">
                          <p
                            className={`text-base sm:text-lg md:text-xl font-semibold transition-colors duration-500 ${
                              isActive ? "text-black" : "text-gray-900"
                            }`}
                          >
                            {item.name}
                          </p>

                          <p
                            className={`text-xs font-semibold transition-colors duration-500 ${
                              isActive
                                ? "text-[#EF9000]/[0.9373]"
                                : "text-[#8C8C8C]"
                            }`}
                          >
                            {item.role}
                          </p>
                        </div>

                        <p className="mt-2 text-xs text-gray-600">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    {/* Image */}
                    <div className="relative w-full mt-auto h-[260px] sm:h-[290px] md:h-[340px]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className={`object-cover transition-all duration-500 ${
                          !isActive ? "grayscale" : ""
                        }`}
                      />
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default QuranFigures;
