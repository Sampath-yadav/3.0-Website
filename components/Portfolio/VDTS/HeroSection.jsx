"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative overflow-hidden bg-transparent">
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-brand-500/[0.03] blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500/[0.04] blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #1a5cf5 0.8px, transparent 0.8px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 lg:pt-40 pb-16 lg:pb-20">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-0 items-center">
          {/* ── Left Column ── */}
          <div className="max-w-2xl">
            {/* Logo */}
            <div
              className={`mb-8 transition-all duration-700 ${loaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
                }`}
            >
              <Image
                src="/vdts/vdts updated logo.png"
                alt="VDTS Logo"
                width={320}
                height={180}
                style={{ height: "auto" }}
                className="h-auto"
                priority
              />
            </div>



            {/* Description */}
            <p
              className={`text-body-lg text-slate-500 max-w-lg leading-relaxed transition-all duration-700 delay-200 ${loaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
                }`}
            >
              A centralized ticket management platform that streamlines incident
              resolution across organizations — from creation to closure.
            </p>
          </div>

          {/* ── Right Column — Mockup ── */}
          <div
            className={`relative lg:-mr-16 xl:-mr-24 transition-all duration-1000 delay-300 ${loaded
              ? "opacity-100 translate-x-0 scale-100"
              : "opacity-0 translate-x-12 scale-95"
              }`}
          >
            <Image
              src="/portfolio/vdts/Group 2.png"
              alt="Incident Management System — dashboard and mobile views"
              width={1400}
              height={900}
              className="w-full lg:w-[120%] xl:w-[130%] h-auto object-contain drop-shadow-2xl"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 55vw"
            />

          </div>
        </div>
      </div>

      {/* Bottom separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    </section>
  );
}
