import { useEffect, useRef } from "react";

/**
 * Live animated "lead funnel" visual: particles stream in from the top,
 * converge through funnel stages, and convert into glowing blue "clients"
 * that drop out the bottom.
 */
export function FunnelCanvasClassic() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    type P = {
      x: number;
      y: number;
      speed: number;
      stage: number; // 0..3 funnel stage
      converted: boolean;
      hue: number;
      size: number;
      wobble: number;
    };

    const particles: P[] = [];
    const spawn = (): P => ({
      x: Math.random(),
      y: -0.05 - Math.random() * 0.1,
      speed: 0.0016 + Math.random() * 0.0018,
      stage: 0,
      converted: false,
      hue: Math.random(),
      size: 1.2 + Math.random() * 1.8,
      wobble: Math.random() * Math.PI * 2,
    });
    for (let i = 0; i < 90; i++) {
      const p = spawn();
      p.y = Math.random();
      particles.push(p);
    }

    // Funnel half-width at a given y (0..1): wide at top, narrow at bottom
    const halfWidth = (y: number) => 0.42 - y * 0.34;

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);

      const cx = w / 2;

      // Funnel stage lines
      ctx.strokeStyle = "rgba(141,169,196,0.32)";
      ctx.lineWidth = 1;
      const stages = [0.18, 0.45, 0.72, 0.95];
      for (const sy of stages) {
        const hw = halfWidth(sy) * w;
        ctx.beginPath();
        ctx.moveTo(cx - hw, sy * h);
        ctx.lineTo(cx + hw, sy * h);
        ctx.stroke();
      }
      // Funnel walls
      ctx.beginPath();
      ctx.moveTo(cx - halfWidth(0.05) * w, 0.05 * h);
      ctx.lineTo(cx - halfWidth(0.98) * w, 0.98 * h);
      ctx.moveTo(cx + halfWidth(0.05) * w, 0.05 * h);
      ctx.lineTo(cx + halfWidth(0.98) * w, 0.98 * h);
      ctx.strokeStyle = "rgba(15,23,42,0.12)";
      ctx.stroke();

      for (const p of particles) {
        p.y += p.speed;
        p.wobble += 0.02;
        // Converge toward center as y grows
        const hw = halfWidth(p.y);
        const target = 0.5 + (p.x - 0.5) * (hw / 0.42);
        p.x += (target - p.x) * 0.06;
        if (p.y > 0.72) p.converted = true;
        if (p.y > 1.05) Object.assign(p, spawn());

        const px = p.x * w + Math.sin(p.wobble) * 3;
        const py = p.y * h;

        if (p.converted) {
          // Glowing converted lead
          const g = ctx.createRadialGradient(px, py, 0, px, py, p.size * 6);
          g.addColorStop(0, "rgba(141,169,196,0.9)");
          g.addColorStop(1, "rgba(141,169,196,0)");
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(px, py, p.size * 6, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = "#8DA9C4";
        } else {
          ctx.fillStyle =
            p.hue > 0.7 ? "rgba(141,169,196,0.8)" : "rgba(15,23,42,0.4)";
        }
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Pulse ring at conversion point
      const pulse = (t / 1400) % 1;
      ctx.beginPath();
      ctx.arc(cx, 0.82 * h, 8 + pulse * 46, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(141,169,196,${0.6 * (1 - pulse)})`;
      ctx.lineWidth = 2;
      ctx.stroke();

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="h-full w-full" aria-hidden="true" />;
}
