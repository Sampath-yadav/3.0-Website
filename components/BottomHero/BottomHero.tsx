'use client';

import Link from 'next/link';
import styles from './BottomHero.module.css';

const BottomHero = () => {
    return (
        <section className={styles.bottomHero}>
            <div className={`${styles.container} container`}>
                <div className={styles.content}>
                    <h2 className={styles.title}>
                        Engineering intelligent systems for <br />
                        ambitious brands
                    </h2>
                    <p className={styles.description}>
                        Ready to move beyond ordinary software? We design scalable products,
                        AI-driven workflows, and autonomous agents that engage users,
                        streamline operations, and turn bold ideas into lasting digital impact.
                    </p>
                    <div className={styles.actions}>
                        <Link href="/contact-us">
                            <button className={styles.ctaBtn}>
                                Let's Collaborate
                                <span className={styles.iconCircle}>
                                    <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BottomHero;
