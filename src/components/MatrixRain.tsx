import { useEffect, useRef } from "react";

const GLYPHS = "アカサタナハマヤラワｱｲｳｴｵ0123456789ABCDEF<>/\\[]{}#$%&*+=";

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let columns = 0;
    let drops: number[] = [];
    let speeds: number[] = [];
    let frame = 0;
    let last = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      const fontSize = width < 640 ? 12 : 14;
      columns = Math.ceil(width / fontSize);
      drops = Array.from({ length: columns }, () => Math.random() * -60);
      speeds = Array.from({ length: columns }, () => 0.45 + Math.random() * 0.7);
      context.font = `${fontSize}px "JetBrains Mono", monospace`;
      context.fillStyle = "#04070a";
      context.fillRect(0, 0, width, height);
    };

    const draw = () => {
      context.fillStyle = "rgba(4, 7, 10, 0.09)";
      context.fillRect(0, 0, width, height);
      const fontSize = width < 640 ? 12 : 14;

      for (let i = 0; i < columns; i++) {
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        const char = GLYPHS[Math.floor(Math.random() * GLYPHS.length)]!;

        if (Math.random() > 0.985) {
          context.fillStyle = "#d9fff0";
        } else {
          context.fillStyle = "rgba(0, 255, 156, 0.55)";
        }
        context.fillText(char, x, y);

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] = (drops[i] ?? 0) + (speeds[i] ?? 0.6);
      }
    };

    const loop = (time: number) => {
      frame = requestAnimationFrame(loop);
      if (time - last < 55) return;
      last = time;
      draw();
    };

    resize();
    if (reduced) {
      draw();
      draw();
    } else {
      frame = requestAnimationFrame(loop);
    }

    const onResize = () => {
      cancelAnimationFrame(frame);
      resize();
      if (reduced) draw();
      else frame = requestAnimationFrame(loop);
    };

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <canvas ref={canvasRef} className="matrix" aria-hidden="true" />;
}
