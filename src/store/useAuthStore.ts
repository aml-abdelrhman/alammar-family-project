import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AuthState {
  token: string | null
  admin: any | null
  setAuth: (token: string, admin: any) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      admin: null,
      
      // حفظ التوكن وبيانات الأدمن عند تسجيل الدخول بنجاح
      setAuth: (token, admin) => set({ token, admin }),
      
      // مسح البيانات عند تسجيل الخروج
      logout: () => set({ token: null, admin: null }),
    }),
    {
      name: 'alammar-auth-storage', // اسم التخزين المحلي (LocalStorage) لضمان عدم ضياع الجلسة عند تحديث الصفحة
    }
  )
)