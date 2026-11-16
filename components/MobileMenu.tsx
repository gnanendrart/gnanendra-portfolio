'use client';

import { useRef } from 'react';
import { MenuIcon } from './icons';

type Item = { label: string; href: string };

export default function MobileMenu({ items, resume }: { items: Item[]; resume: string }) {
  const ref = useRef<HTMLDetailsElement>(null);
  const close = () => {
    if (ref.current) ref.current.open = false;
  };

  return (
    <details ref={ref} className="md:hidden">
      <summary
        aria-label="Menu"
        className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border-[1.5px] border-line bg-surface text-ink"
      >
        <MenuIcon />
      </summary>
      <nav
        aria-label="Sections"
        className="absolute left-0 right-0 top-full border-b border-line bg-bg px-5 pb-5 pt-2 sm:px-8"
      >
        <ul>
          {items.map((item) => (
            <li key={item.href} className="border-t border-line first:border-t-0">
              <a href={item.href} onClick={close} className="flex min-h-[48px] items-center text-base font-medium">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={resume}
          onClick={close}
          className="mt-3 flex min-h-[48px] items-center justify-center rounded-full bg-accent px-5 text-base font-semibold text-on-accent"
        >
          Download resume
        </a>
      </nav>
    </details>
  );
}
