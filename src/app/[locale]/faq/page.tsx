'use client';

import { useState } from 'react';
import FAQSection from '@/components/FAQ';
import Contact from '@/components/Contact';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';


export default function FAQPage() {
  const t = useTranslations('faq');

  return (
    <div className="min-h-screen">
      <nav className="relative z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group">
              <ArrowLeft className="w-5 h-5 text-red-400 group-hover:text-red-300 transition-colors" />
              <span className="text-white group-hover:text-red-300 transition-colors">{t('navigation.backHome')}</span>
            </Link>
            
            <div className="flex items-center space-x-3">
              <Image 
                src="/logo.png" 
                alt="Logo Drunic" 
                width={40}
                height={40}
                className="object-contain"
              />
              <h1 className="text-xl font-bold text-white">Drunic</h1>
            </div>
          </div>
        </div>
      </nav>

      <FAQSection />

      <Contact />
    </div>
  );
}
