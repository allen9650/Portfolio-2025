'use client';

import { useTheme } from "@/context/ThemeContext";
import Navbar from "@/components/dashboard/Navbar";
import Projects from "@/components/dashboard/Projects";
import Footer from "@/components/dashboard/Footer";
import ScrollToTop from "@/components/dashboard/ScrollToTop";

export default function ProjectsPage() {
  const { colors } = useTheme();

  return (
    <div className={`min-h-screen relative overflow-hidden transition-colors duration-300 ${colors.primary}`}>
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-sky-400/10 dark:bg-sky-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-indigo-400/10 dark:bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <Navbar />
      <ScrollToTop />
      <main className="pt-20 pb-12 relative z-0">
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

