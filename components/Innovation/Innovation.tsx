'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Innovation.module.css';

const services = [
    {
        title: 'Full-Stack Apps',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="4" width="18" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" />
                <path d="M3 9H21" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="5.5" cy="6.5" r="0.5" fill="currentColor" />
                <circle cx="7.5" cy="6.5" r="0.5" fill="currentColor" />
                <circle cx="9.5" cy="6.5" r="0.5" fill="currentColor" />
                <path d="M7 14H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M14 14H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
        type: 'gradient'
    },
    {
        title: 'AI Workflows',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="4" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
                <rect x="12" y="12" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="16" cy="8" r="1.5" stroke="currentColor" strokeWidth="1.5" />
            </svg>
        ),
        type: 'white-orange'
    },
    {
        title: 'Autonomous Agents',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4V2M12 4C14.7614 4 17 6.23858 17 9V11C18.6569 11 20 12.3431 20 14V17C20 18.6569 18.6569 20 17 20H7C5.34315 20 4 18.6569 4 17V14C4 12.3431 5.34315 11 7 11V9C7 6.23858 9.23858 4 12 4Z" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="9" cy="14" r="1" fill="currentColor" />
                <circle cx="15" cy="14" r="1" fill="currentColor" />
                <path d="M10 17H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
        type: 'white-blue'
    }
];

const Innovation = () => {
    return (
        <section className={styles.innovation} id="services">
            <div className={styles.mainContainer}>
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        Where innovation <br /> meets <span className={styles.gradientText}>aesthetics</span>
                    </h2>
                </div>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className={`${styles.card} ${styles[service.type]}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                        >
                            <div className={styles.cardIcon}>{service.icon}</div>
                            <h3 className={styles.serviceTitle}>{service.title}</h3>
                        </motion.div>
                    ))}
                </div>

                <div className={styles.banner}>
                    <div className={styles.bannerText}>
                        <h3>    Our Work in Action.</h3>
                        <p>Start Your Idea Journey with Us!</p>
                    </div>
                    <div className={styles.bannerActions}>
                        <Link href="/contact-us">
                            <button className={styles.btnPillWhite}>
                                Let's Collaborate
                                <span className={styles.iconCircle}>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                        <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </button>
                        </Link>
                        <button className={styles.btnPillOutline}>
                            View Portfolio
                            <span className={styles.iconCircleOutline}>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path d="M1 11L11 1M11 1H1M11 1V11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Innovation;
