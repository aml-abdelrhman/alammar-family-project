import React from "react";
import Image from "next/image";

export const AlQaraeenVillage = () => {
  const cards = [
    { id: "01", title: "موقع استراتيجي", desc: "تقع قرية القرائن في إقليم الوشم بمنطقة نجد، وتُعد من القرى المعروفة في المنطقة، وتمثل موطناً أصيلاً لعديد من الأسر النجدية التي امتدت جذورها عبر الأجيال.", isDark: true },
    { id: "02", title: "مجتمع مترابط", desc: "عُرفت القرائن بروابطها الاجتماعية، حيث حافظ أهلها على قيم التكافل والتعاون، وهو ما انعكس في المبادرات الإنسانية والأعمال الخيرية التي توارثتها الأجيال.", isDark: false },
    { id: "03", title: "موطن عائلة العمار", desc: "تُعد القرائن الوطن التاريخي لعائلة العمار، ومنها انطلقت مسيرتها وامتدت فروعها، وظلت القرية رمزاً للانتماء والجذور التي تجمع أفراد العائلة داخل المملكة وخارجها.", isDark: false }
  ];

  return (
    <section className="relative w-full py-16 px-6 md:px-20 bg-[#F9F7F2]">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent" />

      <div className="grid items-start grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="flex justify-center order-2 lg:col-span-5 lg:order-1">
<div className="relative w-full max-w-[560px] h-[400px] md:h-[500px] shadow-xl">
  <Image 
    src="/images/AlQaraeenVillage.png" 
    alt="خريطة القرائن" 
    fill 
    className="object-cover border-[10px] border-white ring-0 outline-none rounded-3xl" 
  />
</div>
        </div>

        <div className="flex flex-col items-start order-1 text-right lg:col-span-7 lg:order-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-[1px] bg-[#723F00]" />
            <div className="relative flex items-center justify-center w-8 h-8 overflow-hidden">
              <Image src="/images/icon.png" alt="Icon" fill className="object-contain p-1" />
            </div>
            <span className="text-sm font-bold text-[#723F00]">القرية</span>
          </div>
          <h2 className="text-5xl font-black text-[#2D2926] mb-12">قرية القُرائن</h2>

          <div className="w-full space-y-3">
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
             <div className="relative p-8 overflow-hidden text-white rounded-xl bg-[#723F00]">
  <div
    className="absolute top-0 left-0 w-full h-7 opacity-35"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 36 36'%3E%3Cg fill='none' stroke='%23FFFFFF' stroke-width='1.2'%3E%3Crect x='10' y='10' width='16' height='16' transform='rotate(45 18 18)'/%3E%3Crect x='15' y='15' width='6' height='6' transform='rotate(45 18 18)'/%3E%3C/g%3E%3C/svg%3E")`,
      backgroundRepeat: "repeat-x",
      backgroundSize: "36px 36px",
      backgroundPosition: "center",
    }}
  />
  <div
    className="absolute bottom-0 left-0 w-full h-7 opacity-35"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 36 36'%3E%3Cg fill='none' stroke='%23FFFFFF' stroke-width='1.2'%3E%3Crect x='10' y='10' width='16' height='16' transform='rotate(45 18 18)'/%3E%3Crect x='15' y='15' width='6' height='6' transform='rotate(45 18 18)'/%3E%3C/g%3E%3C/svg%3E")`,
      backgroundRepeat: "repeat-x",
      backgroundSize: "36px 36px",
      backgroundPosition: "center",
    }}
  />
  <div className="mb-2 text-xs opacity-80">{cards[0].id} — نبذة تاريخية</div>
  <h3 className="mb-3 text-xl font-bold text-white">{cards[0].title}</h3>
  <p className="text-sm leading-relaxed">{cards[0].desc}</p>
</div>

              <div className="p-6 rounded-xl border bg-white text-[#2D2926]">
                <div className="mb-2 text-xs text-[#EF9000EF] opacity-80">{cards[1].id} — البوابات الأخرى</div>
                <h3 className="mb-3 text-xl font-bold text-[#EF9000EF]">{cards[1].title}</h3>
                <p className="text-sm leading-relaxed">{cards[1].desc}</p>
              </div>
            </div>

            <div className="p-6 rounded-xl border bg-white text-[#2D2926]">
              <div className="mb-2 text-xs text-[#EF9000EF] opacity-80">03 — عن العائلة</div>
              <h3 className="mb-3 text-2xl font-semibold text-[#EF9000EF]">{cards[2].title}</h3>
              <p className="text-sm leading-relaxed">{cards[2].desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};