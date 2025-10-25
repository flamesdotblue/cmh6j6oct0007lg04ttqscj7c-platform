import React, { useMemo } from 'react';

function makeMockResults(query) {
  const base = query || 'kenz digital';
  const domains = [
    'koogle.com',
    'kenz.digital',
    'blog.kenz.digital',
    'docs.koogle.dev',
    'labs.kenz.digital',
    'about.koogle.com',
  ];
  return domains.map((d, i) => ({
    title: `${base} — ${i % 2 === 0 ? 'Official' : 'Insights'}`,
    url: `https://${d}/search?q=${encodeURIComponent(base)}&ref=${i + 1}`,
    desc:
      i % 2 === 0
        ? `Explore ${base} resources, updates, and tools crafted by Kenz Digital. Learn how we build, ship, and scale.`
        : `Deep dives, tutorials, and community contributions about ${base}. Tips to get the most out of your workflow.`,
  }));
}

export default function SearchResults({ query }) {
  const results = useMemo(() => makeMockResults(query), [query]);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="text-sm text-white/60 mb-4">About {Math.floor(100000 + Math.random() * 900000).toLocaleString()} results (0.{Math.floor(Math.random() * 9)}{Math.floor(Math.random() * 9)} seconds)</div>

      {/* Featured snippet style card */}
      <div className="mb-6 rounded-xl border border-white/10 bg-white/5 p-5">
        <div className="text-xs uppercase tracking-wide text-white/50">Featured</div>
        <a href="#" className="mt-1 inline-block text-lg font-medium text-blue-400 hover:underline">
          What is Koogle by Kenz Digital?
        </a>
        <p className="mt-2 text-white/80 text-sm leading-relaxed">
          Koogle is a sleek, Google-inspired search UI built with React and Tailwind. It demonstrates fast search interactions, clean typography, and a familiar layout — all optimized for modern web stacks.
        </p>
      </div>

      {results.map((r) => (
        <div key={r.url} className="mb-6">
          <a href={r.url} className="text-sm text-green-400 hover:underline break-all">{r.url.replace(/^https?:\/\//, '')}</a>
          <div className="mt-1">
            <a href={r.url} className="text-xl text-blue-400 hover:underline font-medium">{r.title}</a>
          </div>
          <p className="mt-1 text-white/80 text-sm leading-relaxed">{r.desc}</p>
        </div>
      ))}

      <div className="mt-10 flex items-center justify-center gap-3 text-sm">
        <button className="px-4 py-2 rounded border border-white/10 bg-white/5 hover:bg-white/10 text-white/80">Previous</button>
        <button className="px-4 py-2 rounded border border-white/10 bg-white/5 hover:bg-white/10 text-white/80">Next</button>
      </div>
    </div>
  );
}
