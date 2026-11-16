import { cases, casesClosing } from '@/content/cases';
import { CheckIcon } from './icons';

export default function Cases() {
  return (
    <section id="cases" className="scroll-mt-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <h2 className="sr-only">Three cases at a glance</h2>
        <ul className="grid gap-10 md:grid-cols-3">
          {cases.map((c) => (
            <li key={c.id}>
              <a href={`#${c.id}`} className="group block border-t-2 border-ink pt-[18px]">
                <p className="text-sm font-semibold text-accent">{c.when}</p>
                <h3 className="mt-2.5 font-serif text-2xl font-semibold leading-[1.2] transition-colors duration-150 group-hover:text-accent lg:text-[26px]">
                  {c.title}
                </h3>
                <p className="mt-3 flex items-start gap-2 text-sm text-muted">
                  <CheckIcon size={16} className="mt-0.5 shrink-0 text-pass" />
                  <span>System reported: {c.reported}</span>
                </p>
                <p className="mt-3 text-[15px] leading-[1.6] text-muted">
                  {c.summary.before}
                  <span className="finding">{c.summary.finding}</span>
                  {c.summary.after}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto mt-20 w-full max-w-6xl px-5 sm:px-8 lg:mt-28">
        <h2 className="font-serif text-[32px] font-semibold leading-[1.1] tracking-[-0.01em] sm:text-[40px]">
          The three cases in full
        </h2>
        <p className="mt-4 max-w-[62ch] text-lg leading-[1.55] text-muted">
          In each one nothing errored and the numbers still looked plausible.
        </p>

        <div className="mt-10">
          {cases.map((c) => (
            <article
              key={c.id}
              id={c.id}
              className="grid scroll-mt-24 gap-6 border-t border-line py-10 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-16"
            >
              <div>
                <p className="text-sm font-semibold text-accent">{c.when}</p>
                <h3 className="mt-2.5 font-serif text-[26px] font-semibold leading-[1.2]">{c.title}</h3>
              </div>
              <dl className="grid gap-5">
                {c.detail.map((d) => (
                  <div key={d.label} className="grid gap-1 sm:grid-cols-[180px_minmax(0,1fr)] sm:gap-6">
                    <dt className="text-[15px] font-semibold leading-[1.6]">{d.label}</dt>
                    <dd className="max-w-[62ch] text-base leading-[1.6] text-muted">{d.text}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>

        <p className="max-w-[30ch] border-t-2 border-ink pt-8 font-serif text-2xl font-semibold leading-[1.3] sm:max-w-[36ch] sm:text-[28px]">
          {casesClosing}
        </p>
      </div>
    </section>
  );
}
