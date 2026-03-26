"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const PROBLEMS = [
  "Difficulty connecting with the right financial experts",
  "No secure system to share sensitive business data",
  "Unorganized communication between stakeholders",
  "Limited visibility for decision-makers",
] as const;

const SOLUTIONS = [
  "Secure environment for sharing business & financial data",
  "Financial experts can review and analyze company data",
  "All stakeholders collaborate in one unified platform",
  "Structured interaction via expressions of interest",
] as const;

interface Line {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export default function ProblemSolution() {
  const [active, setActive] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const problemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const solutionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [line, setLine] = useState<Line | null>(null);

  const calcLine = useCallback(() => {
    if (active === null || !containerRef.current) {
      setLine(null);
      return;
    }
    const pEl = problemRefs.current[active];
    const sEl = solutionRefs.current[active];
    if (!pEl || !sEl) return;

    const cRect = containerRef.current.getBoundingClientRect();
    const pRect = pEl.getBoundingClientRect();
    const sRect = sEl.getBoundingClientRect();

    setLine({
      x1: pRect.right - cRect.left,
      y1: pRect.top + pRect.height / 2 - cRect.top,
      x2: sRect.left - cRect.left,
      y2: sRect.top + sRect.height / 2 - cRect.top,
    });
  }, [active]);

  useEffect(() => {
    calcLine();
    window.addEventListener("resize", calcLine);
    return () => window.removeEventListener("resize", calcLine);
  }, [calcLine]);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (active !== null && containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setActive(null);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [active]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  const handleClick = (i: number) => {
    setActive((prev) => (prev === i ? null : i));
  };

  const buildPath = (l: Line) => {
    const dx = l.x2 - l.x1;
    const wave = 14;
    const cp1x = l.x1 + dx * 0.35;
    const cp1y = l.y1 - wave;
    const cp2x = l.x1 + dx * 0.65;
    const cp2y = l.y2 + wave;
    return `M${l.x1},${l.y1} C${cp1x},${cp1y} ${cp2x},${cp2y} ${l.x2},${l.y2}`;
  };

  return (
    <div ref={containerRef} className="relative">
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-[5]"
        style={{ overflow: "visible" }}
      >
        {line && (
          <path
            d={buildPath(line)}
            fill="none"
            stroke="#ff5c35"
            strokeWidth="2"
            strokeDasharray="5 5"
            strokeLinecap="round"
            className="animate-[dashFlow_1.2s_linear_infinite]"
            style={{
              filter: "drop-shadow(0 0 3px rgba(37,149,190,0.3))",
            }}
          />
        )}
      </svg>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-12">
        <div className="bg-white rounded-2xl border border-[#eee] p-8 md:p-10 shadow-sm">
          <h3 className="text-lg font-bold mb-6 flex items-center gap-3 text-[#333]">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
            Problem
          </h3>
          <div className="space-y-3.5">
            {PROBLEMS.map((p, i) => (
              <div
                key={p}
                ref={(el) => { problemRefs.current[i] = el; }}
                onClick={() => handleClick(i)}
                className={[
                  "py-4 px-5 rounded-xl text-[0.95rem] font-semibold leading-snug border-l-[4px] cursor-pointer select-none",
                  "transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                  active === i
                    ? "bg-red-50 text-red-700 border-l-red-500 scale-[1.02] shadow-[0_4px_12px_rgba(239,68,68,0.12)]"
                    : active !== null
                      ? "bg-gray-50 text-gray-400 border-l-gray-200 scale-[0.98]"
                      : "bg-[#fffafa] text-red-900/80 border-l-red-200 hover:bg-red-50 hover:text-red-700 hover:translate-x-1",
                ].join(" ")}
              >
                {p}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-[#eee] p-8 md:p-10 shadow-sm">
          <h3 className="text-lg font-bold mb-6 flex items-center gap-3 text-[#333]">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            Solution
          </h3>
          <div className="space-y-3.5">
            {SOLUTIONS.map((s, i) => (
              <div
                key={s}
                ref={(el) => { solutionRefs.current[i] = el; }}
                className={[
                  "py-4 px-5 rounded-xl text-[0.95rem] font-semibold leading-snug border-l-[4px]",
                  "transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                  active === i
                    ? "bg-emerald-50 text-emerald-700 border-l-emerald-500 scale-[1.02] shadow-[0_4px_12px_rgba(16,185,129,0.12)]"
                    : active !== null
                      ? "bg-gray-50 text-gray-400 border-l-gray-200 scale-[0.98]"
                      : "bg-[#f5fbf9] text-emerald-900/80 border-l-emerald-200",
                ].join(" ")}
              >
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>

      <p
        className={[
          "text-center text-[0.78rem] text-[#556] mt-5 transition-opacity duration-300",
          active !== null ? "opacity-0" : "opacity-100",
        ].join(" ")}
      >
        Click a problem to reveal its matching solution
      </p>
    </div>
  );
}
