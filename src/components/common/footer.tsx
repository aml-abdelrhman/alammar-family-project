import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";

const familyLinks = [
  { label: "الرئيسية", href: "/#lineage" },
  { label: "الأمراء", href: "/#princes" },
  { label: "المشائخ وطلبة العلم", href: "/#scholars" },
  { label: "الأعمال الخيرية", href: "/#charity" },
];

const galleryLinks = [
  { label: "بلدة القرائن", href: "/#village" },
  { label: "اقليم الوشم", href: "/#ushaiger" },
  { label: "المكتبة", href: "/#library" },
  { label: "تواصل معنا", href: "/#contact" },
];

export const FullPageFooter = () => {
  return (
    <section className="relative w-full bg-[#F5EFE5] text-[#3A2A1E] overflow-hidden rounded-b-[32px]">
      <div className="absolute inset-x-0 bottom-0 z-0 h-[260px] sm:h-[300px] pointer-events-none">
        <Image
          src="/images/footer.png"
          alt="Background Heritage"
          fill
          className="object-cover object-bottom scale-x-[-1]"
        />
      </div>

      <div
        className="relative z-10 flex flex-col items-center justify-center w-full pb-0 mx-auto lg:flex-row lg:items-start lg:pb-[60px] min-h-0 lg:min-h-[490px]"
        style={{
          maxWidth: "1440px",
          paddingTop: "60px",
          paddingLeft: "60px",
          paddingRight: "60px",
          gap: "32px",
          transform: "matrix(-1, 0, 0, 1, 0, 0)",
        }}
      >
        <div
          className="relative flex flex-col items-center justify-between w-full h-full"
          style={{ transform: "matrix(-1, 0, 0, 1, 0, 0)" }}
        >
          <div
            className="flex flex-col items-center justify-start w-full mx-auto"
            style={{
              maxWidth: "1280px",
              gap: "32px",
              transform: "matrix(-1, 0, 0, 1, 0, 0)",
            }}
          >
            <div
              className="flex flex-col items-center justify-between w-full mx-auto lg:flex-row"
              style={{
                maxWidth: "1280px",
                minHeight: "124px",
                gap: "24px",
                transform: "matrix(-1, 0, 0, 1, 0, 0)",
              }}
            >
              <div
                className="hidden lg:flex flex-col justify-center items-center w-full lg:w-[194px] h-auto lg:h-[124px]"
                style={{ gap: "28px" }}
              >
                <h4 className="bg-[#333] text-white py-3 px-4 rounded-md text-center font-bold text-base w-full shadow-md">
                  عن العائلة
                </h4>
                <h4 className="bg-[#333] text-white py-3 px-4 rounded-md text-center font-bold text-base w-full shadow-md">
                  معرض
                </h4>
              </div>

              <div
                className="flex flex-col items-center justify-center w-full mx-auto lg:w-auto"
                style={{
                  gap: "24px",
                  borderRadius: "28px",
                }}
              >
                <div className="flex flex-col items-center justify-center w-full gap-3 lg:flex-row">
                  <div className="w-full lg:hidden">
                    <h4 className="bg-[#333] text-white py-2.5 px-4 rounded-md text-center font-bold text-sm w-full shadow-md mb-3">
                      عن العائلة
                    </h4>
                  </div>
                  {familyLinks.map((link, j) => (
                    <Link
                      key={j}
                      href={link.href}
                      className="flex items-center justify-center bg-[#FAFAFA] hover:bg-white transition-colors text-[#737373] shadow-sm text-sm font-normal text-center truncate w-full sm:w-[194px]"
                      style={{
                        height: "48px",
                        padding: "12px 16px",
                        gap: "8px",
                        borderRadius: "8px",
                      }}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="shrink-0"
                      >
                        <path
                          d="M7.1996 4.80029H4.7998V7.20005H7.1996V4.80029Z"
                          fill="#231F20"
                        />
                        <path
                          d="M4.79938 2.40015H2.39941V4.80027H4.79938V2.40015Z"
                          fill="#E0CCAC"
                        />
                        <path
                          d="M7.1996 2.40015H4.7998V4.80027H7.1996V2.40015Z"
                          fill="#E0CCAC"
                        />
                        <path
                          d="M7.1996 0H4.7998V2.40012H7.1996V0Z"
                          fill="#E0CCAC"
                        />
                        <path
                          d="M7.1996 9.59985H4.7998V12H7.1996V9.59985Z"
                          fill="#E0CCAC"
                        />
                        <path
                          d="M2.39997 4.80029H0V7.20005H2.39997V4.80029Z"
                          fill="#E0CCAC"
                        />
                        <path
                          d="M9.59968 2.40015H7.19971V4.80027H9.59968V2.40015Z"
                          fill="#E0CCAC"
                        />
                        <path
                          d="M4.79938 4.80029H2.39941V7.20005H4.79938V4.80029Z"
                          fill="#E0CCAC"
                        />
                        <path
                          d="M9.59968 4.80029H7.19971V7.20005H9.59968V4.80029Z"
                          fill="#E0CCAC"
                        />
                        <path
                          d="M4.79938 7.19995H2.39941V9.60007H4.79938V7.19995Z"
                          fill="#E0CCAC"
                        />
                        <path
                          d="M7.1996 7.19995H4.7998V9.60007H7.1996V7.19995Z"
                          fill="#E0CCAC"
                        />
                        <path
                          d="M9.59968 7.19995H7.19971V9.60007H9.59968V7.19995Z"
                          fill="#E0CCAC"
                        />
                        <path
                          d="M12.0001 4.80029H9.6001V7.20005H12.0001V4.80029Z"
                          fill="#E0CCAC"
                        />
                      </svg>
                      <span className="truncate">{link.label}</span>
                    </Link>
                  ))}
                </div>

                <div className="flex flex-col items-center justify-center w-full gap-3 lg:flex-row">
                  <div className="w-full lg:hidden">
                    <h4 className="bg-[#333] text-white py-2.5 px-4 rounded-md text-center font-bold text-sm w-full shadow-md mb-3">
                      معرض
                    </h4>
                  </div>
                  {galleryLinks.map((link, j) => (
                    <Link
                      key={j}
                      href={link.href}
                      className="flex items-center justify-center bg-[#FAFAFA] hover:bg-white transition-colors text-[#737373] shadow-sm text-sm font-normal text-center truncate w-full sm:w-[194px]"
                      style={{
                        height: "48px",
                        padding: "12px 16px",
                        gap: "8px",
                        borderRadius: "8px",
                      }}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="shrink-0"
                      >
                        <path
                          d="M7.1996 4.80029H4.7998V7.20005H7.1996V4.80029Z"
                          fill="#231F20"
                        />
                        <path
                          d="M4.79938 2.40015H2.39941V4.80027H4.79938V2.40015Z"
                          fill="#E0CCAC"
                        />
                        <path
                          d="M7.1996 2.40015H4.7998V4.80027H7.1996V2.40015Z"
                          fill="#E0CCAC"
                        />
                        <path
                          d="M7.1996 0H4.7998V2.40012H7.1996V0Z"
                          fill="#E0CCAC"
                        />
                        <path
                          d="M7.1996 9.59985H4.7998V12H7.1996V9.59985Z"
                          fill="#E0CCAC"
                        />
                        <path
                          d="M2.39997 4.80029H0V7.20005H2.39997V4.80029Z"
                          fill="#E0CCAC"
                        />
                        <path
                          d="M9.59968 2.40015H7.19971V4.80027H9.59968V2.40015Z"
                          fill="#E0CCAC"
                        />
                        <path
                          d="M4.79938 4.80029H2.39941V7.20005H4.79938V4.80029Z"
                          fill="#E0CCAC"
                        />
                        <path
                          d="M9.59968 4.80029H7.19971V7.20005H9.59968V4.80029Z"
                          fill="#E0CCAC"
                        />
                        <path
                          d="M4.79938 7.19995H2.39941V9.60007H4.79938V7.19995Z"
                          fill="#E0CCAC"
                        />
                        <path
                          d="M7.1996 7.19995H4.7998V9.60007H7.1996V7.19995Z"
                          fill="#E0CCAC"
                        />
                        <path
                          d="M9.59968 7.19995H7.19971V9.60007H9.59968V7.19995Z"
                          fill="#E0CCAC"
                        />
                        <path
                          d="M12.0001 4.80029H9.6001V7.20005H12.0001V4.80029Z"
                          fill="#E0CCAC"
                        />
                      </svg>
                      <span className="truncate">{link.label}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div
                className="flex flex-col justify-center items-center w-full lg:w-[194px] h-auto lg:h-[124px]"
                style={{ gap: "16px" }}
              >
                <h4 className="bg-[#333] text-white py-2.5 px-4 rounded-md text-center font-bold text-base w-full shadow-md">
                  التواصل
                </h4>
                <a
                  href="https://whatsapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border border-[#d1ccc0] rounded-lg flex justify-center items-center hover:bg-white/90 transition-colors h-[42px] shadow-sm w-full"
                  aria-label="WhatsApp"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.7225 14.0602C16.467 13.9289 15.1944 13.3055 14.9577 13.2211C14.7209 13.132 14.5475 13.0898 14.3764 13.3523C14.203 13.6125 13.7108 14.1914 13.5561 14.3672C13.4061 14.5406 13.2538 14.5617 12.9983 14.4328C11.4795 13.6734 10.4834 13.0781 9.48267 11.3602C9.21782 10.9031 9.74751 10.9359 10.242 9.94922C10.3264 9.77578 10.2842 9.62813 10.2186 9.49688C10.153 9.36563 9.63735 8.09531 9.42173 7.57734C9.21313 7.07344 8.99751 7.14375 8.84048 7.13437C8.69048 7.125 8.51938 7.125 8.34595 7.125C8.17251 7.125 7.8936 7.19063 7.65688 7.44609C7.42017 7.70625 6.7522 8.33203 6.7522 9.60234C6.7522 10.8727 7.67798 12.1031 7.80454 12.2766C7.93579 12.45 9.62564 15.0563 12.2202 16.1789C13.8608 16.8867 14.503 16.9477 15.3233 16.8258C15.8225 16.7508 16.8514 16.2023 17.0647 15.5953C17.278 14.9906 17.278 14.4727 17.2147 14.3648C17.1514 14.25 16.978 14.1844 16.7225 14.0602Z"
                      fill="#695343"
                    />
                    <path
                      d="M21.6845 7.93125C21.1548 6.67266 20.3954 5.54297 19.4275 4.57266C18.4595 3.60469 17.3298 2.84297 16.0689 2.31563C14.7798 1.77422 13.4111 1.5 12.0001 1.5H11.9533C10.5329 1.50703 9.15716 1.78828 7.86341 2.34141C6.6142 2.87578 5.49388 3.63516 4.53529 4.60312C3.5767 5.57109 2.82435 6.69609 2.30404 7.95C1.76498 9.24844 1.4931 10.6289 1.50013 12.0492C1.50716 13.6758 1.89623 15.2906 2.62513 16.7344V20.2969C2.62513 20.8922 3.10795 21.375 3.70326 21.375H7.2681C8.71185 22.1039 10.3267 22.493 11.9533 22.5H12.0025C13.4064 22.5 14.7681 22.2281 16.0501 21.6961C17.304 21.1734 18.4314 20.4234 19.397 19.4648C20.365 18.5063 21.1267 17.3859 21.6587 16.1367C22.2119 14.843 22.4931 13.4672 22.5001 12.0469C22.5072 10.6195 22.2306 9.23438 21.6845 7.93125ZM18.1431 18.1969C16.5001 19.8234 14.3204 20.7188 12.0001 20.7188H11.9603C10.547 20.7117 9.1431 20.3602 7.90326 19.6992L7.70638 19.5938H4.40638V16.2938H4.30091 16.0969C3.63998 14.857 3.28841 13.4531 3.28138 12.0398C3.27201 9.70312 4.16498 7.50937 5.80326 5.85703C7.4392 4.20469 9.62591 3.29062 11.9626 3.28125H12.0025C13.1744 3.28125 14.3111 3.50859 15.3822 3.95859C16.4275 4.39687 17.365 5.02734 18.1712 5.83359C18.9751 6.6375 19.6079 7.57734 20.0462 8.62266C20.5009 9.70547 20.7283 10.8539 20.7236 12.0398C20.7095 14.3742 19.7931 16.5609 18.1431 18.1969Z"
                      fill="#695343"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center w-full mt-8 pb-18 lg:pb-0 lg:mt-18">
            <div
              className="flex items-center justify-center w-full max-w-[418px] mx-auto px-4 mb-1"
              style={{ gap: "6px" }}
            >
              <div
                className="flex-grow border-t border-solid"
                style={{ borderColor: "#723F00" }}
              ></div>

              <div className="relative w-[21px] h-[21px] shrink-0">
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
