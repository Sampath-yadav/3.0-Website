'use client';

import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function StarlinkPage() {
  return (
    <main className="relative min-h-screen bg-white">
      <Header />
      
      <div className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <Link 
          href="/portfolio" 
          className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-neutral-900">
              Starlink
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl">
              Exploring the frontiers of digital connection through intuitive design and robust engineering.
            </p>
          </div>
          
          <div className="rounded-3xl overflow-hidden border border-neutral-200 bg-neutral-50 shadow-2xl">
            <img 
              src="/svg images/starlink.svg" 
              alt="Starlink Showcase" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
