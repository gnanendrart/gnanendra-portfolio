import { site } from '@/content/site';
import CopyEmail from './CopyEmail';
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from './icons';

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-[72px]">
        <div>
          <h2 className="font-serif text-[32px] font-semibold leading-[1.1] tracking-[-0.01em] sm:text-[40px]">
            About
          </h2>
          <div className="mt-6 grid max-w-[62ch] gap-4 text-lg leading-[1.6] text-muted">
            {site.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="self-start rounded-[14px] border border-line bg-surface px-6 pb-3 pt-5">
          <h2 className="pb-3 font-serif text-xl font-semibold">Contact</h2>
          <ul>
            <li className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-t border-line py-2">
              <a
                href={`mailto:${site.email}`}
                className="text-link inline-flex min-h-[44px] items-center gap-2.5 break-all text-[15px]"
              >
                <MailIcon size={16} className="shrink-0" />
                {site.email}
              </a>
              <CopyEmail email={site.email} />
            </li>
            <li className="border-t border-line py-2">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link inline-flex min-h-[44px] items-center gap-2.5 text-[15px]"
              >
                <LinkedInIcon size={16} className="shrink-0" />
                LinkedIn
              </a>
            </li>
            <li className="border-t border-line py-2">
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link inline-flex min-h-[44px] items-center gap-2.5 text-[15px]"
              >
                <GitHubIcon size={16} className="shrink-0" />
                GitHub
              </a>
            </li>
            <li className="border-t border-line py-2">
              <a href={site.resume} className="text-link inline-flex min-h-[44px] items-center gap-2.5 text-[15px]">
                <DownloadIcon size={16} className="shrink-0" />
                Download resume (PDF)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
