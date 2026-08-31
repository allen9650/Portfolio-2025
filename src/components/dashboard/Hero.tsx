import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import { Mail, Sparkles, ShieldCheck } from "lucide-react";
import Image from "next/image";
import dev12 from "@/assets/dev-img.jpeg";
import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";

const Hero = () => {
  const { colors } = useTheme();

  return (
    <section id="hero" className="relative px-4 md:px-12 lg:px-24 pt-28 pb-16 max-w-screen-xl mx-auto overflow-hidden">
      {/* Decorative ambient pastel blur orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-sky-400/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-400/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } },
        }}
        className="flex flex-col md:flex-row items-center gap-10 lg:gap-14"
      >
        {/* Avatar with pastel glow ring */}
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative group shrink-0"
        >
          <div className="absolute -inset-1.5 bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 rounded-full blur-md opacity-40 group-hover:opacity-75 transition duration-500" />
          <div className="relative w-36 h-36 md:w-52 md:h-52 rounded-full overflow-hidden border-2 border-white/60 dark:border-slate-800 shadow-xl">
            <Image
              src={dev12}
              alt="Ahsan Raza - IT Officer & Full Stack Developer"
              fill
              sizes="(max-width: 768px) 144px, 208px"
              className="object-cover"
              priority
              quality={90}
            />
          </div>
        </motion.div>

        {/* Text and Badges */}
        <motion.div
          className="space-y-4 text-center md:text-left flex-1"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Pastel Tagline Badges */}
          <motion.div
            className="flex flex-wrap gap-2 justify-center md:justify-start"
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
          >
            <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full ${colors.pastelSky.bg} ${colors.pastelSky.border} ${colors.pastelSky.text} border shadow-xs`}>
              <ShieldCheck className="w-3.5 h-3.5" />
              IT Officer @ Turkish Maarif Foundation
            </span>
            <span className={`inline-flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full ${colors.pastelPurple.bg} ${colors.pastelPurple.border} ${colors.pastelPurple.text} border shadow-xs`}>
              <Sparkles className="w-3 h-3" />
              AI & Full Stack Developer
            </span>
          </motion.div>

          <motion.h1
            className={`text-3xl md:text-5xl font-extrabold tracking-tight ${colors.text}`}
            variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
          >
            Hi, I&rsquo;m <span className="bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent">Ahsan Raza</span>
          </motion.h1>

          <motion.p
            className={`text-base md:text-lg ${colors.textMuted} max-w-2xl leading-relaxed`}
            variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
          >
            Computer Science graduate specializing in <span className="font-semibold text-slate-800 dark:text-slate-200">enterprise networking, IT infrastructure, cybersecurity,</span> and <span className="font-semibold text-slate-800 dark:text-slate-200">full-stack web applications with LLM integration</span>. Dedicated to architecting reliable systems and high-impact digital solutions.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            className="flex flex-wrap gap-3 justify-center md:justify-start pt-2"
            variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
          >
            <Button asChild className="gap-2 bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white shadow-md">
              <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" download>
                <FaFileDownload className="w-4 h-4" />
                Download Resume
              </Link>
            </Button>
            <Button asChild variant="secondary" className="gap-2">
              <Link href="/contact">
                <Mail className="w-4 h-4" />
                Get In Touch
              </Link>
            </Button>
            <Button asChild variant="outline" size="icon" aria-label="GitHub">
              <Link href="https://github.com/allen9650" target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="icon" aria-label="LinkedIn">
              <Link href="https://www.linkedin.com/in/ahsan-raza8hbb/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;