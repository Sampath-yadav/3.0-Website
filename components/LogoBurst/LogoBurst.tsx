'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import styles from './LogoBurst.module.css';

const LOGO_COUNT = 20;

const LogoBurst = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // We delay the animation to match the end of the IntroLoader
        // IntroLoader zoom out finishes around 5.9s
        const timer = setTimeout(() => {
            setMounted(true);
        }, 5900);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!mounted || !containerRef.current) return;

        const logos = containerRef.current.querySelectorAll(`.${styles.miniLogo}`);

        logos.forEach((logo, i) => {
            // Random start side: 0=top, 1=right, 2=bottom, 3=left
            const side = i % 4; // Distribute evenly
            let startX = 0, startY = 0;
            const offset = 180;

            if (side === 0) { // Top
                startX = Math.random() * 100;
                startY = -offset;
            } else if (side === 1) { // Right
                startX = 100 + offset;
                startY = Math.random() * 100;
            } else if (side === 2) { // Bottom
                startX = Math.random() * 100;
                startY = 100 + offset;
            } else { // Left
                startX = -offset;
                startY = Math.random() * 100;
            }

            // Target position: Cross the screen or settle in a random spot
            const crossScreen = Math.random() > 0.4;
            let endX, endY;

            if (crossScreen) {
                // Fly to the opposite side
                endX = side === 1 ? -offset : (side === 3 ? 100 + offset : Math.random() * 100);
                endY = side === 0 ? 100 + offset : (side === 2 ? -offset : Math.random() * 100);
            } else {
                // Settle in a random central area
                endX = 10 + Math.random() * 80;
                endY = 10 + Math.random() * 80;
            }

            // Random rotation and scale
            const rotation = (Math.random() - 0.5) * 1080;
            const scale = 0.15 + Math.random() * 0.4;

            gsap.set(logo, {
                left: side === 1 || side === 3 ? `${startX}vw` : `${startX}%`,
                top: side === 0 || side === 2 ? `${startY}vh` : `${startY}%`,
                opacity: 0,
                scale: 0,
                rotate: rotation - 540
            });

            const tl = gsap.timeline();

            tl.to(logo, {
                left: side === 1 || side === 3 ? `${endX}vw` : `${endX}%`,
                top: side === 0 || side === 2 ? `${endY}vh` : `${endY}%`,
                opacity: 0.7,
                scale: scale,
                rotate: rotation,
                duration: 1.0 + Math.random() * 1.2,
                ease: "power3.out",
                delay: Math.random() * 0.7
            })
                .to(logo, {
                    opacity: 0,
                    scale: scale * 0.6,
                    duration: 0.8,
                    ease: "power4.in",
                    delay: 0.2
                });
        });

        // Hide container after animation
        gsap.to(containerRef.current, {
            display: 'none',
            delay: 4
        });

    }, [mounted]);

    if (!mounted) return null;

    return (
        <div ref={containerRef} className={styles.container}>
            {Array.from({ length: LOGO_COUNT }).map((_, i) => (
                <img
                    key={i}
                    src="/images/logos/logo.png"
                    alt=""
                    className={styles.miniLogo}
                />
            ))}
        </div>
    );
};

export default LogoBurst;
