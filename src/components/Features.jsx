import React from 'react';
import { Globe, BookOpen, Cpu, Leaf } from 'lucide-react';

const items = [
  {
    icon: Globe,
    title: 'Interactive Earth',
    desc: 'Click and drag to rotate a live 3D globe. Explore regions and perspectives with fluid performance.',
  },
  {
    icon: BookOpen,
    title: 'Education Ready',
    desc: 'Designed for classrooms and workshops with clear visuals, captions, and shareable scenes.',
  },
  {
    icon: Cpu,
    title: 'Tech Forward',
    desc: 'Powered by modern WebGL and React, delivering a smooth, responsive, and accessible experience.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    desc: 'Showcase environmental datasets to inspire action and informed decision‑making.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-16 md:py-24 bg-neutral-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_50%_at_50%_0%,rgba(239,68,68,0.15),rgba(0,0,0,0))]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold">Built for impact</h2>
          <p className="mt-2 text-white/70">Technology, education, and the environment come together in an engaging, corporate‑ready interface.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] transition">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-red-600/20 text-red-400">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-medium">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
