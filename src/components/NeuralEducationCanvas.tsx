import React, { useEffect, useRef } from 'react';

interface NeuralEducationCanvasProps {
  intensity?: 'gentle' | 'normal' | 'paused';
  accentTheme?: string;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  baseAlpha: number;
  pulseSpeed: number;
  pulsePhase: number;
  type: 'node' | 'pulse' | 'satellite';
}

export const NeuralEducationCanvas: React.FC<NeuralEducationCanvasProps> = ({
  intensity = 'gentle',
  accentTheme = 'cyan',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: -1000,
    y: -1000,
    active: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    const particles: Particle[] = [];
    const count = Math.min(Math.floor((width * height) / 24000), 45);

    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < count; i++) {
        const speedMultiplier = intensity === 'gentle' ? 0.35 : 0.6;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * speedMultiplier,
          vy: (Math.random() - 0.5) * speedMultiplier,
          radius: Math.random() * 2.2 + 1.2,
          alpha: Math.random() * 0.4 + 0.2,
          baseAlpha: Math.random() * 0.35 + 0.15,
          pulseSpeed: 0.02 + Math.random() * 0.03,
          pulsePhase: Math.random() * Math.PI * 2,
          type: i % 7 === 0 ? 'pulse' : i % 4 === 0 ? 'satellite' : 'node',
        });
      }
    };

    initParticles();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const maxDist = 140;
    const mouseMaxDist = 180;

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      if (intensity !== 'paused') {
        // Update positions
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < -20) p.x = width + 20;
          if (p.x > width + 20) p.x = -20;
          if (p.y < -20) p.y = height + 20;
          if (p.y > height + 20) p.y = -20;

          p.pulsePhase += p.pulseSpeed;
          p.alpha = p.baseAlpha + Math.sin(p.pulsePhase) * 0.15;
        }
      }

      // Draw connection lines between nodes
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const lineAlpha = (1 - dist / maxDist) * 0.15;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(14, 165, 233, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Draw mouse connection
        if (mouseRef.current.active) {
          const p = particles[i];
          const dx = p.x - mouseRef.current.x;
          const dy = p.y - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouseMaxDist) {
            const mouseAlpha = (1 - dist / mouseMaxDist) * 0.25;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
            ctx.strokeStyle = `rgba(2, 132, 199, ${mouseAlpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw particles & AI educational nodes
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(14, 165, 233, ${Math.max(0.08, p.alpha * 0.5)})`;
        ctx.fill();

        // Subtle halo ring for pulse nodes
        if (p.type === 'pulse') {
          const ringRadius = p.radius + 6 + Math.sin(p.pulsePhase) * 3;
          ctx.beginPath();
          ctx.arc(p.x, p.y, ringRadius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(2, 132, 199, ${Math.max(0.03, p.alpha * 0.25)})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [intensity, accentTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 opacity-70 transition-opacity duration-700"
      aria-hidden="true"
    />
  );
};
