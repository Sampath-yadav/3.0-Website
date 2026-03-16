'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './NebulaCursor.module.css';

const NebulaCursor = () => {
    const coreRef = useRef<HTMLDivElement>(null);
    const nebulaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const core = coreRef.current;
        const nebula = nebulaRef.current;

        if (!core || !nebula) return;

        // Set initial positions off-screen
        gsap.set([core, nebula], { x: -100, y: -100 });

        const moveCursor = (e: MouseEvent) => {
            const { clientX, clientY } = e;

            // Core follows mouse instantly with high frequency but smooth damping via GSAP
            gsap.to(core, {
                x: clientX,
                y: clientY,
                duration: 0.1,
                ease: "power2.out"
            });

            // Nebula follows with more lag for that "floating" feel
            gsap.to(nebula, {
                x: clientX,
                y: clientY,
                duration: 0.8,
                ease: "power3.out"
            });
        };

        const handleMouseDown = () => {
            gsap.to(core, { scale: 1.5, duration: 0.2 });
            gsap.to(nebula, { scale: 0.8, opacity: 0.8, duration: 0.2 });
        };

        const handleMouseUp = () => {
            gsap.to(core, { scale: 1, duration: 0.2 });
            gsap.to(nebula, { scale: 1, opacity: 1, duration: 0.2 });
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    return (
        <div className={styles.cursorContainer}>
            <div ref={nebulaRef} className={styles.nebula}>
                <div className={styles.nebulaInner} />
            </div>
            <div ref={coreRef} className={styles.core} />
        </div>
    );
};

export default NebulaCursor;
