"use client";

import { useState } from "react";
import { useLogin } from "@/queries"; 
import { ShieldCheck, Mail, Lock } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const { mutate: login, isPending } = useLogin();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <div 
      className="relative flex items-center justify-center min-h-screen px-4 pt-32 pb-12 bg-center bg-cover" 
      style={{ backgroundImage: `url('/images/desert.jpg')` }}
      dir="rtl"
    >
      {/* طبقة تظليل خفيفة فوق الخلفية لبروز النموذج */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>

      {/* نموذج تسجيل الدخول */}
      <div className="relative z-10 w-full max-w-md bg-white/95 backdrop-blur-md border border-[#EBE3D5] rounded-3xl shadow-2xl p-8 space-y-6">
        
        {/* رأس الصفحة مع أيقونة هادئة */}
        <div className="space-y-2 text-center">
          <div className="w-16 h-16 bg-[#F5EFE6] border border-[#E3D5C1] rounded-2xl mx-auto flex items-center justify-center shadow-sm">
            <ShieldCheck className="w-8 h-8 text-[#594432]" />
          </div>
          <h1 className="text-2xl font-bold tracking-wide text-[#1B0F00]">تسجيل دخول الأدمن</h1>
          <p className="text-sm text-[#735A42]">لوحة تحكم مبادرات عائلة العمار</p>
        </div>

        {/* نموذج الإدخال */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-[#594432] uppercase tracking-wider">البريد الإلكتروني</label>
            <div className="relative">
              <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-[#A3907C]">
                <Mail className="w-4 h-4" />
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pr-10 pl-4 py-3 bg-[#FAF8F5] border border-[#E3D5C1] rounded-xl text-[#1B0F00] placeholder-[#A3907C] text-sm focus:outline-none focus:border-[#594432] focus:bg-white transition-all"
                placeholder="admin@alammar.family"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-[#594432] uppercase tracking-wider">كلمة المرور</label>
            <div className="relative">
              <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-[#A3907C]">
                <Lock className="w-4 h-4" />
              </span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pr-10 pl-4 py-3 bg-[#FAF8F5] border border-[#E3D5C1] rounded-xl text-[#1B0F00] placeholder-[#A3907C] text-sm focus:outline-none focus:border-[#594432] focus:bg-white transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full mt-3 py-3.5 bg-[#1B0F00] hover:bg-[#331E05] text-[#FDFBF7] font-bold text-sm rounded-xl shadow-md transition-all duration-200 disabled:opacity-50"
          >
            {isPending ? "جاري التحقق..." : "تسجيل الدخول"}
          </button>
        </form>

      </div>
    </div>
  );
}