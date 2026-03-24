"use client";

import { useEffect } from "react";
import { ArrowRight, Cpu, Zap, Shield, Database } from "lucide-react";
import Header from "../../../components/Header/Header";
import BottomHero from "../../../components/BottomHero/BottomHero";
import Footer from "../../../components/Footer/Footer";

export default function VITSPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in-section").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Background grid */}
      <div className="fixed inset-0 z-[-1] bg-grid-pattern bg-[size:4rem_4rem] opacity-40 pointer-events-none"></div>

      {/* NAVBAR */}
      <Header />

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-32">

        {/* HERO */}
        <section className="fade-in-section flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 bg-white text-xs font-medium text-neutral-600 mb-8">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            Intelligence System
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-neutral-900 mb-6 leading-tight">
            VDTS: High-Efficiency
            <br className="hidden md:block" />
            Data Transmission & Processing
          </h1>

          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mb-12 leading-relaxed">
            Revolutionizing data transmission with volumetric efficiency and intelligent processing systems for large-scale enterprise clients.
          </p>
        </section>

        {/* MAIN IMAGE */}
        <section className="fade-in-section mb-24">
          <div className="rounded-3xl overflow-hidden border border-neutral-200 bg-neutral-50 shadow-2xl">
            <img 
              src="/svg images/VITS.svg" 
              alt="VITS Showcase" 
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* FEATURES */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-neutral-900 mb-4">
              Core System Capabilities
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
              VDTS delivers state-of-the-art volumetric data processing, ensuring speed, security, and scalability for the most demanding environments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* FEATURE 1 */}
            <div className="fade-in-section rounded-3xl border border-neutral-200 bg-gray-900 p-8 shadow-sm hover:shadow-md transition">
              <Cpu className="w-8 h-8 text-orange-600 mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-4">
                Edge Processing Engine
              </h3>
              <p className="text-white mb-6 leading-relaxed">
                Localized data processing at the edge ensures minimal latency and maximum reactivity for real-time systems, handling millions of data points every second.
              </p>
              <ul className="text-sm text-gray-400 space-y-2 mb-6">
                <li>• Real-time volumetric data analysis</li>
                <li>• Low-latency edge computation</li>
                <li>• Intelligent packet prioritization</li>
              </ul>
            </div>

            {/* FEATURE 2 */}
            <div className="fade-in-section rounded-3xl border border-neutral-200 bg-gray-900 p-8 shadow-sm hover:shadow-md transition">
              <Shield className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-4">
                Secure Transmission
              </h3>
              <p className="text-white mb-6 leading-relaxed">
                End-to-end encrypted data pathways with hardware-level security protocols ensure that your sensitive volumetric data remains protected throughout the transmission lifecycle.
              </p>
              <ul className="text-sm text-gray-400 space-y-2 mb-6">
                <li>• Military-grade encryption</li>
                <li>• Multi-layered security protocols</li>
                <li>• Automated threat detection and auditing</li>
              </ul>
            </div>

            {/* FEATURE 3 */}
            <div className="fade-in-section rounded-3xl border border-neutral-200 bg-gray-900 p-8 shadow-sm hover:shadow-md transition">
              <Database className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-4">
                Volumetric Storage
              </h3>
              <p className="text-white mb-6 leading-relaxed">
                Adaptive storage systems that scale with your data volume, utilizing intelligent compression and rapid retrieval mechanisms for historical analysis.
              </p>
              <ul className="text-sm text-gray-400 space-y-2 mb-6">
                <li>• Scalable cloud storage integration</li>
                <li>• Intelligent data compression</li>
                <li>• High-speed data indexing</li>
              </ul>
            </div>

            {/* FEATURE 4 */}
            <div className="fade-in-section rounded-3xl border border-neutral-200 bg-gray-900 p-8 shadow-sm hover:shadow-md transition">
              <Zap className="w-8 h-8 text-yellow-600 mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-4">
                Rapid Deployment
              </h3>
              <p className="text-white mb-6 leading-relaxed">
                Engineered for quick integration with existing infrastructure, allowing your teams to leverage advanced intelligence without significant downtime.
              </p>
              <ul className="text-sm text-gray-400 space-y-2 mb-6">
                <li>• Plug-and-play architecture</li>
                <li>• Extensive API-first documentation</li>
                <li>• Automated system optimization</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="fade-in-section">
          <BottomHero isTransparent={true} />
        </div>

      </main>

      <Footer />
    </>
  );
}

