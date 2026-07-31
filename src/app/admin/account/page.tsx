"use client";

import { useState } from "react";
import { UserCog, UserPlus, Lock, Mail, User, Loader2, Trash2, Users } from "lucide-react";
import { 
  useUpdateAdminAccount, 
  useCreateAdmin, 
  useGetAdminsList, 
  useDeleteAdmin 
} from "@/queries"; // تعديل المسار حسب مكان ملف الـ hooks لديك

export default function AdminAccountPage() {
  const [activeTab, setActiveTab] = useState<"update" | "addAdmin" | "manageAdmins">("update");

  // بيانات نموذج تعديل البيانات الحالية
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  // بيانات نموذج إضافة أدمن جديد
  const [newAdminName, setNewAdminName] = useState("");
  const [newAdminEmail, setNewAdminEmail] = useState("");
  const [newAdminPassword, setNewAdminPassword] = useState("");

  // استخدام الـ Mutations والـ Queries
  const updateAccountMutation = useUpdateAdminAccount();
  const createAdminMutation = useCreateAdmin();
  const deleteAdminMutation = useDeleteAdmin();
  const { data: adminsList, isLoading: isLoadingAdmins } = useGetAdminsList();

  const handleUpdateAccount = (e: React.FormEvent) => {
    e.preventDefault();
    updateAccountMutation.mutate(
      {
        name: name || undefined,
        email: email || undefined,
        current_password: currentPassword || undefined,
        new_password: newPassword || undefined,
      },
      {
        onSuccess: () => {
          setCurrentPassword("");
          setNewPassword("");
        },
      }
    );
  };

  const handleAddAdmin = (e: React.FormEvent) => {
    e.preventDefault();
    createAdminMutation.mutate(
      {
        name: newAdminName,
        email: newAdminEmail,
        password: newAdminPassword,
      },
      {
        onSuccess: () => {
          setNewAdminName("");
          setNewAdminEmail("");
          setNewAdminPassword("");
        },
      }
    );
  };

  const handleDeleteAdmin = (id: number | string) => {
    if (window.confirm("هل أنت متأكد من حذف هذا المشرف؟")) {
      deleteAdminMutation.mutate(id);
    }
  };

  return (
    <div className="space-y-8" dir="rtl">
      {/* رأس الصفحة */}
      <div className="bg-[#1B0F00] p-6 rounded-2xl shadow-md border border-[#331E05] flex items-center justify-between text-[#FDFBF7]">
        <div>
          <h1 className="text-xl font-bold tracking-wide md:text-2xl">إدارة الحساب والمشرفين</h1>
          <p className="text-xs md:text-sm text-[#A3907C] mt-1">تعديل بياناتك الشخصية، إدارة المشرفين، أو إضافة مشرف جديد للنظام</p>
        </div>
        <div className="w-12 h-12 bg-[#331E05] border border-[#594432] rounded-xl flex items-center justify-center text-[#d4c8ad] shadow-sm shrink-0">
          <UserCog className="w-6 h-6" />
        </div>
      </div>

      {/* محتوى الصفحة الرئيسي */}
      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-[#EBE3D5]">
        
        {/* أزرار التبديل بين الأقسام */}
        <div className="flex flex-col sm:flex-row bg-[#FAF8F5] p-1.5 rounded-xl border border-[#E3D5C1] max-w-2xl mx-auto mb-8 gap-1.5">
          <button
            type="button"
            onClick={() => setActiveTab("update")}
            className={`flex-1 py-2.5 px-3 text-xs md:text-sm font-bold rounded-lg transition flex items-center justify-center gap-2 ${
              activeTab === "update" 
                ? "bg-[#1B0F00] text-[#FDFBF7] shadow" 
                : "text-[#594432] hover:bg-gray-200"
            }`}
          >
            <UserCog className="w-4 h-4 shrink-0" />
            تعديل بياناتي
          </button>
          
          <button
            type="button"
            onClick={() => setActiveTab("manageAdmins")}
            className={`flex-1 py-2.5 px-3 text-xs md:text-sm font-bold rounded-lg transition flex items-center justify-center gap-2 ${
              activeTab === "manageAdmins" 
                ? "bg-[#1B0F00] text-[#FDFBF7] shadow" 
                : "text-[#594432] hover:bg-gray-200"
            }`}
          >
            <Users className="w-4 h-4 shrink-0" />
            قائمة المشرفين
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("addAdmin")}
            className={`flex-1 py-2.5 px-3 text-xs md:text-sm font-bold rounded-lg transition flex items-center justify-center gap-2 ${
              activeTab === "addAdmin" 
                ? "bg-[#1B0F00] text-[#FDFBF7] shadow" 
                : "text-[#594432] hover:bg-gray-200"
            }`}
          >
            <UserPlus className="w-4 h-4 shrink-0" />
            إضافة أدمن جديد
          </button>
        </div>

        {/* نموذج تعديل البيانات الشخصية */}
        {activeTab === "update" && (
          <form onSubmit={handleUpdateAccount} className="max-w-2xl mx-auto space-y-6">
            <div className="border-b border-[#EBE3D5] pb-4 mb-6">
              <h2 className="text-base font-bold text-[#1B0F00]">تحديث معلومات الحساب الحالي</h2>
              <p className="text-xs text-[#735A42] mt-0.5">يمكنك تغيير اسمك، بريدك الإلكتروني، أو كلمة المرور الخاصة بك.</p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label className="block text-xs font-semibold text-[#594432] uppercase tracking-wider mb-2">الاسم الجديد</label>
                <div className="relative">
                  <span className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none text-[#735A42]">
                    <User className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="الاسم الكامل"
                    className="w-full pr-10 pl-4 py-3 bg-[#FAF8F5] border border-[#E3D5C1] rounded-xl text-sm focus:outline-none focus:border-[#594432] focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#594432] uppercase tracking-wider mb-2">البريد الإلكتروني</label>
                <div className="relative">
                  <span className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none text-[#735A42]">
                    <Mail className="w-4 h-4" />
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@example.com"
                    className="w-full pr-10 pl-4 py-3 bg-[#FAF8F5] border border-[#E3D5C1] rounded-xl text-sm focus:outline-none focus:border-[#594432] focus:bg-white transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 pt-2 md:grid-cols-2">
              <div>
                <label className="block text-xs font-semibold text-[#594432] uppercase tracking-wider mb-2">كلمة المرور الحالية</label>
                <div className="relative">
                  <span className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none text-[#735A42]">
                    <Lock className="w-4 h-4" />
                  </span>
                  <input
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pr-10 pl-4 py-3 bg-[#FAF8F5] border border-[#E3D5C1] rounded-xl text-sm focus:outline-none focus:border-[#594432] focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#594432] uppercase tracking-wider mb-2">كلمة المرور الجديدة (اختياري)</label>
                <div className="relative">
                  <span className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none text-[#735A42]">
                    <Lock className="w-4 h-4" />
                  </span>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="تركها فارغة لعدم التغيير"
                    className="w-full pr-10 pl-4 py-3 bg-[#FAF8F5] border border-[#E3D5C1] rounded-xl text-sm focus:outline-none focus:border-[#594432] focus:bg-white transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <button
                type="submit"
                disabled={updateAccountMutation.isPending}
                className="px-6 py-3 bg-[#1B0F00] hover:bg-[#331E05] text-[#FDFBF7] font-bold text-sm rounded-xl shadow transition-all duration-200 disabled:opacity-50 flex items-center gap-2"
              >
                {updateAccountMutation.isPending && <Loader2 className="w-4 h-4 animate-spin" />}
                {updateAccountMutation.isPending ? "جاري الحفظ..." : "حفظ التعديلات"}
              </button>
            </div>
          </form>
        )}

        {/* قائمة المشرفين والحذف */}
        {activeTab === "manageAdmins" && (
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="border-b border-[#EBE3D5] pb-4 mb-6">
              <h2 className="text-base font-bold text-[#1B0F00]">قائمة المشرفين المسجلين</h2>
              <p className="text-xs text-[#735A42] mt-0.5">استعراض وحذف حسابات المشرفين في النظام.</p>
            </div>

            {isLoadingAdmins ? (
              <div className="flex justify-center py-10">
                <Loader2 className="w-8 h-8 animate-spin text-[#1B0F00]" />
              </div>
            ) : adminsList && adminsList.length > 0 ? (
              <div className="overflow-x-auto border border-[#E3D5C1] rounded-xl">
                <table className="w-full text-right border-collapse">
                  <thead>
                    <tr className="bg-[#FAF8F5] border-b border-[#E3D5C1] text-xs text-[#594432]">
                      <th className="p-3.5 font-bold">الاسم</th>
                      <th className="p-3.5 font-bold">البريد الإلكتروني</th>
                      <th className="p-3.5 font-bold text-center">الإجراءات</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E3D5C1] text-xs md:text-sm">
                    {adminsList.map((admin) => (
                      <tr key={admin.id} className="hover:bg-[#FAF8F5]/50 transition-colors">
                        <td className="p-3.5 font-medium text-[#1B0F00]">{admin.name}</td>
                        <td className="p-3.5 text-[#735A42]">{admin.email}</td>
                        <td className="p-3.5 text-center">
                          <button
                            onClick={() => handleDeleteAdmin(admin.id)}
                            disabled={deleteAdminMutation.isPending}
                            className="p-2 text-red-600 transition-all duration-200 rounded-lg bg-red-50 hover:bg-red-600 hover:text-white"
                            title="حذف المشرف"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-center text-sm text-[#735A42] py-8">لا يوجد مشرفون إضافيون.</p>
            )}
          </div>
        )}

        {/* نموذج إضافة أدمن جديد */}
        {activeTab === "addAdmin" && (
          <form onSubmit={handleAddAdmin} className="max-w-2xl mx-auto space-y-6">
            <div className="border-b border-[#EBE3D5] pb-4 mb-6">
              <h2 className="text-base font-bold text-[#1B0F00]">إنشاء حساب مشرف جديد (Admin)</h2>
              <p className="text-xs text-[#735A42] mt-0.5">منح صلاحيات التحكم الكامل للنظام لمستخدم جديد.</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#594432] uppercase tracking-wider mb-2">اسم المشرف</label>
                <div className="relative">
                  <span className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none text-[#735A42]">
                    <User className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    required
                    value={newAdminName}
                    onChange={(e) => setNewAdminName(e.target.value)}
                    placeholder="الاسم الكامل"
                    className="w-full pr-10 pl-4 py-3 bg-[#FAF8F5] border border-[#E3D5C1] rounded-xl text-sm focus:outline-none focus:border-[#594432] focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#594432] uppercase tracking-wider mb-2">البريد الإلكتروني للمشرف</label>
                <div className="relative">
                  <span className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none text-[#735A42]">
                    <Mail className="w-4 h-4" />
                  </span>
                  <input
                    type="email"
                    required
                    value={newAdminEmail}
                    onChange={(e) => setNewAdminEmail(e.target.value)}
                    placeholder="admin@example.com"
                    className="w-full pr-10 pl-4 py-3 bg-[#FAF8F5] border border-[#E3D5C1] rounded-xl text-sm focus:outline-none focus:border-[#594432] focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#594432] uppercase tracking-wider mb-2">كلمة المرور المؤقتة</label>
                <div className="relative">
                  <span className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none text-[#735A42]">
                    <Lock className="w-4 h-4" />
                  </span>
                  <input
                    type="password"
                    required
                    value={newAdminPassword}
                    onChange={(e) => setNewAdminPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pr-10 pl-4 py-3 bg-[#FAF8F5] border border-[#E3D5C1] rounded-xl text-sm focus:outline-none focus:border-[#594432] focus:bg-white transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <button
                type="submit"
                disabled={createAdminMutation.isPending}
                className="px-6 py-3 bg-[#1B0F00] hover:bg-[#331E05] text-[#FDFBF7] font-bold text-sm rounded-xl shadow transition-all duration-200 disabled:opacity-50 flex items-center gap-2"
              >
                {createAdminMutation.isPending && <Loader2 className="w-4 h-4 animate-spin" />}
                {createAdminMutation.isPending ? "جاري الإنشاء..." : "إنشاء حساب المشرف"}
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}