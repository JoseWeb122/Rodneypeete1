import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/utils/cn";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
};

const hiddenClass = {
  up: "translate-y-10",
  left: "-translate-x-10",
  right: "translate-x-10",
  none: "",
};

/** Fades & slides its children into view once they enter the viewport. */
export function Reveal({ children, className, delay = 0, direction = "up" }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={cn(
        "transition-[opacity,translate] duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform",
        visible ? "translate-x-0 translate-y-0 opacity-100" : cn("opacity-0", hiddenClass[direction]),
        className
      )}
    >
      {children}
    </div>
  );
}
