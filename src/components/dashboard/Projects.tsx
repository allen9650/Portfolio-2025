import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/ThemeContext";
import { FolderGit2, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

import legal from "@/assets/ProjectImages/legal.png";
import adalynn from "@/assets/ProjectImages/adalynn.png";

const projects = [
  {
    title: "Verimoo — Certificate Management Web App",
    tagline: "Verify Any Certificate Instantly",
    description:
      "A modern certificate management and verification web application that allows institutions to issue digital credentials and enables users to verify any certificate instantly by entering the unique certificate serial number to check authenticity and download official high-resolution credentials.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "QR / Serial Verification", "PDF Generation", "REST APIs"],
    image: legal,
  },
  {
    title: "AI-Powered Legal Aid Assistant",
    tagline: "Generative AI Legal Consultation",
    description:
      "AI-powered legal consultation platform with secure OAuth authentication and real-time conversational generative AI responses.",
    tech: ["Next.js", "Google Generative AI", "MongoDB", "OAuth", "Framer Motion"],
    image: legal,
    legallink: "https://legal-aid-assistant-by-ahsan-and-shafiullah-bn7c.vercel.app/",
  },
  {
    title: "Adalynn AI Chatbot",
    tagline: "Offline-Capable Speech Assistant",
    description:
      "Offline-capable AI assistant with speech recognition and multi-threaded processing for seamless real-time interactions.",
    tech: ["Python", "Vosk Speech AI", "Google Generative AI", "Tkinter GUI"],
    image: adalynn,
  },
];

const Projects = () => {
  const { colors } = useTheme();
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % projects.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section id="projects" className="px-4 md:px-12 lg:px-24 py-16 max-w-screen-xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-500">
            <FolderGit2 className="w-6 h-6" />
          </div>
          <div>
            <h2 className={`text-2xl md:text-3xl font-bold ${colors.text}`}>Featured Projects</h2>
            <p className={`text-sm ${colors.textMuted}`}>AI integrations & full-stack web applications</p>
          </div>
        </div>

        <div className="flex gap-2">
          <Button
            onClick={prevSlide}
            variant="ghost"
            size="icon"
            aria-label="Previous project"
            className="rounded-full text-slate-400 hover:bg-slate-500/10"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            onClick={nextSlide}
            variant="ghost"
            size="icon"
            aria-label="Next project"
            className="rounded-full text-slate-400 hover:bg-slate-500/10"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <div
        className={`relative overflow-hidden rounded-2xl border ${colors.cardBorder} shadow-sm`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Slider track */}
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {projects.map(({ title, tagline, description, tech, image, legallink }, index) => (
            <div
              key={index}
              className={`min-w-full flex flex-col md:flex-row items-center gap-8 p-6 md:p-10 ${colors.secondary}`}
            >
              <div className="w-full md:w-1/2 relative aspect-video rounded-xl overflow-hidden shadow-sm border border-slate-500/10">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
              <div className="w-full md:w-1/2 space-y-3">
                {tagline && (
                  <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full ${colors.pastelPurple.bg} ${colors.pastelPurple.border} ${colors.pastelPurple.text} border`}>
                    {tagline}
                  </span>
                )}
                <h3 className={`text-2xl font-bold ${colors.text}`}>{title}</h3>
                <p className={`${colors.textMuted} leading-relaxed text-sm md:text-base`}>{description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {tech.map((t) => (
                    <span
                      key={t}
                      className={`px-3 py-1 rounded-lg text-xs font-medium ${colors.pastelSky.bg} ${colors.pastelSky.border} ${colors.pastelSky.text} border`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {legallink && (
                  <div className="pt-4">
                    <Button asChild variant="secondary" className="gap-2">
                      <Link href={legallink} target="_blank" rel="noopener noreferrer">
                        Live Demo
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 gap-2" role="tablist" aria-label="Project carousel pagination">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              index === current ? "bg-sky-400 w-8" : "bg-slate-400/40 hover:bg-slate-400/70 w-2.5"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
