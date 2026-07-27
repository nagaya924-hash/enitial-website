import type { Metadata } from "next"
import Homepage from "../homepage"

export const metadata: Metadata = {
  title: {
    absolute: "株式会社エニシャル｜物販・デザイン・事業支援",
  },

  description:
    "株式会社エニシャルは、国内外の優れた商品の販売、デザイン制作、補助金活用や事業計画などの事業支援を行う、流通・クリエイティブ企業です。",

  alternates: {
    canonical: "https://www.enitial.jp/",
  },

  openGraph: {
    title: "株式会社エニシャル｜物販・デザイン・事業支援",
    description:
      "国内外の優れた商品の販売、デザイン制作、事業支援を通じて、人と商品、事業と未来をつなぎます。",
    url: "https://www.enitial.jp/",
    siteName: "株式会社エニシャル",
    locale: "ja_JP",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
}

export default function Page() {
  return <Homepage />
}
