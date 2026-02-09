"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Homepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // お問い合わせフォームの送信処理（メールアプリ起動）
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
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#fcfcfc] text-[#333] font-serif min-h-screen selection:bg-gray-200">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#fcfcfc]/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl tracking-[0.2em] font-light">ENITIAL</div>
          
          <div className="hidden md:flex items-center space-x-12 text-[11px] tracking-widest text-gray-500 uppercase">
            <button onClick={() => go('philosophy')} className="hover:text-black transition-colors">Philosophy</button>
            <button onClick={() => go('services')} className="hover:text-black transition-colors">Services</button>
            <button onClick={() => go('contact')} className="hover:text-black transition-colors">Contact</button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={2
