import React, { useEffect, useRef, useState } from 'react';
import { Search } from 'lucide-react';

export default function SearchBar({ initialQuery = '', placeholder = 'Search', compact = false, onSearch, onLucky }) {
  const [value, setValue] = useState(initialQuery);
  const inputRef = useRef(null);

  useEffect(() => {
    setValue(initialQuery);
  }, [initialQuery]);

  const submit = () => {
    if (typeof onSearch === 'function') onSearch(value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') submit();
  };

  return (
    <div className={`w-full ${compact ? '' : 'flex flex-col items-center'}`}>
      <div className={`relative w-full ${compact ? '' : 'max-w-2xl mx-auto'}`}>
        <div className={`group flex items-center gap-2 rounded-full border border-white/10 bg-neutral-900/70 hover:bg-neutral-900/90 focus-within:bg-neutral-900/90 transition shadow-sm ${compact ? 'px-4 py-2' : 'px-5 py-3'} `}>
          <Search className="h-4 w-4 text-white/60" />
          <input
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className="flex-1 bg-transparent outline-none text-sm sm:text-base placeholder:text-white/40"
            aria-label="Search"
          />
          <button
            onClick={submit}
            className="hidden sm:inline-flex text-xs px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/15 text-white/80"
          >
            Search
          </button>
        </div>
      </div>
      {!compact && (
        <div className="flex items-center gap-3 justify-center mt-6">
          <button
            onClick={submit}
            className="px-4 py-2 rounded bg-white/10 hover:bg-white/15 text-sm text-white/90"
          >
            Koogle Search
          </button>
          <button
            onClick={onLucky}
            className="px-4 py-2 rounded bg-white/10 hover:bg-white/15 text-sm text-white/90"
          >
            I'm Feeling Lucky
          </button>
        </div>
      )}
    </div>
  );
}
