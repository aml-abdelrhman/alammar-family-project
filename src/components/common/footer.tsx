"use code";

import React from "react";
import Image from "next/image";
import {
  Phone,
  Facebook,
  Twitter,
  Instagram,
  MessageCircle,
} from "lucide-react";
import { Link } from "@/i18n/routing";

const footerSections = [
  {
    title: "عن العائلة",
    links: [
      { label: "قرية القرين", href: "/#village" },
      { label: "إقليم الوشم", href: "/#ushaiger" },
      { label: "الرئيسية والنسب", href: "/#lineage" },
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
    <section className="relative w-full bg-[#F5F0E6] text-[#3A2A1E] overflow-hidden rounded-b-[32px]">
      {/* الخلفية */}
      <div className="absolute inset-x-0 bottom-0 z-0 h-[260px] sm:h-[300px] pointer-events-none">
        <Image
          src="/images/footer.png"
          alt="Background Heritage"
          fill
          className="object-cover scale-x-[-1]"
        />
      </div>

      {/* الحاوية الكبرى - نحتفظ بالقياسات الدقيقة للابتوب ونضيف مرونة للهواتف والتابلت */}
      <div 
        className="relative z-10 flex flex-col justify-between w-full mx-auto"
        style={{
          maxWidth: "1440px",
          minHeight: "622px",
          paddingTop: "40px",
          paddingBottom: "40px",
        }}
      >
        <div 
          className="w-full mx-auto px-4 sm:px-8 md:px-[80px] relative pb-28 md:pb-20"
          style={{
            maxWidth: "1440px",
          }}
        >
          {/* شبكة المحتوى الداخلية - تصميم احترافي متجاوب بالكامل مع تابلت محسن */}
          <div 
            className="relative grid w-full grid-cols-1 mx-auto sm:grid-cols-2 lg:flex lg:flex-row lg:items-start lg:justify-between"
            style={{
              maxWidth: "1280px",
              gap: "32px",
            }}
          >
            {/* القسم الأول: الشعار والنبذة */}
            <div 
              className="p-0 text-right w-full lg:w-[368px] shrink-0 flex flex-col justify-center items-end sm:col-span-2 lg:col-span-1"
              style={{
                gap: "10px",
              }}
            >
              <div 
                className="relative w-[260px] h-[120px] sm:w-[320px] sm:h-[150px] md:w-[370px] md:h-[170px] mx-auto lg:mx-0"
                style={{ marginTop: "-20px" }}
              >
                <Image
                  src="/images/footer.svg"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
              
              <div className="flex items-start w-full gap-2 pt-2 text-right">
                <svg width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1 shrink-0">
                  <path d="M16.5669 6.99951V8.16581H15.4625V6.99951H16.5669Z" fill="#A48B70"/>
                  <path d="M15.4624 5.83154V6.99784H14.358V5.83154H15.4624Z" fill="#A48B70"/>
                  <path d="M14.3577 4.66553V5.83183H13.2533V4.66553H14.3577Z" fill="#A48B70"/>
                  <path d="M13.2532 6.99951V8.16581H12.1488V6.99951H13.2532Z" fill="#A48B70"/>
                  <path d="M12.1489 5.83154V6.99784H11.0445V5.83154H12.1489Z" fill="#A48B70"/>
                  <path d="M9.94019 6.99951V8.16581H8.83577V6.99951H9.94019Z" fill="#A48B70"/>
                  <path d="M8.83594 5.83154V6.99784H7.73155V5.83154H8.83594Z" fill="#A48B70"/>
                  <path d="M6.6272 6.99951V8.16581H5.52281V6.99951H6.6272Z" fill="#A48B70"/>
                  <path d="M5.52271 5.83154V6.99784H4.41829V5.83154H5.52271Z" fill="#A48B70"/>
                  <path d="M16.5669 -1.19209e-07V1.1663H15.4625V-1.19209e-07H16.5669Z" fill="#A48B70"/>
                  <path d="M15.4624 1.16578V2.33207H14.358V1.16578H15.4624Z" fill="#A48B70"/>
                  <path d="M14.3577 2.33374V3.50004H13.2533V2.33374H14.3577Z" fill="#A48B70"/>
                  <path d="M13.2532 -1.19209e-07V1.1663H12.1488V-1.19209e-07H13.2532Z" fill="#A48B70"/>
                  <path d="M12.1489 1.16578V2.33207H11.0445V1.16578H12.1489Z" fill="#A48B70"/>
                  <path d="M9.94019 -1.19209e-07V1.1663H8.83577V-1.19209e-07H9.94019Z" fill="#A48B70"/>
                  <path d="M8.83594 1.16578V2.33207H7.73155V1.16578H8.83594Z" fill="#A48B70"/>
                  <path d="M6.6272 -1.19209e-07V1.1663H5.52281V-1.19209e-07H6.6272Z" fill="#A48B70"/>
                  <path d="M5.52271 1.16578V2.33207H4.41829V1.16578H5.52271Z" fill="#A48B70"/>
                  <path d="M13.2532 4.66553H11.0444V5.83183H9.93996V4.66553H7.73115V5.83183H6.62674V4.66553H4.41757V5.83183H3.31318V4.66553H-4.19617e-05V3.49886L3.31318 3.49886H2.33256H4.41757V3.49886H6.62674V2.33256H7.73115V3.49886L9.93996 3.49886H2.33256H11.0444V3.49886H13.2532V4.66553Z" fill="#A48B70"/>
                </svg>
                <p className="text-sm leading-relaxed text-[#525252]">
                  أرشيف رقمي لتوثيق تاريخ عائلة العمار ومبادراتها الخيرية، وحفظ
                  هويتها الثقافية في قرية القرائن بإقليم الوشم.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-start text-xs text-[#525252] gap-[10px] w-full pt-2">
                <div className="flex items-center gap-1">
                  <p>آل القريز</p>
                </div>
                <div className="flex items-center gap-1">
                  <p>آل حُميد</p>
                </div>
                <div className="flex items-center gap-1">
                  <p>بني خالد</p>
                </div>
              </div>
            </div>

            {/* أقسام الروابط */}
            {footerSections.map((section, i) => (
              <div
                key={i}
                className="text-right w-full lg:w-[15%] max-w-[220px] mx-auto lg:mx-0 self-start"
                style={{ display: "flex", flexDirection: "column", gap: "20px" }}
              >
                <h4 className="bg-[#333] text-white py-2 px-4 rounded-md text-center font-bold text-sm sm:text-base w-full">
                  {section.title}
                </h4>
                <ul style={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%" }}>
                  {section.links.map((link, j) => (
                    <li key={j} style={{ width: "100%" }}>
                      <Link
                        href={link.href}
                        className="flex items-center justify-center gap-2 w-full bg-white hover:bg-white/90 transition-colors text-[#737373] py-2.5 px-3 rounded-lg shadow-sm text-sm font-normal"
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                          <path d="M7.1996 4.80029H4.7998V7.20005H7.1996V4.80029Z" fill="#231F20"/>
                          <path d="M4.79938 2.40015H2.39941V4.80027H4.79938V2.40015Z" fill="#E0CCAC"/>
                          <path d="M7.1996 2.40015H4.7998V4.80027H7.1996V2.40015Z" fill="#E0CCAC"/>
                          <path d="M7.1996 0H4.7998V2.40012H7.1996V0Z" fill="#E0CCAC"/>
                          <path d="M7.1996 9.59985H4.7998V12H7.1996V9.59985Z" fill="#E0CCAC"/>
                          <path d="M2.39997 4.80029H0V7.20005H2.39997V4.80029Z" fill="#E0CCAC"/>
                          <path d="M9.59968 2.40015H7.19971V4.80027H9.59968V2.40015Z" fill="#E0CCAC"/>
                          <path d="M4.79938 4.80029H2.39941V7.20005H4.79938V4.80029Z" fill="#E0CCAC"/>
                          <path d="M9.59968 4.80029H7.19971V7.20005H9.59968V4.80029Z" fill="#E0CCAC"/>
                          <path d="M4.79938 7.19995H2.39941V9.60007H4.79938V7.19995Z" fill="#E0CCAC"/>
                          <path d="M7.1996 7.19995H4.7998V9.60007H7.1996V7.19995Z" fill="#E0CCAC"/>
                          <path d="M9.59968 7.19995H7.19971V9.60007H9.59968V7.19995Z" fill="#E0CCAC"/>
                          <path d="M12.0001 4.80029H9.6001V7.20005H12.0001V4.80029Z" fill="#E0CCAC"/>
                        </svg>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* قسم التواصل */}
            <div 
              className="text-right w-full lg:w-[15%] max-w-[220px] mx-auto lg:mx-0 self-start"
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <h4 className="bg-[#333] text-white py-2 px-4 rounded-md text-center font-bold text-sm sm:text-base w-full">
                التواصل
              </h4>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%" }}>
                <div className="grid w-full grid-cols-2 gap-3">
                  <a
                    href="#"
                    className="p-3 bg-white/60 border border-[#d1ccc0] rounded flex justify-center items-center hover:bg-white/85 transition-colors h-[42px]"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-white/60 border border-[#d1ccc0] rounded flex justify-center items-center hover:bg-white/85 transition-colors h-[42px]"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-white/60 border border-[#d1ccc0] rounded flex justify-center items-center hover:bg-white/85 transition-colors h-[42px]"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-white/60 border border-[#d1ccc0] rounded flex justify-center items-center hover:bg-white/85 transition-colors h-[42px]"
                  >
                    <Phone className="w-5 h-5" />
                  </a>
                </div>

                <a
                  href="#"
                  className="p-3 bg-white/60 border border-[#d1ccc0] rounded flex justify-center items-center hover:bg-white/85 transition-colors w-full h-[42px]"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* الفوتر السفلي (Copyrights) */}
          <div className="absolute inset-x-0 bottom-0 flex flex-col items-center w-full pt-4 pb-4">
            <div className="flex items-center justify-center w-full max-w-[550px] mx-auto px-4 mb-1.5">
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
      </div>
    </section>
  );
};

export default FullPageFooter;