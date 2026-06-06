'use client';

import { useEffect, useRef, useState } from 'react';

const PROJECTS = [
  {
    title: 'AI Data Quality Checker',
    status: 'Open Source',
    statusColor: 'cyan',
    tagline: 'Sub-60s quality analysis on any dataset',
    description:
      'A Python CLI that packages the validation logic I built across years of CDC and Teladoc production work. Drop in any dataset and receive a ranked fix report in under 60 seconds. Covers eight categories: missing values, type mismatches, duplicates, outliers, cardinality anomalies, cross-column inconsistencies, schema drift, and statistical distribution flags. Sends structured findings to the Claude API for intelligent root-cause diagnosis and prioritized fix recommendations.',
    tech: ['Python', 'pandas', 'Claude API', 'CLI'],
    github: 'https://github.com/gnanendrart/ai-data-quality-checker',
    demo: null,
    highlight: {
      icon: '⚡',
      text: 'Built from patterns found in 3M+ records/week pipelines',
    },
  },
  {
    title: 'AI Job Search Agent',
    status: 'Live Demo',
    statusColor: 'green',
    tagline: 'End-to-end job pipeline automation',
    description:
      'A full-stack automation tool that handles everything a job seeker does manually — at machine speed. Scrapes fresh listings from multiple boards via Apify, ATS-scores each against a target resume, rewrites relevant bullet points per role, and generates tailored cover letters on demand. An automated overnight pipeline runs daily on a $7/month VPS: LinkedIn and Indeed scraped in parallel, roles scored with Claude Haiku, resumes tailored with Sonnet, PDFs rendered and emailed as a morning digest.',
    tech: ['React', 'Express', 'Node.js', 'Claude API', 'Apify'],
    github: 'https://github.com/gnanendrart/job-hunt-agent',
    demo: 'https://github.com/gnanendrart/job-hunt-agent',
    highlight: {
      icon: '🤖',
      text: 'Runs autonomously overnight on $7/month VPS',
    },
  },
];

function GitHubIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

export default function Projects() {
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

  return (
    <section id="projects" className="py-28 bg-[#0a0f1a]">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Section heading */}
        <div className="flex items-center gap-4 mb-4">
          <span className="font-mono text-xs text-cyan-400 tracking-widest">02.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-100">Featured Projects</h2>
          <div className="flex-1 h-px bg-cyan-500/15 max-w-xs" />
        </div>
        <p className="text-slate-600 text-sm mb-12 pl-9">Things I built that run in production — not just on localhost.</p>

        <div className="grid lg:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => (
            <div
              key={p.title}
              className="group relative flex flex-col bg-[#0f1624] border border-cyan-500/10 hover:border-cyan-500/25 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_48px_-8px_rgba(6,182,212,0.12)]"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Top accent line */}
              <div className={`h-px w-full bg-gradient-to-r ${i === 0 ? 'from-cyan-400/60 via-cyan-400/20 to-transparent' : 'from-green-400/60 via-green-400/20 to-transparent'}`} />

              <div className="flex flex-col flex-1 p-7 md:p-8">
                {/* Header row */}
                <div className="flex items-center justify-between mb-5">
                  <span
                    className={`inline-flex items-center gap-1.5 font-mono text-[11px] px-2.5 py-1 rounded-full border ${
                      p.statusColor === 'green'
                        ? 'bg-green-500/8 text-green-400 border-green-500/20'
                        : 'bg-cyan-500/8 text-cyan-400 border-cyan-500/20'
                    }`}
                  >
                    {p.statusColor === 'green' && (
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    )}
                    {p.status}
                  </span>

                  {/* Icon links */}
                  <div className="flex items-center gap-3">
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-600 hover:text-cyan-400 transition-colors"
                        title="Live demo"
                      >
                        <ExternalIcon />
                      </a>
                    )}
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-cyan-400 transition-colors"
                      title="GitHub repository"
                    >
                      <GitHubIcon />
                    </a>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors mb-1">
                  {p.title}
                </h3>
                <p className="text-xs text-cyan-400/60 font-mono mb-4">{p.tagline}</p>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">{p.description}</p>

                {/* Highlight callout */}
                <div className="flex items-start gap-2.5 bg-cyan-500/5 border border-cyan-500/10 rounded-xl px-4 py-3 mb-5">
                  <span className="text-sm mt-px">{p.highlight.icon}</span>
                  <span className="text-xs text-cyan-400/80 leading-snug">{p.highlight.text}</span>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 bg-[#1a2035] border border-slate-700/40 text-slate-500 text-[11px] rounded-md font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
