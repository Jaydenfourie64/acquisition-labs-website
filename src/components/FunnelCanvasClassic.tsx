import { useEffect, useRef } from "react";

/**
 * Animated lead funnel using the Acquisition Labs icy-blue palette.
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
      converted: boolean;
      hue: number;
      size: number;
      wobble: number;
    };

    const particles: P[] = [];
    const spawn = (): P => ({
      x: 0.08 + Math.random() * 0.84,
      y: -0.05 - Math.random() * 0.1,
      speed: 0.0016 + Math.random() * 0.0018,
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

    const halfWidth = (y: number) => 0.42 - y * 0.34;
    const blue = "143,190,226";
    const chalk = "247,249,250";
    const paleBlue = "174,215,245";

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      const cx = w / 2;

      // Crisp icy-blue stage lines, clearly visible over midnight navy.
      ctx.lineWidth = 1.25;
      ctx.strokeStyle = `rgba(${blue},0.52)`;
      const stages = [0.18, 0.45, 0.72, 0.95];
      for (const sy of stages) {
        const hw = halfWidth(sy) * w;
        ctx.beginPath();
        ctx.moveTo(cx - hw, sy * h);
        ctx.lineTo(cx + hw, sy * h);
        ctx.stroke();
      }

      // Funnel walls use a pale-blue stroke, not the old dark navy.
      ctx.beginPath();
      ctx.moveTo(cx - halfWidth(0.05) * w, 0.05 * h);
      ctx.lineTo(cx - halfWidth(0.98) * w, 0.98 * h);
      ctx.moveTo(cx + halfWidth(0.05) * w, 0.05 * h);
      ctx.lineTo(cx + halfWidth(0.98) * w, 0.98 * h);
      ctx.strokeStyle = `rgba(${paleBlue},0.34)`;
      ctx.lineWidth = 1.4;
      ctx.stroke();

      for (const p of particles) {
        p.y += p.speed;
        p.wobble += 0.02;
        const hw = halfWidth(p.y);
        const target = 0.5 + (p.x - 0.5) * (hw / 0.42);
        p.x += (target - p.x) * 0.06;
        if (p.y > 0.72) p.converted = true;
        if (p.y > 1.05) Object.assign(p, spawn());

        const px = p.x * w + Math.sin(p.wobble) * 3;
        const py = p.y * h;

        if (p.converted) {
          const g = ctx.createRadialGradient(px, py, 0, px, py, p.size * 6);
          g.addColorStop(0, `rgba(${blue},0.9)`);
          g.addColorStop(1, `rgba(${blue},0)`);
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(px, py, p.size * 6, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = "#8FBEE2";
        } else {
          ctx.fillStyle = p.hue > 0.7 ? `rgba(${blue},0.88)` : `rgba(${chalk},0.78)`;
        }
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Conversion pulse in the same icy-blue accent.
      const pulse = (t / 1400) % 1;
      ctx.beginPath();
      ctx.arc(cx, 0.82 * h, 8 + pulse * 46, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${blue},${0.72 * (1 - pulse)})`;
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
