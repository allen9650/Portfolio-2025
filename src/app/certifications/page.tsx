'use client';

import { useTheme } from "@/context/ThemeContext";
import Navbar from "@/components/dashboard/Navbar";
import Certifications from "@/components/dashboard/Certifications";
import Achievements from "@/components/dashboard/Achievements";
import Footer from "@/components/dashboard/Footer";
import ScrollToTop from "@/components/dashboard/ScrollToTop";

export default function CertificationsPage() {
  const { colors } = useTheme();

  return (
    <div className={`min-h-screen relative overflow-hidden transition-colors duration-300 ${colors.primary}`}>
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-400/10 dark:bg-amber-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-sky-400/10 dark:bg-sky-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <Navbar />
      <ScrollToTop />
      <main className="pt-20 pb-12 space-y-8 relative z-0">
        <Certifications />
        <Achievements />
      </main>
      <Footer />
    </div>
  );
}

