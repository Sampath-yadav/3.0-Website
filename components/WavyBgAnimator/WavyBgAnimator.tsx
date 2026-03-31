"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

const WavyBgAnimator = () => {
  const pathname = usePathname();
  const isFirstLoad = useRef(true);

  useEffect(() => {
    const wavyLeft = document.getElementById("wavy-left");
    const wavyRight = document.getElementById("wavy-right");
    const meshBg = document.querySelector(".mesh-bg") as HTMLElement;

    if (!wavyLeft || !wavyRight) return;

    // Restore for other pages
    gsap.set([wavyLeft, wavyRight, meshBg], { display: "block" });

    // Set theme-specific background for Portfolio
    const isPortfolio = pathname.startsWith("/portfolio");
    const bgImage = isPortfolio 
      ? "url('/images/portfolio/banne123 1.png')" 
      : "url('/images/backgrounds/template-bg.png')";
    
    gsap.set([wavyLeft, wavyRight], { backgroundImage: bgImage });
    
    if (isPortfolio) {
      gsap.set(meshBg, { opacity: 0.2 }); // Slightly boost mesh for Portfolio
    } else {
      gsap.set(meshBg, { opacity: 1 });
    }

    // On first load, the IntroLoader handles the animation
    let timer: NodeJS.Timeout;
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      // Still start the float after a short delay for first load
      timer = setTimeout(() => {
        wavyLeft.classList.add("wave-active");
        wavyRight.classList.add("wave-active");
        gsap.set(wavyLeft, { x: "0%", opacity: 1 });
        gsap.set(wavyRight, { x: "0%", opacity: 1 });
      }, 1800);
      return () => clearTimeout(timer);
    }

    // On route change — reset and replay
    gsap.killTweensOf([wavyLeft, wavyRight]);
    wavyLeft.classList.remove("wave-active");
    wavyRight.classList.remove("wave-active");

    gsap.set(wavyLeft, { x: "-110%", opacity: 0 });
    gsap.set(wavyRight, { x: "110%", opacity: 0 });

    gsap.to(wavyLeft, {
      x: "0%",
      opacity: 1,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.3,
      onComplete: () => wavyLeft.classList.add("wave-active"),
    });

    gsap.to(wavyRight, {
      x: "0%",
      opacity: 1,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.45,
      onComplete: () => wavyRight.classList.add("wave-active"),
    });
  }, [pathname]);

  return null;
};

export default WavyBgAnimator;
