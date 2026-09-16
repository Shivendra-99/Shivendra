import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import shivendraAvatar from '../assets/img/shivendra-avatar.jpg';
import shivendra3dAvatar from '../assets/img/shivendra-3d-avatar.jpg';

const Hero3D = lazy(() => import('./three/Hero3D.jsx'));

const usePrefersReducedMotion = () => {
  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e) => setReduced(e.matches);
    query.addEventListener('change', handleChange);
    return () => query.removeEventListener('change', handleChange);
  }, []);

  return reduced;
};

// Navigation items matching Nova structure
const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'showcase', label: 'Showcase' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'articles', label: 'Articles' },
  { id: 'contact', label: 'Contact' },
];

// Marquee phrases
const marqueePhrases = [
  'FULLSTACK SOFTWARE ENGINEER',
  'ENTERPRISE JAVA & SPRING BOOT',
  'REACT & THREE.JS CREATOR',
  'CLOUD & DEVOPS ARCHITECT',
  'AWS & OPENSHIFT',
  'SNAPFIT SAAS CREATOR',
  'HIGH-PERFORMANCE DISTRIBUTED APIS',
  'TERRAFORM & KAFKA / PULSAR',
];

// Skills catalog categorized
const skillCategories = ['All', 'Backend & Core', 'Frontend', 'Cloud & DevOps', 'Databases & Messaging'];

const allSkills = [
  { name: 'Core Java', category: 'Backend & Core', icon: 'bi-filetype-java' },
  { name: 'Spring Boot', category: 'Backend & Core', icon: 'bi-gear-wide-connected' },
  { name: 'REST APIs & Microservices', category: 'Backend & Core', icon: 'bi-diagram-3' },
  { name: 'React.js', category: 'Frontend', icon: 'bi-code-square' },
  { name: 'JavaScript (ES6+)', category: 'Frontend', icon: 'bi-filetype-js' },
  { name: 'Three.js / WebGL', category: 'Frontend', icon: 'bi-badge-3d' },
  { name: 'HTML5 & Modern CSS', category: 'Frontend', icon: 'bi-filetype-html' },
  { name: 'AWS (S3, Lambda, Beanstalk, SQS)', category: 'Cloud & DevOps', icon: 'bi-cloud-check' },
  { name: 'Red Hat OpenShift', category: 'Cloud & DevOps', icon: 'bi-boxes' },
  { name: 'Docker & Containers', category: 'Cloud & DevOps', icon: 'bi-box-seam' },
  { name: 'Terraform IaC', category: 'Cloud & DevOps', icon: 'bi-cpu' },
  { name: 'Dynatrace & Splunk', category: 'Cloud & DevOps', icon: 'bi-activity' },
  { name: 'MongoDB', category: 'Databases & Messaging', icon: 'bi-database' },
  { name: 'MySQL', category: 'Databases & Messaging', icon: 'bi-database-fill' },
  { name: 'Snowflake', category: 'Databases & Messaging', icon: 'bi-snow' },
  { name: 'Apache Pulsar / Kafka', category: 'Databases & Messaging', icon: 'bi-broadcast' },
];

// Projects data with verified metrics and links
const projectsData = [
  {
    id: '01',
    title: 'SnapFit',
    category: 'Live Independent SaaS Product',
    tech: 'React.js, JavaScript Canvas, PDF.js, Tailwind CSS',
    liveUrl: 'https://www.snapfit.in',
    githubUrl: 'https://github.com/Shivendra-99/snapFit',
    points: [
      'Built a high-performance browser-based web application for exam-ready photo editing and PDF compression, tailored for Indian competitive exams (NEET, JEE, UPSC, SSC, IBPS, RRB, GATE, NDA).',
      'Engineered 20+ preset configurations with automatic face centering, passport aspect ratio framing, and background replacement (white, off-white, light blue).',
      'Real-time client-side JPEG preview and precise target KB file size estimation without uploading data to servers, preserving complete user privacy.',
      'Developed an integrated standalone PDF compressor with before/after visual preview and dynamic compression ratio sliders.',
    ],
    highlights: [
      { icon: 'bi-shield-check', text: '100% Client-Side Processing (Zero Server Uploads)' },
      { icon: 'bi-speedometer2', text: '20+ Standard Competitive Exam Presets' },
      { icon: 'bi-file-earmark-pdf', text: 'Integrated Dynamic PDF Compressor' },
    ],
  },
  {
    id: '02',
    title: 'News App',
    category: 'Live Web Application',
    tech: 'React 18, Vite, Tailwind CSS v4, React Router, Currents API',
    liveUrl: 'https://newsapp-lac-ten.vercel.app/',
    githubUrl: 'https://github.com/Shivendra-99/newsapp',
    points: [
      'Architected a responsive news portal featuring live category exploration across Business, Technology, Science, Entertainment, and Sports.',
      'Connected Currents API for real-time global news fetching with country-based and category-based filtering.',
      'Designed an editorial hero story showcase and an intuitive "Latest News" grid for high reading retention.',
      'Engineered zero-latency dark/light mode preference synchronization and fluid skeleton loaders for empty and loading states.',
    ],
    highlights: [
      { icon: 'bi-lightning-charge', text: 'Sub-second Category Switching & Live News Feeds' },
      { icon: 'bi-palette', text: 'System-Aware Dark & Light Mode Support' },
      { icon: 'bi-globe2', text: 'Multi-Country Global News Aggregation' },
    ],
  },
  {
    id: '03',
    title: 'Tweet App',
    category: 'Fullstack Microservices Architecture',
    tech: 'Java, Spring Boot, MongoDB, React.js, Docker, AWS (Amplify, Elastic Beanstalk)',
    liveUrl: '',
    githubUrl: '',
    points: [
      'Designed a distributed microblogging platform featuring JWT secure authentication, tweet feed authoring, and social interactions.',
      'Containerized backend services with Docker and deployed scalable microservices on AWS Elastic Beanstalk with frontend on AWS Amplify.',
      'Configured Grafana monitoring dashboards and automated metric alerts for real-time operational observability.',
      'Built a durable serverless text-to-PDF generation pipeline utilizing AWS Lambda and Amazon S3 buckets.',
    ],
    highlights: [
      { icon: 'bi-cloud-arrow-up', text: 'AWS Elastic Beanstalk & Amplify Deployment' },
      { icon: 'bi-graph-up-arrow', text: 'Grafana Telemetry & Server Metric Alerting' },
      { icon: 'bi-cpu', text: 'Serverless AWS Lambda Text-to-PDF Workflows' },
    ],
  },
  {
    id: '04',
    title: 'E-Voting App',
    category: 'Mobile Application & Biometrics',
    tech: 'Java, Android SDK, Firebase Auth, REST APIs, Biometric APIs',
    liveUrl: '',
    githubUrl: '',
    points: [
      'Developed a secure Android electronic voting application enabling verified remote citizens to cast ballots securely.',
      'Implemented multi-factor identity verification incorporating Firebase Authentication and biometric fingerprint scanning.',
      'Integrated real-time RESTful APIs to deliver precinct-level election candidate data and ballot tallies dynamically.',
    ],
    highlights: [
      { icon: 'bi-fingerprint', text: 'Hardware Biometric Fingerprint Authentication' },
      { icon: 'bi-lock', text: 'Tamper-Resistant Multi-Tier Security Architecture' },
      { icon: 'bi-phone', text: 'Native Android SDK Integration' },
    ],
  },
];

// Experience entries with verified metrics
const experienceData = [
  {
    company: 'Accenture Solutions Pvt. Ltd.',
    role: 'Software Engineer (FSE)',
    period: '29-May-2026 – Present',
    location: 'India',
    metrics: [
      { label: 'API Response Time', val: '10s ➔ 2.5s (75% faster)' },
      { label: 'IaC Automation', val: 'Snowflake via Terraform' },
      { label: 'Event Streaming', val: 'Apache Pulsar Listeners' },
    ],
    bullets: [
      'Implemented advanced database pagination and index-driven query optimizations, reducing critical API response times from 10.0 seconds to 2.5 seconds.',
      'Provisioned and maintained Snowflake data warehouse tables and access policies using Terraform to enforce robust Infrastructure-as-Code standards.',
      'Engineered fault-tolerant Apache Pulsar messaging topics and distributed asynchronous listeners for reliable event-driven pipelines.',
    ],
  },
  {
    company: 'Cognizant Technology Solutions',
    role: 'Software Engineer (FSE)',
    period: '09/2021 – 28-May-2026',
    location: 'India',
    metrics: [
      { label: 'Cloud Migration', val: 'PCF ➔ Red Hat OpenShift' },
      { label: 'Frontend Cloud', val: 'Workloads migrated to AWS' },
      { label: 'Monitoring', val: 'Dynatrace & Splunk APM' },
    ],
    bullets: [
      'Spearheaded enterprise backend application migration from Pivotal Cloud Foundry (PCF) to Red Hat OpenShift container platform and frontend to AWS, maximizing resilience and deployment speed.',
      'Configured comprehensive Dynatrace APM telemetry, custom production dashboards, and synthetic alerts for proactive incident mitigation.',
      'Automated secure SFTP integration pipelines to transfer sensitive batch files from Java microservices to banking MFS backends.',
      'Established Splunk log ingestion queries and proactive alerting filters, slashing production incident Mean-Time-To-Resolution (MTTR).',
    ],
  },
];

// Technical articles
const articlesData = [
  {
    title: 'Text to PDF conversion using AWS Lambda and S3',
    platform: 'Hashnode',
    link: 'https://shivendra-sonkar.hashnode.dev/text-to-pdf-conversion-using-aws-lambda-and-s3-using-java',
    desc: 'Architecting a serverless workflow to convert raw text input into structured PDF documents using AWS Lambda and persisting them in Amazon S3 for secure, durable access.',
  },
  {
    title: 'Self-Hosting Judge0 on Windows: A Step-by-Step Guide',
    platform: 'Hashnode',
    link: 'https://shivendra-sonkar.hashnode.dev/self-hosting-judge0-on-windows-a-step-by-step-guide',
    desc: 'Comprehensive step-by-step guide to setting up an isolated Judge0 code-execution sandbox on Windows, compiling and executing code across multiple programming languages.',
  },
  {
    title: 'How to Connect MongoDB with Spring Boot?',
    platform: 'GeeksforGeeks',
    link: 'https://www.geeksforgeeks.org/how-to-connect-mongodb-with-spring-boot/',
    desc: 'Step-by-step architectural breakdown of integrating MongoDB with a modern Spring Boot backend, covering connection pooling, repository abstractions, and common pitfalls.',
  },
  {
    title: 'Building an Async Email Notification System with Express, SQS & Lambda',
    platform: 'Medium',
    link: 'https://medium.com/@sanusonkar1/how-i-built-an-async-email-notification-system-using-express-js-sqs-and-aws-lambda-be09adbafd22',
    desc: 'Practical walkthrough of designing a decoupled, resilient background email queuing system using Express.js, Amazon SQS, and serverless AWS Lambda workers.',
  },
];

// Achievements
const achievementsData = [
  { icon: 'bi-trophy-fill', text: 'Recognized for PCF to Red Hat OpenShift & AWS Cloud Migration leadership.' },
  { icon: 'bi-star-fill', text: 'LeetCode: 3-Star Coder with strong algorithmic problem-solving skills.' },
  { icon: 'bi-patch-check-fill', text: 'HackerRank: Gold Badge in Problem Solving & Algorithms.' },
  { icon: 'bi-award-fill', text: 'HackerEarth Easy20: Ranked 443rd among competitive software engineers.' },
  { icon: 'bi-flag-fill', text: 'Interview Jump Start: Secured 1350th position nationwide in India.' },
  { icon: 'bi-bullseye', text: 'Tech Buzz Coding Contest: Secured 2nd Place across all competitors.' },
];

export default function App() {
  const reducedMotion = usePrefersReducedMotion();
  const [activeSection, setActiveSection] = useState('hero');
  const [activeAvatarMode, setActiveAvatarMode] = useState('photoreal'); // 'photoreal' or '3d'
  const [activeSkillCategory, setActiveSkillCategory] = useState('All');
  const [isLightMode, setIsLightMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [render3D, setRender3D] = useState(false);

  // Magnetic card mouse tilt ref
  const magneticCardRef = useRef(null);

  // Determine whether to mount Three.js canvas
  useEffect(() => {
    const checkViewport = () => {
      setRender3D(window.innerWidth >= 768 && !reducedMotion);
    };
    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, [reducedMotion]);

  // Section observer for floating navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'showcase', 'projects', 'skills', 'experience', 'articles', 'contact'];
      const scrollPos = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme switcher handler
  const toggleTheme = () => {
    const next = !isLightMode;
    setIsLightMode(next);
    if (next) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  };

  // 3D Magnetic Card tilt on mouse move
  const handleCardMouseMove = (e) => {
    if (reducedMotion || !magneticCardRef.current) return;
    const card = magneticCardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = -(y / (rect.height / 2)) * 10;
    const rotateY = (x / (rect.width / 2)) * 10;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleCardMouseLeave = () => {
    if (!magneticCardRef.current) return;
    magneticCardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  // Copy email with toast
  const copyEmail = () => {
    const email = 'shivendrasonkar001@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      setToastMessage('Email copied to clipboard! Looking forward to connecting.');
      setTimeout(() => setToastMessage(''), 3500);
    });
  };

  // Filter skills
  const filteredSkills =
    activeSkillCategory === 'All'
      ? allSkills
      : allSkills.filter((s) => s.category === activeSkillCategory);

  return (
    <div className="nova-page-wrapper">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      {/* Floating Island Navigation */}
      <nav className="nav-island-wrapper" aria-label="Main Navigation">
        <div className="nav-island">
          <a href="#hero" className="nav-brand">
            <span>Shivendra</span>
            <span className="nav-brand-badge">NOVA</span>
          </a>

          <ul className="nav-menu">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <button
              type="button"
              className="btn-icon-nav"
              onClick={toggleTheme}
              aria-label="Toggle light or dark theme"
              title={isLightMode ? 'Switch to Nova Dark' : 'Switch to Clean Light'}
            >
              <i className={`bi ${isLightMode ? 'bi-moon-stars-fill' : 'bi-sun-fill'}`} />
            </button>

            <a href="#contact" className="nav-cta-btn">
              Get in Touch
            </a>

            <button
              type="button"
              className="nav-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <i className={`bi ${mobileMenuOpen ? 'bi-x-lg' : 'bi-list'}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer" role="dialog" aria-label="Mobile Navigation">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? 'active' : ''}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <button
            type="button"
            className="btn-nova-primary"
            style={{ marginTop: 12, justifyContent: 'center' }}
            onClick={() => {
              setMobileMenuOpen(false);
              copyEmail();
            }}
          >
            Copy Email
          </button>
        </div>
      )}

      {/* Main Content Area */}
      <main id="main-content">
        {/* ============================================================ */}
        {/* 1. HERO SECTION & MAGNETIC PORTRAIT                          */}
        {/* ============================================================ */}
        <section id="hero" className="nova-hero">
          {/* Background 3D Canvas */}
          {render3D && (
            <Suspense fallback={null}>
              <Hero3D reducedMotion={reducedMotion} />
            </Suspense>
          )}

          <div className="hero-radial-glow" aria-hidden="true" />

          <div className="container">
            <div className="hero-grid">
              {/* Left Column: Hero Text & Information */}
              <div className="hero-content">
                <div className="hero-status-badge">
                  <span className="pulse-dot" />
                  <span>AVAILABLE FOR ROLES &amp; CLOUD ARCHITECTURE</span>
                </div>

                <h1 className="hero-title">Shivendra Kumar Sonkar</h1>

                <p className="hero-role-title">
                  Fullstack Software Engineer &amp; <span>Cloud Architect</span>
                </p>

                <p className="hero-bio">
                  I design and build enterprise-grade distributed systems and modern reactive web applications.
                  Pairing robust backend microservices (<strong>Java, Spring Boot</strong>) with fluid interfaces (
                  <strong>React, Three.js</strong>) and resilient cloud infrastructure (<strong>AWS, OpenShift, Docker</strong>).
                  Creator of <strong>SnapFit</strong> (snapfit.in), an independently solo-shipped SaaS platform.
                </p>

                <div className="hero-actions">
                  <a href="#projects" className="btn-nova-primary">
                    <span>Explore Shipped Work</span>
                    <i className="bi bi-arrow-right" />
                  </a>

                  <button type="button" onClick={copyEmail} className="btn-nova-glass">
                    <i className="bi bi-envelope-fill" />
                    <span>Copy Email</span>
                  </button>

                  <div className="hero-socials">
                    <a
                      href="https://www.linkedin.com/in/shivendra-kumar-sonkar-4349ab17b"
                      className="social-icon-btn"
                      aria-label="LinkedIn profile"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bi bi-linkedin" />
                    </a>
                    <a
                      href="https://twitter.com/Shivendra9598"
                      className="social-icon-btn"
                      aria-label="Twitter/X profile"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bi bi-twitter-x" />
                    </a>
                    <a
                      href="https://github.com/Shivendra-99"
                      className="social-icon-btn"
                      aria-label="GitHub profile"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bi bi-github" />
                    </a>
                  </div>
                </div>

                {/* Quick Stats Strip */}
                <div className="hero-stats-strip">
                  <div className="stat-item">
                    <span className="stat-number">4+ Yrs</span>
                    <span className="stat-label">Production Experience</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">75%</span>
                    <span className="stat-label">API Latency Drop (10s ➔ 2.5s)</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">1 Shipped</span>
                    <span className="stat-label">Live SaaS Product (SnapFit)</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">10+</span>
                    <span className="stat-label">Cloud Services Shipped</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Magnetic Portrait Card with Interactive Avatar Switcher */}
              <div className="hero-portrait-wrapper">
                <div
                  className="magnetic-avatar-card"
                  ref={magneticCardRef}
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={handleCardMouseLeave}
                  role="region"
                  aria-label="Interactive Avatar Display"
                >
                  <div className="avatar-halo" aria-hidden="true" />
                  <div className="magnetic-avatar-inner">
                    <img
                      src={activeAvatarMode === 'photoreal' ? shivendraAvatar : shivendra3dAvatar}
                      alt="Shivendra Kumar Sonkar — Fullstack Engineer &amp; Creator"
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                </div>

                {/* Interactive Mode Switcher */}
                <div className="avatar-switcher-pill">
                  <button
                    type="button"
                    className={`switcher-btn ${activeAvatarMode === 'photoreal' ? 'active' : ''}`}
                    onClick={() => setActiveAvatarMode('photoreal')}
                    title="View Studio Headshot"
                  >
                    <i className="bi bi-camera-fill" />
                    <span>Executive Studio</span>
                  </button>

                  <button
                    type="button"
                    className={`switcher-btn ${activeAvatarMode === '3d' ? 'active' : ''}`}
                    onClick={() => setActiveAvatarMode('3d')}
                    title="View 3D Creator Avatar"
                  >
                    <i className="bi bi-badge-3d-fill" />
                    <span>3D Avatar</span>
                  </button>
                </div>

                <div className="avatar-caption-badge">
                  <span>✦ NO-CODE / FULLSTACK 3D CREATOR AESTHETIC</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 2. INFINITE MARQUEE TICKER                                   */}
        {/* ============================================================ */}
        <div className="nova-marquee-section" aria-hidden="true">
          <div className="nova-marquee-container">
            <div className="nova-marquee-track">
              {marqueePhrases.concat(marqueePhrases).map((phrase, i) => (
                <div key={i} className="marquee-item">
                  <span>{phrase}</span>
                  <span className="marquee-star">✦</span>
                </div>
              ))}
            </div>
            <div className="nova-marquee-track" aria-hidden="true">
              {marqueePhrases.concat(marqueePhrases).map((phrase, i) => (
                <div key={`dup-${i}`} className="marquee-item">
                  <span>{phrase}</span>
                  <span className="marquee-star">✦</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 3. SHOWCASE STRIP (Flagship Highlights)                      */}
        {/* ============================================================ */}
        <section id="showcase">
          <div className="container">
            <div className="section-header-wrap">
              <div className="section-tag">
                <span className="dot" />
                <span>Curated Highlights</span>
              </div>
              <h2 className="section-heading">Flagship Showcase</h2>
              <p className="section-desc">
                Featured independently shipped products and enterprise engineering accomplishments backed by real, verifiable links and metrics.
              </p>
            </div>

            <div className="showcase-grid">
              {/* Showcase Card 1: SnapFit */}
              <div className="showcase-card">
                <div>
                  <div className="showcase-header">
                    <span className="showcase-badge live">● LIVE DEPLOYMENT</span>
                    <span className="tech-tag">Solo-Shipped</span>
                  </div>
                  <h3 className="showcase-title">SnapFit — Exam Photo &amp; PDF Engine</h3>
                  <p className="showcase-desc">
                    A privacy-focused browser-based utility for Indian competitive exam applicants (NEET, JEE, UPSC, SSC).
                    Featuring 20+ preset crop frames, custom background color replacement, and real-time KB preview — with zero server uploads.
                  </p>
                </div>
                <div className="showcase-footer">
                  <div className="tech-tag-group">
                    <span className="tech-tag">React.js</span>
                    <span className="tech-tag">HTML Canvas</span>
                    <span className="tech-tag">Client-Side PDF</span>
                  </div>
                  <a
                    href="https://www.snapfit.in"
                    target="_blank"
                    rel="noreferrer"
                    className="link-arrow-btn"
                  >
                    <span>Launch snapfit.in</span>
                    <i className="bi bi-box-arrow-up-right" />
                  </a>
                </div>
              </div>

              {/* Showcase Card 2: News App */}
              <div className="showcase-card">
                <div>
                  <div className="showcase-header">
                    <span className="showcase-badge live">● LIVE DEPLOYMENT</span>
                    <span className="tech-tag">Vercel</span>
                  </div>
                  <h3 className="showcase-title">Live Global News Portal</h3>
                  <p className="showcase-desc">
                    A modern responsive news reader streaming real-time international headlines across Business, Tech, Science, and Sports
                    with dynamic skeleton loaders and persisted light/dark theme synchronization.
                  </p>
                </div>
                <div className="showcase-footer">
                  <div className="tech-tag-group">
                    <span className="tech-tag">React 18</span>
                    <span className="tech-tag">Vite</span>
                    <span className="tech-tag">Currents API</span>
                  </div>
                  <a
                    href="https://newsapp-lac-ten.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="link-arrow-btn"
                  >
                    <span>Visit NewsApp</span>
                    <i className="bi bi-box-arrow-up-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 4. STACKING PROJECT CARDS (Signature Nova Experience)        */}
        {/* ============================================================ */}
        <section id="projects">
          <div className="container">
            <div className="section-header-wrap">
              <div className="section-tag">
                <span className="dot" />
                <span>Deep Dive</span>
              </div>
              <h2 className="section-heading">Featured Projects</h2>
              <p className="section-desc">
                Engineering architectures that stack as you read. From solo-built SaaS tools to enterprise distributed backends.
              </p>
            </div>

            <div className="stacking-projects-wrapper">
              {projectsData.map((project, idx) => (
                <div
                  key={project.id}
                  className="stack-card"
                  style={{ '--stack-offset': `${idx * 24}px` }}
                >
                  {/* Left Column: Description, points, links */}
                  <div className="stack-card-left">
                    <div className="stack-card-meta">
                      <span className="project-idx">{project.id} / 04</span>
                      <span className="project-category">{project.category}</span>
                    </div>

                    <h3 className="stack-card-title">{project.title}</h3>
                    <p className="stack-card-tech">{project.tech}</p>

                    <ul className="stack-card-points">
                      {project.points.map((pt, pIdx) => (
                        <li key={pIdx}>{pt}</li>
                      ))}
                    </ul>

                    <div className="stack-card-links">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-project-live"
                        >
                          <i className="bi bi-box-arrow-up-right" />
                          <span>Live App</span>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-project-code"
                        >
                          <i className="bi bi-github" />
                          <span>View Code</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Architectural Highlights */}
                  <div className="stack-card-right">
                    <h4 className="card-highlights-title">Engineering Highlights</h4>
                    <div className="highlight-chips-grid">
                      {project.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="highlight-chip">
                          <i className={`bi ${item.icon} highlight-icon`} />
                          <span className="highlight-text">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 5. INTERACTIVE SKILLS MATRIX                                 */}
        {/* ============================================================ */}
        <section id="skills">
          <div className="container">
            <div className="section-header-wrap">
              <div className="section-tag">
                <span className="dot" />
                <span>Technical Capabilities</span>
              </div>
              <h2 className="section-heading">Skills &amp; Technology Matrix</h2>
              <p className="section-desc">
                Core technologies and frameworks applied daily across production systems, high-scale APIs, and cloud infrastructure.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="skills-filter-tabs">
              {skillCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`skill-tab-btn ${activeSkillCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveSkillCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Skills Grid */}
            <div className="skills-matrix-grid">
              {filteredSkills.map((skill, sIdx) => (
                <div key={sIdx} className="skill-card">
                  <div className="skill-icon-wrap">
                    <i className={`bi ${skill.icon}`} />
                  </div>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-category">{skill.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 6. CAREER EXPERIENCE TIMELINE                                */}
        {/* ============================================================ */}
        <section id="experience">
          <div className="container">
            <div className="section-header-wrap">
              <div className="section-tag">
                <span className="dot" />
                <span>Track Record</span>
              </div>
              <h2 className="section-heading">Work Experience</h2>
              <p className="section-desc">
                Proven track record delivering scalable features, slashing latency, and migrating mission-critical systems across enterprise environments.
              </p>
            </div>

            <div className="experience-timeline">
              {experienceData.map((exp, idx) => (
                <div key={idx} className="experience-card">
                  <div className="exp-header">
                    <div className="exp-role-wrap">
                      <h3>{exp.role}</h3>
                      <span className="exp-company">{exp.company}</span>
                    </div>
                    <span className="exp-period-badge">
                      <i className="bi bi-calendar3" style={{ marginRight: 6 }} />
                      {exp.period}
                    </span>
                  </div>

                  {/* Quantified Metrics Pills */}
                  <div className="exp-highlights-grid">
                    {exp.metrics.map((m, mIdx) => (
                      <span key={mIdx} className="exp-metric-pill">
                        <i className="bi bi-check2-circle" />
                        <strong>{m.label}:</strong> {m.val}
                      </span>
                    ))}
                  </div>

                  {/* Bullet points */}
                  <ul className="exp-bullets">
                    {exp.bullets.map((b, bIdx) => (
                      <li key={bIdx}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 7. TECHNICAL ARTICLES                                        */}
        {/* ============================================================ */}
        <section id="articles">
          <div className="container">
            <div className="section-header-wrap">
              <div className="section-tag">
                <span className="dot" />
                <span>Knowledge Sharing</span>
              </div>
              <h2 className="section-heading">Published Articles</h2>
              <p className="section-desc">
                In-depth technical guides, architectural breakdowns, and tutorials published across Hashnode, GeeksforGeeks, and Medium.
              </p>
            </div>

            <div className="articles-grid">
              {articlesData.map((art, idx) => (
                <article key={idx} className="article-card">
                  <div>
                    <span className="article-platform-badge">{art.platform}</span>
                    <h3 className="article-title">{art.title}</h3>
                    <p className="article-desc">{art.desc}</p>
                  </div>
                  <a
                    href={art.link}
                    target="_blank"
                    rel="noreferrer"
                    className="article-link"
                  >
                    <span>Read Full Article</span>
                    <i className="bi bi-arrow-up-right" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 8. ACHIEVEMENTS & CREDENTIALS                                */}
        {/* ============================================================ */}
        <section id="achievements">
          <div className="container">
            <div className="section-header-wrap">
              <div className="section-tag">
                <span className="dot" />
                <span>Honors &amp; Contests</span>
              </div>
              <h2 className="section-heading">Verified Achievements</h2>
              <p className="section-desc">
                Competitive programming achievements, contest podiums, and enterprise recognition milestones.
              </p>
            </div>

            <div className="achievements-grid">
              {achievementsData.map((ach, idx) => (
                <div key={idx} className="achievement-card">
                  <i className={`bi ${ach.icon} achievement-icon`} />
                  <span className="achievement-text">{ach.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 9. HIGH-IMPACT CONTACT & FOOTER                              */}
        {/* ============================================================ */}
        <section id="contact" className="nova-contact-section">
          <div className="container">
            <div className="contact-cta-card">
              <h2 className="contact-title">Let&apos;s Build Something Extraordinary</h2>
              <p className="contact-desc">
                Whether you are looking to scale high-throughput microservices, modernize your frontend, or deploy resilient cloud infrastructure, I&apos;m ready to contribute immediately.
              </p>

              <div className="contact-button-row">
                <button type="button" onClick={copyEmail} className="btn-copy-email">
                  <i className="bi bi-clipboard-check-fill" />
                  <span>Copy Email: shivendrasonkar001@gmail.com</span>
                </button>

                <a href="tel:+919936120982" className="btn-contact-call">
                  <i className="bi bi-telephone-fill" />
                  <span>+91 99361 20982</span>
                </a>
              </div>

              <div className="contact-social-row">
                <a
                  href="https://www.linkedin.com/in/shivendra-kumar-sonkar-4349ab17b"
                  className="social-icon-btn"
                  aria-label="LinkedIn profile"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-linkedin" />
                </a>
                <a
                  href="https://twitter.com/Shivendra9598"
                  className="social-icon-btn"
                  aria-label="Twitter profile"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-twitter-x" />
                </a>
                <a
                  href="https://github.com/Shivendra-99"
                  className="social-icon-btn"
                  aria-label="GitHub profile"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-github" />
                </a>
                <a
                  href="mailto:shivendrasonkar001@gmail.com"
                  className="social-icon-btn"
                  aria-label="Direct Email"
                >
                  <i className="bi bi-envelope-fill" />
                </a>
              </div>
            </div>

            {/* Footer Bottom */}
            <footer className="footer-bottom">
              <span className="footer-bottom-brand">Shivendra Kumar Sonkar © {new Date().getFullYear()}</span>
              <span>Designed with Nova 3D Creator Aesthetic • React &amp; Three.js • Hosted on GitHub Pages</span>
            </footer>
          </div>
        </section>
      </main>

      {/* Toast Notification for Email Copy */}
      {toastMessage && (
        <div className="toast-notice" role="alert" aria-live="assertive">
          <i className="bi bi-check-circle-fill" style={{ color: '#00f0ff' }} />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
