"use client";

import { useAuthStore } from "@/store/useAuthStore";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { Crown, Users, HeartHandshake, BookOpen, LogOut, UserCog } from "lucide-react";
import { useEffect } from "react";
import { toast } from "sonner";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const token = useAuthStore((state) => state.token);
  const logout = useAuthStore((state) => state.logout);

  useEffect(() => {
    if (!token) {
      toast.error("يجب تسجيل الدخول أولاً للوصول إلى لوحة التحكم");
      router.push("/login");
    }
  }, [token, router]);

  if (!token) return null;

  const navItems = [
    { name: "الأمراء والقرون", href: "/admin/princes", icon: Crown },
    { name: "المشائخ وطلبة العلم", href: "/admin/scholars", icon: Users },
    { name: "الأعمال الخيرية", href: "/admin/charities", icon: HeartHandshake },
    { name: "المكتبة الرقمية", href: "/admin/library", icon: BookOpen },
  ];

  return (
    <div className="min-h-screen pt-28 md:pt-[160px] bg-[#d8c8b5] flex flex-col md:flex-row" dir="rtl">
      {/* تم تغيير خلفية الـ Sidebar لدرجة أفتح (فانيلا دافئة) لعمل تباين احترافي مع خلفية الموقع */}
      <aside className="w-full md:w-72 bg-[#F4EFEA] text-[#1B0F00] flex flex-col p-4 md:p-6 shadow-lg shrink-0 border-b md:border-b-0 md:border-l border-[#d4c4b2] gap-4">
        
        <div className="pb-3 border-b border-[#e2d5c9] hidden md:block">
          <h2 className="text-lg font-bold tracking-wide text-[#1B0F00]">لوحة التحكم</h2>
          <p className="text-xs text-[#705844] mt-1">مبادرات عائلة العمار</p>
        </div>
        
        <nav className="grid grid-cols-2 gap-2 sm:grid-cols-4 md:flex md:flex-col">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center justify-center md:justify-start gap-3 px-3.5 py-3 rounded-xl text-xs md:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-[#1B0F00] text-[#FDFBF7] shadow-md font-bold"
                    : "text-[#2C1805] hover:bg-[#e8decF]"
                }`}
              >
                <Icon className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
                <span className="text-center md:text-right">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block border-t border-[#e2d5c9] pt-2" />

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 md:flex md:flex-col shrink-0">
          <Link
            href="/admin/account"
            className={`flex items-center justify-center md:justify-start gap-3 px-3.5 py-3 rounded-xl text-xs md:text-sm font-medium transition-all duration-200 ${
              pathname === "/admin/account"
                ? "bg-[#1B0F00] text-[#FDFBF7] shadow-md font-bold"
                : "text-[#2C1805] bg-[#e8decF]/60 hover:bg-[#1B0F00] hover:text-[#FDFBF7]"
            }`}
          >
            <UserCog className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
            <span className="text-center md:text-right">إدارة الحساب</span>
          </Link>

          <button
            onClick={() => {
              logout();
              router.push("/login");
            }}
            title="تسجيل الخروج"
            className="flex items-center justify-center md:justify-start gap-3 px-3.5 py-3 text-xs md:text-sm font-semibold text-red-700 transition-all duration-200 bg-red-500/10 hover:bg-red-600 hover:text-white rounded-xl"
          >
            <LogOut className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
            <span className="text-center md:text-right">تسجيل الخروج</span>
          </button>
        </div>

      </aside>

      <main className="flex-1 p-4 overflow-y-auto md:p-10">
        <div className="max-w-5xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}