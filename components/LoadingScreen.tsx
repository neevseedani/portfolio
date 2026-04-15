"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LETTERS = "welcome".split("");
const LINE1 = "neev seedani.";
const LINE2 = "product designer @ stanford";

type Phase = "welcome" | "fade-white" | "typing" | "ready" | "fade-out";

const BLOBS = [
  { top: "12%",  left: "8%",  size: 440, color: "rgba(40,90,210,0.30)",  delay: 0,   dur: 5.0 },
  { top: "52%",  left: "62%", size: 360, color: "rgba(70,150,255,0.20)", delay: 0.2, dur: 6.2 },
  { top: "68%",  left: "18%", size: 270, color: "rgba(20,60,170,0.26)",  delay: 0.4, dur: 4.9 },
  { top: "10%",  left: "70%", size: 210, color: "rgba(110,180,255,0.14)",delay: 0.1, dur: 5.6 },
];

const SMALL_BUBBLES = [
  { left: "12%", size: 10, delay: 0.3, dur: 2.5 },
  { left: "25%", size:  7, delay: 0.9, dur: 2.1 },
  { left: "40%", size: 14, delay: 0.5, dur: 2.9 },
  { left: "55%", size:  8, delay: 1.2, dur: 2.3 },
  { left: "68%", size: 12, delay: 0.7, dur: 2.7 },
  { left: "80%", size:  6, delay: 0.4, dur: 2.0 },
  { left: "90%", size:  9, delay: 1.0, dur: 2.4 },
];

export default function LoadingScreen() {
  const [visible, setVisible] = useState(false);
  const [phase, setPhase] = useState<Phase>("welcome");
  const [typed1, setTyped1] = useState("");
  const [typed2, setTyped2] = useState("");
  const [caretOn, setCaretOn] = useState(true);
  const [showCoolButton, setShowCoolButton] = useState(false);
  const caretRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Gate: only show once per session
  useEffect(() => {
    try {
      const seen = sessionStorage.getItem("__ns_loaded");
      if (!seen) {
        setVisible(true);
        sessionStorage.setItem("__ns_loaded", "1");
      }
    } catch {
      // sessionStorage blocked — skip
    }
  }, []);

  // Phase sequencing
  useEffect(() => {
    if (!visible) return;

    const timers: ReturnType<typeof setTimeout>[] = [];

    // 1. Welcome lives for 1900ms, then bg fades to white
    timers.push(setTimeout(() => setPhase("fade-white"), 1900));

    // 2. Typing phase begins after white fully covers
    timers.push(setTimeout(() => setPhase("typing"), 2450));

    return () => timers.forEach(clearTimeout);
  }, [visible]);

  // Typewriter: line 1 then line 2
  useEffect(() => {
    if (phase !== "typing") return;

    let i = 0;
    setShowCoolButton(false);

    // Type line 1
    const iv1 = setInterval(() => {
      i++;
      setTyped1(LINE1.slice(0, i));
      if (i >= LINE1.length) {
        clearInterval(iv1);
        // Pause, then type line 2
        setTimeout(() => {
          let j = 0;
          const iv2 = setInterval(() => {
            j++;
            setTyped2(LINE2.slice(0, j));
            if (j >= LINE2.length) {
              clearInterval(iv2);
              setPhase("ready");
            }
          }, 42);
        }, 420);
      }
    }, 50);

    return () => {
      clearInterval(iv1);
    };
  }, [phase]);

  // Keep cursor blinking through typing + linger pause
  useEffect(() => {
    if (phase !== "typing" && phase !== "ready") return;
    setCaretOn(true);
    caretRef.current = setInterval(() => setCaretOn(c => !c), 530);
    return () => {
      if (caretRef.current) clearInterval(caretRef.current);
    };
  }, [phase]);

  // Linger a few seconds after typing, then fade in button
  useEffect(() => {
    if (phase !== "ready") return;
    const t = setTimeout(() => setShowCoolButton(true), 2400);
    return () => clearTimeout(t);
  }, [phase]);

  // Click "cool!" to flash white, then reveal site
  useEffect(() => {
    if (phase !== "fade-white") return;
    // Only auto-advance during the intro phase
    if (!typed1 && !typed2) return;
    const t = setTimeout(() => setPhase("fade-out"), 650);
    return () => clearTimeout(t);
  }, [phase, typed1, typed2]);

  // After fade-out transition, unmount
  useEffect(() => {
    if (phase !== "fade-out") return;
    const t = setTimeout(() => setVisible(false), 1000);
    return () => clearTimeout(t);
  }, [phase]);

  // Caret character: only show while typing or right after line ends
  const showLine1Caret = phase === "typing" && caretOn && typed2.length === 0;
  const showLine2Caret = (phase === "typing" || phase === "ready") && caretOn && typed2.length > 0;

  if (!visible) return null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,300;1,400&family=DM+Mono:wght@300;400&display=swap');
        @keyframes bubble-float {
          0%   { transform: translateY(0) scale(1); opacity: 0.65; }
          60%  { opacity: 0.8; }
          100% { transform: translateY(-160px) scale(0.5); opacity: 0; }
        }
        .ls-bubble {
          position: absolute;
          bottom: 8%;
          border-radius: 50%;
          background: rgba(100, 170, 255, 0.38);
          animation: bubble-float linear infinite;
          pointer-events: none;
        }
      `}</style>

      <AnimatePresence>
        {visible && (
          <motion.div
            key="loading"
            animate={{
              backgroundColor: phase === "welcome" ? "#060D1E" : "#FFFFFF",
              opacity: phase === "fade-out" ? 0 : 1,
            }}
            transition={{
              backgroundColor: { duration: 0.55, ease: "easeInOut" },
              opacity: { duration: 0.85, ease: [0.4, 0, 0.2, 1] },
            }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            {/* ── Welcome phase: blobs + "welcome" ── */}
            <AnimatePresence>
              {phase === "welcome" && (
                <motion.div
                  key="intro"
                  exit={{ opacity: 0, transition: { duration: 0.45, ease: "easeInOut" } }}
                  style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                  {/* Ambient blobs */}
                  {BLOBS.map((b, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: [0, 1, 1.05, 1], opacity: [0, 0.9, 1, 0.9] }}
                      transition={{
                        duration: 2.0,
                        delay: b.delay,
                        times: [0, 0.5, 0.75, 1],
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatType: "reverse",
                        repeatDelay: b.dur - 2.0,
                      }}
                      style={{
                        position: "absolute",
                        top: b.top,
                        left: b.left,
                        width: b.size,
                        height: b.size,
                        borderRadius: "50%",
                        background: b.color,
                        filter: "blur(75px)",
                        pointerEvents: "none",
                      }}
                      aria-hidden
                    />
                  ))}

                  {/* Floating bubbles */}
                  {SMALL_BUBBLES.map((b, i) => (
                    <div
                      key={i}
                      className="ls-bubble"
                      style={{
                        left: b.left,
                        width: b.size,
                        height: b.size,
                        animationDuration: `${b.dur}s`,
                        animationDelay: `${b.delay}s`,
                      }}
                      aria-hidden
                    />
                  ))}

                  {/* "welcome" letter by letter */}
                  <div style={{ position: "relative", zIndex: 2, display: "flex", alignItems: "baseline", gap: "0.02em" }}>
                    {LETTERS.map((letter, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.55,
                          delay: 0.3 + i * 0.065,
                          ease: [0.25, 0.4, 0.25, 1],
                        }}
                        style={{
                          fontFamily: "'Cormorant Garamond', Georgia, serif",
                          fontStyle: "italic",
                          fontWeight: 300,
                          fontSize: "clamp(3.5rem, 11vw, 9rem)",
                          color: "rgba(220, 235, 255, 0.90)",
                          letterSpacing: "-0.03em",
                          lineHeight: 1,
                          display: "inline-block",
                        }}
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* ── Typing phase: name + role on white ── */}
            <AnimatePresence>
              {(phase === "typing" || phase === "ready") && (
                <motion.div
                  key="typing"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.35 }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
                  }}
                >
                  {/* Line 1 — name */}
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontStyle: "italic",
                      fontWeight: 300,
                      fontSize: "clamp(2.5rem, 7vw, 6rem)",
                      color: "#0D0A07",
                      letterSpacing: "-0.03em",
                      lineHeight: 1,
                      margin: 0,
                      minHeight: "1em",
                    }}
                  >
                    {typed1}
                    <span
                      style={{
                        display: "inline-block",
                        width: "0.6ch",
                        opacity: showLine1Caret ? 1 : 0,
                        fontStyle: "normal",
                        fontWeight: 200,
                      }}
                    >
                      |
                    </span>
                  </p>

                  {/* Line 2 — role */}
                  <p
                    style={{
                      fontFamily: "'DM Mono', 'Courier New', monospace",
                      fontWeight: 300,
                      fontSize: "clamp(0.7rem, 1.4vw, 1rem)",
                      color: "rgba(13,10,7,0.45)",
                      letterSpacing: "0.06em",
                      margin: 0,
                      minHeight: "1.2em",
                    }}
                  >
                    {typed2}
                    <span style={{ display: "inline-block", width: "0.6ch", opacity: showLine2Caret ? 1 : 0 }}>|</span>
                  </p>

                  <AnimatePresence>
                    {phase === "ready" && showCoolButton && (
                      <motion.button
                        type="button"
                        onClick={() => setPhase("fade-white")}
                        initial={{ opacity: 0, y: 12, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
                        style={{
                          marginTop: "0.35rem",
                          borderRadius: 999,
                          border: "1px solid rgba(13,10,7,0.22)",
                          background: "rgba(13,10,7,0.04)",
                          color: "rgba(13,10,7,0.84)",
                          padding: "0.52rem 1rem",
                          fontFamily: "'DM Mono', 'Courier New', monospace",
                          fontSize: "0.82rem",
                          letterSpacing: "0.06em",
                          textTransform: "lowercase",
                          cursor: "pointer",
                        }}
                        aria-label="Continue to site"
                      >
                        cool!
                      </motion.button>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
