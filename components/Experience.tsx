'use client';

import { useEffect, useRef, useState } from 'react';

const EXPERIENCE = [
  {
    title: 'Senior Data Analyst',
    company: 'Centers for Disease Control and Prevention',
    via: 'Contractor via Goldbelt C6',
    period: 'Jun 2023 - Feb 2026',
    location: 'Remote',
    current: false,
    bullets: [
      'Traced pipeline discrepancies across 1.5M+ records to facility and organization ID mismatches, bringing legacy SAS and 1CDP platforms into full record parity. Weekly rate-comparison error rate: zero.',
      'Built PySpark pipelines on the 1CDP platform processing 3M+ records weekly across 6 facility types, replacing 5 hours of manual SQL work and enabling analytics to scale to national reporting.',
      'Engineered Python and SQL validation across the Influenza Vaccination Pathway that intercepted 80% of data quality issues before federal submission, cutting rework by 15%.',
      'Produced weekly and annual vaccination coverage reporting across 15,000+ sites for national CDC reporting.',
      'Identified and eliminated a recurring group-upload error in RPV surveillance affecting a multi-facility hospital group. Repeat error rate: zero.',
    ],
    tech: ['PySpark', 'Python', 'SQL', 'SAS', 'Azure Data Lake', 'Databricks'],
  },
  {
    title: 'Data Operations Analyst II',
    company: 'Teladoc Health',
    via: 'Contractor',
    period: 'Oct 2022 - May 2023',
    location: 'Remote',
    current: false,
    bullets: [
      'Reduced billing data loss from 2.3% to 0.06% across 5 enterprise partnerships covering 50,000+ members by rebuilding the root-cause analysis process and cross-team reconciliation workflow.',
      'Built SQL-driven automation and reporting pipelines that cut manual data operations by 30%, improving delivery reliability for downstream stakeholders.',
      'Developed automated monitoring checks across 5 enterprise data feeds enforcing quality standards: accuracy, completeness, and timeliness.',
    ],
    tech: ['SQL', 'Python', 'Power BI', 'Snowflake', 'Redshift'],
  },
  {
    title: 'Data Analyst',
    company: 'Centers for Disease Control and Prevention',
    via: 'Contractor via Goldbelt C6',
    period: 'Dec 2020 - Sep 2022',
    location: 'Remote',
    current: false,
    bullets: [
      'Led COVID-19 national surveillance analytics across 16,000+ long-term care facilities, producing three weekly executive reports for White House and inter-agency pandemic response planning.',
      'Analyzed 1M+ breakthrough case records using observed-to-expected ratio modeling against vaccine effectiveness benchmarks, producing insights that informed CDC policy and operational response.',
      'Redesigned data quality frameworks that cut reporting turnaround from 5 hours to 1 hour while improving output alignment with state health departments.',
    ],
    tech: ['Python', 'SQL', 'SAS', 'Tableau', 'R'],
  },
  {
    title: 'Programmer Analyst',
    company: 'Cognizant',
    via: 'Clients: UPS, Cigna, HealthNet',
    period: 'Aug 2014 - May 2018',
    location: 'Chennai, India',
    current: false,
    bullets: [
      'Reduced downstream delivery errors 15% for UPS by implementing SQL-based data integrity and validation checks in the AMS database.',
      'Cut claims-processing defect-fix costs 18% for Cigna by identifying static defects in the requirements phase, reducing rework cycles.',
      'Built Tableau dashboards improving route optimization efficiency 10% and dispatch efficiency 15% via a route-scenario proof of concept.',
    ],
    tech: ['SQL', 'Java', 'Tableau', 'Oracle DB'],
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.04 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-28 bg-[#080c14]">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Section heading */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-cyan-400 tracking-widest">03.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-100">Experience</h2>
          <div className="flex-1 h-px bg-cyan-500/15 max-w-xs" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical rule */}
          <div className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-500/30 via-cyan-500/10 to-transparent" />

          <div className="space-y-10">
            {EXPERIENCE.map((job, i) => (
              <div
                key={i}
                className="relative pl-14 md:pl-20 transition-all duration-700"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Timeline node */}
                <div className="absolute left-[11px] md:left-[19px] top-3 w-3 h-3 rounded-full bg-[#080c14] border-2 border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />

                {/* Card */}
                <div className="bg-[#0f1624] border border-cyan-500/8 hover:border-cyan-500/20 rounded-2xl p-6 md:p-7 transition-colors duration-200">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1.5 mb-5">
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-slate-100 leading-snug">
                        {job.title}
                      </h3>
                      <p className="text-cyan-400 text-sm font-medium mt-0.5">{job.company}</p>
                      <p className="text-slate-600 text-xs mt-0.5">
                        {job.via} &middot; {job.location}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-slate-600 whitespace-nowrap md:text-right mt-1">
                      {job.period}
                    </span>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2.5 mb-5">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-slate-400 leading-relaxed">
                        <span className="mt-[7px] w-1 h-1 rounded-full bg-cyan-400/60 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 bg-[#1a2035] border border-slate-800 text-slate-600 text-[11px] rounded font-mono"
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

        {/* Education strip */}
        <div className="mt-16 pt-12 border-t border-slate-800/60">
          <p className="font-mono text-[11px] tracking-[0.2em] text-slate-600 uppercase mb-6">Education</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                degree: 'M.S. Information Management',
                school: 'University of Illinois at Urbana-Champaign',
                year: '2020',
              },
              {
                degree: 'B.E. Electronics & Communication',
                school: 'Sathyabama University, Chennai',
                year: '2014',
              },
            ].map((edu) => (
              <div
                key={edu.degree}
                className="flex items-start gap-4 bg-[#0f1624] border border-cyan-500/8 rounded-xl p-5"
              >
                <div className="text-2xl pt-0.5">🎓</div>
                <div>
                  <p className="text-slate-200 text-sm font-semibold">{edu.degree}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{edu.school}</p>
                  <p className="text-cyan-400/50 text-xs font-mono mt-1">{edu.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
