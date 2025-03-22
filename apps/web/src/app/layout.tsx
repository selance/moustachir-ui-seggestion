import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "@/styles/globals.css";

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "إعادة تصميم مستشير",
  description: "Generated by Selance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${tajawal.className} relative bg-neutral-50 text-neutral-700`}>
        {children}
        <div style={{backgroundImage:"url('/noise.png')"}}  className="[z-index:-1] pointer-events-none absolute inset-0 bg-repeat bg-[size:180px] opacity-[0.035] dark:opacity-[0.015] [z-index:0]"></div>
      </body>
    </html>
  );
}
