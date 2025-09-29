"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, Target, TrendingUp, Users, ShoppingCart } from "lucide-react"
import ContactForm from "./components/contact-form"
import Image from "next/image"

// 共通セクションヘッダー（見出しサイズ・装飾を統一）
function SectionHeader({
  title,
  subtitle,
  align = "center",
}: {
  title: string
  subtitle?: string
  align?: "left" | "center"
}) {
  const isCenter = align === "center"
  return (
    <div className={`${isCenter ? "text-center" : "text-left"} mb-24`}>
      <div className={`flex items-center ${isCenter ? "justify-center" : ""} mb-6`}>
        {/* 装飾：ドット-ライン-タイトル-ライン-ドット（左寄せ時はドット＋ライン＋タイトル） */}
        <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
        <div className="w-16 h-px bg-slate-300 mx-4"></div>
        <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 tracking-tight">{title}</h2>
        {isCenter && (
          <>
            <div className="w-16 h-px bg-slate-300 mx-4"></div>
            <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
          </>
        )}
      </div>
      {subtitle && (
        <p className={`text-xs md:text-sm lg:text-base text-gray-500 font-light leading-relaxed ${isCenter ? "max-w-4xl mx-auto" : ""}`}>
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
      {/* Header */}
      <header className="border-b border-gray-100 bg-white sticky top-0 z-50">
        <div className="container mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src="/images/logo-horizontal.png"
                alt="Enitial Logo"
                width={220}
                height={50}
                className="h-10 w-auto"
              />
            </div>
            <nav className="hidden md:flex items-center space-x-12">
              <a href="#services" className="text-gray-600 hover:text-slate-700 transition-colors font-light text-sm tracking-wide">
                サービス
              </a>
              <a href="#mvv" className="text-gray-600 hover:text-slate-700 transition-colors font-light text-sm tracking-wide">
                理念
              </a>
              <a href="#about" className="text-gray-600 hover:text-slate-700 transition-colors font-light text-sm tracking-wide">
                会社概要
              </a>
              <a href="#contact" className="text-gray-600 hover:text-slate-700 transition-colors font-light text-sm tracking-wide">
                お問い合わせ
              </a>
            </nav>
            <Button className="hidden md:inline-flex bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-light text-sm px-6 py-2">
              お問い合わせ
              <ArrowRight className="ml-2 h-3 w-3" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-32 md:py-48 bg-black overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-handshake-clean.png"
            alt="Professional handshake representing partnership"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative container mx-auto px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <p className="text-sm md:text-lg text-white mb-4 leading-relaxed font-extralight tracking-wide whitespace-nowrap">
                出会いが縁を生み、縁が可能性を育む。
              </p>
              <p className="text-sm md:text-lg text-white mb-8 leading-relaxed font-extralight tracking-wide whitespace-nowrap">
                その可能性を、私たちは共に拓く。
              </p>
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="w-12 h-px bg-slate-400"></div>
                <p className="text-xs text-gray-200 font-light tracking-widest uppercase">Enitial（EN × Potential）</p>
                <div className="w-12 h-px bg-slate-400"></div>
              </div>
              <div className="flex items-center justify-center space-x-2 mt-4">
                <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
                <div className="w-1 h-1 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
                <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
              </div>
            </div>

            <div className="space-y-6 mb-16">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-white leading-tight tracking-tight">
                顧客との縁を大切にし
                <br />
              </h1>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-gray-100 leading-tight tracking-tight">
                可能性を最大化
              </h1>
            </div>

            <div className="space-y-3 mb-12 max-w-3xl mx-auto">
              <p className="text-xs md:text-sm lg:text-base text-gray-200 leading-relaxed font-light">
                事業計画策定から補助金申請、営業代行まで
              </p>
              <p className="text-xs md:text-sm lg:text-base text-gray-200 leading-relaxed font-light">
                お客様のビジネス成長を総合的にサポートいたします
              </p>
            </div>

            <Button
              size="lg"
              className="bg-slate-800/90 hover:bg-slate-900 text-white font-light text-sm px-12 py-4 border-0 tracking-wide shadow-lg"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              サービスを見る
              <ArrowRight className="ml-3 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-8 relative">
          <SectionHeader
            title="サービス"
            subtitle="お客様のビジネス成長を支える幅広いコンサルティングサービスを提供しています"
            align="center"
          />
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div
                  key={index}
                  className="group p-8 border border-gray-100 hover:border-slate-200 transition-all duration-300 hover:shadow-lg relative bg-white animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-slate-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-slate-700 transition-colors relative">
                        <IconComponent className="w-6 h-6 text-slate-600 group-hover:text-white transition-colors" />
                        <div className="absolute -inset-2 border border-slate-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-light text-gray-900 mb-4 tracking-wide group-hover:text-slate-700 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed font-light text-sm mb-6">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-500 font-light">
                            <div className="w-1 h-1 bg-slate-400 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Value */}
      <section id="mvv" className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-8 relative">
          {/* ※サービスと同じデザイン・サイズの見出し */}
          <SectionHeader title="企業理念" subtitle="私たちの行動指針となる理念をご紹介します" align="center" />

          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto relative">
            <div className="hidden lg:block absolute top-1/2 left-1/3 w-1/3 h-px bg-gradient-to-r from-slate-300 via-slate-200 to-slate-300 transform -translate-y-1/2"></div>
            <div className="hidden lg:block absolute top-1/2 right-1/3 w-1/3 h-px bg-gradient-to-r from-slate-300 via-slate-200 to-slate-300 transform -translate-y-1/2"></div>

            {mvv.map((item, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white border border-gray-100 hover:shadow-lg hover:border-slate-200 transition-all relative group"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-slate-700 text-white rounded-full flex items-center justify-center text-xs font-light">
                  {index + 1}
                </div>
                <div className="mb-8 pt-4">
                  <h3 className="text-2xl font-extralight text-slate-700 mb-2 tracking-wide">{item.title}</h3>
                  <p className="text-xs text-gray-400 font-light tracking-widest uppercase">{item.subtitle}</p>
                  <div className="w-12 h-px bg-slate-300 mx-auto mt-4 group-hover:bg-slate-500 transition-colors"></div>
                </div>
                <p className="text-gray-600 leading-relaxed font-light text-sm">{item.content}</p>

                <div className="absolute bottom-4 right-4 w-3 h-3 border-r-2 border-b-2 border-slate-200 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32 bg-white relative">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
            <div>
              {/* ※見出しを共通コンポーネントで左寄せに */}
              <SectionHeader
                title="会社概要"
                subtitle="株式会社エニシャルは『顧客との縁を大切にし、その可能性を最大限に引き出す』という理念のもと、お客様と共に成長していくパートナーを目指しています。"
                align="left"
              />
              <div className="space-y-8 mb-16">
                <p className="text-gray-600 leading-relaxed font-light">
                  事業計画策定から補助金申請サポート、営業代行、ネットショップ運営まで、お客様のビジネス成長を多角的にサポートする総合コンサルティング会社です。
                </p>
              </div>
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="font-light text-gray-900 mb-2 text-sm group-hover:text-slate-700 transition-colors">
                    顧客中心主義
                  </div>
                  <div className="text-xs text-gray-500 font-light">お客様第一</div>
                  <div className="w-8 h-px bg-slate-300 mx-auto mt-2"></div>
                </div>
                <div className="text-center group">
                  <div className="font-light text-gray-900 mb-2 text-sm group-hover:text-slate-700 transition-colors">
                    高い成果
                  </div>
                  <div className="text-xs text-gray-500 font-light">95%採択率</div>
                  <div className="w-8 h-px bg-slate-300 mx-auto mt-2"></div>
                </div>
                <div className="text-center group">
                  <div className="font-light text-gray-900 mb-2 text-sm group-hover:text-slate-700 transition-colors">
                    信頼と実績
                  </div>
                  <div className="text-xs text-gray-500 font-light">200+支援実績</div>
                  <div className="w-8 h-px bg-slate-300 mx-auto mt-2"></div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-slate-50 p-12 border border-slate-100">
                <h3 className="font-light text-slate-700 mb-8 text-lg tracking-wide">企業情報</h3>
                <div className="space-y-6">
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

      {/* Contact Form */}
      <section id="contact" className="py-32 bg-slate-50">
        <div className="container mx-auto px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-8 tracking-tight">
              お問い合わせ
            </h2>
            <div className="space-y-1">
              <p className="text-sm md:text-base lg:text-lg text-gray-500 font-light leading-relaxed">
                事業計画のご相談から補助金申請まで
              </p>
              <p className="text-xs md:text-sm lg:text-base text-gray-500 font-light leading-relaxed">
                どんなことでもお聞かせください
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-100 text-slate-700 py-20">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="mb-6">
                <Image
                  src="/images/logo-horizontal.png"
                  alt="Enitial Logo"
                  width={220}
                  height={50}
                  className="h-10 w-auto"
                />
              </div>
              <div className="mb-8">
                <p className="text-slate-700 text-sm font-light tracking-wide">株式会社エニシャル</p>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                顧客との縁を大切にし
                <br />
                ビジネスの可能性を最大化するパートナー
              </p>
            </div>
            <div>
              <h4 className="font-light mb-8 text-slate-800 text-sm tracking-wide">サービス</h4>
              <ul className="space-y-4 text-xs text-slate-600 font-light">
                <li><a href="#" className="hover:text-slate-800 transition-colors">事業計画策定</a></li>
                <li><a href="#" className="hover:text-slate-800 transition-colors">補助金申請サポート</a></li>
                <li><a href="#" className="hover:text-slate-800 transition-colors">営業代行</a></li>
                <li><a href="#" className="hover:text-slate-800 transition-colors">ネットショップ運営</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-light mb-8 text-slate-800 text-sm tracking-wide">会社情報</h4>
              <ul className="space-y-4 text-xs text-slate-600 font-light">
                <li><a href="#" className="hover:text-slate-800 transition-colors">会社概要</a></li>
                <li><a href="#" className="hover:text-slate-800 transition-colors">企業理念</a></li>
                <li><a href="#" className="hover:text-slate-800 transition-colors">お知らせ</a></li>
                <li><a href="#" className="hover:text-slate-800 transition-colors">お問い合わせ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-light mb-8 text-slate-800 text-sm tracking-wide">お問い合わせ</h4>
              <div className="space-y-4 text-xs text-slate-600 font-light">
                <p>info@enitial.jp</p>
                <p>岐阜県揖斐郡揖斐川町日坂1178</p>
              </div>
            </div>
          </div>
          <Separator className="my-12 bg-slate-300" />
          <div className="text-center text-xs text-slate-500 font-light">
            <p>&copy; 2025 株式会社エニシャル. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in 0.6s ease-out forwards; opacity: 0; }
      `}</style>
    </div>
  )
}
