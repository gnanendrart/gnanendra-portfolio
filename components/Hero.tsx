import { site } from '@/content/site';
import { tools } from '@/content/projects';

export default function Hero() {
  return (
    <section id="top" className="scroll-mt-24">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 pb-14 pt-10 sm:px-8 sm:pt-12 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-[72px] lg:pb-16">
        <div>
          <h1 className="max-w-[640px] font-serif text-[42px] font-semibold leading-[1.06] tracking-[-0.015em] sm:text-[54px] lg:text-[66px]">
            {site.headline}
          </h1>
          <p className="mt-6 max-w-[600px] text-lg leading-[1.55] text-muted sm:text-[19px]">{site.intro}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#tools"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-ink px-6 text-base font-semibold text-bg transition-opacity duration-150 hover:opacity-90"
            >
              See the AI tools
            </a>
            <a
              href="#cases"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full border-[1.5px] border-ink px-6 text-base font-semibold transition-colors duration-150 hover:border-accent hover:text-accent"
            >
              Read the three cases
            </a>
          </div>
        </div>

        <aside
          aria-labelledby="tools-panel-title"
          className="self-start rounded-[14px] border border-line bg-surface px-6 pb-2 pt-5"
        >
          <h2 id="tools-panel-title" className="pb-3 font-serif text-xl font-semibold">
            AI tools I have built
          </h2>
          <ul>
            {tools.map((tool) => (
              <li key={tool.id} className="border-t border-line">
                <a href={`#${tool.id}`} className="group block py-3.5">
                  <span className="block text-base font-bold transition-colors duration-150 group-hover:text-accent">
                    {tool.name}
                    {tool.status === 'Building now' ? ', building now' : ''}
                  </span>
                  <span className="mt-0.5 block text-sm leading-[1.45] text-muted">{tool.panel}</span>
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
