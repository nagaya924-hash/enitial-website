"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, Menu, X } from "lucide-react"
import Image from "next/image"

export default function Homepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // お問い合わせフォームの送信処理（メールアプリ起動）
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const body = `
【お問い合わせ内容】
氏名: ${formData.get('name')}
会社名: ${formData.get('company')}
メール: ${formData.get('email')}
電話: ${formData.get('tel')}
内容: ${formData.get('category')}
予算: ${formData.get('budget')}

メッセージ:
${formData.get('message')}
    `.trim();

    window.location.href = `mailto:info@enitial.jp?subject=お問い合わせ（${formData.get('name')}様）&body=${encodeURIComponent(body)}`;
  };

  const go = (id: string) => {
    setIsMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#fcfcfc] text-[#333] font-serif min-h-screen selection:bg-gray-200">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#fcfcfc]/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl tracking-[0.2em] font-light">ENITIAL</div>
          
          <div className="hidden md:flex items-center space-x-12 text-[11px] tracking-widest text-gray-500 uppercase">
            <button onClick={() => go('philosophy')} className="hover:text-black transition-colors">Philosophy</button>
            <button onClick={() => go('services')} className="hover:text-black transition-colors">Services</button>
            <button onClick={() => go('contact')} className="hover:text-black transition-colors">Contact</button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100 px-6 py-8 space-y-6 text-[11px] tracking-[0.3em] uppercase text-gray-500">
            <button onClick={() => go('philosophy')} className="block w-full text-left">Philosophy</button>
            <button onClick={() => go('services')} className="block w-full text-left">Services</button>
            <button onClick={() => go('contact')} className="block w-full text-left">Contact</button>
          </div>
        )}
      </nav>

      {/* 1. Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl tracking-[0.3em] font-light mb-8">ENITIAL</h1>
        <div className="h-[1px] w-12 bg-gray-300 mb-8"></div>
        <p className="text-sm md:text-base tracking-[0.5em] text-gray-400 font-light ml-[0.5em]">縁を、形に。</p>
      </section>

      {/* 2. Philosophy & Origin */}
      <section id="philosophy" className="max-w-4xl mx-auto py-40 px-6 border-t border-gray-100">
        <div className="text-center mb-32">
          <p className="text-[10px] tracking-[0.6em] text-gray-300 uppercase mb-4">Origin</p>
          <p className="text-sm tracking-[0.2em] text-gray-400 italic font-sans">EN × POTENTIAL</p>
        </div>

        <div className="grid gap-32">
          <div>
            <h3 className="text-[9px] tracking-[0.4em] text-gray-300 mb-8 uppercase">Mission</h3>
            <p className="text-xl md:text-2xl leading-relaxed font-light text-gray-800 mb-6">縁を尊び、可能性を最大化する。</p>
            <p className="text-sm text-gray-500 leading-loose max-w-2xl font-sans">
              顧客との縁を大切にし、製品やサービスのポテンシャルを最大限に引き出すことで、持続可能な成長と価値創造を実現します。
            </p>
          </div>

          <div>
            <h3 className="text-[9px] tracking-[0.4em] text-gray-300 mb-8 uppercase">Vision</h3>
            <p className="text-xl md:text-2xl leading-relaxed font-light text-gray-800 mb-6">共に未来を切り拓く、最良のパートナー。</p>
            <p className="text-sm text-gray-500 leading-loose max-w-2xl font-sans">
              革新的で信頼されるOEM企画や販路開拓のリーダーとなり、顧客のビジネスを成功へと導きます。
            </p>
          </div>

          <div>
            <h3 className="text-[9px] tracking-[0.4em] text-gray-300 mb-8 uppercase">Value</h3>
            <p className="text-xl md:text-2xl leading-relaxed font-light text-gray-800 mb-6 text-gray-800">誠実、創造、持続。</p>
            <p className="text-sm text-gray-500 leading-loose max-w-2xl font-sans">
              顧客中心主義・創造性と革新・誠実と信頼・持続可能な成長を核とし、長期的な信頼関係を築きます。
            </p>
          </div>
        </div>
      </section>

      {/* 3. Services */}
      <section id="services" className="bg-white py-40 px-6 border-y border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-32">
            <h2 className="text-[10px] tracking-[0.6em] text-gray-400 uppercase">Services</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-16 lg:gap-24">
            {/* 01 Commerce */}
            <div className="space-y-8">
              <div className="space-y-3">
                <span className="text-[9px] text-gray-300 tracking-[0.3em] font-sans">01</span>
                <h3 className="text-lg tracking-[0.2em] font-light text-gray-800">COMMERCE ｜ 商い</h3>
              </div>
              <p className="text-[13px] text-gray-600 leading-loose font-sans min-h-[100px]">
                自ら売り、市場を知る。楽天・メルカリ・eBay・Shopeeでの販売実績を活かし、独自の選定と実務を通じて市場と繋がります。
              </p>
              <ul className="text-[10px] text-gray-400 space-y-3 pt-6 border-t border-gray-50 font-sans tracking-wider uppercase">
                <li>国内外EC運用 (Shopee対応)</li>
                <li>販売実務支援 / テストマーケ</li>
                <li>営業代行 / 販路拡大支援</li>
              </ul>
            </div>

            {/* 02 Creative */}
            <div className="space-y-8">
              <div className="space-y-3">
                <span className="text-[9px] text-gray-300 tracking-[0.3em] font-sans">02</span>
                <h3 className="text-lg tracking-[0.2em] font-light text-gray-800">CREATIVE ｜ 表現</h3>
              </div>
              <p className="text-[13px] text-gray-600 leading-loose font-sans min-h-[100px]">
                意志を可視化し、信頼を形にする。名刺一枚から看板・店舗サインまで、コンセプト設計から納品まで一貫して対応します。
              </p>
              <ul className="text-[10px] text-gray-400 space-y-3 pt-6 border-t border-gray-50 font-sans tracking-wider uppercase">
                <li>名刺 / カード / ポスター制作</li>
                <li>サインデザイン / 看板 / 什器</li>
                <li>ディレクション / 印刷・納品</li>
              </ul>
            </div>

            {/* 03 Consulting */}
            <div className="space-y-8">
              <div className="space-y-3">
                <span className="text-[9px] text-gray-300 tracking-[0.3em] font-sans">03</span>
                <h3 className="text-lg tracking-[0.2em] font-light text-gray-800">CONSULTING ｜ 支援</h3>
              </div>
              <p className="text-[13px] text-gray-600 leading-loose font-sans min-h-[100px]">
                現場の知見を、確かな成長の土台に。金融機関や補助金申請に対応可能な「生きた計画書」の策定を、実践者の視点で支援します。
              </p>
              <ul className="text-[10px] text-gray-400 space-y-3 pt-6 border-t border-gray-50 font-sans tracking-wider uppercase">
                <li>補助金申請サポート</li>
                <li>事業計画策定 / 実現性検証</li>
                <li>プレイヤー視点の伴走助言</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Contact Form */}
      <section id="contact" className="py-40 px-6 bg-[#fcfcfc] border-b border-gray-100">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-24 space-y-4">
            <h2 className="text-[10px] tracking-[0.6em] text-gray-400 uppercase">Contact</h2>
            <p className="text-lg font-light text-gray-800">事業計画のご相談から、補助金申請、商いまで。</p>
            <p className="text-[11px] text-gray-400 tracking-wider font-sans uppercase">2営業日以内にご連絡いたします</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-16 font-sans">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-2">
                <label className="text-[9px] tracking-widest text-gray-400 uppercase">氏名 *</label>
                <input required name="name" type="text" className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-black outline-none transition-colors text-sm" />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] tracking-widest text-gray-400 uppercase">会社名 *</label>
                <input required name="company" type="text" className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-black outline-none transition-colors text-sm" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-2">
                <label className="text-[9px] tracking-widest text-gray-400 uppercase">メールアドレス *</label>
                <input required name="email" type="email" className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-black outline-none transition-colors text-sm" />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] tracking-widest text-gray-400 uppercase">電話番号 *</label>
                <input required name="tel" type="tel" className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-black outline-none transition-colors text-sm" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-2">
                <label className="text-[9px] tracking-widest text-gray-400 uppercase">ご相談内容 *</label>
                <select required name="category" className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-black outline-none transition-colors text-sm appearance-none cursor-pointer">
                  <option value="">選択してください</option>
                  <option value="事業計画策定">事業計画策定</option>
                  <option value="補助金申請サポート">補助金申請サポート</option>
                  <option value="営業代行">営業代行</option>
                  <option value="ネットショップ運営・販売">ネットショップ運営・販売</option>
                  <option value="デザイン制作">デザイン制作</option>
                  <option value="その他">その他</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[9px] tracking-widest text-gray-400 uppercase">予算（任意）</label>
                <select name="budget" className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-black outline-none transition-colors text-sm appearance-none cursor-pointer">
                  <option value="未定">選択してください</option>
                  <option value="〜100万円">〜100万円</option>
                  <option value="100万円〜300万円">100万円〜300万円</option>
                  <option value="300万円〜500万円">300万円〜500万円</option>
                  <option value="500万円〜1000万円">500万円〜1000万円</option>
                  <option value="1000万円以上">1000万円以上</option>
                  <option value="相談して決めたい">相談して決めたい</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[9px] tracking-widest text-gray-400 uppercase">お問い合わせ内容 *</label>
              <textarea required name="message" rows={5} className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-black outline-none transition-colors text-sm resize-none"></textarea>
            </div>

            <div className="flex flex-col items-center space-y-12 pt-10">
              <label className="flex items-center space-x-4 cursor-pointer">
                <input required type="checkbox" className="w-4 h-4 border-gray-300 rounded focus:ring-black" />
                <span className="text-[10px] text-gray-400 tracking-widest uppercase">プライバシーポリシーに同意します *</span>
              </label>
              <button type="submit" className="group relative inline-block px-24 py-5 border border-gray-200 text-[10px] tracking-[0.5em] overflow-hidden transition-all hover:border-black">
                <span className="relative z-10 group-hover:text-white transition-colors duration-500 uppercase">Submit Message</span>
                <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* 5. Company Info & Footer */}
      <footer className="py-40 px-6 bg-[#fcfcfc]">
        <div className="max-w-4xl mx-auto space-y-24">
          <div className="text-center space-y-12">
            <h2 className="text-[10px] tracking-[0.6em] text-gray-300 uppercase">Company Profile</h2>
            <div className="text-[13px] leading-[2.5] text-gray-600 font-light space-y-12">
              <p className="text-gray-400 text-[11px] italic tracking-[0.2em] mb-12 font-sans uppercase">
                &ldquo;Embrace Connection, Maximize Potential&rdquo;
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 text-left max-w-2xl mx-auto font-sans">
                <div className="space-y-8">
                  <div>
                    <span className="text-[9px] text-gray-400 tracking-widest uppercase block mb-2">Company Name</span>
                    <span>株式会社エニシャル</span>
                  </div>
                  <div>
                    <span className="text-[9px] text-gray-400 tracking-widest uppercase block mb-2">Representative</span>
                    <span>廣瀬 陽介</span>
                  </div>
                </div>
                <div className="space-y-8">
                  <div>
                    <span className="text-[9px] text-gray-400 tracking-widest uppercase block mb-2">Location</span>
                    <div className="space-y-4">
                      <p><span className="text-[9px] text-gray-300 mr-3 uppercase font-bold">Head</span>岐阜県揖斐郡揖斐川町日坂1178</p>
                      <p><span className="text-[9px] text-gray-300 mr-3 uppercase font-bold">Office</span>岐阜県本巣郡北方町高屋条里3-37</p>
                    </div>
                  </div>
                  <div>
                    <span className="text-[9px] text-gray-400 tracking-widest uppercase block mb-2">Email</span>
                    <span>info@enitial.jp</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-[9px] text-gray-300 text-center tracking-[0.3em] uppercase pt-20">
            &copy; ENITIAL Co., Ltd.
          </p>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 1.5s ease-out forwards; }
      `}</style>
    </div>
  )
}
