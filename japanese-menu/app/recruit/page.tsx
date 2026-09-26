"use client"

import React from "react"
import Link from "next/link"

export default function Recruit() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] font-serif text-[#333] selection:bg-gray-200">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-gray-100 bg-[#fcfcfc]/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Link
            href="/"
            className="text-xl font-light tracking-[0.2em] transition-opacity hover:opacity-60"
          >
            ENITIAL
          </Link>

          <Link
            href="/"
            className="text-[10px] uppercase tracking-widest text-gray-400 transition-colors hover:text-black"
          >
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Main */}
      <main className="mx-auto max-w-3xl px-6 py-40">
        <h1 className="mb-24 text-center text-2xl font-light tracking-[0.2em] text-gray-800 md:text-3xl">
          RECRUIT
        </h1>

        <dl className="font-sans text-sm leading-loose text-gray-600">
          <div className="border-b border-gray-100 py-8">
            <dt className="mb-3 text-[10px] uppercase tracking-[0.22em] text-gray-400">
              Employment
            </dt>
            <dd className="text-gray-800">
              パート・アルバイト
            </dd>
          </div>

          <div className="border-b border-gray-100 py-8">
            <dt className="mb-3 text-[10px] uppercase tracking-[0.22em] text-gray-400">
              Work
            </dt>
            <dd className="text-gray-800">
              商品の梱包・発送準備
              <br />
              オリジナル商品の制作補助
            </dd>
          </div>

          <div className="border-b border-gray-100 py-8">
            <dt className="mb-3 text-[10px] uppercase tracking-[0.22em] text-gray-400">
              Salary
            </dt>
            <dd className="text-gray-800">
              時給 1,121円〜
            </dd>
          </div>

          <div className="border-b border-gray-100 py-8">
            <dt className="mb-3 text-[10px] uppercase tracking-[0.22em] text-gray-400">
              Hours
            </dt>
            <dd className="text-gray-800">
              平日 10:00〜17:00の間で1日2時間〜
              <br />
              週1日〜
            </dd>
          </div>

          <div className="border-b border-gray-100 py-8">
            <dt className="mb-3 text-[10px] uppercase tracking-[0.22em] text-gray-400">
              Trial Period
            </dt>
            <dd className="text-gray-800">
              3ヶ月
            </dd>
          </div>

          <div className="py-8">
            <dt className="mb-3 text-[10px] uppercase tracking-[0.22em] text-gray-400">
              Location
            </dt>
            <dd className="text-gray-800">
              株式会社エニシャル 北方事務所
            </dd>
          </div>
        </dl>

        <div className="mt-20 text-center">
          <Link
            href="/#contact"
            className="inline-flex items-center border border-[#FFD600]/80 px-8 py-4 font-sans text-[11px] tracking-[0.18em] text-gray-600 transition-colors hover:bg-[#fffdf2] hover:text-gray-900"
          >
            応募・お問い合わせ
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-[#fcfcfc] py-20 text-center">
        <p className="text-[9px] uppercase tracking-[0.3em] text-gray-300">
          &copy; ENITIAL Co., Ltd.
        </p>
      </footer>
    </div>
  )
}
