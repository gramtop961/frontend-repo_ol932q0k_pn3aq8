import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Sections from './components/Sections.jsx';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-100 scroll-smooth">
      <Navbar />
      <main id="home" className="relative">
        <Hero />
        <Sections />
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Your Name — Crafted with passion.
      </footer>
    </div>
  );
}
