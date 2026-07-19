"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

const gallery = [
  {
    image: "/images/memory/1.jpg",
    title: "الأبواب النجدية",
    desc: "نبذة عن هوية العمارة النجدية وأثرها في تصميم بيوت الأسرة قديمًا وحفاظها على الطابع التراثي",
  },
  {
    image: "/images/memory/2.jpg",
    title: "المجالس القديمة",
    desc: "لمحة عن طراز المجالس التقليدية وأثاثها وأسلوب استقبال الضيوف في الماضي",
  },
  {
    image: "/images/memory/3.jpg",
    title: "لقاءات العائلة",
    desc: "صور توثّق اجتماعات العائلة القديمة ومناسباتها عبر الأجيال المختلفة",
  },
  {
    image: "/images/memory/4.jpg",
    title: "لقاءات العائلة",
    desc: "صور توثّق اجتماعات العائلة القديمة ومناسباتها عبر الأجيال المختلفة",
  },
  {
    image: "/images/memory/5.jpg",
    title: "لقاءات العائلة",
    desc: "صور توثّق اجتماعات العائلة القديمة ومناسباتها عبر الأجيال المختلفة",
  }
];

const AUTOPLAY_MS = 4000;
const BLEED_PERCENT = 15;

export const QuranMemorySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % gallery.length);
    }, AUTOPLAY_MS);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const handleEnter = useCallback((i: number) => {
    setIsPaused(true);
    setActiveIndex(i);
  }, []);

  return (
    <section className="relative w-full h-auto min-h-[80vh] md:h-[85vh] lg:h-screen overflow-hidden">
      {gallery.map((item, i) => (
        <div
          key={item.image}
          className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
            i === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            priority={i === 0}
            className={`object-cover object-top transition-transform duration-[4000ms] ease-out ${
              i === activeIndex ? "scale-110" : "scale-100"
            }`}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />

      <div className="relative z-10 flex flex-col justify-between w-full h-full py-8 sm:py-10 md:py-14">
        <div className="flex flex-col items-start gap-3 px-4 mt-4 text-right sm:gap-4 sm:mt-6 md:gap-6 md:mt-10 md:px-20 max-w-[1500px] mx-auto w-full">
          <div className="flex items-center gap-0">
            <div className="w-8 h-[1px] bg-white sm:w-10" />
            <div className="relative flex items-center justify-center w-6 h-6 overflow-hidden sm:w-7 sm:h-7 md:w-8 md:h-8">
              <Image src="/images/logo.png" alt="Icon" fill className="object-contain p-1" />
            </div>
            <span className="text-[11px] font-normal text-white sm:text-xs">المعرض</span>
          </div>

          <h2 className="text-xl font-bold text-white sm:text-2xl md:text-5xl lg:text-6xl">
            من ذاكرة القرائن
          </h2>

          <p className="max-w-2xl text-xs font-normal text-white/80 sm:text-sm">
            مجموعة مختارة توثّق الأماكن التاريخية، والصور القديمة، والعمارة التقليدية، ولقاءات العائلة، والمقتنيات التراثية.
          </p>
        </div>

        <div className="relative w-screen -translate-x-1/2 mt-50 left-1/2 sm:mt-16 md:mt-0">
          <div
            className="flex gap-1 sm:gap-3 md:gap-0"
            style={{
              width: `${100 + BLEED_PERCENT * 2}%`,
              marginInlineStart: `-${BLEED_PERCENT}%`,
            }}
          >
            {gallery.map((item, i) => {
              const isActive = i === activeIndex;

              return (
                <div
                  key={item.image}
                  onMouseEnter={() => handleEnter(i)}
                  onMouseLeave={() => setIsPaused(false)}
                  onClick={() => handleEnter(i)}
                  className="relative flex-1 aspect-[3/4] sm:aspect-[4/3] shrink-0"
                >
                  <div
                    className={`relative w-full h-full overflow-hidden rounded-lg sm:rounded-xl border-2 sm:border-4 cursor-pointer origin-bottom
                      transition-all duration-700 ease-in-out
                      ${isActive
                        ? " scale-[1.08] z-10 shadow-2xl shadow-black/50"
                        : " scale-90 opacity-60 grayscale"
                      }
                    `}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className={`object-cover transition-transform duration-700 ease-in-out ${
                        isActive ? "scale-108" : "scale-100"
                      }`}
                    />

                   <div
                      className={`absolute inset-x-0 top-0 p-3 text-center flex flex-col items-center opacity-100 translate-y-0 sm:p-3 sm:block md:p-4
                        transition-all duration-500 ease-out
                        ${isActive
                          ? "sm:opacity-100 sm:translate-y-0"
                          : "sm:opacity-0 sm:translate-y-3 sm:pointer-events-none"
                        }
                      `}
                    >
                      <h3 className="mb-1 text-sm font-semibold text-white sm:text-base md:text-lg">
                        {item.title}
                      </h3>
                      <p className="text-[11px] leading-relaxed text-white/80 line-clamp-2 sm:text-sm md:text-base md:line-clamp-3">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuranMemorySection;