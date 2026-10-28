'use client';

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import TechnologyStack from '@/components/TechnologyStack';
import Services from '@/components/Services';
import FaqButtonSection from '@/components/FaqButtonSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <div className='min-h-screen'>
        <div className='relative'>
          {/* Navigation */}
          <Navigation />
          
          {/* Hero */}
          <Hero />
        </div>

        {/* About */}
        <About />

        {/* TechnoogyStack */}
        <TechnologyStack />

        {/* Services */}
        <Services />

        {/* Faq Button Section */}
        <FaqButtonSection />

        {/* Contact */}
        <Contact />

        {/* Footer */}
        <Footer /> 
      </div>
    </main>
  );
}
