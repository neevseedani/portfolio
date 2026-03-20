"use client";

import { useEffect, useState, useRef } from "react";

const CURSOR_RADIUS = 24;
const SIZE = CURSOR_RADIUS * 2;

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const raf = useRef<number>(0);

  useEffect(() => {
    const isTouch =
      typeof window !== "undefined" &&
      ("ontouchstart" in window || navigator.maxTouchPoints > 0);
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || prefersReducedMotion) return;

    setMounted(true);

    const handleMove = (e: MouseEvent) => {
      if (raf.current) cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener("mousemove", handleMove);
    document.body.classList.add("custom-cursor-active");

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.body.classList.remove("custom-cursor-active");
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="custom-cursor-ring"
      style={{
        left: position.x,
        top: position.y,
        width: SIZE,
        height: SIZE,
        transform: "translate(-50%, -50%)",
      }}
      aria-hidden
    />
  );
}
