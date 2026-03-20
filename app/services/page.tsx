"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Header from "../../components/Header/Header";
import CTASection from "../../components/CTASection/CTASection";
import Footer from "../../components/Footer/Footer";
import Image from "next/image";
import Link from "next/link";

type Section = {
  id: string;
  label: string;
  title: string;
  description: string;
  icon: string;
  listHeading: string;
  bullets: string[];
  closing: string;
};

const SECTIONS: Section[] = [
  {
    id: "fullstack",
    label: "Full-Stack Apps",
    title: "Full-Stack Product Engineering",
    description:
      "We design and engineer complete, production-ready products — covering frontend, backend, data, and infrastructure.",
    icon: "/icons/fullstack.png",
    listHeading: "Our work spans:",
    bullets: [
      "modern web and mobile applications",
      "scalable APIs and backend systems",
      "clean architecture designed to evolve over time",
    ],
    closing:
      "Whether it's an early version or a growing product, we focus on building systems that are reliable, maintainable, and ready to scale.",
  },
  {
    id: "ai",
    label: "AI Workflows",
    title: "AI Workflows & Intelligent Automation",
    description:
      "We build workflows where systems don't just execute steps, but make informed decisions along the way.",
    icon: "/icons/aiworkflow.png",
    listHeading: "This includes:",
    bullets: [
      "automating complex, multi-step processes",
      "integrating intelligence into existing products",
      "reducing manual effort across operations and user flows",
    ],
    closing:
      "These workflows sit between traditional applications and fully autonomous systems — adding leverage without unnecessary complexity.",
  },
  {
    id: "agents",
    label: "Autonomous Agents",
    title: "Autonomous AI Agents",
    description:
      "We engineer agents that can reason, act, and operate independently within defined boundaries.",
    icon: "/icons/agents.png",
    listHeading: "These agents are designed to:",
    bullets: [
      "handle complex tasks end to end",
      "interact with tools, data, and systems",
      "adapt based on context and feedback",
    ],
    closing:
      "They go beyond simple automation, enabling products to perform work that previously required constant human involvement.",
  },
];

export default function ServicesPage() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [prevIndex, setPrevIndex] = useState<number>(0);
  const [orangePx, setOrangePx] = useState<number>(0);

  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = useCallback(() => {
    const servicesEl = servicesRef.current;
    if (!servicesEl) return;

    const sections = sectionRefs.current.filter(Boolean) as HTMLDivElement[];

    const scrollTop = window.scrollY;
    const viewportH = window.innerHeight;
    const trigger = viewportH * 0.35;

    let currentIndex = 0;

    sections.forEach((el, i) => {
      const top = el.getBoundingClientRect().top + scrollTop;
      if (scrollTop + trigger >= top) currentIndex = i;
    });

    setActiveIndex((prev) => {
      if (prev !== currentIndex) setPrevIndex(prev);
      return currentIndex;
    });

    const servicesTop = servicesEl.getBoundingClientRect().top + scrollTop;
    const servicesHeight = servicesEl.offsetHeight;

    const traveled = scrollTop + trigger - servicesTop;

    setOrangePx(Math.max(0, Math.min(traveled, servicesHeight)));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToSection = (index: number) => {
    const el = sectionRefs.current[index];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const LINE_WIDTH = 4;
  const DOT_SIZE = 12;

  // Dot and label Y positions
  const dotTop = Math.max(0, orangePx - DOT_SIZE / 2);
  const labelTop = dotTop - 6; // vertically centre the label on the dot

  return (
    <>
      <Header />

      <main
        ref={containerRef}
        className="relative pt-32"
      >
        {/* HERO */}

        <section className="relative text-center py-10 md:py-20 overflow-hidden px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-gray-900">
            Our Capabilities
          </h1>

          <p className="mt-6 text-lg max-w-3xl mx-auto opacity-80" style={{ background: "linear-gradient(90deg,#ff4d4d,#a855f7,#3b82f6)", WebkitBackgroundClip: "text", color: "transparent" }}>
            We design and build scalable full-stack products, intelligent AI workflows,
            and autonomous agents that transform how software operates and grows.
          </p>
        </section>

        {/* SERVICES */}

        <section className="max-w-[960px] mx-auto py-10 md:py-20 px-4 sm:px-6">
          <div ref={servicesRef} className="flex flex-col md:flex-row relative">

            {/* LEFT spacer — same width as before so layout doesn't shift */}
            <div className="hidden md:block w-[170px] shrink-0" />

            {/* MOBILE MENU */}
            <div className="flex md:hidden gap-2 mb-8 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-hide">
              {SECTIONS.map((section, i) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(i)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-colors shrink-0
                    ${activeIndex === i ? "bg-[#E8573A] text-white" : "bg-gray-100 text-gray-500"}`}
                >
                  {section.label}
                </button>
              ))}
            </div>

            {/* TRACKER LINE + DOT + FLOATING LABEL */}
            <div className="relative mx-8 hidden md:block" style={{ width: LINE_WIDTH }}>
              {/* Gray base line */}
              <div className="absolute top-0 left-0 h-full w-full bg-gray-300 rounded-full" />

              {/* Orange fill */}
              <div
                className="absolute top-0 left-0 bg-[#E8573A] rounded-full transition-all duration-100"
                style={{
                  width: LINE_WIDTH,
                  height: orangePx,
                }}
              />

              {/* Glowing dot */}
              <div
                style={{
                  position: "absolute",
                  top: `${dotTop}px`,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: `${DOT_SIZE}px`,
                  height: `${DOT_SIZE}px`,
                  borderRadius: "50%",
                  background: "#E8573A",
                  boxShadow: "0 0 0 3px rgba(232,87,58,0.20), 0 0 8px 2px rgba(232,87,58,0.35)",
                  transition: "top 0.08s linear",
                  zIndex: 2,
                }}
              />

              {/* Floating label container */}
              <div
                style={{
                  position: "absolute",
                  top: `${labelTop}px`,
                  right: `${LINE_WIDTH + 24}px`,
                  width: "170px",
                  height: "28px",
                  transition: "top 0.09s linear",
                  pointerEvents: "none",
                  overflow: "visible",
                }}
              >
                {SECTIONS.map((section, i) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(i)}
                    style={{
                      position: "absolute",
                      right: 0,
                      top: 0,
                      whiteSpace: "nowrap",
                      fontSize: "13px",
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      border: "none",
                      background: "none",
                      cursor: "pointer",
                      color: "#E8573A",
                      padding: 0,
                      opacity: activeIndex === i ? 1 : 0,
                      transform: activeIndex === i ? "translateY(0px)" : prevIndex === i ? "translateY(-8px)" : "translateY(8px)",
                      transition: "opacity 0.25s ease, transform 0.25s ease",
                      pointerEvents: activeIndex === i ? "auto" : "none",
                    }}
                  >
                    {section.label} →
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT CONTENT */}

            <div className="flex-1">

              {SECTIONS.map((section, i) => (

                <div
                  key={section.id}
                  ref={(el) => {
                    sectionRefs.current[i] = el;
                  }}
                  className="pb-20 scroll-mt-16 md:max-w-sm"
                >

                  <h2 className="text-xl font-bold mb-4">
                    {section.title}
                  </h2>

                  <p className="text-gray-600 mb-6">
                    {section.description}
                  </p>

                  <Image
                    src={section.icon}
                    alt={section.title}
                    width={160}
                    height={160}
                    className="mb-6"
                  />

                  <p className="font-medium mb-2">
                    {section.listHeading}
                  </p>

                  <ul className="space-y-1 mb-6 text-gray-600">

                    {section.bullets.map((b) => (
                      <li key={b}>• {b}</li>
                    ))}

                  </ul>

                  <p className="text-gray-400 mb-6">
                    {section.closing}
                  </p>

                  <Link href="/contact-us">
                    <button className="bg-black text-white rounded-full px-6 py-2 text-sm">
                      Connect to team
                    </button>
                  </Link>


                </div>

              ))}

            </div>

          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
