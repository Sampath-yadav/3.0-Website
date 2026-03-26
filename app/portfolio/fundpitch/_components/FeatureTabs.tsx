"use client";

import { useState, type ReactNode } from "react";
import {
  Building2, Landmark, BriefcaseBusiness, Wrench, Package, HandCoins,
  ShieldCheck, Users, BarChart3, MessageCircle, Globe, Bell,
} from "lucide-react";

interface Feature {
  ico: ReactNode;
  title: string;
  desc: string;
}

interface Role {
  ico: ReactNode;
  label: string;
  perspective: string;
  summary: string;
  features: Feature[];
}

const ROLES: Role[] = [
  {
    ico: <Building2 size={14} />,
    label: "Company",
    perspective: "Company perspective",
    summary: "How companies present and manage their profiles",
    features: [
      { ico: <ShieldCheck size={20} />, title: "Company profile", desc: "Create rich profiles with business verticals, ownership, and team details" },
      { ico: <Users size={20} />, title: "Document vault", desc: "Upload financials, pitch decks, and cap tables in a secure repository" },
      { ico: <BarChart3 size={20} />, title: "Stakeholder invites", desc: "Bring in advisors, bankers, and investors to review your materials" },
      { ico: <MessageCircle size={20} />, title: "Deal tracking", desc: "Monitor expressions of interest and track collaboration progress" },
    ],
  },
  {
    ico: <Landmark size={14} />,
    label: "Merchant Banker",
    perspective: "Merchant Banker perspective",
    summary: "How SEBI-registered bankers discover and evaluate deals",
    features: [
      { ico: <BarChart3 size={20} />, title: "Deal discovery", desc: "Browse verified companies with complete business and financial profiles" },
      { ico: <ShieldCheck size={20} />, title: "Due diligence view", desc: "Access financials, cap tables, and documents in a structured data room" },
      { ico: <MessageCircle size={20} />, title: "Mandate management", desc: "Take mandates, structure deals, and present to institutional investors" },
      { ico: <Globe size={20} />, title: "Network insights", desc: "Connect with verified companies and track endorsement history" },
    ],
  },
  {
    ico: <BriefcaseBusiness size={14} />,
    label: "Advisor / SME",
    perspective: "Advisor / SME perspective",
    summary: "How subject matter experts contribute and collaborate",
    features: [
      { ico: <Users size={20} />, title: "Expert review", desc: "Review company materials and provide domain-specific inputs and feedback" },
      { ico: <MessageCircle size={20} />, title: "Expression system", desc: "Share interest via audio or text through structured communication channels" },
      { ico: <BarChart3 size={20} />, title: "Advisory profile", desc: "Showcase expertise and get discovered by companies seeking guidance" },
      { ico: <Globe size={20} />, title: "Endorsements", desc: "Build credibility through verified endorsements from collaborators" },
    ],
  },
  {
    ico: <Wrench size={14} />,
    label: "Service Provider",
    perspective: "Service Provider perspective",
    summary: "How service providers offer and manage their services",
    features: [
      { ico: <BarChart3 size={20} />, title: "Service catalog", desc: "List professional services and get matched with companies that need them" },
      { ico: <Users size={20} />, title: "Collaboration hub", desc: "Work alongside founders and bankers within a shared workspace" },
      { ico: <ShieldCheck size={20} />, title: "Secure sharing", desc: "Exchange sensitive documents with controlled access and audit trails" },
      { ico: <MessageCircle size={20} />, title: "Engagement tracking", desc: "Monitor interest signals and manage ongoing service relationships" },
    ],
  },
  {
    ico: <Package size={14} />,
    label: "Product Client",
    perspective: "Product Client perspective",
    summary: "How clients evaluate and engage with products",
    features: [
      { ico: <BarChart3 size={20} />, title: "Product overview", desc: "Explore detailed product information, traction metrics, and business models" },
      { ico: <MessageCircle size={20} />, title: "Direct communication", desc: "Reach out to companies and express interest in their products" },
      { ico: <ShieldCheck size={20} />, title: "Document access", desc: "Request and review shared materials with permission-based controls" },
      { ico: <Users size={20} />, title: "Evaluation tools", desc: "Compare offerings and track interactions across multiple companies" },
    ],
  },
  {
    ico: <HandCoins size={14} />,
    label: "Investor",
    perspective: "Investor perspective",
    summary: "How investors discover opportunities and express interest",
    features: [
      { ico: <BarChart3 size={20} />, title: "Deal pipeline", desc: "Browse pre-IPO and growth-stage companies vetted by merchant bankers" },
      { ico: <MessageCircle size={20} />, title: "Express interest", desc: "Submit structured expressions of interest with terms and conditions" },
      { ico: <Globe size={20} />, title: "Portfolio view", desc: "Track all companies you follow and monitor engagement history" },
      { ico: <Bell size={20} />, title: "Smart alerts", desc: "Get notified when matching opportunities or updates arise" },
    ],
  },
];

export default function FeatureTabs() {
  const [activeIdx, setActiveIdx] = useState(0);
  const role = ROLES[activeIdx];

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10">
        {ROLES.map((r, i) => (
          <button
            key={r.label}
            onClick={() => setActiveIdx(i)}
            className={[
              "inline-flex items-center gap-1.5 py-1.5 px-3.5 rounded-full text-[0.75rem] font-semibold border transition-all duration-200 cursor-pointer",
              activeIdx === i
                ? "border-[#ff5c35] text-[#ff5c35] bg-[#fff7ed]"
                : "border-[#e0e4e8] text-[#555] bg-[#f5f8fa] hover:border-[#ff5c35]/50 hover:text-[#ff5c35]",
            ].join(" ")}
          >
            <span className="text-[#ff5c35]">{r.ico}</span>
            {r.label}
          </button>
        ))}
      </div>

      <p className="text-[0.82rem] font-semibold text-[#ff5c35] mb-5">
        {role.perspective}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8">
        {role.features.map((f) => (
          <div
            key={f.title}
            className="group p-7 md:p-9 rounded-2xl bg-[#fff7ed] border border-[#ffedd5] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgba(255,92,53,0.12)] hover:border-[#ff5c35]/40"
          >
            <div className="w-14 h-14 rounded-xl bg-[#ffedd5] group-hover:bg-[#fed7aa] transition-colors duration-300 flex items-center justify-center text-[#ff5c35] mb-6">
              {f.ico && typeof f.ico === 'object' && 'props' in f.ico ? (
                <f.ico.type {...f.ico.props} size={28} />
              ) : (
                f.ico
              )}
            </div>
            <h4 className="text-xl font-bold text-[#222] mb-2.5">{f.title}</h4>
            <p className="text-[0.95rem] text-[#555] leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>

      <p className="text-center text-[0.78rem] text-[#556] mt-6">
        {role.summary}
      </p>
    </div>
  );
}
