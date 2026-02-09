"use client"

import React, { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export default function Homepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#fcfcfc] text-[#333] font-serif min-h-screen selection:bg-gray-200">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#fcfcfc]/95 backdrop-blur-md border-b border-gray-100 font-sans">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <img 
              src="/images/logo-horizontal.png" 
              alt="ENITIAL Logo" 
              className="h-9 md:h-10 w-auto" 
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-10 text-[13px] tracking-widest text-gray-600 uppercase font-medium">
            <button onClick={() => go('philosophy')} className="hover:text-black transition-colors">Philosophy</button>
            <button onClick={() => go('services')} className="hover:text-black transition-colors">Services</button>
            <button onClick={() => go('contact')} className="hover:text-black transition-colors font-bold text-gray-900 border-b border-gray-900">Contact</button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100 px-6 py-10 space-y-8 text-base tracking-[0.2em] uppercase text-gray-700 font-sans">
            <button onClick={() => go('philosophy')} className="block w-full text-left font-light">Philosophy</button>
            <button onClick={() => go('services')} className="block w-full text-left font-light">Services</button>
            <button onClick={() => go('contact')} className="block w-full text-left font-light">Contact</button>
          </div>
        )}
      </nav>

      {/* 1. Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-4">
        <div className="mb-10 animate-fadeIn text-gray-800">
          <h1 className="text-4xl md:text-5xl tracking-[0.3em] font-serif uppercase">
            Enitial
          </h1>
        </div>
        <div className="h-[1px] w-16 bg-gray-400 mb-10"></div>
        <p className="text-lg md:text-xl tracking-[0.4em] text-gray-600 font-light ml-[0.4em]">縁を、形に。</p>
      </section>

      {/* 2. Philosophy & Introduction */}
      <section id="philosophy" className="max-w-4xl mx-auto py-40 px-6 border-t border-gray-100 text-left text-gray-800">
        <div className="mb-40">
           <p className="text-lg md:text-xl leading-[2.2] font-light text-gray-700 mb-12">
            株式会社エニシャルは『顧客との縁を大切にし、その可能性を最大化する』という理念のもと、お客様と共に成長していくパートナーを目指しています。
            事業計画策定から補助金申請サポート、営業代行、ネットショップ運営、デザインディレクションまで、お客様のビジネス成長を多角的にサポートいたします。
          </p>
          <div className="text-center">
            <p className="text-[13px] tracking-[0.5em] text-gray-500 uppercase mb-3 font-sans font-bold italic">Origin</p>
            <p className="text-base tracking-[0.15em] text-gray-600 italic">EN × POTENTIAL</p>
          </div>
        </div>

        <div className="grid gap-36">
          <div>
            <h3 className="text-[12px] tracking-[0.3em] text-gray-500 mb-6 uppercase font-sans font-bold border-l-2 border-gray-400 pl-4">Mission</h3>
            <p className="text-2xl md:text-3xl leading-relaxed font-light text-gray-900 mb-8 font-serif">縁を尊び、可能性を最大化する。</p>
            <p className="text-base md:text-lg text-gray-700 leading-loose max-w-3xl font-sans font-light">
              顧客との縁を大切にし、製品やサービスのポテンシャルを最大限に引き出すことで、持続可能な成長と価値創造を実現します。
            </p>
          </div>

          <div>
            <h3 className="text-[12px] tracking-[0.3em] text-gray-500 mb-6 uppercase font-sans font-bold border-l-2 border-gray-400 pl-4">Vision</h3>
            <p className="text-2xl md:text-3xl leading-relaxed font-light text-gray-900 mb-8 font-serif">共に未来を切り拓く、最良のパートナー。</p>
            <p className="text-base md:text-lg text-gray-700 leading-loose max-w-3xl font-sans font-light">
              顧客のビジネスを成功へ導く最良のパートナーとして、革新的で信頼されるOEM企画や販路開拓のリーダーとなり、共に未来を切り拓く。
            </p>
          </div>

          <div>
            <h3 className="text-[12px] tracking-[0.3em] text-gray-500 mb-6 uppercase font-sans font-bold border-l-2 border-gray-400 pl-4">Value</h3>
            <p className="text-2xl md:text-3xl leading-relaxed font-light text-gray-900 mb-8 font-serif">誠実、創造、持続。</p>
            <p className="text-base md:text-lg text-gray-700 leading-loose max-w-3xl font-sans font-light">
              顧客中心主義・創造性と革新・誠実と信頼・持続可能な成長を核として、すべての活動において顧客のニーズを最優先し、長期的な信頼関係を築きます。
            </p>
          </div>
        </div>
      </section>

      {/* 3. Services */}
      <section id="services" className="bg-white py-40 px-6 border-y border-gray-100 font-sans">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-32">
            <h2 className="text-[13px] tracking-[0.5em] text-gray-500 uppercase font-bold">Services</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-20 text-left">
            {/* 01 Commerce */}
            <div className="space-y-10">
              <div className="space-y-3">
                <span className="text-[13px] text-gray-400 tracking-[0.2em] font-bold italic">01</span>
                <h3 className="text-xl md:text-2xl tracking-[0.1em] font-light font-serif text-gray-900 border-b border-gray-100 pb-3 uppercase">Commerce ｜ 物販</h3>
              </div>
              <p className="text-[15px] text-gray-700 leading-loose min-h-[100px] font-light">
                自ら売り、市場を知る。楽天・メルカリ・eBay・Shopeeでの販売実績を活かし、独自の選定と実務を通じて市場と繋がります。
              </p>
              <ul className="text-[16px] text-gray-800 space-y-5 pt-8 border-t border-gray-100 font-medium">
                <li>・国内外EC運用</li>
                <li>・販売実務支援 / テストマーケ</li>
                <li>・営業代行 / 販路拡大支援</li>
              </ul>
            </div>

            {/* 02 Creative */}
            <div className="space-y-10">
              <div className="space-y-3">
                <span className="text-[13px] text-gray-400 tracking-[0.2em] font-bold italic">02</span>
                <h3 className="text-xl md:text-2xl tracking-[0.1em] font-light font-serif text-gray-900 border-b border-gray-100 pb-3 uppercase">Creative ｜ 表現</h3>
              </div>
              <p className="text-[15px] text-gray-700 leading-loose min-h-[100px] font-light">
                意志を可視化し、信頼を形にする。名刺一枚から看板・店舗サインまで、コンセプト設計から納品まで一貫して対応します。
              </p>
              <ul className="text-[16px] text-gray-800 space-y-5 pt-8 border-t border-gray-100 font-medium">
                <li>・名刺 / カード / ポスター制作</li>
                <li>・サインデザイン / 看板 / 什器</li>
                <li>・ディレクション / 印刷・納品</li>
              </ul>
            </div>

            {/* 03 Consulting */}
            <div className="space-y-10">
              <div className="space-y-3">
                <span className="text-[13px] text-gray-400 tracking-[0.2em] font-bold italic">03</span>
                <h3 className="text-xl md:text-2xl tracking-[0.1em] font-light font-serif text-gray-900 border-b border-gray-100 pb-3 uppercase">Consulting ｜ 支援</h3>
              </div>
              <p className="text-[15px] text-gray-700 leading-loose min-h-[100px] font-light">
                現場の知見を、確かな成長の土台に。金融機関や補助金申請に対応可能な「生きた計画書」の策定を、実践者の視点で支援します。
              </p>
              <ul className="text-[16px] text-gray-800 space-y-5 pt-8 border-t border-gray-100 font-medium">
                <li>・補助金申請サポート</li>
                <li>・事業計画策定 / 実現性検証</li>
                <li>・プレイヤー視点の伴走助言</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Contact Form */}
      <section id="contact" className="py-40 px-6 bg-[#fcfcfc] border-b border-gray-100 font-sans text-left">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-24 space-y-4">
            <h2 className="text-[13px] tracking-[0.5em] text-gray-500 uppercase font-bold">Contact</h2>
            <p className="text-2xl font-light text-gray-900 font-serif">ご相談はこちらから</p>
            <p className="text-sm text-gray-500 tracking-wider font-light uppercase">2営業日以内にご連絡いたします</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-12">
            <div className="grid md:grid-cols-2 gap-10 text-gray-800">
              <div className="space-y-3">
                <label className="text-xs tracking-widest text-gray-600 uppercase font-bold">氏名 *</label>
                <input required name="name" type="text" className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-black outline-none transition-colors text-lg" />
              </div>
              <div className="space-y-3">
                <label className="text-xs tracking-widest text-gray-600 uppercase font-bold">会社名 *</label>
                <input required name="company" type="text" className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-black outline-none transition-colors text-lg" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10 text-gray-800">
              <div className="space-y-3">
                <label className="text-xs tracking-widest text-gray-600 uppercase font-bold">メールアドレス *</label>
                <input required name="email" type="email" className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-black outline-none transition-colors text-lg" />
              </div>
              <div className="space-y-3">
                <label className="text-xs tracking-widest text-gray-600 uppercase font-bold">電話番号 *</label>
                <input required name="tel" type="tel" className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-black outline-none transition-colors text-lg" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10 text-gray-800">
              <div className="space-y-3">
                <label className="text-xs tracking-widest text-gray-600 uppercase font-bold">ご相談内容 *</label>
                <select required name="category" className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-black outline-none transition-colors text-lg appearance-none cursor-pointer">
                  <option value="">選択してください</option>
                  <option value="事業計画策定">事業計画策定</option>
                  <option value="補助金申請サポート">補助金申請サポート</option>
                  <option value="営業代行">営業代行</option>
                  <option value="ネットショップ運営・販売">ネットショップ運営・販売</option>
                  <option value="デザイン制作">デザイン制作</option>
                  <option value="その他">その他</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-xs tracking-widest text-gray-600 uppercase font-bold">予算（任意）</label>
                <select name="budget" className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-black outline-none transition-colors text-lg appearance-none cursor-pointer">
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

            <div className="space-y-3 text-gray-800">
              <label className="text-xs tracking-widest text-gray-600 uppercase font-bold">お問い合わせ内容 *</label>
              <textarea required name="message" rows={5} className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-black outline-none transition-colors text-lg resize-none"></textarea>
            </div>

            <div className="flex flex-col items-center space-y-10 pt-16">
              <label className="flex items-center space-x-4 cursor-pointer text-gray-800">
                <input required type="checkbox" className="w-6 h-6 border-gray-300 rounded focus:ring-black cursor-pointer shadow-sm" />
                <span className="text-sm tracking-widest uppercase font-bold">
                  <Link href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">
                    プライバシーポリシー
                  </Link>
                  に同意します *
                </span>
              </label>
              <button type="submit" className="group relative inline-block px-24 py-6 border border-gray-200 text-sm tracking-[0.4em] overflow-hidden transition-all hover:border-black text-gray-900 font-bold uppercase">
                <span className="relative z-10 group-hover:text-white transition-colors duration-500">送信する</span>
                <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* 5. Company Info & Footer */}
      <footer className="py-40 px-6 bg-[#fcfcfc] font-sans">
        <div className="max-w-4xl mx-auto space-y-28 text-center text-gray-600">
          <h2 className="text-[14px] tracking-[0.5em] text-gray-500 uppercase font-bold border-b border-gray-100 inline-block pb-3">Company Profile</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 text-left max-w-4xl mx-auto font-light text-[15px] leading-[2.5]">
            <div className="space-y-12">
              <div>
                <span className="text-xs text-gray-400 tracking-widest uppercase block mb-3 font-bold border-l-4 border-gray-100 pl-4">Company Name</span>
                <span className="text-gray-900 text-xl font-medium">株式会社エニシャル</span>
              </div>
              <div>
                <span className="text-xs text-gray-400 tracking-widest uppercase block mb-3 font-bold border-l-4 border-gray-100 pl-4">Established</span>
                <span className="text-gray-900 text-xl font-medium">2024年9月</span>
              </div>
              <div>
                <span className="text-xs text-gray-400 tracking-widest uppercase block mb-3 font-bold border-l-4 border-gray-100 pl-4">Representative</span>
                <span className="text-gray-900 text-xl font-medium italic">廣瀬 陽介</span>
              </div>
            </div>
            <div className="space-y-12">
              <div>
                <span className="text-xs text-gray-400 tracking-widest uppercase block mb-3 font-bold border-l-4 border-gray-100 pl-4">Location</span>
                <div className="space-y-4 text-gray-900 text-base">
                  <p><span className="text-[11px] text-gray-500 mr-4 uppercase font-bold bg-gray-50 px-3 py-1 font-sans">Head</span>岐阜県揖斐郡揖斐川町日坂1178</p>
                  <p><span className="text-[11px] text-gray-500 mr-4 uppercase font-bold bg-gray-50 px-3 py-1 font-sans">Office</span>岐阜県本巣郡北方町高屋条里3-37</p>
                </div>
              </div>
              <div>
                <span className="text-xs text-gray-400 tracking-widest uppercase block mb-3 font-bold border-l-4 border-gray-100 pl-4">Email</span>
                <span className="text-gray-900 text-xl font-medium">info@enitial.jp</span>
              </div>
            </div>
          </div>
          <p className="text-[11px] text-gray-400 tracking-[0.3em] uppercase pt-20 text-center font-serif opacity-80">
            &copy; ENITIAL Co., Ltd. All Rights Reserved.
          </p>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 2s ease-out forwards; }
      `}</style>
    </div>
  )
}
