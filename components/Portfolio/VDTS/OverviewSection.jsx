"use client";
import Image from "next/image";
import Reveal from "./ui/Reveal";


/* ── Cards Data ─────────────────────────────────────────────── */
const cards = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    label: "Objective",
    value: "Centralize incident tracking across organizations",
    accent: "blue",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    label: "Platforms",
    value: "Desktop & Mobile responsive design",
    accent: "violet",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    label: "User Types",
    value: "Admin, Consultant & Client roles",
    accent: "emerald",
  },
];

/* ── Accent Tokens per Card ─────────────────────────────────── */
const accentMap = {
  blue: {
    iconBg: "bg-blue-50",
    iconText: "text-blue-600",
    line: "from-blue-400 to-blue-500",
    borderHover: "hover:border-blue-200/70",
    shadow: "hover:shadow-[0_8px_32px_rgba(37,99,235,0.07)]",
  },
  violet: {
    iconBg: "bg-violet-50",
    iconText: "text-violet-600",
    line: "from-violet-400 to-violet-500",
    borderHover: "hover:border-violet-200/70",
    shadow: "hover:shadow-[0_8px_32px_rgba(124,58,237,0.07)]",
  },
  emerald: {
    iconBg: "bg-emerald-50",
    iconText: "text-emerald-600",
    line: "from-emerald-400 to-emerald-500",
    borderHover: "hover:border-emerald-200/70",
    shadow: "hover:shadow-[0_8px_32px_rgba(5,150,105,0.07)]",
  },
};

/* ── Overview Section ───────────────────────────────────────── */
export default function OverviewSection() {
  return (
    <section className="relative py-16 lg:py-24 bg-white overflow-hidden">
      {/* Ambient background shapes */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-50/40 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-violet-50/30 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ═══ Split: Laptop Left + Content Right ═══ */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 lg:mb-20">
          {/* ── Left: Laptop Mockup ── */}
          <Reveal direction="left" delay={0.12}>
            <div className="relative lg:-ml-8 xl:-ml-12">
              <Image
                src="/portfolio/vdts/Group 861.png"
                alt="VDTS Dashboard — Mac mockup showing ticket management interface"
                width={800}
                height={525}
                className="w-full lg:w-[115%] xl:w-[120%] h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
                priority
              />
            </div>
          </Reveal>

          {/* ── Right: Content ── */}
          <div className="lg:pl-4">
            <Reveal delay={0.2}>
              <p className="text-body-lg text-slate-500 leading-[1.8] mb-6">
                VDTS is a corporate IT service provider that required a
                structured system to manage incident requests across
                organizations. The project focused on designing a web-based{" "}
                <span className="font-semibold text-slate-700">
                  Incident Management System (IMS)
                </span>{" "}
                that works seamlessly across desktop and mobile devices.
              </p>
            </Reveal>

            <Reveal delay={0.28}>
              <p className="text-body-lg text-slate-500 leading-[1.8] mb-8">
                The platform enables teams to track, manage, and resolve
                incidents efficiently through a centralized interface —
                replacing fragmented workflows with a single source of truth.
              </p>
            </Reveal>

            {/* Pull quote accent */}
            <Reveal delay={0.34}>
              <div className="relative pl-5 py-1 border-l-[3px] border-brand-400/40 rounded-sm">
                <p className="text-[0.95rem] text-slate-500 italic leading-relaxed">
                  &ldquo;One platform to unify ticket creation, assignment,
                  tracking, and resolution — across every team and
                  device.&rdquo;
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ═══ Full-Width 3D Stat Cards ═══ */}
        <div className="grid sm:grid-cols-3 gap-5">
          {cards.map((card, i) => {
            const a = accentMap[card.accent];
            return (
              <Reveal key={card.label} delay={0.12 + i * 0.1}>
                <div className="relative h-full p-8 rounded-2xl border border-gray-200 bg-[#f3f4f6] cursor-default overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${a.iconBg} ${a.iconText} mb-6`}
                  >
                    {card.icon}
                  </div>

                  {/* Label */}
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-slate-400 mb-2">
                    {card.label}
                  </p>

                  {/* Value */}
                  <p className="text-base font-medium text-slate-700 leading-snug">
                    {card.value}
                  </p>

                  {/* Corner number */}
                  <span className="absolute top-5 right-5 text-[0.6rem] font-mono font-medium text-slate-200/80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200/60 to-transparent" />
    </section>
  );
}