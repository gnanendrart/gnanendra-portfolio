import { tools } from '@/content/projects';
import { ExternalIcon, GitHubIcon } from './icons';

export default function Tools() {
  return (
    <section id="tools" className="scroll-mt-24 pt-20 lg:pt-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <h2 className="font-serif text-[32px] font-semibold leading-[1.1] tracking-[-0.01em] sm:text-[40px]">
          AI tools
        </h2>
        <p className="mt-4 max-w-[62ch] text-lg leading-[1.55] text-muted">
          Built on the Claude API. Three are finished and one is in progress.
        </p>

        <div className="mt-12 grid gap-x-16 gap-y-14 lg:grid-cols-2">
          {tools.map((tool) => (
            <article key={tool.id} id={tool.id} className="scroll-mt-24 border-t-2 border-ink pt-[18px]">
              <p className="text-sm font-semibold text-accent">{tool.status}</p>
              <h3 className="mt-2.5 font-serif text-[26px] font-semibold leading-[1.2]">{tool.name}</h3>
              <p className="mt-3 max-w-[62ch] text-base leading-[1.6] text-muted">{tool.description}</p>

              {tool.points && (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-[1.6] text-muted marker:text-accent">
                  {tool.points.map((point) => (
                    <li key={point} className="max-w-[60ch]">
                      {point}
                    </li>
                  ))}
                </ul>
              )}

              {tool.stages && (
                <dl className="mt-4 grid gap-3">
                  {tool.stages.map((stage) => (
                    <div key={stage.label} className="grid gap-1 sm:grid-cols-[110px_minmax(0,1fr)] sm:gap-4">
                      <dt className="text-[15px] font-semibold leading-[1.6]">{stage.label}</dt>
                      <dd className="text-[15px] leading-[1.6] text-muted">{stage.text}</dd>
                    </div>
                  ))}
                </dl>
              )}

              <p className="mt-5 text-sm leading-[1.5] text-muted">
                <span className="font-semibold text-ink">Built with </span>
                {tool.stack.join(', ')}
              </p>

              {tool.note && <p className="mt-3 text-sm leading-[1.5] text-muted">{tool.note}</p>}

              {tool.links.length > 0 && (
                <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-1">
                  {tool.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-link inline-flex min-h-[44px] items-center gap-2 text-[15px]"
                      >
                        {link.kind === 'github' ? <GitHubIcon size={16} /> : <ExternalIcon size={16} />}
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
