import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative">
      {/* 3D Scene */}
      <div className="relative h-[75vh] w-full overflow-hidden">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Decorative gradient overlays should not block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/80 to-transparent" />
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300 backdrop-blur">
              Tech • Portfolio • Interactive
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
              Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-violet-400">Your Name</span>
            </h1>
            <p className="mt-4 text-slate-300/90">
              A creative developer crafting modern, playful, and high‑performance web experiences.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-transform hover:scale-[1.02]"
              >
                Explore Projects
                <ArrowRight className="transition-transform group-hover:translate-x-0.5" size={18} />
              </a>
              <a
                href="https://github.com" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 hover:bg-white/10"
              >
                <Github size={18} /> GitHub
              </a>
              <a
                href="https://linkedin.com" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 hover:bg-white/10"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
