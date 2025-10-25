import { useEffect, useMemo, useState } from 'react';
import HeroSpline from './components/HeroSpline';
import SearchBar from './components/SearchBar';
import ResultsList from './components/ResultsList';
import ThemeToggle from './components/ThemeToggle';
import { KOOGLE_DATA } from './data/koogleData';

function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    return localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return { theme, setTheme };
}

function scoreEntry(q, entry) {
  const query = q.trim().toLowerCase();
  if (!query) return 0;
  const fields = [entry.title, entry.description, entry.url, ...(entry.tags || [])]
    .join(' \n ')
    .toLowerCase();

  let score = 0;
  // exact includes
  if (fields.includes(query)) score += 20;
  // token partials
  const tokens = query.split(/\s+/).filter(Boolean);
  for (const t of tokens) {
    if (fields.includes(t)) score += 8;
    if (entry.title.toLowerCase().includes(t)) score += 10;
    if (entry.tags?.some(tag => tag.toLowerCase() === t)) score += 6;
  }
  // prefix boost
  if (entry.title.toLowerCase().startsWith(query)) score += 12;
  // popularity boost
  if (typeof entry.rank === 'number') score += Math.max(0, 10 - entry.rank);
  return score;
}

function searchData(query) {
  const q = query.trim();
  if (!q) return [];
  const results = KOOGLE_DATA.map(item => ({ item, score: scoreEntry(q, item) }))
    .filter(r => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 12)
    .map(r => r.item);
  return results;
}

export default function App() {
  const { theme, setTheme } = useTheme();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [searching, setSearching] = useState(false);

  const placeholder = useMemo(() => {
    const examples = ['galaxy wallpapers', 'react hooks guide', 'best ramen recipes', 'learn typescript', 'open source icons'];
    return examples[Math.floor(Math.random() * examples.length)];
  }, []);

  function handleSearch(q) {
    setSearching(true);
    setQuery(q);
    // Simulate quick async for UX polish
    setTimeout(() => {
      const r = searchData(q);
      setResults(r);
      setSearching(false);
    }, 120);
  }

  function feelingCosmic() {
    // pick a random tag and search it
    const allTags = KOOGLE_DATA.flatMap(x => x.tags || []);
    const tag = allTags[Math.floor(Math.random() * allTags.length)] || 'inspiration';
    handleSearch(tag);
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 transition-colors duration-300 dark:bg-[#080811] dark:text-slate-100">
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-[#080811]/60 border-b border-slate-200/60 dark:border-white/10">
        <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-fuchsia-500 via-cyan-400 to-violet-600 animate-pulse" aria-hidden />
            <span className="font-semibold tracking-tight text-lg">koogle</span>
          </div>
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
      </header>

      <main className="pt-16">
        <section className="relative h-[60vh] min-h-[480px] w-full overflow-hidden">
          <HeroSpline />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/20 via-white/10 to-white dark:from-[#080811]/30 dark:via-[#080811]/40 dark:to-[#080811]" />
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="w-full max-w-3xl">
              <div className="text-center mb-6">
                <h1 className="text-4xl md:text-6xl font-semibold tracking-tight drop-shadow-sm">Search the cosmic web</h1>
                <p className="mt-3 text-slate-600 dark:text-slate-300">Koogle navigates galaxies of knowledge with speed and style.</p>
              </div>
              <SearchBar onSearch={handleSearch} placeholder={placeholder} onFeelingCosmic={feelingCosmic} />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-10">
          {query && (
            <div className="mb-4 text-sm text-slate-600 dark:text-slate-300">Showing results for: <span className="font-medium text-slate-900 dark:text-white">{query}</span></div>
          )}
          <ResultsList results={results} loading={searching} />
        </section>
      </main>

      <footer className="border-t border-slate-200/60 dark:border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-slate-500 dark:text-slate-400 flex items-center justify-between">
          <span>© {new Date().getFullYear()} koogle • built for exploration</span>
          <a className="hover:text-slate-700 dark:hover:text-slate-200 transition" href="https://spline.design" target="_blank" rel="noreferrer">Hero by Spline</a>
        </div>
      </footer>
    </div>
  );
}
