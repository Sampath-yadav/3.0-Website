'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Hero.module.css';

const words = [
    { text: 'design', icon: '⚙️' },
    { text: 'engineer', icon: '🧑‍💻' },
    { text: 'build', icon: '🛠️' },
    { text: 'ship', icon: '🚀' }
];

const SCENES = [
    {
        id: 'logo',
        duration: 3500,
        bg: '#fafafa',
    },
    {
        id: 'services',
        duration: 5000,
        bg: '#fafafa',
    },
    {
        id: 'approach',
        duration: 5000,
        bg: '#fafafa',
    },
    {
        id: 'portfolio',
        duration: 5000,
        bg: '#fafafa',
    },
];

const services = [
    { title: 'Full-Stack Apps', icon: '🖥️', color: '#ff8c6b' },
    { title: 'AI Workflows', icon: '🤖', color: '#7c3aed' },
    { title: 'Autonomous Agents', icon: '⚡', color: '#FFB300' },
];

const steps = [
    'Start with the problem',
    'Design for change',
    'Engineer through iterations',
    'Validate before scaling',
];

const projects = [
    { name: 'FundPitch', color: '#ff8c6b' },
    { name: 'VDTS', color: '#7c3aed' },
    { name: 'BhoomiBox', color: '#FFB300' },
    { name: 'NaviPrep', color: '#3b82f6' },
    { name: 'Starlink', color: '#6366f1' },
    { name: 'Blue Cross', color: '#10b981' },
];

const Hero = () => {
    const [wordIndex, setWordIndex] = useState(0);
    const [sceneIndex, setSceneIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex((prev) => (prev + 1) % words.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setSceneIndex((prev) => (prev + 1) % SCENES.length);
        }, SCENES[sceneIndex].duration);
        return () => clearTimeout(timer);
    }, [sceneIndex]);

    return (
        <section className={styles.hero}>
            <div className={`${styles.container} container`}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Engineering Ideas Into <br />
                        <span className={styles.gradientText}>Intelligent Products</span>
                    </h1>
                    <div className={styles.description}>
                        We
                        <div className={styles.badgeWrapper}>
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={words[wordIndex].text}
                                    initial={{ y: 20, opacity: 0, rotateX: -90 }}
                                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                                    exit={{ y: -20, opacity: 0, rotateX: 90 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className={styles.designBadge}
                                >
                                    <span className={styles.icon}>{words[wordIndex].icon}</span>
                                    {words[wordIndex].text}
                                </motion.span>
                            </AnimatePresence>
                        </div>
                        AI-powered products.
                    </div>
                </div>

                <div className={styles.visual}>
                    <div className={styles.glassFrame}>
                        <div className={styles.innerContent}>
                            <div className={styles.animatedShowcase}>
                                <AnimatePresence mode="wait">
                                    {/* SCENE 1: Logo */}
                                    {sceneIndex === 0 && (
                                        <motion.div
                                            key="logo"
                                            className={styles.scene}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <motion.img
                                                src="/images/logos/intologo.png"
                                                alt="3.0 Labs"
                                                className={styles.logoImage}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
                                            />
                                            <motion.div
                                                className={styles.sceneLine}
                                                initial={{ scaleX: 0 }}
                                                animate={{ scaleX: 1 }}
                                                transition={{ delay: 1.2, duration: 1.5, ease: 'easeInOut' }}
                                            />
                                        </motion.div>
                                    )}

                                    {/* SCENE 2: Services */}
                                    {sceneIndex === 1 && (
                                        <motion.div
                                            key="services"
                                            className={styles.scene}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <motion.p
                                                className={styles.sceneLabel}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.2 }}
                                            >
                                                What we build
                                            </motion.p>
                                            <div className={styles.serviceCards}>
                                                {services.map((s, i) => (
                                                    <motion.div
                                                        key={s.title}
                                                        className={styles.serviceCard}
                                                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                                        transition={{ delay: 0.4 + i * 0.2, duration: 0.5 }}
                                                        style={{ borderColor: s.color }}
                                                    >
                                                        <span className={styles.serviceIcon}>{s.icon}</span>
                                                        <span className={styles.serviceTitle}>{s.title}</span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* SCENE 3: Approach */}
                                    {sceneIndex === 2 && (
                                        <motion.div
                                            key="approach"
                                            className={styles.scene}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <motion.p
                                                className={styles.sceneLabel}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.2 }}
                                            >
                                                Our approach
                                            </motion.p>
                                            <div className={styles.stepList}>
                                                {steps.map((step, i) => (
                                                    <motion.div
                                                        key={step}
                                                        className={styles.stepItem}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 0.4 + i * 0.3, duration: 0.4 }}
                                                    >
                                                        <span className={styles.stepNumber}>0{i + 1}</span>
                                                        <span className={styles.stepText}>{step}</span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* SCENE 4: Portfolio */}
                                    {sceneIndex === 3 && (
                                        <motion.div
                                            key="portfolio"
                                            className={styles.scene}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <motion.p
                                                className={styles.sceneLabel}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.2 }}
                                            >
                                                Products shipped
                                            </motion.p>
                                            <div className={styles.projectGrid}>
                                                {projects.map((p, i) => (
                                                    <motion.div
                                                        key={p.name}
                                                        className={styles.projectChip}
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: 0.3 + i * 0.12, duration: 0.4 }}
                                                        style={{ borderColor: p.color, color: p.color }}
                                                    >
                                                        {p.name}
                                                    </motion.div>
                                                ))}
                                            </div>
                                            <motion.p
                                                className={styles.sceneSubtext}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 1.2 }}
                                            >
                                                & many more...
                                            </motion.p>
                                        </motion.div>
                                    )}

                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
