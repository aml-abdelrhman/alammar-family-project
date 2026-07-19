"use client";

import React from "react";
import Image from "next/image";
import {
  Phone,
  Facebook,
  Twitter,
  Instagram,
  MessageCircle,
  Compass,
} from "lucide-react";
import { Link } from "@/i18n/routing";

const footerSections = [
  {
    title: "عن العائلة",
    links: [
      { label: "قرية القرين", href: "/#village" },
      { label: "إقليم الوشم", href: "/#ushaiger" },
      { label: "الرئيسية والنسب", href: "/#lineage" }, // إذا لم يكن له id، اتركيها كمسار عادي أو أضيفي id
    ],
  },
  {
    title: "شخصيات هامة",
    links: [
      { label: "معرض الأسرة", href: "/#gallery" },
      { label: "مكتبة رقمية", href: "/#library" },
      { label: "حملات خيرية", href: "/#charity" },
    ],
  },
  {
    title: "معرض",
    links: [
      { label: "العلماء وطلبة العلم", href: "/#scholars" },
      { label: "أمراء متصلون بالأسرة", href: "/#princes" },
      { label: "شخصيات من القرائن", href: "/#figures" },
    ],
  },
];

export const FullPageFooter = () => {
  return (
    <section className="relative w-full h-auto bg-[#F5F0E6] text-[#3A2A1E] overflow-hidden py-8">
      {" "}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/footer1.png"
          alt="Background Heritage"
          fill
          className="object-cover object-top scale-x-[-1]"
        />
      </div>
      <div className="relative z-10 flex flex-col justify-start flex-grow w-full px-4 pt-10 pb-10 sm:px-8 sm:pt-12 md:px-14 md:pt-15">
        <div className="grid items-start grid-cols-1 gap-8 mx-auto w-full max-w-[1400px] sm:grid-cols-2 md:grid-cols-6">
          <div className="self-start p-2 space-y-1 text-right sm:col-span-2 md:col-span-2 sm:p-4">
            <div className="relative w-[260px] h-[120px] sm:w-[320px] sm:h-[150px] md:w-[370px] md:h-[170px] mx-auto sm:mx-0">
              <Image
                src="/images/footer1-logo.png"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex items-start gap-2 pt-2">
              <span className="mt-1">←</span>
              <p className="text-sm leading-relaxed text-[#525252]">
                أرشيف رقمي لتوثيق تاريخ عائلة العمار ومبادراتها الخيرية، وحفظ
                هويتها الثقافية في قرية القرائن بإقليم الوشم.
              </p>
            </div>
            <div className="flex flex-wrap items-center text-xs text-[#525252] gap-[10px]">
              <div className="flex items-center gap-1">
                <span>←</span>
                <p>آل القريز</p>
              </div>
              <div className="flex items-center gap-1">
                <span>←</span>
                <p>آل حُميد</p>
              </div>
              <div className="flex items-center gap-1">
                <span>←</span>
                <p>بني خالد</p>
              </div>
            </div>
          </div>

          {footerSections.map((section, i) => (
            <div
              key={i}
              className="space-y-4 text-right sm:col-span-1 md:col-span-1 w-full max-w-[220px] mx-auto sm:mx-0 self-start"
            >
              <h4 className="bg-[#333] text-white py-2 px-4 rounded-md text-center font-bold text-sm sm:text-base">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <Link
                      href={link.href}
                      className="flex items-center justify-center gap-2 w-full bg-white/60 hover:bg-white/80 transition-colors border border-[#d1ccc0] text-[#737373] py-2.5 px-3 rounded shadow-sm text-sm font-normal"
                    >
                      <Compass className="w-4 h-4 text-[#8B4513] shrink-0" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="space-y-4 text-right sm:col-span-1 md:col-span-1 w-full max-w-[220px] mx-auto sm:mx-0 self-start">
            <h4 className="bg-[#333] text-white py-2 px-4 rounded-md text-center font-bold text-sm sm:text-base">
              التواصل
            </h4>

            <div className="grid grid-cols-2 gap-3">
              <a
                href="#"
                className="p-3 bg-white/60 border border-[#d1ccc0] rounded flex justify-center hover:bg-white/80 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 bg-white/60 border border-[#d1ccc0] rounded flex justify-center hover:bg-white/80 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 bg-white/60 border border-[#d1ccc0] rounded flex justify-center hover:bg-white/80 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 bg-white/60 border border-[#d1ccc0] rounded flex justify-center hover:bg-white/80 transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>

            <a
              href="#"
              className="p-3 bg-white/60 border border-[#d1ccc0] rounded flex justify-center hover:bg-white/80 transition-colors w-full"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center w-full pt-6 pb-4 mt-[-20px] sm:pt-8 sm:mt-[-10px]">
          {" "}
          <div className="flex items-center justify-center w-full max-w-[550px] mx-auto px-4 sm:px-14 mb-1.5">
            <div
              className="flex-grow border-t border-solid"
              style={{ borderColor: "#723F00" }}
            ></div>

            <div className="relative w-10 h-10 mx-3 sm:w-12 sm:h-12 sm:mx-4">
              <Image
                src="/images/icon.png"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>

            <div
              className="flex-grow border-t border-solid"
              style={{ borderColor: "#723F00" }}
            ></div>
          </div>
          <p
            className="text-xs font-normal text-center sm:text-sm"
            style={{ color: "#723F00" }}
          >
            جميع الحقوق محفوظة— 2026 Alammar.family ©
          </p>
        </div>
      </div>
    </section>
  );
};

export default FullPageFooter;
