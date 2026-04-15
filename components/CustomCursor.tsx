"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only show on fine-pointer (mouse) devices
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const dot = dotRef.current;
    if (!dot) return;

    dot.style.opacity = "1";

    let raf = 0;
    let mouseX = 0;
    let mouseY = 0;
    let scale = 1;

    const render = () => {
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%) scale(${scale})`;
    };

    const onMove = (e: PointerEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        render();
      });
    };

    const isInteractive = (target: EventTarget | null) => {
      if (!(target instanceof Element)) return false;
      return Boolean(
        target.closest(
          'a, button, input, select, textarea, label, summary, [role="button"], [tabindex]:not([tabindex="-1"])'
        )
      );
    };

    const onOver = (e: PointerEvent) => {
      scale = isInteractive(e.target) ? 1.5 : 1;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        render();
      });
    };

    const onLeave = () => { dot.style.opacity = "0"; };
    const onEnter = () => { dot.style.opacity = "1"; };

    document.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerover", onOver, { passive: true });
    window.addEventListener("blur", onLeave);
    window.addEventListener("focus", onEnter);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      window.removeEventListener("blur", onLeave);
      window.removeEventListener("focus", onEnter);
    };
  }, []);

  return (
    <>
      <style>{`
        @media (pointer: fine) {
          html, body, a, button, input, select, textarea, label, summary {
            cursor: none !important;
          }
        }
        .cursor-dot {
          position: fixed;
          top: 0; left: 0;
          width: 10px; height: 10px;
          border-radius: 50%;
          background: #ffffff;
          pointer-events: none;
          z-index: 99999;
          opacity: 0;
          transition: opacity 0.15s ease-out, transform 0.12s ease-out;
          will-change: transform;
          contain: layout style paint;
        }
      `}</style>
      <div ref={dotRef} className="cursor-dot" aria-hidden />
    </>
  );
}
