import React from 'react';

export default function QuickLinks({ subtle = false }) {
  return (
    <footer className={`w-full ${subtle ? 'border-t border-white/10 bg-neutral-950' : 'bg-neutral-950/60'} mt-10`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-sm text-white/70">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a href="#" className="hover:text-white transition">About</a>
            <a href="#" className="hover:text-white transition">Advertising</a>
            <a href="#" className="hover:text-white transition">Business</a>
            <a href="#" className="hover:text-white transition">How Search works</a>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Settings</a>
          </div>
        </div>
        <div className="pt-4 text-xs text-white/50">© {new Date().getFullYear()} Kenz Digital. Koogle is a playful clone UI demo.</div>
      </div>
    </footer>
  );
}
