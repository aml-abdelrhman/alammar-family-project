"use client";
import React, { useState } from "react";
import Image from "next/image";

export const Hero = () => {
  const [isInterestModalOpen, setIsInterestModalOpen] = useState(false);
  const bottomColors = [
    "#E96642",
    "#F7A144",
    "#F3C68F",
    "#E96642",
    "#F7A144",
    "#F3C68F",
    "#E96642",
  ];

  return (
    <>
      <section className="relative flex flex-col justify-between items-end w-full max-w-[1550px] mx-auto overflow-hidden px-6 sm:px-10 lg:px-[80px] pt-7 pb-[70px] min-h-[905px] md:min-h-screen lg:min-h-[1020px]">
        <div className="absolute inset-0 z-0 block overflow-hidden md:hidden">
          <div className="relative w-full h-[111%] -top-[11%]">
            <Image
              src="/images/hero-mobile.svg"
              alt="Al-Ammar Family Heritage"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src="/images/hero1.svg"
            alt="Al-Ammar Family Heritage"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div
          className="relative z-10 flex flex-col justify-end lg:justify-center items-start w-full max-w-[1280px] mx-auto my-auto pb-10 sm:pb-20 lg:pb-0 pt-12 sm:pt-28 lg:pt-0 gap-6 md:gap-12 lg:gap-[48px] min-h-[480px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[739px]"
        >
          <div className="flex flex-col justify-center items-start w-full max-w-[764px] mx-auto lg:mx-0 text-right gap-2 min-h-[220px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[402px]">
            <div className="relative w-[160px] h-[80px] sm:w-[190px] sm:h-[95px] md:w-[229px] md:h-[116px]">
              <Image
                src="/images/logo.svg"
                alt="Logo"
                fill
                className="object-contain object-right"
              />
            </div>
            <h1 className="font-black text-right leading-[1.3] drop-shadow-lg w-full text-white text-2xl sm:text-3xl md:text-4xl lg:text-[64px]">
              من آل غرير من آل حميد من بني خالد ، القرائن بالوشم ، المملكة العربية السعودية
            </h1>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-20 flex flex-row items-start w-full h-[4px] p-0">
          {bottomColors.map((color, index) => (
            <div key={index} style={{ backgroundColor: color }} className="flex-1 h-full" />
          ))}
        </div>
      </section>
    </>
  );
};

export default Hero;