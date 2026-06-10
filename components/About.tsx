'use client';

import { useEffect, useRef, useState } from 'react';

const FOCUS_AREAS = [
  'Data Quality Engineering',
  'Pipeline Reconciliation',
  'Root-Cause Investigation',
  'AI-Augmented Analytics',
  'Production Automation',
  'Healthcare & Public Health',
  'PySpark at Scale',
  'Statistical Analysis',
];

const QUICK_FACTS = [
  { icon: '📍', text: 'Calgary, Alberta, Canada' },
  { icon: '🎓', text: 'M.S. Information Management - UIUC' },
  { icon: '🇨🇦', text: 'Permanent Resident - eligible to work in Canada' },
  { icon: '💼', text: 'Open to Senior Analyst / Data Engineer roles' },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

export default function About() {
  const { ref, visible } = useReveal();

  return (
    <section id="about" className="py-28 bg-[#080c14]">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Section heading */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-cyan-400 tracking-widest">01.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-100">About</h2>
          <div className="flex-1 h-px bg-cyan-500/15 max-w-xs" />
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Narrative */}
          <div className="space-y-5 text-slate-400 leading-relaxed text-[15px]">
            <p>
              Most data problems aren&apos;t obvious. They hide in ID mismatches, undocumented
              format changes, and edge cases that survived every test because nobody thought
              to look for them. I&apos;ve spent eight years learning to find those problems -
              starting in claims and logistics systems, then at national scale across public
              health infrastructure, and in enterprise billing operations.
            </p>
            <p>
              At CDC, I traced a pipeline discrepancy across 1.5M+ records to facility ID
              mismatches that had been corrupting weekly rate comparisons for months. At
              Teladoc, I rebuilt a billing reconciliation process from the root cause up -
              dropping data loss from 2.3% to 0.06% across 50,000+ enterprise members. The
              method is always the same: follow the data until the number makes sense.
            </p>
            <p>
              Beyond the investigation work, I build. My side projects use Claude, Apify, and
              Python to automate things that analysts spend too many hours doing by hand.
              These aren&apos;t demos - they run in production on real infrastructure.
            </p>
            <p>
              Currently based in Calgary. M.S. in Information Management from the University
              of Illinois at Urbana-Champaign. Open to senior roles where data quality and
              pipeline reliability are actual requirements, not aspirations.
            </p>

            {/* Inline social links */}
            <div className="flex flex-wrap gap-5 pt-2">
              {[
                {
                  label: 'LinkedIn',
                  href: 'https://linkedin.com/in/gnanendrart',
                  icon: (
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  ),
                },
                {
                  label: 'GitHub',
                  href: 'https://github.com/gnanendrart',
                  icon: (
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  ),
                },
              ].map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    {icon}
                  </svg>
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Right panel */}
          <div className="bg-[#0f1624] border border-cyan-500/10 rounded-2xl p-7 space-y-7">
            {/* Focus areas */}
            <div>
              <p className="font-mono text-[11px] tracking-[0.2em] text-slate-600 uppercase mb-4">
                Core Focus Areas
              </p>
              <div className="flex flex-wrap gap-2">
                {FOCUS_AREAS.map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1.5 bg-cyan-500/8 border border-cyan-500/15 text-cyan-300 text-xs rounded-lg font-medium hover:bg-cyan-500/15 hover:border-cyan-500/30 transition-colors cursor-default"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-slate-800/60" />

            {/* Quick facts */}
            <div>
              <p className="font-mono text-[11px] tracking-[0.2em] text-slate-600 uppercase mb-4">
                Quick Facts
              </p>
              <ul className="space-y-3">
                {QUICK_FACTS.map(({ icon, text }) => (
                  <li key={text} className="flex items-center gap-3 text-sm text-slate-400">
                    <span className="text-base">{icon}</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Divider */}
            <div className="border-t border-slate-800/60" />

            {/* Awards */}
            <div>
              <p className="font-mono text-[11px] tracking-[0.2em] text-slate-600 uppercase mb-4">
                Recognition
              </p>
              <ul className="space-y-2">
                {["Prime Minister's Scholarship Scheme", "Diamond in the Rough Award"].map((award) => (
                  <li key={award} className="flex items-center gap-2 text-sm text-slate-400">
                    <span className="text-amber-400 text-xs">★</span>
                    {award}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
