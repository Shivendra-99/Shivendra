import React from 'react';
import { ArrowUpRight, Check, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { bentoCard } from './StatsBento';

const pill = 'inline-flex items-center gap-1 rounded-full border border-border bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground';
const label = 'text-[11px] font-semibold tracking-wider text-muted-foreground uppercase';

function LinkPill({ href, primary, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        'inline-flex min-h-10 items-center gap-1.5 rounded-full px-4 text-sm font-medium transition-[opacity,background-color,transform] active:scale-[0.96]',
        primary
          ? 'bg-foreground text-background hover:opacity-90'
          : 'border border-border bg-background hover:bg-muted'
      )}
    >
      {children}
      <ArrowUpRight className="size-3.5" aria-hidden="true" />
    </a>
  );
}

// Reads top-down for a recruiter: what it is, why it exists, what it does, where to see it.
// Install commands and engineering detail sit in a closed "For developers" section.
function ProjectBody({ p }) {
  return (
    <div className="@container">
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">{p.title}</h3>
        <span className={pill}>{p.category}</span>
      </div>
      <p className="mt-2 text-base leading-relaxed text-foreground/85 sm:text-lg">{p.summary}</p>

      <div className={cn('mt-6 grid gap-6', p.why && '@2xl:grid-cols-2 @2xl:gap-10')}>
        {p.why && (
          <div>
            <h4 className={label}>Why I built it</h4>
            <p className="mt-2 text-[15px] leading-relaxed text-foreground/80">{p.why}</p>
          </div>
        )}
        <div>
          <h4 className={label}>What it does</h4>
          <ul className="mt-2 space-y-2">
            {p.highlights.map((h) => (
              <li key={h} className="flex gap-2.5 text-[15px] leading-relaxed text-foreground/80">
                <Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        <LinkPill href={p.liveUrl} primary>
          {p.liveLabel}
        </LinkPill>
        <LinkPill href={p.githubUrl}>Source code</LinkPill>
      </div>

      <details className="group/details mt-6 border-t border-border pt-3">
        <summary className="inline-flex cursor-pointer list-none items-center gap-1 py-1 text-sm font-medium text-muted-foreground hover:text-foreground">
          For developers
          <ChevronRight className="size-3.5 transition-transform group-open/details:rotate-90" aria-hidden="true" />
        </summary>
        <div className="mt-3 space-y-4 text-sm">
          <p className="text-muted-foreground">
            <span className="font-medium text-foreground">Built with</span> {p.tech}
          </p>
          {p.install && (
            <pre className="overflow-x-auto rounded-lg bg-background px-4 py-3 font-mono text-[13px] leading-6 whitespace-pre-wrap shadow-[inset_0_0_0_1px_var(--line)]">
              <code>
                <span className="text-muted-foreground select-none">$ </span>
                {p.install}
              </code>
            </pre>
          )}
          <ul className="list-disc space-y-2 pl-5 text-foreground/80 marker:text-muted-foreground">
            {p.points.map((pt) => (
              <li key={pt}>{pt}</li>
            ))}
          </ul>
        </div>
      </details>
    </div>
  );
}

// The flagship gets a bento card with its live screenshot; the rest follow as
// Watermelon UI career-1 style rows inside one bordered list.
export default function Projects({ projects }) {
  const [featured, ...rest] = projects;

  return (
    <>
      <article className={cn(bentoCard, 'grid items-start gap-8 md:grid-cols-[1fr_1fr] lg:p-8')}>
        <ProjectBody p={featured} />
        <a
          href={featured.liveUrl}
          target="_blank"
          rel="noreferrer"
          tabIndex={-1}
          aria-hidden="true"
          className="block overflow-hidden rounded-lg shadow-[0_0_0_1px_var(--line),0_24px_48px_-24px_rgba(0,0,0,0.5)] max-md:order-first md:sticky md:top-20"
        >
          <img
            src={featured.image}
            alt=""
            width="1280"
            height="800"
            loading="lazy"
            className="transition-transform duration-500 hover:scale-[1.02] motion-reduce:hover:scale-100"
          />
        </a>
      </article>

      <div className="mt-4 rounded-xl border border-border bg-card px-5 sm:px-8">
        <ul role="list">
          {rest.map((p) => (
            <li key={p.title} className="border-b border-border py-8 last:border-b-0">
              <ProjectBody p={p} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
