"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './Background3D.module.css';

const Background3D = () => {
    const meshRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const xPos = (clientX / window.innerWidth) - 0.5;
            const yPos = (clientY / window.innerHeight) - 0.5;

            // Move mesh grid subtly (lower depth)
            gsap.to(meshRef.current, {
                x: xPos * 40,
                y: yPos * 40,
                duration: 1.5,
                ease: 'power2.out'
            });

            // Move wavy glow more prominently (greater depth)
            gsap.to(glowRef.current, {
                x: -50 + (xPos * 80), // -50 is for the initial translateX(-50%)
                y: yPos * 80,
                duration: 2,
                ease: 'power2.out'
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className={styles.container}>
            <div ref={meshRef} className={styles.meshBg}></div>
            <div ref={glowRef} className={styles.wavyGlow}></div>
        </div>
    );
};

export default Background3D;
