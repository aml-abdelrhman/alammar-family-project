import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // حصر اللغات على العربية فقط
  locales: ["ar"],
  // تعيين العربية كلغة افتراضية
  defaultLocale: "ar",
  // منع إضافة /ar للرابط
  localePrefix: "never",
  localeDetection: false
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);