import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "株式会社エニシャル｜物販・デザイン・事業支援",
    template: "%s｜株式会社エニシャル",
  },

  description:
    "株式会社エニシャルは、国内外の優れた商品の販売、デザイン制作、補助金活用や事業計画などの事業支援を行う、流通・クリエイティブ企業です。",

  metadataBase: new URL("https://www.enitial.jp"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "株式会社エニシャル｜物販・デザイン・事業支援",
    description:
      "国内外の優れた商品の販売、デザイン制作、事業支援を通じて、人と商品、事業と未来をつなぎます。",
    url: "https://www.enitial.jp",
    siteName: "株式会社エニシャル",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "株式会社エニシャル",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "株式会社エニシャル",
              url: "https://www.enitial.jp",
              logo: "https://www.enitial.jp/images/logo-horizontal.png",
              email: "info@enitial.jp",
              contactPoint: {
                "@type": "ContactPoint",
                email: "info@enitial.jp",
                contactType: "customer service",
                areaServed: "JP",
                availableLanguage: "Japanese",
              },
            }),
          }}
        />
      </body>
    </html>
  )
}
