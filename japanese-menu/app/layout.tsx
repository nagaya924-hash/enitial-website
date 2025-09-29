import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "株式会社エニシャル - ビジネス成長のパートナー",
  description:
    "事業計画策定から補助金申請、営業代行まで、お客様のビジネス成長を総合的にサポートいたします。",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.jpg", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.jpg", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.jpg", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",

  // ✅ OGPのみ（Facebook/LINE/Twitter共通で利用される）
  openGraph: {
    title: "株式会社エニシャル - ビジネス成長のパートナー",
    description:
      "事業計画策定から補助金申請、営業代行まで、お客様のビジネス成長を総合的にサポートいたします。",
    url: "https://www.enitial.jp",
    siteName: "株式会社エニシャル",
    images: [
      {
        url: "https://www.enitial.jp/og-image.png",
        width: 1200,
        height: 630,
        alt: "株式会社エニシャル ロゴ",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  )
}
