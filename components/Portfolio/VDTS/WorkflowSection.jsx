"use client";
import { useRef, useState, useEffect } from "react";
import Reveal from "./ui/Reveal";


const steps = [
  { title: "Ticket Created", desc: "Client submits incident request via the portal", color: "#3B82F6", glow: "rgba(59,130,246,0.25)" },
  { title: "Admin Assigns", desc: "Logs, categorizes, and assigns the ticket", color: "#8B5CF6", glow: "rgba(139,92,246,0.25)" },
  { title: "Consultant Processes", desc: "Investigates the issue and works on resolution", color: "#06B6D4", glow: "rgba(6,182,212,0.25)" },
  { title: "Clarity Requested", desc: "Additional info requested from client if needed", color: "#F59E0B", glow: "rgba(245,158,11,0.25)" },
  { title: "Solution Provided", desc: "Consultant delivers the resolution to client", color: "#10B981", glow: "rgba(16,185,129,0.25)" },
  { title: "Client Confirms", desc: "Reviews and confirms satisfactory closure", color: "#EF4444", glow: "rgba(239,68,68,0.2)" },
];

/*
  Exact curve from the artifact image:

  Node 1 (top-left) ──curve──> Node 2 (top-center-right)──curve──> Node 3 (far right)
                                                                        |
                                                                   big U-turn
                                                                   swooping down
                                                                        |
  Node 6 (bottom-left) <──curve── Node 5 (bottom-center) <──curve── Node 4 (right)
       |
    tail down
*/
const NODES = [
  { x: 80, y: 90 },
  { x: 440, y: 130 },
  { x: 780, y: 90 },
  { x: 820, y: 390 },
  { x: 460, y: 410 },
  { x: 120, y: 380 },
];

/* The path: matches the flowing organic S-snake in the artifact */
const PATH =
  /* Start at node 1 */
  "M 80 90 " +
  /* Gentle upward curve to node 2 — rises slightly then settles */
  "C 180 70, 320 120, 440 130 " +
  /* Continue flowing right, curve up toward node 3 */
  "C 560 140, 700 110, 780 90 " +
  /* Big swooping U-turn: right side, curves down and around */
  "C 860 70, 920 200, 900 300 " +
  "C 880 370, 850 410, 820 390 " +
  /* Flow back leftward to node 4, slight downward drift */
  "C 760 400, 580 420, 460 410 " +
  /* Continue left to node 5 */
  "C 340 400, 200 400, 120 380 " +
  /* Small tail curving downward */
  "C 80 370, 60 420, 80 460";

/* Labels: top row below nodes, bottom row above nodes */
const LABELS = [
  { dy: 44, ddy: 60 },
  { dy: 46, ddy: 62 },
  { dy: 44, ddy: 60 },
  { dy: -38, ddy: -22 },
  { dy: -38, ddy: -22 },
  { dy: -38, ddy: -22 },
];

export default function WorkflowSection() {
  const sectionRef = useRef(null);
  const pathRef = useRef(null);
  const [len, setLen] = useState(0);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(new Set());
  const [dot, setDot] = useState(null);

  useEffect(() => {
    if (pathRef.current) setLen(pathRef.current.getTotalLength());
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    const p = pathRef.current;
    if (!el || !len || !p) return;

    let raf = false;
    const tick = () => {
      if (raf) return;
      raf = true;
      requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const raw = (vh * 0.8 - r.top) / (vh * 0.8 + r.height * 0.2);
        const prog = Math.min(Math.max(raw, 0), 1);
        setProgress(prog);

        const s = new Set();
        [0.01, 0.16, 0.32, 0.50, 0.68, 0.84].forEach((t, i) => {
          if (prog >= t) s.add(i);
        });
        setActive(s);

        if (prog > 0.01) {
          const pt = p.getPointAtLength(len * Math.min(prog, 0.995));
          setDot({ x: pt.x, y: pt.y });
        } else {
          setDot(null);
        }

        raf = false;
      });
    };

    window.addEventListener("scroll", tick, { passive: true });
    tick();
    return () => window.removeEventListener("scroll", tick);
  }, [len]);

  return (
    <section ref={sectionRef} className="relative py-16 lg:pt-24 lg:pb-16 bg-white overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-blue-50/25 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-violet-50/20 blur-[120px] pointer-events-none" />

      {/* Header — max-w-7xl to align with other sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 lg:mb-16">
        <div className="text-left">
          <Reveal>
            <h2 className="font-display text-display-md sm:text-display-lg text-slate-900 mt-5 mb-3">
              A Structured <span className="text-gradient-brand">Lifecycle</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-body-lg text-slate-400 max-w-lg leading-relaxed">
              The system follows a clear, structured lifecycle ensuring no ticket is left incomplete or unresolved.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ═══ DESKTOP — Full-width SVG snake ═══ */}
        <div className="hidden lg:block">
          <Reveal delay={0.12}>
            <div className="relative w-full" style={{ height: 540 }}>
              <svg
                viewBox="0 0 960 520"
                fill="none"
                className="w-full h-full"
                preserveAspectRatio="xMidYMid meet"
                style={{ overflow: "visible" }}
              >
                <defs>
                  <linearGradient id="wfGrad" x1="0" y1="0" x2="0.8" y2="1">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="20%" stopColor="#8B5CF6" />
                    <stop offset="38%" stopColor="#06B6D4" />
                    <stop offset="58%" stopColor="#F59E0B" />
                    <stop offset="78%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#EF4444" />
                  </linearGradient>
                </defs>

                {/* Gray dashed track */}
                <path
                  d={PATH}
                  stroke="#e2e8f0"
                  strokeWidth="2.5"
                  strokeDasharray="10 7"
                  strokeLinecap="round"
                  fill="none"
                />

                {/* Colored animated dashed path */}
                <path
                  ref={pathRef}
                  d={PATH}
                  stroke="url(#wfGrad)"
                  strokeWidth="3"
                  strokeDasharray="10 7"
                  strokeLinecap="round"
                  fill="none"
                  style={{
                    strokeDashoffset: len - len * progress,
                    transition: "stroke-dashoffset 40ms linear",
                  }}
                />

                {/* Traveling dot */}
                {dot && (
                  <g>
                    <circle cx={dot.x} cy={dot.y} r="18" fill="rgba(59,130,246,0.06)">
                      <animate attributeName="r" from="12" to="24" dur="1.6s" repeatCount="indefinite" />
                      <animate attributeName="opacity" from="0.3" to="0" dur="1.6s" repeatCount="indefinite" />
                    </circle>
                    <circle
                      cx={dot.x}
                      cy={dot.y}
                      r="5"
                      fill="white"
                      stroke="url(#wfGrad)"
                      strokeWidth="2.5"
                      style={{ filter: "drop-shadow(0 0 6px rgba(59,130,246,0.35))" }}
                    />
                  </g>
                )}

                {/* Nodes */}
                {NODES.map((n, i) => {
                  const on = active.has(i);
                  const s = steps[i];
                  const l = LABELS[i];
                  return (
                    <g key={i}>
                      {/* Outer glow */}
                      <circle
                        cx={n.x} cy={n.y}
                        r={on ? 30 : 20}
                        fill={on ? s.glow : "transparent"}
                        style={{ transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)" }}
                      />

                      {/* Pulse ring */}
                      {on && (
                        <circle cx={n.x} cy={n.y} r="22" fill="none" stroke={s.color} strokeWidth="1.5">
                          <animate attributeName="r" from="16" to="36" dur="2s" repeatCount="indefinite" />
                          <animate attributeName="opacity" from="0.35" to="0" dur="2s" repeatCount="indefinite" />
                        </circle>
                      )}

                      {/* Main dot */}
                      <circle
                        cx={n.x} cy={n.y}
                        r={on ? 13 : 8}
                        fill={on ? s.color : "#cbd5e1"}
                        style={{
                          transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)",
                          filter: on ? `drop-shadow(0 0 12px ${s.glow})` : "none",
                        }}
                      />

                      {/* Inner white */}
                      {on && <circle cx={n.x} cy={n.y} r="5" fill="white" opacity="0.85" />}

                      {/* Title */}
                      <text
                        x={n.x} y={n.y + l.dy}
                        textAnchor="middle"
                        style={{
                          fontFamily: "'Space Grotesk',sans-serif",
                          fontSize: "14px",
                          fontWeight: on ? 600 : 500,
                          fill: on ? s.color : "#94a3b8",
                          transition: "fill 0.5s ease",
                        }}
                      >
                        {s.title}
                      </text>

                      {/* Desc */}
                      <text
                        x={n.x} y={n.y + l.ddy}
                        textAnchor="middle"
                        style={{
                          fontFamily: "'Space Grotesk',sans-serif",
                          fontSize: "11.5px",
                          fill: on ? "#64748b" : "#d1d5db",
                          transition: "fill 0.5s ease",
                        }}
                      >
                        {s.desc}
                      </text>
                    </g>
                  );
                })}

                {/* End arrow */}
                <path
                  d="M 76 468 L 84 468 L 80 478 Z"
                  fill={progress > 0.9 ? "#EF4444" : "#cbd5e1"}
                  style={{ transition: "fill 0.5s" }}
                />
              </svg>
            </div>
          </Reveal>
        </div>

        {/* ═══ MOBILE — Vertical dotted timeline ═══ */}
        <div className="lg:hidden">
          <div className="relative ml-4">
            <div
              className="absolute left-[11px] top-0 bottom-0 w-[2px]"
              style={{ backgroundImage: "repeating-linear-gradient(to bottom,#e2e8f0 0px,#e2e8f0 6px,transparent 6px,transparent 12px)" }}
            />
            <div className="space-y-10">
              {steps.map((step, i) => (
                <Reveal key={step.title} delay={0.06 + i * 0.07}>
                  <div className="relative flex gap-5">
                    <div className="relative flex-shrink-0 mt-1">
                      <div
                        className="w-6 h-6 rounded-full border-[3px] border-white"
                        style={{ backgroundColor: step.color, boxShadow: `0 0 0 3px ${step.glow}` }}
                      />
                    </div>
                    <div className="pb-2 -mt-0.5">
                      <h3 className="font-display text-[0.95rem] font-semibold mb-1" style={{ color: step.color }}>{step.title}</h3>
                      <p className="text-body-sm text-slate-500 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200/60 to-transparent" />
    </section>
  );
}