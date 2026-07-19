"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const [isInterestModalOpen, setIsInterestModalOpen] = useState(false);

  const stats = [
    { title: "النسب", value: "آل الغرير " },
    { title: "من", value: " آل حُمَيْد" },
    { title: "من", value: "بني خالد" },
    { title: "المستقر", value: "القرين، الوشم" },
  ];

  return (
    <>
      <section className="relative flex items-end md:items-center justify-start w-full h-screen min-h-[600px] md:min-h-[900px] overflow-hidden pb-10 md:pb-0">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-img.png"
            alt="Al-Ammar Family Heritage"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/30 to-black/40" />
        </div>

        <div className="w-full px-4 md:pr-20 lg:pt-24">
          <div className="relative z-10 flex flex-col items-start w-full max-w-[1500px] px-0 mx-auto text-left text-white md:px-10">
            <div className="flex items-center gap-3 mb-4 md:mb-8">
              <span className="text-[11px] md:text-xs font-medium opacity-90">
                توثيق تاريخ وأصالة عائلة سعودية عريقة
              </span>
              <span className="w-6 md:w-8 h-[1px] bg-white/50" />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-right mb-4 md:mb-6 leading-[1.3] drop-shadow-lg">
              عائلة العمّار، حكايةُ أسرةٍ <br />
              صنعت أثرًا وجذورٌ راسخةً <br />
              تمتد في أرض الوشم...
            </h1>

            <p className="max-w-md mb-6 text-sm font-semibold leading-relaxed text-right sm:max-w-xl md:max-w-2xl md:mb-10 sm:text-base md:text-md opacity-90 drop-shadow-md">
              نوثّق هنا تاريخ وأنساب وتراث عائلة العمّار، شخصياتها البارزة،
              وأعمالها الخيرية، وهويتها الثقافية الممتدة من قرية القرين في إقليم
              الوشم بالمملكة العربية السعودية.
            </p>

            <div className="flex items-center gap-3 md:gap-4">
              <Button
                size="lg"
                onClick={() => setIsInterestModalOpen(true)}
                className="flex items-center h-auto gap-2 md:gap-3 py-1.5 md:py-2 pl-1.5 md:pl-2 pr-4 md:pr-6 text-sm md:text-base font-bold text-black transition-all duration-300 bg-white shadow-xl rounded-xl hover:bg-gray-100"
              >
                عرض المكتبة
                <span className="flex items-center justify-center bg-black rounded-xl w-7 h-7 md:w-9 md:h-9">
                  <ArrowUpLeft className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
                </span>
              </Button>

              <Button
                size="lg"
                className="flex items-center h-auto gap-2 md:gap-3 py-1.5 md:py-2 pr-4 md:pr-6 pl-1.5 md:pl-2 text-sm md:text-base font-bold text-white transition-all duration-300 bg-[#F0A23C] shadow-xl rounded-xl hover:bg-[#d88f30]"
              >
                استكشف التراث
                <span className="flex items-center justify-center bg-white rounded-xl w-7 h-7 md:w-9 md:h-9">
                  <ArrowUpLeft className="w-3.5 h-3.5 md:w-4 md:h-4 text-black" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-4 py-10 bg-white md:px-10">
        <div className="grid w-full grid-cols-2 md:grid-cols-5 gap-[4px] max-w-[1500px] mx-auto rounded-xl overflow-hidden shadow-sm h-auto">
          {stats.map((item, i) => (
            <div
              key={i}
              className="h-[120px] md:h-[160px] lg:h-[200px] bg-[#F7F2EA] flex flex-col items-end justify-center pr-4 md:pr-6"
            >
              <div className="flex items-center justify-start w-full gap-2 mb-1">
                <div className="w-4 h-[1px] bg-[#733F00]"></div>
                <span className="text-xs font-bold text-right text-[#733F00]">
                  {item.title}
                </span>
              </div>
              <div className="w-full mt-1 text-xl font-medium text-right text-black md:text-2xl lg:text-3xl">
                {item.value}
              </div>
            </div>
          ))}

          <div className="relative col-span-2 md:col-span-1 row-span-1 md:row-span-1 h-[180px] md:h-[200px] bg-[#F7F2EA] overflow-hidden flex items-center justify-center rounded-l-xl">
            <style jsx>{`
              @keyframes slideRight {
                0% {
                  transform: translateX(-100%);
                }
                100% {
                  transform: translateX(100%);
                }
              }
              .light-sweep {
                animation: slideRight 3s linear infinite;
                background: linear-gradient(
                  90deg,
                  transparent,
                  rgba(255, 255, 255, 0.4),
                  transparent
                );
              }
            `}</style>

            <svg width="0" height="0" style={{ position: "absolute" }}>
              <filter id="flag-wave">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.005 0.015"
                  numOctaves="1"
                  seed="5"
                  result="turbulence"
                />
                <feDisplacementMap
                  in="SourceGraphic"
                  in2="turbulence"
                  scale="4"
                />
              </filter>
            </svg>
            <div
              className="relative flex items-center justify-center w-full h-full"
              style={{ filter: "url(#flag-wave)" }}
            >
              <div className="relative w-[100%] h-[100%] overflow-hidden">
                <Image
                  src="/images/flag1.jpg"
                  alt="Saudi Flag"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute inset-0 pointer-events-none light-sweep" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
