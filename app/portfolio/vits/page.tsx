"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Cpu, Zap, Shield, Database, ArrowRight, Activity,
  Globe, BarChart3, Lock, Server, Layers, Radio,
} from "lucide-react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import Link from "next/link";

/* ─── AnimateOnScroll ─── */
type AnimDirection = "up" | "left" | "right" | "scale";

const hiddenMap: Record<AnimDirection, string> = {
  up: "translate-y-8 opacity-0",
  left: "-translate-x-10 opacity-0",
  right: "translate-x-10 opacity-0",
  scale: "scale-[0.97] opacity-0",
};
const visibleClass = "translate-y-0 translate-x-0 scale-100 opacity-100";

function Animate({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  direction?: AnimDirection;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.unobserve(el); } },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={[
        "transition-all duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
        vis ? visibleClass : hiddenMap[direction],
        className,
      ].join(" ")}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ─── Counter ─── */
function Counter({ target, suffix = "+", className = "" }: { target: number; suffix?: string; className?: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting && !started) { setStarted(true); obs.unobserve(el); } },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let cur = 0;
    const step = Math.max(1, Math.floor(target / 40));
    const id = setInterval(() => {
      cur += step;
      if (cur >= target) { cur = target; clearInterval(id); }
      setCount(cur);
    }, 30);
    return () => clearInterval(id);
  }, [started, target]);

  return <div ref={ref} className={className}>{count}{suffix}</div>;
}

/* ─── Data ─── */
const META = [
  { label: "Client", value: "VDTS" },
  { label: "Industry", value: "Enterprise Tech" },
  { label: "Platform", value: "Web Platform" },
  { label: "Role", value: "Design & Dev" },
] as const;

const FEATURES = [
  {
    ico: <Cpu size={28} />,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    title: "Edge Processing Engine",
    desc: "Localized data processing at the edge ensures minimal latency and maximum reactivity for real-time systems, handling millions of data points every second.",
    bullets: ["Real-time volumetric data analysis", "Low-latency edge computation", "Intelligent packet prioritization"],
  },
  {
    ico: <Shield size={28} />,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    title: "Secure Transmission",
    desc: "End-to-end encrypted data pathways with hardware-level security protocols ensure your sensitive volumetric data remains protected throughout the transmission lifecycle.",
    bullets: ["Military-grade encryption", "Multi-layered security protocols", "Automated threat detection & auditing"],
  },
  {
    ico: <Database size={28} />,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    title: "Volumetric Storage",
    desc: "Adaptive storage systems that scale with your data volume, utilizing intelligent compression and rapid retrieval mechanisms for historical analysis.",
    bullets: ["Scalable cloud storage integration", "Intelligent data compression", "High-speed data indexing"],
  },
  {
    ico: <Zap size={28} />,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    title: "Rapid Deployment",
    desc: "Engineered for quick integration with existing infrastructure, allowing your teams to leverage advanced intelligence without significant downtime.",
    bullets: ["Plug-and-play architecture", "Extensive API-first documentation", "Automated system optimization"],
  },
];

const STATS = [
  { target: 99, suffix: ".9%", label: "Uptime SLA" },
  { target: 10, suffix: "ms", label: "Avg Latency" },
  { target: 5, suffix: "M+", label: "Packets / sec" },
  { target: 256, suffix: "-bit", label: "Encryption" },
] as const;

const ARCH_LAYERS = [
  { ico: <Radio size={20} />, label: "Ingestion Layer", desc: "High-throughput data ingestion from IoT, APIs, and streaming sources" },
  { ico: <Layers size={20} />, label: "Processing Core", desc: "Distributed compute engine with real-time transformation pipelines" },
  { ico: <Server size={20} />, label: "Storage Fabric", desc: "Tiered storage with hot, warm, and cold data management" },
  { ico: <Lock size={20} />, label: "Security Mesh", desc: "Zero-trust architecture with end-to-end encryption at every layer" },
  { ico: <Globe size={20} />, label: "Delivery Network", desc: "Global CDN with edge caching for sub-millisecond data access" },
  { ico: <BarChart3 size={20} />, label: "Analytics Hub", desc: "Real-time dashboards, alerting, and business intelligence tools" },
];

const WORKFLOW = [
  { step: "01", title: "Ingest", desc: "Data flows in from sensors, APIs, and enterprise systems through secure endpoints." },
  { step: "02", title: "Process", desc: "Edge nodes process and transform data in real-time with intelligent routing." },
  { step: "03", title: "Secure", desc: "Every packet is encrypted, verified, and audited before transmission." },
  { step: "04", title: "Deliver", desc: "Processed data reaches its destination with guaranteed low-latency delivery." },
];

/* ─── Page ─── */
export default function VITSPage() {
  return (
    <>
      <Header />
      <main className="bg-white antialiased overflow-x-hidden selection:bg-orange-500/20">

        {/* ── HERO ── */}
        <section className="relative overflow-hidden pt-40 md:pt-48 pb-16 md:pb-24">
          {/* Decorative blobs */}
          <div className="pointer-events-none absolute -top-32 right-[-12%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.06),transparent_60%)]" />
          <div className="pointer-events-none absolute bottom-[-10%] left-[-8%] w-[350px] h-[350px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.05),transparent_60%)]" />
          {/* Subtle grid */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

          <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              {/* Left — Text */}
              <div>
                <Animate>
                  <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-neutral-200 bg-white/80 backdrop-blur text-xs font-semibold text-neutral-500 mb-7 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                    Volumetric Data Transmission System
                  </div>
                </Animate>

                <Animate delay={60}>
                  <h1 className="text-[3.2rem] sm:text-6xl lg:text-[4.5rem] font-extrabold tracking-[-0.04em] leading-[0.92] text-neutral-900">
                    <span className="text-orange-500">VDTS</span>
                    <br />
                    <span className="text-neutral-900">High-Efficiency</span>
                    <br />
                    <span className="bg-gradient-to-r from-neutral-900 to-neutral-500 bg-clip-text text-transparent">Data Platform</span>
                  </h1>
                </Animate>

                <Animate delay={140}>
                  <p className="mt-6 text-[0.95rem] sm:text-base lg:text-[1.05rem] text-neutral-500 max-w-[460px] leading-relaxed">
                    Revolutionizing data transmission with volumetric efficiency and
                    intelligent processing systems for large-scale enterprise clients.
                    Built for speed, security, and infinite scalability.
                  </p>
                </Animate>

                <Animate delay={220}>
                  <div className="grid grid-cols-2 gap-3 mt-8 max-w-[420px]">
                    {META.map((m) => (
                      <div
                        key={m.label}
                        className="flex flex-col gap-1 px-5 py-4 rounded-xl bg-neutral-50 border border-neutral-200/80 transition-colors duration-200 hover:border-orange-500/30 shadow-sm"
                      >
                        <span className="text-[0.62rem] uppercase tracking-[0.2em] text-neutral-400 font-bold">{m.label}</span>
                        <span className="text-[0.95rem] font-bold text-neutral-800">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </Animate>
              </div>

              {/* Right — Image */}
              <Animate direction="right" delay={120}>
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-50 shadow-[0_32px_80px_rgba(0,0,0,0.08)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/svg images/VITS.svg"
                      alt="VDTS System Overview"
                      className="w-full h-auto"
                    />
                  </div>
                  {/* Floating accent card */}
                  <div className="absolute -bottom-5 -left-5 bg-white rounded-xl border border-neutral-200 shadow-lg px-5 py-4 flex items-center gap-3 z-10">
                    <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                      <Activity size={20} className="text-orange-500" />
                    </div>
                    <div>
                      <div className="text-xs text-neutral-400 font-medium">Throughput</div>
                      <div className="text-sm font-bold text-neutral-800">5M+ packets/sec</div>
                    </div>
                  </div>
                  {/* Floating latency card */}
                  <div className="absolute -top-4 -right-4 bg-white rounded-xl border border-neutral-200 shadow-lg px-5 py-4 flex items-center gap-3 z-10">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                      <Zap size={20} className="text-blue-500" />
                    </div>
                    <div>
                      <div className="text-xs text-neutral-400 font-medium">Latency</div>
                      <div className="text-sm font-bold text-neutral-800">&lt;10ms avg</div>
                    </div>
                  </div>
                </div>
              </Animate>
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="py-16 md:py-20 bg-neutral-950">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {STATS.map((s, i) => (
                <Animate key={s.label} delay={i * 80}>
                  <div className="text-center py-8 sm:py-10">
                    <Counter
                      target={s.target}
                      suffix={s.suffix}
                      className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-orange-500 leading-none"
                    />
                    <div className="text-sm text-neutral-400 mt-3 font-medium">{s.label}</div>
                  </div>
                </Animate>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="py-16 md:py-24 bg-neutral-50 border-y border-neutral-200">
          <div className="max-w-6xl mx-auto px-6">
            <Animate className="text-center mb-14">
              <h2 className="text-[2.5rem] sm:text-5xl font-extrabold tracking-[-0.04em] leading-[0.95] text-neutral-900">
                How It <span className="text-orange-500">Works</span>
              </h2>
              <p className="text-neutral-500 max-w-lg mx-auto mt-3 text-[0.95rem] leading-relaxed">
                From ingestion to delivery — a seamless data pipeline built for enterprise scale.
              </p>
            </Animate>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {WORKFLOW.map((w, i) => (
                <Animate key={w.step} delay={i * 100}>
                  <div className="relative p-7 rounded-2xl bg-white border border-neutral-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full group">
                    <div className="text-5xl font-black text-orange-500/10 absolute top-4 right-5 group-hover:text-orange-500/20 transition-colors duration-300">
                      {w.step}
                    </div>
                    <div className="relative z-10">
                      <div className="text-xs font-bold text-orange-500 uppercase tracking-[0.15em] mb-3">Step {w.step}</div>
                      <h3 className="text-xl font-bold text-neutral-900 mb-2">{w.title}</h3>
                      <p className="text-sm text-neutral-500 leading-relaxed">{w.desc}</p>
                    </div>
                    {i < WORKFLOW.length - 1 && (
                      <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                        <ArrowRight size={16} className="text-orange-400" />
                      </div>
                    )}
                  </div>
                </Animate>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <Animate className="mb-14">
              <h2 className="text-[2.5rem] sm:text-5xl font-extrabold tracking-[-0.04em] leading-[0.95] text-neutral-900">
                Core <span className="text-orange-500">Capabilities</span>
              </h2>
              <p className="text-neutral-500 max-w-lg mt-3 text-[0.95rem] leading-relaxed">
                VDTS delivers state-of-the-art volumetric data processing, ensuring speed, security, and scalability for the most demanding environments.
              </p>
            </Animate>

            <div className="grid md:grid-cols-2 gap-6">
              {FEATURES.map((f, i) => (
                <Animate key={f.title} delay={i * 80}>
                  <div className="group relative p-8 md:p-10 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-1 overflow-hidden h-full">
                    {/* Glow */}
                    <div className="pointer-events-none absolute -top-20 -right-20 w-40 h-40 rounded-full bg-orange-500/5 blur-[50px] group-hover:bg-orange-500/10 transition-all duration-500" />

                    <div className={`w-14 h-14 rounded-xl ${f.bg} flex items-center justify-center ${f.color} mb-6 relative z-10`}>
                      {f.ico}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 relative z-10">{f.title}</h3>
                    <p className="text-neutral-400 mb-6 leading-relaxed relative z-10">{f.desc}</p>
                    <ul className="space-y-2 relative z-10">
                      {f.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2.5 text-sm text-neutral-500">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Animate>
              ))}
            </div>
          </div>
        </section>

        {/* ── ARCHITECTURE ── */}
        <section className="py-16 md:py-24 bg-neutral-50 border-y border-neutral-200">
          <div className="max-w-6xl mx-auto px-6">
            <Animate className="text-center mb-14">
              <h2 className="text-[2.5rem] sm:text-5xl font-extrabold tracking-[-0.04em] leading-[0.95] text-neutral-900">
                System <span className="text-orange-500">Architecture</span>
              </h2>
              <p className="text-neutral-500 max-w-lg mx-auto mt-3 text-[0.95rem] leading-relaxed">
                Six interconnected layers working in harmony to deliver enterprise-grade performance.
              </p>
            </Animate>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {ARCH_LAYERS.map((a, i) => (
                <Animate key={a.label} delay={i * 70}>
                  <div className="group flex gap-4 p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm hover:shadow-md hover:border-orange-500/30 transition-all duration-300 hover:-translate-y-0.5 h-full">
                    <div className="w-11 h-11 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 shrink-0 group-hover:bg-orange-500/15 transition-colors duration-300">
                      {a.ico}
                    </div>
                    <div>
                      <h4 className="text-[1rem] font-bold text-neutral-900 mb-1">{a.label}</h4>
                      <p className="text-sm text-neutral-500 leading-relaxed">{a.desc}</p>
                    </div>
                  </div>
                </Animate>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <Animate>
              <div className="relative max-w-3xl mx-auto text-center py-14 px-8 md:py-20 md:px-16 rounded-3xl bg-neutral-950 overflow-hidden shadow-2xl">
                {/* Decorative glow */}
                <div className="pointer-events-none absolute -top-16 -right-16 w-56 h-56 bg-orange-500/10 rounded-full blur-[80px]" />
                <div className="pointer-events-none absolute -bottom-16 -left-16 w-56 h-56 bg-blue-500/8 rounded-full blur-[80px]" />

                <h3 className="text-2xl md:text-3xl font-bold mb-4 relative z-10 text-white">
                  Ready to Transform Your Data Infrastructure?
                </h3>
                <p className="text-neutral-400 leading-relaxed max-w-lg mx-auto mb-8 relative z-10">
                  VDTS isn&apos;t just data transmission — it&apos;s an intelligent platform
                  that processes, secures, and delivers volumetric data at enterprise scale.
                </p>
                <Link
                  href="/contact-us"
                  className="relative z-10 inline-flex items-center gap-2.5 py-3.5 px-10 rounded-full bg-orange-500 text-white text-[1rem] font-bold shadow-[0_4px_20px_rgba(249,115,22,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(249,115,22,0.45)] hover:scale-[1.02]"
                >
                  Let&apos;s Collaborate
                  <ArrowRight size={18} />
                </Link>
              </div>
            </Animate>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
