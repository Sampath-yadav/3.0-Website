'use client';

import React from 'react';
import Image from 'next/image';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import { motion, AnimatePresence } from 'framer-motion';

const PHONE_SCREENS = [
    { src: "/bhoomi box images/phone screens for navigation/Splash screen 1.png", title: "Splash Screen" },
    { src: "/bhoomi box images/phone screens for navigation/SIgnin 1.png", title: "Sign In" },
    { src: "/bhoomi box images/phone screens for navigation/Home - first stage closed 1.png", title: "Farmer Home" },
    { src: "/bhoomi box images/phone screens for navigation/Curating Harvest 1.png", title: "Curating Harvest" },
    { src: "/bhoomi box images/phone screens for navigation/members 1.png", title: "Family Members" },
    { src: "/bhoomi box images/phone screens for navigation/farmerstory 1.png", title: "Farmer Story I" },
    { src: "/bhoomi box images/phone screens for navigation/Farmer story 2 1.png", title: "Farmer Story II" },
    { src: "/bhoomi box images/phone screens for navigation/Farmer Prof 4 1.png", title: "Farmer Profile" },
];

const BhoomiboxPage = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [isPaused, setIsPaused] = React.useState(false);

    const nextSlide = React.useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % PHONE_SCREENS.length);
    }, []);

    const prevSlide = React.useCallback(() => {
        setActiveIndex((prev) => (prev - 1 + PHONE_SCREENS.length) % PHONE_SCREENS.length);
    }, []);

    React.useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(() => {
            nextSlide();
        }, 3000);
        return () => clearInterval(timer);
    }, [isPaused, nextSlide]);

    return (
        <div className="min-h-screen bg-[#0a0a0a]">
            <Header />

            {/* Remove global backgrounds only for this page */}
            <style jsx global>{`
                .mesh-bg, 
                .wavy-glow-left, 
                .wavy-glow-right,
                #wavy-left,
                #wavy-right {
                    display: none !important;
                }
            `}</style>

            <main className="pt-24 relative z-10">
                {/* ===== HERO SECTION ===== */}
                <section className="relative pt-20 pb-0 overflow-hidden">
                    <div className="max-w-[1400px] mx-auto px-8 w-full">
                        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                            <div className="flex flex-col items-start max-w-2xl">
                                <span className="text-gray-500 text-2xl font-bold mb-6 tracking-tight font-primary">BhoomiBox</span>
                                <h1 className="font-bold text-white leading-[0.9] tracking-tighter mb-12" style={{ fontSize: 'clamp(48px, 10vw, 110px)' }}>
                                    Custom <br />
                                    <span className="text-[#FFB300]">Mobile App</span>
                                </h1>
                                <p className="text-xl text-gray-400 font-medium max-w-lg mb-8">
                                    Engineering a direct bridge between urban families and local farmers.
                                </p>
                            </div>

                            <motion.div
                                className="pt-4 pr-0"
                                initial={{ opacity: 0, x: 40 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                            >
                                <Image
                                    src="/bhoomi box images/BBLOGO.png"
                                    alt="BhoomiBox Logo"
                                    width={200}
                                    height={80}
                                    className="h-[40px] md:h-[50px] lg:h-[240px] w-auto object-contain drop-shadow-sm"
                                    priority
                                />
                            </motion.div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
                            <div>
                                <h3 className="text-gray-400 text-sm uppercase tracking-widest mb-2 font-medium">Platform</h3>
                                <p className="text-white font-medium">Mobile App</p>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>

                    {/* ===== INTERACTIVE PHONE NAVIGATOR ===== */}
                    <div
                        className="w-full bg-transparent relative mt-20 overflow-hidden py-24 min-h-[700px] flex items-center"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        <div className="max-w-[1400px] mx-auto px-8 w-full relative">

                            {/* Navigation Buttons */}
                            <div className="absolute left-4 md:left-20 top-1/2 -translate-y-1/2 z-30">
                                <button
                                    onClick={prevSlide}
                                    className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white hover:scale-105 transition-all active:scale-95 group shadow-xl"
                                    aria-label="Previous screen"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
                                        <polyline points="15 18 9 12 15 6"></polyline>
                                    </svg>
                                </button>
                            </div>

                            <div className="absolute right-4 md:right-20 top-1/2 -translate-y-1/2 z-30">
                                <button
                                    onClick={nextSlide}
                                    className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white hover:scale-105 transition-all active:scale-95 group shadow-xl"
                                    aria-label="Next screen"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                                        <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                </button>
                            </div>

                            {/* Carousel Container */}
                            <div className="relative flex justify-center items-center h-[500px]">
                                <AnimatePresence mode="popLayout">
                                    {/* Prev Image (Left) */}
                                    <motion.div
                                        key={`prev-${activeIndex}`}
                                        initial={{ opacity: 0, x: -100, scale: 0.8 }}
                                        animate={{ opacity: 0.15, x: -220, scale: 0.85 }}
                                        exit={{ opacity: 0, x: -150, scale: 0.7 }}
                                        className="absolute hidden md:block"
                                    >
                                        <div className="w-[170px] rounded-[2rem] overflow-hidden shadow-lg border-[6px] border-black/5">
                                            <Image
                                                src={PHONE_SCREENS[(activeIndex - 1 + PHONE_SCREENS.length) % PHONE_SCREENS.length].src}
                                                alt="Previous Screen"
                                                width={170}
                                                height={340}
                                                className="w-full h-auto object-cover blur-[2px]"
                                            />
                                        </div>
                                    </motion.div>

                                    {/* Main Image (Center) */}
                                    <motion.div
                                        key={activeIndex}
                                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.9, y: -20 }}
                                        transition={{ type: "spring", damping: 25, stiffness: 120 }}
                                        className="relative z-20"
                                    >
                                        <div className="w-[200px] md:w-[220px] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-[0_30px_70px_-15px_rgba(0,0,0,0.25)] border-[8px] md:border-[10px] border-[#1a1a1a] relative">
                                            <Image
                                                src={PHONE_SCREENS[activeIndex].src}
                                                alt={PHONE_SCREENS[activeIndex].title}
                                                width={220}
                                                height={440}
                                                className="w-full h-auto object-cover"
                                                priority
                                            />
                                            {/* Screen Glow */}
                                            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
                                        </div>
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-center mt-6"
                                        >
                                            <p className="text-white text-sm font-bold tracking-wider uppercase opacity-80 font-primary">{PHONE_SCREENS[activeIndex].title}</p>
                                        </motion.div>
                                    </motion.div>

                                    {/* Next Image (Right) */}
                                    <motion.div
                                        key={`next-${activeIndex}`}
                                        initial={{ opacity: 0, x: 100, scale: 0.8 }}
                                        animate={{ opacity: 0.15, x: 220, scale: 0.85 }}
                                        exit={{ opacity: 0, x: 150, scale: 0.7 }}
                                        className="absolute hidden md:block"
                                    >
                                        <div className="w-[170px] rounded-[2rem] overflow-hidden shadow-lg border-[6px] border-black/5">
                                            <Image
                                                src={PHONE_SCREENS[(activeIndex + 1) % PHONE_SCREENS.length].src}
                                                alt="Next Screen"
                                                width={170}
                                                height={340}
                                                className="w-full h-auto object-cover blur-[2px]"
                                            />
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Indicators */}
                            <div className="flex justify-center gap-2 mt-8">
                                {PHONE_SCREENS.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActiveIndex(i)}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-10 bg-[#FFB300]' : 'bg-white/10 w-1.5 hover:bg-white/20'}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== CONTEXT SECTION ===== */}
                <section className="py-24 bg-transparent overflow-hidden">
                    <div className="max-w-[1400px] mx-auto px-8 grid md:grid-cols-12 gap-12">
                        {/* Title Col */}
                        <div className="md:col-span-4 flex items-start gap-4">
                            <div className="w-1.5 h-8 bg-[#FFB300] rounded-full mt-1 shrink-0" />
                            <h2 className="text-4xl font-bold text-gray-500 opacity-60">Context</h2>
                        </div>

                        {/* Content Col */}
                        <div className="md:col-span-8 space-y-8">
                            <div className="max-w-xl">
                                <p className="text-white text-lg leading-relaxed">
                                    <span className="font-bold text-white">Bhoomibox</span> is reimagining how Indian families buy staples. Our direct-to-consumer platform connects farmers directly to your door, ensuring transparent pricing, premium quality, and traceability from field to kitchen.
                                </p>
                                <p className="text-gray-400 text-lg leading-relaxed mt-6">
                                    The target users for this app are high-income urban families who value purity, quality, and locally sourced food.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 pt-12">
                                <div className="rounded-[40px] overflow-hidden bg-[#f5f5f5]">
                                    <Image
                                        src="/bhoomi box images/Frame 1.png"
                                        alt="Using BhoomiBox App"
                                        width={600}
                                        height={450}
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                                <div className="rounded-[40px] overflow-hidden bg-[#000]">
                                    <Image
                                        src="/bhoomi box images/Frame 2.png"
                                        alt="App Interface on Device"
                                        width={600}
                                        height={450}
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* More sections will follow */}
                {/* ===== EASE OF USE SECTION ===== */}
                <section className="py-24 bg-transparent overflow-hidden">
                    <div className="max-w-[1400px] mx-auto px-8 grid md:grid-cols-12 gap-12">
                        {/* Title Col */}
                        <div className="md:col-span-5 flex items-start gap-4">
                            <div className="w-1.5 h-8 bg-[#FFB300] rounded-full mt-1 shrink-0" />
                            <h2 className="text-4xl md:text-5xl font-bold text-white max-w-sm">
                                The most easy-to-use app for all ages
                            </h2>
                        </div>

                        {/* Content Col */}
                        <div className="md:col-span-7 pt-4">
                            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                                The goal was to make <span className="font-bold text-white">Bhoomibox Mobile Features</span> accessible for people of all ages to use and their insights to assistance design to further improve usability.
                            </p>
                        </div>
                    </div>

                    <div className="max-w-[1400px] mx-auto px-8 mt-20">
                        <div className="rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl bg-[#0f0f0f] p-12 md:p-20 relative border border-white/5">
                            {/* Moving Gallery Container */}
                            <div className="flex flex-col gap-12">
                                {/* Row 1: Left to Right */}
                                <div className="flex overflow-hidden relative">
                                    <motion.div
                                        className="flex gap-8 shrink-0"
                                        animate={{ x: [0, -1920] }}
                                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                    >
                                        {[...PHONE_SCREENS, ...PHONE_SCREENS, ...PHONE_SCREENS].map((screen, idx) => (
                                            <div key={idx} className="w-[180px] md:w-[220px] rounded-[2rem] overflow-hidden border border-white/10 shadow-sm shrink-0">
                                                <Image
                                                    src={screen.src}
                                                    alt={screen.title}
                                                    width={220}
                                                    height={440}
                                                    className="w-full h-auto"
                                                />
                                            </div>
                                        ))}
                                    </motion.div>
                                </div>

                                {/* Row 2: Right to Left */}
                                <div className="flex overflow-hidden relative">
                                    <motion.div
                                        className="flex gap-8 shrink-0"
                                        animate={{ x: [-1920, 0] }}
                                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                    >
                                        {[...PHONE_SCREENS, ...PHONE_SCREENS, ...PHONE_SCREENS].map((screen, idx) => (
                                            <div key={idx} className="w-[180px] md:w-[220px] rounded-[2rem] overflow-hidden border border-white/10 shadow-sm shrink-0">
                                                <Image
                                                    src={screen.src}
                                                    alt={screen.title}
                                                    width={220}
                                                    height={440}
                                                    className="w-full h-auto"
                                                />
                                            </div>
                                        ))}
                                    </motion.div>
                                </div>
                            </div>

                            {/* Decorative Overlay for depth */}
                            <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#0f0f0f] to-transparent z-10 pointer-events-none" />
                            <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#0f0f0f] to-transparent z-10 pointer-events-none" />
                        </div>
                    </div>
                </section>

                {/* ===== CONNECTING USERS SECTION ===== */}
                <section className="py-24 bg-transparent text-white">
                    <div className="max-w-[1400px] mx-auto px-8 grid md:grid-cols-12 gap-12 items-center">
                        {/* Title Col */}
                        <div className="md:col-span-4 flex items-start gap-4">
                            <div className="w-1.5 h-8 bg-[#FFB300] rounded-full mt-1 shrink-0" />
                            <h2 className="text-4xl font-bold text-gray-500 opacity-60">Connecting Users to Farmers</h2>
                        </div>

                        {/* Content Col */}
                        <div className="md:col-span-8">
                            <p className="text-gray-300 text-lg leading-relaxed max-w-xl font-medium">
                                <span className="font-bold text-white italic">Eliminate the Middleman</span> and help Farmers get their fair share without paying more than what you should pay.
                            </p>
                        </div>
                    </div>

                    {/* Dark Feature Display */}
                    <div className="mt-20 relative w-full bg-black overflow-hidden py-32 rounded-[60px] max-w-[1400px] mx-auto px-8">
                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_#FFB300_0%,_transparent_70%)]" />
                        <div className="relative z-10 flex justify-center">
                            <div className="max-w-5xl w-full">
                                <Image
                                    src="/bhoomi box images/Frame 4.png"
                                    alt="Connecting Users to Farmers Interface"
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>

                        {/* Huge Background Text Overlay */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 pointer-events-none select-none">
                            <h2 className="text-[20vw] font-black text-white/5 whitespace-nowrap leading-none tracking-tighter">
                                BhoomiBox
                            </h2>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default BhoomiboxPage;
