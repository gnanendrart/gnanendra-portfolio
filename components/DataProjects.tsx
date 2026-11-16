import { dataProjects } from '@/content/projects';
import { GitHubIcon } from './icons';

export default function DataProjects() {
  return (
    <section id="data-projects" className="scroll-mt-24 pt-20 lg:pt-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <h2 className="font-serif text-[32px] font-semibold leading-[1.1] tracking-[-0.01em] sm:text-[40px]">
          Data projects
        </h2>
        <ul className="mt-10 border-b border-line">
          {dataProjects.map((project) => (
            <li
              key={project.name}
              className="grid gap-2 border-t border-line py-6 lg:grid-cols-[260px_minmax(0,1fr)_auto] lg:items-start lg:gap-10"
            >
              <h3 className="text-lg font-bold leading-[1.4]">{project.name}</h3>
              <div>
                <p className="max-w-[62ch] text-base leading-[1.6] text-muted">{project.description}</p>
                <p className="mt-2 text-sm text-muted">
                  <span className="font-semibold text-ink">Built with </span>
                  {project.stack.join(', ')}
                </p>
              </div>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} code on GitHub`}
                className="text-link inline-flex min-h-[44px] items-center gap-2 text-[15px] lg:-mt-2"
              >
                <GitHubIcon size={16} />
                Code on GitHub
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
