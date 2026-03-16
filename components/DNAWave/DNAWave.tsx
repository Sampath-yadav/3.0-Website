'use client';

import { useEffect, useRef, useState } from 'react';

interface DNAWaveProps {
    side: 'left' | 'right';
    visible: boolean;
}

// ─── Side DNA Helix (scrolls upward) ─────────────────────────────────────────
const DNAWave = ({ side, visible }: DNAWaveProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animFrameRef = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const W = 220;
        canvas.width = W;
        canvas.height = window.innerHeight;

        const amplitude = 55;
        const frequency = 0.022;
        const scrollSpeed = 0.04;
        const nodeSpacing = 52;

        let yOffset = 0;
        let time = 0;

        const draw = () => {
            const H = canvas.height;
            ctx.clearRect(0, 0, W, H);

            const cx = W * 0.5;
            const loopH = H * 4;

            // Ambient glow layer
            const glowGrad = ctx.createLinearGradient(0, 0, 0, H);
            glowGrad.addColorStop(0, 'rgba(255,160,30,0)');
            glowGrad.addColorStop(0.5, 'rgba(255,160,30,0.07)');
            glowGrad.addColorStop(1, 'rgba(255,160,30,0)');
            ctx.fillStyle = glowGrad;
            ctx.fillRect(0, 0, W, H);

            const drawStrand = (phase: number, color1: string, color2: string, glowColor: string) => {
                ctx.beginPath();
                let first = true;
                for (let i = -50; i < loopH + 50; i += 2) {
                    const y = i - yOffset;
                    if (y < -60 || y > H + 60) continue;
                    const x = cx + Math.sin(i * frequency + phase) * amplitude;
                    if (first) { ctx.moveTo(x, y); first = false; }
                    else ctx.lineTo(x, y);
                }
                const g = ctx.createLinearGradient(0, 0, 0, H);
                g.addColorStop(0, color1 + '44');
                g.addColorStop(0.3, color2 + 'FF');
                g.addColorStop(0.7, color1 + 'FF');
                g.addColorStop(1, color2 + '44');
                ctx.strokeStyle = g;
                ctx.lineWidth = 3.5;
                ctx.shadowColor = glowColor;
                ctx.shadowBlur = 22;
                ctx.stroke();
            };

            drawStrand(0, '#FF8C00', '#FFD700', '#FF6600');
            drawStrand(Math.PI, '#FFD700', '#FF4500', '#FFAA00');

            // Cross-rungs
            for (let i = nodeSpacing / 2; i < loopH; i += nodeSpacing) {
                const y = i - yOffset;
                if (y < -20 || y > H + 20) continue;
                const x1 = cx + Math.sin(i * frequency) * amplitude;
                const x2 = cx + Math.sin(i * frequency + Math.PI) * amplitude;
                const rungGrad = ctx.createLinearGradient(x1, y, x2, y);
                rungGrad.addColorStop(0, 'rgba(255, 140, 0, 0.6)');
                rungGrad.addColorStop(0.5, 'rgba(255, 220, 50, 0.8)');
                rungGrad.addColorStop(1, 'rgba(255, 140, 0, 0.6)');
                ctx.beginPath();
                ctx.moveTo(x1, y);
                ctx.lineTo(x2, y);
                ctx.strokeStyle = rungGrad;
                ctx.lineWidth = 1.8;
                ctx.shadowBlur = 8;
                ctx.shadowColor = '#FFB432';
                ctx.stroke();

                [[x1, '#FF6600'], [x2, '#FFD700']].forEach(([x, dotColor]) => {
                    const pf = 1 + 0.3 * Math.sin(time * 0.04 + i * 0.1);
                    ctx.beginPath();
                    ctx.arc(Number(x), y, 5 * pf, 0, Math.PI * 2);
                    ctx.fillStyle = String(dotColor);
                    ctx.shadowColor = String(dotColor);
                    ctx.shadowBlur = 20;
                    ctx.fill();
                });
            }

            // Floating particles
            for (let p = 0; p < 8; p++) {
                const py = ((p * 137 + yOffset * 0.3) % H + H) % H;
                const px = cx + Math.sin(py * 0.05 + p) * (amplitude * 1.4);
                const alpha = 0.4 + 0.4 * Math.sin(time * 0.03 + p * 1.7);
                const r = 2 + 2 * Math.abs(Math.sin(p * 2.5));
                ctx.beginPath();
                ctx.arc(px, py, r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 200, 50, ${alpha})`;
                ctx.shadowColor = '#FF8C00';
                ctx.shadowBlur = 18;
                ctx.fill();
            }

            ctx.shadowBlur = 0;
        };

        const animate = () => {
            time++;
            yOffset += scrollSpeed;
            const loopHeight = (Math.PI * 2) / frequency;
            if (yOffset >= loopHeight) yOffset -= loopHeight;
            draw();
            animFrameRef.current = requestAnimationFrame(animate);
        };

        animate();
        const onResize = () => { canvas.height = window.innerHeight; };
        window.addEventListener('resize', onResize);
        return () => {
            cancelAnimationFrame(animFrameRef.current);
            window.removeEventListener('resize', onResize);
        };
    }, [side]);

    return (
        <canvas
            ref={canvasRef}
            width={220}
            style={{
                position: 'fixed',
                top: 0,
                [side]: 0,
                height: '100vh',
                zIndex: 0,
                pointerEvents: 'none',
                opacity: visible ? 1 : 0,
                transition: 'opacity 1.5s ease',
            }}
        />
    );
};

// ─── Center faint DNA (large scale, very translucent) ─────────────────────────
const CenterDNA = ({ visible }: { visible: boolean }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animFrameRef = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const frequency = 0.009;   // wider helix
        const amplitude = () => canvas.width * 0.08; // 8% of viewport width
        const scrollSpeed = 0.01;
        const nodeSpacing = 90;

        let yOffset = 0;

        const draw = () => {
            const W = canvas.width;
            const H = canvas.height;
            ctx.clearRect(0, 0, W, H);

            const cx = W / 2;
            const amp = amplitude();
            const loopH = H * 4;

            // Strand 1
            ctx.beginPath();
            let first = true;
            for (let i = -100; i < loopH + 100; i += 3) {
                const y = i - yOffset;
                if (y < -100 || y > H + 100) continue;
                const x = cx + Math.sin(i * frequency) * amp;
                if (first) { ctx.moveTo(x, y); first = false; }
                else ctx.lineTo(x, y);
            }
            ctx.strokeStyle = 'rgba(255, 160, 30, 0.10)';
            ctx.lineWidth = 2;
            ctx.shadowBlur = 0;
            ctx.stroke();

            // Strand 2
            ctx.beginPath();
            first = true;
            for (let i = -100; i < loopH + 100; i += 3) {
                const y = i - yOffset;
                if (y < -100 || y > H + 100) continue;
                const x = cx + Math.sin(i * frequency + Math.PI) * amp;
                if (first) { ctx.moveTo(x, y); first = false; }
                else ctx.lineTo(x, y);
            }
            ctx.strokeStyle = 'rgba(255, 200, 50, 0.10)';
            ctx.lineWidth = 2;
            ctx.stroke();

            // Center rungs
            for (let i = nodeSpacing / 2; i < loopH; i += nodeSpacing) {
                const y = i - yOffset;
                if (y < -20 || y > H + 20) continue;
                const x1 = cx + Math.sin(i * frequency) * amp;
                const x2 = cx + Math.sin(i * frequency + Math.PI) * amp;
                ctx.beginPath();
                ctx.moveTo(x1, y);
                ctx.lineTo(x2, y);
                ctx.strokeStyle = 'rgba(255, 180, 50, 0.12)';
                ctx.lineWidth = 1.2;
                ctx.stroke();

                // Tiny dots
                [x1, x2].forEach(x => {
                    ctx.beginPath();
                    ctx.arc(x, y, 3.5, 0, Math.PI * 2);
                    ctx.fillStyle = 'rgba(255, 160, 40, 0.18)';
                    ctx.fill();
                });
            }
        };

        const animate = () => {
            yOffset += scrollSpeed;
            const loopHeight = (Math.PI * 2) / frequency;
            if (yOffset >= loopHeight) yOffset -= loopHeight;
            draw();
            animFrameRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animFrameRef.current);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: 0,
                pointerEvents: 'none',
                opacity: visible ? 1 : 0,
                transition: 'opacity 2s ease',
            }}
        />
    );
};

// ─── Main Export ──────────────────────────────────────────────────────────────
export default function DNAWaveBackground() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <CenterDNA visible={visible} />
            <DNAWave side="left" visible={visible} />
            <DNAWave side="right" visible={visible} />
        </>
    );
}
