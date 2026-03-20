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

    setActiveIndex(currentIndex);

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

          <p className="mt-6 text-lg max-w-3xl mx-auto bg-gradient-to-r from-[#ff4d4d] via-[#a855f7] to-[#3b82f6] bg-clip-text text-transparent font-medium">
            We design and build scalable full-stack products, intelligent AI workflows,
            and autonomous agents that transform how software operates and grows.
          </p>
        </section>

        {/* SERVICES */}

        <section className="max-w-[960px] mx-auto py-10 md:py-20 px-4 sm:px-6">
          <div ref={servicesRef} className="flex flex-col md:flex-row relative">

            {/* LEFT MENU (Desktop) */}

            <div className="hidden md:block w-[170px] shrink-0 sticky top-[100px] h-fit">

              <ul className="space-y-44">

                {SECTIONS.map((section, i) => (

                  <li key={section.id}>

                    <button
                      onClick={() => scrollToSection(i)}
                      className={`flex items-center gap-2 text-sm font-semibold tracking-wide transition-colors
          ${activeIndex === i ? "text-[#E8573A]" : "text-gray-400"}`}
                    >
                      {section.label} →
                    </button>

                  </li>

                ))}

              </ul>

            </div>

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

            {/* TRACKER (Desktop) */}

            <div className="relative mx-8 hidden md:block" style={{ width: LINE_WIDTH }}>

              <div className="absolute top-0 left-0 h-full w-full bg-gray-300 rounded-full" />

              <div
                className="absolute top-0 left-0 bg-[#E8573A] rounded-full transition-all duration-100"
                style={{
                  width: LINE_WIDTH,
                  height: orangePx,
                }}
              />

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
        <section className="relative py-16 md:py-36 text-center px-4 sm:px-6 mt-16 md:mt-32 overflow-hidden">


          <div className="max-w-3xl mx-auto">

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight text-gray-900">
              Engineering intelligent systems for
              <br />
              ambitious brands
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Ready to move beyond ordinary software? We design scalable
              products, AI-driven workflows, and autonomous agents that
              engage users and streamline operations.
            </p>

            <Link href="/contact-us">
              <button className="mt-8 bg-black text-white px-7 py-3 rounded-full hover:opacity-90 transition">
                Let&apos;s Collaborate ↗
              </button>
            </Link>

          </div>

        </section>



        <Footer />
      </main>
    </>
  );
}
