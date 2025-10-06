'use client';

import ContactForm from "@/components/ContactForm"
import Image from 'next/image';
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";


 const Contact = () => {
  const t = useTranslations('contact');
  const params = useParams();
  const locale = params.locale || 'es';

  return (
    <section id='contact' className="relative min-h-screen overflow-hidden">
      {/* Background with bubble effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-black-900 via-gray-800 to-red-900">
        {/* Animated bubbles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full bg-red-400/20 animate-float`}
              style={{
                width: `${40 + i + 2}px`,
                height: `${40 + i + 2}px`,
                left: `${(i * 7) % 100}%`,
                top: `${(i * 13) % 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left side - Information */}
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                {t('title')}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-white">
                  {t('titleHighlight')}
                </span>
              </h2>
              
              <div className="space-y-6 mb-4">
                <p className="text-lg text-gray-200 leading-relaxed">
                  {t('subtitle')}
                </p>
                <p className="text-lg text-gray-200 leading-relaxed">
                  {t('description')}
                </p>
              </div>

              {/* decorative element */}
              <div className="mt-4 mb-4 justify-items-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl transform rotate-12 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl transform -rotate-6 shadow-xl flex items-center justify-center">
                    <Image
                      src={`/images/email_icon.png`}
                      width={80}
                      height={80}
                      alt={locale === 'es' ? 'email_icon' : "icon email"}
                    />
                  </div>
                </div>
              </div>

              {/* Contact information */}
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-black rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-purple-100 text-lg">+505 57517432</span>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-black rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-purple-100 text-lg">contact.drunic@gmail.com</span>
                </div>
              </div>
            </div>

            <ContactForm />
            {/* Right side - Form */}
            <div className="lg:pl-12">
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;