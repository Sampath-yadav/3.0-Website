"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type AnimDirection = "up" | "left" | "right" | "scale";

interface AnimateOnScrollProps {
  children: ReactNode;
  direction?: AnimDirection;
  delay?: number;
  className?: string;
}

const hidden: Record<AnimDirection, string> = {
  up: "translate-y-8 opacity-0",
  left: "-translate-x-10 opacity-0",
  right: "translate-x-10 opacity-0",
  scale: "scale-[0.97] opacity-0",
};

const visible = "translate-y-0 translate-x-0 scale-100 opacity-100";

export default function AnimateOnScroll({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -30px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={[
        "transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
        isVisible ? visible : hidden[direction],
        className,
      ].join(" ")}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
