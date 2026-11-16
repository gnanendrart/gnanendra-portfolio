import { skills } from '@/content/skills';

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 pt-12 lg:pt-16">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <h2 className="font-serif text-[32px] font-semibold leading-[1.1] tracking-[-0.01em] sm:text-[40px]">
          Skills
        </h2>
        <dl className="mt-10 border-b border-line">
          {skills.map((group) => (
            <div
              key={group.group}
              className="grid gap-1 border-t border-line py-4 sm:grid-cols-[300px_minmax(0,1fr)] sm:gap-16"
            >
              <dt className="text-base font-semibold leading-[1.6]">{group.group}</dt>
              <dd className="text-base leading-[1.6] text-muted">{group.items.join(', ')}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
