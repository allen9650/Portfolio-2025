'use client';

import { useTheme } from "@/context/ThemeContext";
import Navbar from "@/components/dashboard/Navbar";
import Hero from "@/components/dashboard/Hero";
import Experience from "@/components/dashboard/Experience";
import Projects from "@/components/dashboard/Projects";
import Skills from "@/components/dashboard/Skills";
import Certifications from "@/components/dashboard/Certifications";
import Achievements from "@/components/dashboard/Achievements";
import Testimonials from "@/components/dashboard/Testimonials";
import Contact from "@/components/dashboard/Contact";
import Footer from "@/components/dashboard/Footer";
import ScrollToTop from "@/components/dashboard/ScrollToTop";

export default function Home() {
  const { colors } = useTheme();

  return (
    <div className={`min-h-screen relative overflow-hidden transition-colors duration-300 ${colors.primary}`}>
      {/* Decorative subtle professional glow gradients in background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-400/10 dark:bg-sky-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-[25%] left-[-100px] w-[450px] h-[450px] bg-purple-400/10 dark:bg-purple-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-[50%] right-[-100px] w-[500px] h-[500px] bg-emerald-400/10 dark:bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-[20%] w-[550px] h-[550px] bg-rose-400/10 dark:bg-rose-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <Navbar />
      <ScrollToTop />
      <main className="space-y-8 md:space-y-14 relative z-0">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Achievements />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
