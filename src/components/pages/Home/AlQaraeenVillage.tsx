import React from "react";
import Image from "next/image";

export const AlQaraeenVillage = () => {
  const cards = [
    {
      id: "01",
      title: "موقع استراتيجي",
      desc: "يقع إقليم الوشم في قلب منطقة نجد، مما جعله نقطة وصل مهمة بين مدن وأقاليم المملكة، وأسهم في ازدهاره واستقراره عبر الزمن.",
    },
    {
      id: "02",
      title: "مجتمع مترابط",
      desc: "يُجسد العمل الخيري جزءًا أصيلًا من إرث العائلة، حيث توارثت قيم العطاء والتكافل، واستمرت المبادرات الإنسانية في خدمة المجتمع ودعم المحتاجين.",
    },
    {
      id: "03",
      title: "موطن عائلة العمار",
      desc: "تُعد القرائن الوطن التاريخي لعائلة العمار، ومنها انطلقت مسيرتها وامتدت فروعها، وظلت القرية رمزاً للانتماء والجذور التي تجمع أفراد العائلة داخل المملكة وخارجها.",
    },
  ];

  return (
    <section className="relative w-full py-[60px] overflow-hidden border-t border-b border-[#c7c7cf] bg-[#F5EFE5]">
      <div className="absolute top-0 left-0 w-full h-24 pointer-events-none" />

      <div className="w-full max-w-[1440px] mx-auto px-[20px] md:px-[60px] lg:px-[80px]">
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-[40px] lg:gap-[56px] w-full">
          
          {/* حاوية الصورة */}
          <div className="flex flex-col justify-between order-2 lg:order-1 w-full lg:w-[45%] shrink-0">
            <div className="flex flex-col justify-between flex-1 w-full h-full">
              <div className="relative w-full h-[450px] sm:h-[480px] md:h-[820px] lg:h-full border-[6px] border-solid border-white bg-white rounded-xl overflow-hidden shadow-sm">
                <Image
                  src="/images/washm.jpg.png"
                  alt="خريطة القرائن"
                  fill
                  className="object-cover object-top w-full rounded-xl scale-[1.05]"
                />
              </div>
            </div>
          </div>

          {/* حاوية النصوص والكروت */}
          <div className="flex flex-col items-start justify-between order-1 lg:order-2 text-right w-full lg:w-[55%] shrink-0">
            <div className="w-full">
              <div className="flex items-center gap-1.5 mb-4">
                <div className="w-10 h-[1px] bg-[#723F00]" />
                <div className="relative flex items-center justify-center w-8 h-8 overflow-hidden">
                  <Image src="/images/icon.png" alt="Icon" fill className="object-contain p-1" />
                </div>
                <span className="text-xs font-normal text-[#723F00]">الإقليم</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2D2926] mb-8">
                إقليم الوشم
              </h2>
            </div>

            <div className="flex flex-col justify-between flex-1 w-full space-y-4">
              {/* الكارت الأول */}
              <div className="relative p-6 sm:p-8 overflow-hidden text-white rounded-xl bg-[#723F00] w-full flex-1 flex flex-col justify-center shadow-sm">
                <div
                  className="absolute top-0 left-0 w-1/2 pointer-events-none h-7 opacity-35"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 36 36'%3E%3Cg fill='none' stroke='%23FFFFFF' stroke-width='1.2'%3E%3Crect x='10' y='10' width='16' height='16' transform='rotate(45 18 18)'/%3E%3Crect x='15' y='15' width='6' height='6' transform='rotate(45 18 18)'/%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundRepeat: "repeat-x",
                    backgroundSize: "36px 36px",
                    backgroundPosition: "top right",
                  }}
                />
                <div
                  className="absolute bottom-0 left-0 w-1/2 pointer-events-none h-7 opacity-35"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 36 36'%3E%3Cg fill='none' stroke='%23FFFFFF' stroke-width='1.2'%3E%3Crect x='10' y='10' width='16' height='16' transform='rotate(45 18 18)'/%3E%3Crect x='15' y='15' width='6' height='6' transform='rotate(45 18 18)'/%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundRepeat: "repeat-x",
                    backgroundSize: "36px 36px",
                    backgroundPosition: "bottom right",
                  }}
                />
                <div className="mb-2 text-xs font-normal opacity-80">{cards[0].id} — نبذة تاريخية</div>
                <h3 className="mb-3 text-xl font-bold text-white sm:text-2xl">{cards[0].title}</h3>
                <p className="text-sm font-normal leading-relaxed sm:text-base">{cards[0].desc}</p>
              </div>

              {/* الكارت الثاني */}
              <div className="flex flex-col justify-center flex-1 w-full p-6 bg-white border shadow-sm sm:p-8 rounded-xl">
                <div className="mb-2 text-xs font-normal" style={{ color: "#EF9000EF" }}>
                  {cards[1].id} — التراث الخيري
                </div>
                <h3 className="mb-3 text-xl font-bold sm:text-2xl" style={{ color: "#201912" }}>
                  {cards[1].title}
                </h3>
                <p className="text-sm font-normal leading-relaxed sm:text-base" style={{ color: "#525252" }}>
                  {cards[1].desc}
                </p>
              </div>

              {/* الكارت الثالث */}
              <div className="flex flex-col justify-center flex-1 w-full p-6 bg-white border shadow-sm sm:p-8 rounded-xl">
                <div className="mb-2 text-xs font-normal" style={{ color: "#EF9000EF" }}>
                  {cards[2].id} — عن العائلة
                </div>
                <h3 className="mb-3 text-xl font-bold sm:text-2xl" style={{ color: "#201912" }}>
                  {cards[2].title}
                </h3>
                <p className="text-sm font-normal leading-relaxed sm:text-base" style={{ color: "#525252" }}>
                  {cards[2].desc}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AlQaraeenVillage;