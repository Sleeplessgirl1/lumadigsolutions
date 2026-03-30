import { useEffect, useRef, useCallback } from "react";

const CHARS = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン{}[]<>/=;:()&%$#@!+-*";

const CodeRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1, y: -1 });
  const columnsRef = useRef<number[]>([]);
  const animRef = useRef<number>(0);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
      const fontSize = 14;
      const cols = Math.floor(canvas.width / fontSize);
      columnsRef.current = new Array(cols).fill(0).map(() => Math.random() * canvas.height / fontSize);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);

    const fontSize = 14;

    const draw = () => {
      ctx.fillStyle = "rgba(245, 245, 245, 0.06)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const columns = columnsRef.current;
      const mouse = mouseRef.current;

      for (let i = 0; i < columns.length; i++) {
        const x = i * fontSize;
        const y = columns[i] * fontSize;

        // Distance from mouse for interactive glow
        const dx = x - mouse.x;
        const dy = y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const proximity = Math.max(0, 1 - dist / 200);

        // Use CSS variable colors (primary hue)
        const alpha = 0.15 + proximity * 0.6;
        const green = Math.round(180 + proximity * 75);
        const blue = Math.round(200 + proximity * 55);
        ctx.fillStyle = `rgba(0, ${green}, ${blue}, ${alpha})`;
        ctx.font = `${fontSize}px monospace`;

        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        ctx.fillText(char, x, y);

        // Bright head character
        if (proximity > 0.3) {
          ctx.fillStyle = `rgba(100, 255, 240, ${proximity * 0.9})`;
          ctx.fillText(char, x, y);
        }

        if (y > canvas.height && Math.random() > 0.975) {
          columns[i] = 0;
        }

        // Variable speed — columns near mouse move faster
        columns[i] += 0.5 + proximity * 1.5 + Math.random() * 0.5;
      }

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  );
};

export default CodeRain;
