import axios, { AxiosError } from 'axios'
import { useAuthStore } from '@/store/useAuthStore'
import { toast } from 'sonner'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

api.interceptors.request.use((config) => {
  // التحقق مما إذا كان الرابط يحتوي على login لضمان عدم إرفاق التوكن
  if (config.url?.includes('/login')) {
    return config
  }

  const token = useAuthStore.getState().token

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

const handleResponseError = async (error: AxiosError) => {
  const status = error.response?.status

  if (status === 401) {
    const { logout } = useAuthStore.getState()

    toast.error('انتهت صلاحية الجلسة، برجاء تسجيل الدخول لوحة التحكم مجدداً', { duration: 2500 })

    setTimeout(() => {
      logout()
      if (
        typeof window !== 'undefined' &&
        window.location.pathname !== '/login'
      ) {
        window.location.href = '/login'
      }
    }, 2000)
  }

  if (status === 403) {
    toast.error('ليس لديك الصلاحية للقيام بهذا الإجراء الإداري', { duration: 3000 })
    console.error('❌ Access Denied: Admin privileges required.')
  }

  return Promise.reject(error)
}

api.interceptors.response.use((r) => r, handleResponseError)

export default api