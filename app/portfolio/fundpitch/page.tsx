"use client";

import Image from "next/image";
import Link from "next/link";
import {
  CircleCheck, Rocket, TriangleAlert, Palette,
} from "lucide-react";
import AnimateOnScroll from "./_components/AnimateOnScroll";
import Counter from "./_components/Counter";
import ProblemSolution from "./_components/ProblemSolution";
import FeatureTabs from "./_components/FeatureTabs";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

const META = [
  { label: "Client", value: "FundPitch" },
  { label: "Industry", value: "FinTech" },
  { label: "Platform", value: "Web App" },
  { label: "Role", value: "Design & Dev" },
] as const;

const SWOT = [
  { icon: <CircleCheck size={16} />, title: "Strengths", items: ["Secure & structured platform", "Clear target audience", "Strong real-world use case"] },
  { icon: <Rocket size={16} />, title: "Opportunities", items: ["Growing startup ecosystem", "Analytics integrations", "Global market expansion"] },
  { icon: <TriangleAlert size={16} />, title: "Challenges", items: ["Invite-only limits early reach", "Requires financial literacy"] },
  { icon: <Palette size={16} />, title: "UX Insights", items: ["Clean, professional interface", "Structured business flow", "Room for mobile enhancement"] },
];

const STATS = [
  { target: 10, suffix: "+", label: "Modules" },
  { target: 6, suffix: "+", label: "User Roles" },
  { target: 100, suffix: "%", label: "SEBI Compliant" },
] as const;

const IMG = {
  macbook: "/fundpitch/macbook.png",
  screen: "/fundpitch/Home Individual Perspective (1) 1.png",
  phone: "/fundpitch/378_rectangle.png",
  phoneScreen: "/fundpitch/Home Company Perspective  + Notifications 1 (1).png",
} as const;

function MacBookMockup({ screenSrc, alt }: { screenSrc: string; alt: string }) {
  return (
    <div className="relative w-full max-w-[900px] mx-auto">
      <div
        className="absolute z-[1] overflow-hidden"
        style={{ top: "6.6%", left: "11.1%", width: "77.8%", height: "81.8%", borderRadius: "4px 4px 0 0" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={screenSrc}
          alt={alt}
          className="w-full h-full object-cover object-left-top"
          loading="eager"
        />
      </div>
      <Image
        src={IMG.macbook}
        alt="MacBook Pro"
        width={704}
        height={435}
        className="relative z-[2] w-full h-auto"
        style={{ filter: "drop-shadow(0 32px 64px rgba(0,0,0,0.20))" }}
        priority
      />
    </div>
  );
}

function PhoneMockup({ screenSrc, alt }: { screenSrc: string; alt: string }) {
  return (
    <div className="relative w-full">
      <div
        className="absolute z-[1] overflow-hidden"
        style={{ top: "3.2%", left: "5.8%", width: "88.4%", height: "93.6%", borderRadius: "28px" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={screenSrc}
          alt={alt}
          className="w-full h-full object-contain object-center"
          style={{ background: "#fff" }}
          loading="eager"
        />
      </div>
      <Image
        src={IMG.phone}
        alt="iPhone"
        width={195}
        height={400}
        className="relative z-[2] w-full h-auto"
        style={{ filter: "drop-shadow(0 20px 40px rgba(255, 92, 53, 0.05))" }}
        priority
      />
    </div>
  );
}

export default function FundPitchPage() {
  return (
    <>
      <Header />
      <main className="antialiased overflow-x-hidden selection:bg-[#ff5c35]/20 relative z-10 bg-white/80">

        {/* HERO */}
        <section className="relative overflow-hidden min-h-screen flex items-center">
          <div className="pointer-events-none absolute -top-40 right-[-10%] w-[480px] h-[480px] rounded-full bg-[radial-gradient(circle,rgba(255, 92, 53, 0.06),transparent_60%)]" />
          <div className="pointer-events-none absolute bottom-0 left-[-8%] w-[280px] h-[280px] rounded-full bg-[radial-gradient(circle,rgba(255, 92, 53, 0.04),transparent_60%)]" />

          <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-14 items-center">

              <div>
                <AnimateOnScroll>
                  <h1 className="text-[3.5rem] sm:text-6xl lg:text-[5rem] font-extrabold tracking-[-0.045em] leading-[0.92]">
                    <span className="text-[#111]">Fund</span>
                    <span className="text-[#2595BE]">Pitch</span>
                  </h1>
                </AnimateOnScroll>

                <AnimateOnScroll delay={80}>
                  <p className="mt-5 text-[0.95rem] sm:text-base lg:text-[1.05rem] text-[#6b7280] max-w-[440px] leading-relaxed">
                    An invite-only digital platform that connects companies with
                    SEBI-registered merchant bankers, investment bankers, and
                    financial partners. It helps businesses securely share important
                    information and collaborate with the right stakeholders to
                    support their growth and funding journey.
                  </p>
                </AnimateOnScroll>

                <AnimateOnScroll delay={180}>
                  <div className="grid grid-cols-2 gap-3.5 mt-8 max-w-[400px]">
                    {META.map((m) => (
                      <div
                        key={m.label}
                        className="flex flex-col gap-1 px-5 py-4 rounded-xl bg-[#f9fafb] border border-[#eee] transition-colors duration-200 hover:border-[#ff5c35]/30 shadow-sm"
                      >
                        <span className="text-[0.62rem] uppercase tracking-[0.2em] text-[#aaa] font-bold">
                          {m.label}
                        </span>
                        <span className="text-[0.95rem] font-bold text-[#222]">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </AnimateOnScroll>
              </div>

              <AnimateOnScroll direction="right" delay={120}>
                <div className="relative pb-10">
                  <MacBookMockup
                    screenSrc={IMG.screen}
                    alt="FundPitch — WheelApp Dashboard"
                  />
                  <div
                    className="absolute z-[10] w-[24%] phone-pop-in"
                    style={{ bottom: "2%", right: "-2%" }}
                  >
                    <div className="phone-float">
                      <PhoneMockup
                        screenSrc={IMG.phoneScreen}
                        alt="FundPitch — Notifications"
                      />
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* PROBLEM & SOLUTION */}
        <section className="py-14 md:py-20 bg-[#f9fafb] border-y border-[#eee]">
          <div className="max-w-5xl mx-auto px-6">
            <AnimateOnScroll className="text-center mb-10 md:mb-14">
              <h2 className="text-[2.5rem] sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-[-0.04em] leading-[0.95] text-[#111]">
                The <span className="text-[#2595BE]">Problem</span> &amp; Solution
              </h2>
              <p className="text-[0.88rem] sm:text-[0.95rem] lg:text-base text-[#6b7280] max-w-md mx-auto mt-2.5 leading-relaxed">
                Growth-stage companies struggle to connect with financial partners.
                We built a structured bridge.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <ProblemSolution />
            </AnimateOnScroll>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-14 md:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <AnimateOnScroll className="mb-8 md:mb-12">
              <h2 className="text-[2.5rem] sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-[-0.04em] leading-[0.95] text-[#111]">
                Key Features &amp; <span className="text-[#2595BE]">Screens</span>
              </h2>
              <p className="text-[0.88rem] sm:text-[0.95rem] lg:text-base text-[#777] max-w-md mt-2.5 leading-relaxed">
                Built for 6 distinct user roles with seamless, interactive modules designed for real-time collaboration and structured workflows.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={60}>
              <FeatureTabs />
            </AnimateOnScroll>
          </div>
        </section>

        {/* IMPACT */}
        <section className="py-14 md:py-20 bg-white border-t border-[#eee]">
          <div className="max-w-5xl mx-auto px-6">
            <AnimateOnScroll className="text-center mb-10 md:mb-14">
              <h2 className="text-[2.5rem] sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-[-0.04em] leading-[0.95] text-[#111]">
                Impact &amp; <span className="text-[#2595BE]">Takeaways</span>
              </h2>
              <p className="text-[0.88rem] sm:text-[0.95rem] lg:text-base text-[#6b7280] max-w-md mx-auto mt-2.5 leading-relaxed">
                How FundPitch connects companies with financial partners — securely and at scale.
              </p>
            </AnimateOnScroll>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 md:mb-16">
              {STATS.map((s, i) => (
                <AnimateOnScroll key={s.label} delay={i * 70}>
                  <div className="text-center py-8 sm:py-12 px-5 bg-[#f9fafb] rounded-2xl border border-[#eee] transition-all duration-300 hover:-translate-y-1 hover:border-[#ff5c35]/50 shadow-sm">
                    <Counter
                      target={s.target}
                      suffix={s.suffix}
                      className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#ff5c35] leading-none"
                    />
                    <div className="text-[0.85rem] sm:text-[0.9rem] text-[#6b7280] mt-2.5 font-semibold">{s.label}</div>
                  </div>
                </AnimateOnScroll>
              ))}
              <AnimateOnScroll delay={210}>
                <div className="text-center py-8 sm:py-12 px-5 bg-[#f9fafb] rounded-2xl border border-[#eee] transition-all duration-300 hover:-translate-y-1 hover:border-[#ff5c35]/50 shadow-sm">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#ff5c35] leading-none">&infin;</div>
                  <div className="text-[0.85rem] sm:text-[0.9rem] text-[#6b7280] mt-2.5 font-semibold">Scalable</div>
                </div>
              </AnimateOnScroll>
            </div>

            {/* SWOT */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-12 md:mb-16 max-w-4xl mx-auto">
              {SWOT.map((s, i) => (
                <AnimateOnScroll key={s.title} delay={i * 70}>
                  <div className="p-7 md:p-9 rounded-2xl bg-[#f9fafb] border border-[#eee] transition-all duration-300 hover:-translate-y-1 hover:border-[#ff5c35]/35 h-full shadow-sm">
                    <h4 className="text-[1.05rem] font-bold mb-4 flex items-center gap-2.5 text-[#222]">
                      <span className="text-[#ff5c35]">{s.icon}</span>{s.title}
                    </h4>
                    <ul className="space-y-2">
                      {s.items.map((item) => (
                        <li key={item} className="flex items-start text-[0.92rem] text-[#6b7280] leading-relaxed">
                          <span className="text-[#ff5c35] font-bold mr-2.5 mt-1 shrink-0 text-lg leading-none">&rsaquo;</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            {/* CTA */}
            <AnimateOnScroll>
              <div className="relative max-w-3xl mx-auto text-center py-12 px-8 md:py-16 md:px-16 rounded-3xl bg-[#f9fafb] border border-[#eee] overflow-hidden shadow-sm">
                <div className="pointer-events-none absolute -top-12 -right-12 w-48 h-48 bg-[#ff5c35]/5 rounded-full blur-[60px]" />
                <div className="pointer-events-none absolute -bottom-12 -left-12 w-48 h-48 bg-[#ff5c35]/5 rounded-full blur-[60px]" />

                <h3 className="text-xl md:text-2xl font-bold mb-3 relative z-10 text-[#222]">Key Takeaway</h3>
                <p className="text-[1rem] md:text-[1.1rem] text-[#6b7280] leading-relaxed max-w-lg mx-auto mb-8 relative z-10">
                  FundPitch isn&apos;t just file-sharing — it&apos;s a collaboration
                  ecosystem for companies and financial professionals.
                </p>
                <Link
                  href="https://fundpitch.com"
                  target="_blank"
                  className="relative z-10 inline-flex items-center gap-2.5 py-3.5 px-10 rounded-full bg-[#ff5c35] text-white text-[1rem] font-bold shadow-[0_4px_16px_rgba(255,92,53,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(255,92,53,0.4)] hover:scale-[1.02]"
                >
                  Visit FundPitch
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
