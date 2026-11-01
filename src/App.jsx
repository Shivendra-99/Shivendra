import React, { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import { MotionConfig } from 'motion/react';
import { ArrowUpRight, Clock, MapPin, Menu, Moon, Sun, X } from 'lucide-react';
import snapfitShot from '../assets/img/projects/snapfit.webp';
import Hero from './components/Hero';
import StatsBento, { bentoCard } from './components/StatsBento';
import Projects from './components/Projects';
import Writing from './components/Writing';
import { Reveal } from './components/Reveal';
import { cn } from './lib/utils';

const EMAIL = 'shivendrasonkar001@gmail.com';

const navItems = [
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'writing', label: 'Writing' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

const socialLinks = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/shivendra-kumar-sonkar-4349ab17b' },
  { label: 'GitHub', url: 'https://github.com/Shivendra-99' },
  { label: 'X / Twitter', url: 'https://twitter.com/Shivendra9598' },
];

const skillGroups = [
  { name: 'Backend', items: 'Java, Spring Boot, Express.js' },
  { name: 'Frontend', items: 'React.js, JavaScript (ES6+), Tailwind CSS' },
  {
    name: 'Cloud & DevOps',
    items: 'AWS (S3, Lambda, Elastic Beanstalk, SQS, IAM), Red Hat OpenShift, Docker, Terraform',
  },
  { name: 'Monitoring', items: 'Datadog, Dynatrace, Splunk' },
  { name: 'Data & messaging', items: 'MongoDB, MySQL, Snowflake, Apache Pulsar, Apache Kafka' },
];

// summary, why and highlights are written for recruiters; install, tech and points are for engineers
const projectsData = [
  {
    title: 'SnapFit',
    category: 'Live website, built solo',
    summary: 'A website that gets photos and PDFs ready for Indian exam application forms.',
    why: 'Forms for exams like NEET, JEE and UPSC only accept photos and documents at an exact size and file limit. SnapFit gets a file ready in a few clicks, without uploading it anywhere.',
    highlights: [
      'Ready-made settings for 20+ exams, including NEET, JEE, UPSC, SSC and GATE.',
      'Centres the face, frames it passport-style and changes the background to white or light blue.',
      'Shows the final file size before you download, and your photo never leaves your device.',
      'Also shrinks PDFs to fit upload limits.',
    ],
    image: snapfitShot,
    tech: 'React.js, JavaScript Canvas, PDF.js, Tailwind CSS',
    liveUrl: 'https://www.snapfit.in',
    liveLabel: 'Visit snapfit.in',
    githubUrl: 'https://github.com/Shivendra-99/snapFit',
    points: [
      'A browser tool that resizes and compresses photos and PDFs for Indian exam applications (NEET, JEE, UPSC, SSC, IBPS, RRB, GATE, NDA).',
      '20+ exam presets with automatic face centering, passport-size framing and background replacement (white, off-white, light blue).',
      'Shows a live JPEG preview and the final file size in KB. Everything runs in the browser, so photos are never uploaded.',
      'Includes a PDF compressor with a before/after preview and a compression slider.',
    ],
  },
  {
    title: 'shiprocket-react',
    category: 'Open-source developer toolkit',
    summary: 'A toolkit that connects online stores to Shiprocket, the Indian shipping and courier platform.',
    why: "Shiprocket only offers official plugins for Shopify, WooCommerce and Magento. Stores built with their own code had no ready-made way to add Shiprocket delivery and checkout, so I built one that any developer can install for free.",
    highlights: [
      'Adds a delivery check by pincode, a checkout button, address autofill by OTP and order tracking to a store.',
      "Keeps the store's Shiprocket keys safe on its server and renews the login on its own.",
      "Matches how Shiprocket's official plugins handle checkout and parcel size.",
    ],
    install: 'npm install shiprocket-react',
    tech: 'React, TypeScript, Node.js, Next.js, Express',
    liveUrl: 'https://www.npmjs.com/package/shiprocket-react',
    liveLabel: 'View on npm',
    githubUrl: 'https://github.com/Shivendra-99/shiprocket-react',
    points: [
      'Built a React + server library that connects custom React, Next.js and Express stores to Shiprocket shipping and checkout. Shiprocket only has official plugins for Shopify, WooCommerce and Magento.',
      'Ready-made components for pincode delivery checks, the checkout button, OTP address autofill and order tracking.',
      'Keeps Shiprocket keys on the server, caches the 10-day login token and refreshes it when it expires.',
      "Built by studying Shiprocket's official Shopify and WooCommerce plugins to match how they sign checkout requests and calculate parcel size.",
    ],
  },
  {
    title: 'Claude Connector for Edge',
    category: 'Open-source browser extension',
    summary: 'Lets AI assistants like Claude and Cursor work in your Microsoft Edge tabs.',
    why: "AI assistants can fill in forms and look things up on websites, but they need a browser to do it. This lets them use only the tabs you choose, where you're already signed in, without ever seeing your passwords.",
    highlights: [
      'The AI can open tabs, read pages, click, type, scroll and take screenshots.',
      'Safe by default: it only sees tabs you share, skips blocked sites, hides passwords and only accepts connections from your own computer.',
      'A glow and a moving cursor show what the AI is doing, with a Stop button on the page.',
    ],
    install: 'npm install claude-edge-connector',
    tech: 'JavaScript, Edge Extension (Manifest V3), Node.js, MCP, WebSocket',
    liveUrl: 'https://www.npmjs.com/package/claude-edge-connector',
    liveLabel: 'View on npm',
    githubUrl: 'https://github.com/Shivendra-99/claude-edge-connector',
    points: [
      'Built an Edge extension and a small local server that let Claude, Cursor and other AI apps use the Edge tabs you choose, with your existing logins.',
      'Gives the AI 13 browser actions: open tabs, read the page, click, type, scroll and take screenshots.',
      "Safe by default: the AI only sees tabs you share, there's a blocked-sites list, passwords are hidden, and the server only accepts local connections.",
      'Shows what the AI is doing with a glow, a moving cursor and a Stop button on the page.',
    ],
  },
  {
    title: 'News App',
    category: 'Live website',
    summary: "A news website with the day's live headlines by topic and country.",
    highlights: [
      'Sections for Business, Technology, Science, Entertainment and Sports, filtered by country.',
      'A lead story at the top with a grid of the latest news below.',
      'Shows placeholder cards while stories load.',
    ],
    tech: 'React 18, Vite, Tailwind CSS v4, React Router, Currents API',
    liveUrl: 'https://newsapp-lac-ten.vercel.app/',
    liveLabel: 'Visit live site',
    githubUrl: 'https://github.com/Shivendra-99/newsapp',
    points: [
      'A news site with categories for Business, Technology, Science, Entertainment and Sports.',
      'Pulls live headlines from the Currents API, filtered by country and category.',
      'A lead story at the top with a "Latest News" grid below it.',
      'Dark and light mode that follows the system setting, plus skeleton loaders while articles load.',
    ],
  },
];

const experienceData = [
  {
    company: 'Accenture Solutions Pvt. Ltd.',
    role: 'Full Stack Engineer',
    period: 'May 2026 – Present',
    location: 'India · Hybrid',
    bullets: [
      'Reduced API response time by 75% (10s to 2.5s) through pagination and optimized SQL queries.',
      'Fixed an N+1 query issue on an endpoint that was causing gateway timeouts in production.',
      'Shrank Docker image size from 1.4 GB to 300 MB by trimming the build context and unused layers.',
      'Set up Snowflake tables in Terraform so every infrastructure change goes through code review.',
      'Built Apache Pulsar topics and listeners to handle async messaging between services.',
    ],
  },
  {
    company: 'Cognizant Technology Solutions',
    role: 'Software Engineer (FSE)',
    period: 'Sep 2021 – May 2026',
    location: 'India',
    bullets: [
      'Moved backend applications from PCF to OpenShift and deployed frontend applications on AWS.',
      'Developed new features and resolved bugs in both React.js and Spring Boot applications.',
      'Used Splunk to analyse logs and set up alerts that notified the team of backend errors early.',
      'Integrated backend applications with Dynatrace to improve monitoring.',
      'Set up SFTP file transfer from Java services to the mainframe system.',
      'Fixed Excel downloads failing only in production. AWS was blocking the response headers that held the file name, so we moved that data into the response body.',
      'Fixed a form that submitted with empty fields when users pressed Enter, causing bad requests. Added a check so it submits only when all required fields are filled.',
      'Recognised three times for on-time delivery of features and bug fixes, and for cloud migration work.',
    ],
  },
];

const articlesData = [
  {
    title: 'Text to PDF Conversion Using AWS Lambda & S3',
    platform: 'Hashnode',
    readTime: '5 min read',
    link: 'https://shivendra-sonkar.hashnode.dev/text-to-pdf-conversion-using-aws-lambda-and-s3-using-java',
    desc: 'Turning text into a PDF inside a Java AWS Lambda function and saving the file to S3.',
  },
  {
    title: 'Self-Hosting Judge0 on Windows: A Step-by-Step Guide',
    platform: 'Hashnode',
    readTime: '6 min read',
    link: 'https://shivendra-sonkar.hashnode.dev/self-hosting-judge0-on-windows-a-step-by-step-guide',
    desc: 'Running the Judge0 code-execution engine locally on Windows with Docker and WSL2.',
  },
  {
    title: 'How to Connect MongoDB with Spring Boot?',
    platform: 'GeeksforGeeks',
    readTime: '5 min read',
    link: 'https://www.geeksforgeeks.org/how-to-connect-mongodb-with-spring-boot/',
    desc: 'Connecting a Spring Boot app to MongoDB with Spring Data, step by step.',
  },
  {
    title: 'Building an Async Email Notification System with Express, SQS & Lambda',
    platform: 'Medium',
    readTime: '7 min read',
    link: 'https://medium.com/@sanusonkar1/how-i-built-an-async-email-notification-system-using-express-js-sqs-and-aws-lambda-be09adbafd22',
    desc: 'Sending emails in the background: Express puts jobs on SQS and a Lambda function sends them.',
  },
  {
    title: 'Kafka vs Pulsar: A Simple Guide (With Real Examples)',
    platform: 'Medium',
    readTime: '6 min read',
    link: 'https://medium.com/@sanusonkar1/kafka-vs-pulsar-a-simple-guide-with-real-examples-c560e4774fa6',
    desc: 'How Kafka and Pulsar differ in storage and scaling, and when to pick each.',
  },
  {
    title: 'REST vs GraphQL vs gRPC: When to Actually Use Each',
    platform: 'Medium',
    readTime: '7 min read',
    link: 'https://medium.com/@sanusonkar1/rest-vs-graphql-vs-grpc-when-to-actually-use-each-1474171949cf',
    desc: 'Where each API style fits, with the trade-offs in payload size and data fetching.',
  },
];

const achievementsData = [
  { text: 'Recognised for the PCF to Red Hat OpenShift and AWS cloud migration at Cognizant.' },
  { text: 'LeetCode: 3-star coder.', url: 'https://leetcode.com/u/Shivendra_9936/' },
  { text: 'HackerRank: Gold badge in Problem Solving & Algorithms.', url: 'https://www.hackerrank.com/Sanusonkar1' },
  { text: 'HackerEarth Easy20: ranked 443rd.' },
  { text: 'Interview Jump Start: ranked 1350th in India.' },
  { text: 'Tech Buzz Coding Contest: 2nd place.' },
];

// Credly badges; id = verification page, img = badge image id
const certificationsData = [
  { name: 'Claude Certified Architect – Professional', issuer: 'Anthropic', date: 'Oct 2026', id: '9c9f7c3f-ba7e-4061-ab7e-fdfa5a78a834', img: '7583afbc-4aab-4c7d-8af4-d9af72786ab3' },
  { name: 'Claude Certified Architect – Foundations', issuer: 'Anthropic', date: 'Sep 2026', id: 'dcb11496-e7f1-477f-92ec-2dc8e57aea13', img: 'f2040db3-3904-4240-8966-e87b1510bea0' },
  { name: 'Claude Certified Developer – Foundations', issuer: 'Anthropic', date: 'Sep 2026', id: '80864987-e416-4a08-bf17-71e3e4cc1a1a', img: 'f101c6ac-8a2d-4220-b381-70e3e6c364e3' },
  { name: 'Claude Certified Associate – Foundations', issuer: 'Anthropic', date: 'Oct 2026', id: '8b067eec-bbba-4fdc-a2ba-3612bf3190e3', img: 'a6387cbd-5ac1-4894-833a-da2cbc28587e' },
  { name: 'Deploy an Agent with Agent Development Kit (ADK)', issuer: 'Google Cloud', date: 'Oct 2026', id: 'ebce238f-ed66-4923-90af-d5b94cd9b83a', img: 'e9c45e2a-a48e-4686-99df-7de0ccd6dae7' },
  { name: 'Govern Agent Access with Gemini Enterprise Agent Platform', issuer: 'Google Cloud', date: 'Oct 2026', id: '2452d1ea-fe24-461e-9261-fce8f3ec16c4', img: '39c0ab96-e088-4d83-baaf-395633aa1810' },
  { name: 'Deploy Gemini Enterprise with Workspace Data Sources and Model Armor', issuer: 'Google Cloud', date: 'Oct 2026', id: 'e407b564-a886-4ccd-b28c-cea96deb5bf9', img: 'd82b7124-5d8a-4bb9-a3c0-7220e172f948' },
];

const container = 'mx-auto w-full max-w-6xl px-6 sm:px-10';

const pill = 'inline-flex items-center gap-1 rounded-full border border-border bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground';

const button = {
  primary:
    'inline-flex min-h-11 items-center justify-center rounded-md bg-foreground px-6 text-sm font-medium text-background transition-[opacity,transform] duration-200 hover:opacity-90 active:scale-[0.96]',
  secondary:
    'inline-flex min-h-11 items-center justify-center rounded-md border border-border bg-card px-5 text-sm font-medium transition-[background-color,transform] duration-200 hover:bg-muted active:scale-[0.96]',
};

// Editorial heading: sans title, serif-italic aside, as in the hero
function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="pt-28 sm:pt-36">
      <Reveal
        as="h2"
        id={`${id}-title`}
        className="mb-10 max-w-3xl text-[clamp(2.25rem,1.6rem+2.6vw,3.75rem)] leading-[1.02] font-light tracking-tight text-balance"
      >
        {title}{' '}
        <span className="font-serif text-[1.08em] text-muted-foreground italic">{subtitle}</span>
      </Reveal>
      {children}
    </section>
  );
}

export default function App() {
  const [isLightMode, setIsLightMode] = useState(() => {
    try {
      return localStorage.getItem('shivendra_theme') === 'light';
    } catch {
      return false;
    }
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Highlight the nav item for whichever section crosses the middle of the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActiveSection(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    document.querySelectorAll('main section[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const closeOnEscape = (e) => e.key === 'Escape' && setMenuOpen(false);
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  useEffect(() => {
    document.body.classList.toggle('light-mode', isLightMode);
    try {
      localStorage.setItem('shivendra_theme', isLightMode ? 'light' : 'dark');
    } catch {
      // storage blocked; theme still works for this visit
    }
  }, [isLightMode]);

  // Cross-fade the theme change instead of a hard brightness jump
  const toggleTheme = () => {
    const apply = () => flushSync(() => setIsLightMode((v) => !v));
    if (document.startViewTransition) document.startViewTransition(apply);
    else apply();
  };

  return (
    // reducedMotion="user": motion drops movement when the OS asks for less
    <MotionConfig reducedMotion="user">
      <a
        href="#main-content"
        className="fixed top-2 left-2 z-50 -translate-y-[200%] rounded-md bg-foreground px-4 py-2 text-sm text-background focus:translate-y-0"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-30 border-b border-border bg-background/75 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-7xl items-center gap-2 px-6 sm:px-10">
          <a href="#top" className="mr-auto text-[15px] font-semibold tracking-tight">
            Shivendra <span className="font-serif text-lg font-normal italic">Sonkar</span>
          </a>

          <nav
            id="site-nav"
            aria-label="Main"
            className={cn(
              'max-md:absolute max-md:inset-x-0 max-md:top-14 max-md:border-b max-md:border-border max-md:bg-background',
              !menuOpen && 'max-md:hidden'
            )}
          >
            <ul className="flex gap-7 max-md:flex-col max-md:gap-0 max-md:px-6 max-md:pb-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={activeSection === item.id ? 'true' : undefined}
                    onClick={() => setMenuOpen(false)}
                    className="block py-2 text-sm text-muted-foreground decoration-[1.5px] underline-offset-[0.5em] transition-colors hover:text-foreground aria-[current=true]:text-foreground aria-[current=true]:underline max-md:py-3 max-md:text-base max-md:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isLightMode ? 'Switch to dark theme' : 'Switch to light theme'}
            className="ml-3 grid size-11 place-items-center rounded-full transition-colors hover:bg-muted"
          >
            {isLightMode ? <Moon className="size-[18px]" /> : <Sun className="size-[18px]" />}
          </button>
          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            onClick={() => setMenuOpen((v) => !v)}
            className="grid size-11 place-items-center rounded-full transition-colors hover:bg-muted md:hidden"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </header>

      <main id="main-content">
        <Hero email={EMAIL} socialLinks={socialLinks} />

        <div className={cn(container, 'pt-4')}>
          <StatsBento shipped={projectsData.slice(0, 3)} />

          <Section id="experience" title="Experience." subtitle="Five years of production work.">
            {/* Watermelon UI career-1 rows: role + pill, company, location and dates on the right */}
            <div className="rounded-xl border border-border bg-card px-4 sm:px-6">
              <ul role="list">
                {experienceData.map((exp) => (
                  <li key={exp.company} className="border-b border-border py-6 last:border-b-0 sm:py-8">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-6">
                      <div className="min-w-0 flex-1 space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-lg font-semibold sm:text-xl">{exp.role}</h3>
                          {exp.period.endsWith('Present') && (
                            <span className="rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-[11px] font-semibold text-primary">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground sm:text-base">{exp.company}</p>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 sm:shrink-0">
                        <span className={pill}>
                          <MapPin className="size-3" aria-hidden="true" />
                          {exp.location}
                        </span>
                        <span className={cn(pill, 'tabular-nums')}>
                          <Clock className="size-3" aria-hidden="true" />
                          {exp.period}
                        </span>
                      </div>
                    </div>
                    <ul className="mt-5 max-w-3xl list-disc space-y-2.5 pl-5 text-[15px] leading-relaxed text-foreground/85 marker:text-muted-foreground">
                      {exp.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </Section>

          <Section id="projects" title="Projects." subtitle="Built and shipped on my own.">
            <Projects projects={projectsData} />
          </Section>

          <Section id="certifications" title="Certifications." subtitle="Each one verifiable on Credly.">
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {certificationsData.map((cert) => (
                <li key={cert.id}>
                  <a
                    href={`https://www.credly.com/badges/${cert.id}`}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(bentoCard, 'h-full items-center justify-start text-center transition-transform active:scale-[0.97]')}
                  >
                    <img
                      src={`https://images.credly.com/size/160x160/images/${cert.img}/blob`}
                      alt=""
                      width="80"
                      height="80"
                      loading="lazy"
                      className="size-20"
                    />
                    <span className="mt-4 text-sm leading-snug font-semibold group-hover:text-primary">{cert.name}</span>
                    <span className="mt-auto pt-2 text-xs text-muted-foreground">
                      {cert.issuer} · {cert.date}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="writing" title="Writing." subtitle="On Hashnode, GeeksforGeeks and Medium.">
            <Writing articles={articlesData} />
          </Section>

          <Section id="skills" title="Skills." subtitle="The tools I work with.">
            <dl className="rounded-xl border border-border bg-card px-4 sm:px-6">
              {skillGroups.map((g) => (
                <div
                  key={g.name}
                  className="grid gap-1 border-b border-border py-5 last:border-b-0 sm:grid-cols-[14rem_1fr] sm:gap-6"
                >
                  <dt className="font-semibold">{g.name}</dt>
                  <dd className="text-muted-foreground">{g.items}</dd>
                </div>
              ))}
            </dl>
          </Section>

          <Section id="achievements" title="Achievements." subtitle="Contests and recognition.">
            <ul className="overflow-hidden rounded-xl border border-border bg-card">
              {achievementsData.map((a) => (
                <li key={a.text} className="border-b border-border last:border-b-0">
                  {a.url ? (
                    <a
                      href={a.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between gap-6 px-4 py-4 transition-colors hover:bg-muted sm:px-6"
                    >
                      <span className="font-medium">{a.text}</span>
                      <ArrowUpRight
                        className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
                        aria-hidden="true"
                      />
                    </a>
                  ) : (
                    <p className="px-4 py-4 font-medium sm:px-6">{a.text}</p>
                  )}
                </li>
              ))}
            </ul>
          </Section>

          <Section id="contact" title="Contact." subtitle="Email is the quickest way to reach me.">
            <div className={cn(bentoCard, 'items-center px-6 py-14 text-center sm:py-20')}>
              <a
                href={`mailto:${EMAIL}`}
                className="font-serif text-[clamp(1.75rem,1rem+3.6vw,3.5rem)] leading-tight break-all italic hover:text-primary sm:break-normal"
              >
                {EMAIL}
              </a>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a href={`mailto:${EMAIL}`} className={button.primary}>
                  Email me
                </a>
                <a href="tel:+919936120982" className={button.secondary}>
                  +91 99361 20982
                </a>
              </div>
              <ul className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
                {socialLinks.map((s) => (
                  <li key={s.label}>
                    <a href={s.url} target="_blank" rel="noreferrer" className="inline-block py-1 text-muted-foreground hover:text-foreground">
                      {s.label} <span aria-hidden="true">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Section>
        </div>
      </main>

      <footer className="mt-28 border-t border-border">
        <div className={cn(container, 'flex items-center justify-between gap-4 py-6 text-[13px] text-muted-foreground')}>
          <span>© {new Date().getFullYear()} Shivendra Kumar Sonkar</span>
          <a href="#top" className="py-1 hover:text-foreground">
            Back to top
          </a>
        </div>
      </footer>
    </MotionConfig>
  );
}
