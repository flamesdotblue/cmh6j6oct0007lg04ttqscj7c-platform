import { ExternalLink } from 'lucide-react';

function Favicon({ url }) {
  try {
    const u = new URL(url);
    const src = `https://www.google.com/s2/favicons?domain=${u.hostname}&sz=64`;
    return <img src={src} alt="" className="h-5 w-5 rounded" loading="lazy" />;
  } catch {
    return <div className="h-5 w-5 rounded bg-slate-300 dark:bg-slate-700" />;
  }
}

function ResultCard({ item }) {
  return (
    <a href={item.url} target="_blank" rel="noreferrer" className="block rounded-xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-[#0c0c16]/60 backdrop-blur hover:border-slate-300 dark:hover:border-white/20 transition group">
      <div className="p-4">
        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
          <Favicon url={item.url} />
          <span className="truncate">{item.url}</span>
        </div>
        <h3 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white group-hover:underline decoration-slate-300/60">
          {item.title}
        </h3>
        <p className="mt-1 text-slate-600 dark:text-slate-300 line-clamp-2">{item.description}</p>
        {item.tags?.length ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {item.tags.slice(0, 6).map((t) => (
              <span key={t} className="text-[11px] rounded-full px-2 py-1 bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-slate-200">{t}</span>
            ))}
          </div>
        ) : null}
        <div className="mt-3 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <ExternalLink className="h-4 w-4" />
          <span>Open</span>
        </div>
      </div>
    </a>
  );
}

export default function ResultsList({ results = [], loading = false }) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-32 rounded-xl border border-slate-200/70 dark:border-white/10 bg-slate-100/60 dark:bg-white/5 animate-pulse" />
        ))}
      </div>
    );
  }

  if (!results.length) {
    return (
      <div className="text-center text-slate-600 dark:text-slate-300">
        <p>No results yet. Try a search above.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {results.map(item => (
        <ResultCard key={item.url} item={item} />
      ))}
    </div>
  );
}
