"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MenuIcon, X, ArrowUpLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Link, usePathname } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const navigationItems = [
  { label: "إقليم الوشم", href: "#ushaiger" },
  { label: "بلدة القرين", href: "#village" },
  { label: "شخصيات مهمة", href: "#figures" },
  { label: "الأمراء", href: "#princes" },
  { label: "المشايخ وطلبة العلم", href: "#scholars" },
  { label: "الأعمال الخيرية", href: "#charity" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-4 md:px-10",
        isScrolled
          ? "bg-[#1a1a1a]/70 backdrop-blur-md shadow-md py-1.5 md:py-2"
          : "bg-transparent py-3",
      )}
    >
      <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-4">
        <Link
          href="/"
          className={cn(
            "relative flex items-center justify-center overflow-hidden transition-all duration-500",
            isScrolled
              ? "w-10 h-10 md:w-16 md:h-16"
              : "w-14 h-14 md:w-30 md:h-30",
          )}
        >
          <Image
            src="/images/logo.png"
            alt="Logo"
            fill
            className="object-contain "
          />
        </Link>

        <div className="items-center justify-center hidden gap-2 p-2 xl:flex bg-[#FFFFFF59]">
          {navigationItems.map((item, idx) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={idx}
                href={item.href}
                className={cn(
                  "px-8 py-3 text-sm font-semibold transition-all whitespace-nowrap",
                  isActive
                    ? "bg-[#FFFFFFE5] text-[#EF9000]"
                    : "bg-[#FFFFFF5D] text-white hover:bg-[#FFFFFF66]",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="items-center hidden shrink-0 xl:flex">
          <Link
            href="#library"
            className={cn(
              "flex items-center justify-between pl-2 pr-6 transition-all shrink-0 rounded-xl",
              "w-[154px]",
              isScrolled ? "h-[44px]" : "h-[56px]",
              "bg-black text-white",
            )}
          >
            <span className="ml-2 text-sm font-bold">المكتبة</span>
            <span className="flex items-center justify-center w-10 h-10 bg-[#F0A23C] rounded-xl shrink-0">
              <ArrowUpLeft className="w-5 h-5 text-white" />
            </span>
          </Link>
        </div>

        <div className="cursor-pointer xl:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="text-white"
          >
            {isOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <MenuIcon className="w-8 h-8" />
            )}
          </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetContent
            side="right"
            className="w-[300px] bg-white border-none p-6 [&>button]:hidden"
          >
            <div className="flex justify-end mb-6"></div>
            <div className="flex flex-col gap-2 mb-6">
              {navigationItems.map((item, idx) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={idx}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "p-4 text-lg font-bold transition-colors border-b border-gray-100 rounded-lg",
                      isActive
                        ? "bg-[#F0A23C] text-white"
                        : "text-gray-700 hover:bg-gray-50",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
            <Link
              href="#library"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between w-full h-[56px] pl-2 pr-6 bg-gray-100 rounded-xl"
            >
              <span className="text-sm font-bold text-gray-700">المكتبة</span>
              <span className="flex items-center justify-center w-10 h-10 bg-[#F0A23C] rounded-xl shrink-0">
                <ArrowUpLeft className="w-5 h-5 text-white" />
              </span>
            </Link>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
