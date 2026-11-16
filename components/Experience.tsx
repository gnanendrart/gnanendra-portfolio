import { education, roles } from '@/content/experience';
import { ExternalIcon } from './icons';

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 pt-20 lg:pt-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <h2 className="font-serif text-[32px] font-semibold leading-[1.1] tracking-[-0.01em] sm:text-[40px]">
          Experience
        </h2>

        <div className="mt-10">
          {roles.map((role) => (
            <article
              key={`${role.company}-${role.period}`}
              className="grid gap-4 border-t border-line py-9 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-16"
            >
              <div>
                <p className="text-sm font-semibold text-accent">{role.period}</p>
                <p className="mt-2 text-lg font-bold leading-[1.35]">{role.company}</p>
                <p className="mt-1 text-sm leading-[1.5] text-muted">{role.place}</p>
              </div>
              <div>
                <h3 className="text-lg font-bold leading-[1.35]">{role.title}</h3>
                <ul className="mt-3 list-disc space-y-2.5 pl-5 text-base leading-[1.6] text-muted marker:text-accent">
                  {role.bullets.map((bullet) => (
                    <li key={bullet} className="max-w-[68ch]">
                      {bullet}
                    </li>
                  ))}
                </ul>
                {role.links && (
                  <ul className="mt-3 grid gap-0.5">
                    {role.links.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-link inline-flex min-h-[44px] items-center gap-2 text-[15px]"
                        >
                          <ExternalIcon size={16} className="shrink-0" />
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}

          <article className="grid gap-4 border-t border-line py-9 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-16">
            <h3 className="text-lg font-bold leading-[1.35]">Education</h3>
            <ul className="grid gap-4">
              {education.map((item) => (
                <li key={item.degree}>
                  <p className="text-base font-semibold leading-[1.5]">{item.degree}</p>
                  <p className="text-base leading-[1.5] text-muted">
                    {item.school}, {item.year}
                  </p>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
