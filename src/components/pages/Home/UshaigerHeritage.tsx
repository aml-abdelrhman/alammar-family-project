import React from "react";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export const UshaigerHeritage = () => {
  const stats = [
    { value: "٣٥", label: "قرية تاريخية" },
    { value: "٦٠٠", label: "سنة توثيق" },
    { value: "٩", label: "مسارات وادي" },
  ];

  return (
    <section className="relative w-full px-6 py-16 overflow-hidden bg-white border-t border-b border-black md:px-20">
      <div className="flex flex-col items-start mb-12 text-right">
        <div className="flex items-center gap-0 mb-4">
          <div className="w-10 h-[1px] bg-[#723F00]" />
          <div className="relative flex items-center justify-center w-8 h-8 overflow-hidden">
            <Image
              src="/images/icon.png"
              alt="Icon"
              fill
              className="object-contain p-1"
            />
          </div>
          <span className="text-sm font-bold text-[#723F00]">الإقليم</span>
        </div>
        <h2 className="mb-8 text-4xl font-semibold text-black md:text-6xl">إقليم الوشم</h2>

        <div className="max-w-2xl mb-12 space-y-4">
          {[
            "يقع إقليم الوشم شمال غرب مدينة الرياض في قلب نجد.",
            "يعد من أعرق أقاليم الجزيرة العربية عمقاً تاريخياً وتنوعاً حضارياً.",
            "تتوزع في الوشم قرى عريقة عُرفت بعمارتها الطينية ومجالسها المفتوحة ودورها في جميع النواحي.",
          ].map((text, i) => (
            <div
              key={i}
              className="flex items-center justify-start gap-3 text-gray-700"
            >
              <ArrowLeft className="w-4 h-4" style={{ color: "#C3AA88" }} />
              <span className="text-sm" style={{ color: "#525252" }}>
                {text}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center w-full max-w-4xl gap-8 py-8 bg-white/80 backdrop-blur-md md:gap-16">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="px-4 text-center border-l border-[#723F00] last:border-0 md:px-8"
            >
              <div className="flex items-center justify-center mb-2 text-3xl font-bold text-black md:text-4xl">
                {i < 2 && (
                  <span className="ml-1" style={{ color: "#EF9000EF" }}>
                    +
                  </span>
                )}
                <span>{stat.value}</span>
              </div>
              <div className="text-xs text-[#525252] md:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

<div className="relative w-full h-[300px] md:h-[600px] overflow-hidden -mt-35">        <Image
          src="/images/eklim1.png"
          alt="إقليم الوشم"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </div>
    </section>
  );
};