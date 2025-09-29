// app/privacy-policy/page.tsx
"use client"

import { Separator } from "@/components/ui/separator"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="container mx-auto px-6 py-16 max-w-3xl">
        <h1 className="text-3xl font-light mb-6">プライバシーポリシー</h1>
        <p className="mb-4">
          株式会社エニシャル（以下、「当社」）は、お客様から取得する個人情報を適切に取り扱うことを重要な責務と考え、以下の方針に基づき個人情報を保護いたします。
        </p>

        <Separator className="my-6" />

        <h2 className="text-xl font-light mb-2">1. 取得する情報</h2>
        <p className="mb-4">
          当社は、お問い合わせフォーム・サービス利用時などに以下の情報を取得する場合があります：
          <br />氏名、メールアドレス、電話番号、住所、その他お問い合わせ内容。
        </p>

        <h2 className="text-xl font-light mb-2">2. 利用目的</h2>
        <p className="mb-4">
          当社は、取得した情報を以下の目的で利用します：
          <br />・お問い合わせへの回答
          <br />・サービス提供およびサポート
          <br />・新サービスやご案内のご連絡
        </p>

        <h2 className="text-xl font-light mb-2">3. 第三者提供</h2>
        <p className="mb-4">当社は、法令に基づく場合を除き、取得した個人情報を第三者に提供いたしません。</p>

        <h2 className="text-xl font-light mb-2">4. 安全管理</h2>
        <p className="mb-4">当社は、個人情報への不正アクセスや漏洩を防止するため、適切な安全管理措置を講じます。</p>

        <h2 className="text-xl font-light mb-2">5. 開示・訂正・削除</h2>
        <p className="mb-4">ご本人からの請求に応じ、保有する個人情報の開示・訂正・削除に対応いたします。</p>

        <h2 className="text-xl font-light mb-2">6. お問い合わせ窓口</h2>
        <p className="mb-4">
          本ポリシーに関するお問い合わせは、以下の窓口までお願いいたします：
          <br />株式会社エニシャル
          <br />〒501-0605 岐阜県揖斐郡揖斐川町日坂1178
          <br />info@enitial.jp
        </p>

        <Separator className="my-6" />
        <p className="text-sm text-gray-500">制定日: 2025年●月●日</p>
      </div>
    </div>
  )
}
