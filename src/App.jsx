import React, { useEffect, useRef, useState } from 'react';
import shivendraAvatar from '../assets/img/shivendra-avatar.jpg';
import shivendra3dAvatar from '../assets/img/shivendra-3d-avatar.jpg';
import HeroMotionBackdrop from './components/HeroMotionBackdrop.jsx';

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

// Navigation items
const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'showcase', label: 'Showcase' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'articles', label: 'Articles' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

// Marquee phrases
const marqueePhrases = [
  'FULLSTACK SOFTWARE ENGINEER',
  'ENTERPRISE JAVA & SPRING BOOT',
  'REACT.JS ARCHITECT & UI CREATOR',
  'CLOUD & DEVOPS ENGINEERING',
  'AWS & OPENSHIFT',
  'SNAPFIT SAAS CREATOR',
  'HIGH-PERFORMANCE DISTRIBUTED APIS',
  'TERRAFORM & KAFKA / PULSAR',
];

// Real authentic SVG tech glyphs
function renderTechIcon(name) {
  switch (name) {
    case 'java':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M8.86 16.38s-.8 1.05.65 1.5c2.09.64 4.54.49 6.78-.17 0 0 .5.78 1.13.91-4.08 1.74-9.82.97-8.56-2.24zm-.8-3.08s-.87.89.47 1.25c2.25.61 5.34.62 7.76-.08 0 0 .34.65.94.75-4.32 1.63-10.74.87-9.17-1.92zm7.74-6.42c1.03 1.1 1.22 2.37.5 3.32-.82 1.07-2.6 1.48-3.8 2.2-1.07.64-1.24 1.2-1.24 1.2s1.42-.4 3.01-.89c1.98-.61 3.42-1.89 2.5-3.35-.74-1.18-1.57-1.7-1.57-2.48 0-.8.6-1.4 1.2-2.18-.7.2-1.2.9-1.2 1.5 0 .2.1.4.2.68zm-3.9 4.38c-.7-.41-1.82-.93-1.82-1.8 0-1.16 1.08-1.97 1.6-2.83.65-1.07.47-1.95.04-2.88-.13.3-.22.65-.22.95 0 .8.7 1.34.33 2.22-.38.89-1.5 1.36-2.02 2.2-.62 1.02-.37 2.12.3 2.92.54-.3.94-.5 1.79-.78zM19 19.5c-3.7 1.8-10.3 1.8-14 0 0 0-.6 1.1.7 1.6 4.3 1.7 11.5 1.5 14-.1 0 0 .5-.9-.7-1.5z" />
        </svg>
      );
    case 'spring':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M21.94 12.3a11.96 11.96 0 0 0-.73-3.64c-.38-.98-.9-1.88-1.54-2.66-.64-.78-1.42-1.43-2.31-1.9-1.78-.95-3.88-1.2-5.88-.72-2 .48-3.78 1.64-5.02 3.26C4.83 8.78 4.2 11.2 4.6 13.6c.4 2.4 1.7 4.54 3.65 5.99 1.95 1.45 4.4 2.05 6.8 1.68 1.2-.18 2.36-.64 3.38-1.34l-2.48-2.48c-.62.38-1.33.62-2.07.7-1.46.16-2.92-.3-4.04-1.26-1.12-.96-1.82-2.33-1.94-3.79-.12-1.46.36-2.9 1.32-3.98s2.32-1.7 3.78-1.72c1.46-.02 2.88.54 3.92 1.54.4.38.74.83 1 1.32.26.49.44 1.02.52 1.57l2.9-.52c.04-.15.08-.3.1-.46z" />
        </svg>
      );
    case 'microservices':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M4 3h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm12 0h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-6 12h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1zM6 9v2.5A1.5 1.5 0 0 0 7.5 13H11v2h2v-2h3.5a1.5 1.5 0 0 0 1.5-1.5V9h-2v2h-8V9H6z" />
        </svg>
      );
    case 'react':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <circle cx="12" cy="12" r="2.5" />
          <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.6" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.6" transform="rotate(120 12 12)" />
        </svg>
      );
    case 'javascript':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M3 3h18v18H3V3zm13.7 13.8c-.8.5-1.8.8-2.8.8-2.6 0-4-1.5-4-3.7 0-2.5 1.7-3.9 4.3-3.9.8 0 1.6.2 2.2.5v1.8c-.6-.4-1.3-.6-2.1-.6-1.5 0-2.4.8-2.4 2.1 0 1.2.8 2 2.2 2 .7 0 1.4-.2 1.8-.4l.8 1.4zm-6.2-4.1v4.1H8.8V8.6h1.7v4.1z" />
        </svg>
      );
    case 'tailwind':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
        </svg>
      );
    case 'htmlcss':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M3 2l1.8 17.5L12 22l7.2-2.5L21 2H3zm15.4 5.2H7.6l.3 3.1h10.2l-.7 7.2-5.4 1.5-5.4-1.5-.4-4h2.2l.2 2.1 3.4.9 3.4-.9.4-4H6.8L6 4h12.6l-.2 3.2z" />
        </svg>
      );
    case 'aws':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M6.76 13.06c-.84 0-1.53-.24-2.07-.72-.54-.48-.81-1.12-.81-1.92 0-.82.28-1.48.84-1.97.56-.49 1.33-.74 2.3-.74.83 0 1.51.15 2.05.45v-.43c0-.62-.17-1.09-.5-1.41-.34-.32-.82-.48-1.46-.48-.6 0-1.19.14-1.78.41l-.47-1.16c.72-.37 1.55-.56 2.47-.56 1.11 0 1.96.28 2.54.85.58.57.87 1.38.87 2.44v4.44h-1.5v-1c-.6.7-1.4 1.05-2.48 1.05zm.37-1.18c.62 0 1.15-.2 1.6-.6.44-.4.66-.92.66-1.55v-.42c-.44-.26-1.02-.39-1.74-.39-.67 0-1.2.14-1.58.43-.38.29-.57.69-.57 1.21 0 .43.14.77.43 1.01.29.21.69.31 1.2.31zm11.11 1.06l-2.04-6.85h1.72l1.24 4.88 1.25-4.88h1.68l-2.06 6.85h-1.79zm-4.78.12c-.52 0-.96-.13-1.32-.38-.36-.25-.63-.6-.82-1.03l1.4-.58c.2.46.54.7 1.01.7.35 0 .61-.09.79-.27.18-.18.27-.4.27-.67 0-.5-.39-.81-1.16-.94l-.7-.12c-.89-.15-1.55-.42-1.97-.8-.42-.39-.63-.92-.63-1.59 0-.75.29-1.34.88-1.79.58-.45 1.33-.67 2.24-.67.75 0 1.41.17 1.99.52.57.34.93.85 1.06 1.51l-1.44.5c-.14-.38-.42-.58-.85-.58-.33 0-.58.08-.74.24-.16.16-.24.36-.24.6 0 .44.37.72 1.1.84l.71.12c.93.16 1.63.45 2.08.87.46.42.69.97.69 1.67 0 .78-.3 1.4-.9 1.86-.6.46-1.4.69-2.38.69zM3.5 17.5c5.5 3.3 12.3 3.3 17 0l.9 1.2c-5.2 3.8-13 3.8-18.8 0l.9-1.2z" />
        </svg>
      );
    case 'openshift':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8l7 3.5-7 3.5-7-3.5 7-3.5zM4 9.1l7 3.5v7l-7-3.5V9.1zm16 7l-7 3.5v-7l7-3.5v7z" />
        </svg>
      );
    case 'docker':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M22.5 11c-.3 0-.6.1-.8.2-.4-.7-1.1-1.2-2-1.2h-.5c-.3-1.4-1.5-2.5-3-2.5h-1V5H2v7.5C2 17.2 5.8 21 10.5 21c5.2 0 9.5-3.8 10.3-8.8.8-.2 1.7-.8 1.7-1.7 0-.3 0-.5 0-.5zM7.5 7.5H10v2.5H7.5V7.5zm-3 0H7v2.5H4.5V7.5zm6 0H13v2.5h-2.5V7.5zm-6 3.5H7v2.5H4.5V11zm3 0H10v2.5H7.5V11zm3 0H13v2.5h-2.5V11zm3 0h2.5v2.5H13.5V11z" />
        </svg>
      );
    case 'terraform':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M1.5 2.5v6.2l5.4 3.1V5.6L1.5 2.5zm7 4.1v6.2l5.4 3.1V9.7L8.5 6.6zm7.1 0v6.2l5.4-3.1V3.5l-5.4 3.1zM8.5 13.9v6.2l5.4-3.1v-6.2l-5.4 3.1z" />
        </svg>
      );
    case 'monitoring':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z" />
          <path d="M12 6a1 1 0 0 0-1 1v4.586l-2.707 2.707a1 1 0 0 0 1.414 1.414l3-3A1 1 0 0 0 13 12V7a1 1 0 0 0-1-1z" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );
    case 'mongodb':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M12 1.5s-6 5.5-6 11.5c0 4.5 3.5 7.8 6 9.5 2.5-1.7 6-5 6-9.5 0-6-6-11.5-6-11.5zm.5 17.5v-7.2c0-.3-.2-.5-.5-.5s-.5.2-.5.5v7.2c-2-1.4-4-3.7-4-6.7 0-4.2 3.5-7.9 4.5-8.9 1 1 4.5 4.7 4.5 8.9 0 3-2 5.3-4 6.7z" />
        </svg>
      );
    case 'mysql':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M12 3C6.48 3 2 4.79 2 7v10c0 2.21 4.48 4 10 4s10-1.79 10-4V7c0-2.21-4.48-4-10-4zm0 2c4.41 0 8 1.34 8 3s-3.59 3-8 3-8-1.34-8-3 3.59-3 8-3zm8 7c0 .41-.35.8-.97 1.15C17.43 13.97 14.86 14.5 12 14.5s-5.43-.53-7.03-1.35C4.35 12.8 4 12.41 4 12V9.82c1.78 1.32 4.71 2.18 8 2.18s6.22-.86 8-2.18V12zm0 5c0 .41-.35.8-.97 1.15C17.43 18.97 14.86 19.5 12 19.5s-5.43-.53-7.03-1.35C4.35 17.8 4 17.41 4 17v-2.18c1.78 1.32 4.71 2.18 8 2.18s6.22-.86 8-2.18V17z" />
        </svg>
      );
    case 'snowflake':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M11 2v4.17l-2.58-2.58-1.42 1.41L11 9.01V11H9.01L5 6.99 3.59 8.41 6.17 11H2v2h4.17l-2.58 2.59L5 17.01 9.01 13H11v1.99l-4.01 4.02 1.42 1.41L11 17.83V22h2v-4.17l2.59 2.58 1.41-1.41L13 14.99V13h1.99l4.02 4.01 1.41-1.41L17.83 13H22v-2h-4.17l2.58-2.59-1.41-1.41L14.99 11H13V9.01l4.01-4.01-1.41-1.41L13 6.17V2h-2z" />
        </svg>
      );
    case 'pulsar':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          <path d="M12 6a6 6 0 0 0-6 6h2a4 4 0 0 1 4-4V6zm0 12a6 6 0 0 0 6-6h-2a4 4 0 0 1-4 4v2z" />
        </svg>
      );
    default:
      return <i className="bi bi-cpu" />;
  }
}

// Skills catalog categorized with genuine brand styling and SVG icons
const skillCategories = ['All', 'Backend & Core', 'Frontend', 'Cloud & DevOps', 'Databases & Messaging'];

const allSkills = [
  {
    name: 'Core Java',
    category: 'Backend & Core',
    level: 'Advanced / Concurrency',
    color: '#f89820',
    glow: 'rgba(248, 152, 32, 0.25)',
    icon: 'java',
  },
  {
    name: 'Spring Boot',
    category: 'Backend & Core',
    level: 'Enterprise Microservices',
    color: '#6db33f',
    glow: 'rgba(109, 179, 63, 0.25)',
    icon: 'spring',
  },
  {
    name: 'REST APIs & Microservices',
    category: 'Backend & Core',
    level: 'High-Throughput / Distributed',
    color: '#a855f7',
    glow: 'rgba(168, 85, 247, 0.25)',
    icon: 'microservices',
  },
  {
    name: 'React.js',
    category: 'Frontend',
    level: 'Hooks, SPA & SSR Architecture',
    color: '#61dafb',
    glow: 'rgba(97, 218, 251, 0.25)',
    icon: 'react',
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'Frontend',
    level: 'Async/Await, Canvas, V8 Perf',
    color: '#f7df1e',
    glow: 'rgba(247, 223, 30, 0.25)',
    icon: 'javascript',
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    level: 'Responsive UI & Modern Utility Design',
    color: '#38bdf8',
    glow: 'rgba(56, 189, 248, 0.25)',
    icon: 'tailwind',
  },
  {
    name: 'HTML5 & Modern CSS',
    category: 'Frontend',
    level: 'Responsive Grid, Flex & Glassmorphism',
    color: '#e34f26',
    glow: 'rgba(227, 79, 38, 0.25)',
    icon: 'htmlcss',
  },
  {
    name: 'AWS Cloud Ecosystem',
    category: 'Cloud & DevOps',
    level: 'S3, Lambda, Beanstalk, SQS, IAM',
    color: '#ff9900',
    glow: 'rgba(255, 153, 0, 0.25)',
    icon: 'aws',
  },
  {
    name: 'Red Hat OpenShift',
    category: 'Cloud & DevOps',
    level: 'Enterprise Kubernetes Clusters',
    color: '#ee0000',
    glow: 'rgba(238, 0, 0, 0.25)',
    icon: 'openshift',
  },
  {
    name: 'Docker & Containers',
    category: 'Cloud & DevOps',
    level: 'Multi-stage Builds & Compose',
    color: '#2496ed',
    glow: 'rgba(36, 150, 237, 0.25)',
    icon: 'docker',
  },
  {
    name: 'Terraform IaC',
    category: 'Cloud & DevOps',
    level: 'Declarative Cloud Infrastructure',
    color: '#844fba',
    glow: 'rgba(132, 79, 186, 0.25)',
    icon: 'terraform',
  },
  {
    name: 'Dynatrace & Splunk',
    category: 'Cloud & DevOps',
    level: 'APM Telemetry & Log Ingestion',
    color: '#00e676',
    glow: 'rgba(0, 230, 118, 0.25)',
    icon: 'monitoring',
  },
  {
    name: 'MongoDB',
    category: 'Databases & Messaging',
    level: 'NoSQL Aggregation & Sharding',
    color: '#47a248',
    glow: 'rgba(71, 162, 72, 0.25)',
    icon: 'mongodb',
  },
  {
    name: 'MySQL',
    category: 'Databases & Messaging',
    level: 'Relational Indexing & Query Tuning',
    color: '#00758f',
    glow: 'rgba(0, 117, 143, 0.25)',
    icon: 'mysql',
  },
  {
    name: 'Snowflake',
    category: 'Databases & Messaging',
    level: 'Cloud Data Warehousing & RBAC',
    color: '#29b5e8',
    glow: 'rgba(41, 181, 232, 0.25)',
    icon: 'snowflake',
  },
  {
    name: 'Apache Pulsar / Kafka',
    category: 'Databases & Messaging',
    level: 'Distributed Event Streaming',
    color: '#199bff',
    glow: 'rgba(25, 155, 255, 0.25)',
    icon: 'pulsar',
  },
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

// Technical articles with verified takeaways and architectural highlights
const articlesData = [
  {
    id: '01',
    title: 'Text to PDF Conversion Using AWS Lambda & S3',
    platform: 'Hashnode',
    readTime: '5 min read',
    tech: 'Java 17, AWS Lambda, Amazon S3, Serverless Architecture',
    link: 'https://shivendra-sonkar.hashnode.dev/text-to-pdf-conversion-using-aws-lambda-and-s3-using-java',
    desc: 'Architecting a serverless workflow to convert raw dynamic text input into structured, downloadable PDF documents using AWS Lambda and persisting them into Amazon S3 buckets with lifecycle retention.',
    keyTakeaways: [
      'Constructed an event-driven serverless pipeline converting raw dynamic text payloads into PDF documents on demand.',
      'Integrated AWS Java SDK to securely stream generated document buffers directly to Amazon S3 with lifecycle policies.',
      'Optimized JVM cold-start latency and memory allocation configurations within AWS Lambda execution runtime.',
    ],
    highlights: [
      { label: 'SERVERLESS', val: 'AWS Lambda Java Runtime', icon: 'bi-cloud-arrow-up-fill' },
      { label: 'STORAGE', val: 'Amazon S3 Document Lake', icon: 'bi-archive-fill' },
      { label: 'PLATFORM', val: 'Hashnode Published', icon: 'bi-bookmark-check-fill' },
    ],
    tags: ['AWS Lambda', 'Amazon S3', 'Java', 'Serverless', 'Cloud Architecture'],
  },
  {
    id: '02',
    title: 'Self-Hosting Judge0 on Windows: A Step-by-Step Guide',
    platform: 'Hashnode',
    readTime: '6 min read',
    tech: 'Docker, WSL2, Ubuntu, Judge0 CE, Redis, PostgreSQL',
    link: 'https://shivendra-sonkar.hashnode.dev/self-hosting-judge0-on-windows-a-step-by-step-guide',
    desc: 'Comprehensive step-by-step engineering guide to configuring an isolated, high-throughput code-execution engine locally on Windows for competitive programming and online judge systems.',
    keyTakeaways: [
      'Engineered an isolated Docker sandbox environment running on Windows via WSL2 backend, eliminating host vulnerabilities.',
      'Configured asynchronous job queues with Redis and PostgreSQL for low-latency multi-language compilation.',
      'Documented REST API testing workflows with cURL and Postman for batch submission and polling.',
    ],
    highlights: [
      { label: 'ARCHITECTURE', val: 'Dockerized Sandboxing', icon: 'bi-box-seam-fill' },
      { label: 'EXECUTION', val: 'Multi-Language Compiler', icon: 'bi-cpu-fill' },
      { label: 'PLATFORM', val: 'Hashnode Published', icon: 'bi-bookmark-check-fill' },
    ],
    tags: ['Docker', 'Judge0', 'WSL2', 'Sandboxing', 'DevOps'],
  },
  {
    id: '03',
    title: 'How to Connect MongoDB with Spring Boot?',
    platform: 'GeeksforGeeks',
    readTime: '5 min read',
    tech: 'Java 17, Spring Boot 3, Spring Data MongoDB, MongoRepository',
    link: 'https://www.geeksforgeeks.org/how-to-connect-mongodb-with-spring-boot/',
    desc: 'Step-by-step architectural breakdown of integrating MongoDB with an enterprise Spring Boot backend, covering connection pooling, repository abstractions, indexing, and production pitfalls.',
    keyTakeaways: [
      'Configured robust MongoCredential and replica-set connection strings inside application.properties.',
      'Leveraged MongoTemplate for complex aggregation queries alongside standard MongoRepository interfaces.',
      'Identified and resolved production bottlenecks: connection leaks, index creation, and entity serialization.',
    ],
    highlights: [
      { label: 'INTEGRATION', val: 'Spring Data MongoDB', icon: 'bi-database-fill-gear' },
      { label: 'PATTERN', val: 'Domain-Driven Repository', icon: 'bi-diagram-3-fill' },
      { label: 'PLATFORM', val: 'GeeksforGeeks Featured', icon: 'bi-patch-check-fill' },
    ],
    tags: ['Spring Boot', 'MongoDB', 'Java', 'NoSQL', 'Backend'],
  },
  {
    id: '04',
    title: 'Building an Async Email Notification System with Express, SQS & Lambda',
    platform: 'Medium',
    readTime: '7 min read',
    tech: 'Node.js, Express, Amazon SQS, AWS Lambda, Serverless',
    link: 'https://medium.com/@sanusonkar1/how-i-built-an-async-email-notification-system-using-express-js-sqs-and-aws-lambda-be09adbafd22',
    desc: 'Practical walkthrough of designing a decoupled, resilient background email queuing architecture using Express.js, Amazon SQS, and serverless AWS Lambda worker consumers.',
    keyTakeaways: [
      'Decoupled HTTP request lifecycles from blocking SMTP transports using asynchronous Amazon SQS queues.',
      'Constructed serverless AWS Lambda consumer workers triggered automatically by SQS event source mappings.',
      'Configured Dead-Letter Queues (DLQ) with exponential backoff retries for fault-tolerant delivery guarantees.',
    ],
    highlights: [
      { label: 'DECOUPLING', val: 'Amazon SQS Message Queue', icon: 'bi-envelope-paper-fill' },
      { label: 'SERVERLESS', val: 'AWS Lambda Event Workers', icon: 'bi-cloud-check-fill' },
      { label: 'PLATFORM', val: 'Medium Publication', icon: 'bi-award-fill' },
    ],
    tags: ['AWS SQS', 'AWS Lambda', 'Express.js', 'Event-Driven', 'Cloud'],
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
  const [isLightMode, setIsLightMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('shivendra_theme');
      if (saved) return saved === 'light';
    }
    return false;
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Sync theme with body class and localStorage
  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('light-mode');
      localStorage.setItem('shivendra_theme', 'light');
    } else {
      document.body.classList.remove('light-mode');
      localStorage.setItem('shivendra_theme', 'dark');
    }
  }, [isLightMode]);

  // Magnetic card mouse tilt ref & touch gesture ref
  const magneticCardRef = useRef(null);
  const touchStartXRef = useRef(null);

  // Section observer for floating navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'showcase', 'experience', 'projects', 'articles', 'skills', 'contact'];
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
    setIsLightMode((prev) => !prev);
  };

  // 3D Magnetic Card tilt on mouse move (desktop only to prevent sticking on touch devices)
  const handleCardMouseMove = (e) => {
    if (reducedMotion || !magneticCardRef.current) return;
    if (typeof window !== 'undefined' && (window.innerWidth <= 768 || window.matchMedia('(pointer: coarse)').matches)) return;
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
          {/* Pure React Interactive Motion Particles */}
          <HeroMotionBackdrop />

          <div className="hero-radial-glow" aria-hidden="true" />

          <div className="container">
            <div className="hero-grid">
              {/* Left Column: Hero Text & Information */}
              <div className="hero-content">
                <div className="hero-status-badge">
                  <span className="pulse-dot" />
                  <span>AVAILABLE FOR FULLSTACK ROLES &amp; HIGH-IMPACT PROJECTS</span>
                </div>

                <h1 className="hero-title">Shivendra Kumar Sonkar</h1>

                <p className="hero-role-title">
                  Fullstack Software Engineer
                </p>

                <p className="hero-bio">
                  I design and build enterprise-grade distributed systems and modern reactive web applications.
                  Pairing robust backend microservices (<strong>Java, Spring Boot</strong>) with fluid interfaces (
                  <strong>React.js, Modern UI Architecture</strong>) and resilient cloud infrastructure (<strong>AWS, OpenShift, Docker</strong>).
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
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
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
                  onTouchStart={(e) => {
                    if (e.touches && e.touches[0]) {
                      touchStartXRef.current = e.touches[0].clientX;
                    }
                  }}
                  onTouchEnd={(e) => {
                    if (touchStartXRef.current !== null && e.changedTouches && e.changedTouches[0]) {
                      const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
                      if (Math.abs(deltaX) > 40) {
                        setActiveAvatarMode((prev) => (prev === 'photoreal' ? '3d' : 'photoreal'));
                      }
                      touchStartXRef.current = null;
                    }
                  }}
                  role="region"
                  aria-label="Interactive Avatar Display (Tap switcher or swipe left/right to toggle)"
                >
                  <div className="avatar-halo" aria-hidden="true" />
                  <div className="magnetic-avatar-inner">
                    <img
                      src={shivendraAvatar}
                      alt="Shivendra Kumar Sonkar — Executive Studio Headshot"
                      className={`avatar-img ${activeAvatarMode === 'photoreal' ? 'active' : ''}`}
                      loading="eager"
                      decoding="async"
                      draggable={false}
                    />
                    <img
                      src={shivendra3dAvatar}
                      alt="Shivendra Kumar Sonkar — 3D Creative Avatar"
                      className={`avatar-img ${activeAvatarMode === '3d' ? 'active' : ''}`}
                      loading="eager"
                      decoding="async"
                      draggable={false}
                    />
                  </div>
                </div>

                {/* Interactive Mode Switcher */}
                <div className="avatar-switcher-pill" role="tablist" aria-label="Avatar display mode">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeAvatarMode === 'photoreal'}
                    className={`switcher-btn ${activeAvatarMode === 'photoreal' ? 'active' : ''}`}
                    onClick={() => setActiveAvatarMode('photoreal')}
                    onTouchEnd={(e) => {
                      e.preventDefault();
                      setActiveAvatarMode('photoreal');
                    }}
                    title="View Studio Headshot"
                  >
                    <i className="bi bi-camera-fill" />
                    <span>Executive Studio</span>
                  </button>

                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeAvatarMode === '3d'}
                    className={`switcher-btn ${activeAvatarMode === '3d' ? 'active' : ''}`}
                    onClick={() => setActiveAvatarMode('3d')}
                    onTouchEnd={(e) => {
                      e.preventDefault();
                      setActiveAvatarMode('3d');
                    }}
                    title="View Creative Digital Avatar"
                  >
                    <i className="bi bi-person-badge-fill" />
                    <span>Creative Avatar</span>
                  </button>
                </div>

                <div className="avatar-caption-badge">
                  <span>✦ MODERN FULLSTACK ENGINEER &amp; CREATOR AESTHETIC</span>
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
        {/* 4. CAREER EXPERIENCE (Stacking Signature Nova Cards)         */}
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

            <div className="stacking-experience-wrapper">
              {experienceData.map((exp, idx) => (
                <div
                  key={idx}
                  className="stack-exp-card"
                  style={{ '--stack-offset': `${idx * 24}px` }}
                >
                  {/* Left Column: Role, Company, Period, Bullets */}
                  <div className="stack-exp-left">
                    <div className="stack-exp-meta">
                      <span className="exp-idx">0{idx + 1} / 0{experienceData.length}</span>
                      <span className="exp-period-badge">
                        <i className="bi bi-calendar3" style={{ marginRight: 6 }} />
                        {exp.period}
                      </span>
                    </div>

                    <h3 className="stack-exp-role">{exp.role}</h3>
                    <div className="stack-exp-company">
                      <i className="bi bi-buildings" />
                      <span>{exp.company}</span>
                      <span style={{ color: 'var(--color-text-dim)', fontSize: 14, fontWeight: 500 }}>• {exp.location}</span>
                    </div>

                    <ul className="stack-exp-points">
                      {exp.bullets.map((b, bIdx) => (
                        <li key={bIdx}>{b}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column: Quantified Telemetry & Metrics */}
                  <div className="stack-exp-right">
                    <h4 className="card-highlights-title">Quantified Production Impact</h4>
                    <div className="highlight-chips-grid">
                      {exp.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="exp-metric-card">
                          <span className="exp-metric-label">{m.label}</span>
                          <span className="exp-metric-val">{m.val}</span>
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
        {/* 5. STACKING PROJECT CARDS (Signature Nova Experience)        */}
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
        {/* 6. TECHNICAL ARTICLES (Stacking Signature Nova Cards)         */}
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
                In-depth technical guides, architectural breakdowns, and tutorials published across Hashnode, GeeksforGeeks, and Medium. Engineering architectures that stack as you read.
              </p>
            </div>

            <div className="stacking-articles-wrapper">
              {articlesData.map((art, idx) => (
                <article
                  key={art.id}
                  className="stack-article-card"
                  style={{ '--stack-offset': `${idx * 24}px` }}
                >
                  {/* Left Column: Meta, Title, Tech, Bullets, Action Button */}
                  <div className="stack-article-left">
                    <div className="stack-article-meta">
                      <span className="article-idx">{art.id} / 0{articlesData.length}</span>
                      <div className="article-meta-badges">
                        <span className="article-platform-badge">{art.platform}</span>
                        <span className="article-readtime-badge">
                          <i className="bi bi-clock" style={{ marginRight: 5 }} />
                          {art.readTime}
                        </span>
                      </div>
                    </div>

                    <h3 className="stack-article-title">{art.title}</h3>
                    <p className="stack-article-tech">{art.tech}</p>
                    <p className="stack-article-desc">{art.desc}</p>

                    <ul className="stack-article-points">
                      {art.keyTakeaways.map((pt, pIdx) => (
                        <li key={pIdx}>{pt}</li>
                      ))}
                    </ul>

                    <div className="stack-article-links">
                      <a
                        href={art.link}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-article-read"
                      >
                        <i className="bi bi-book-half" />
                        <span>Read Full Article on {art.platform}</span>
                        <i className="bi bi-arrow-up-right" />
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Architectural Highlights & Topic Chips */}
                  <div className="stack-article-right">
                    <h4 className="card-highlights-title">Engineering Takeaways</h4>
                    <div className="highlight-chips-grid">
                      {art.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="article-metric-card">
                          <i className={`bi ${item.icon} article-metric-icon`} />
                          <div className="article-metric-content">
                            <span className="article-metric-label">{item.label}</span>
                            <span className="article-metric-val">{item.val}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="article-tags-wrap">
                      <span className="article-tags-heading">TOPICS &amp; STACK</span>
                      <div className="article-tags-grid">
                        {art.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="article-tag-chip">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 7. INTERACTIVE SKILLS MATRIX (Enhanced Nova Tech Grid)       */}
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

            {/* Category Filter Tabs with Item Counts */}
            <div className="skills-filter-tabs">
              {skillCategories.map((cat) => {
                const count =
                  cat === 'All'
                    ? allSkills.length
                    : allSkills.filter((s) => s.category === cat).length;
                return (
                  <button
                    key={cat}
                    type="button"
                    className={`skill-tab-btn ${activeSkillCategory === cat ? 'active' : ''}`}
                    onClick={() => setActiveSkillCategory(cat)}
                  >
                    <span>{cat}</span>
                    <span className="tab-count">{count}</span>
                  </button>
                );
              })}
            </div>

            {/* Enhanced Skills Grid */}
            <div className="skills-matrix-grid">
              {filteredSkills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="skill-card"
                  style={{
                    '--skill-color': skill.color,
                    '--skill-glow': skill.glow,
                  }}
                >
                  <div className="skill-card-top">
                    <div className="skill-icon-wrap" style={{ color: skill.color }}>
                      {renderTechIcon(skill.icon)}
                    </div>
                    <span className="skill-level-pill">{skill.category}</span>
                  </div>
                  <div className="skill-card-bottom">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-desc-tag">{skill.level}</span>
                  </div>
                </div>
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
                  aria-label="Twitter/X profile"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
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
              <span>Built with Pure React.js • Hosted on GitHub Pages</span>
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
