import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // メール送信用の設定
    const transporter = nodemailer.createTransport({
      host: "mail.onamae.ne.jp", // お名前メールのSMTPサーバー
      port: 465,
      secure: true,
      auth: {
        user: "info@enitial.jp", // 送信元メール
        pass: process.env.MAIL_PASS, // Vercel 環境変数に登録したパスワード
      },
    });

    // 実際に送信するメール内容
    await transporter.sendMail({
      from: "info@enitial.jp",
      to: "info@enitial.jp", // 自分宛に届くよう設定
      subject: `お問い合わせ: ${name}`,
      text: `名前: ${name}\nメール: ${email}\n\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
