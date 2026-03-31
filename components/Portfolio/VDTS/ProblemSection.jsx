"use client";
import Reveal from "./ui/Reveal";


const painPoints = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
      </svg>
    ),
    title: "Poor Visibility",
    desc: "No unified view of ticket status or progress across teams, leading to blind spots in operations.",
    color: "text-red-500",
    bg: "bg-red-50",
    border: "border-red-100",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Resolution Delays",
    desc: "Scattered channels meant tickets fell through the cracks, extending resolution times significantly.",
    color: "text-amber-500",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: "No Accountability",
    desc: "Without clear ownership tracking, it was impossible to hold teams accountable for incident handling.",
    color: "text-orange-500",
    bg: "bg-orange-50",
    border: "border-orange-100",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    title: "Fragmented Communication",
    desc: "Email, calls, and separate portals created communication silos between teams and clients.",
    color: "text-rose-500",
    bg: "bg-rose-50",
    border: "border-rose-100",
  },
];

export default function ProblemSection() {
  return (
    <section className="relative py-16 lg:py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-left mb-16">
          <Reveal>
            <h2 className="font-display text-display-md sm:text-display-lg text-slate-900 mt-5 mb-3">
              The Challenge We{" "}
              <span className="text-gradient-brand">Faced</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-body-lg text-slate-400 max-w-lg leading-relaxed">
              Organizations were handling incident requests through multiple
              disconnected channels. There was no single system to track the
              complete lifecycle of a request.
            </p>
          </Reveal>
        </div>

        {/* Pain Points Grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {painPoints.map((point, i) => (
            <Reveal key={point.title} delay={0.1 + i * 0.1}>
              <div className="relative h-full p-8 rounded-2xl border border-gray-200 bg-[#f3f4f6] overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${point.bg} ${point.color} mb-6`}
                >
                  {point.icon}
                </div>
                <h3 className="font-display text-heading text-slate-900 mb-2">
                  {point.title}
                </h3>
                <p className="text-body text-slate-500 leading-relaxed">
                  {point.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
