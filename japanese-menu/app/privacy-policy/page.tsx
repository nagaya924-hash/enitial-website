"use client"

import React from 'react'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#fcfcfc] text-[#333] font-serif min-h-screen selection:bg-gray-200">
      
      {/* Navigation - トップページと共通のトーン */}
      <nav className="fixed top-0 w-full z-50 bg-[#fcfcfc]/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-xl tracking-[0.2em] font-light hover:opacity-60 transition-opacity">
            ENITIAL
          </Link>
          <Link href="/" className="text-[10px] tracking-widest text-gray-400 uppercase hover:text-black transition-colors">
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto py-40 px-6">
        <h1 className="text-2xl md:text-3xl tracking-[0.2em] font-light mb-24 text-center text-gray-800">
          Privacy Policy
        </h1>
        
        <div className="space-y-20 text-sm leading-loose text-gray-600 font-sans">
          <p className="text-gray-500 mb-12">
            株式会社エニシャル（以下、「当社」）は、お客様から取得する個人情報を適切に取り扱うことを重要な責務と考え、以下の方針に基づき個人情報を保護いたします。
          </p>

          {/* 各セクションをゆったり配置 */}
          <section className="space-y-6">
            <h2 className="text-gray-800 font-medium tracking-wider text-base border-l-2 border-gray-100 pl-4">
              1. 取得する情報
            </h2>
            <p className="pl-5">
              当社は、お問い合わせフォーム・サービス利用時などに以下の情報を取得する場合があります：
              <br />
              <span className="text-gray-400">氏名、メールアドレス、電話番号、住所、その他お問い合わせ内容。</span>
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-gray-800 font-medium tracking-wider text-base border-l-2 border-gray-100 pl-4">
              2. 利用目的
            </h2>
            <div className="pl-5 space-y-2">
              <p>当社は、取得した情報を以下の目的で利用します：</p>
              <ul className="space-y-1 text-gray-500">
                <li>・お問い合わせへの回答</li>
                <li>・サービス提供およびサポート</li>
                <li>・新サービスやご案内のご連絡</li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-gray-800 font-medium tracking-wider text-base border-l-2 border-gray-100 pl-4">
              3. 第三者提供
            </h2>
            <p className="pl-5">当社は、法令に基づく場合を除き、取得した個人情報を第三者に提供いたしません。</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-gray-800 font-medium tracking-wider text-base border-l-2 border-gray-100 pl-4">
              4. 安全管理
            </h2>
            <p className="pl-5">当社は、個人情報への不正アクセスや漏洩を防止するため、適切な安全管理措置を講じます。</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-gray-800 font-medium tracking-wider text-base border-l-2 border-gray-100 pl-4">
              5. 開示・訂正・削除
            </h2>
            <p className="pl-5">ご本人からの請求に応じ、保有する個人情報の開示・訂正・削除に対応いたします。</p>
          </section>

          <section className="space-y-8 border-t border-gray-100 pt-20">
            <h2 className="text-gray-800 font-medium tracking-wider text-base">
              6. お問い合わせ窓口
            </h2>
            <div className="pl-5 text-gray-500 space-y-2 text-[13px] leading-relaxed">
              <p className="text-gray-800">株式会社エニシャル</p>
              <p>〒501-0605 岐阜県揖斐郡揖斐川町日坂1178</p>
              <p className="font-sans">info@enitial.jp</p>
            </div>
          </section>

          <footer className="pt-24 text-center">
            <p className="text-[10px] text-gray-300 tracking-[0.4em] uppercase">
              制定日: 2025年9月13日
            </p>
          </footer>
        </div>
      </main>

      {/* Footer - シンプルに締める */}
      <footer className="py-20 text-center border-t border-gray-100 bg-[#fcfcfc]">
        <p className="text-[9px] text-gray-300 tracking-[0.3em] uppercase">
          &copy; ENITIAL Co., Ltd.
        </p>
      </footer>

    </div>
  )
}
