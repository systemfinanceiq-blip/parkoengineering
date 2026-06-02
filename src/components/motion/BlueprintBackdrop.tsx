import { useEffect, useRef } from "react";

type Props = { className?: string; opacity?: number };

/**
 * Lightweight CAD-style backdrop: faint grid + drifting nodes connected
 * by structural lines. Pure canvas, ~60 nodes, throttled to 30fps,
 * pauses when offscreen via IntersectionObserver.
 */
export function BlueprintBackdrop({ className = "", opacity = 0.35 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let raf = 0;
    let visible = true;
    let lastDraw = 0;

    const NODE_COUNT = 42;
    const nodes = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.00018,
      vy: (Math.random() - 0.5) * 0.00018,
    }));

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => (visible = e.isIntersecting)),
      { threshold: 0 }
    );
    io.observe(canvas);

    const draw = (t: number) => {
      raf = requestAnimationFrame(draw);
      if (!visible) return;
      if (t - lastDraw < 33) return; // ~30fps
      lastDraw = t;

      ctx.clearRect(0, 0, w, h);

      // Faint grid
      ctx.strokeStyle = `rgba(180, 200, 230, ${0.05 * opacity})`;
      ctx.lineWidth = 1;
      const step = 56;
      ctx.beginPath();
      for (let x = 0; x <= w; x += step) {
        ctx.moveTo(x + 0.5, 0);
        ctx.lineTo(x + 0.5, h);
      }
      for (let y = 0; y <= h; y += step) {
        ctx.moveTo(0, y + 0.5);
        ctx.lineTo(w, y + 0.5);
      }
      ctx.stroke();

      // Update nodes
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > 1) n.vx *= -1;
        if (n.y < 0 || n.y > 1) n.vy *= -1;
      }

      // Connecting structural lines
      ctx.strokeStyle = `rgba(120, 180, 230, ${0.18 * opacity})`;
      ctx.lineWidth = 0.6;
      const maxDist = 160;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const ax = nodes[i].x * w;
          const ay = nodes[i].y * h;
          const bx = nodes[j].x * w;
          const by = nodes[j].y * h;
          const dx = ax - bx;
          const dy = ay - by;
          const d = Math.hypot(dx, dy);
          if (d < maxDist) {
            ctx.globalAlpha = (1 - d / maxDist) * opacity * 0.7;
            ctx.beginPath();
            ctx.moveTo(ax, ay);
            ctx.lineTo(bx, by);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      // Nodes
      ctx.fillStyle = `rgba(170, 210, 240, ${0.55 * opacity})`;
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x * w, n.y * h, 1.2, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, [opacity]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}
