'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import '@/app/globals.css';
import { useEffect } from 'react';
import AOS from 'aos';

import { Poppins } from 'next/font/google';
import ParticlesBackground from '@/components/ParticlesBackground';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] });

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <html lang="en" className={poppins.className}>
      <body style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
        {/* Particle background behind everything */}
        <div style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none"
        }}>
          <ParticlesBackground />
        </div>
        {/* Main content above particles */}
        <div style={{ position: "relative", zIndex: 1 }}>
          {children}
        </div>
      </body>
    </html>
  );
}
