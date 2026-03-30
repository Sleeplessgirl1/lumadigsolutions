import { useEffect, useRef } from "react";

const SacredGeometry = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      };
    };
    canvas.addEventListener("mousemove", handleMove);

    let time = 0;
    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      const cx = w / 2;
      const cy = h / 2;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      ctx.clearRect(0, 0, w, h);
      time += 0.008;

      const petals = 12;
      const layers = 5;
      const maxR = Math.min(w, h) * 0.42;

      // Outer rotating ring
      for (let i = 0; i < petals * 2; i++) {
        const angle = (i / (petals * 2)) * Math.PI * 2 + time * 0.3;
        const r = maxR + Math.sin(time * 2 + i) * 8;
        const x = cx + Math.cos(angle) * r;
        const y = cy + Math.sin(angle) * r;
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(180, 80%, 60%, ${0.3 + Math.sin(time + i) * 0.15})`;
        ctx.fill();
      }

      // Sacred geometry layers
      for (let layer = 0; layer < layers; layer++) {
        const layerR = maxR * ((layer + 1) / layers);
        const rotation = time * (0.2 + layer * 0.08) * (layer % 2 === 0 ? 1 : -1);
        const mouseInfluence = (mx - 0.5) * 0.3 * layer;
        const segments = petals;

        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(rotation + mouseInfluence);

        // Petal shapes
        for (let i = 0; i < segments; i++) {
          const angle = (i / segments) * Math.PI * 2;
          const nextAngle = ((i + 1) / segments) * Math.PI * 2;
          const pulse = 1 + Math.sin(time * 1.5 + layer + i * 0.5) * 0.08;
          const r = layerR * pulse;

          const x1 = Math.cos(angle) * r * 0.3;
          const y1 = Math.sin(angle) * r * 0.3;
          const x2 = Math.cos(angle) * r;
          const y2 = Math.sin(angle) * r;
          const x3 = Math.cos((angle + nextAngle) / 2) * r * 0.7;
          const y3 = Math.sin((angle + nextAngle) / 2) * r * 0.7;

          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.quadraticCurveTo(x2, y2, x3, y3);
          
          const hue = 175 + layer * 15 + Math.sin(time + i) * 10;
          const alpha = 0.12 + (my * 0.15) - layer * 0.015;
          ctx.strokeStyle = `hsla(${hue}, 70%, 55%, ${Math.max(0.05, alpha)})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }

        // Connecting lines (Flower of Life pattern)
        if (layer < layers - 1) {
          const nextR = maxR * ((layer + 2) / layers);
          for (let i = 0; i < segments; i++) {
            const angle = (i / segments) * Math.PI * 2;
            const r1 = layerR * (1 + Math.sin(time + i) * 0.05);
            const r2 = nextR * (1 + Math.sin(time + i + 1) * 0.05);

            ctx.beginPath();
            ctx.moveTo(Math.cos(angle) * r1, Math.sin(angle) * r1);
            ctx.lineTo(
              Math.cos(angle + Math.PI / segments) * r2,
              Math.sin(angle + Math.PI / segments) * r2
            );
            ctx.strokeStyle = `hsla(190, 60%, 50%, ${0.06 + Math.sin(time * 2 + layer) * 0.03})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }

        // Circle at each vertex
        for (let i = 0; i < segments; i++) {
          const angle = (i / segments) * Math.PI * 2;
          const pulse = 1 + Math.sin(time * 2 + i + layer) * 0.1;
          const r = layerR * pulse;
          const x = Math.cos(angle) * r;
          const y = Math.sin(angle) * r;
          const dotSize = 1.5 + Math.sin(time * 3 + i * 0.7) * 0.8;

          ctx.beginPath();
          ctx.arc(x, y, dotSize, 0, Math.PI * 2);
          const hue = 180 + layer * 12;
          ctx.fillStyle = `hsla(${hue}, 80%, 65%, ${0.4 + Math.sin(time + i) * 0.2})`;
          ctx.fill();
        }

        ctx.restore();
      }

      // Center mandala
      for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2 + time * 0.5;
        const r = 18 + Math.sin(time * 2) * 4;
        ctx.beginPath();
        ctx.arc(
          cx + Math.cos(angle) * r,
          cy + Math.sin(angle) * r,
          5 + Math.sin(time * 3 + i) * 2,
          0,
          Math.PI * 2
        );
        ctx.strokeStyle = `hsla(185, 80%, 60%, ${0.25 + Math.sin(time + i) * 0.1})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Center dot
      ctx.beginPath();
      ctx.arc(cx, cy, 3 + Math.sin(time * 2) * 1, 0, Math.PI * 2);
      ctx.fillStyle = "hsla(185, 90%, 65%, 0.6)";
      ctx.fill();

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-64 md:h-80 mt-8 opacity-100 rounded-md"
      style={{ touchAction: "none" }}
    />
  );
};

export default SacredGeometry;
