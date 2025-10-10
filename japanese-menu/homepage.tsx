"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, Target, TrendingUp, Users, ShoppingCart, Menu, X } from "lucide-react"
import ContactForm from "./components/contact-form"
import Image from "next/image"

// 共通セクションヘッダー
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
          } text-base text-gray-500 font-light leading-relaxed ${
            align === "center" ? "max-w-4xl mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

// モバイルメニュー
function MobileMenu() {
  const [open, setOpen] = useState(false)
  const go = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }
  return (
    <div className="md:hidden">
      <button aria-label="メニュー" onClick={() => setOpen(v => !v)}>
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>
      {open && (
        <div className="absolute inset-x-0 top-full border-t bg-white shadow-sm">
          <nav className="container mx-auto px-8 py-3 space-y-2">
            <a href="#services" onClick={go("services")} className="block py-2 text-sm">サービス</a>
            <a href="#mvv" onClick={go("mvv")} className="block py-2 text-sm">理念</a>
            <a href="#about" onClick={go("about")} className="block py-2 text-sm">会社概要</a>
            <a href="#contact" onClick={go("contact")} className="block py-2 text-sm">お問い合わせ</a>
          </nav>
        </div>
      )}
    </div>
  )
}

export default function Homepage() {
  const services = [
    { title: "事業計画策定", description: "金融機関・補助金申請に対応可能な計画書を作成支援します。", features: ["金融機関対応","補助金申請対応","実現可能性検証"], icon: Target },
    { title: "補助金申請サポート", description: "実績に基づいた計画書づくりと申請実務を通じて、高い採択率を実現します。", features: ["計画書作成","申請実務代行","高い採択率"], icon: TrendingUp },
    { title: "営業代行", description: "新規開拓からフォロー営業まで、売上拡大をサポートします。", features: ["新規開拓","フォロー営業","売上拡大"], icon: Users },
    { title: "ネットショップ運営・販売", description: "楽天・メルカリ・eBayでの販売実績を活かし、仕入れ・委託商品の販売やテストマーケティングに対応します。", features: ["楽天・メルカリ・eBay","委託販売","テストマーケティング"], icon: ShoppingCart },
  ]

  // value は string または string[]（配列なら <br/> で改行表示）
  const companyInfo: { label: string; value: string | string[] }[] = [
    { label: "会社名", value: "株式会社エニシャル" },
    { label: "設立", value: "2024年9月" },
    {
      label: "所在地",
      value: [
        "本社：岐阜県揖斐郡揖斐川町日坂1178",
        "北方事務所：岐阜県本巣郡北方町高屋条里3−37",
      ],
    },
    { label: "メール", value: "info@enitial.jp" },
  ]

  const mvv = [
    { title: "Mission", subtitle: "ミッション", content: "顧客との縁を大切にし、製品やサービスのポテンシャルを最大限に引き出すことで、持続可能な成長と価値創造を実現する。" },
    { title: "Vision", subtitle: "ビジョン", content: "顧客のビジネスを成功へ導く最良のパートナーとして、革新的で信頼されるOEM企画や販路開拓のリーダーとなり、共に未来を切り拓く。" },
    { title: "Value", subtitle: "バリュー", content: "顧客中心主義・創造性と革新・誠実と信頼・持続可能な成長を核として、すべての活動において顧客のニーズを最優先し、長期的な信頼関係を築きます。" },
  ]

  return (
    <div className="min-h-screen bg-white font-light">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white sticky top-0 z-50">
        <div className="w-full flex items-center justify-between px-4 py-6 relative">
          <a href="#top" className="flex items-center cursor-pointer ml-0">
            <Image src="/images/logo-horizontal.png" alt="Enitial Logo" width={260} height={60} className="h-14 w-auto" />
          </a>
          <nav className="hidden md:flex items-center space-x-12">
            <a href="#services" className="text-gray-600 hover:text-slate-700 text-sm">サービス</a>
            <a href="#mvv" className="text-gray-600 hover:text-slate-700 text-sm">理念</a>
            <a href="#about" className="text-gray-600 hover:text-slate-700 text-sm">会社概要</a>
            <a href="#contact" className="text-gray-600 hover:text-slate-700 text-sm">お問い合わせ</a>
          </nav>
          <Button
            className="hidden md:inline-flex bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-sm px-6 py-2"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            お問い合わせ <ArrowRight className="ml-2 h-3 w-3" />
          </Button>
          <MobileMenu />
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative py-32 md:py-48 bg-black overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/hero-handshake-clean.png" alt="Professional handshake representing partnership" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative container mx-auto px-8">
          <div className="grid place-items-center">
            <div className="max-w-4xl text-center">
              <p className="text-sm md:text-lg text-white mb-4">出会いが縁を生み、縁が可能性を育む。</p>
              <p className="text-sm md:text-lg text-white mb-8">その可能性を、私たちは共に拓く。</p>

              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="w-12 h-px bg-slate-400"></div>
                <p className="text-xs text-gray-200 tracking-widest uppercase">Enitial（EN × Potential）</p>
                <div className="w-12 h-px bg-slate-400"></div>
              </div>

              <div className="flex items-center justify-center space-x-2 mb-16">
                <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
                <div className="w-1 h-1 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
                <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white leading-tight mb-6 text-center break-keep">
                <span className="block">顧客との縁を大切にし</span>
                <span className="block">可能性を最大化</span>
              </h1>

              <p className="text-sm md:text-base text-gray-200 mb-8">
                事業計画策定から補助金申請、営業代行まで お客様のビジネス成長を総合的にサポートいたします
              </p>
              <Button
                className="bg-slate-800/90 hover:bg-slate-900 text-white text-sm px-12 py-4"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                サービスを見る <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-28 bg-white">
        <div className="container mx-auto px-8">
          <SectionHeader title="サービス" subtitle="お客様のビジネス成長を支える幅広いコンサルティングサービスを提供しています" align="center" />
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {services.map((s, i) => {
              const Icon = s.icon
              return (
                <div key={i} className="group p-8 border border-gray-100 bg-white hover:shadow-lg transition-all">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-slate-600 transition-colors duration-200 group-hover:text-black" />
                    </div>
                    <div>
                      <h3 className="text-xl font-light text-gray-900 mb-4">{s.title}</h3>
                      <p className="text-gray-600 font-light text-base mb-6">{s.description}</p>
                      <ul className="space-y-2">
                        {s.features.map((f, j) => <li key={j} className="text-sm text-gray-500 font-light">・{f}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* MVV */}
      <section id="mvv" className="py-28 bg-slate-50">
        <div className="container mx-auto px-8">
          <SectionHeader title="企業理念" subtitle="私たちの行動指針となる理念をご紹介します" align="center" />
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {mvv.map((item, i) => (
              <div key={i} className="p-8 bg-white border border-gray-100 hover:shadow-lg transition-all text-center group">
                <h3 className="text-2xl font-extralight text-slate-700 mb-2 group-hover:text-slate-900 transition-colors">{item.title}</h3>
                <p className="text-xs text-gray-400 uppercase mb-4">{item.subtitle}</p>
                <div className="w-12 h-px bg-slate-300 mx-auto mb-6 group-hover:bg-slate-500 transition-colors"></div>
                <p className="text-gray-600 font-light text-base">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-28 bg-white">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div>
              <SectionHeader
                title="会社概要"
                subtitle="株式会社エニシャルは『顧客との縁を大切にし、その可能性を最大限に引き出す』という理念のもと、お客様と共に成長していくパートナーを目指しています。"
                align="left"
                subtitleClassName="mt-6"
              />
              <p className="text-gray-600 font-light leading-relaxed text-base">
                事業計画策定から補助金申請サポート、営業代行、ネットショップ運営まで、
                お客様のビジネス成長を多角的にサポートする総合コンサルティング会社です。
              </p>
            </div>
            <div>
              <div className="bg-slate-50 p-12 border border-slate-100">
                <h3 className="font-light text-slate-700 mb-6 text-lg">企業情報</h3>
                <div className="space-y-4">
                  {companyInfo.map((info, i) => (
                    <div key={i} className="flex justify-between py-3 border-b border-slate-200 last:border-b-0">
                      <span className="text-gray-600 font-light text-sm">{info.label}</span>
                      <span className="text-slate-700 font-light text-sm text-right">
                        {Array.isArray(info.value)
                          ? info.value.map((line, idx) => (
                              <span key={idx}>
                                {line}
                                {idx < info.value.length - 1 && <><br /></>}
                              </span>
                            ))
                          : info.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 bg-slate-50 text-center">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-6">お問い合わせ</h2>
          <p className="text-base text-gray-500 mb-2">事業計画のご相談から補助金申請まで</p>
          <p className="text-base text-gray-500 mb-10">どんなことでもお聞かせください</p>
          <ContactForm />
        </div>
      </section>

      {/* Footer（PCは横4カラム／モバイルは現状の縦） */}
      <footer className="bg-slate-100 text-slate-700 py-10">
        <div className="container mx-auto px-8">
          <div className="flex flex-col gap-8 md:grid md:grid-cols-[240px_1fr_1fr_1fr] md:gap-12 md:items-start">
            {/* 1. ロゴ＋会社名（縦積み・左揃え） */}
            <div className="space-y-3">
              <Image
                src="/images/logo-horizontal.png"
                alt="Enitial Logo"
                width={220}
                height={60}
                className="h-12 w-auto"
              />
              <p className="text-xs font-light">株式会社エニシャル</p>
            </div>

            {/* 2. サービス（タイトルとリンクを横並びで改行折返し） */}
            <div className="min-w-0 md:pt-1">
              <h4 className="font-light mb-2 text-sm">サービス</h4>
              <ul className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-light">
                <li>事業計画策定</li>
                <li>補助金申請サポート</li>
                <li>営業代行</li>
                <li>ネットショップ運営</li>
              </ul>
            </div>

            {/* 3. 会社情報（プライバシーポリシー追加済み） */}
            <div className="min-w-0 md:pt-1">
              <h4 className="font-light mb-2 text-sm">会社情報</h4>
              <ul className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-light">
                <li>会社概要</li>
                <li>企業理念</li>
                <li>お知らせ</li>
                <li>
                  <a href="/privacy-policy" className="hover:underline">プライバシーポリシー</a>
                </li>
                <li>お問い合わせ</li>
              </ul>
            </div>

            {/* 4. お問い合わせ */}
            <div className="min-w-0 md:pt-1">
              <h4 className="font-light mb-2 text-sm">お問い合わせ</h4>
              <p className="text-xs font-light">info@enitial.jp</p>
              <p className="text-xs font-light">本社：岐阜県揖斐郡揖斐川町日坂1178</p>
              <p className="text-xs font-light">北方事務所：岐阜県本巣郡北方町高屋条里3−37</p>
            </div>
          </div>

          <Separator className="my-6 bg-slate-300" />
          <p className="text-center text-xs font-light text-slate-500">
            &copy; 2025 株式会社エニシャル. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
