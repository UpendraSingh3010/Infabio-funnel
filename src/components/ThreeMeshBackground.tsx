import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

export const ThreeMeshBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { isLight } = useTheme();
  const isLightRef = useRef(isLight);

  useEffect(() => {
    isLightRef.current = isLight;
  }, [isLight]);

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
    };

    window.addEventListener('resize', handleResize);

    // Mouse coordinates with smoothing
    const mouse = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX / width) * 2 - 1;
      mouse.targetY = -(e.clientY / height) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 42x42 grid points
    const GRID_SIZE = 42;
    const gridPoints: { x: number; y: number; baseZ: number }[] = [];
    const spacing = 1.35;
    const half = GRID_SIZE / 2;

    for (let i = 0; i < GRID_SIZE; i++) {
      for (let j = 0; j < GRID_SIZE; j++) {
        gridPoints.push({
          x: (i - half) * spacing,
          y: (j - half) * spacing,
          baseZ: 0,
        });
      }
    }

    // Floating particles
    const indigoParticles: { x: number; y: number; z: number; size: number }[] = [];
    for (let i = 0; i < 240; i++) {
      indigoParticles.push({
        x: (Math.random() - 0.5) * 85,
        y: (Math.random() - 0.5) * 85,
        z: (Math.random() - 0.5) * 60,
        size: Math.random() * 1.5 + 0.8,
      });
    }

    const roseParticles: { x: number; y: number; z: number; size: number }[] = [];
    for (let i = 0; i < 140; i++) {
      roseParticles.push({
        x: (Math.random() - 0.5) * 85,
        y: (Math.random() - 0.5) * 85,
        z: (Math.random() - 0.5) * 60,
        size: Math.random() * 1.8 + 0.9,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.015;

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const light = isLightRef.current;

      // Clear canvas with transparent or subtle gradient
      ctx.clearRect(0, 0, width, height);

      // Camera parameters
      const fov = 340;
      const cameraZ = 34;
      const centerX = width * 0.5;
      const centerY = height * 0.45;

      // Precalculate dynamic 3D rotations based on mouse & time
      const rotX = 0.55 + mouse.y * 0.18;
      const rotZ = time * 0.08 + mouse.x * 0.25;

      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosZ = Math.cos(rotZ);
      const sinZ = Math.sin(rotZ);

      // Render 3D wavy mesh surface
      for (let i = 0; i < gridPoints.length; i++) {
        const pt = gridPoints[i];

        // Complex undulating wave calculation
        const dist = Math.sqrt(pt.x * pt.x + pt.y * pt.y);
        const wave1 = Math.sin(dist * 0.45 - time * 1.4) * 1.8;
        const wave2 = Math.cos(pt.x * 0.35 + time * 1.1) * 1.2;
        const wave3 = Math.sin(pt.y * 0.4 - time * 0.9) * 1.1;

        // Dynamic interactive mouse perturbation
        const mouseDist = Math.hypot(pt.x - mouse.x * 15, pt.y - mouse.y * 15);
        const mouseRipple = Math.exp(-mouseDist * 0.2) * 3.5;

        const waveZ = wave1 + wave2 + wave3 + mouseRipple;

        // 3D rotation around Z
        const x1 = pt.x * cosZ - pt.y * sinZ;
        const y1 = pt.x * sinZ + pt.y * cosZ;

        // Rotate around X
        const y2 = y1 * cosX - waveZ * sinX;
        const z2 = y1 * sinX + waveZ * cosX + cameraZ;

        if (z2 > 1) {
          const scale = fov / z2;
          const sx = centerX + x1 * scale * 1.5;
          const sy = centerY + y2 * scale * 1.5;

          if (sx >= -10 && sx <= width + 10 && sy >= -10 && sy <= height + 10) {
            const alpha = light
              ? Math.min(0.45, Math.max(0.05, (scale / 25) * 0.25))
              : Math.min(0.7, Math.max(0.08, (scale / 25) * 0.45));
            const pointSize = Math.max(0.8, scale * 0.07);

            ctx.fillStyle = light
              ? `rgba(99, 102, 241, ${alpha})`
              : `rgba(168, 130, 255, ${alpha})`;
            ctx.beginPath();
            ctx.arc(sx, sy, pointSize, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // Render floating indigo particles
      const rotY1 = time * 0.04 + mouse.x * 0.1;
      const cosY1 = Math.cos(rotY1);
      const sinY1 = Math.sin(rotY1);

      ctx.fillStyle = light ? 'rgba(79, 70, 229, 0.25)' : 'rgba(99, 102, 241, 0.35)';
      for (let i = 0; i < indigoParticles.length; i++) {
        const p = indigoParticles[i];
        const x = p.x * cosY1 - p.z * sinY1;
        const z = p.x * sinY1 + p.z * cosY1 + 45;
        const y = p.y;

        if (z > 2) {
          const scale = fov / z;
          const sx = centerX + x * scale;
          const sy = centerY + y * scale;

          if (sx >= 0 && sx <= width && sy >= 0 && sy <= height) {
            ctx.beginPath();
            ctx.arc(sx, sy, p.size * (scale / 15), 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // Render floating rose particles
      const rotY2 = -time * 0.035 - mouse.x * 0.08;
      const cosY2 = Math.cos(rotY2);
      const sinY2 = Math.sin(rotY2);

      ctx.fillStyle = light ? 'rgba(244, 63, 94, 0.22)' : 'rgba(253, 164, 175, 0.38)';
      for (let i = 0; i < roseParticles.length; i++) {
        const p = roseParticles[i];
        const x = p.x * cosY2 - p.z * sinY2;
        const z = p.x * sinY2 + p.z * cosY2 + 45;
        const y = p.y;

        if (z > 2) {
          const scale = fov / z;
          const sx = centerX + x * scale;
          const sy = centerY + y * scale;

          if (sx >= 0 && sx <= width && sy >= 0 && sy <= height) {
            ctx.beginPath();
            ctx.arc(sx, sy, p.size * (scale / 15), 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full block opacity-75 transition-opacity duration-700"
      />
      {/* Ambient background glows */}
      <div className={`absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full blur-[140px] pointer-events-none transition-colors duration-700 ${
        isLight ? 'bg-[#6366f1]/10' : 'bg-[#6366f1]/15'
      }`} />
      <div className={`absolute top-1/3 -right-32 w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none transition-colors duration-700 ${
        isLight ? 'bg-[#fda4af]/10' : 'bg-[#fda4af]/12'
      }`} />
      <div className={`absolute -bottom-40 left-1/3 w-[700px] h-[700px] rounded-full blur-[180px] pointer-events-none transition-colors duration-700 ${
        isLight ? 'bg-[#c084fc]/5' : 'bg-[#c084fc]/10'
      }`} />
    </div>
  );
};
