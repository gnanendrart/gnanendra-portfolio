'use client';

import { useEffect, useState } from 'react';

const BADGES = [
  { label: 'Years Experience', value: '8+' },
  { label: 'Records / Week', value: '3M+' },
  { label: 'Facilities Served', value: '15K+' },
  { label: 'Achieved Error Rate', value: '0%' },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dot-grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(6,182,212,0.12) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* Soft cyan glow at centre */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(6,182,212,0.07)_0%,transparent_100%)] pointer-events-none" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080c14] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20">
        {/* Role tag */}
        <div
          className={`flex items-center gap-3 mb-7 transition-all duration-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="h-px w-10 bg-cyan-400/60" />
          <span className="font-mono text-xs tracking-[0.25em] text-cyan-400 uppercase">
            Senior Data Analyst
          </span>
        </div>

        {/* Name */}
        <h1
          className={`text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.05] mb-6 transition-all duration-700 delay-75 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="text-slate-100">Gnanendra</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-violet-400">
            Reddy
          </span>
        </h1>

        {/* Tagline */}
        <p
          className={`text-xl md:text-2xl font-semibold text-slate-300 mb-4 transition-all duration-700 delay-150 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          I find data problems before they find you.
        </p>

        {/* Descriptor */}
        <p
          className={`text-slate-400 text-base md:text-lg max-w-xl mb-10 leading-relaxed transition-all duration-700 delay-200 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Eight years building pipelines that don&apos;t lie — across national public health
          infrastructure, enterprise billing operations, and AI-augmented analytics tooling.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row gap-4 mb-16 transition-all duration-700 delay-300 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-[#080c14] font-semibold rounded-xl transition-all duration-200 hover:shadow-[0_0_28px_rgba(6,182,212,0.45)] text-sm"
          >
            View Projects
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-cyan-500/30 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 font-medium rounded-xl transition-all duration-200 text-sm"
          >
            Get In Touch
          </a>
          <a
            href="https://github.com/gnanendrart"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/8 hover:border-white/20 text-slate-500 hover:text-slate-300 font-medium rounded-xl transition-all duration-200 text-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>

        {/* Metric badges */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-4 gap-3 transition-all duration-700 delay-500 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {BADGES.map((b) => (
            <div
              key={b.label}
              className="relative bg-[#0f1624]/70 backdrop-blur-sm border border-cyan-500/10 hover:border-cyan-500/30 rounded-2xl p-4 transition-all duration-200 hover:bg-[#0f1624] group cursor-default"
            >
              <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-1 font-mono group-hover:text-cyan-300 transition-colors">
                {b.value}
              </div>
              <div className="text-[11px] text-slate-500 font-medium leading-tight">{b.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-700">
        <span className="font-mono text-[10px] tracking-[0.3em]">SCROLL</span>
        <div className="w-px h-10 bg-gradient-to-b from-slate-700 to-transparent" />
      </div>
    </section>
  );
}
