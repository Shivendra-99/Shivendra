import React, { useEffect, useRef } from 'react';

/**
 * Pure React Motion Backdrop (Zero Three.js / WebGL dependencies)
 * Renders an interactive, buttery-smooth 60-120fps celestial particle field
 * with glowing cyber stars, ethereal constellation threads, and mouse reactivity.
 */
export default function HeroMotionBackdrop() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement ? canvas.parentElement.offsetWidth : window.innerWidth);
    let height = (canvas.height = canvas.parentElement ? canvas.parentElement.offsetHeight : window.innerHeight);

    // Mouse coordinates with smooth easing
    const mouse = {
      x: width * 0.5,
      y: height * 0.4,
      targetX: width * 0.5,
      targetY: height * 0.4,
      isHovered: false,
    };

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement.offsetHeight || window.innerHeight;
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.isHovered = true;
    };

    const handleMouseLeave = () => {
      mouse.isHovered = false;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    // Color palette matching Nova Dark / Cyber accents
    const colors = [
      '#d946ef', // Electric Magenta
      '#a855f7', // Nova Purple
      '#00f0ff', // Cyber Cyan
      '#38bdf8', // Sky
      '#f1f5f9', // Starlight White
    ];

    // Responsive particle count
    const count = Math.min(Math.max(Math.floor(width / 24), 38), 75);

    const particles = Array.from({ length: count }, () => {
      const color = colors[Math.floor(Math.random() * colors.length)];
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.42,
        vy: (Math.random() - 0.5) * 0.42,
        radius: Math.random() * 2.0 + 0.8,
        color,
        baseAlpha: Math.random() * 0.55 + 0.25,
        pulseAngle: Math.random() * Math.PI * 2,
        pulseSpeed: 0.015 + Math.random() * 0.02,
      };
    });

    // Motion Sequence Clock for Cinematic Camera Pull-Back
    const startTime = performance.now();
    const INTRO_DURATION = 3200; // 3.2s smooth camera pull-back ease

    // Orbital ring state (Asset 03 & Asset 04 technical structures)
    let orbitAngle = 0;

    const render = (now) => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      // Cinematic Camera Pull-Back Sequence (ASSET 04 Motion Specification)
      // Eases smoothly from 1.35x zoom down to 1.0x over 3.2 seconds
      const elapsed = (now || performance.now()) - startTime;
      const introProgress = Math.min(Math.max(elapsed / INTRO_DURATION, 0), 1);
      // Smooth cubic out easing
      const easeOut = 1 - Math.pow(1 - introProgress, 3);
      const cameraZoom = 1.35 - 0.35 * easeOut;
      const systemActivationAlpha = Math.min(elapsed / 1600, 1);

      ctx.save();
      // Center camera transformation
      const centerX = width * 0.5;
      const centerY = height * 0.45;
      ctx.translate(centerX, centerY);
      ctx.scale(cameraZoom, cameraZoom);
      ctx.translate(-centerX, -centerY);

      // Draw subtle futuristic orbital tech rings (System World Architecture)
      orbitAngle += 0.002;
      const ringCenter = {
        x: width > 992 ? width * 0.76 : width * 0.5,
        y: height * 0.45,
      };

      const ringRadii = [90, 160, 240, 320];
      for (let r = 0; r < ringRadii.length; r++) {
        const radius = ringRadii[r];
        const dir = r % 2 === 0 ? 1 : -1;
        const currentAngle = orbitAngle * dir * (0.8 + r * 0.25);

        ctx.save();
        ctx.beginPath();
        ctx.arc(ringCenter.x, ringCenter.y, radius, 0, Math.PI * 2);
        ctx.strokeStyle = r % 2 === 0 ? 'rgba(0, 240, 255, 0.09)' : 'rgba(217, 70, 239, 0.07)';
        ctx.lineWidth = 1;
        ctx.setLineDash([6, 16]);
        ctx.lineDashOffset = -currentAngle * 60;
        ctx.stroke();

        // Accent nodes on rings
        const nodeX = ringCenter.x + Math.cos(currentAngle) * radius;
        const nodeY = ringCenter.y + Math.sin(currentAngle) * radius;
        ctx.beginPath();
        ctx.arc(nodeX, nodeY, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = r % 2 === 0 ? 'rgba(0, 240, 255, 0.45)' : 'rgba(217, 70, 239, 0.4)';
        ctx.fill();
        ctx.restore();
      }

      // Draw and update each particle
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Organic position drift
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around viewport edges
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // Subtle interactive mouse deflection
        if (mouse.isHovered) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150 && dist > 0) {
            const force = (1 - dist / 150) * 0.8;
            p.x -= (dx / dist) * force;
            p.y -= (dy / dist) * force;
          }
        }

        // Luminous breathing pulse
        p.pulseAngle += p.pulseSpeed;
        const alpha = p.baseAlpha * (0.65 + 0.35 * Math.sin(p.pulseAngle)) * systemActivationAlpha;

        // Soft Outer Glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 2.8, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha * 0.25;
        ctx.fill();

        // Inner Core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha;
        ctx.fill();

        // Connect nearby particles with subtle ethereal threads
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const cdx = p.x - p2.x;
          const cdy = p.y - p2.y;
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy);

          if (cdist < 105) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = (1 - cdist / 105) * 0.16 * systemActivationAlpha;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      ctx.restore();
      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-motion-canvas" aria-hidden="true" />;
}
