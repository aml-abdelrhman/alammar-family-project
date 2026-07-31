import "./globals.css";
import type { Metadata } from "next";
import MainLayout from "@/layouts/main-layout";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Providers } from "@/components/providers"; // استيراد مزود الكويري الجديد
import { Toaster } from "sonner";
// Metadata للمشروع
export const metadata: Metadata = {
  metadataBase: new URL('https://alammar.family'), 
  title: "مبادرات العمار الخيرية",
  description: "التعريف بالأسرة ودعم العمل الخيري",
  openGraph: {
    title: "مبادرات العمار الخيرية",
    description: "التعريف بالأسرة ودعم العمل الخيري",
    images: [{ url: "/images/logo.png", width: 800, height: 600, alt: "Logo" }],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const messages = await getMessages();

  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        {/* روابط الخطوط أو الـ Favicons */}
      </head>
      <body className="font-sans antialiased">
        <NextIntlClientProvider locale="ar" messages={messages}>
          {/* هنا قمنا بتغليف التطبيق بالكامل بـ Providers ليعمل React Query في أي مكان */}
          <Providers>
            <MainLayout>{children}</MainLayout>
            <Toaster position="top-center" richColors />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}