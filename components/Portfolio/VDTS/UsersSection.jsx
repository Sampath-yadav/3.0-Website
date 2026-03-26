"use client";
import Reveal from "./ui/Reveal";


const users = [
  {
    role: "VDTS Admin",
    emoji: "🛡️",
    color: "from-brand-500 to-brand-600",
    bg: "bg-brand-50",
    border: "border-brand-200/50",
    tagBg: "bg-brand-500",
    responsibilities: [
      "Manages incoming tickets",
      "Assigns to consultants",
      "Monitors system activity",
      "Oversees resolution pipeline",
    ],
  },
  {
    role: "VDTS Consultant",
    emoji: "⚙️",
    color: "from-cyan-500 to-brand-500",
    bg: "bg-cyan-50",
    border: "border-cyan-200/50",
    tagBg: "bg-cyan-500",
    responsibilities: [
      "Works on assigned tickets",
      "Communicates with clients",
      "Delivers solutions",
      "Requests clarity when needed",
    ],
  },
  {
    role: "VDTS Client",
    emoji: "👤",
    color: "from-emerald-500 to-cyan-500",
    bg: "bg-emerald-50",
    border: "border-emerald-200/50",
    tagBg: "bg-emerald-500",
    responsibilities: [
      "Raises requests via portal",
      "Provides additional info",
      "Reviews resolutions",
      "Confirms ticket closure",
    ],
  },
];

export default function UsersSection() {
  return (
    <section className="relative py-16 lg:py-24 bg-mesh-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left mb-16">
          <Reveal>
            <h2 className="font-display text-display-md sm:text-display-lg text-slate-900 mt-5 mb-3">
              Designed for Three{" "}
              <span className="text-gradient-brand">Core Roles</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-body-lg text-slate-400 max-w-lg leading-relaxed">
              Each user type has a tailored experience optimized for their
              specific workflows and responsibilities.
            </p>
          </Reveal>
        </div>

        {/* User Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {users.map((user, i) => (
            <Reveal key={user.role} delay={0.1 + i * 0.12}>
              <div className="relative h-full rounded-2xl border border-gray-200 bg-[#f3f4f6] overflow-hidden">
                <div className="p-8">
                  {/* Icon + Role */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-14 h-14 rounded-xl ${user.bg} flex items-center justify-center text-2xl`}
                    >
                      {user.emoji}
                    </div>
                    <span
                      className={`inline-block px-3 py-1 rounded-md text-sm font-bold uppercase tracking-wider text-white ${user.tagBg}`}
                    >
                      {user.role}
                    </span>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-3.5">
                    {user.responsibilities.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white border border-gray-200 flex items-center justify-center mt-0.5">
                          <svg
                            className="w-2.5 h-2.5 text-brand-500"
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
                        <span className="text-body text-slate-600">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
