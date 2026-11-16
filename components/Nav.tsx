import { nav, site } from '@/content/site';
import ThemeToggle from './ThemeToggle';
import MobileMenu from './MobileMenu';

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg">
      <div className="relative mx-auto flex h-[72px] w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#top" className="text-[17px] font-bold transition-colors duration-150 hover:text-accent">
          {site.name}
        </a>

        <div className="flex items-center gap-3 md:gap-7">
          <nav aria-label="Sections" className="hidden md:block">
            <ul className="flex items-center gap-7 text-[15px] font-medium">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition-colors duration-150 hover:text-accent">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
          <a
            href={site.resume}
            className="hidden min-h-[44px] items-center rounded-full bg-accent px-[18px] text-[15px] font-semibold text-on-accent transition-opacity duration-150 hover:opacity-90 md:inline-flex"
          >
            Download resume
          </a>
          <MobileMenu items={nav} resume={site.resume} />
        </div>
      </div>
    </header>
  );
}
