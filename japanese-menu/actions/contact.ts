"use server"

export async function submitContactForm(formData: FormData) {
  const data = {
    name: formData.get("name") as string,
    company: formData.get("company") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    service: formData.get("service") as string,
    budget: formData.get("budget") as string,
    message: formData.get("message") as string,
  }

  // Here you would typically integrate with an email service like Resend, SendGrid, etc.
  // For now, we'll simulate the email sending
  try {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // In a real implementation, you would send an email to info@enitial.jp
    console.log("Sending email to info@enitial.jp with data:", data)

    // Email content that would be sent
    const emailContent = `
新しいお問い合わせが届きました。

【お客様情報】
氏名: ${data.name}
会社名: ${data.company}
メールアドレス: ${data.email}
電話番号: ${data.phone}

【ご相談内容】
サービス: ${data.service}
予算: ${data.budget || "未選択"}

【お問い合わせ内容】
${data.message}

---
このメールは株式会社エニシャルのWebサイトから送信されました。
    `

    console.log("Email content:", emailContent)

    return {
      success: true,
      message: "お問い合わせを送信しました！担当者より2営業日以内にご連絡いたします。",
    }
  } catch (error) {
    console.error("Email sending failed:", error)
    return {
      success: false,
      message: "送信に失敗しました。しばらく時間をおいて再度お試しください。",
    }
  }
}
