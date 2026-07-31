"use client";

import { useState } from "react";
import {
  useGetDigitalLibrary,
  useCreateDigitalLibrary,
  useDeleteDigitalLibrary,
  useUpdateDigitalLibrary,
} from "@/queries";
import { BookOpen, Plus, Trash2, Edit3, Loader2, X } from "lucide-react";
import { toast } from "sonner";

function BookIconRed({ uid }: { uid: string }) {
  const clip = `clip_${uid}_red`;
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 58 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="58" height="58" rx="8" fill="#FEF2F2" />
      <g clipPath={`url(#${clip})`}>
        <path
          d="M21.2667 29.9666H20.3V28.0333H21.2667C21.5231 28.0333 21.769 28.1351 21.9503 28.3164C22.1315 28.4977 22.2334 28.7436 22.2334 28.9999C22.2334 29.2563 22.1315 29.5022 21.9503 29.6835C21.769 29.8648 21.5231 29.9666 21.2667 29.9666ZM28.0334 33.8333V28.0333H29C29.2564 28.0333 29.5023 28.1351 29.6836 28.3164C29.8649 28.4977 29.9667 28.7436 29.9667 28.9999V32.8666C29.9667 33.123 29.8649 33.3688 29.6836 33.5501C29.5023 33.7314 29.2564 33.8333 29 33.8333H28.0334Z"
          fill="#D60000"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.4333 17.4C16.4333 16.6309 16.7389 15.8932 17.2827 15.3494C17.8266 14.8055 18.5642 14.5 19.3333 14.5H35.2002L41.5667 20.8665V40.6C41.5667 41.3691 41.2612 42.1068 40.7173 42.6506C40.1734 43.1945 39.4358 43.5 38.6667 43.5H19.3333C18.5642 43.5 17.8266 43.1945 17.2827 42.6506C16.7389 42.1068 16.4333 41.3691 16.4333 40.6V17.4ZM21.2667 26.1H18.3667V35.7667H20.3V31.9H21.2667C22.0358 31.9 22.7734 31.5945 23.3173 31.0506C23.8611 30.5068 24.1667 29.7691 24.1667 29C24.1667 28.2309 23.8611 27.4932 23.3173 26.9494C22.7734 26.4055 22.0358 26.1 21.2667 26.1ZM29 26.1H26.1V35.7667H29C29.7691 35.7667 30.5068 35.4611 31.0506 34.9173C31.5945 34.3734 31.9 33.6358 31.9 32.8667V29C31.9 28.2309 31.5945 27.4932 31.0506 26.9494C30.5068 26.4055 29.7691 26.1 29 26.1ZM33.8334 35.7667V26.1H39.6334V28.0333H35.7667V29.9667H37.7V31.9H35.7667V35.7667H33.8334Z"
          fill="#D60000"
        />
      </g>
      <defs>
        <clipPath id={clip}>
          <rect
            width="29"
            height="29"
            fill="white"
            transform="translate(14.5 14.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

function BookIconWord({ uid }: { uid: string }) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 58 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="58" height="58" rx="8" fill="#F2F5FE" />
      <path
        d="M41.806 16.4063H22.705C22.5484 16.4059 22.3932 16.4354 22.2484 16.4933C22.1036 16.5511 21.972 16.636 21.8612 16.7432C21.7504 16.8504 21.6625 16.9777 21.6025 17.1179C21.5426 17.2581 21.5118 17.4083 21.512 17.56V22.7031L32.581 25.8516L43 22.7031V17.56C43.0001 17.4082 42.9693 17.2579 42.9093 17.1177C42.8493 16.9775 42.7613 16.8501 42.6504 16.7429C42.5394 16.6357 42.4077 16.5508 42.2628 16.493C42.1179 16.4352 41.9627 16.4057 41.806 16.4063Z"
        fill="#41A5EE"
      />
      <path
        d="M43 22.7031H21.512V29L32.581 30.8891L43 29V22.7031Z"
        fill="#2B7CD3"
      />
      <path
        d="M21.512 29V35.2969L31.93 36.5562L43 35.2969V29H21.512Z"
        fill="#185ABD"
      />
      <path
        d="M22.705 41.5938H41.805C41.9617 41.5944 42.1171 41.565 42.2621 41.5073C42.4071 41.4496 42.539 41.3647 42.65 41.2575C42.7611 41.1503 42.8491 41.0228 42.9092 40.8825C42.9692 40.7423 43.0001 40.5918 43 40.44V35.2969H21.512V40.44C21.5118 40.5917 21.5426 40.7419 21.6025 40.8821C21.6625 41.0223 21.7504 41.1496 21.8612 41.2568C21.972 41.364 22.1036 41.4489 22.2484 41.5067C22.3932 41.5646 22.5484 41.5941 22.705 41.5938Z"
        fill="#103F91"
      />
    </svg>
  );
}

function BookIconGold({ uid }: { uid: string }) {
  const clip = `clip_${uid}_gold`;
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 58 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="58" height="58" rx="8" fill="#FEFAF2" />
      <g clipPath={`url(#${clip})`}>
        <path
          d="M40.8525 22.9217H35.6860C34.8799 22.9217 34.1069 22.6015 33.537 22.0316C32.967 21.4616 32.6468 20.6886 32.6468 19.8826V14.716C32.6468 14.6354 32.6148 14.5581 32.5578 14.5011C32.5008 14.4441 32.4235 14.4121 32.3429 14.4121H19.2746C18.6298 14.4121 18.0113 14.6683 17.5554 15.1242C17.0994 15.5802 16.8433 16.1986 16.8433 16.8434V41.1566C16.8433 41.8014 17.0994 42.4198 17.5554 42.8758C18.0113 43.3317 18.6298 43.5879 19.2746 43.5879H38.7251C39.3699 43.5879 39.9883 43.3317 40.4443 42.8758C40.9003 42.4198 41.1564 41.8014 41.1564 41.1566V23.2256C41.1564 23.145 41.1244 23.0677 41.0674 23.0107C41.0104 22.9537 40.9331 22.9217 40.8525 22.9217Z"
          fill="#EF9000"
          fillOpacity="0.937255"
        />
      </g>
      <defs>
        <clipPath id={clip}>
          <rect
            width="29.1758"
            height="29.1758"
            fill="white"
            transform="translate(14.4121 14.4121)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

function getFileIcon(filePath: string = "", uid: string) {
  const path = filePath.toLowerCase();
  if (path.endsWith(".pdf") || path.includes(".pdf?")) {
    return <BookIconRed uid={uid} />;
  }
  if (
    path.endsWith(".doc") ||
    path.endsWith(".docx") ||
    path.includes(".doc")
  ) {
    return <BookIconWord uid={uid} />;
  }
  return <BookIconGold uid={uid} />;
}

export default function AdminDigitalLibraryPage() {
  const { data: libraries = [], isLoading } = useGetDigitalLibrary();
  const { mutate: createLibrary, isPending: isCreating } =
    useCreateDigitalLibrary();
  const { mutate: deleteLibrary, isPending: isDeleting } =
    useDeleteDigitalLibrary();
  const { mutate: updateLibrary, isPending: isUpdating } =
    useUpdateDigitalLibrary();

  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("PDF");
  const [size, setSize] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const [deletingId, setDeletingId] = useState<number | null>(null);

  const [isEditingModalOpen, setIsEditingModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editTag, setEditTag] = useState("PDF");
  const [editSize, setEditSize] = useState("");
  const [editFile, setEditFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const fileSizeInMB = (selectedFile.size / (1024 * 1024)).toFixed(2);
      setSize(`${fileSizeInMB} MB`);
      const extension =
        selectedFile.name.split(".").pop()?.toUpperCase() || "PDF";
      if (["PDF", "DOCX", "DOC", "ZIP"].includes(extension)) {
        setTag(extension);
      } else {
        setTag("PDF");
      }
    }
  };

  const handleEditFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setEditFile(selectedFile);
      const fileSizeInMB = (selectedFile.size / (1024 * 1024)).toFixed(2);
      setEditSize(`${fileSizeInMB} MB`);
      const extension =
        selectedFile.name.split(".").pop()?.toUpperCase() || "PDF";
      if (["PDF", "DOCX", "DOC", "ZIP"].includes(extension)) {
        setEditTag(extension);
      } else {
        setEditTag("PDF");
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !tag || !size || !file) {
      toast.error("الرجاء ملء جميع الحقول المطلوبة وإرفاق الملف");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("tag", tag);
    formData.append("size", size);
    formData.append("file", file);
    formData.append("date", new Date().toISOString().split("T")[0]);

    createLibrary(formData, {
      onSuccess: () => {
        setTitle("");
        setTag("PDF");
        setSize("");
        setFile(null);
        // Reset file input element visually
        const fileInput = document.querySelector(
          'input[type="file"]',
        ) as HTMLInputElement;
        if (fileInput) fileInput.value = "";
      },
    });
  };

  const handleOpenEdit = (item: any) => {
    setEditingId(item.id);
    setEditTitle(item.title || "");
    setEditTag(item.tag || "PDF");
    setEditSize(item.size || "");
    setEditFile(null);
    setIsEditingModalOpen(true);
  };

  const handleUpdateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingId || !editTitle || !editTag || !editSize) {
      toast.error("الرجاء ملء جميع الحقول المطلوبة للتعديل");
      return;
    }

    const formData = new FormData();
    formData.append("title", editTitle);
    formData.append("tag", editTag);
    formData.append("size", editSize);
    formData.append("date", new Date().toISOString().split("T")[0]);
    if (editFile) {
      formData.append("file", editFile);
    }

    updateLibrary(
      { id: editingId, data: formData },
      {
        onSuccess: () => {
          setIsEditingModalOpen(false);
          setEditingId(null);
        },
      },
    );
  };

  const handleDeleteClick = (id: number) => {
    toast.custom(
      (t) => (
        <div
          className="flex flex-col gap-3 p-4 bg-white rounded-2xl shadow-xl border border-[#EBE3D5] max-w-sm w-full"
          dir="rtl"
        >
          <p className="font-bold text-sm text-[#1B0F00]">
            هل أنت متأكد من رغبتك في حذف هذا الملف من المكتبة الرقمية؟
          </p>
          <div className="flex justify-end gap-2">
            <button
              onClick={() => {
                toast.dismiss(t);
                setDeletingId(id);
                deleteLibrary(id, {
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
      ),
      {
        duration: Infinity,
      },
    );
  };

  return (
    <div
      className="space-y-8 bg-white p-4 sm:p-6 md:p-8 lg:p-6 shadow-sm border border-[#EBE3D5]"
      dir="rtl"
    >
      <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-[#EBE3D5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[#1B0F00]">
        <div>
          <h1 className="text-xl font-bold tracking-wide sm:text-2xl">
            إدارة المكتبة الرقمية
          </h1>
          <p className="text-xs sm:text-sm text-[#735A42] mt-1">
            إضافة، تعديل، وحذف الملفات والمراجع الرقمية
          </p>
        </div>
        <div className="w-12 h-12 bg-[#FAF8F5] border border-[#EBE3D5] rounded-xl flex items-center justify-center text-[#1B0F00] shadow-sm shrink-0">
          <BookOpen className="w-6 h-6" />
        </div>
      </div>

      <div className="p-0 bg-white border-none shadow-none rounded-2xl">
        <h2 className="text-base sm:text-lg font-bold text-[#1B0F00] mb-6 flex items-center gap-2">
          <Plus className="w-5 h-5 text-[#594432]" />
          إضافة ملف جديد للمكتبة الرقمية
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-semibold text-[#594432] uppercase tracking-wider mb-2">
                عنوان الملف
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="مثال: دليل استخدام النظام"
                className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E3D5C1] rounded-xl text-sm focus:outline-none focus:border-[#594432] focus:bg-white transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#594432] uppercase tracking-wider mb-2">
                ملف المستند (PDF / Word / ZIP)
              </label>
              <input
                type="file"
                onChange={handleFileChange}
                className="w-full px-3 py-2.5 bg-[#FAF8F5] border border-[#E3D5C1] rounded-xl text-sm file:mr-4 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-[#594432] file:text-white hover:file:bg-[#331E05] cursor-pointer"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isCreating}
            className="px-6 py-3 bg-[#1B0F00] hover:bg-[#331E05] text-[#FDFBF7] font-bold text-sm rounded-xl shadow transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            {isCreating && <Loader2 className="w-4 h-4 animate-spin" />}
            {isCreating ? "جاري الحفظ..." : "حفظ وإضافة الملف"}
          </button>
        </form>
      </div>

      <div className="bg-white p-4 sm:p-6 md:p-8 lg:p-6 rounded-2xl shadow-sm border border-[#EBE3D5]">
        <h2 className="text-base sm:text-lg font-bold text-[#1B0F00] mb-6">
          الملفات المسجلة في المكتبة الرقمية
        </h2>

        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-[#594432]" />
          </div>
        ) : libraries.length === 0 ? (
          <div className="py-12 text-center text-[#A3907C]">
            لا توجد ملفات مسجلة في المكتبة الرقمية حالياً.
          </div>
        ) : (
          <div className="divide-y divide-[#EBE3D5]">
            {libraries.map((item: any, index: number) => {
              const uid = `admin-book-${index}`;
              return (
                <div
                  key={item.id}
                  className="flex flex-col items-start justify-between gap-4 py-5 lg:flex-row lg:items-center"
                >
                  <div className="flex flex-col items-start flex-1 w-full gap-4 sm:flex-row sm:items-center">
                    <div className="flex items-center justify-center w-16 h-16 rounded-xl overflow-hidden bg-[#FAF8F5] border border-[#EBE3D5] shrink-0">
                      {getFileIcon(item.file_path, uid)}
                    </div>
                    <div className="space-y-1.5 flex-1">
                      <div className="flex flex-wrap items-center justify-start gap-3">
                        <p className="text-base font-bold text-[#1B0F00] sm:text-lg line-clamp-1">
                          {item.title}
                        </p>
                        <span className="text-[11px] sm:text-[12px] text-gray-400 whitespace-nowrap flex-shrink-0">
                          {item.tag} — {item.size}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center self-end justify-end w-full gap-2 pt-2 lg:self-center sm:w-auto lg:pt-0">
                    <button
                      onClick={() => handleOpenEdit(item)}
                      className="px-4 py-2 bg-[#F5EFE6] hover:bg-[#EBE3D5] text-[#594432] rounded-xl text-xs sm:text-sm font-semibold transition flex items-center gap-1.5"
                    >
                      <Edit3 className="w-4 h-4" />
                      <span>تعديل</span>
                    </button>
                    <button
                      onClick={() => handleDeleteClick(item.id)}
                      disabled={isDeleting && deletingId === item.id}
                      className="px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-xl text-xs sm:text-sm font-semibold transition flex items-center gap-1.5 disabled:opacity-50"
                    >
                      {isDeleting && deletingId === item.id ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Trash2 className="w-4 h-4" />
                      )}
                      <span>
                        {isDeleting && deletingId === item.id
                          ? "جاري الحذف..."
                          : "حذف"}
                      </span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {isEditingModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-black/50 backdrop-blur-sm"
          dir="rtl"
        >
          <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-[#EBE3D5] p-5 sm:p-6 md:p-8 space-y-6 animate-in fade-in zoom-in duration-200 my-auto max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b pb-4 border-[#EBE3D5]">
              <h3 className="text-base sm:text-lg font-bold text-[#1B0F00] flex items-center gap-2">
                <Edit3 className="w-5 h-5 text-[#594432]" />
                تعديل ملف المكتبة الرقمية
              </h3>
              <button
                onClick={() => setIsEditingModalOpen(false)}
                className="text-gray-400 transition hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleUpdateSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#594432] uppercase tracking-wider mb-2">
                  عنوان الملف
                </label>
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E3D5C1] rounded-xl text-sm focus:outline-none focus:border-[#594432] focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#594432] uppercase tracking-wider mb-2">
                  تحديث ملف المستند (اختياري)
                </label>
                <input
                  type="file"
                  onChange={handleEditFileChange}
                  className="w-full px-3 py-2 bg-[#FAF8F5] border border-[#E3D5C1] rounded-xl text-sm file:mr-4 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-[#594432] file:text-white hover:file:bg-[#331E05] cursor-pointer"
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
                  {isUpdating && <Loader2 className="w-4 h-4 animate-spin" />}
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
