import { cn } from "@/utils/cn";

export function HouseMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5.5 19.5 20 8l14.5 11.5" />
      <path d="M10 16.5V32h20V16.5" />
      <path d="M17 32v-7.5h6V32" />
      <path d="M26.5 12.5V8.8h2.8v6" />
    </svg>
  );
}

export function Logo({ className, onClick }: { className?: string; onClick?: () => void }) {
  return (
    <a
      href="#home"
      onClick={onClick}
      className={cn("group flex items-center gap-3 text-sand-50", className)}
      aria-label="Dreams R Real — back to top"
    >
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-sand-300/50 bg-forest-900/40 text-sand-300 transition-colors duration-500 group-hover:border-sand-300 group-hover:bg-sand-300 group-hover:text-forest-900">
        <HouseMark className="h-6 w-6" />
      </span>
      <span className="leading-none">
        <span className="block font-display text-[1.6rem] font-semibold tracking-wide">
          Dreams <span className="italic text-sand-300">R</span> Real
        </span>
        <span className="mt-1 block text-[9.5px] font-semibold uppercase tracking-[0.34em] text-sand-200/70">
          Rodney C. Peete · Realty
        </span>
      </span>
    </a>
  );
}
