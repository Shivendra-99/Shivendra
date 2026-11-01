import React from 'react';
import { motion } from 'motion/react';

// Watermelon hero-15's soft blur-up entrance
export const softReveal = {
  hidden: { opacity: 0, y: 18, filter: 'blur(12px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', mass: 1.2, stiffness: 40, damping: 15 },
  },
};

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

// Plays softReveal once on scroll-in. Keep it on short elements: a block taller
// than the viewport may never reach the visibility threshold.
export function Reveal({ as = 'div', ...props }) {
  const Tag = motion[as];
  return (
    <Tag initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={softReveal} {...props} />
  );
}
