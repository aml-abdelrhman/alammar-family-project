"use client";

import { useState } from "react";
import {
  useGetScholars,
  useCreateScholar,
  useUpdateScholar,
  useDeleteScholar,
  Scholar,
} from "@/queries";
import { Plus, Pencil, Trash2, Loader2, X } from "lucide-react";
import toast from "react-hot-toast";

export default function ScholarsAdminPage() {
  const { data: scholars = [], isLoading } = useGetScholars();
  const createScholar = useCreateScholar();
  const updateScholar = useUpdateScholar();
  const deleteScholar = useDeleteScholar();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingScholar, setEditingScholar] = useState<Scholar | null>(null);

  const [name, setName] = useState("");
  const [role, setRole] = useState("طالب علم");
  const [desc, setDesc] = useState("");
  const [tag1, setTag1] = useState("");
  const [tag2, setTag2] = useState("");

  const handleOpenAdd = () => {
    setEditingScholar(null);
    setName("");
    setRole("طالب علم");
    setDesc("");
    setTag1("");
    setTag2("");
    setIsModalOpen(true);
  };

  const handleOpenEdit = (scholar: Scholar) => {
    setEditingScholar(scholar);
    setName(scholar.name);
    setRole(scholar.role);
    setDesc(scholar.desc);

    const parsedTags = Array.isArray(scholar.tags)
      ? scholar.tags
      : typeof scholar.tags === "string"
        ? (scholar.tags as string)
            .split(",")
            .map((t) => t.trim())
            .filter(Boolean)
        : [];

    setTag1(parsedTags[0] || "");
    setTag2(parsedTags[1] || "");
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const tagsArray = [tag1.trim(), tag2.trim()].filter(Boolean);

    const payload: Scholar = {
      name,
      role,
      desc,
      tags: tagsArray,
    };

    if (editingScholar && editingScholar.id) {
      updateScholar.mutate(
        { id: editingScholar.id, data: payload },
        {
          onSuccess: () => {
            setIsModalOpen(false);
          },
        },
      );
    } else {
      createScholar.mutate(payload, {
        onSuccess: () => {
          setIsModalOpen(false);
        },
      });
    }
  };

  const handleDelete = (id?: number) => {
    if (!id) return;
    if (confirm("هل أنت متأكد من حذف هذا السجل؟")) {
      deleteScholar.mutate(id);
    }
  };

  return (
    <div className="bg-[#FAF8F5] p-3 sm:p-6 lg:p-10 pb-6">
      {" "}
      <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-[#EBE3D5]">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-[#1B0F00]">
              إدارة المشائخ وطلبة العلم
            </h1>
            <p className="text-xs sm:text-sm text-[#735A42] mt-1">
              إضافة، تعديل، وحذف توثيق مسيرة أبناء العائلة من طلبة العلم.
            </p>
          </div>
          <button
            onClick={handleOpenAdd}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#1B0F00] hover:bg-[#331E05] text-[#FDFBF7] px-5 py-2.5 rounded-xl font-medium text-sm transition-all shadow-sm"
          >
            <Plus className="w-4 h-4" />
            إضافة طالب علم جديد
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-[#EBE3D5] overflow-hidden">
          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-[#723F00]" />
            </div>
          ) : scholars.length === 0 ? (
            <div className="py-16 text-sm text-center text-gray-500">
              لا توجد سجلات مضافة حتى الآن.
            </div>
          ) : (
            <>
              {/* Desktop Table View */}
              <div className="hidden overflow-x-auto lg:block">
                <table className="w-full text-right border-collapse">
                  <thead>
                    <tr className="bg-[#FAF8F5] border-b border-[#EBE3D5] text-xs font-semibold text-[#594432] uppercase">
                      <th className="px-6 py-4">#</th>
                      <th className="px-6 py-4">الاسم الكريم</th>
                      <th className="px-6 py-4">المسمى / الرتبة</th>
                      <th className="px-6 py-4">التخصصات (Tags)</th>
                      <th className="px-6 py-4 text-center">الإجراءات</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EBE3D5] text-sm text-[#1B0F00]">
                    {scholars.map((item, index) => (
                      <tr
                        key={item.id || index}
                        className="hover:bg-[#FAF8F5]/50 transition-colors"
                      >
                        <td className="px-6 py-4 font-medium text-gray-500">
                          {index + 1}
                        </td>
                        <td className="px-6 py-4 font-bold">{item.name}</td>
                        <td className="py-4 px-6 text-[#733F00]">
                          {item.role}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-wrap gap-1.5">
                            {Array.isArray(item.tags)
                              ? item.tags.map((tag, i) => (
                                  <span
                                    key={i}
                                    className="inline-flex items-center px-3 py-1 text-xs bg-[#FAF8F5] border border-[#E3D5C1] rounded-xl text-gray-700 font-medium"
                                  >
                                    {tag}
                                  </span>
                                ))
                              : typeof item.tags === "string"
                                ? (item.tags as string)
                                    .split(",")
                                    .map((tag, i) => (
                                      <span
                                        key={i}
                                        className="inline-flex items-center px-3 py-1 text-xs bg-[#FAF8F5] border border-[#E3D5C1] rounded-xl text-gray-700 font-medium"
                                      >
                                        {tag.trim()}
                                      </span>
                                    ))
                                : null}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <button
                              onClick={() => handleOpenEdit(item)}
                              className="p-2 text-blue-600 transition-colors rounded-lg bg-blue-50 hover:bg-blue-100"
                              title="تعديل"
                            >
                              <Pencil className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDelete(item.id)}
                              className="p-2 text-red-600 transition-colors rounded-lg bg-red-50 hover:bg-red-100"
                              title="حذف"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Tablet Card View (كل طالب في كارد منفصل بمسافات مريحة ومتناسقة) */}
              <div className="hidden md:flex lg:hidden flex-col gap-4 p-6 bg-[#FAF8F5]/40">
                {scholars.map((item, index) => (
                  <div
                    key={item.id || index}
                    className="bg-white border border-[#EBE3D5] rounded-2xl p-6 shadow-sm flex flex-col gap-5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1.5 flex-1">
                        <span className="inline-block text-xs font-bold text-[#735A42] bg-[#FAF8F5] border border-[#E3D5C1] px-2.5 py-1 rounded-lg">
                          #{index + 1}
                        </span>
                        <h3 className="font-bold text-lg text-[#1B0F00]">
                          {item.name}
                        </h3>
                        <p className="text-xs font-semibold text-[#733F00]">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    {item.desc && (
                      <p className="text-sm leading-relaxed text-gray-600">
                        {item.desc}
                      </p>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {Array.isArray(item.tags)
                        ? item.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center px-3 py-1 text-xs bg-[#FAF8F5] border border-[#E3D5C1] rounded-xl text-gray-700 font-medium"
                            >
                              {tag}
                            </span>
                          ))
                        : typeof item.tags === "string"
                          ? (item.tags as string).split(",").map((tag, i) => (
                              <span
                                key={i}
                                className="inline-flex items-center px-3 py-1 text-xs bg-[#FAF8F5] border border-[#E3D5C1] rounded-xl text-gray-700 font-medium"
                              >
                                {tag.trim()}
                              </span>
                            ))
                          : null}
                    </div>

                    {/* الأزرار تحت الكتابة وفي سطر لوحدهم بمسافات مرتبة */}
                    <div className="pt-4 border-t border-[#EBE3D5] flex items-center gap-3">
                      <button
                        onClick={() => handleOpenEdit(item)}
                        className="flex-1 py-2.5 text-blue-600 bg-blue-50 hover:bg-blue-100 font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-2"
                      >
                        <Pencil className="w-4 h-4" />
                        <span>تعديل</span>
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="flex-1 py-2.5 text-red-600 bg-red-50 hover:bg-red-100 font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-2"
                      >
                        <Trash2 className="w-4 h-4" />
                        <span>حذف</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Card View */}
              <div className="grid grid-cols-1 gap-4 p-4 md:hidden">
                {scholars.map((item, index) => (
                  <div
                    key={item.id || index}
                    className="bg-[#FAF8F5] border border-[#EBE3D5] rounded-2xl p-4 space-y-3"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-xs font-medium text-gray-400">
                          #{index + 1}
                        </span>
                        <h3 className="font-bold text-base text-[#1B0F00]">
                          {item.name}
                        </h3>
                        <p className="text-xs font-medium text-[#733F00] mt-0.5">
                          {item.role}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          onClick={() => handleOpenEdit(item)}
                          className="p-2 text-blue-600 transition-colors rounded-lg bg-blue-50 hover:bg-blue-100"
                          title="تعديل"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="p-2 text-red-600 transition-colors rounded-lg bg-red-50 hover:bg-red-100"
                          title="حذف"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    {item.desc && (
                      <p className="text-xs text-gray-600 line-clamp-2">
                        {item.desc}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#EBE3D5]">
                      {Array.isArray(item.tags)
                        ? item.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center px-2.5 py-0.5 text-[11px] bg-white border border-[#E3D5C1] rounded-lg text-gray-700 font-medium"
                            >
                              {tag}
                            </span>
                          ))
                        : typeof item.tags === "string"
                          ? (item.tags as string).split(",").map((tag, i) => (
                              <span
                                key={i}
                                className="inline-flex items-center px-2.5 py-0.5 text-[11px] bg-white border border-[#E3D5C1] rounded-lg text-gray-700 font-medium"
                              >
                                {tag.trim()}
                              </span>
                            ))
                          : null}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto sm:p-6 bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-lg p-5 sm:p-6 my-auto space-y-4 sm:space-y-6 duration-200 bg-white shadow-xl rounded-3xl animate-in fade-in zoom-in max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b pb-4 border-[#EBE3D5]">
              <h3 className="text-base sm:text-lg font-bold text-[#1B0F00]">
                {editingScholar
                  ? "تعديل بيانات طالب العلم"
                  : "إضافة طالب علم جديد"}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 text-gray-400 transition-colors rounded-lg hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#594432] mb-1">
                  الاسم الكريم
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="مثال: الشيخ د. عبد الله العمار"
                  className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E3D5C1] rounded-xl text-sm focus:outline-none focus:border-[#594432]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#594432] mb-1">
                  المسمى / الدور
                </label>
                <input
                  type="text"
                  required
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder="طالب علم"
                  className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E3D5C1] rounded-xl text-sm focus:outline-none focus:border-[#594432]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#594432] mb-1">
                  نبذة عن المسيرة العلمية
                </label>
                <textarea
                  required
                  rows={3}
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  placeholder="اكتب نبذة مختصرة..."
                  className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E3D5C1] rounded-xl text-sm focus:outline-none focus:border-[#594432]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#594432] mb-1">
                  التخصصات
                </label>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <input
                    type="text"
                    value={tag1}
                    onChange={(e) => setTag1(e.target.value)}
                    placeholder="التخصص الأول"
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E3D5C1] rounded-xl text-sm focus:outline-none focus:border-[#594432]"
                  />
                  <input
                    type="text"
                    value={tag2}
                    onChange={(e) => setTag2(e.target.value)}
                    placeholder="التخصص الثاني"
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E3D5C1] rounded-xl text-sm focus:outline-none focus:border-[#594432]"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#EBE3D5]">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 text-sm font-medium bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-colors"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  disabled={createScholar.isPending || updateScholar.isPending}
                  className="px-6 py-2.5 text-sm font-bold bg-[#1B0F00] hover:bg-[#331E05] text-white rounded-xl transition-all shadow-md disabled:opacity-50"
                >
                  {createScholar.isPending || updateScholar.isPending
                    ? "جاري الحفظ..."
                    : "حفظ البيانات"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
