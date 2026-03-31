"use client";
import Reveal from "./ui/Reveal";


const approaches = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    title: "Unified Ticket System",
    desc: "Single portal for all incident management — replacing email, calls, and disconnected tools.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
      </svg>
    ),
    title: "Structured Workflows",
    desc: "Defined stages from ticket creation to closure, ensuring consistency and reducing ambiguity.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Real-Time Visibility",
    desc: "Live status tracking and dashboard views so every stakeholder sees the full picture instantly.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    title: "Controlled Communication",
    desc: "Structured channels between users prevent miscommunication and maintain audit trails.",
  },
];

export default function SolutionSection() {
  return (
    <section className="relative py-16 lg:py-24 bg-transparent overflow-hidden">
      {/* Decorative side accent */}
      <div className="absolute left-0 top-1/3 w-1 h-32 bg-gradient-to-b from-brand-500 to-cyan-500 rounded-r-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left */}
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="font-display text-display-md sm:text-display-lg text-slate-900 mt-5 mb-3">
                A Centralized
                <br />
                <span className="text-gradient-brand">IMS Platform</span>
              </h2>
              <p className="text-body-lg text-slate-400 leading-relaxed mb-8">
                A centralized platform designed to streamline the entire
                incident lifecycle — from ticket creation to resolution.
              </p>

              {/* Design Decision callout */}
              <div className="relative p-5 rounded-2xl bg-brand-50/50 border border-brand-100/50">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-brand-100 flex items-center justify-center text-brand-600">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-caption font-semibold text-brand-700 mb-1">
                      Design Decision
                    </p>
                    <p className="text-body-sm text-brand-600/80">
                      Single-channel ticket intake via portal ensures
                      consistency, reduces complexity, and creates a reliable
                      audit trail.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right — Approach Cards */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-4">
              {approaches.map((item, i) => (
                <Reveal key={item.title} delay={0.1 + i * 0.1}>
                  <div className="relative h-full p-8 rounded-2xl border border-gray-200 bg-[#f3f4f6] overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-50 text-brand-600 mb-6">
                      {item.icon}
                    </div>
                    <h3 className="font-display text-heading text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-body text-slate-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
