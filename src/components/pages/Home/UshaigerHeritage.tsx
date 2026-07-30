import React from "react";
import Image from "next/image";

export const UshaigerHeritage = () => {
  const stats = [
    { value: "٣٥", label: "قرية تاريخية" },
    { value: "٦٠٠", label: "سنة توثيق" },
    { value: "٩", label: "مسارات وادي" },
  ];

  const sentences = [
    "قرية عريقة في إقليم الوشم، سكنها الأجداد قروناً، واشتُهرت بمزارع النخيل والآبار العذبة والمساجد القديمة.",
    "شكّلت القرائن نقطة عبور بين قرى الوشم وأسواقها، ونشأ فيها علماء وشعراء ورجالات مؤثرون في المنطقة.",
    "بيوت طينية بأبراج مدرّجة، وأبواب خشبية منقوشة، وفتحات مثلثة تُدخل الضوء وتصون الخصوصية.",
  ];

  return (
    // الحاوية الرئيسية للقسم
    <section
      className="box-border relative flex flex-col w-full mx-auto overflow-hidden"
      style={{
        background: `linear-gradient(0deg, #F7F2EA, #F7F2EA), linear-gradient(180deg, rgba(242, 231, 204, 0) 67.82%, rgba(245, 237, 219, 0.9) 94.11%, #F7F2EA 100%)`,
      }}
    >
      {/* 1. حاوية النصوص: تم نقل الـ padding والـ max-width إليها */}
      <div className="w-full max-w-[1440px]  px-6 sm:px-20 lg:px-[120px] pt-[60px] pb-[15px] flex flex-col items-start text-right z-10">
        <div className="flex items-center gap-1 mb-3 sm:mb-4">
          <div className="w-8 sm:w-10 h-[1px] bg-[#723F00]" />
          {/* <div className="relative flex items-center justify-center overflow-hidden w-7 h-7 sm:w-8 sm:h-8">
            <Image
              src="/images/icon.png"
              alt="Icon"
              fill
              className="object-contain p-1"
            />
          </div> */}
          <span className="text-xs font-normal text-[#723F00]">القرية</span>
        </div>

        <h2 className="mb-5 text-2xl font-bold leading-tight text-black sm:mb-6 md:mb-8 sm:text-3xl md:text-5xl lg:text-6xl">
          بلدة القرائن
        </h2>

        <div className="w-full max-w-full sm:max-w-xl md:max-w-2xl mb-4 space-y-3 sm:space-y-3.5 ">
          {sentences.map((text, i) => (
            <div
              key={i}
              className="flex items-start justify-start text-gray-700 sm:items-center"
              style={{ gap: "10px" }}
            >
              <div className="flex items-center justify-center w-4 h-5 mt-1 sm:h-6 md:w-5 md:h-7 shrink-0 sm:mt-0">
                <svg
                  width="17"
                  height="9"
                  viewBox="0 0 17 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ width: "100%", height: "100%" }}
                >
                  <path
                    d="M16.5669 6.99951V8.16581H15.4625V6.99951H16.5669Z"
                    fill="#C3AA88"
                  />
                  <path
                    d="M15.4624 5.83154V6.99784H14.358V5.83154H15.4624Z"
                    fill="#C3AA88"
                  />
                  <path
                    d="M14.3577 4.66553V5.83183H13.2533V4.66553H14.3577Z"
                    fill="#C3AA88"
                  />
                  <path
                    d="M13.2532 6.99951V8.16581H12.1488V6.99951H13.2532Z"
                    fill="#C3AA88"
                  />
                  <path
                    d="M12.149 5.83154V6.99784H11.0446V5.83154H12.149Z"
                    fill="#C3AA88"
                  />
                  <path
                    d="M9.94023 6.99951V8.16581H8.83581V6.99951H9.94023Z"
                    fill="#C3AA88"
                  />
                  <path
                    d="M8.83598 5.83154V6.99784H7.73159V5.83154H8.83598Z"
                    fill="#C3AA88"
                  />
                  <path
                    d="M6.62724 6.99951V8.16581H5.52285V6.99951H6.62724Z"
                    fill="#C3AA88"
                  />
                  <path
                    d="M5.52275 5.83154V6.99784H4.41833V5.83154H5.52275Z"
                    fill="#C3AA88"
                  />
                  <path
                    d="M16.5669 -1.19209e-07V1.1663H15.4625V-1.19209e-07H16.5669Z"
                    fill="#C3AA88"
                  />
                  <path
                    d="M15.4624 1.16578V2.33207H14.358V1.16578H15.4624Z"
                    fill="#C3AA88"
                  />
                  <path
                    d="M14.3577 2.33374V3.50004H13.2533V2.33374H14.3577Z"
                    fill="#C3AA88"
                  />
                  <path
                    d="M13.2532 -1.19209e-07V1.1663H12.1488V-1.19209e-07H13.2532Z"
                    fill="#C3AA88"
                  />
                  <path
                    d="M12.149 1.16578V2.33207H11.0446V1.16578H12.149Z"
                    fill="#C3AA88"
                  />
                  <path
                    d="M9.94023 -1.19209e-07V1.1663H8.83581V-1.19209e-07H9.94023Z"
                    fill="#C3AA88"
                  />
                  <path
                    d="M8.83598 1.16578V2.33207H7.73159V1.16578H8.83598Z"
                    fill="#C3AA88"
                  />
                  <path
                    d="M6.62724 -1.19209e-07V1.1663H5.52285V-1.19209e-07H6.62724Z"
                    fill="#C3AA88"
                  />
                  <path
                    d="M5.52275 1.16578V2.33207H4.41833V1.16578H5.52275Z"
                    fill="#C3AA88"
                  />
                  <path
                    d="M13.2532 4.66553H11.0444V5.83183H9.94V4.66553H7.73119V5.83183H6.62678V4.66553H4.41761V5.83183H3.31322V4.66553H0V3.49886L3.31322 3.49886H2.33256H4.41761V3.49886H6.62678V2.33256H7.73119V3.49886L9.94 3.49886H2.33256H11.0444V3.49886H13.2532V4.66553Z"
                    fill="#C3AA88"
                  />
                </svg>
              </div>
              <span
                className="text-[13px] sm:text-sm leading-relaxed"
                style={{ color: "#525252" }}
              >
                {text}
              </span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 w-full max-w-full sm:max-w-xl py-6 sm:py-8 gap-y-4 gap-x-2 sm:gap-[24px] justify-items-start">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center text-center border-l last:border-0 border-[#723F00] pl-4 sm:pl-6 md:pl-10 w-full"
            >
              <div className="flex items-center justify-center mb-1.5 sm:mb-2 text-2xl sm:text-3xl md:text-4xl font-bold text-black">
                {i < 2 && (
                  <span className="ml-1" style={{ color: "#EF9000EF" }}>
                    +
                  </span>
                )}
                <span>{stat.value}</span>
              </div>
              <div className="text-[11px] sm:text-xs md:text-sm text-[#525252]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-[220px] sm:h-[320px] md:h-[460px] lg:h-[600px] overflow-hidden">
        <Image
          src="/images/AlQaraeenVillage.png"
          alt="إقليم الوشم"
          fill
          className="object-cover object-center scale-x-[-1]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F7F2EA] via-transparent to-transparent" />
      </div>
      <div className="h-[160px] sm:h-[250px] md:h-[380px] lg:h-[500px]"></div>
    </section>
  );
};

export default UshaigerHeritage;
