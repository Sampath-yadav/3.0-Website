'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const Particle = ({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
            y: [0, -20, 0]
        }}
        transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: delay,
            ease: "easeInOut"
        }}
        style={{
            position: 'absolute',
            left: x,
            top: y,
            width: size,
            height: size,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,200,50,0.8) 0%, rgba(255,100,0,0) 70%)',
            filter: 'blur(1px)',
            boxShadow: '0 0 10px rgba(255,165,0,0.5)',
            zIndex: 1,
        }}
    />
);

const AnimatedWaveBackground = () => {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    const particles = useMemo(() => {
        if (!mounted) return [];
        return Array.from({ length: 20 }).map((_, i) => ({
            id: i,
            delay: Math.random() * 5,
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            size: 2 + Math.random() * 3,
        }));
    }, [mounted]);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: -1 }}>
            {/* Background Particles */}
            {particles.map((p) => (
                <Particle key={p.id} {...p} />
            ))}

            {/* LEFT Wave - Floating Vertical */}
            <motion.div
                animate={{
                    y: [-40, 40, -40],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute -left-32 top-1/4 h-[120%] w-[35vw] opacity-40 blur-[100px]"
                style={{
                    background: 'linear-gradient(135deg, #FFD700 0%, #FF8C00 100%)',
                    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                }}
            />

            {/* RIGHT Wave - Mirrored Floating Vertical */}
            <motion.div
                animate={{
                    y: [40, -40, 40],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute -right-32 top-1/4 h-[120%] w-[35vw] opacity-40 blur-[100px]"
                style={{
                    background: 'linear-gradient(225deg, #FFD700 0%, #FF8C00 100%)',
                    borderRadius: '70% 30% 30% 70% / 30% 30% 70% 70%',
                }}
            />
        </div>
    );
};

export default AnimatedWaveBackground;
