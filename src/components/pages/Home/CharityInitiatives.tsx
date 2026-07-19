"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Heart, ArrowUpLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

const filters = [
  "مشاريع عامة",
  "مشاريع الإسكان",
  "كفالة الايتام",
  "العناية بالمساجد",
];

const initiatives = [
  {
    title: "الكفالة التعليمية للطلاب الجامعيين",
    desc: "وصف موجز للفئة المستفيدة منها ضمن مبادرات العائلة الخيرية.",
    target: "115,000",
    remaining: "15,000",
    progress: 70,
    image: "/images/charity/1.jpg",
  },
  {
    title: "الأجهزة الكهربائية للمتعففين",
    desc: "وصف موجز للفئة المستفيدة منها ضمن مبادرات العائلة الخيرية.",
    target: "115,000",
    remaining: "15,000",
    progress: 70,
    image: "/images/charity/2.jpg",
  },
  {
    title: "تأهيل أطفال اضطراب طيف التوحد",
    desc: "وصف موجز للفئة المستفيدة منها ضمن مبادرات العائلة الخيرية.",
    target: "115,000",
    remaining: "15,000",
    progress: 70,
    image: "/images/charity/3.jpg",
  },
];

const initiativesByFilter: Record<string, typeof initiatives> = {
  "مشاريع عامة": initiatives,
  "مشاريع الإسكان": initiatives,
  "كفالة الايتام": initiatives,
  "العناية بالمساجد": initiatives,
};

export const CharityInitiatives = () => {
  const [activeFilter, setActiveFilter] = useState("مشاريع عامة");
  const [pressedArrow, setPressedArrow] = useState("");
  // اتجاه الحركة: 1 = جاي من اليمين (next)، -1 = جاي من الشمال (prev)
  const [direction, setDirection] = useState(1);

  const currentInitiatives = initiativesByFilter[activeFilter] ?? initiatives;
  const displayData = [...currentInitiatives, ...currentInitiatives];

  const handleNext = () => {
    setPressedArrow("next");
    setDirection(1);
    const currentIndex = filters.indexOf(activeFilter);
    const nextIndex = (currentIndex + 1) % filters.length;
    setActiveFilter(filters[nextIndex]);
    setTimeout(() => setPressedArrow(""), 200);
  };

  const handlePrev = () => {
    setPressedArrow("prev");
    setDirection(-1);
    const currentIndex = filters.indexOf(activeFilter);
    const prevIndex = (currentIndex - 1 + filters.length) % filters.length;
    setActiveFilter(filters[prevIndex]);
    setTimeout(() => setPressedArrow(""), 200);
  };

  const pageVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
    }),
  };

  return (
    <section
      className="relative w-full px-4 overflow-hidden text-white py-14 md:px-20"
      style={{
        backgroundImage: "url('/images/desert.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 z-0"></div>
      <div className="relative z-10 max-w-[1440px] mx-auto">
        <div className="flex flex-col items-center justify-between gap-6 mb-10 md:flex-row">
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-0">
              <div className="w-8 h-[1px] bg-white" />
              <div className="relative flex items-center justify-center w-8 h-8 overflow-hidden">
                <Image
                  src="/images/logo.png"
                  alt="Icon"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <span className="text-xs font-bold text-white">
                العطاء المستمر
              </span>
            </div>
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl xl:text-6xl">
              المبادرات الخيرية للأسرة
            </h2>{" "}
          </div>

          <div className="items-center justify-center hidden gap-2 p-2 xl:flex bg-[#FFFFFF59]">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={cn(
                  "px-8 py-4 text-sm font-semibold transition-all whitespace-nowrap",
                  activeFilter === f
                    ? "bg-[#FFFFFFE5] text-[#EF9000]"
                    : "bg-[#FFFFFF5D] text-white hover:bg-[#FFFFFF66]",
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="relative mb-10 overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeFilter}
              custom={direction}
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {displayData.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col p-3 overflow-hidden text-black bg-white rounded-3xl"
                >
                  <div className="relative w-full h-[200px] rounded-2xl overflow-hidden mb-4">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col flex-grow px-2 text-right">
                    <h3 className="mb-2 text-lg font-medium">{item.title}</h3>
                    <p className="mb-6 text-sm text-gray-500">{item.desc}</p>
                    <div className="flex justify-between mb-2 text-xs text-gray-500">
                      <span>
                        تم تجميع :{" "}
                        <span className="font-medium text-[#f0a23c] mx-1">
                          {item.target}
                        </span>
                        <span className="text-[#717171] italic font-medium">
                          ريال
                        </span>
                      </span>
                      <span>
                        تبقي :{" "}
                        <span className="font-medium text-[#f0a23c] mx-1">
                          {item.remaining}
                        </span>
                        <span className="text-[#717171] italic font-medium">
                          ريال
                        </span>
                      </span>
                    </div>
                    <div className="relative w-full h-3 mb-6 overflow-hidden bg-orange-100 rounded-full">
                      <div
                        className="bg-[#f0a23c] h-full"
                        style={{ width: `${item.progress}%` }}
                      />
                      <span className="absolute top-[-2px] left-[85%] text-[10px] font-bold text-white bg-[#f0a23c] px-1 rounded-full translate-x-[-50%]">
                        {item.progress}%
                      </span>
                    </div>
                    <button className="flex items-center w-full px-2 py-3 mb-4 font-bold text-white transition bg-black rounded-xl hover:bg-gray-800">
                      <span className="flex-1 text-center">
                        تبرع الآن عبر المنصة
                      </span>
                      <span className="flex items-center justify-center p-1 bg-[#f0a23c] rounded-md w-10 h-7">
                        <ArrowUpLeft className="w-4 h-4" />
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex flex-col-reverse items-center justify-between gap-6 mt-10 md:flex-row md:gap-0">
          {/* 1. الأسهم في الجهة اليسرى (تظهر تحت في الموبايل) */}
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              className={cn(
                "flex items-center justify-center w-12 h-12 transition-all rounded-xl",
                pressedArrow === "prev"
                  ? "bg-[#323232]"
                  : "bg-[#FFFFFF20] hover:bg-[#FFFFFF40]",
              )}
            >
              <ArrowRight className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={handleNext}
              className={cn(
                "flex items-center justify-center w-12 h-12 transition-all rounded-xl",
                pressedArrow === "next"
                  ? "bg-[#323232]"
                  : "bg-[#FFFFFF20] hover:bg-[#FFFFFF40]",
              )}
            >
              <ArrowLeft className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* 3. زر منصة إحسان (يظهر فوق في الموبايل) */}
          <button className="flex items-center justify-center w-full gap-2 px-6 py-4 font-bold text-black transition bg-white rounded-xl hover:bg-gray-100 md:w-auto">
            عرض منصة إحسان للتبرع
            <span className="flex items-center justify-center p-1 bg-[#1D1D1B] rounded-md w-10 h-7">
              <ArrowUpLeft className="w-4 h-4 text-white" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};