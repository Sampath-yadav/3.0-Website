"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    const [activeSocialId, setActiveSocialId] = useState<string | null>(null);
    const [locationView, setLocationView] = useState<'address' | 'link' | null>(null);

    const socials = [
        {
            id: 'linkedin',
            label: 'LinkedIn',
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#ffffff">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
            ),
            link: 'https://www.linkedin.com/company/threepointolabs/posts/?feedView=all'
        },
        {
            id: 'location',
            label: 'Location',
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                </svg>
            ),
            link: 'https://share.google/Tyt1q49nlDofEG6N3',
            address: 'Fourth Floor, 604, Ace Monte Carlo, x Roads, beside TCS Kohinoor Park, Land Mark Residency, Kothaguda, Hyderabad, Telangana 500084'
        },
        {
            id: 'instagram',
            label: 'Instagram',
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
            ),
            link: 'https://www.instagram.com/3.0labs/'
        }
    ];

    const handleIconClick = (e: React.MouseEvent, id: string) => {
        e.preventDefault();

        // LinkedIn should redirect directly
        if (id === 'linkedin') {
            const social = socials.find(s => s.id === 'linkedin');
            if (social && 'link' in social) {
                window.open(social.link, '_blank', 'noopener,noreferrer');
            }
            return;
        }

        if (activeSocialId === id) {
            setActiveSocialId(null);
            setLocationView(null);
        } else {
            setActiveSocialId(id);
            if (id !== 'location') {
                setLocationView(null);
            }
        }
    };

    const getActiveLink = () => {
        const social = socials.find(s => s.id === activeSocialId);
        if (!social || !('link' in social)) return null;
        if (social.id === 'location') {
            if (locationView === 'link') return social.link;
            if (locationView === 'address') return null; // Handled separately
        }
        return social.link;
    };

    const getActiveAddress = () => {
        if (activeSocialId === 'location' && locationView === 'address') {
            return socials.find(s => s.id === 'location')?.address;
        }
        return null;
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.mainFooter}>
                <div className={styles.footerContainer}>
                    {/* Row 1: Logo & Nav Links */}
                    <div className={styles.footerTopRow}>
                        <div className={styles.logoCol}>
                            <img src="/images/logos/image 74.png" alt="3.0 Labs" className={styles.logo} />
                        </div>
                        <div className={styles.navLinks}>
                            <Link href="#about">About us</Link>
                            <Link href="#contact">Contact us</Link>
                            <Link href="#services">Services</Link>
                            <Link href="#terms">Terms & Conditions</Link>
                        </div>
                    </div>

                    <div className={styles.footerDivider}></div>

                    {/* Row 2: Copyright & Socials */}
                    <div className={styles.footerBottomRow}>
                        <p className={styles.copyright}>©2025 3.0 Labs. All Rights Reserved</p>
                        <div className={styles.socials}>
                            {socials.map((social) => (
                                <button
                                    key={social.id}
                                    className={`${styles.socialIcon} ${activeSocialId === social.id ? styles.active : ''}`}
                                    onClick={(e) => handleIconClick(e, social.id)}
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Selection for Location Options */}
                    {activeSocialId === 'location' && (
                        <div className={styles.locationOptions}>
                            <button
                                className={`${styles.optionBtn} ${locationView === 'address' ? styles.active : ''}`}
                                onClick={() => setLocationView('address')}
                            >
                                Address
                            </button>
                            <button
                                className={`${styles.optionBtn} ${locationView === 'link' ? styles.active : ''}`}
                                onClick={() => setLocationView('link')}
                            >
                                Link
                            </button>
                        </div>
                    )}

                    {/* Revealed Content Area */}
                    <div className={`${styles.revealedLinkArea} ${(getActiveLink() || getActiveAddress()) ? styles.show : ''}`}>
                        {getActiveLink() && (
                            <a href={getActiveLink()!} target="_blank" rel="noopener noreferrer" className={styles.revealedLink}>
                                {getActiveLink()}
                            </a>
                        )}
                        {getActiveAddress() && (
                            <p className={styles.revealedAddress}>
                                {getActiveAddress()}
                            </p>
                        )}
                    </div>

                    <div className={styles.hugeBranding}>
                        <h3 className={styles.hugeText}>3.0 Labs</h3>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
