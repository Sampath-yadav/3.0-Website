'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import styles from './WebBoard.module.css';

const WebBoard = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const boardLeftRef = useRef<HTMLDivElement>(null);
    const boardRightRef = useRef<HTMLDivElement>(null);
    const threadLeftRef = useRef<SVGLineElement>(null);
    const threadRightRef = useRef<SVGLineElement>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Check if board has already played in this session
        const hasPlayed = sessionStorage.getItem('hasPlayedWebBoard');
        if (hasPlayed) {
            return;
        }

        // Triggered after IntroLoader (Wait for new snappier intro)
        const timer = setTimeout(() => {
            setMounted(true);
            sessionStorage.setItem('hasPlayedWebBoard', 'true');
        }, 7500);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!mounted || !containerRef.current) return;

        const tl = gsap.timeline();

        // Target TOP position (Nav Bar level)
        const targetTop = 50;

        // Initial states - Start above viewport
        gsap.set([boardLeftRef.current, boardRightRef.current], {
            y: -300,
            opacity: 0,
            scale: 0.5
        });

        gsap.set(boardLeftRef.current, { rotateZ: -15 });
        gsap.set(boardRightRef.current, { rotateZ: 15 });

        gsap.set([threadLeftRef.current, threadRightRef.current], {
            strokeDasharray: 1500,
            strokeDashoffset: 1500
        });

        // 1. Shoot Threads and Sling Boards
        tl.to([threadLeftRef.current, threadRightRef.current], {
            strokeDashoffset: 0,
            duration: 0.4,
            ease: "power2.out",
            stagger: 0.05
        })
            .to([boardLeftRef.current, boardRightRef.current], {
                y: targetTop,
                opacity: 1,
                rotateZ: 0,
                scale: 1,
                duration: 1,
                ease: "power4.out",
                stagger: 0.05
            }, "-=0.2")
            // 2. Subtle elastic bounce & sway
            .to([boardLeftRef.current, boardRightRef.current], {
                y: targetTop + 10,
                duration: 0.8,
                ease: "elastic.out(1.2, 0.6)",
                stagger: 0.05
            }, "-=0.7")
            .to(boardLeftRef.current, {
                rotateZ: -2,
                duration: 1.2,
                repeat: 1,
                yoyo: true,
                ease: "sine.inOut"
            }, "-=0.3")
            .to(boardRightRef.current, {
                rotateZ: 2,
                duration: 1.2,
                repeat: 1,
                yoyo: true,
                ease: "sine.inOut"
            }, "<")
            // 3. Fade out
            .to(containerRef.current, {
                opacity: 0,
                scale: 1.05,
                filter: "blur(10px)",
                duration: 0.6,
                ease: "power2.inOut",
                delay: 1
            })
            .set(containerRef.current, { display: 'none' });

    }, [mounted]);

    if (!mounted) return null;

    return (
        <div ref={containerRef} className={styles.container}>
            {/* Thread SVGs */}
            <svg className={styles.svg}>
                <line
                    ref={threadLeftRef}
                    x1="0" y1="0"
                    x2="10%" y2="50" // Anchors to top-center of Left Board
                    className={styles.thread}
                />
                <line
                    ref={threadRightRef}
                    x1="100%" y1="0"
                    x2="90%" y2="50" // Anchors to top-center of Right Board
                    className={styles.thread}
                />
            </svg>

            {/* The Boards - Fixed to 50px top for perfect thread anchor */}
            <div ref={boardLeftRef} className={`${styles.board} ${styles.left}`}>
                <div className={styles.boardInner}>
                    <h2 className={styles.boardTitle}>Think</h2>
                </div>
            </div>

            <div ref={boardRightRef} className={`${styles.board} ${styles.right}`}>
                <div className={styles.boardInner}>
                    <h2 className={styles.boardTitle}>Create</h2>
                </div>
            </div>
        </div>
    );
};

export default WebBoard;
