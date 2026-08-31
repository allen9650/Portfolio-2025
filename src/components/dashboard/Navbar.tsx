import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Laptop, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "Overview", href: "/" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Certifications", href: "/certifications" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const { theme, setTheme, darkMode, colors } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeCycle = () => {
    if (theme === 'dark') setTheme('light');
    else if (theme === 'light') setTheme('system');
    else setTheme('dark');
  };

  const getThemeIcon = () => {
    if (!mounted) return <Moon className="h-4 w-4" />;
    if (theme === 'system') return <Laptop className="h-4 w-4" />;
    if (theme === 'light') return <Sun className="h-4 w-4" />;
    return <Moon className="h-4 w-4" />;
  };

  const getThemeLabel = () => {
    if (!mounted) return "Dark Mode";
    if (theme === 'system') return "Device Default";
    if (theme === 'light') return "Light Mode";
    return "Dark Mode";
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-colors duration-300 ${
        darkMode
          ? "border-slate-800/80 bg-[#070A12]/80"
          : "border-slate-200/80 bg-[#FAFBFD]/80"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-12">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className={`text-xl font-bold tracking-tight ${colors.accent} flex items-center gap-2`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse" />
            Ahsan Raza
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
            {NAV_ITEMS.map(({ label, href }) => {
              const isActive = pathname === href;

              return (
                <Link
                  key={href}
                  href={href}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? `${colors.pastelSky.bg} ${colors.pastelSky.text} font-semibold shadow-xs`
                      : `${colors.textMuted} hover:${colors.text} hover:bg-slate-500/10`
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-2">
            {/* 3-Way Theme Cycle Button */}
            <Button
              onClick={handleThemeCycle}
              size="sm"
              variant="outline"
              title={`Theme: ${getThemeLabel()} (Click to toggle)`}
              aria-label={`Current theme: ${getThemeLabel()}`}
              className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border-slate-700/50 hover:bg-slate-500/10"
            >
              {getThemeIcon()}
              <span className="hidden sm:inline capitalize">{mounted ? theme : "dark"}</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              size="icon"
              variant="ghost"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className="md:hidden text-slate-400 hover:bg-slate-500/10 rounded-full"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <nav
            className={`md:hidden py-4 border-t ${
              darkMode ? "border-slate-800" : "border-slate-200"
            } flex flex-col gap-2`}
            aria-label="Mobile Navigation"
          >
            {NAV_ITEMS.map(({ label, href }) => {
              const isActive = pathname === href;

              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                    isActive
                      ? `${colors.pastelSky.bg} ${colors.pastelSky.text} font-semibold`
                      : `${colors.text} hover:bg-slate-500/10`
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;