'use client';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'aos/dist/aos.css'; // Import AOS styles
import '@/app/globals.css'; // Your global styles
import { useEffect } from 'react';
import AOS from 'aos';

import { Poppins } from 'next/font/google';
import ParticlesBackground from './components/ParticlesBackground';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] });

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <html lang="en" className={poppins.className}>
      <body>
        <ParticlesBackground /> {/* Full-screen particles animation */}
        {children}
      </body>
    </html>
  );
}
