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

    // Specific check for Blue Cross page
    const isBlueCrossPage = pathname === "/portfolio/blue-cross-hyderabad";

    if (isBlueCrossPage) {
      gsap.killTweensOf([wavyLeft, wavyRight]);
      wavyLeft.classList.remove("wave-active");
      wavyRight.classList.remove("wave-active");
      gsap.set([wavyLeft, wavyRight, meshBg], { display: "none", opacity: 0 });
      return;
    }

    // Restore for other pages
    gsap.set([wavyLeft, wavyRight, meshBg], { display: "block" });

    // On first load, the IntroLoader handles the animation
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      // Still start the float after a short delay for first load
      setTimeout(() => {
        wavyLeft.classList.add("wave-active");
        wavyRight.classList.add("wave-active");
        gsap.set(wavyLeft, { x: "0%", opacity: 1 });
        gsap.set(wavyRight, { x: "0%", opacity: 1 });
      }, 1800);
      return;
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
