import { useTheme } from "@/context/ThemeContext";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const { colors, darkMode } = useTheme();

  return (
    <footer
      className={`py-12 text-sm ${colors.text} border-t transition-colors duration-300 ${
        darkMode ? "border-slate-800/80 bg-[#070A12]" : "border-slate-200/80 bg-[#FAFBFD]"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left space-y-1">
          <p className="font-bold text-base tracking-tight">
            Ahsan Raza <span className={`text-xs font-normal ${colors.accent}`}>| IT Officer & Full Stack Developer</span>
          </p>
          <p className={`text-xs ${colors.textMuted}`}>
            &copy; {new Date().getFullYear()} Ahsan Raza. All rights reserved.
          </p>
        </div>

        {/* Quick Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 text-xs font-medium">
          {[
            { label: "Overview", href: "/" },
            { label: "Experience", href: "/experience" },
            { label: "Projects", href: "/projects" },
            { label: "Skills", href: "/skills" },
            { label: "Certifications", href: "/certifications" },
            { label: "Contact", href: "/contact" },
          ].map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`${colors.textMuted} hover:${colors.accent} transition-colors`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Social Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="mailto:arkolachi190@gmail.com"
            className={`p-2 rounded-lg bg-slate-500/10 hover:${colors.accent} transition-colors`}
            aria-label="Email Address"
          >
            <Mail className="w-4 h-4" />
          </Link>
          <Link
            href="https://github.com/allen9650"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-lg bg-slate-500/10 hover:${colors.accent} transition-colors`}
            aria-label="GitHub Profile"
          >
            <FaGithub className="w-4 h-4" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ahsan-raza8hbb/"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-lg bg-slate-500/10 hover:text-sky-500 transition-colors`}
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;