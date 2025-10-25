import React, { useMemo, useState } from 'react';
import KoogleLogo from './components/KoogleLogo';
import SearchBar from './components/SearchBar';
import QuickLinks from './components/QuickLinks';
import SearchResults from './components/SearchResults';

export default function App() {
  const [query, setQuery] = useState('');
  const [view, setView] = useState('home'); // 'home' | 'results'

  const handleSearch = (q) => {
    const next = (q ?? '').trim();
    setQuery(next);
    if (next.length > 0) setView('results');
  };

  const handleLucky = () => {
    // Simple demo: send to results with a featured card
    const luckyQuery = query || 'kenz digital';
    handleSearch(luckyQuery);
  };

  const home = (
    <div className="min-h-screen flex flex-col bg-neutral-950 text-white">
      <header className="h-16"></header>
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <KoogleLogo subtitle="by Kenz Digital" size="lg" />
        <div className="mt-8 w-full max-w-2xl">
          <SearchBar
            placeholder="Search Koogle or type a URL"
            onSearch={handleSearch}
            onLucky={handleLucky}
          />
        </div>
      </main>
      <QuickLinks />
    </div>
  );

  const results = (
    <div className="min-h-screen flex flex-col bg-neutral-950 text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4">
          <button
            className="shrink-0"
            onClick={() => setView('home')}
            aria-label="Koogle Home"
          >
            <KoogleLogo size="sm" />
          </button>
          <div className="flex-1 max-w-3xl">
            <SearchBar
              initialQuery={query}
              compact
              onSearch={handleSearch}
            />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <SearchResults query={query} />
      </main>
      <QuickLinks subtle />
    </div>
  );

  return view === 'results' ? results : home;
}
