import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full" aria-label="Interactive 3D Globe Hero">
      <div className="relative h-[78vh] md:h-[86vh] overflow-hidden">
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/M2rj0DQ6tP7dSzSz/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/60 via-black/20 to-black/70" />

        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              Live • Interactive 3D Earth
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
              Explore a smarter, greener world
              <span className="block text-red-400">through immersive learning</span>
            </h1>
            <p className="mt-4 text-white/80 text-base sm:text-lg">
              Spin, zoom, and discover data layers that power education, sustainability, and next‑gen tech. Built for teams, schools, and curious minds.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                id="cta"
                href="#features"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-red-600 text-white hover:bg-red-500 transition shadow-sm"
              >
                Start Exploring <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-white/15 bg-white/5 hover:bg-white/10 transition"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
