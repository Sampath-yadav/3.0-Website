'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Approach.module.css';

/* ─── SVG Icons ─────────────────────────────────────────────── */

const Icon01 = () => (
  <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g01a" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ff5c35" />
        <stop offset="100%" stopColor="#ff9d6c" />
      </linearGradient>
      <linearGradient id="g01b" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ff7a55" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#ff9d6c" stopOpacity="0.1" />
      </linearGradient>
    </defs>
    <path d="M60 8 L92 88 L60 72 L28 88 Z" fill="url(#g01a)" />
    <path d="M60 8 L92 88 L60 72 Z" fill="rgba(0,0,0,0.12)" />
    <path d="M60 72 L28 88 L60 52 Z" fill="rgba(255,255,255,0.15)" />
    <ellipse cx="60" cy="94" rx="28" ry="4" fill="rgba(255,92,53,0.18)" />
  </svg>
);

const Icon02 = () => (
  <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g02" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ff5c35" />
        <stop offset="100%" stopColor="#ff9d6c" />
      </linearGradient>
    </defs>
    <circle cx="60" cy="50" r="36" stroke="url(#g02)" strokeWidth="7" />
    <circle cx="60" cy="50" r="18" fill="url(#g02)" />
    <circle cx="60" cy="50" r="10" fill="white" />
    {[0, 90, 180, 270].map((deg, i) => {
      const r = (deg * Math.PI) / 180;
      const x1 = 60 + 38 * Math.sin(r);
      const y1 = 50 - 38 * Math.cos(r);
      const x2 = 60 + 44 * Math.sin(r);
      const y2 = 50 - 44 * Math.cos(r);
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#ff5c35" strokeWidth="3" strokeLinecap="round" />;
    })}
    <ellipse cx="60" cy="93" rx="26" ry="4" fill="rgba(255,92,53,0.15)" />
  </svg>
);

const Icon03 = () => (
  <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g03t" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#ff7a55" />
        <stop offset="100%" stopColor="#ff9d6c" />
      </linearGradient>
      <linearGradient id="g03l" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ff5c35" />
        <stop offset="100%" stopColor="#c93e20" />
      </linearGradient>
      <linearGradient id="g03r" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ff9d6c" />
        <stop offset="100%" stopColor="#ff7a55" />
      </linearGradient>
    </defs>
    <path d="M60 14 L88 30 L60 46 L32 30 Z" fill="url(#g03t)" />
    <path d="M32 30 L60 46 L60 78 L32 62 Z" fill="url(#g03l)" />
    <path d="M88 30 L60 46 L60 78 L88 62 Z" fill="url(#g03r)" />
    <ellipse cx="60" cy="92" rx="24" ry="4" fill="rgba(255,92,53,0.18)" />
  </svg>
);

const Icon04 = () => (
  <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g04" x1="0%" y1="50%" x2="100%" y2="50%">
        <stop offset="0%" stopColor="#ff5c35" />
        <stop offset="100%" stopColor="#ff9d6c" />
      </linearGradient>
    </defs>
    <path
      d="M14 50 L74 50 M74 50 L52 28 M74 50 L52 72"
      stroke="url(#g04)"
      strokeWidth="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line x1="14" y1="38" x2="44" y2="38" stroke="#ff9d6c" strokeWidth="3.5" strokeLinecap="round" strokeOpacity="0.45" />
    <line x1="8" y1="50" x2="34" y2="50" stroke="#ff9d6c" strokeWidth="3.5" strokeLinecap="round" strokeOpacity="0.3" />
    <line x1="14" y1="62" x2="44" y2="62" stroke="#ff9d6c" strokeWidth="3.5" strokeLinecap="round" strokeOpacity="0.45" />
    <ellipse cx="60" cy="90" rx="28" ry="4" fill="rgba(255,92,53,0.15)" />
  </svg>
);

const Icon05 = () => (
  <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g05a" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ff5c35" />
        <stop offset="100%" stopColor="#ff9d6c" />
      </linearGradient>
      <linearGradient id="g05b" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ff9d6c" />
        <stop offset="100%" stopColor="#ff5c35" stopOpacity="0.6" />
      </linearGradient>
    </defs>
    <path d="M60 10 L90 45 L60 88 L30 45 Z" fill="url(#g05a)" />
    <path d="M60 10 L90 45 L60 47 Z" fill="rgba(255,255,255,0.2)" />
    <path d="M30 45 L60 47 L60 88 Z" fill="rgba(0,0,0,0.1)" />
    <path d="M60 10 L30 45 L60 47 Z" fill="rgba(255,255,255,0.1)" />
    <line x1="30" y1="45" x2="90" y2="45" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
    <line x1="60" y1="10" x2="60" y2="88" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
    <ellipse cx="60" cy="93" rx="26" ry="4" fill="rgba(255,92,53,0.18)" />
  </svg>
);

const Icon06 = () => (
  <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g06" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ff5c35" />
        <stop offset="100%" stopColor="#ff9d6c" />
      </linearGradient>
    </defs>
    <circle cx="60" cy="48" r="34" fill="url(#g06)" opacity="0.15" />
    <circle cx="60" cy="48" r="34" stroke="url(#g06)" strokeWidth="3" />
    <path
      d="M40 48 L54 62 L82 34"
      stroke="url(#g06)"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="20" cy="22" r="3.5" fill="#ff9d6c" opacity="0.7" />
    <circle cx="100" cy="18" r="2.5" fill="#ff5c35" opacity="0.6" />
    <circle cx="106" cy="72" r="3" fill="#ff9d6c" opacity="0.5" />
    <ellipse cx="60" cy="92" rx="28" ry="4" fill="rgba(255,92,53,0.18)" />
  </svg>
);

/* ─── Step data ─────────────────────────────────────────────── */
const steps = [
  {
    id: '01',
    title: 'Start With the Problem',
    description:
      'We begin by understanding the users, the context, and the problem — knowing that early assumptions are rarely complete.',
    Icon: Icon01,
  },
  {
    id: '02',
    title: 'Decide What to Build First',
    description:
      "We don't build applications just because they're requested. We help decide the right starting point — whether that's a full-stack app, an AI workflow, or an autonomous agent.",
    Icon: Icon02,
  },
  {
    id: '03',
    title: 'Design for an Unclear Future',
    description:
      'We design systems with the expectation that direction will evolve. Early versions are built to support change, not lock decisions in.',
    Icon: Icon03,
  },
  {
    id: '04',
    title: 'Engineer Through Rapid Iterations',
    description:
      'Design and development move in short cycles. As understanding improves and priorities shift, we adjust systems and deliverables.',
    Icon: Icon04,
  },
  {
    id: '05',
    title: "Adapt With a Founder's Mindset",
    description:
      'We work alongside founders as clarity emerges — validating decisions, refining direction, and responding to what the product teaches us.',
    Icon: Icon05,
  },
  {
    id: '06',
    title: 'Validate Before Committing',
    description:
      'We use proof-of-concepts to test direction and ensure alignment before scaling further.',
    Icon: Icon06,
  },
];

/* ─── Component ─────────────────────────────────────────────── */
export default function Approach() {
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const connectorFillRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const N = steps.length;
    const STEPS = N - 1;

    const refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 800);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // DESKTOP & TABLET
      mm.add("(min-width: 769px)", () => {
        /* ── Initial states ── */
        cardRefs.current.forEach((card, i) => {
          if (!card) return;
          gsap.set(card, {
            opacity: i === 0 ? 1 : 0.35,
            y: i === 0 ? 0 : 20,
            scale: i === 0 ? 1 : 0.92,
          });
        });

        if (connectorFillRef.current) gsap.set(connectorFillRef.current, { scaleX: 0, transformOrigin: 'left center' });

        /* ── Animated Timeline ── */
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => `+=${STEPS * window.innerHeight * 1.2}`,
            pin: true,
            scrub: 0.8,
            anticipatePin: 1,
            fastScrollEnd: true,
            invalidateOnRefresh: true,
            onLeave: () => ScrollTrigger.refresh(),
            onLeaveBack: () => ScrollTrigger.refresh(),
            onUpdate: (self) => {
              const rawIndex = self.progress * STEPS;

              cardRefs.current.forEach((card, i) => {
                if (!card) return;
                const dist = Math.abs(i - rawIndex);
                // Smooth interpolation: 1 at center, 0 at dist=1.5
                const proximity = Math.max(0, 1 - dist / 1.5);
                const isActive = dist < 0.5;

                gsap.to(card, {
                  opacity: 0.35 + proximity * 0.65,
                  scale: 0.92 + proximity * 0.08,
                  y: isActive ? -8 : 20 * (1 - proximity),
                  boxShadow: isActive
                    ? '0 20px 60px rgba(178, 33, 90, 0.15), 0 8px 24px rgba(255, 92, 53, 0.1)'
                    : '0 4px 16px rgba(0, 0, 0, 0.04)',
                  duration: 0.3,
                  overwrite: 'auto',
                });
              });

              dotRefs.current.forEach((dot, i) => {
                if (!dot) return;
                const dist = Math.abs(i - rawIndex);
                const isActive = dist < 0.5;
                gsap.to(dot, {
                  backgroundColor: isActive ? '#B2215A' : '#d4d4d4',
                  scale: isActive ? 1.8 : 1,
                  duration: 0.3,
                  overwrite: 'auto',
                });
              });
            }
          }
        });

        const track = trackRef.current;
        if (track) tl.to(track, { x: () => -(STEPS * window.innerWidth * 0.5), ease: 'none' });
        if (connectorFillRef.current) tl.to(connectorFillRef.current, { scaleX: 1, ease: 'none' }, 0);
      });

      // MOBILE
      mm.add("(max-width: 768px)", () => {
        cardRefs.current.forEach((card) => {
          if (!card) return;
          gsap.set(card, { scale: 1, opacity: 1, y: 0, x: 0 });
        });

        cardRefs.current.forEach((card) => {
          if (!card) return;
          gsap.fromTo(card,
            { opacity: 0.4, scale: 0.92 },
            {
              opacity: 1,
              scale: 1,
              scrollTrigger: {
                trigger: card,
                containerAnimation: undefined,
                scroller: trackRef.current?.parentElement || window,
                horizontal: true,
                start: 'left 80%',
                end: 'left 50%',
                scrub: true,
              }
            }
          );
        });
      });
    }, sectionRef);

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, [mounted]);

  return (
    <section
      ref={sectionRef}
      id="approach"
      className={styles.section}
      style={{ opacity: mounted ? 1 : 0, transition: 'opacity 0.6s ease' }}
    >
      <div ref={bgRef} className={styles.bgLayer} />

      <header className={styles.header}>
        <p className={styles.eyebrow}>Our Product Engineering Approach</p>
        <h2 className={styles.heading}>
          The <em className={styles.em}>Approach</em>
        </h2>
      </header>

      <div className={styles.stage}>
        <div ref={trackRef} className={styles.track}>

          {/* Connector line */}
          <div className={styles.connectorWrap}>
            <div className={styles.connectorBg} />
            <div ref={connectorFillRef} className={styles.connectorFill} />
          </div>

          {steps.map(({ id, title, description, Icon }, i) => (
            <div key={id} className={styles.cardWrapper}>
              <div
                ref={el => { cardRefs.current[i] = el; }}
                className={styles.card}
              >
                {/* Step number + title */}
                <div className={styles.cardTop}>
                  <div className={styles.titleRow}>
                    <span className={styles.badge}>{id}</span>
                    <h3 className={styles.cardTitle}>{title}</h3>
                  </div>
                </div>

                {/* Always visible content */}
                <div className={styles.cardContent}>
                  <p className={styles.cardDesc}>{description}</p>
                  <div className={styles.iconWrap}>
                    <Icon />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress dots */}
      <div className={styles.progressWrap}>
        <div className={styles.rail}>
          {steps.map((_, i) => (
            <div
              key={i}
              className={styles.dotWrap}
              style={{ left: `${(i / (steps.length - 1)) * 100}%` }}
            >
              <div ref={el => { dotRefs.current[i] = el; }} className={styles.dot} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
