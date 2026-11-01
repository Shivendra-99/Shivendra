import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils';

// Watermelon bento-02's card surface, reused by other card grids on the page
export const bentoCard = cn(
  'group relative flex flex-col justify-between overflow-hidden rounded-xl bg-muted p-5 antialiased lg:p-6',
  'shadow-[inset_0_0_2px_2px_rgba(255,255,255,1),inset_0_0_0_1px_rgba(0,0,0,0.2),0px_0px_0px_1px_rgba(0,0,0,0.08),0px_1px_2px_-1px_rgba(0,0,0,0.08),0px_2px_4px_0px_rgba(0,0,0,0.06)]',
  'dark:shadow-[inset_0_0_2px_2px_rgba(255,255,255,0.04),inset_0_0_0_1px_rgba(255,255,255,0.08),0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_2px_-1px_rgba(0,0,0,0.5),0px_2px_4px_0px_rgba(0,0,0,0.4)]',
);

const roles = [
  { company: 'Accenture', role: 'Full Stack Engineer', dates: 'May 2026 – now', current: true },
  { company: 'Cognizant', role: 'Software Engineer (FSE)', dates: 'Sep 2021 – May 2026' },
];

// Both cards read the same way: eyebrow, big figure, one line of context, then the evidence
function Stat({ eyebrow, value, children }) {
  return (
    <div>
      <p className="text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">{eyebrow}</p>
      <p className="mt-2 text-3xl font-semibold tracking-tight tabular-nums">{value}</p>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">{children}</p>
    </div>
  );
}

// content sits at the top, so a shorter card ends in spare space rather than a gap mid-card
const card = cn(bentoCard, 'justify-start gap-8');

// Adapted from Watermelon UI bento-02: a career timeline beside the products shipped solo.
export default function StatsBento({ shipped }) {
  return (
    <section aria-label="Highlights" className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <div className={card}>
        <Stat eyebrow="Experience" value="5 years">
          Building production software, from cloud migrations to API performance.
        </Stat>
        {/* vertical timeline; ring-muted cuts the line behind each dot */}
        <ol className="space-y-5 border-l border-border pl-5">
          {roles.map((r) => (
            <li key={r.company} className="relative">
              <span
                aria-hidden="true"
                className={cn(
                  'absolute top-1.5 -left-[calc(1.25rem+5px)] size-2.5 rounded-full ring-4 ring-muted',
                  r.current ? 'bg-primary' : 'bg-foreground/30'
                )}
              />
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <p className="font-semibold">{r.company}</p>
                <p className="text-xs text-muted-foreground tabular-nums">{r.dates}</p>
              </div>
              <p className="text-sm text-muted-foreground">{r.role}</p>            </li>
          ))}
        </ol>
      </div>

      <div className={cn(card, 'md:col-span-2')}>
        <Stat eyebrow="Shipped on my own" value={`${shipped.length} products`}>
          Live and public, each one built solo.
        </Stat>
        <ul className="divide-y divide-border border-t border-border">
          {shipped.map((p) => (
            <li key={p.title} className="flex items-center justify-between gap-4 py-3">
              <div className="min-w-0">
                <p className="text-sm font-semibold">{p.title}</p>
                <p className="text-xs text-muted-foreground">{p.category}</p>
              </div>
              <a
                href={p.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center gap-1 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium transition-colors hover:bg-foreground hover:text-background"
              >
                {p.liveLabel}
                <ArrowUpRight className="size-3" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
