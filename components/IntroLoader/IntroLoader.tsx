"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const IntroLoader = () => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const blurLayerRef = useRef<HTMLDivElement>(null);
  const centerLogoRef = useRef<HTMLImageElement>(null);
  const logoRefs = useRef<(HTMLImageElement | null)[]>([]);
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scanlineRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const welcomeTextRef = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "";
        setDone(true);
      },
    });

    // Initial States
    gsap.set(centerLogoRef.current, { opacity: 0, scale: 0.9, y: 0 });
    gsap.set([".intro-char", ".intro-char-sub"], { opacity: 0 });
    gsap.set(welcomeTextRef.current, { opacity: 1 });

    // 1. Logo Fades in Middle
    tl.to(centerLogoRef.current, {
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: "power2.out",
    }, 0.5);

    // 2. Wait for 1 second (Paused at center)
    tl.to({}, { duration: 1 });

    // 3. Move Little Upper to make room for text
    tl.to(centerLogoRef.current, {
      y: -30,
      duration: 1.2,
      ease: "power3.inOut"
    });

    // 4. Type the Text (Character by character)
    tl.to(".intro-char", {
      opacity: 1,
      duration: 0.05,
      stagger: 0.06,
      ease: "none"
    }, "-=0.2");

    tl.to(".intro-char-sub", {
      opacity: 1,
      duration: 0.05,
      stagger: 0.03,
      ease: "none"
    }, "+=0.3");

    // Hold to read
    tl.to({}, { duration: 1.5 });

    // 5. Transition to main site
    tl.to([centerLogoRef.current, welcomeTextRef.current], {
      scale: 1.1,
      opacity: 0,
      filter: "blur(10px)",
      duration: 1,
      ease: "power2.inOut",
    });

    tl.call(() => {
      // Hide high layers
      gsap.set(overlayRef.current, { opacity: 0 });
      gsap.set(blurLayerRef.current, { opacity: 0 });

      // Trigger background waves
      const wavyLeft = document.getElementById("wavy-left");
      const wavyRight = document.getElementById("wavy-right");

      if (wavyLeft && wavyRight) {
        gsap.fromTo(
          wavyLeft,
          { x: "-110%", opacity: 0 },
          { x: "0%", opacity: 1, duration: 1.2, ease: "power3.out" }
        );

        gsap.fromTo(
          wavyRight,
          { x: "110%", opacity: 0 },
          { x: "0%", opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.15 }
        );
      }
    });
  }, []);

  if (done) return null;

  return (
    <>
      <div
        ref={blurLayerRef}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9998,
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          background: "rgba(255, 255, 255, 0.15)",
          pointerEvents: "none",
        }}
      />

      <div
        ref={overlayRef}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#fafafa",
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
          <img
            ref={centerLogoRef}
            src="/images/logos/logo.png"
            alt="3.0 Labs"
            style={{
              width: "320px",
              height: "auto",
              opacity: 0,
              filter: "drop-shadow(0 0 20px rgba(255, 92, 53, 0.2))",
              WebkitFilter: "drop-shadow(0 0 20px rgba(255, 92, 53, 0.2))",
            }}
          />

          <div
            ref={welcomeTextRef}
            style={{
              position: 'absolute',
              top: '100%',
              left: '50%',
              transform: 'translateX(-50%)',
              marginTop: '10px',
              textAlign: "center",
              opacity: 1,
              width: "max-content",
              minWidth: "300px"
            }}
          >
            <h4 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(24px, 4vw, 32px)",
              fontWeight: 500,
              color: "#FF5C35",
              letterSpacing: "-0.5px",
              margin: 0,
            }}>
              {"We're glad you're here.".split("").map((char, i) => (
                <span key={i} className="intro-char" style={{ opacity: 0, display: 'inline-block', minWidth: char === ' ' ? '0.25em' : 'auto' }}>
                  {char}
                </span>
              ))}
            </h4>
            <p style={{
              fontSize: "clamp(14px, 2vw, 16px)",
              color: "#666",
              marginTop: "12px",
              fontWeight: 400,
            }}>
              {"Let's engineer something intelligent together.".split("").map((char, i) => (
                <span key={i} className="intro-char-sub" style={{ opacity: 0, display: 'inline-block', minWidth: char === ' ' ? '0.25em' : 'auto' }}>
                  {char}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroLoader;
