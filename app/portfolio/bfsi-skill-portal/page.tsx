'use client';

import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BFSISkillPortalPage() {
  return (
    <main className="relative min-h-screen bg-white">
      <Header />
      
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <Link 
          href="/portfolio" 
          className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900">
              BFSI Skill Portal
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl">
              A specialized skill assessment and learning portal for the BFSI (Banking, Financial Services, and Insurance) sector.
            </p>
          </div>
          
          <div className="rounded-3xl overflow-hidden border border-neutral-200 bg-neutral-50 shadow-2xl">
            <img 
              src="/portfolioimages/bfsi.svg" 
              alt="BFSI Skill Portal Showcase" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
