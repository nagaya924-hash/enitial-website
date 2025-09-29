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
import { submitContactForm } from "../actions/contact"

const contactSchema = z.object({
  name: z.string().min(1, "氏名を入力してください").min(2, "氏名は2文字以上で入力してください"),
  company: z.string().min(1, "会社名を入力してください"),
  email: z.string().min(1, "メールアドレスを入力してください").email("正しいメールアドレスを入力してください"),
  phone: z
    .string()
    .min(1, "電話番号を入力してください")
    .regex(/^[0-9-+()]+$/, "正しい電話番号を入力してください"),
  service: z.string().min(1, "ご相談内容を選択してください"),
  budget: z.string().optional(),
  message: z
    .string()
    .min(1, "お問い合わせ内容を入力してください")
    .min(10, "お問い合わせ内容は10文字以上で入力してください"),
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
    defaultValues: {
      privacy: false,
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)

    try {
      const formData = new FormData()
      Object.entries(data).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          formData.append(key, value.toString())
        }
      })

      const result = await submitContactForm(formData)

      if (result.success) {
        toast.success("お問い合わせを送信しました！", {
          description: result.message,
        })
        reset()
      } else {
        toast.error("送信に失敗しました", {
          description: result.message,
        })
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
                <Label htmlFor="name" className="text-gray-700 font-light text-sm tracking-wide">
                  氏名 <span className="text-red-400">*</span>
                </Label>
                <Input
                  id="name"
                  {...register("name")}
                  placeholder="山田 太郎"
                  className={`border-gray-200 focus:border-slate-400 focus:ring-slate-400 focus:ring-1 bg-white font-light ${
                    errors.name ? "border-red-300" : ""
                  }`}
                />
                {errors.name && <p className="text-xs text-red-400 font-light">{errors.name.message}</p>}
              </div>

              <div className="space-y-3">
                <Label htmlFor="company" className="text-gray-700 font-light text-sm tracking-wide">
                  会社名 <span className="text-red-400">*</span>
                </Label>
                <Input
                  id="company"
                  {...register("company")}
                  placeholder="株式会社○○○"
                  className={`border-gray-200 focus:border-slate-400 focus:ring-slate-400 focus:ring-1 bg-white font-light ${
                    errors.company ? "border-red-300" : ""
                  }`}
                />
                {errors.company && <p className="text-xs text-red-400 font-light">{errors.company.message}</p>}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <Label htmlFor="email" className="text-gray-700 font-light text-sm tracking-wide">
                  メールアドレス <span className="text-red-400">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="example@company.com"
                  className={`border-gray-200 focus:border-slate-400 focus:ring-slate-400 focus:ring-1 bg-white font-light ${
                    errors.email ? "border-red-300" : ""
                  }`}
                />
                {errors.email && <p className="text-xs text-red-400 font-light">{errors.email.message}</p>}
              </div>

              <div className="space-y-3">
                <Label htmlFor="phone" className="text-gray-700 font-light text-sm tracking-wide">
                  電話番号 <span className="text-red-400">*</span>
                </Label>
                <Input
                  id="phone"
                  {...register("phone")}
                  placeholder="03-1234-5678"
                  className={`border-gray-200 focus:border-slate-400 focus:ring-slate-400 focus:ring-1 bg-white font-light ${
                    errors.phone ? "border-red-300" : ""
                  }`}
                />
                {errors.phone && <p className="text-xs text-red-400 font-light">{errors.phone.message}</p>}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <Label htmlFor="service" className="text-gray-700 font-light text-sm tracking-wide">
                  ご相談内容 <span className="text-red-400">*</span>
                </Label>
                <Select onValueChange={(value) => setValue("service", value)}>
                  <SelectTrigger
                    className={`border-gray-200 focus:border-slate-400 focus:ring-slate-400 focus:ring-1 bg-white font-light ${
                      errors.service ? "border-red-300" : ""
                    }`}
                  >
                    <SelectValue placeholder="選択してください" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value} className="font-light">
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.service && <p className="text-xs text-red-400 font-light">{errors.service.message}</p>}
              </div>

              <div className="space-y-3">
                <Label htmlFor="budget" className="text-gray-700 font-light text-sm tracking-wide">
                  予算（任意）
                </Label>
                <Select onValueChange={(value) => setValue("budget", value)}>
                  <SelectTrigger className="border-gray-200 focus:border-slate-400 focus:ring-slate-400 focus:ring-1 bg-white font-light">
                    <SelectValue placeholder="選択してください" />
                  </SelectTrigger>
                  <SelectContent>
                    {budgetOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value} className="font-light">
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-3">
              <Label htmlFor="message" className="text-gray-700 font-light text-sm tracking-wide">
                お問い合わせ内容 <span className="text-red-400">*</span>
              </Label>
              <Textarea
                id="message"
                {...register("message")}
                placeholder="具体的なご相談内容をお聞かせください"
                rows={6}
                className={`border-gray-200 focus:border-slate-400 focus:ring-slate-400 focus:ring-1 bg-white resize-none font-light ${
                  errors.message ? "border-red-300" : ""
                }`}
              />
              {errors.message && <p className="text-xs text-red-400 font-light">{errors.message.message}</p>}
            </div>

            <div className="flex items-start space-x-3 pt-4">
              <Checkbox
                id="privacy"
                checked={watch("privacy")}
                onCheckedChange={(checked) => setValue("privacy", checked as boolean)}
                className={`border-gray-300 data-[state=checked]:bg-slate-600 data-[state=checked]:border-slate-600 ${
                  errors.privacy ? "border-red-300" : ""
                }`}
              />
              <div className="grid gap-1.5 leading-none">
                <Label htmlFor="privacy" className="text-xs font-light leading-relaxed text-gray-700">
                  <a href="#" className="text-gray-600 hover:text-slate-700 underline underline-offset-2">
                    プライバシーポリシー
                  </a>
                  に同意します <span className="text-red-400">*</span>
                </Label>
                {errors.privacy && <p className="text-xs text-red-400 font-light">{errors.privacy.message}</p>}
              </div>
            </div>

            <div className="pt-8">
              <Button
                type="submit"
                className="w-full bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-light text-sm py-4 tracking-wide"
                disabled={isSubmitting}
              >
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
            </div>
          </form>
        </div>

        <div className="mt-12 text-center">
          <div className="space-y-3 text-xs text-gray-500 font-light leading-relaxed">
            <p>担当者より2営業日以内にご連絡いたします</p>
            <p>土日祝日のお問い合わせは、翌営業日以降の対応となります</p>
          </div>
        </div>
      </div>
    </div>
  )
}
