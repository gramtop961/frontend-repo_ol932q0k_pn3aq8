import React from 'react';
import { Code2, Rocket, Sparkles, Briefcase, School, Award } from 'lucide-react';

function SectionWrapper({ id, title, subtitle, children }) {
  return (
    <section id={id} className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-transparent" />
      <div className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent">
            {title}
          </span>
        </h2>
        {subtitle && <p className="mt-2 text-slate-400">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
}

function Projects() {
  const cards = [
    {
      icon: <Rocket className="text-cyan-400" size={22} />, 
      title: 'Realtime Dashboard',
      desc: 'Interactive analytics with live data and delightful motion.',
      chips: ['React', 'WebSockets', 'Framer Motion'],
    },
    {
      icon: <Code2 className="text-fuchsia-400" size={22} />, 
      title: 'Design System',
      desc: 'Accessible components and tokens powering multiple apps.',
      chips: ['Design Tokens', 'Radix', 'Storybook'],
    },
    {
      icon: <Sparkles className="text-violet-400" size={22} />, 
      title: 'AI Playground',
      desc: 'Conversational UI with creative generation tools.',
      chips: ['FastAPI', 'OpenAI', 'Tailwind'],
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((c) => (
        <article key={c.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-5 backdrop-blur transition-transform hover:scale-[1.01]">
          <div className="absolute inset-px rounded-2xl bg-[radial-gradient(120px_80px_at_top_left,rgba(56,189,248,0.15),transparent)]" />
          <div className="relative">
            <div className="mb-3 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm">
              {c.icon}
              <span className="font-medium text-slate-200">{c.title}</span>
            </div>
            <p className="text-sm text-slate-400">{c.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {c.chips.map((chip) => (
                <span key={chip} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

function Experience() {
  const items = [
    {
      role: 'Senior Frontend Engineer',
      org: 'TechNova',
      period: '2023 — Present',
      points: ['Led UI platform revamp', 'Shipped performance improvements', 'Mentored engineers'],
    },
    {
      role: 'Full‑Stack Developer',
      org: 'CloudCraft',
      period: '2021 — 2023',
      points: ['Built scalable APIs', 'Implemented CI/CD', 'Launched customer portal'],
    },
    {
      role: 'Frontend Developer',
      org: 'Creative Hub',
      period: '2019 — 2021',
      points: ['Established design system', 'A11y compliance', 'Micro‑frontend rollout'],
    },
  ];

  return (
    <ol className="relative border-l border-white/10 pl-6">
      {items.map((item, idx) => (
        <li key={idx} className="mb-10">
          <div className="absolute -left-[9px] mt-1 h-4 w-4 rounded-full border border-cyan-400/40 bg-cyan-400/20" />
          <h3 className="text-lg font-semibold text-slate-100">
            {item.role} · <span className="text-slate-300">{item.org}</span>
          </h3>
          <p className="text-xs text-slate-400">{item.period}</p>
          <ul className="mt-2 ml-4 list-disc space-y-1 text-sm text-slate-300/90">
            {item.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}

function Certificates() {
  const certs = [
    { title: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', year: '2024' },
    { title: 'Google Professional Cloud Developer', issuer: 'Google Cloud', year: '2023' },
    { title: 'Meta Front-End Developer', issuer: 'Meta', year: '2022' },
    { title: 'Scrum Master (PSM I)', issuer: 'Scrum.org', year: '2021' },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {certs.map((c) => (
        <div key={c.title} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120px_80px_at_top_right,rgba(168,85,247,0.15),transparent)]" />
          <div className="relative">
            <div className="mb-3 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm">
              <Award className="text-violet-400" size={18} />
              <span className="font-medium text-slate-200">{c.title}</span>
            </div>
            <p className="text-sm text-slate-400">{c.issuer}</p>
            <p className="mt-1 text-xs text-slate-500">Issued {c.year}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Sections() {
  return (
    <>
      <SectionWrapper id="projects" title="Projects" subtitle="A few things I’ve been building lately.">
        <Projects />
      </SectionWrapper>

      <SectionWrapper id="experience" title="Experience" subtitle="Roles and milestones that shaped my craft.">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Experience />
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6">
            <div className="mb-3 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm">
              <Briefcase className="text-cyan-400" size={18} />
              <span className="font-medium text-slate-200">What I love</span>
            </div>
            <p className="text-sm text-slate-300/90">
              Designing joyful interfaces, elevating performance, and shaping systems that scale elegantly.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="certificates" title="Certificates" subtitle="Proof of continuous learning and curiosity.">
        <Certificates />
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="mb-2 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm">
            <School className="text-fuchsia-400" size={18} />
            <span className="font-medium text-slate-200">Education</span>
          </div>
          <p className="text-sm text-slate-300/90">B.Sc. in Computer Science — University of Somewhere</p>
        </div>
      </SectionWrapper>
    </>
  );
}
