import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils';

// blog-2 cycles six loud colours; here each platform keeps one quiet tint
const platformTint = {
  Hashnode: 'bg-blue-400/15 hover:bg-blue-400/25',
  GeeksforGeeks: 'bg-emerald-400/15 hover:bg-emerald-400/25',
  Medium: 'bg-zinc-400/15 hover:bg-zinc-400/25',
};

// Adapted from Watermelon UI blog-2: tall tinted cards, big title, author row with a "Read" pill
export default function Writing({ articles }) {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((a) => (
        <li key={a.link}>
          <a
            href={a.link}
            target="_blank"
            rel="noreferrer"
            className={cn(
              'group flex h-full min-h-[300px] flex-col justify-between rounded-3xl p-6 text-foreground transition-colors duration-300 sm:p-7',
              platformTint[a.platform],
            )}
          >
            <div className="flex items-center justify-between text-sm font-semibold text-foreground/70">
              <span>{a.readTime}</span>
              <ArrowUpRight
                className="size-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </div>
            <div className="py-6">
              <h3 className="text-2xl leading-[1.2] font-medium tracking-tight text-balance">{a.title}</h3>
              <p className="mt-3 line-clamp-2 text-sm text-foreground/65">{a.desc}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-lg bg-background text-sm font-semibold" aria-hidden="true">
                {a.platform[0]}
              </span>
              <span className="text-sm font-medium">{a.platform}</span>
              <span className="ml-auto rounded-md border border-foreground/15 bg-background/40 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
                Read
              </span>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}
