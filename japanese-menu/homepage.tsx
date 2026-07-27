"use client"

import React, { useEffect, useRef, useState } from "react"
import {
  ArrowRight,
  FileText,
  Gift,
  Mail,
  Menu,
  Minus,
  PencilLine,
  Plus,
  ShoppingCart,
  X,
} from "lucide-react"

type AccordionItemProps = {
  id: string
  title: string
  subtitle?: string
  icon?: React.ReactNode
  badge?: string
  isOpen: boolean
  onToggle: () => void
  children: React.ReactNode
}

function AccordionItem({
  id,
  title,
  subtitle,
  icon,
  badge,
  isOpen,
  onToggle,
  children,
}: AccordionItemProps) {
  return (
    <div className="border-b border-[#e8e6e1]">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={`${id}-content`}
        onClick={onToggle}
        className="group flex w-full items-center gap-4 py-6 text-left md:py-7"
      >
        {icon && (
          <span className="flex h-7 w-7 shrink-0 items-center justify-center text-[#222]">
            {icon}
          </span>
        )}

        <span className="flex min-w-0 flex-1 flex-wrap items-center gap-x-3 gap-y-2">
          <span className="font-serif text-[17px] tracking-[0.05em] text-[#202020] md:text-[19px]">
            {title}
          </span>

          {subtitle && (
            <span className="font-sans text-[12px] tracking-[0.12em] text-[#666] md:text-[13px]">
              {subtitle}
            </span>
          )}

          {badge && (
            <span className="border border-[#FFD600]/80 px-2 py-0.5 font-sans text-[9px] tracking-[0.14em] text-[#6d6100]">
              {badge}
            </span>
          )}
        </span>

        <span className="ml-2 flex h-6 w-6 shrink-0 items-center justify-center text-[#FFD600] transition-transform duration-300">
          {isOpen ? (
            <Minus size={14} strokeWidth={1.35} />
          ) : (
            <Plus size={14} strokeWidth={1.35} />
          )}
        </span>
      </button>

      <div
        id={`${id}-content`}
        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-9 pl-0 md:pb-11 md:pl-11">{children}</div>
        </div>
      </div>
    </div>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8 flex items-center gap-3">
      <h2 className="font-serif text-[13px] tracking-[0.28em] text-[#222] md:text-[14px]">
        {children}
      </h2>
      <span className="h-1.5 w-1.5 rounded-full bg-[#FFD600]" />
    </div>
  )
}

export default function Homepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openSection, setOpenSection] = useState<string | null>(null)
  const cursorRef = useRef<HTMLDivElement>(null)

  const go = (id: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(id)

    if (!element) return

    const offset = 88
    const top = element.getBoundingClientRect().top + window.scrollY - offset

    window.scrollTo({ top, behavior: "smooth" })
  }

  const toggleSection = (id: string) => {
    setOpenSection((current) => (current === id ? null : id))
  }

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    const moveCursor = (event: MouseEvent) => {
      cursor.style.transform = `translate3d(${event.clientX - 18}px, ${event.clientY - 18}px, 0)`
      cursor.style.opacity = "1"
    }

    const hideCursor = () => {
      cursor.style.opacity = "0"
    }

    window.addEventListener("mousemove", moveCursor)
    document.documentElement.addEventListener("mouseleave", hideCursor)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      document.documentElement.removeEventListener("mouseleave", hideCursor)
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#fcfbf8] text-[#222] selection:bg-[#fff3a5]">
      {/* ほのかな黄色のカーソル */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-9 w-9 rounded-full bg-[#FFD600]/25 opacity-0 blur-md transition-[opacity,width,height] duration-200 md:block"
      />

      {/* Header */}
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-[#eceae5] bg-[#fcfbf8]/92 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 md:h-24 md:px-10">
          <button
            type="button"
            aria-label="ページ上部へ戻る"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="shrink-0"
          >
            <img
              src="/images/logo-horizontal.png"
              alt="ENITIAL"
              className="h-8 w-auto md:h-9"
            />
          </button>

          <div className="hidden items-center gap-10 font-sans text-[11px] tracking-[0.18em] text-[#555] md:flex">
            <button type="button" onClick={() => go("about")} className="transition-colors hover:text-black">
              ABOUT
            </button>
            <button type="button" onClick={() => go("business")} className="transition-colors hover:text-black">
              BUSINESS
            </button>
            <button type="button" onClick={() => go("philosophy")} className="transition-colors hover:text-black">
              PHILOSOPHY
            </button>
            <button type="button" onClick={() => go("company")} className="transition-colors hover:text-black">
              COMPANY
            </button>
            <button type="button" onClick={() => go("contact")} className="transition-colors hover:text-black">
              CONTACT
            </button>
          </div>

          <button
            type="button"
            aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
            className="flex h-10 w-10 items-center justify-center md:hidden"
          >
            {isMenuOpen ? <X size={25} strokeWidth={1.35} /> : <Menu size={28} strokeWidth={1.35} />}
          </button>
        </div>

        <div
          className={`overflow-hidden border-[#eceae5] bg-[#fcfbf8] transition-[max-height,border-width] duration-500 md:hidden ${
            isMenuOpen ? "max-h-96 border-t" : "max-h-0 border-t-0"
          }`}
        >
          <div className="space-y-7 px-7 py-9 font-sans text-[12px] tracking-[0.2em] text-[#444]">
            <button type="button" onClick={() => go("about")} className="block w-full text-left">
              ABOUT
            </button>
            <button type="button" onClick={() => go("business")} className="block w-full text-left">
              BUSINESS
            </button>
            <button type="button" onClick={() => go("philosophy")} className="block w-full text-left">
              PHILOSOPHY
            </button>
            <button type="button" onClick={() => go("company")} className="block w-full text-left">
              COMPANY PROFILE
            </button>
            <button type="button" onClick={() => go("contact")} className="block w-full text-left">
              CONTACT
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 pt-20 text-center md:pt-24">
          <h1 className="hero-from-left font-serif text-[34px] tracking-[0.31em] text-[#17202b] opacity-0 md:text-[54px]">
            ENITIAL
          </h1>

          <span className="hero-line mt-9 h-px w-14 bg-black/55 opacity-0 md:mt-10 md:w-16" />

          <p className="hero-from-right mt-9 ml-[0.32em] font-serif text-[16px] tracking-[0.34em] text-[#b7b7b7] opacity-0 md:mt-10 md:text-[19px]">
            縁を、形に。
          </p>

          <button
            type="button"
            aria-label="次のセクションへスクロール"
            onClick={() => go("about")}
            className="hero-fade absolute bottom-12 flex flex-col items-center gap-3 opacity-0 md:bottom-14"
          >
            <span className="h-2 w-2 rounded-full bg-[#FFD600]" />
            <span className="h-7 w-px bg-[#9c9c9c]" />
            <span className="font-sans text-[9px] tracking-[0.34em] text-[#666]">SCROLL</span>
          </button>
        </section>

        {/* About */}
        <section id="about" className="bg-white px-6 py-24 md:px-10 md:py-36">
          <div className="mx-auto max-w-4xl">
            <SectionLabel>ABOUT US</SectionLabel>

            <div className="max-w-3xl font-serif text-[16px] leading-[2.25] tracking-[0.06em] text-[#303030] md:text-[19px] md:leading-[2.2]">
              <p>人と人、商品と事業、地域と未来。</p>
              <p>ご縁を大切に、それぞれの可能性を引き出し、</p>
              <p>新たな価値を生み出していきます。</p>
            </div>
          </div>
        </section>

        {/* Business */}
        <section id="business" className="bg-white px-6 pb-24 md:px-10 md:pb-36">
          <div className="mx-auto max-w-4xl">
            <SectionLabel>OUR BUSINESS</SectionLabel>

            <div className="border-t border-[#e8e6e1]">
              <AccordionItem
                id="commerce"
                title="Commerce"
                subtitle="物販"
                icon={<ShoppingCart size={24} strokeWidth={1.25} />}
                isOpen={openSection === "commerce"}
                onToggle={() => toggleSection("commerce")}
              >
                <div className="max-w-3xl space-y-7 font-sans text-[14px] leading-[2] text-[#444] md:text-[15px]">
                  <div>
                    <p className="mb-4 font-serif text-[18px] leading-relaxed text-[#222] md:text-[21px]">
                      国内外の優れた商品を、確かな価値とともに。
                    </p>
                    <p>日本の優れた商品を国内外へ。</p>
                    <p>そして、海外の魅力ある商品を正規ルートで日本へ。</p>
                    <p className="mt-3">ECを通じて、価値ある商品を安心してお届けしています。</p>
                  </div>

                  <div>
                    <p className="mb-2 flex items-center gap-2 font-medium text-[#222]">
                      <span className="h-2 w-2 rounded-full bg-[#FFD600]" />
                      販売チャネル
                    </p>
                    <p>楽天市場 / Amazon / Giftmall / eBay / Shopee / メルカリShops など</p>
                  </div>

                  <div>
                    <p className="mb-2 flex items-center gap-2 font-medium text-[#222]">
                      <span className="h-2 w-2 rounded-full bg-[#FFD600]" />
                      取扱実績
                    </p>
                    <p>日本製品・海外ブランド・オリジナル商品の企画・販売</p>
                  </div>

                  <p className="text-[12px] tracking-[0.04em] text-[#666]">※ HAV-A-HANK 正規販売店</p>
                </div>
              </AccordionItem>

              <AccordionItem
                id="creative"
                title="Creative"
                subtitle="デザイン・制作"
                icon={<PencilLine size={23} strokeWidth={1.25} />}
                isOpen={openSection === "creative"}
                onToggle={() => toggleSection("creative")}
              >
                <div className="max-w-3xl space-y-7 font-sans text-[14px] leading-[2] text-[#444] md:text-[15px]">
                  <div>
                    <p className="mb-4 font-serif text-[18px] leading-relaxed text-[#222] md:text-[21px]">
                      伝えたい想いを、伝わるデザインへ。
                    </p>
                    <p>
                      ロゴや販促物の制作から、Webサイト制作、SNS運用サポートまで、ブランドの魅力を一貫して形にします。
                    </p>
                  </div>

                  <div>
                    <p className="mb-3 flex items-center gap-2 font-medium text-[#222]">
                      <span className="h-2 w-2 rounded-full bg-[#FFD600]" />
                      対応内容
                    </p>
                    <ul className="grid gap-x-10 gap-y-1 md:grid-cols-2">
                      <li>・ロゴ制作</li>
                      <li>・名刺・ショップカード</li>
                      <li>・チラシ・パンフレット</li>
                      <li>・看板・POP</li>
                      <li>・パッケージ</li>
                      <li>・ノベルティ</li>
                      <li>・Webサイト制作</li>
                      <li>・Instagram・食べログ・Googleなどの運用サポート</li>
                    </ul>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem
                id="support"
                title="Business Support"
                subtitle="事業支援"
                icon={<FileText size={23} strokeWidth={1.25} />}
                isOpen={openSection === "support"}
                onToggle={() => toggleSection("support")}
              >
                <div className="max-w-3xl space-y-7 font-sans text-[14px] leading-[2] text-[#444] md:text-[15px]">
                  <div>
                    <p className="mb-4 font-serif text-[18px] leading-relaxed text-[#222] md:text-[21px]">
                      事業の成長を、実務と戦略の両面からサポートします。
                    </p>
                    <p>
                      補助金活用や事業計画の作成だけでなく、販路拡大やEC運営まで、実践的な支援を行っています。
                    </p>
                  </div>

                  <div>
                    <p className="mb-3 flex items-center gap-2 font-medium text-[#222]">
                      <span className="h-2 w-2 rounded-full bg-[#FFD600]" />
                      サポート内容
                    </p>
                    <ul className="space-y-1">
                      <li>・補助金活用支援</li>
                      <li>・事業計画策定</li>
                      <li>・販路拡大支援</li>
                      <li>・商品企画</li>
                      <li>・EC運営サポート</li>
                      <li>・その他、事業に関するご相談</li>
                    </ul>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem
                id="original"
                title="オリジナル制作"
                subtitle="ギフトブランド"
                badge="準備中"
                icon={<Gift size={23} strokeWidth={1.25} />}
                isOpen={openSection === "original"}
                onToggle={() => toggleSection("original")}
              >
                <div className="max-w-3xl space-y-6 font-sans text-[14px] leading-[2] text-[#444] md:text-[15px]">
                  <p className="font-serif text-[18px] leading-relaxed text-[#222] md:text-[21px]">
                    大切な想いを、かたちに。
                  </p>
                  <p>
                    出産祝い、誕生日、記念日、退職祝いなど、人生のさまざまな節目に寄り添うギフトを企画・制作しています。
                  </p>
                  <p>
                    日本の優れた素材や製品に、自社加工を施し、想いを込めたオリジナルギフトをお届けするブランドを準備中です。
                  </p>
                </div>
              </AccordionItem>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section id="philosophy" className="bg-[#fcfbf8] px-6 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-4xl border-t border-[#e8e6e1]">
            <AccordionItem
              id="philosophy-item"
              title="PHILOSOPHY"
              isOpen={openSection === "philosophy"}
              onToggle={() => toggleSection("philosophy")}
            >
              <div className="grid gap-10 md:grid-cols-3 md:gap-12">
                <div>
                  <p className="mb-4 flex items-center gap-2 font-serif text-[13px] tracking-[0.08em] text-[#555]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FFD600]" />
                    Mission
                  </p>
                  <p className="mb-4 font-serif text-[17px] leading-[1.8] text-[#222]">
                    縁を尊び、可能性を最大化する。
                  </p>
                  <p className="font-sans text-[13px] leading-[2] text-[#555]">
                    人と人、商品と市場、地域と未来。一つひとつのご縁を大切にし、それぞれが持つ可能性を最大限に引き出します。
                  </p>
                </div>

                <div>
                  <p className="mb-4 flex items-center gap-2 font-serif text-[13px] tracking-[0.08em] text-[#555]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FFD600]" />
                    Vision
                  </p>
                  <p className="mb-4 font-serif text-[17px] leading-[1.8] text-[#222]">
                    共に未来を切り拓く、最良のパートナー。
                  </p>
                  <p className="font-sans text-[13px] leading-[2] text-[#555]">
                    目先の成果だけではなく、長く信頼される存在として、お客様とともに未来を築いていきます。
                  </p>
                </div>

                <div>
                  <p className="mb-4 flex items-center gap-2 font-serif text-[13px] tracking-[0.08em] text-[#555]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FFD600]" />
                    Value
                  </p>
                  <p className="mb-4 font-serif text-[17px] leading-[1.8] text-[#222]">誠実、創造、持続。</p>
                  <p className="font-sans text-[13px] leading-[2] text-[#555]">
                    誠実な姿勢を大切に、新しい価値を生み出し、持続可能な成長につながる仕事を積み重ねます。
                  </p>
                </div>
              </div>
            </AccordionItem>
          </div>
        </section>

        {/* Company Profile */}
        <section id="company" className="bg-[#fcfbf8] px-6 pb-24 md:px-10 md:pb-32">
          <div className="mx-auto max-w-4xl border-t border-[#e8e6e1]">
            <AccordionItem
              id="company-item"
              title="COMPANY PROFILE"
              isOpen={openSection === "company"}
              onToggle={() => toggleSection("company")}
            >
              <dl className="font-sans text-[13px] leading-[1.9] text-[#444] md:text-[14px]">
                {[
                  ["Company Name", "株式会社エニシャル"],
                  ["Established", "2024年9月"],
                  ["Representative", "廣瀬 陽介"],
                  ["Head", "岐阜県揖斐郡揖斐川町日坂1178"],
                  ["Office", "岐阜県本巣郡北方町高屋条里3-37"],
                  ["Email", "info@enitial.jp"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="grid gap-1 border-b border-[#e8e6e1] py-4 last:border-b-0 md:grid-cols-[170px_1fr] md:gap-8"
                  >
                    <dt className="text-[10px] tracking-[0.16em] text-[#777] uppercase">{label}</dt>
                    <dd className="text-[#222]">{value}</dd>
                  </div>
                ))}
              </dl>
            </AccordionItem>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-white px-6 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-4xl">
            <p className="mb-8 font-serif text-[13px] tracking-[0.28em] text-[#222]">CONTACT</p>

            <a
              href="mailto:info@enitial.jp?subject=お問い合わせ"
              className="group flex w-full items-center gap-4 border border-[#FFD600]/80 px-6 py-5 transition-colors hover:bg-[#fffdf2] md:px-8 md:py-6"
            >
              <Mail size={21} strokeWidth={1.25} className="shrink-0" />
              <span className="flex-1 font-serif text-[14px] tracking-[0.09em] md:text-[16px]">
                お問い合わせはこちらから
              </span>
              <ArrowRight
                size={21}
                strokeWidth={1.25}
                className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#eceae5] bg-white px-6 py-10 md:px-10">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-5 font-sans text-[10px] tracking-[0.12em] text-[#888] md:flex-row">
          <p>© ENITIAL Co., Ltd. All Rights Reserved.</p>
          <a href="/privacy-policy" className="transition-colors hover:text-[#222]">
            Privacy Policy
          </a>
        </div>
      </footer>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes heroFromLeft {
          from {
            opacity: 0;
            transform: translateX(-28px);
            filter: blur(4px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
            filter: blur(0);
          }
        }

        @keyframes heroFromRight {
          from {
            opacity: 0;
            transform: translateX(28px);
            filter: blur(4px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
            filter: blur(0);
          }
        }

        @keyframes heroFade {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-from-left {
          animation: heroFromLeft 1.7s cubic-bezier(0.22, 1, 0.36, 1) 0.15s forwards;
        }

        .hero-line {
          animation: heroFade 1.5s ease-out 0.65s forwards;
        }

        .hero-from-right {
          animation: heroFromRight 1.7s cubic-bezier(0.22, 1, 0.36, 1) 0.45s forwards;
        }

        .hero-fade {
          animation: heroFade 1.5s ease-out 1.05s forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          .hero-from-left,
          .hero-from-right,
          .hero-line,
          .hero-fade {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
          }
        }
      `}</style>
    </div>
  )
}
