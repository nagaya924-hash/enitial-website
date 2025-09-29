// これをファイルの一番上に追記
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const preferredRegion = ['hnd1']; // Tokyo

import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    // 必須チェック（最低限）
    const required = ["name", "company", "email", "phone", "service", "message", "privacy"]
    for (const k of required) {
      if (!body?.[k]) {
        return Response.json({ message: `「${k}」が未入力です` }, { status: 400 })
      }
    }

    // SMTPトランスポート
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,            // 例: "mail.onamae.ne.jp" 等（お名前.comのSMTP）
      port: Number(process.env.MAIL_PORT) || 587,
      secure: false, // 587想定。465なら true に
      auth: {
        user: process.env.MAIL_USER,          // メールアカウント（例: info@enitial.jp）
        pass: process.env.MAIL_PASS,          // そのパスワード
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

    await transporter.sendMail({
      from: process.env.MAIL_FROM || process.env.MAIL_USER, // 送信元表示
      to: process.env.MAIL_TO || "info@enitial.jp",         // 受信先
      subject: "【サイトお問い合わせ】" + body.name + " 様",
      replyTo: body.email,
      html,
    })

    return Response.json({ message: "送信しました。担当者よりご連絡します。" })
  } catch (e: any) {
    console.error(e)
    return Response.json({ message: "サーバーエラーが発生しました。" }, { status: 500 })
  }
}
