import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import TechnologyStack from '@/components/TechnologyStack';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div className='min-h-screen'>
        <div className='relative'>
          <div className='absolute inset-0 -z-10'>
            <Image
              src={`/hero-background.jpg`}
              alt='hero-background'
              fill
              priority={true}
              className='object-fit'
             />
            <div className='absolute inset-0 bg-black/75'></div>
          </div>

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

        {/* Contact */}
        <Contact />

        {/* Footer */}
        <Footer /> 
      </div>
    </main>
  );
}
