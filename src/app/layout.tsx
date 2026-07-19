import "./globals.css";
import type { Metadata } from "next";
import MainLayout from "@/layouts/main-layout";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

// Metadata للمشروع
export const metadata: Metadata = {
  // هام: هذا الرابط هو الذي يمنع ظهور التحذير في الـ Build
  metadataBase: new URL('https://alammar.family'), 
  title: "مبادرات العمار الخيرية",
  description: "التعريف بالأسرة ودعم العمل الخيري",
  openGraph: {
    title: "مبادرات العمار الخيرية",
    description: "التعريف بالأسرة ودعم العمل الخيري",
    // تأكدي أن الصورة موجودة في public/images/logo.png
    images: [{ url: "/images/logo.png", width: 800, height: 600, alt: "Logo" }],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // جلب الرسائل
  const messages = await getMessages();

  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        {/* يمكنك إضافة أي روابط خطوط أو Favicons هنا */}
      </head>
      <body className="font-sans antialiased">
        <NextIntlClientProvider locale="ar" messages={messages}>
          <MainLayout>{children}</MainLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}