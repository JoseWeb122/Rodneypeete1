import type { ReactNode } from "react";
import { cn } from "@/utils/cn";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  tone?: "light" | "dark";
  className?: string;
};

export function Eyebrow({
  children,
  tone = "light",
  align = "left",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
  align?: "center" | "left";
}) {
  const line = tone === "light" ? "bg-sand-500" : "bg-sand-400";
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em]",
        tone === "light" ? "text-sand-700" : "text-sand-300",
        align === "center" && "justify-center"
      )}
    >
      <span className={cn("h-px w-8", line)} />
      {children}
      {align === "center" && <span className={cn("h-px w-8", line)} />}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "light",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      <Eyebrow tone={tone} align={align}>
        {eyebrow}
      </Eyebrow>
      <h2
        className={cn(
          "mt-5 font-display text-4xl leading-[1.05] font-semibold text-balance sm:text-5xl lg:text-6xl",
          tone === "light" ? "text-forest-900" : "text-sand-50"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-6 text-base leading-relaxed sm:text-lg",
            tone === "light" ? "text-forest-800/75" : "text-sand-200/80"
          )}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
