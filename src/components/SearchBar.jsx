import { useEffect, useRef, useState } from 'react';
import { Search, Wand2 } from 'lucide-react';

export default function SearchBar({ onSearch, placeholder = 'Search...', onFeelingCosmic }) {
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  function submit() {
    onSearch?.(value);
  }

  function onKeyDown(e) {
    if (e.key === 'Enter') submit();
    if (e.key === 'Escape') inputRef.current?.blur();
  }

  return (
    <div className="w-full group">
      <div className={`relative transition-all ${focused ? 'scale-[1.01]' : ''}`}>
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-fuchsia-500/30 via-cyan-400/30 to-violet-600/30 blur-xl opacity-40 group-hover:opacity-60 transition pointer-events-none" />
        <div className="relative rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-[#0b0b15]/70 backdrop-blur-md shadow-lg">
          <div className="flex items-center gap-3 px-4 py-3">
            <Search className="h-5 w-5 text-slate-500 dark:text-slate-300" />
            <input
              ref={inputRef}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              onKeyDown={onKeyDown}
              placeholder={`${placeholder}  (Press ⌘/Ctrl + K)`}
              className="flex-1 bg-transparent outline-none text-base placeholder:text-slate-400 dark:placeholder:text-slate-500"
            />
            <button
              onClick={submit}
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-4 py-2 text-sm font-medium hover:opacity-90 active:opacity-80 transition"
            >
              Search
            </button>
            <button
              type="button"
              onClick={onFeelingCosmic}
              className="ml-2 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-violet-600 text-white px-3 py-2 text-sm font-medium hover:opacity-90 active:opacity-80 transition"
            >
              <Wand2 className="h-4 w-4" />
              I'm feeling cosmic
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
