// Tokyoリージョンで動かす指定
export const runtime = "nodejs"
export const dynamic = "force-dynamic"
export const preferredRegion = ["hnd1"] // 東京リージョン

import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    // 必須チェック
    const required = ["name", "company", "email", "phone", "service", "message", "privacy"]
    for (const k of required) {
      if (!body?.[k]) {
        return NextResponse.json({ message: `「${k}」が未入力です` }, { status: 400 })
      }
    }

    // SMTPトランスポート設定
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,            // 例: "mail.onamae.ne.jp"
      port: Number(process.env.MAIL_PORT) || 587,
      secure: Number(process.env.MAIL_PORT) === 465, // 465ならtrue, 587ならfalse
      auth: {
        user: process.env.MAIL_USER,          // 例: "info@enitial.jp"
        pass: process.env.MAIL_PASS,
      },
    })

    const html = `
      <p>Webサイトから新しいお問い合わせが届きました。</p>
      <h3>お客様情報</h3>
      <ul>
        <li><b>氏名:</b> ${body.name}</li>
        <li><b>会社名:</b> ${body.company}</li>
        <li><b>メール:</b> ${body.email}</li>
        <li><b>電話:</b> ${body.phone}</li>
      </ul>
      <h3>ご相談内容</h3>
      <ul>
        <li><b>サービス:</b> ${body.service}</li>
        <li><b>予算:</b> ${body.budget || "未選択"}</li>
      </ul>
      <h3>お問い合わせ内容</h3>
      <pre style="white-space:pre-wrap;font-family:inherit">${body.message}</pre>
      <hr/>
      <p>このメールはサイトのフォームから送信されました。</p>
    `

    // メール送信
    await transporter.sendMail({
      from: process.env.MAIL_FROM || process.env.MAIL_USER,
      to: process.env.MAIL_TO || "info@enitial.jp",
      subject: `【サイトお問い合わせ】${body.name} 様`,
      replyTo: body.email,
      html,
    })

    return NextResponse.json({ message: "送信しました。担当者よりご連絡します。" })
  } catch (e: any) {
    console.error("メール送信エラー:", e)
    return NextResponse.json({ message: "サーバーエラーが発生しました。" }, { status: 500 })
  }
}

// ★ デバッグ用: デプロイ先のリージョン確認
export async function GET() {
  return NextResponse.json({
    ok: true,
    region: process.env.VERCEL_REGION || "unknown",
    runtime: "nodejs",
  })
}
