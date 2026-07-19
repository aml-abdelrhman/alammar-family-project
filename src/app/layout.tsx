import "./globals.css";
import type { Metadata } from "next";
import MainLayout from "@/layouts/main-layout";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

// Metadata للمشروع العربي
export const metadata: Metadata = {
  title: "مبادرات العمار الخيرية",
  description: "التعريف بالأسرة ودعم العمل الخيري",
  openGraph: {
    title: "مبادرات العمار الخيرية",
    description: "التعريف بالأسرة ودعم العمل الخيري",
    images: ["/images/logo.png"],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // جلب الرسائل للغة العربية
  const messages = await getMessages();

  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head />
      <body className="font-sans antialiased">
        <NextIntlClientProvider locale="ar" messages={messages}>
          <MainLayout>{children}</MainLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}