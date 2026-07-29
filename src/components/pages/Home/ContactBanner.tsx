import React from "react";

export const ContactBanner = () => {
  return (
    <section className="w-full bg-[#211A1A]" style={{
      backgroundColor: "#211A1A",
      backgroundImage: `
        repeating-linear-gradient(
          -45deg,
          rgba(255, 255, 255, 0.03),
          rgba(255, 255, 255, 0.03) 1px,
          transparent 1px,
          transparent 12px
        )
      `,
    }}>
      <div className="max-w-[1440px] w-full mx-auto">
        <div className="relative w-full h-auto md:h-[390px] overflow-hidden py-12 px-6 sm:px-12 md:py-[80px] md:px-[80px] rounded-2xl flex items-center">
          <div className="max-w-[1280px] w-full mx-auto h-full flex flex-col-reverse md:flex-row-reverse items-start justify-between">
            <div className="z-10 flex flex-col items-start justify-start w-full md:w-[45%] gap-6 mt-8 md:mt-0">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-white leading-tight text-right w-full">
                دعنا نساعدك، راسلنا الآن عبر <br /> واتساب وسنكون سعداء بخدمتك.
              </h3>

              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-white text-[#211A1A] hover:bg-gray-100 transition-colors shadow-lg box-border"
                style={{
                  width: "214px",
                  height: "56px",
                  paddingTop: "12px",
                  paddingRight: "24px",
                  paddingBottom: "12px",
                  paddingLeft: "8px",
                  borderRadius: "8px",
                }}
              >
                <span className="text-[14px] font-bold leading-none">تواصل معنا عبر واتساب</span>
                <span className="flex items-center justify-center w-10 h-10 bg-[#211A1A] text-white rounded-md text-[28px] font-bold leading-none rotate-270 shrink-0">
                  <svg 
                    width="22" 
                    height="22" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="rotate-360"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </span>
              </a>
            </div>

            <div className="z-10 flex flex-col items-start w-full md:w-[35%] text-right">
              <div className="flex items-center gap-0 mb-4">
                <div className="w-8 h-[1px] bg-gray-500" />
                <img
                  src="/images/logo.png"
                  alt="Logo"
                  className="object-contain w-6 h-6"
                />
                <span className="text-xs font-medium text-gray-300">
                  تواصل معنا
                </span>
              </div>

              <p className="mb-6 text-sm text-white/80 md:text-base">
                يسعدنا استقبال استفساراتكم والرد عليها عبر واتساب.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;