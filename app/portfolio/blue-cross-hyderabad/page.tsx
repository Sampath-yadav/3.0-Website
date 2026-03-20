"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

export default function BlueCrossPage() {
  const [activeIndex, setActiveIndex] = useState(1);

  const phones = [
    { id: 0, src: "/bluegross images/iMockup - Google Pixel 8 Pro (1).png", alt: "Telugu version", label: "తె" },
    { id: 1, src: "/bluegross images/iMockup - Google Pixel 8 Pro (2).png", alt: "English version", label: "En" },
    { id: 2, src: "/bluegross images/iMockup - Google Pixel 8 Pro (3).png", alt: "Hindi version", label: "हि" }
  ];

  const handlePrev = () => setActiveIndex((prev) => (prev === 0 ? phones.length - 1 : prev - 1));
  const handleNext = () => setActiveIndex((prev) => (prev === phones.length - 1 ? 0 : prev + 1));

  return (
    <>
      <Header />

      <main className="pt-24 relative">
        {/* ===== HERO SECTION ===== */}
        <section className="relative min-h-[50vh] md:min-h-[70vh] flex items-center overflow-hidden">
          {/* No background paw prints here per updated ref */}

          <div className="max-w-[1400px] mx-auto px-8 w-full grid md:grid-cols-2 gap-12 items-center">
            {/* Left — ABC Logo */}
            <div className="flex justify-center md:justify-start">
              <Image
                src="/bluegross images/abc-mobile-2 1.png"
                alt="ABC Management Portal by Blue Cross of Hyderabad"
                width={547}
                height={342}
                className="w-full max-w-[547px] h-auto object-contain"
              />
            </div>

            {/* Right — Phone mockup + dog + paw watermarks */}
            <div className="relative flex flex-col justify-center items-center w-full max-w-[500px] mx-auto">
              {/* Paw watermark — behind left */}
              <img
                src="/bluegross images/mdi_paw.png"
                alt=""
                className="absolute top-[5%] left-[-5%] w-[200px] md:w-[280px] opacity-[0.08] -rotate-12 z-0"
              />

              {/* Paw watermark — behind right */}
              <img
                src="/bluegross images/mdi_paw.png"
                alt=""
                className="absolute top-[0%] right-[-5%] w-[140px] md:w-[200px] opacity-[0.08] rotate-12 z-0"
              />

              {/* Phone mockup — upright, positioned above dog */}
              <div className="relative z-10" style={{ transform: 'rotate(0deg)' }}>
                <Image
                  src="/bluegross images/iMockup - Google Pixel 8 Pro.png"
                  alt="Blue Cross App"
                  width={240}
                  height={480}
                  className="drop-shadow-2xl"
                  style={{ transform: 'rotate(0deg)' }}
                />
              </div>

              {/* Dog — sitting in front at bottom */}
              <motion.div
                className="relative z-20 -mt-36 w-[280px] md:w-[380px]"
                animate={{
                  scale: [1, 1.005, 1]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Image
                  src="/bluegross images/pngwing.com 1.png"
                  alt="Dog"
                  width={380}
                  height={206}
                  className="w-full h-auto object-contain"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===== DOG + BEAGLE IMAGE SECTION ===== */}
        <section className="relative pt-0 pb-0 overflow-visible">
          <div className="w-full px-0 relative z-0">
            <div className="flex justify-start overflow-visible">
              <div className="relative w-[100px] h-[100px] md:w-[160px] md:h-[150px]">
                <Image
                  src="/bluegross images/image 341.png"
                  alt="Beagle dog"
                  width={527}
                  height={496}
                  className="object-contain object-left"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===== FEATURE CARDS SECTION ===== */}
        <section className="pt-4 pb-12">
          <div className="max-w-[1272px] mx-auto px-6">
            {/* Top Row — Field Staff + Vet Doctors */}
            <div className="relative grid gap-6 grid-cols-1 md:grid-cols-[2fr_1fr]">
              {/* Field Staff Card — using composed image */}
              <div className="rounded-2xl overflow-hidden relative h-[320px] md:h-[480px]">
                <Image
                  src="/bluegross images/image.png"
                  alt="Field Staff"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Veterinary Doctors Card — using composed image */}
              <div className="relative min-h-[320px] md:h-[480px]">
                {/* Dogs peeking */}
                <div className="absolute -top-[82px] left-1/2 -translate-x-1/2 w-[340px] z-20 md:block hidden">
                  <Image
                    src="/bluegross images/pngwing.com (6) 1.png"
                    alt="Dogs peeking"
                    width={377}
                    height={100}
                    className="w-full h-[121px]"
                  />
                </div>

                <div className="rounded-2xl overflow-hidden h-full relative z-10 min-h-[320px] md:min-h-[480px]">
                  <Image
                    src="/bluegross images/Frame 276.png"
                    alt="Veterinary Doctors"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Row — Management + Reporting */}
            <div className="grid gap-6 mt-6 grid-cols-1 md:grid-cols-[1fr_2fr]">
              {/* Management & Admin Card — using composed image */}
              <div className="rounded-2xl overflow-hidden flex flex-col h-full min-h-[320px] md:min-h-[472px] relative z-10">
                <Image
                  src="/bluegross images/Frame 200.png"
                  alt="Management & Admin"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Reporting & Tracking Card */}
              <div className="rounded-2xl bg-[#f5f5f5] p-6 md:p-10 flex flex-col justify-between min-h-[320px] md:min-h-[472px]">
                <div>
                  <span className="text-gray-400 text-[11px] font-medium tracking-widest uppercase">
                    Reporting & Tracking
                  </span>
                  <p className="text-gray-900 text-[28px] md:text-[32px] font-semibold mt-6 leading-snug">
                    All capture, release, and surgery data is stored automatically in the system. With proper reports and analytics, the organization can track progress, improve planning, and work more efficiently.
                  </p>
                </div>
                <p className="text-gray-900 font-semibold text-sm underline underline-offset-4 decoration-gray-400">
                  Clear Reports & Better Decisions
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== MULTI-LANGUAGE PHONE MOCKUPS SECTION ===== */}
        <section className="py-24 overflow-hidden relative">
          <div className="max-w-[1200px] mx-auto px-8">
            {/* Language badges */}
            <div className="flex justify-center items-end gap-4 md:gap-16 mb-8 relative z-30">
              {phones.map((phone, idx) => (
                <button
                  key={phone.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${activeIndex === idx
                    ? "bg-blue-600 text-white shadow-lg scale-110"
                    : "bg-blue-50 text-blue-600 opacity-60 hover:opacity-100"
                    }`}
                >
                  <span>{phone.label}</span>
                </button>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 left-4 md:left-12 -translate-y-1/2 z-40">
              <button
                onClick={handlePrev}
                className="p-3 bg-white/80 backdrop-blur rounded-full shadow-md hover:bg-blue-600 hover:text-white transition-all active:scale-95"
              >
                <ChevronLeft size={28} />
              </button>
            </div>
            <div className="absolute top-1/2 right-4 md:right-12 -translate-y-1/2 z-40">
              <button
                onClick={handleNext}
                className="p-3 bg-white/80 backdrop-blur rounded-full shadow-md hover:bg-blue-600 hover:text-white transition-all active:scale-95"
              >
                <ChevronRight size={28} />
              </button>
            </div>

            {/* Phone mockups container */}
            <div className="relative flex justify-center items-end h-[400px] md:h-[600px] overflow-hidden mt-4">
              {/* Repeating text background */}
              <div className="absolute inset-0 flex flex-col justify-center items-center overflow-hidden opacity-[0.1] pointer-events-none select-none">
                {Array.from({ length: 12 }).map((_, i) => (
                  <p key={i} className="text-6xl font-black tracking-tighter whitespace-nowrap text-[#44b9fe] uppercase">
                    BlueCross BlueCross BlueCross BlueCross BlueCross BlueCross
                  </p>
                ))}
              </div>

              <div className="relative w-full max-w-4xl h-full flex justify-center items-end">
                {phones.map((phone, idx) => {
                  let offset = idx - activeIndex;
                  if (offset > 1) offset -= 3;
                  if (offset < -1) offset += 3;
                  const isActive = idx === activeIndex;

                  return (
                    <motion.div
                      key={phone.id}
                      initial={false}
                      animate={{
                        x: `calc(-50% + ${offset * 280}px)`,
                        scale: isActive ? 1.05 : 0.8,
                        rotate: isActive ? 0 : (offset > 0 ? 10 : -10),
                        opacity: isActive ? 1 : 0.4,
                        zIndex: isActive ? 30 : 10,
                        y: isActive ? -10 : 0
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 25
                      }}
                      style={{
                        position: 'absolute',
                        left: '50%',
                        bottom: 0,
                        transformOrigin: 'bottom center',
                      }}
                      className="pointer-events-none"
                    >
                      <Image
                        src={phone.src}
                        alt={phone.alt}
                        width={346}
                        height={728}
                        className={`${isActive ? 'drop-shadow-[0_20px_50px_rgba(37,99,235,0.3)]' : 'drop-shadow-2xl'} transition-all duration-500`}
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ===== SUPPORTS BOTH VERSIONS SECTION ===== */}
        <section className="py-20">
          <div className="max-w-[1100px] mx-auto px-8">
            <div className="bg-[#f5f5f5] rounded-3xl p-10 md:p-14">
              {/* Title */}
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
                  <span className="italic text-[#44b9fe]">Supports</span>{" "}
                  <span className="italic font-bold">Both</span>{" "}
                  <span>Version</span>
                </h3>
              </div>

              {/* Store badges */}
              <div className="flex justify-center gap-4 mb-12">
                <div className="bg-black text-white px-5 py-2.5 rounded-lg flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  <div className="text-left">
                    <p className="text-[9px] leading-none opacity-70">Download on the</p>
                    <p className="text-sm font-semibold leading-tight">App Store</p>
                  </div>
                </div>
                <div className="bg-black text-white px-5 py-2.5 rounded-lg flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M3.18 23.04c-.55-.29-.92-.88-.92-1.54V2.5c0-.66.37-1.25.92-1.54L14.54 12 3.18 23.04zm1.63-22.2L16.97 10.7 14.54 12 4.81.84zm0 22.32L14.54 12l2.43 1.3L4.81 23.16zM17.74 11.35l2.76 1.6c.5.29.5 1.02 0 1.31l-2.76 1.6-2.68-1.43 2.68-3.08z"/></svg>
                  <div className="text-left">
                    <p className="text-[9px] leading-none opacity-70">Download on</p>
                    <p className="text-sm font-semibold leading-tight">Play Store</p>
                  </div>
                </div>
              </div>

              {/* Phone mockups — iPhone + Pixel side by side */}
              <div className="flex justify-center items-end gap-6 md:gap-10">
                <div className="w-[140px] md:w-[200px]">
                  <Image
                    src="/bluegross images/iMockup - Google Pixel 8 Pro (4).png"
                    alt="Android version"
                    width={300}
                    height={600}
                    className="w-full h-auto drop-shadow-xl"
                  />
                </div>
                <div className="w-[140px] md:w-[200px]">
                  <Image
                    src="/bluegross images/iMockup - iPhone 12.png"
                    alt="iOS version"
                    width={300}
                    height={600}
                    className="w-full h-auto drop-shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== DASHBOARD SECTION ===== */}
        <section className="py-16">
          <div className="max-w-[1100px] mx-auto px-8">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/bluegross images/image 345.png"
                alt="Blue Cross Dashboard"
                width={1100}
                height={650}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* ===== CTA SECTION ===== */}
        <section className="py-28 text-center px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-gray-900">
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
      </main>

      <Footer />
    </>
  );
}
