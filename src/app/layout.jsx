"use client";

import Footer from "@/components/ui/Footer";
import "./globals.css";
import Lenis from "lenis";
import { useEffect } from "react";

export default function RootLayout({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Durasi animasi scroll
      easing: (t) => 1 - Math.pow(1 - t, 3), // Fungsi easing
      smooth: true, // Mengaktifkan smooth scrolling
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy(); // Cleanup saat unmount
  }, []);

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gradient-to-b from-black to-cyan-900">
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
