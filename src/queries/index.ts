import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '@/lib/api'; // استيراد الـ api instance الخاص بنا
import { toast } from 'sonner';
import { useRouter } from 'next/navigation'; 
import { useAuthStore } from "@/store/useAuthStore";

// استيراد useRouter من 'next/navigation'
// تعريف شكل بيانات الأمير
export interface Prince {
  id?: number;
  title: string;
  description: string;
  content: string;
  created_at?: string;
}

export interface AdminUser {
  id: number;
  name: string;
  email: string;
  created_at?: string;
}

export interface Scholar {
  id?: number;
  name: string;
  role: string;
  desc: string;
  tags: string[];
}

export interface CharityInitiative {
  id?: number;
  title: string;
  description: string;
  target: string;
  remaining: string;
  progress: number;
  image: string ; 
  createdAt?: string;
  updatedAt?: string;
}

export interface DigitalLibraryItem {
  id: number | string;
  title: string;
  tag: 'PDF' | 'ZIP' | 'DOCX' | 'DOC' | 'JPG' | 'PNG' | string;
  date: string;
  size: string;
  file_path: string;
  created_at?: string;
  updated_at?: string;
}


// 4. تسجيل دخول الأدمن
export const useLogin = () => {
  const router = useRouter(); // تأكدي من استيراد useRouter من 'next/navigation'
  const setAuth = useAuthStore((state) => state.setAuth); // تأكدي من استيراد useAuthStore

  return useMutation({
    mutationFn: async (credentials: { email: string; password: string }) => {
      const res = await api.post('/login', credentials);
      return res.data;
    },
    onSuccess: (data) => {
      const { token, admin } = data;
      setAuth(token, admin);
      toast.success('تم تسجيل الدخول بنجاح');
      router.push('/admin/princes');
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || 'فشل تسجيل الدخول، تأكد من البيانات');
    },
  });
};

// 1. جلب قائمة الأمراء لعرضها في الموقع التعريفي
export const useGetPrinces = () => {
  return useQuery<Prince[]>({
    queryKey: ['princes'],
    queryFn: async () => {
      const res = await api.get('/princes');
      return res.data;
    },
  });
};

// 2. إضافة أمير جديد (خاص بلوحة تحكم الأدمن)
export const useCreatePrince = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (data: { title: string; description: string; content: string }) => {
      const res = await api.post('/admin/princes', data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['princes'] });
     
      // toast.success('تمت إضافة الأمير بنجاح');
    
    },
    onError: (error: any) => {

      // toast.error(error.response?.data?.message || 'حدث خطأ أثناء الإضافة');
   
    },
  });
};

export const useUpdatePrince = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, ...updatedData }: { id: string; title: string; description: string; content: string }) => {
      const { data } = await api.put(`/princes/${id}`, updatedData);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["princes"] });
    },
  });
};

// 3. حذف أمير (خاص بلوحة تحكم الأدمن)
export const useDeletePrince = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (id: string | number) => {
      const res = await api.delete(`/admin/princes/${id}`);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['princes'] });
      // toast.success('تم حذف الأمير بنجاح');
    },
    onError: (error: any) => {
      
      // toast.error(error.response?.data?.message || 'حدث خطأ أثناء الحذف');
   
    },
  });
};

// ==================== دوال إدارة الحساب والمشرفين (Account & Admins) ====================

// 6. تحديث بيانات حساب الأدمن الحالي
export const useUpdateAdminAccount = () => {
  return useMutation({
    mutationFn: async (data: {
      name?: string;
      email?: string;
      current_password?: string;
      new_password?: string;
    }) => {
      const res = await api.put('/admin/account', data);
      return res.data;
    },
    onSuccess: (data) => {
      toast.success(data.message || 'تم تحديث بيانات الحساب بنجاح');
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || 'حدث خطأ أثناء التحديث');
    },
  });
};

// 7. جلب قائمة المشرفين
export const useGetAdminsList = () => {
  return useQuery<AdminUser[]>({
    queryKey: ['admin-users'],
    queryFn: async () => {
      const res = await api.get('/admin/users');
      return res.data.admins;
    },
  });
};

// 8. إضافة أدمن جديد
export const useCreateAdmin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: { name: string; email: string; password: string }) => {
      const res = await api.post('/admin/users', data);
      return res.data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['admin-users'] });
      toast.success(data.message || 'تم إنشاء حساب المشرف الجديد بنجاح');
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || 'حدث خطأ أثناء إنشاء الحساب');
    },
  });
};

// 9. حذف أدمن
export const useDeleteAdmin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string | number) => {
      const res = await api.delete(`/admin/users/${id}`);
      return res.data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['admin-users'] });
      toast.success(data.message || 'تم حذف المشرف بنجاح');
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || 'حدث خطأ أثناء الحذف');
    },
  });
};


// 1. جلب قائمة المشائخ وطلبة العلم لعرضها في الموقع التعريفي
export const useGetScholars = () => {
  return useQuery<Scholar[]>({
    queryKey: ['scholars'],
    queryFn: async () => {
      const res = await api.get('/scholars');
      return res.data;
    },
  });
};

// 2. إضافة طالب علم جديد (خاص بلوحة تحكم الأدمن)
export const useCreateScholar = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (data: Scholar) => {
      const res = await api.post('/admin/scholars', data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['scholars'] });
      toast.success('تمت إضافة طالب العلم بنجاح');
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || 'حدث خطأ أثناء الإضافة');
    },
  });
};

// 3. تعديل طالب علم (خاص بلوحة تحكم الأدمن)
export const useUpdateScholar = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, data }: { id: number; data: Scholar }) => {
      const res = await api.put(`/admin/scholars/${id}`, data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['scholars'] });
      toast.success('تم تحديث البيانات بنجاح');
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || 'حدث خطأ أثناء التحديث');
    },
  });
};

// 4. حذف طالب علم (خاص بلوحة تحكم الأدمن)
export const useDeleteScholar = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number) => {
      const res = await api.delete(`/admin/scholars/${id}`);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['scholars'] });
      toast.success('تم حذف السجل بنجاح');
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || 'حدث خطأ أثناء الحذف');
    },
  });
};

// 1. جلب المبادرات الخيرية
export const useGetCharities = () => {
  return useQuery<CharityInitiative[]>({
    queryKey: ['charities'],
    queryFn: async () => {
      const res = await api.get('/charities');
      
      // استخراج الدومين الأساسي ديناميكياً ليعمل على الـ Local والـ Production
      const apiEnv = process.env.NEXT_PUBLIC_API_URL || '';
      const baseUrl = apiEnv.replace(/\/api\/?$/, '').replace(/\/+$/, '');

      return res.data.map((item: any) => {
        let imageUrl = item.image;

        if (imageUrl && !imageUrl.startsWith('http')) {
          const cleanPath = imageUrl.replace(/^\/+/, '');
          imageUrl = `${baseUrl}/storage/${cleanPath}`;
        }

        return { ...item, image: imageUrl };
      });
    },
  });
};

// 2. إضافة مبادرة خيرية جديدة
export const useCreateCharity = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (data: FormData) => {
      const res = await api.post('/admin/charities', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['charities'] });
      toast.success('تمت إضافة المبادرة الخيرية بنجاح');
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || 'حدث خطأ أثناء الإضافة');
    },
  });
};

// 3. تعديل مبادرة خيرية موجودة
// مثال داخل ملف الـ queries.ts
export const useUpdateCharity = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ id, data }: { id: number; data: FormData }) => {
      // التأكد من أن الطلب يتم إرساله كـ POST لأن الـ FormData مع الملفات تتطلب POST في لارافيل
      const response = await api.post(`/admin/charities/${id}`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['charities'] });
      toast.success("تم تعديل المبادرة بنجاح");
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || "حدث خطأ أثناء التعديل");
    },
  });
};

// 4. حذف مبادرة خيرية
export const useDeleteCharity = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number) => {
      const res = await api.delete(`/admin/charities/${id}`);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['charities'] });
      toast.success('تم حذف المبادرة الخيرية بنجاح');
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || 'حدث خطأ أثناء الحذف');
    },
  });
};

// 1. جلب ملفات المكتبة الرقمية
export const useGetDigitalLibrary = () => {
  return useQuery<DigitalLibraryItem[]>({
    queryKey: ['digital-library'],
    queryFn: async () => {
      const res = await api.get('/digital-library');
      
      // استخراج الدومين الأساسي ديناميكياً ليعمل على الـ Local والـ Production
      const apiEnv = process.env.NEXT_PUBLIC_API_URL || '';
      const baseUrl = apiEnv.replace(/\/api\/?$/, '').replace(/\/+$/, '');

      return res.data.data.map((item: any) => {
        let filePath = item.file_path;

        if (filePath && !filePath.startsWith('http')) {
          const cleanPath = filePath.replace(/^\/+/, '');
          // إذا كان المسار لا يحتوي مسبقاً على storage/ يتم إضافتها
          if (!cleanPath.startsWith('storage/')) {
            filePath = `${baseUrl}/storage/${cleanPath}`;
          } else {
            filePath = `${baseUrl}/${cleanPath}`;
          }
        }

        return { ...item, file_path: filePath };
      });
    },
  });
};
export const useCreateDigitalLibrary = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (data: FormData) => {
      const res = await api.post('/digital-library', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['digital-library'] });
      toast.success('تم إضافة الملف بنجاح إلى المكتبة الرقمية');
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || 'حدث خطأ أثناء إضافة الملف');
    },
  });
};

// 3. تحديث ملف في المكتبة الرقمية (خاص بالأدمن)
export const useUpdateDigitalLibrary = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ id, data }: { id: number | string; data: FormData }) => {
      // بما أن الـ Controller لديك يستقبل Post للتحديث، نستخدم post مع تمرير الـ id
      const res = await api.post(`/digital-library/${id}`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['digital-library'] });
      toast.success('تم تحديث بيانات الملف بنجاح');
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || 'حدث خطأ أثناء التحديث');
    },
  });
};

// 4. حذف ملف من المكتبة الرقمية (خاص بالأدمن)
export const useDeleteDigitalLibrary = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (id: number | string) => {
      const res = await api.delete(`/digital-library/${id}`);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['digital-library'] });
      toast.success('تم حذف الملف بنجاح من المكتبة الرقمية');
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || 'حدث خطأ أثناء الحذف');
    },
  });
};