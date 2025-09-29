"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "sonner"
import { Loader2, Send } from "lucide-react"

const contactSchema = z.object({
  name: z.string().min(2, "氏名は2文字以上で入力してください"),
  company: z.string().min(1, "会社名を入力してください"),
  email: z.string().email("正しいメールアドレスを入力してください"),
  phone: z.string().regex(/^[0-9-+()]+$/, "正しい電話番号を入力してください"),
  service: z.string().min(1, "ご相談内容を選択してください"),
  budget: z.string().optional(),
  message: z.string().min(10, "お問い合わせ内容は10文字以上で入力してください"),
  privacy: z.boolean().refine((val) => val === true, "プライバシーポリシーに同意してください"),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { privacy: false },
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      })

      const result = await res.json()
      if (res.ok) {
        toast.success("お問い合わせを送信しました！", { description: result.message })
        reset()
      } else {
        toast.error("送信に失敗しました", { description: result.message })
      }
    } catch (error) {
      toast.error("送信に失敗しました", {
        description: "しばらく時間をおいて再度お試しください。",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const serviceOptions = [
    { value: "business-plan", label: "事業計画策定" },
    { value: "subsidy", label: "補助金申請サポート" },
    { value: "sales", label: "営業代行" },
    { value: "ecommerce", label: "ネットショップ運営・販売" },
    { value: "consultation", label: "経営コンサルティング" },
    { value: "other", label: "その他" },
  ]

  const budgetOptions = [
    { value: "under-100", label: "〜100万円" },
    { value: "100-300", label: "100万円〜300万円" },
    { value: "300-500", label: "300万円〜500万円" },
    { value: "500-1000", label: "500万円〜1000万円" },
    { value: "over-1000", label: "1000万円以上" },
    { value: "undecided", label: "未定・相談したい" },
  ]

  return (
    <div className="bg-white py-8">
      <div className="container mx-auto px-8 max-w-2xl">
        <div className="bg-white border border-slate-100 p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-extralight text-slate-900 mb-4 tracking-wide">お問い合わせフォーム</h3>
            <p className="text-gray-500 font-light text-sm leading-relaxed">
              お気軽にお問い合わせください
              <br />
              担当者より2営業日以内にご連絡いたします
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <Label htmlFor="name">氏名 *</Label>
                <Input id="name" {...register("name")} placeholder="山田 太郎" />
                {errors.name && <p className="text-xs text-red-400">{errors.name.message}</p>}
              </div>
              <div className="space-y-3">
                <Label htmlFor="company">会社名 *</Label>
                <Input id="company" {...register("company")} placeholder="株式会社○○○" />
                {errors.company && <p className="text-xs text-red-400">{errors.company.message}</p>}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <Label htmlFor="email">メールアドレス *</Label>
                <Input id="email" type="email" {...register("email")} placeholder="example@company.com" />
                {errors.email && <p className="text-xs text-red-400">{errors.email.message}</p>}
              </div>
              <div className="space-y-3">
                <Label htmlFor="phone">電話番号 *</Label>
                <Input id="phone" {...register("phone")} placeholder="03-1234-5678" />
                {errors.phone && <p className="text-xs text-red-400">{errors.phone.message}</p>}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <Label htmlFor="service">ご相談内容 *</Label>
                <Select onValueChange={(v) => setValue("service", v)}>
                  <SelectTrigger>
                    <SelectValue placeholder="選択してください" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceOptions.map((o) => (
                      <SelectItem key={o.value} value={o.value}>
                        {o.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.service && <p className="text-xs text-red-400">{errors.service.message}</p>}
              </div>

              <div className="space-y-3">
                <Label htmlFor="budget">予算（任意）</Label>
                <Select onValueChange={(v) => setValue("budget", v)}>
                  <SelectTrigger>
                    <SelectValue placeholder="選択してください" />
                  </SelectTrigger>
                  <SelectContent>
                    {budgetOptions.map((o) => (
                      <SelectItem key={o.value} value={o.value}>
                        {o.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-3">
              <Label htmlFor="message">お問い合わせ内容 *</Label>
              <Textarea id="message" {...register("message")} rows={6} placeholder="具体的なご相談内容をお聞かせください" />
              {errors.message && <p className="text-xs text-red-400">{errors.message.message}</p>}
            </div>

            <div className="flex items-start space-x-3 pt-4">
              <Checkbox
                id="privacy"
                checked={watch("privacy")}
                onCheckedChange={(checked) => setValue("privacy", checked as boolean)}
              />
              <Label htmlFor="privacy" className="text-xs">
                プライバシーポリシーに同意します *
              </Label>
              {errors.privacy && <p className="text-xs text-red-400">{errors.privacy.message}</p>}
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-3 w-3 animate-spin" />
                  送信中...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-3 w-3" />
                  お問い合わせを送信
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

// update for redeploy
