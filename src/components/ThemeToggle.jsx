import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle({ theme, setTheme }) {
  const isDark = theme === 'dark';
  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="inline-flex items-center gap-2 rounded-xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-white/10 px-3 py-2 text-sm font-medium hover:bg-white/90 dark:hover:bg-white/20 transition"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      <span className="hidden sm:inline">{isDark ? 'Light' : 'Dark'} mode</span>
    </button>
  );
}
