"use client";

import { useState } from "react";
import { useGetPrinces, useCreatePrince, useDeletePrince, useUpdatePrince } from "@/queries";
import { Crown, Plus, Trash2, Edit3, Loader2, X } from "lucide-react";
import { toast } from "sonner";

export default function AdminPrincesPage() {
  const { data: princes = [], isLoading } = useGetPrinces();
  const { mutate: createPrince, isPending: isCreating } = useCreatePrince();
  const { mutate: deletePrince, isPending: isDeleting } = useDeletePrince();
  const { mutate: updatePrince, isPending: isUpdating } = useUpdatePrince();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const [isEditingModalOpen, setIsEditingModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editContent, setEditContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description || !content) {
      toast.error("الرجاء ملء جميع الحقول المطلوبة");
      return;
    }

    createPrince(
      { title, description, content },
      {
        onSuccess: (response: any) => {
          setTitle("");
          setDescription("");
          setContent("");
          if (response?.message) {
            toast.success(response.message);
          }
        },
        onError: (error: any) => {
          toast.error(error?.response?.data?.message || "حدث خطأ أثناء الإضافة");
        },
      }
    );
  };

  const handleOpenEdit = (prince: any) => {
    setEditingId(prince.id);
    setEditTitle(prince.title);
    setEditDescription(prince.description);
    setEditContent(prince.content);
    setIsEditingModalOpen(true);
  };

  const handleUpdateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingId || !editTitle || !editDescription || !editContent) {
      toast.error("الرجاء ملء جميع الحقول للتعديل");
      return;
    }

    updatePrince(
      { id: editingId, title: editTitle, description: editDescription, content: editContent },
      {
        onSuccess: (response: any) => {
          setIsEditingModalOpen(false);
          setEditingId(null);
          if (response?.message) {
            toast.success(response.message);
          }
        },
        onError: (error: any) => {
          toast.error(error?.response?.data?.message || "حدث خطأ أثناء التعديل");
        },
      }
    );
  };

  const handleDeleteClick = (id: string) => {
    toast.custom((t) => (
      <div className="flex flex-col gap-3 p-4 bg-white rounded-2xl shadow-xl border border-[#EBE3D5] max-w-sm w-full" dir="rtl">
        <p className="font-bold text-sm text-[#1B0F00]">هل أنت متأكد من رغبتك في الحذف؟</p>
        <div className="flex justify-end gap-2">
          <button
            onClick={() => {
              toast.dismiss(t);
              setDeletingId(id);
              deletePrince(id, {
                onSuccess: (response: any) => {
                  setDeletingId(null);
                  if (response?.message) {
                    toast.success(response.message);
                  }
                },
                onError: (error: any) => {
                  setDeletingId(null);
                  toast.error(error?.response?.data?.message || "حدث خطأ أثناء الحذف");
                },
              });
            }}
            className="px-3 py-1.5 bg-red-600 text-white rounded-lg text-xs font-bold hover:bg-red-700 transition"
          >
            نعم، احذف
          </button>
          <button
            onClick={() => toast.dismiss(t)}
            className="px-3 py-1.5 bg-gray-200 text-gray-800 rounded-lg text-xs font-semibold hover:bg-gray-300 transition"
          >
            إلغاء
          </button>
        </div>
      </div>
    ), {
      duration: Infinity,
    });
  };

  return (
    <div className="space-y-8 bg-white p-6 md:p-8 lg:p-6 shadow-sm border border-[#EBE3D5]">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#EBE3D5] flex items-center justify-between text-[#1B0F00]">
        <div>
          <h1 className="text-2xl font-bold tracking-wide">إدارة الأمراء والقرون</h1>
          <p className="text-sm text-[#735A42] mt-1">إضافة وتعديل السير التاريخية والأمراء</p>
        </div>
        <div className="w-12 h-12 bg-[#FAF8F5] border border-[#EBE3D5] rounded-xl flex items-center justify-center text-[#1B0F00] shadow-sm">
          <Crown className="w-6 h-6"/>
        </div>
      </div>

      <div className="p-0 bg-white border-none shadow-none md:p-0 rounded-2xl">
        <h2 className="text-lg font-bold text-[#1B0F00] mb-6 flex items-center gap-2">
          <Plus className="w-5 h-5 text-[#594432]"/>
          إضافة أمير / قرن جديد
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2">
            <div>
              <label className="block text-xs font-semibold text-[#594432] uppercase tracking-wider mb-2">القرن / العنوان</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="مثال: القرن الخامس عشر"
                className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E3D5C1] rounded-xl text-sm focus:outline-none focus:border-[#594432] focus:bg-white transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#594432] uppercase tracking-wider mb-2">الوصف</label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="مثال: الأمير الأول من آل حُمَيْد"
                className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E3D5C1] rounded-xl text-sm focus:outline-none focus:border-[#594432] focus:bg-white transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#594432] uppercase tracking-wider mb-2">المحتوى / السيرة</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="اكتب السيرة الموجزة أو التفاصيل التاريخية هنا..."
              className="w-full h-32 px-4 py-3 bg-[#FAF8F5] border border-[#E3D5C1] rounded-xl text-sm focus:outline-none focus:border-[#594432] focus:bg-white transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isCreating}
            className="px-6 py-3 bg-[#1B0F00] hover:bg-[#331E05] text-[#FDFBF7] font-bold text-sm rounded-xl shadow transition-all duration-200 disabled:opacity-50 flex items-center gap-2"
          >
            {isCreating && <Loader2 className="w-4 h-4 animate-spin"/>}
            {isCreating ? "جاري الحفظ..." : "حفظ وإضافة السجل"}
          </button>
        </form>
      </div>

      <div className="bg-white p-6 md:p-8 lg:p-6 rounded-2xl shadow-sm border border-[#EBE3D5]">
        <h2 className="text-lg font-bold text-[#1B0F00] mb-6">السجلات المسجلة مسبقاً</h2>
        
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-[#594432]"/>
          </div>
        ) : princes.length === 0 ? (
          <div className="py-12 text-center text-[#A3907C]">لا توجد بيانات مسجلة حالياً في هذا القسم.</div>
        ) : (
          <div className="divide-y divide-[#EBE3D5]">
            {princes.map((prince: any) => (
              <div key={prince.id} className="flex flex-col justify-between gap-4 py-5 md:flex-col md:items-start lg:flex-row lg:items-center">
                <div className="space-y-1.5 flex-1">
                  <span className="inline-block px-3 py-1 text-xs font-bold rounded-full text-[#594432] bg-[#F5EFE6] border border-[#E3D5C1]">
                    {prince.title}
                  </span>
                  <h3 className="font-bold text-[#1B0F00] text-base">{prince.description}</h3>
                  <p className="text-sm text-[#735A42] leading-relaxed">{prince.content}</p>
                </div>
                <div className="flex items-center self-end gap-2 md:self-end lg:self-center">
                  <button
                    onClick={() => handleOpenEdit(prince)}
                    className="px-4 py-2 bg-[#F5EFE6] hover:bg-[#EBE3D5] text-[#594432] rounded-xl text-sm font-semibold transition flex items-center gap-1.5"
                  >
                    <Edit3 className="w-4 h-4"/>
                    <span>تعديل</span>
                  </button>
                  <button
                    onClick={() => handleDeleteClick(prince.id)}
                    disabled={isDeleting && deletingId === prince.id}
                    className="px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-xl text-sm font-semibold transition flex items-center gap-1.5 disabled:opacity-50"
                  >
                    {isDeleting && deletingId === prince.id ? (
                      <Loader2 className="w-4 h-4 animate-spin"/>
                    ) : (
                      <Trash2 className="w-4 h-4"/>
                    )}
                    <span>{isDeleting && deletingId === prince.id ? "جاري الحذف..." : "حذف"}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {isEditingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-[#EBE3D5] p-6 md:p-8 lg:p-6 space-y-6 animate-in fade-in zoom-in duration-200" dir="rtl">
            <div className="flex items-center justify-between border-b pb-4 border-[#EBE3D5]">
              <h3 className="text-lg font-bold text-[#1B0F00] flex items-center gap-2">
                <Edit3 className="w-5 h-5 text-[#594432]"/>
                تعديل السجل
              </h3>
              <button
                onClick={() => setIsEditingModalOpen(false)}
                className="text-gray-400 transition hover:text-gray-600"
              >
                <X className="w-5 h-5"/>
              </button>
            </div>

            <form onSubmit={handleUpdateSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-[#594432] uppercase tracking-wider mb-2">القرن / العنوان</label>
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E3D5C1] rounded-xl text-sm focus:outline-none focus:border-[#594432] focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#594432] uppercase tracking-wider mb-2">الوصف</label>
                  <input
                    type="text"
                    value={editDescription}
                    onChange={(e) => setEditDescription(e.target.value)}
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E3D5C1] rounded-xl text-sm focus:outline-none focus:border-[#594432] focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#594432] uppercase tracking-wider mb-2">المحتوى / السيرة</label>
                <textarea
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  className="w-full h-32 px-4 py-3 bg-[#FAF8F5] border border-[#E3D5C1] rounded-xl text-sm focus:outline-none focus:border-[#594432] focus:bg-white transition-all resize-none"
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsEditingModalOpen(false)}
                  className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-sm rounded-xl transition"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  disabled={isUpdating}
                  className="px-6 py-2.5 bg-[#1B0F00] hover:bg-[#331E05] text-[#FDFBF7] font-bold text-sm rounded-xl shadow transition flex items-center gap-2 disabled:opacity-50"
                >
                  {isUpdating && <Loader2 className="w-4 h-4 animate-spin"/>}
                  {isUpdating ? "جاري التعديل..." : "حفظ التعديلات"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}