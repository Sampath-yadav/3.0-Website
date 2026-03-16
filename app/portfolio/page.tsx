'use client';

import Header from "../../components/Header/Header";
import PortfolioGrid from "../../components/PortfolioGrid/PortfolioGrid";
import CTASection from "../../components/CTASection/CTASection";
import Footer from "../../components/Footer/Footer";
export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen">
      <Header />

      {/* Fixed background */}
      <div className="fixed inset-0 -z-10 transparent">
        <img
          src="/images/portfolio/banne123 1.png"
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="pt-32 pb-20">
        <PortfolioGrid />
      </div>

      <section className="relative py-36 text-center px-6 mt-32 overflow-hidden">



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

          <a href="/contact-us">
            <button className="mt-8 bg-black text-white px-7 py-3 rounded-full hover:opacity-90 transition">
              Let&apos;s Collaborate ↗
            </button>
          </a>

        </div>

      </section>
      <Footer />
    </main>
  );
}
