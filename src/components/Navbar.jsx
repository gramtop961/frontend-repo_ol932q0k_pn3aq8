import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#certificates', label: 'Certificates' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent" />
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 mb-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5">
          <a href="#home" className="relative ml-4 inline-flex items-center gap-2 py-3 text-lg font-semibold tracking-tight">
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_20px_4px] shadow-cyan-500/50" />
            <span>My Portfolio</span>
          </a>

          <div className="hidden md:flex items-center gap-2 pr-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-xl px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden mr-2 inline-flex items-center justify-center rounded-xl p-2 text-slate-200 hover:bg-white/10"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden -mt-2 mb-4 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur supports-[backdrop-filter]:bg-white/5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-slate-300 hover:text-white hover:bg-white/10"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
