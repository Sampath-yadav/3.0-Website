"use client";
import Reveal from "./ui/Reveal";
import SectionLabel from "./ui/SectionLabel";

const outcomes = [
  {
    text: "Faster identification and prioritization of tickets",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    text: "Complete visibility across the ticket lifecycle",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    text: "Improved communication between teams and clients",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
  {
    text: "Reduced dependency on scattered tools",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function OutcomeSection() {
  return (
    <section className="relative py-16 lg:py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative rounded-3xl bg-black p-10 sm:p-12 lg:p-16 overflow-hidden">
            {/* Ambient glows */}
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-brand-500/[0.07] blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-cyan-500/[0.06] blur-[80px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-brand-500/[0.03] blur-[120px] pointer-events-none" />

            <div className="relative grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* ── Left: Heading ── */}
              <div>
                <Reveal delay={0.14}>
                  <h2 className="font-display text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] font-bold text-white leading-[1.1] tracking-tight mb-5">
                    Key Results
                  </h2>
                </Reveal>

                <Reveal delay={0.2}>
                  <p className="text-[1.05rem] text-slate-400 leading-[1.75] max-w-md">
                    The platform transformed how VDTS handles incidents —
                    moving from scattered, disconnected processes to a single
                    unified system with complete visibility.
                  </p>
                </Reveal>

                {/* Accent line */}
                <Reveal delay={0.25}>
                  <div className="mt-8 w-16 h-[3px] rounded-full bg-gradient-to-r from-brand-400 to-cyan-400 opacity-50" />
                </Reveal>
              </div>

              {/* ── Right: Result rows ── */}
              <div className="space-y-3.5">
                {outcomes.map((item, i) => (
                  <Reveal key={i} delay={0.15 + i * 0.08}>
                    <div className="group flex items-center gap-4 p-4 rounded-2xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.08] hover:border-white/[0.1] transition-all duration-300 cursor-default">
                      {/* Gradient check circle */}
                      <div className="flex-shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-brand-400 to-cyan-400 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.15)] group-hover:shadow-[0_0_28px_rgba(59,130,246,0.25)] transition-shadow duration-300">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      </div>

                      {/* Text */}
                      <span className="text-[0.95rem] sm:text-base text-slate-200 font-medium leading-snug group-hover:text-white transition-colors duration-300">
                        {item.text}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200/60 to-transparent" />
    </section>
  );
}