import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/shared/css/globals.css";
import { Header } from "@/components/Heder/Header";
import { Footer } from "@/components/Footer";
import YandexMetrikaContainer from "@/shared/lib/yandex-metrika";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const analyticsEnabled = !!(process.env.NODE_ENV === "production");
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="min-h-screen bg-linear-to-br from-purple-50 via-pink-50 to-blue-50 h-full flex flex-col">
          <Header />

          {children}

          <Footer />
        </main>
        <YandexMetrikaContainer enabled={analyticsEnabled} />
      </body>
    </html>
  );
}
