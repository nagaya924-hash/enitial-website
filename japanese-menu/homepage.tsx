"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, Target, TrendingUp, Users, ShoppingCart } from "lucide-react"
import ContactForm from "./components/contact-form"
import Image from "next/image"

// 共通ヘッダー（subtitleClassNameで余白調整可）
function SectionHeader({
  title,
  subtitle,
  align = "center",
  subtitleClassName,
}: {
  title: string
  subtitle?: string
  align?: "left" | "center"
  subtitleClassName?: string
}) {
  return (
    <div className={`${align === "center" ? "text-center" : "text-left"} mb-12`}>
      <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 tracking-tight">{title}</h2>
      {subtitle && (
        <p
          className={`${
            subtitleClassName ?? "mt-3"
          } text-sm md:text-base text-gray-500 font-light leading-relaxed ${
            align === "center" ? "max-w-4xl mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default function Homepage() {
  const services = [
    {
      title: "事業計画策定",
      description: "金融機関・補助金申請に対応可能な計画書を作成支援します。",
      features: ["金融機関対応", "補助金申請対応", "実現可能性検証"],
      icon: Target,
    },
    {
      title: "補助金申請サポート",
      description: "実績に基づいた計画書づくりと申請実務を通じて、高い採択率を実現します。",
      features: ["計画書作成", "申請実務代行", "高い採択率"],
      icon: TrendingUp,
    },
    {
      title: "営業代行",
      description: "新規開拓からフォロー営業まで、売上拡大をサポートします。",
      features: ["新規開拓", "フォロー営業", "売上拡大"],
      icon: Users,
    },
    {
      title: "ネットショップ運営・販売",
      description:
        "楽天・メルカリ・eBayでの販売実績を活かし、仕入れ・委託商品の販売やテストマーケティングに対応します。",
      features: ["楽天・メルカリ・eBay", "委託販売", "テストマーケティング"],
      icon: ShoppingCart,
    },
  ]

  const companyInfo = [
    { label: "会社名", value: "株式会社エニシャル" },
    { label: "設立", value: "2024年9月" },
    { label: "所在地", value: "岐阜県揖斐郡揖斐川町日坂1178" },
    { label: "メール", value: "info@enitial.jp" },
  ]

  const mvv = [
    {
      title: "Mission",
      subtitle: "ミッション",
      content:
        "顧客との縁を大切にし、製品やサービスのポテンシャルを最大限に引き出すことで、持続可能な成長と価値創造を実現する。",
    },
    {
      title: "Vision",
      subtitle: "ビジョン",
      content:
        "顧客のビジネスを成功へ導く最良のパートナーとして、革新的で信頼されるOEM企画や販路開拓のリーダーとなり、共に未来を切り拓く。",
    },
    {
      title: "Value",
      subtitle: "バリュー",
      content:
        "顧客中心主義・創造性と革新・誠実と信頼・持続可能な成長を核として、すべての活動において顧客のニーズを最優先し、長期的な信頼関係を築きます。",
    },
  ]

  return (
    <div className="min-h-screen bg-white font-light">
      {/* ... Header と Hero は省略（前回と同じ） ... */}

      {/* Services */}
      <section id="services" className="py-28 bg-white relative overflow-hidden">
        <div className="container mx-auto px-8 relative">
          <SectionHeader
            title="サービス"
            subtitle="お客様のビジネス成長を支える幅広いコンサルティングサービスを提供しています"
            align="center"
          />
          {/* サービスカード（省略、前回と同じ） */}
        </div>
      </section>

      {/* MVV */}
      <section id="mvv" className="py-28 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-8 relative">
          <SectionHeader title="企業理念" subtitle="私たちの行動指針となる理念をご紹介します" align="center" />
          {/* カード（省略、前回と同じ） */}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-28 bg-white relative">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            <div>
              {/* 👇 会社概要だけ subtitleClassName を指定して余白を増やす */}
              <SectionHeader
                title="会社概要"
                subtitle="株式会社エニシャルは『顧客との縁を大切にし、その可能性を最大限に引き出す』という理念のもと、お客様と共に成長していくパートナーを目指しています。"
                align="left"
                subtitleClassName="mt-6"
              />
              <div className="space-y-6 mb-8">
                <p className="text-gray-600 leading-relaxed font-light">
                  事業計画策定から補助金申請サポート、営業代行、ネットショップ運営まで、お客様のビジネス成長を多角的にサポートする総合コンサルティング会社です。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-slate-50 p-12 border border-slate-100">
                <h3 className="font-light text-slate-700 mb-6 text-lg tracking-wide">企業情報</h3>
                <div className="space-y-4">
                  {companyInfo.map((info, index) => (
                    <div key={index} className="flex justify-between py-3 border-b border-slate-200 last:border-b-0">
                      <span className="text-gray-600 font-light text-sm">{info.label}</span>
                      <span className="font-light text-slate-700 text-sm">{info.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ... Contact と Footer は前回と同じ ... */}
    </div>
  )
}
