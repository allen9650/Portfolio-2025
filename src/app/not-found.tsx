'use client';

import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  const { colors } = useTheme();

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-4 text-center ${colors.primary} ${colors.text}`}>
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6 text-slate-400">Page not found</p>
      <Button asChild>
        <Link href="/">Return to Home</Link>
      </Button>
    </div>
  );
}

