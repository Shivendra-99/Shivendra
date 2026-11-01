import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Pause, Play } from 'lucide-react';
import heroLoop from '../../assets/video/hero-loop.mp4';
import heroLoopPoster from '../../assets/img/hero-loop-poster.jpg';
import { softReveal, stagger } from './Reveal';

// autoplay ignores the OS setting, so the loop checks it itself
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// hero-15's "trusted by" row, with real employers and certifiers as text marks
const proof = [
  { label: 'Production work at', names: ['Accenture', 'Cognizant'] },
  { label: 'Certified by', names: ['Anthropic', 'Google Cloud'] },
];

// Adapted from Watermelon UI hero-15: editorial sans + serif-italic headline,
// staggered blur-up entrance, and the 3D avatar loop in place of the stock glow image.
// The whole avatar, head to feet, is always in view. On `wide` screens (see style.css) the frame
// fills one screen and the video sits right-aligned behind the copy; elsewhere it stacks above
// the copy at its own aspect ratio.
export default function Hero({ email, socialLinks }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const v = videoRef.current;
    if (v.paused) v.play();
    else v.pause();
  };

  return (
    <section id="top" aria-labelledby="hero-title" className="p-1.5">
      <motion.div
        className="stage-dark relative isolate flex flex-col overflow-hidden rounded-2xl bg-[#07080c] text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] wide:min-h-[max(36rem,calc(100svh-4.25rem))]"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <div className="relative wide:absolute wide:inset-0 wide:-z-10">
          {/* On wide screens the video is always full height with its width from its ratio, anchored right:
              a wider frame leaves dark space on the left, a narrower one crops only the empty left of the
              picture. Masks fade its edge into the backdrop: the left on wide screens, the bottom elsewhere. */}
          <video
            ref={videoRef}
            src={heroLoop}
            poster={heroLoopPoster}
            autoPlay={!prefersReducedMotion}
            muted
            loop
            playsInline
            preload="metadata"
            width="1344"
            height="768"
            aria-hidden="true"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            className="aspect-[1344/768] w-full object-cover [mask-image:linear-gradient(to_bottom,black_96%,transparent)] wide:absolute wide:right-0 wide:bottom-0 wide:h-full wide:w-auto wide:max-w-none wide:[mask-image:linear-gradient(to_right,transparent,black_25%)]"
          />
          <button
            type="button"
            onClick={toggle}
            aria-label={playing ? 'Pause animation' : 'Play animation'}
            className="absolute top-3 right-3 z-20 grid size-11 place-items-center rounded-full bg-black/55 text-white backdrop-blur-md transition-colors hover:bg-black/75 wide:top-auto wide:bottom-3"
          >
            {playing ? <Pause className="size-4" fill="currentColor" /> : <Play className="size-4" fill="currentColor" />}
          </button>
        </div>

        <div className="flex flex-1 flex-col px-6 pt-4 pb-8 sm:px-10 sm:pb-10 wide:w-1/2 wide:justify-center wide:px-16 wide:py-10">
          <div>
            <motion.h1
              id="hero-title"
              variants={softReveal}
              className="text-[clamp(2.4rem,min(5vw,7.5svh),5.25rem)] leading-[0.98] font-light text-balance text-white/95"
            >
              <span className="block">Shivendra Sonkar</span>
              <span className="mt-2 block font-serif text-[1.06em] leading-[0.92] font-normal text-white italic">
                Fullstack Software Engineer
              </span>
            </motion.h1>

            <motion.p variants={softReveal} className="mt-5 max-w-md text-base leading-7 text-pretty text-white/75 sm:text-lg">
              I build Java and Spring Boot services, React front ends, and the AWS and OpenShift setup they run on.
              Currently at Accenture.
            </motion.p>

            <motion.div variants={softReveal} className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${email}`}
                className="inline-flex min-h-11 items-center justify-center rounded-md bg-zinc-100 px-6 text-sm text-slate-800 shadow-[inset_0_2px_0_0_rgba(255,255,255,1),inset_0_-1px_0_0_rgba(0,0,0,0.2)] transition-[background-color,transform] duration-200 ease-out hover:bg-zinc-200 hover:text-slate-950 active:scale-[0.96]"
              >
                Email me
              </a>
              <a
                href="#projects"
                className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-white/10 px-5 text-sm text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)] backdrop-blur-md transition-[background-color,transform] duration-200 ease-out hover:bg-white/15 active:scale-[0.96]"
              >
                See my work
                <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            </motion.div>

            <motion.ul variants={softReveal} className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a href={s.url} target="_blank" rel="noreferrer" className="inline-block py-1 text-white/60 transition-colors hover:text-white">
                    {s.label} <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* only where there's room for it above the fold */}
          <motion.dl variants={softReveal} className="mt-10 hidden gap-6 sm:grid-cols-2 wide-tall:grid">
            {proof.map(({ label, names }) => (
              <div key={label}>
                <dt className="text-sm font-light text-white/50">{label}</dt>
                <dd className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xl font-semibold tracking-[-0.03em] text-white/40 2xl:text-2xl">
                  {names.map((n) => (
                    <span key={n}>{n}</span>
                  ))}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </motion.div>
    </section>
  );
}
