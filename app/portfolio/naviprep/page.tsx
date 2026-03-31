"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, Brain, BookOpen } from "lucide-react";
import Header from "../../../components/Header/Header";
import BottomHero from "../../../components/BottomHero/BottomHero";
import Footer from "../../../components/Footer/Footer";


const accordionItems = [
  {
    id: 1,
    title: "Signup Page",
    imageUrl: "/images/naviprep/image5.png",
  },
  {
    id: 2,
    title: "Student Dashboard",
    imageUrl: "/images/naviprep/image6.png",
  },
  {
    id: 3,
    title: "Subjects Explorer",
    imageUrl: "/images/naviprep/image3.png",
  },
  {
    id: 4,
    title: "Practice Configuration",
    imageUrl: "/images/naviprep/image2.png",
  },
  {
    id: 5,
    title: "Admin Dashboard",
    imageUrl: "/images/naviprep/image4.png",
  },
];


function AccordionItem({ item, isActive, onMouseEnter }: any) {
  return (
    <div
      className={`relative h-[420px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-in-out ${
        isActive ? "w-[360px]" : "w-[70px]"
      }`}
      onMouseEnter={onMouseEnter}
    >
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <span
        className={`absolute text-white text-lg font-semibold whitespace-nowrap transition-all duration-300 ${
          isActive
            ? "bottom-6 left-1/2 -translate-x-1/2 rotate-0"
            : "bottom-24 left-1/2 -translate-x-1/2 rotate-90"
        }`}
      >
        {item.title}
      </span>
    </div>
  );
}


export default function Page() {
  const [activeIndex, setActiveIndex] = useState(2);

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
      {/* NAVBAR */}
      <Header />

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-32 bg-white/80 relative z-10 rounded-3xl mt-8">

        {/* HERO */}

        <section className="fade-in-section flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 bg-white text-xs font-medium text-neutral-600 mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            EdTech Platform
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-neutral-900 mb-6 leading-tight">
            Smart Revision Platform
            <br className="hidden md:block" />
            for IB & Cambridge Students
          </h1>

          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mb-12 leading-relaxed">
            Practice smarter with structured lessons, AI-powered question
            generation, and past paper revision for Cambridge and IB students.
          </p>
        </section>

        <section className="fade-in-section mb-24">
          <div className="rounded-2xl overflow-hidden border border-neutral-200 bg-white p-3 shadow-lg">
            <img
              src="/images/naviprep/image1.png"
              alt="Platform Landing Page"
              className="w-full rounded-xl"
            />
          </div>
        </section>


        <section className="fade-in-section mb-32">

          <h2 className="text-3xl font-semibold text-center mb-12">
            Platform Overview
          </h2>

          <div className="flex items-center justify-center gap-4 overflow-x-auto p-4">

            {accordionItems.map((item, index) => (
              <AccordionItem
                key={item.id}
                item={item}
                isActive={index === activeIndex}
                onMouseEnter={() => setActiveIndex(index)}
              />
            ))}

          </div>

        </section>

        {/* FEATURES */}

        <section className="mb-32">

  <div className="text-center mb-16">
    <h2 className="text-4xl font-semibold text-neutral-900 mb-4">
      Nacacdemics Learning Tools
    </h2>

    <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
      NACACDEMICS combines AI technology with structured curriculum design
      to create a smarter learning environment for both students and educators.
      The platform simplifies revision, practice, and assessment preparation.
    </p>
  </div>

  <div className="grid md:grid-cols-2 gap-10">

    {/* FEATURE 1 */}

    <div className="fade-in-section rounded-3xl border border-neutral-200 bg-gray-900 p-8 shadow-sm hover:shadow-md transition">

      <Brain className="w-8 h-8 text-blue-600 mb-4" />

      <h3 className="text-2xl font-semibold text-white mb-4">
        AI-Powered Question Generation
      </h3>

      <p className="text-white mb-6 leading-relaxed">
        Teachers can upload past examination papers and instantly generate
        new variations of questions using advanced AI models. This enables
        educators to quickly create fresh assessments while maintaining the
        structure and difficulty level of the original exam.
      </p>

      <ul className="text-sm text-white space-y-2 mb-6">
        <li>• Generate multiple question variations instantly</li>
        <li>• Maintain exam-level difficulty and format</li>
        <li>• Save hours of manual question creation</li>
        <li>• Expand practice materials for students</li>
      </ul>

    </div>


    {/* FEATURE 2 */}

    <div className="fade-in-section rounded-3xl border border-neutral-200 bg-gray-900 p-8 shadow-sm hover:shadow-md transition">

      <BookOpen className="w-8 h-8 text-green-600 mb-4" />

      <h3 className="text-2xl font-semibold text-white mb-4">
        Structured Learning & Revision
      </h3>

      <p className="text-white mb-6 leading-relaxed">
        Students navigate through clearly structured subjects, chapters,
        and topics aligned with the official Cambridge curriculum.
        Each lesson includes practice questions and past papers to
        reinforce learning and exam readiness.
      </p>

      <ul className="text-sm text-white space-y-2 mb-6">
        <li>• Organized subjects and chapters</li>
        <li>• Curriculum-aligned learning paths</li>
        <li>• Practice questions for each topic</li>
        <li>• Past paper revision support</li>
      </ul>

      {/* <img
        src="/images/naviprep/image1.png"
        alt="Structured Learning"
        className="rounded-xl border border-neutral-200"
      /> */}

    </div>


    {/* FEATURE 3 */}

    <div className="fade-in-section rounded-3xl border border-neutral-200 bg-gray-900 p-8 shadow-sm hover:shadow-md transition">

      <BookOpen className="w-8 h-8 text-purple-600 mb-4" />

      <h3 className="text-2xl font-semibold text-white mb-4">
        Smart Practice Configuration
      </h3>

      <p className="text-white mb-6 leading-relaxed">
        Students can customize their practice sessions by selecting topics,
        difficulty levels, and question formats. This personalized practice
        system helps learners focus on areas where they need improvement.
      </p>

      <ul className="text-sm text-white space-y-2 mb-6">
        <li>• Choose topics and subtopics</li>
        <li>• Select difficulty levels</li>
        <li>• Multiple question formats</li>
        <li>• Focused exam preparation</li>
      </ul>

      {/* <img
        src="/images/naviprep/image6.png"
        alt="Practice Configuration"
        className="rounded-xl border border-neutral-200"
      /> */}

    </div>


    {/* FEATURE 4 */}

    <div className="fade-in-section rounded-3xl border border-neutral-200 bg-gray-900 p-8 shadow-sm hover:shadow-md transition">

      <Brain className="w-8 h-8 text-orange-600 mb-4" />

      <h3 className="text-2xl font-semibold text-white mb-4">
        Admin Content Management
      </h3>

      <p className="text-white mb-6 leading-relaxed">
        The platform provides administrators with a powerful dashboard to
        manage curriculum content, upload new questions, organize chapters,
        and maintain the entire learning ecosystem.
      </p>

      <ul className="text-sm text-white space-y-2 mb-6">
        <li>• Manage subjects and chapters</li>
        <li>• Upload new practice questions</li>
        <li>• Organize learning materials</li>
        <li>• Maintain a structured curriculum</li>
      </ul>

      {/* <img
        src="/images/naviprep/image4.png"
        alt="Admin Dashboard"
        className="rounded-xl border border-neutral-200"
      /> */}

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