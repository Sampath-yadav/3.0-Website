"use client";
import { useInView } from "./useInView";

const directionMap = {
  up: "reveal-base",
  down: "reveal-base",
  left: "reveal-left",
  right: "reveal-right",
  scale: "reveal-scale",
};

export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}) {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      className={`${directionMap[direction] || "reveal-base"} ${
        isInView ? "revealed" : ""
      } ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
