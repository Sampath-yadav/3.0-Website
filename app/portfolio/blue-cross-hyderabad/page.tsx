"use client";

import { useEffect, useRef, useState } from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

// ─── DATA ───────────────────────────────────────────────────────────────────

const featuresList = [
  {
    tag: "FIELD STAFF",
    title: "Real-Time Field Operations",
    description:
      "Field workers use the mobile app to update capture, release, and shelter tasks in real time. This helps the team stay organized and every animal record is tracked properly without paperwork.",
    theme: "dark",
    icon: "\u{1F4F1}",
    accent: "#1B9AD2",
  },
  {
    tag: "VETERINARY DOCTORS",
    title: "Medical Records in One Place",
    description:
      "Doctors can record surgery details, health status, and treatment updates directly from the app. This keeps every animal's medical history clear, accurate, and easy to access when needed.",
    theme: "yellow",
    icon: "\u{1F3E5}",
    accent: "#d97706",
  },
  {
    tag: "MANAGEMENT & ADMIN",
    title: "Centralized Web Dashboard",
    description:
      "The web dashboard allows management to monitor teams, vehicles, schedules, and reports from one place. This makes planning easier and helps the organization run daily operations smoothly.",
    theme: "light",
    icon: "\u{1F4BB}",
    accent: "#1B9AD2",
  },
  {
    tag: "REPORTING & TRACKING",
    title: "Smart Analytics & Reports",
    description:
      "All capture, release, and surgery data is stored automatically in the system. With proper reports and analytics, the organization can track progress, improve planning, and work more efficiently.",
    theme: "light",
    icon: "\u{1F4CA}",
    accent: "#F97316",
  },
];

const servicesList = [
  { icon: "\u{1F43E}", title: "Animal Capture", description: "Field teams log every capture with location, time, and animal details directly from the mobile app.", color: "#1B9AD2" },
  { icon: "\u{1F3E5}", title: "Veterinary Care", description: "Complete surgery and medical records are maintained per animal, accessible to all authorized vets.", color: "#F97316" },
  { icon: "\u{1F697}", title: "Vehicle Tracking", description: "Monitor all field vehicles and their routes from the admin dashboard in real time.", color: "#10b981" },
  { icon: "\u{1F4CB}", title: "Release Management", description: "Track every animal released back to the community with health status and sterilization details.", color: "#8b5cf6" },
  { icon: "\u{1F4CA}", title: "Analytics Dashboard", description: "Comprehensive reports on operations, progress tracking, and performance metrics at a glance.", color: "#ec4899" },
  { icon: "\u{1F514}", title: "Real-time Alerts", description: "Instant notifications for task updates, medical urgencies, and operational changes.", color: "#f59e0b" },
];

const langScreens = [
  { lang: "\u0939\u093F\u0902", langFull: "Hindi", color: "#ec4899", tasks: ["\u092A\u0936\u0941 \u092A\u0915\u0921\u093C\u0928\u093E", "\u091B\u094B\u0921\u093C\u0928\u093E", "\u0938\u0930\u094D\u091C\u0930\u0940 \u0932\u0949\u0917", "\u0930\u093F\u092A\u094B\u0930\u094D\u091F"], stats: ["8", "4", "3"], featured: false },
  { lang: "En", langFull: "English", color: "#1B9AD2", tasks: ["New Capture", "Release Task", "Surgery Log", "Reports"], stats: ["12", "8", "5"], featured: true },
  { lang: "\u0C24\u0C46", langFull: "Telugu", color: "#7c3aed", tasks: ["\u0C1C\u0C02\u0C24\u0C41\u0C35\u0C41 \u0C2A\u0C1F\u0C4D\u0C1F\u0C41\u0C1F", "\u0C35\u0C3F\u0C21\u0C41\u0C26\u0C32", "\u0C36\u0C38\u0C4D\u0C24\u0C4D\u0C30\u0C1A\u0C3F\u0C15\u0C3F\u0C24\u0C4D\u0C38", "\u0C28\u0C3F\u0C35\u0C47\u0C26\u0C3F\u0C15"], stats: ["10", "6", "4"], featured: false },
];

// ─── SUB-COMPONENTS ──────────────────────────────────────────────────────────

const PawPrint = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="30" cy="20" rx="10" ry="12" />
    <ellipse cx="55" cy="15" rx="9" ry="11" />
    <ellipse cx="77" cy="22" rx="9" ry="11" />
    <ellipse cx="88" cy="45" rx="8" ry="10" />
    <path d="M50 40 C25 40 15 55 18 72 C20 85 32 90 50 90 C68 90 80 85 82 72 C85 55 75 40 50 40Z" />
  </svg>
);

const MiniPhone = ({ delay = 0 }: { delay?: number }) => (
  <div className="bc-phone-mockup bg-gray-900 rounded-[28px] p-2 shadow-xl bc-float" style={{ animationDelay: `${delay}s`, width: "140px" }}>
    <div className="bg-white rounded-[22px] overflow-hidden">
      <div className="bg-gray-900 px-3 py-1.5 flex justify-between">
        <span className="text-white text-xs">9:41</span>
        <span className="text-white text-xs">{"\u25FC\u25FC\u25FC"}</span>
      </div>
      <div className="p-2 space-y-1.5" style={{ minHeight: "220px" }}>
        <div className="rounded-lg p-2 text-white text-xs font-bold" style={{ background: "linear-gradient(135deg, #1B9AD2, #0e6fa0)" }}>Dashboard</div>
        <div className="space-y-1">
          {["Capture", "Release", "Surgery", "Report"].map((item) => (
            <div key={item} className="flex items-center gap-1 bg-gray-50 rounded-md p-1">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span className="text-xs text-gray-600">{item}</span>
            </div>
          ))}
        </div>
        <button className="w-full py-1.5 rounded-lg text-white text-xs font-bold" style={{ background: "#1B9AD2" }}>+ New</button>
      </div>
    </div>
  </div>
);

const FeatureCard = ({ feature, index }: { feature: typeof featuresList[0]; index: number }) => {
  const isDark = feature.theme === "dark";
  const isYellow = feature.theme === "yellow";
  const bg = isDark ? "#1a1a2e" : isYellow ? "#FEF3C7" : "#ffffff";

  return (
    <div
      className="bc-feature-card bc-feature-animate rounded-3xl p-8 relative overflow-hidden"
      style={{ background: bg, opacity: 0, transform: "translateY(30px)", transition: `all 0.6s ease-out ${index * 0.1}s` }}
    >
      <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-10" style={{ background: feature.accent }} />
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: isDark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.4)" }}>{feature.tag}</span>
          <span className="text-3xl">{feature.icon}</span>
        </div>
        <h3 className="text-xl font-bold mb-3" style={{ color: isYellow ? feature.accent : isDark ? "#ffffff" : feature.accent }}>{feature.title}</h3>
        <p className="text-sm leading-relaxed" style={{ color: isDark ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.6)" }}>{feature.description}</p>
        {isDark && (
          <div className="mt-6">
            <div className="bg-white/10 rounded-2xl p-4 space-y-2">
              {["Task updated", "New capture logged", "Release confirmed"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs text-white/70">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#1B9AD2" }} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}
        {isYellow && (
          <div className="mt-6">
            <div className="bg-white/60 rounded-2xl p-4 space-y-2">
              {["Surgery: Completed", "Health: Stable", "Next visit: 3 days"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs text-gray-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const PhoneMockup = ({ screen, featured }: { screen: typeof langScreens[0]; featured?: boolean }) => (
  <div className={`relative transition-all duration-300 ${featured ? "scale-110 z-10" : "scale-95 opacity-80 hover:opacity-100 hover:scale-100"}`}>
    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg z-20" style={{ background: screen.color }}>{screen.lang}</div>
    <div className="bg-gray-900 rounded-[32px] p-2 shadow-2xl" style={{ width: featured ? "180px" : "160px" }}>
      <div className="bg-white rounded-[26px] overflow-hidden">
        <div className="bg-gray-900 px-3 py-1.5 flex justify-between items-center">
          <span className="text-white text-xs">9:41</span>
          <div className="w-12 h-3 bg-gray-900 rounded-full" />
          <span className="text-white text-xs">{"\u25FC\u25FC\u25FC"}</span>
        </div>
        <div className="p-2.5 space-y-1.5" style={{ minHeight: "340px", background: "#fafafa" }}>
          <div className="rounded-xl p-2.5 text-white" style={{ background: screen.color }}>
            <div className="text-xs opacity-75">ABC Portal</div>
            <div className="text-sm font-bold mt-0.5">Dashboard</div>
            <div className="flex gap-1 mt-1.5">
              {screen.stats.map((s, i) => (
                <div key={i} className="bg-white/20 rounded-lg px-1.5 py-0.5 flex-1 text-center">
                  <div className="text-xs font-bold">{s}</div>
                  <div className="text-xs opacity-70">{["Cap", "Rel", "Sur"][i]}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-xs text-gray-400 font-medium px-0.5">Tasks</div>
          {screen.tasks.map((task, i) => (
            <div key={i} className="flex items-center gap-1.5 bg-white rounded-lg p-1.5 shadow-sm">
              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: screen.color }} />
              <span className="text-xs text-gray-700 truncate">{task}</span>
              <div className="ml-auto text-gray-300 text-xs">{"\u203A"}</div>
            </div>
          ))}
          <button className="w-full py-2 rounded-xl text-white text-xs font-bold mt-1" style={{ background: screen.color }}>+ New Entry</button>
        </div>
      </div>
    </div>
    <div className="text-center mt-3">
      <span className="text-sm font-medium text-gray-500">{screen.langFull}</span>
    </div>
  </div>
);

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function BlueCrossPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresSectionRef = useRef<HTMLDivElement>(null);
  const servicesSectionRef = useRef<HTMLDivElement>(null);
  const multilangSectionRef = useRef<HTMLDivElement>(null);
  const appStoreSectionRef = useRef<HTMLDivElement>(null);

  const [servicesVisible, setServicesVisible] = useState(false);
  const [multilangVisible, setMultilangVisible] = useState(false);
  const [appStoreVisible, setAppStoreVisible] = useState(false);

  useEffect(() => {
    const el = heroRef.current;
    if (el) {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      setTimeout(() => {
        el.style.transition = "all 0.8s ease-out";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 100);
    }

    const featObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".bc-feature-animate");
            cards.forEach((card, i) => {
              setTimeout(() => {
                (card as HTMLElement).style.opacity = "1";
                (card as HTMLElement).style.transform = "translateY(0)";
              }, i * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (featuresSectionRef.current) featObserver.observe(featuresSectionRef.current);

    const srvObserver = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setServicesVisible(true); }, { threshold: 0.1 });
    if (servicesSectionRef.current) srvObserver.observe(servicesSectionRef.current);

    const mlObserver = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setMultilangVisible(true); }, { threshold: 0.1 });
    if (multilangSectionRef.current) mlObserver.observe(multilangSectionRef.current);

    const asObserver = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setAppStoreVisible(true); }, { threshold: 0.1 });
    if (appStoreSectionRef.current) asObserver.observe(appStoreSectionRef.current);

    return () => { featObserver.disconnect(); srvObserver.disconnect(); mlObserver.disconnect(); asObserver.disconnect(); };
  }, []);

  return (
    <div className="relative min-h-screen">
      <Header />
      <div
        className="bluecross-page"
        dangerouslySetInnerHTML={{ __html: "" }}
        style={{ display: "none" }}
      />
      <style jsx global>{`
        .bluecross-page-wrapper {
          font-family: 'DM Sans', sans-serif;
        }
        .bc-gradient-text {
          background: linear-gradient(135deg, #1B9AD2, #0e6fa0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .bc-paw-watermark {
          position: absolute;
          opacity: 0.06;
          pointer-events: none;
        }
        .bc-phone-mockup {
          border-radius: 36px;
          border: 3px solid #e2e8f0;
          box-shadow: 0 25px 60px rgba(0,0,0,0.15), 0 8px 20px rgba(0,0,0,0.08);
          overflow: hidden;
          background: #fff;
        }
        .bc-feature-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .bc-feature-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.12);
        }
        .bc-watermark-text {
          font-size: 5rem;
          font-weight: 900;
          color: #F97316;
          opacity: 0.08;
          white-space: nowrap;
          user-select: none;
          pointer-events: none;
          line-height: 3;
        }
        @keyframes bc-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .bc-float {
          animation: bc-float 3s ease-in-out infinite;
        }
      `}</style>

      <main className="bluecross-page-wrapper antialiased overflow-x-hidden relative z-10">

        {/* ── HERO ── */}
        <section className="relative min-h-screen flex items-center overflow-hidden pt-32 sm:pt-36">
          <div className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-25" style={{ background: "radial-gradient(circle, #1B9AD2 0%, transparent 70%)" }} />
          <PawPrint className="bc-paw-watermark top-32 right-20 w-32 h-32 text-gray-400" />
          <PawPrint className="bc-paw-watermark bottom-32 right-40 w-24 h-24 text-gray-400" />
          <PawPrint className="bc-paw-watermark top-1/2 right-8 w-16 h-16 text-gray-400" />

          <div className="max-w-6xl mx-auto px-6 w-full" ref={heroRef}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-start gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/bluecross/abc-logo.png" alt="ABC Logo" className="w-42 h-30" />
                </div>
                <div className="space-y-4">
                  <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                    A unified platform for managing animal birth control operations, veterinary records,
                    field activities, and shelter management across Hyderabad.
                  </p>
                </div>
              </div>

              <div className="relative flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="absolute inset-0 rounded-3xl" style={{ background: "linear-gradient(135deg, #e0f2fe 0%, #fef3c7 100%)", transform: "rotate(-6deg) scale(1.1)" }} />
                  <div className="relative bc-phone-mockup w-56 mx-auto bc-float" style={{ animationDelay: "0s" }}>
                    <div className="bg-gray-900 rounded-[36px] p-2.5 shadow-2xl">
                      <div className="bg-white rounded-[28px] overflow-hidden">
                        <div className="bg-gray-900 px-4 py-2 flex justify-between items-center">
                          <span className="text-white text-xs">9:41</span>
                          <div className="w-16 h-4 bg-gray-900 rounded-full" />
                          <div className="flex gap-1">
                            <div className="w-3 h-2 bg-white rounded-sm opacity-80" />
                            <div className="w-3 h-2 bg-white rounded-sm opacity-80" />
                          </div>
                        </div>
                        <div className="p-3 space-y-2" style={{ minHeight: "380px" }}>
                          <div className="rounded-xl p-3 text-white" style={{ background: "linear-gradient(135deg, #1B9AD2, #0e6fa0)" }}>
                            <div className="text-xs font-semibold opacity-80">ABC Portal</div>
                            <div className="text-sm font-bold mt-0.5">Dashboard</div>
                            <div className="flex gap-2 mt-2">
                              {["12", "8", "5"].map((n, i) => (
                                <div key={i} className="bg-white/20 rounded-lg px-2 py-1 text-center flex-1">
                                  <div className="text-sm font-bold">{n}</div>
                                  <div className="text-xs opacity-70">{["Capture", "Release", "Surgery"][i]}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="text-xs font-semibold text-gray-500 mt-2">Today&apos;s Tasks</div>
                          {[
                            { label: "New Capture Report", color: "#1B9AD2" },
                            { label: "Medical Update", color: "#F97316" },
                            { label: "Release Schedule", color: "#10b981" },
                            { label: "Surgery Log", color: "#8b5cf6" },
                          ].map((item) => (
                            <div key={item.label} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                              <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: item.color }} />
                              <span className="text-xs text-gray-700">{item.label}</span>
                              <div className="ml-auto">
                                <svg viewBox="0 0 20 20" className="w-3 h-3 text-gray-300" fill="currentColor">
                                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                            </div>
                          ))}
                          <button className="w-full py-2.5 rounded-xl text-white text-xs font-bold mt-2" style={{ background: "linear-gradient(135deg, #1B9AD2, #0e6fa0)" }}>+ New Capture</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -left-4 top-1/4 bg-white rounded-2xl shadow-xl p-3 bc-float" style={{ animationDelay: "0.5s" }}>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: "#1B9AD2" }}>FS</div>
                      <div>
                        <div className="text-xs font-semibold text-gray-800">Field Staff</div>
                        <div className="text-xs text-gray-400">3 active now</div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -right-4 bottom-1/3 bg-white rounded-2xl shadow-xl p-3 bc-float" style={{ animationDelay: "1s" }}>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: "#F97316" }}>{"\u{1F3E5}"}</div>
                      <div>
                        <div className="text-xs font-semibold text-gray-800">Vet Records</div>
                        <div className="text-xs text-gray-400">Updated live</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 60" className="w-full" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,40 C360,0 720,60 1080,20 C1260,0 1380,30 1440,40 L1440,60 L0,60 Z" fill="#f8fafc" />
            </svg>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section className="py-24" ref={servicesSectionRef}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16 transition-all duration-700" style={{ opacity: servicesVisible ? 1 : 0, transform: servicesVisible ? "translateY(0)" : "translateY(30px)" }}>
              <span className="text-sm font-bold tracking-widest uppercase" style={{ color: "#1B9AD2" }}>Our Services</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-3">Built for Animal <span className="bc-gradient-text">Welfare at Scale</span></h2>
              <p className="text-gray-500 mt-4 max-w-xl mx-auto">End-to-end tools for every stage of the animal birth control program — from capture to care to community release.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesList.map((service, i) => (
                <div key={service.title} className="bc-feature-card p-6 rounded-2xl border border-gray-100 bg-white hover:border-blue-200 transition-all duration-700" style={{ opacity: servicesVisible ? 1 : 0, transform: servicesVisible ? "translateY(0)" : "translateY(30px)", transitionDelay: `${i * 0.08}s` }}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4" style={{ background: `${service.color}15` }}>{service.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                  <div className="mt-4 w-8 h-0.5 rounded-full" style={{ background: service.color }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section className="py-24" ref={featuresSectionRef}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-sm font-bold tracking-widest uppercase" style={{ color: "#1B9AD2" }}>Platform Features</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-3">Everything You Need, <span className="bc-gradient-text">All in One Place</span></h2>
              <p className="text-gray-500 mt-4 max-w-xl mx-auto">Designed for every role in the organization — from field staff to veterinary doctors to management.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {featuresList.map((feature, i) => (
                <FeatureCard key={feature.tag} feature={feature} index={i} />
              ))}
            </div>
            <div className="mt-8 rounded-3xl p-10 text-center bc-feature-animate" style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.6s ease-out", background: "linear-gradient(135deg, #1B9AD2 0%, #0e6fa0 100%)" }}>
              <div className="text-4xl mb-4">{"\u{1F4C8}"}</div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight mb-4">All capture, release, and surgery data is stored automatically in the system.</h3>
              <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mx-auto">With proper reports and analytics, the organization can track progress, improve planning, and work more efficiently.</p>
              <div className="mt-6 inline-block">
                <span className="text-white/70 text-sm font-semibold tracking-wide uppercase border border-white/30 rounded-full px-6 py-2">Clear Reports &amp; Better Decisions</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── MULTILANG ── */}
        <section className="py-24 relative overflow-hidden" ref={multilangSectionRef}>
          <div className="absolute inset-0 pointer-events-none flex flex-col justify-center gap-0 pl-6">
            {[...Array(4)].map((_, rowIndex) => (
              <div key={rowIndex} className="flex gap-2">
                {Array(12).fill("BlueCross").map((text, i) => (
                  <span key={i} className="bc-watermark-text">{text}</span>
                ))}
              </div>
            ))}
          </div>
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16 transition-all duration-700" style={{ opacity: multilangVisible ? 1 : 0, transform: multilangVisible ? "translateY(0)" : "translateY(30px)" }}>
              <span className="text-sm font-bold tracking-widest uppercase" style={{ color: "#1B9AD2" }}>Multilingual Support</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-3">Works in Every <span className="bc-gradient-text">Language You Speak</span></h2>
              <p className="text-gray-500 mt-4 max-w-xl mx-auto">The app supports English, Hindi, and Telugu — ensuring every team member can use it comfortably in their native language.</p>
            </div>
            <div className="flex justify-center items-end gap-6 md:gap-12 transition-all duration-700 delay-200" style={{ opacity: multilangVisible ? 1 : 0, transform: multilangVisible ? "translateY(0)" : "translateY(40px)" }}>
              {langScreens.map((screen) => (
                <PhoneMockup key={screen.langFull} screen={screen} featured={screen.featured} />
              ))}
            </div>
          </div>
        </section>

        {/* ── APP STORE ── */}
        <section className="py-24 relative overflow-hidden" style={{ background: "rgba(248, 250, 252, 0.7)" }} ref={appStoreSectionRef}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12 transition-all duration-700" style={{ opacity: appStoreVisible ? 1 : 0, transform: appStoreVisible ? "translateY(0)" : "translateY(30px)" }}>
              <h2 className="text-3xl font-bold">Supports <span className="font-black" style={{ color: "#F97316" }}>Both</span> <span className="bc-gradient-text">Versions</span></h2>
              <p className="text-gray-500 mt-3">Available on iOS and Android — download now and get started.</p>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-16 transition-all duration-700 delay-200" style={{ opacity: appStoreVisible ? 1 : 0, transform: appStoreVisible ? "translateY(0)" : "translateY(30px)" }}>
              <div className="flex items-end gap-6">
                <MiniPhone delay={0} />
                <MiniPhone delay={0.8} />
              </div>
              <div className="space-y-4 flex flex-col items-center">
                <div className="text-sm font-semibold text-gray-500 mb-2 tracking-wide uppercase">Download Now</div>
                <a href="#" className="flex items-center gap-3 px-6 py-3.5 rounded-full font-semibold text-white bg-black transition-all duration-300 hover:scale-105 hover:shadow-xl" style={{ minWidth: "180px" }}>
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
                  <div><div className="text-xs opacity-70">Download on the</div><div className="text-sm font-bold">App Store</div></div>
                </a>
                <a href="#" className="flex items-center gap-3 px-6 py-3.5 rounded-full font-semibold text-white bg-black transition-all duration-300 hover:scale-105 hover:shadow-xl" style={{ minWidth: "180px" }}>
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white"><path d="M3.18 23.76c.3.17.64.24.99.19l13.07-7.54-2.83-2.83-11.23 10.18zm14.14-9.41L4.1.54C3.77.36 3.4.3 3.05.38l11.97 11.97 2.3-1.33-.14-.67zm3.26-1.88L18.3 11.1l-2.21 1.27 2.21 2.21 2.28-1.32c.65-.38.65-1.33 0-1.71l.0-.08zM3.05.38L.73 1.7C.08 2.08.08 3.03.73 3.41l2.32 1.34L14.97 12 3.05.38z" /></svg>
                  <div><div className="text-xs opacity-70">Get it on</div><div className="text-sm font-bold">Google Play</div></div>
                </a>
                <div className="mt-6 text-center">
                  <div className="text-xs text-gray-400">Free to download &bull; Available in 3 languages</div>
                  <div className="flex items-center justify-center gap-1 mt-2">
                    {Array(5).fill(null).map((_, i) => (<span key={i} className="text-yellow-400 text-sm">{"\u2605"}</span>))}
                    <span className="text-xs text-gray-400 ml-1">4.8/5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
