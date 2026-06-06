'use client';

import { useEffect, useRef, useState } from 'react';

const SKILL_GROUPS = [
  {
    category: 'Core Languages',
    accent: 'cyan',
    skills: ['SQL', 'Python', 'PySpark', 'SAS', 'R'],
  },
  {
    category: 'Data Platforms',
    accent: 'violet',
    skills: ['PostgreSQL', 'Redshift', 'SQL Server', 'Snowflake', 'Databricks'],
  },
  {
    category: 'Cloud & ETL',
    accent: 'blue',
    skills: ['AWS S3', 'AWS Glue', 'AWS Lambda', 'Azure Data Lake', 'n8n'],
  },
  {
    category: 'BI & Reporting',
    accent: 'emerald',
    skills: ['Power BI', 'Tableau', 'Metabase'],
  },
  {
    category: 'AI & Automation',
    accent: 'amber',
    skills: ['Claude API', 'LLM Integration', 'Prompt Engineering', 'Apify', 'Pipeline Automation'],
  },
  {
    category: 'Frontend & APIs',
    accent: 'pink',
    skills: ['React', 'JavaScript', 'Node.js', 'Express', 'REST APIs'],
  },
];

const ACCENT_MAP: Record<string, string> = {
  cyan:    'bg-cyan-500/8 text-cyan-300 border-cyan-500/20 hover:bg-cyan-500/15',
  violet:  'bg-violet-500/8 text-violet-300 border-violet-500/20 hover:bg-violet-500/15',
  blue:    'bg-blue-500/8 text-blue-300 border-blue-500/20 hover:bg-blue-500/15',
  emerald: 'bg-emerald-500/8 text-emerald-300 border-emerald-500/20 hover:bg-emerald-500/15',
  amber:   'bg-amber-500/8 text-amber-300 border-amber-500/20 hover:bg-amber-500/15',
  pink:    'bg-pink-500/8 text-pink-300 border-pink-500/20 hover:bg-pink-500/15',
};

const HEADER_MAP: Record<string, string> = {
  cyan:    'text-cyan-400/50',
  violet:  'text-violet-400/50',
  blue:    'text-blue-400/50',
  emerald: 'text-emerald-400/50',
  amber:   'text-amber-400/50',
  pink:    'text-pink-400/50',
};

export default function Skills() {
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
    <section id="skills" className="py-28 bg-[#0a0f1a]">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Section heading */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-cyan-400 tracking-widest">04.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-100">Skills</h2>
          <div className="flex-1 h-px bg-cyan-500/15 max-w-xs" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_GROUPS.map((group, i) => (
            <div
              key={group.category}
              className="bg-[#0f1624] border border-cyan-500/8 hover:border-cyan-500/15 rounded-2xl p-6 transition-colors duration-200"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <p
                className={`font-mono text-[11px] tracking-[0.2em] uppercase mb-4 ${HEADER_MAP[group.accent]}`}
              >
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 text-xs rounded-lg border font-medium cursor-default transition-colors ${ACCENT_MAP[group.accent]}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-slate-700 text-xs font-mono mt-10">
          Core stack: SQL &middot; Python &middot; PySpark &middot; Power BI &middot; Claude API
        </p>
      </div>
    </section>
  );
}
