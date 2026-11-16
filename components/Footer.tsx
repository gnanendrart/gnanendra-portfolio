import { site } from '@/content/site';

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          {site.name}, {new Date().getFullYear()}
        </p>
        <a href={site.repo} target="_blank" rel="noopener noreferrer" className="text-link inline-flex min-h-[44px] items-center">
          Source for this site
        </a>
      </div>
    </footer>
  );
}
