"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Github, Twitter, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

export default function BlueCrossPage() {
  const [activeIndex, setActiveIndex] = useState(1); // 0: Telugu, 1: English, 2: Hindi

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

      <main className="pt-24 relative z-10">
        {/* ===== HERO SECTION ===== */}
        <section className="relative min-h-[50vh] md:min-h-[70vh] flex items-center overflow-hidden">
          {/* Paw prints decoration */}
          <img
            src="/bluegross images/mdi_paw.png"
            alt=""
            className="absolute top-16 right-[15%] w-24 opacity-100 rotate-[-15deg]"
          />
          <img
            src="/bluegross images/mdi_paw.png"
            alt=""
            className="absolute bottom-20 left-[10%] w-16 opacity-100 rotate-[20deg]"
          />
          <img
            src="/bluegross images/mdi_paw.png"
            alt=""
            className="absolute top-[40%] right-[5%] w-12 opacity-100 rotate-[45deg]"
          />

          <div className="max-w-[1400px] mx-auto px-8 w-full grid md:grid-cols-2 gap-12 items-center">
            {/* Left — Title */}
            <div className="w-full max-w-[845px] h-auto md:h-[200px] flex flex-col justify-center relative z-20">
              <h1
                className="text-[#44b9fe] font-bold leading-[0.9] tracking-tighter"
                style={{
                  fontSize: 'clamp(60px, 12vw, 140px)',
                }}
              >
                Blue Cross <br /> Hyderabad
              </h1>
            </div>

            {/* Right — Phone mockup + dog */}
            <div className="relative flex justify-center items-end">
              <div className="absolute top-0 right-0 w-[200px] h-[200px] opacity-100">
                <Image
                  src="/bluegross images/mdi_paw.png"
                  alt=""
                  width={200}
                  height={200}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="absolute top-[20%] left-0 w-[150px] h-[150px] md:w-[299.48px] md:h-[299.48px] opacity-100 rotate-[-15deg]">
                <Image
                  src="/bluegross images/mdi_paw.png"
                  alt=""
                  width={300}
                  height={300}
                  className="w-full h-full object-contain"
                />
              </div>

              <Image
                src="/bluegross images/iMockup - Google Pixel 8 Pro.png"
                alt="Blue Cross App"
                width={320}
                height={600}
                className="relative z-10 drop-shadow-2xl"
              />
              <motion.div
                className="absolute -bottom-4 -right-4 md:-right-12 z-20 w-[280px] h-[152px] md:w-[525px] md:h-[284px]"
                animate={{
                  rotate: [0, -1, 1, 0],
                  scale: [1, 1.01, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Image
                  src="/bluegross images/pngwing.com 1.png"
                  alt="Dog"
                  width={525}
                  height={284}
                  className="w-full h-full object-contain"
                />

                {/* Blinking Eyes (Eyelids) */}
                {/* Left Eye */}
                
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===== DOG + BEAGLE IMAGE SECTION ===== */}
        <section className="relative pt-8 pb-0 overflow-hidden">
          <div className="w-full px-0 -mt-32 md:-mt-32 -mt-16">
            <div className="flex justify-start">
              <div className="relative w-[300px] h-[280px] md:w-[527px] md:h-[496px]">
                <Image
                  src="/bluegross images/image 341.png"
                  alt="Beagle dog"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===== FEATURE CARDS SECTION ===== */}
        <section className="pt-4 pb-12 bg-white">
          <div className="max-w-[1272px] mx-auto px-6">

            {/* Top Row — Field Staff + Vet Doctors */}
            <div className="relative grid gap-6 grid-cols-1 md:grid-cols-[2fr_1fr]">

              {/* Field Staff Card */}
              <div className="rounded-2xl overflow-hidden relative h-[320px] md:h-[480px]">
                <Image
                  src="/bluegross images/image.png"
                  alt="Field Staff"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute top-5 left-5">
                  <span className="text-white/70 text-xs font-medium tracking-widest uppercase">
                    Field Staff
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white text-[15px] font-medium leading-relaxed">
                    Field workers use the mobile app to update capture, release, and shelter tasks in real time.
                  </p>
                  <p className="text-[#F5A623] text-[13px] mt-2 leading-relaxed">
                    This helps the team stay organized and ensures every animal record is tracked properly, without manual paperwork.
                  </p>
                  <p className="text-white/40 text-[11px] mt-3 uppercase tracking-wider">
                    Field Operations Made Simple
                  </p>
                </div>
              </div>

              {/* Veterinary Doctors Card */}
              <div className="relative h-auto md:h-[480px]">
                {/* Dogs peeking — overlaps above right column */}
                <div className="absolute -top-[82px] left-1/2 -translate-x-1/2 w-[340px] z-20 md:block hidden">
                  <Image
                    src="/bluegross images/pngwing.com (6) 1.png"
                    alt="Dogs peeking"
                    width={377}
                    height={100}
                    className="w-full h-[121px]"
                  />
                </div>

                <div className="rounded-2xl bg-[#F5E44B] pt-8 pb-8 px-6 flex flex-col h-full relative z-10">
                  <span className="text-gray-600 text-[11px] font-medium tracking-widest uppercase mb-4">
                    Veterinary Doctors
                  </span>
                  <div className="mb-6 rounded-xl overflow-hidden border-2 border-white/20">
                    <Image
                      src="/bluegross images/pexels-ahmedhamed20-7008099 1.png"
                      alt="Veterinary Doctors"
                      width={352}
                      height={209}
                      className="w-full h-[209px]"
                    />
                  </div>
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 leading-snug">
                      Medical Records in One Place
                    </h3>
                    <p className="text-gray-700 text-[12px] mt-2 leading-relaxed">
                      Doctors can record surgery details, health status, and treatment updates directly from the app. This keeps every animal&apos;s medical history clear, accurate, and easy to access when needed.
                    </p>
                  </div>
                  
                </div>
              </div>
            </div>

            {/* Bottom Row — Management + Reporting */}
            <div className="grid gap-6 mt-6 grid-cols-1 md:grid-cols-[1fr_2fr]">

              {/* Management & Admin Card */}
              <div className="rounded-2xl bg-black p-5 flex flex-col min-h-[320px] md:min-h-[472px]">
                <span className="text-white/50 text-[11px] font-medium tracking-widest uppercase">
                  Management & Admin
                </span>
                <p className="text-white/90 text-[13px] mt-4 leading-relaxed">
                  The web dashboard allows management to monitor teams, vehicles, schedules, and reports from one place. This makes planning easier and helps the organization run daily operations smoothly.
                </p>
                <div className="mt-auto rounded-xl overflow-hidden">
                  <Image
                    src="/bluegross images/Frame 200.png"
                    alt="Dashboard"
                    width={400} 
                    height={220}
                    className="w-full h-auto rounded-xl opacity-80"
                  />
                </div>
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
                  // Circular logic for 3 items: wrap large offsets
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

        {/* ===== IOS AND ANDROID SECTION ===== */}
        <section className="py-20">
          <div className="max-w-[1000px] mx-auto px-8">
            <div className="bg-gray-100 rounded-2xl md:rounded-3xl p-8 md:p-12 min-h-[200px] md:min-h-[250px] flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-900">
                Support for both iOS and
              </h3>
              <p className="text-2xl font-semibold text-gray-900 mt-1">
                Android platforms
              </p>
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
