import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils';

// Watermelon bento-02's card surface, reused by other card grids on the page
export const bentoCard = cn(
  'group relative flex flex-col justify-between overflow-hidden rounded-xl bg-muted p-5 antialiased lg:p-6',
  'shadow-[inset_0_0_2px_2px_rgba(255,255,255,1),inset_0_0_0_1px_rgba(0,0,0,0.2),0px_0px_0px_1px_rgba(0,0,0,0.08),0px_1px_2px_-1px_rgba(0,0,0,0.08),0px_2px_4px_0px_rgba(0,0,0,0.06)]',
  'dark:shadow-[inset_0_0_2px_2px_rgba(255,255,255,0.04),inset_0_0_0_1px_rgba(255,255,255,0.08),0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_2px_-1px_rgba(0,0,0,0.5),0px_2px_4px_0px_rgba(0,0,0,0.4)]',
);

const months = (from, to = new Date()) =>
  (to.getFullYear() - from.getFullYear()) * 12 + to.getMonth() - from.getMonth();

// counted to today, so the bars stay true as time passes
const tenure = [
  { label: 'Accenture', value: 'May 2026 – now', months: months(new Date(2026, 4)), tone: 'bg-primary' },
  { label: 'Cognizant', value: 'Sep 2021 – May 2026', months: months(new Date(2021, 8), new Date(2026, 4)), tone: 'bg-foreground/25' },
];
const totalMonths = tenure.reduce((sum, t) => sum + t.months, 0);

// Label + value over a track whose fill grows from zero the first time it scrolls into view
function Bar({ label, value, to, tone }) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4 text-xs">
        <span className="font-medium">{label}</span>
        <span className="font-mono text-muted-foreground tabular-nums">{value}</span>
      </div>
      <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-foreground/5">
        <motion.div
          className={cn('h-full rounded-full', tone)}
          initial={{ width: '0%' }}
          whileInView={{ width: to }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

// Every card reads the same way: eyebrow, big figure, one line of context, then the evidence
function Stat({ eyebrow, value, chip, children }) {
  return (
    <div>
      <p className="text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">{eyebrow}</p>
      <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-3xl font-semibold tracking-tight tabular-nums">
        {value}
        {chip && (
          <span className="rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-xs font-semibold tracking-normal text-primary">
            {chip}
          </span>
        )}
      </p>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">{children}</p>
    </div>
  );
}

const card = cn(bentoCard, 'gap-8');

// Adapted from Watermelon UI bento-02. Every figure and bar comes from a real number on the résumé.
export default function StatsBento({ shipped }) {
  return (
    <section aria-label="Highlights" className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <div className={cn(card, 'md:col-span-2')}>
        <Stat eyebrow="API response time · Accenture" value="10s → 2.5s" chip="75% faster">
          Pagination and leaner SQL, plus a fix for an N+1 query that was causing gateway timeouts in production.
        </Stat>
        <div className="space-y-4" aria-hidden="true">
          <Bar label="Before" value="10s" to="100%" tone="bg-foreground/25" />
          <Bar label="After" value="2.5s" to="25%" tone="bg-primary" />
        </div>
      </div>

      <div className={card}>
        <Stat eyebrow="Docker image · Accenture" value="1.4 GB → 300 MB">
          Trimmed the build context and unused layers.
        </Stat>
        <div className="space-y-4" aria-hidden="true">
          <Bar label="Before" value="1.4 GB" to="100%" tone="bg-foreground/25" />
          <Bar label="After" value="300 MB" to="21%" tone="bg-primary" />
        </div>
      </div>

      <div className={card}>
        <Stat eyebrow="Experience" value="5 years">
          Building production software, from cloud migrations to API performance.
        </Stat>
        <div className="space-y-4" aria-hidden="true">
          {tenure.map((t) => (
            <Bar key={t.label} label={t.label} value={t.value} to={`${(t.months / totalMonths) * 100}%`} tone={t.tone} />
          ))}
        </div>
      </div>

      <div className={cn(card, 'md:col-span-2')}>
        <Stat eyebrow="Shipped on my own" value={`${shipped.length} products`}>
          Live and public, each one built solo.
        </Stat>
        <ul className="divide-y divide-border border-t border-border">
          {shipped.map((p) => (
            <li key={p.title} className="flex items-center justify-between gap-4 py-3">
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">{p.title}</p>
                <p className="truncate text-xs text-muted-foreground">{p.category}</p>
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
