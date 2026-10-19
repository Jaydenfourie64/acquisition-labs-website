import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3;
};

const delayClasses = {
  0: "delay-0",
  1: "delay-100",
  2: "delay-200",
  3: "delay-300",
} as const;

export function ScrollReveal({ children, className, delay = 0 }: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [revealState, setRevealState] = useState<"idle" | "waiting" | "visible">("idle");

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setRevealState("visible");
      return;
    }

    setRevealState("waiting");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        setRevealState(entry.isIntersecting ? "visible" : "waiting");
      },
      { threshold: 0.14, rootMargin: "0px 0px -7% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      data-reveal-state={revealState}
      className={cn(
        "transition-[opacity,transform] duration-700 ease-out motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none",
        revealState === "waiting" && "-translate-y-6 opacity-0",
        revealState === "visible" && "translate-y-0 opacity-100",
        delayClasses[delay],
        className,
      )}
    >
      {children}
    </div>
  );
}