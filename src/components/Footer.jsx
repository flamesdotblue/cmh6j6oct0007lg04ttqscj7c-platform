import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-white/80">© {new Date().getFullYear()} TerraTech. All rights reserved.</p>
            <p className="text-white/50 text-sm mt-1">Built with React, Vite, Tailwind, and Spline.</p>
          </div>
          <div className="flex gap-4 text-sm text-white/70">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#cta" className="hover:text-white transition">Get Started</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
