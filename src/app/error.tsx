"use client";
import { Button } from "@/components/ui/button";
import { Home, RefreshCw, TriangleAlert } from "lucide-react";


export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {

  return (
    <div className="flex items-center justify-center p-4 min-h-dvh bg-linear-to-br from-main-50 to-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-xl rounded-2xl">
        <div className="flex justify-center">
          <div className="p-3 rounded-full bg-main-100">
            <TriangleAlert className="w-12 h-12 text-main-800" />
          </div>
        </div>

        <div className="space-y-3 text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            حدث خطأ غير متوقع
          </h2>

          <p className="text-gray-600">تفاصيل الخطأ</p>

          <div className="p-4 mt-4 rounded-lg bg-red-50">
            <p className="font-mono text-sm text-red-600 break-all">
              {JSON.stringify(error, null, 2)}
              {error?.message}
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-3 pt-2 sm:flex-row">
          <Button
            onClick={reset}
            startContent={<RefreshCw className="w-4 h-4" />}
            variant="outline"
          >
            إعادة المحاولة
          </Button>

          <Button
            onClick={() => (window.location.href = "/")}
            startContent={<Home className="w-4 h-4" />}
          >
            الصفحة الرئيسية
          </Button>
        </div>
      </div>
    </div>
  );
}
