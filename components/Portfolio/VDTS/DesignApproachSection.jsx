"use client";
import Reveal from "./ui/Reveal";


const approaches = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Status-First Dashboard",
    desc: "Prioritized visibility of ticket states to enable faster decision-making. The dashboard is the central hub for all user types.",
    highlight: "Faster decisions through instant status recognition",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
    title: "Context-Aware UI",
    desc: "Desktop supports bulk management with data tables, while mobile is optimized for quick actions with card-based views.",
    highlight: "Device-optimized, not just responsive",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
      </svg>
    ),
    title: "Visual Hierarchy & Color Coding",
    desc: "Status-based colors help users quickly scan and understand ticket states at a glance, reducing cognitive load.",
    highlight: "Scan first, read second",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
      </svg>
    ),
    title: "Efficient Navigation",
    desc: "Advanced filters and search reduce the effort needed to locate specific tickets across large datasets.",
    highlight: "Find any ticket in under 3 seconds",
  },
];

export default function DesignApproachSection() {
  return (
    <section className="relative py-16 lg:py-24 bg-mesh-subtle overflow-hidden">
      {/* Side accent */}
      <div className="absolute right-0 top-1/3 w-1 h-32 bg-gradient-to-b from-cyan-500 to-brand-500 rounded-l-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left mb-16">
          <Reveal>
            <h2 className="font-display text-display-md sm:text-display-lg text-slate-900 mt-5 mb-3">
              Intentional Design{" "}
              <span className="text-gradient-brand">Decisions</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-body-lg text-slate-400 max-w-lg leading-relaxed">
              Every design choice was driven by the goal of reducing complexity
              and increasing clarity for all user types.
            </p>
          </Reveal>
        </div>

        {/* Approach Cards — 2×2 */}
        <div className="grid md:grid-cols-2 gap-6">
          {approaches.map((item, i) => (
            <Reveal key={item.title} delay={0.1 + i * 0.1}>
              <div className="relative h-full p-7 rounded-2xl border border-gray-200 bg-[#f3f4f6] overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-50 text-brand-600 mb-6">
                  {item.icon}
                </div>

                <h3 className="font-display text-heading text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-body text-slate-500 leading-relaxed mb-5">
                  {item.desc}
                </p>

                {/* Highlight callout */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/80 border border-gray-200">
                  <svg className="w-3.5 h-3.5 text-brand-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <span className="text-caption text-brand-600">
                    {item.highlight}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
