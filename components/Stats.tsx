'use client';

import { useEffect, useRef, useState } from 'react';

const METRICS = [
  {
    value: 97,
    suffix: '%',
    label: 'Billing Error Reduction',
    sub: '2.3% → 0.06% - Teladoc, 50K+ members',
    decimals: 0,
  },
  {
    value: 1.5,
    suffix: 'M+',
    label: 'Records Reconciled',
    sub: 'Legacy SAS ↔ 1CDP - error rate: zero',
    decimals: 1,
  },
  {
    value: 3,
    suffix: 'M+',
    label: 'Records / Week',
    sub: 'PySpark pipelines at national scale',
    decimals: 0,
  },
  {
    value: 80,
    suffix: '%',
    label: 'Issues Intercepted',
    sub: 'Pre-submission data quality catch rate',
    decimals: 0,
  },
];

function AnimatedCounter({
  target,
  suffix,
  decimals,
}: {
  target: number;
  suffix: string;
  decimals: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1600;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const tick = setInterval(() => {
            current = Math.min(current + increment, target);
            const display = decimals > 0 ? current.toFixed(decimals) : Math.floor(current).toString();
            setCount(parseFloat(display));
            if (current >= target) clearInterval(tick);
          }, duration / steps);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, decimals]);

  const display = decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toString();

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative py-14 border-y border-cyan-500/8 bg-[#080c14] overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(6,182,212,0.04)_0%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {METRICS.map((m) => (
            <div key={m.label} className="text-center group">
              {/* Number */}
              <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-cyan-400 font-mono mb-2 leading-none">
                <AnimatedCounter target={m.value} suffix={m.suffix} decimals={m.decimals} />
              </div>

              {/* Label */}
              <div className="text-sm font-semibold text-slate-300 mb-1">{m.label}</div>

              {/* Sub-label */}
              <div className="text-xs text-slate-600 leading-snug max-w-[160px] mx-auto">
                {m.sub}
              </div>

              {/* Accent line */}
              <div className="mt-4 mx-auto w-8 h-px bg-cyan-500/30 group-hover:w-16 group-hover:bg-cyan-400/50 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
