'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type ThemeMode = 'dark' | 'light' | 'system';

type ThemeContextType = {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  resolvedTheme: 'dark' | 'light';
  darkMode: boolean;
  toggleTheme: () => void;
  colors: {
    primary: string;
    secondary: string;
    cardBorder: string;
    text: string;
    textMuted: string;
    accent: string;
    pastelSky: { bg: string; border: string; text: string };
    pastelPurple: { bg: string; border: string; text: string };
    pastelEmerald: { bg: string; border: string; text: string };
    pastelRose: { bg: string; border: string; text: string };
    pastelAmber: { bg: string; border: string; text: string };
    pastelIndigo: { bg: string; border: string; text: string };
  };
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as ThemeMode) || 'dark';
    }
    return 'dark';
  });

  const [resolvedTheme, setResolvedTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const saved = (localStorage.getItem('theme') as ThemeMode) || 'dark';
      if (saved === 'system') {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      return saved;
    }
    return 'dark';
  });

  const applyTheme = (mode: ThemeMode) => {
    let effectiveTheme: 'dark' | 'light' = 'dark';
    if (mode === 'system') {
      if (typeof window !== 'undefined') {
        effectiveTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
    } else {
      effectiveTheme = mode;
    }

    setResolvedTheme(effectiveTheme);
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark', effectiveTheme === 'dark');
    }
  };

  useEffect(() => {
    const savedTheme = (localStorage.getItem('theme') as ThemeMode) || 'dark';
    if (typeof document !== 'undefined') {
      const isDark =
        savedTheme === 'dark' ||
        (savedTheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
      document.documentElement.classList.toggle('dark', isDark);
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemChange = (e: MediaQueryListEvent) => {
      const currentSaved = (localStorage.getItem('theme') as ThemeMode) || 'dark';
      if (currentSaved === 'system') {
        const nextEffective = e.matches ? 'dark' : 'light';
        setResolvedTheme(nextEffective);
        document.documentElement.classList.toggle('dark', nextEffective === 'dark');
      }
    };

    mediaQuery.addEventListener('change', handleSystemChange);
    return () => mediaQuery.removeEventListener('change', handleSystemChange);
  }, []);

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  };

  const toggleTheme = () => {
    if (theme === 'dark') setTheme('light');
    else if (theme === 'light') setTheme('system');
    else setTheme('dark');
  };

  const darkMode = resolvedTheme === 'dark';

  const colors = {
    primary: darkMode ? "bg-[#070A12]" : "bg-[#FAFBFD]",
    secondary: darkMode ? "bg-[#0E1526]/85 backdrop-blur-xl" : "bg-white/90 backdrop-blur-xl",
    cardBorder: darkMode ? "border-slate-800/90" : "border-slate-200/90",
    text: darkMode ? "text-slate-100" : "text-slate-900",
    textMuted: darkMode ? "text-slate-400" : "text-slate-600",
    accent: darkMode ? "text-sky-400" : "text-sky-600",
    pastelSky: {
      bg: darkMode ? "bg-sky-950/40" : "bg-sky-50",
      border: darkMode ? "border-sky-800/60" : "border-sky-200",
      text: darkMode ? "text-sky-300" : "text-sky-700",
    },
    pastelPurple: {
      bg: darkMode ? "bg-purple-950/40" : "bg-purple-50",
      border: darkMode ? "border-purple-800/60" : "border-purple-200",
      text: darkMode ? "text-purple-300" : "text-purple-700",
    },
    pastelEmerald: {
      bg: darkMode ? "bg-emerald-950/40" : "bg-emerald-50",
      border: darkMode ? "border-emerald-800/60" : "border-emerald-200",
      text: darkMode ? "text-emerald-300" : "text-emerald-700",
    },
    pastelRose: {
      bg: darkMode ? "bg-rose-950/40" : "bg-rose-50",
      border: darkMode ? "border-rose-800/60" : "border-rose-200",
      text: darkMode ? "text-rose-300" : "text-rose-700",
    },
    pastelAmber: {
      bg: darkMode ? "bg-amber-950/40" : "bg-amber-50",
      border: darkMode ? "border-amber-800/60" : "border-amber-200",
      text: darkMode ? "text-amber-300" : "text-amber-700",
    },
    pastelIndigo: {
      bg: darkMode ? "bg-indigo-950/40" : "bg-indigo-50",
      border: darkMode ? "border-indigo-800/60" : "border-indigo-200",
      text: darkMode ? "text-indigo-300" : "text-indigo-700",
    },
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        resolvedTheme,
        darkMode,
        toggleTheme,
        colors,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};