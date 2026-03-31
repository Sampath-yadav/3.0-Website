'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ExternalLink, 
  Target, 
  CheckCircle2,
  ArrowRight,
  Lightbulb,
  TrendingUp,
  Quote,
  Award,
  Clock,
  BookOpen,
  Users,
  Zap
} from 'lucide-react';
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

// --- Components ---

const SectionHeader = ({ title, subtitle, badge }: { title: string; subtitle?: string; badge?: string; }) => (
  <div className="mb-12">
    {badge && (
      <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-bold mb-4 uppercase tracking-wider">
        {badge}
      </span>
    )}
    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900">{title}</h2>
    {subtitle && <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">{subtitle}</p>}
  </div>
);

const CaseStudyHero = () => (
  <section className="pt-32 pb-20 px-6 bg-transparent">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8 text-slate-900">
            Revision<span className="text-blue-600">Prep</span>
          </h1>
          <p className="text-2xl text-slate-600 mb-10 leading-relaxed font-light">
            Building a high-performance revision platform for IB and Cambridge students.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <a 
            href="https://revisionprep.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block group cursor-pointer"
          >
            <div className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl p-2 overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-blue-500/20 group-hover:-translate-y-2">
              <div className="bg-white rounded-xl overflow-hidden border border-slate-100 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent pointer-events-none" />
                <img 
                  src="/images/portfolio/revision-prep/Photo1.png" 
                  alt="RevisionPrep Platform Preview" 
                  className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/90 backdrop-blur-xl rounded-2xl border border-slate-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-lg text-slate-900">Platform Dashboard</h3>
                      <p className="text-sm text-slate-500">Centralized learning hub for students</p>
                    </div>
                    <ExternalLink className="text-blue-600" size={20} />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

const ProjectBrief = () => (
  <section className="py-20 px-6 md:px-12 lg:px-24 bg-transparent">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2">
          <SectionHeader 
            badge="The Brief"
            title="Modernizing the Exam Preparation Experience"
            subtitle="RevisionPrep approached us to design a platform that bridges the gap between static textbooks and the dynamic requirements of modern IB and Cambridge assessments."
          />
          <div className="prose prose-lg text-slate-600 max-w-none">
            <p className="mb-6">
              The primary challenge was to create a high-density data environment that remained intuitive for students aged 11-18. The platform needed to support complex mathematical notations, interactive graphing, and real-time feedback loops.
            </p>
            <p>
              We focused on a "Light-First" design philosophy, using <strong>Space Grotesk</strong> to provide a technical yet approachable aesthetic that aligns with the rigor of international curricula.
            </p>
          </div>
        </div>
        <div className="space-y-8">
          <div className="p-8 bg-white/40 backdrop-blur-sm rounded-3xl border border-slate-100">
            <h4 className="font-bold text-xl mb-6 flex items-center gap-2 text-slate-900">
              <Target className="text-blue-600" size={20} /> Project Goals
            </h4>
            <ul className="space-y-4 font-medium text-slate-600">
              <li className="flex gap-3"><CheckCircle2 className="text-blue-600 shrink-0" size={18} /> Curriculum-aligned question banks</li>
              <li className="flex gap-3"><CheckCircle2 className="text-blue-600 shrink-0" size={18} /> Interactive Exam Practice Mode</li>
              <li className="flex gap-3"><CheckCircle2 className="text-blue-600 shrink-0" size={18} /> Real-time performance analytics</li>
              <li className="flex gap-3"><CheckCircle2 className="text-blue-600 shrink-0" size={18} /> Built-in Scientific Calculator (GDC)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ChallengeSolution = () => (
  <section className="py-20 px-6 md:px-12 lg:px-24 bg-transparent text-slate-900 overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-20">
        
        {/* Challenge */}
        <div className="space-y-12">
          <SectionHeader 
            badge="The Challenge"
            title="Overcoming Academic Friction"
            subtitle="Students often struggle with fragmented resources and a lack of real-time feedback during independent study."
          />
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-2xl bg-white/50 flex items-center justify-center shrink-0 border border-slate-200">
                <Clock className="text-blue-400" size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-slate-900">Time Inefficiency</h4>
                <p className="text-slate-500">
                  Students spend 40% of their study time searching for relevant practice questions rather than actually solving them.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-2xl bg-white/50 flex items-center justify-center shrink-0 border border-slate-200">
                <BookOpen className="text-blue-400" size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-slate-900">Curriculum Mismatch</h4>
                <p className="text-slate-500">
                  Generic study tools fail to account for the specific nuances of IB and Cambridge assessment criteria.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Solution */}
        <div className="space-y-12">
          <SectionHeader 
            badge="The Solution"
            title="A Unified Learning Ecosystem"
            subtitle="RevisionPrep centralizes the entire revision lifecycle into a single, high-performance interface."
          />

          <div className="grid grid-cols-1 gap-6">
            
            {/* White Card */}
            <div className="p-8 rounded-3xl bg-white/80 backdrop-blur-md border border-slate-200 text-slate-900 shadow-lg">
              <Lightbulb className="text-blue-600 mb-6" size={32} />
              <h4 className="text-2xl font-bold mb-4 text-slate-900">
                AI-Powered Explanations
              </h4>
              <p className="text-slate-600">
                Dynamic step-by-step breakdowns that adapt to the student's current understanding level, ensuring no one is left behind.
              </p>
            </div>

            {/* Second Card */}
            <div className="p-8 rounded-3xl bg-white/20 backdrop-blur-sm border border-slate-200">
              <TrendingUp className="text-blue-400 mb-6" size={32} />
              <h4 className="text-2xl font-bold mb-4 text-slate-900">
                Predictive Analytics
              </h4>
              <p className="text-slate-500">
                Identifying knowledge gaps before they become exam-day hurdles through continuous performance monitoring.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-20 px-6 md:px-12 lg:px-24 bg-transparent overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <SectionHeader 
        badge="Social Proof"
        title="Trusted by Students & Educators"
        subtitle="RevisionPrep has become an essential tool for top-performing schools worldwide."
      />

      <div className="grid md:grid-cols-2 gap-8">
        {[
          {
            quote: "RevisionPrep changed how I study for IB Physics. The step-by-step explanations are better than any textbook I've used.",
            author: "Sarah J.",
            role: "IB Student, Grade 12",
            avatar: "https://picsum.photos/seed/sarah/100/100"
          },
          {
            quote: "As an educator, the curriculum mapping is a lifesaver. I can track exactly where my students are struggling in real-time.",
            author: "David M.",
            role: "Head of Mathematics, International School",
            avatar: "https://picsum.photos/seed/david/100/100"
          }
        ].map((t, i) => (
          <div key={i} className="p-12 rounded-[2.5rem] bg-white/80 backdrop-blur-md border border-slate-100 relative shadow-sm hover:shadow-xl transition-all duration-500">
            <Quote className="absolute top-10 right-10 text-blue-100/50" size={60} />
            <p className="text-2xl text-slate-600 mb-10 leading-relaxed italic relative z-10">
              "{t.quote}"
            </p>
            <div className="flex items-center gap-4">
              <img src={t.avatar} alt={t.author} className="w-14 h-14 rounded-full object-cover" />
              <div>
                <div className="font-bold text-slate-900">{t.author}</div>
                <div className="text-sm text-slate-500">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const InterfaceShowcase = () => {
  const screenshots = [
    {
      id: 'initial',
      title: "The Learning Gateway",
      file: "/images/portfolio/revision-prep/Student Dash.png",
      desc: "The initial landing experience focuses on clear curriculum selection, allowing students to immediately identify their path (IB vs Cambridge).",
      tag: "UX Design"
    },
    {
      id: 'filters',
      title: "Precision Filtering",
      file: "/images/portfolio/revision-prep/filters.png",
      desc: "A robust filtering system enables students to drill down into specific sub-topics, difficulty levels, and question types for targeted practice.",
      tag: "Interface"
    },
    {
      id: 'explanation',
      title: "Guided Learning",
      file: "/images/portfolio/revision-prep/explanation.png",
      desc: "Every question features a detailed, step-by-step explanation that breaks down complex concepts into digestible logical steps.",
      tag: "Education"
    },
    {
      id: 'practice',
      title: "Practice Simulation",
      file: "/images/portfolio/revision-prep/initial.png",
      desc: "The practice environment replicates real e-assessment conditions, including various questions and technical toolsets.",
      tag: "Simulation"
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          badge="Interface Deep-Dive"
          title="Visualizing the Student Journey"
          subtitle="A closer look at the core interfaces designed to facilitate a focused and effective revision experience."
        />

        <div className="space-y-32">
          {screenshots.map((s, i) => (
            <motion.div 
              key={s.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
            >
              <div className="flex-1 w-full">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-blue-600/5 rounded-[2.5rem] blur-2xl group-hover:bg-blue-600/10 transition-all duration-500" />
                  <div className="relative bg-white/40 backdrop-blur-md border border-slate-200/50 p-2 overflow-hidden shadow-2xl rounded-2xl">
                    <div className="bg-slate-100 rounded-xl overflow-hidden aspect-video relative">
                      <img 
                        src={s.file} 
                        alt={s.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = `https://picsum.photos/seed/${s.id}/1200/800`;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 max-w-xl">
                <span className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-4 block">{s.tag}</span>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">{s.title}</h3>
                <p className="text-xl text-slate-500 leading-relaxed mb-8">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Main Page ---

export default function RevisionPrepPage() {
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return (
      <div className="min-h-screen bg-transparent">
        <Header />
        <div className="h-screen flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-600 bg-transparent">
      <Header />
      
      <main className="relative z-10">
        <CaseStudyHero />
        <ProjectBrief />
        <ChallengeSolution />
        <InterfaceShowcase />
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
}
