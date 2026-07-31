"use client";

import { useState } from "react";
import { useGetCharities, useCreateCharity, useDeleteCharity, useUpdateCharity } from "@/queries";
import { HeartHandshake, Plus, Trash2, Edit3, Loader2, X, Image as ImageIcon } from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";

export default function AdminCharityInitiativesPage() {
  const { data: charities = [], isLoading } = useGetCharities();
  const { mutate: createCharity, isPending: isCreating } = useCreateCharity();
  const { mutate: deleteCharity, isPending: isDeleting } = useDeleteCharity();
  const { mutate: updateCharity, isPending: isUpdating } = useUpdateCharity();

  // Form States (Create)
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [target, setTarget] = useState("");
  const [remaining, setRemaining] = useState("");
  const [progress, setProgress] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  
  const [deletingId, setDeletingId] = useState<number | null>(null);

  // Modal States (Edit)
  const [isEditingModalOpen, setIsEditingModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editTarget, setEditTarget] = useState("");
  const [editRemaining, setEditRemaining] = useState("");
  const [editProgress, setEditProgress] = useState("");
  const [editImageFile, setEditImageFile] = useState<File | null>(null);
  const [editImagePreview, setEditImagePreview] = useState<string | null>(null);

  // Handle Image Selection for Create (Max 2MB)
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        toast.error("حجم الصورة يجب ألا يتجاوز 2 ميجابايت (2048 كيلوبايت)");
        e.target.value = "";
        return;
      }
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  // Handle Image Selection for Edit (Max 2MB)
  const handleEditImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        toast.error("حجم الصورة يجب ألا يتجاوز 2 ميجابايت (2048 كيلوبايت)");
        e.target.value = "";
        return;
      }
      setEditImageFile(file);
      setEditImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description || !target || !remaining || progress === "" || !imageFile) {
      toast.error("الرجاء ملء جميع الحقول المطلوبة وإرفاق الصورة");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("target", target);
    formData.append("remaining", remaining);
    formData.append("progress", progress);
    formData.append("image", imageFile);

    createCharity(formData, {
      onSuccess: () => {
        setTitle("");
        setDescription("");
        setTarget("");
        setRemaining("");
        setProgress("");
        setImageFile(null);
        setImagePreview(null);
      },
    });
  };

  const handleOpenEdit = (item: any) => {
    setEditingId(item.id);
    setEditTitle(item.title);
    setEditDescription(item.description);
    setEditTarget(item.target || "");
    setEditRemaining(item.remaining || "");
    setEditProgress(item.progress?.toString() || "0");
    setEditImageFile(null);
    setEditImagePreview(item.image || null);
    setIsEditingModalOpen(true);
  };

  const handleUpdateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingId || !editTitle || !editDescription || !editTarget || !editRemaining || editProgress === "") {
      toast.error("الرجاء ملء جميع الحقول المطلوبة للتعديل");
      return;
    }

    const formData = new FormData();
    formData.append("title", editTitle);
    formData.append("description", editDescription);
    formData.append("target", editTarget);
    formData.append("remaining", editRemaining);
    formData.append("progress", editProgress);
    if (editImageFile) {
      formData.append("image", editImageFile);
    }
    // تم حذف سطر formData.append("_method", "PUT") من هنا نهائياً

    updateCharity(
      { id: editingId, data: formData },
      {
        onSuccess: () => {
          setIsEditingModalOpen(false);
          setEditingId(null);
        },
      }
    );
  };
  
  const handleDeleteClick = (id: number) => {
    toast.custom((t) => (
      <div className="flex flex-col gap-3 p-4 bg-white rounded-2xl shadow-xl border border-[#EBE3D5] max-w-sm w-full" dir="rtl">
        <p className="font-bold text-sm text-[#1B0F00]">هل أنت متأكد من رغبتك في حذف هذه المبادرة؟</p>
        <div className="flex justify-end gap-2">
          <button
            onClick={() => {
              toast.dismiss(t);
              setDeletingId(id);
              deleteCharity(id, {
                onSuccess: () => setDeletingId(null),
                onError: () => setDeletingId(null),
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
    <div className="space-y-8 bg-white p-4 sm:p-6 md:p-8 lg:p-6 shadow-sm border border-[#EBE3D5]" dir="rtl">
      {/* Header */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-[#EBE3D5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[#1B0F00]">
        <div>
          <h1 className="text-xl font-bold tracking-wide sm:text-2xl">إدارة المبادرات والأعمال الخيرية</h1>
          <p className="text-xs sm:text-sm text-[#735A42] mt-1">إضافة، تعديل، وحذف المشاريع والمبادرات الخيرية</p>
        </div>
        <div className="w-12 h-12 bg-[#FAF8F5] border border-[#EBE3D5] rounded-xl flex items-center justify-center text-[#1B0F00] shadow-sm shrink-0">
          <HeartHandshake className="w-6 h-6"/>
        </div>
      </div>

      {/* Add Form */}
      <div className="p-0 bg-white border-none shadow-none rounded-2xl">
        <h2 className="text-base sm:text-lg font-bold text-[#1B0F00] mb-6 flex items-center gap-2">
          <Plus className="w-5 h-5 text-[#594432]"/>
          إضافة مبادرة خيرية جديدة
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-semibold text-[#594432] uppercase tracking-wider mb-2">عنوان المبادرة</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="مثال: سقيا الماء للقرى المحتاجة"
                className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E3D5C1] rounded-xl text-sm focus:outline-none focus:border-[#594432] focus:bg-white transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#594432] uppercase tracking-wider mb-2">صورة المبادرة (أقصى حجم 2MB)</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full px-3 py-2.5 bg-[#FAF8F5] border border-[#E3D5C1] rounded-xl text-sm file:mr-4 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-[#594432] file:text-white hover:file:bg-[#331E05] cursor-pointer"
              />
            </div>
          </div>

          {imagePreview && (
            <div className="relative w-32 h-32 rounded-xl overflow-hidden border border-[#E3D5C1] bg-[#FAF8F5]">
              <Image src={imagePreview} alt="Preview" fill className="object-cover" />
            </div>
          )}

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            <div>
              <label className="block text-xs font-semibold text-[#594432] uppercase tracking-wider mb-2">المستهدف</label>
              <input
                type="text"
                value={target}
                onChange={(e) => setTarget(e.target.value)}
                placeholder="مثال: 50,000 ر.س"
                className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E3D5C1] rounded-xl text-sm focus:outline-none focus:border-[#594432] focus:bg-white transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#594432] uppercase tracking-wider mb-2">المتبقي</label>
              <input
                type="text"
                value={remaining}
                onChange={(e) => setRemaining(e.target.value)}
                placeholder="مثال: 10,000 ر.س"
                className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E3D5C1] rounded-xl text-sm focus:outline-none focus:border-[#594432] focus:bg-white transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#594432] uppercase tracking-wider mb-2">نسبة الإنجاز (%)</label>
              <input
                type="number"
                min="0"
                max="100"
                value={progress}
                onChange={(e) => setProgress(e.target.value)}
                placeholder="مثال: 80"
                className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E3D5C1] rounded-xl text-sm focus:outline-none focus:border-[#594432] focus:bg-white transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#594432] uppercase tracking-wider mb-2">وصف المبادرة</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="اكتب وصفاً تفصيلياً للمبادرة الخيرية هنا..."
              className="w-full h-28 px-4 py-3 bg-[#FAF8F5] border border-[#E3D5C1] rounded-xl text-sm focus:outline-none focus:border-[#594432] focus:bg-white transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isCreating}
            className="px-6 py-3 bg-[#1B0F00] hover:bg-[#331E05] text-[#FDFBF7] font-bold text-sm rounded-xl shadow transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            {isCreating && <Loader2 className="w-4 h-4 animate-spin"/>}
            {isCreating ? "جاري الحفظ..." : "حفظ وإضافة المبادرة"}
          </button>
        </form>
      </div>

      {/* List Section */}
      <div className="bg-white p-4 sm:p-6 md:p-8 lg:p-6 rounded-2xl shadow-sm border border-[#EBE3D5]">
        <h2 className="text-base sm:text-lg font-bold text-[#1B0F00] mb-6">المبادرات المسجلة مسبقاً</h2>
        
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-[#594432]"/>
          </div>
        ) : charities.length === 0 ? (
          <div className="py-12 text-center text-[#A3907C]">لا توجد مبادرات خيرية مسجلة حالياً.</div>
        ) : (
          <div className="divide-y divide-[#EBE3D5]">
            {charities.map((item: any) => (
              <div key={item.id} className="flex flex-col items-start justify-between gap-4 py-5 lg:flex-row lg:items-center">
                <div className="flex flex-col items-start flex-1 w-full gap-4 sm:flex-row sm:items-center">
                  <div className="relative w-full sm:w-24 h-32 sm:h-24 rounded-xl overflow-hidden bg-[#FAF8F5] border border-[#EBE3D5] shrink-0">
                    <Image
                      src={item.image || "https://placehold.co/600x400?text=No+Image"}
                      alt={item.title || "Charity"}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://placehold.co/600x400?text=No+Image";
                      }}
                    />
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <span className="inline-block px-3 py-1 text-xs font-bold rounded-full text-[#594432] bg-[#F5EFE6] border border-[#E3D5C1]">
                      {item.title}
                    </span>
                    <h3 className="font-bold text-[#1B0F00] text-sm sm:text-base leading-relaxed">{item.description}</h3>
                    <div className="flex flex-wrap gap-3 text-xs text-[#735A42] pt-1">
                      <span>المستهدف: <strong className="text-[#1B0F00]">{item.target}</strong></span>
                      <span>المتبقي: <strong className="text-[#1B0F00]">{item.remaining}</strong></span>
                      <span>الإنجاز: <strong className="text-[#1B0F00]">{item.progress}%</strong></span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center self-end justify-end w-full gap-2 pt-2 lg:self-center sm:w-auto lg:pt-0">
                  <button
                    onClick={() => handleOpenEdit(item)}
                    className="px-4 py-2 bg-[#F5EFE6] hover:bg-[#EBE3D5] text-[#594432] rounded-xl text-xs sm:text-sm font-semibold transition flex items-center gap-1.5"
                  >
                    <Edit3 className="w-4 h-4"/>
                    <span>تعديل</span>
                  </button>
                  <button
                    onClick={() => handleDeleteClick(item.id)}
                    disabled={isDeleting && deletingId === item.id}
                    className="px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-xl text-xs sm:text-sm font-semibold transition flex items-center gap-1.5 disabled:opacity-50"
                  >
                    {isDeleting && deletingId === item.id ? (
                      <Loader2 className="w-4 h-4 animate-spin"/>
                    ) : (
                      <Trash2 className="w-4 h-4"/>
                    )}
                    <span>{isDeleting && deletingId === item.id ? "جاري الحذف..." : "حذف"}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Edit Modal */}
      {isEditingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-black/50 backdrop-blur-sm" dir="rtl">
          <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-[#EBE3D5] p-5 sm:p-6 md:p-8 space-y-6 animate-in fade-in zoom-in duration-200 my-auto max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b pb-4 border-[#EBE3D5]">
              <h3 className="text-base sm:text-lg font-bold text-[#1B0F00] flex items-center gap-2">
                <Edit3 className="w-5 h-5 text-[#594432]"/>
                تعديل المبادرة الخيرية
              </h3>
              <button
                onClick={() => setIsEditingModalOpen(false)}
                className="text-gray-400 transition hover:text-gray-600"
              >
                <X className="w-5 h-5"/>
              </button>
            </div>

            <form onSubmit={handleUpdateSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-[#594432] uppercase tracking-wider mb-2">عنوان المبادرة</label>
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E3D5C1] rounded-xl text-sm focus:outline-none focus:border-[#594432] focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#594432] uppercase tracking-wider mb-2">تحديث الصورة (أقصى 2MB)</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleEditImageChange}
                    className="w-full px-3 py-2 bg-[#FAF8F5] border border-[#E3D5C1] rounded-xl text-sm file:mr-4 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-[#594432] file:text-white hover:file:bg-[#331E05] cursor-pointer"
                  />
                </div>
              </div>

              {editImagePreview && (
                <div className="relative w-28 h-28 rounded-xl overflow-hidden border border-[#E3D5C1] bg-[#FAF8F5]">
                  <Image src={editImagePreview} alt="Edit Preview" fill className="object-cover" />
                </div>
              )}

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div>
                  <label className="block text-xs font-semibold text-[#594432] uppercase tracking-wider mb-2">المستهدف</label>
                  <input
                    type="text"
                    value={editTarget}
                    onChange={(e) => setEditTarget(e.target.value)}
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E3D5C1] rounded-xl text-sm focus:outline-none focus:border-[#594432] focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#594432] uppercase tracking-wider mb-2">المتبقي</label>
                  <input
                    type="text"
                    value={editRemaining}
                    onChange={(e) => setEditRemaining(e.target.value)}
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E3D5C1] rounded-xl text-sm focus:outline-none focus:border-[#594432] focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#594432] uppercase tracking-wider mb-2">نسبة الإنجاز</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={editProgress}
                    onChange={(e) => setEditProgress(e.target.value)}
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E3D5C1] rounded-xl text-sm focus:outline-none focus:border-[#594432] focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#594432] uppercase tracking-wider mb-2">وصف المبادرة</label>
                <textarea
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                  className="w-full h-28 px-4 py-3 bg-[#FAF8F5] border border-[#E3D5C1] rounded-xl text-sm focus:outline-none focus:border-[#594432] focus:bg-white transition-all resize-none"
                />
              </div>

              <div className="flex flex-col justify-end gap-3 pt-2 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setIsEditingModalOpen(false)}
                  className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-sm rounded-xl transition w-full sm:w-auto"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  disabled={isUpdating}
                  className="px-6 py-2.5 bg-[#1B0F00] hover:bg-[#331E05] text-[#FDFBF7] font-bold text-sm rounded-xl shadow transition flex items-center justify-center gap-2 disabled:opacity-50 w-full sm:w-auto"
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