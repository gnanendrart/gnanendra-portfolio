'use client';

import { useEffect, useRef, useState } from 'react';

const LINKS = [
  {
    label: 'Email',
    value: 'gnanendratugu@gmail.com',
    href: 'mailto:gnanendratugu@gmail.com',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/gnanendrart',
    href: 'https://linkedin.com/in/gnanendrart',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/gnanendrart',
    href: 'https://github.com/gnanendrart',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="py-28 bg-[#080c14] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(6,182,212,0.05)_0%,transparent_100%)] pointer-events-none" />

      <div
        ref={ref}
        className={`relative max-w-2xl mx-auto px-6 text-center transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Section heading */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className="font-mono text-xs text-cyan-400 tracking-widest">05.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-100">Let&apos;s Talk</h2>
        </div>

        {/* Message */}
        <p className="text-slate-400 text-lg leading-relaxed mb-4 max-w-lg mx-auto">
          Open to senior data roles where pipeline reliability and data quality are real
          requirements — not aspirations.
        </p>
        <p className="text-slate-600 text-sm mb-12">
          Healthcare, fintech, public sector, or any domain where the data actually matters.
        </p>

        {/* Primary CTA */}
        <a
          href="mailto:gnanendratugu@gmail.com"
          className="inline-flex items-center gap-3 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-[#080c14] font-semibold rounded-xl transition-all duration-200 hover:shadow-[0_0_36px_rgba(6,182,212,0.45)] text-base mb-14"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Say hello
        </a>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-slate-800" />
          <span className="text-slate-700 text-xs">or find me on</span>
          <div className="flex-1 h-px bg-slate-800" />
        </div>

        {/* Link cards */}
        <div className="grid sm:grid-cols-3 gap-3">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2.5 py-5 px-4 bg-[#0f1624] border border-cyan-500/8 hover:border-cyan-500/25 rounded-xl transition-all duration-200 group hover:bg-[#0f1624]"
            >
              <span className="text-slate-500 group-hover:text-cyan-400 transition-colors">
                {link.icon}
              </span>
              <span className="text-xs font-semibold text-slate-400 group-hover:text-slate-200 transition-colors">
                {link.label}
              </span>
              <span className="text-[11px] text-slate-700 font-mono truncate w-full text-center">
                {link.value}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
