import { ArrowRight } from "lucide-react";
import { TAGLINE, px } from "@/data/site";
import { Reveal } from "./ui/Reveal";

export function QuoteBand() {
  return (
    <section
      className="relative isolate overflow-hidden bg-forest-950 bg-cover bg-center py-28 text-center text-sand-50 sm:py-40 lg:bg-fixed"
      style={{ backgroundImage: `url(${px(4183590, 2000)})` }}
      aria-label="A promise from Rodney"
    >
      <div className="absolute inset-0 -z-10 bg-forest-950/45" />
      <div className="absolute inset-0 -z-10 bg-radial from-forest-950/55 via-forest-950/30 to-forest-950/80" />
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <span className="font-display text-8xl leading-none text-sand-300/70">“</span>
          <blockquote className="-mt-6 font-display text-3xl leading-tight font-medium text-balance italic sm:text-5xl lg:text-6xl">
            {TAGLINE}
          </blockquote>
          <div className="mx-auto mt-10 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-sand-400" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-sand-300">Rodney C. Peete</p>
            <span className="h-px w-12 bg-sand-400" />
          </div>
          <a
            href="#contact"
            className="group mt-12 inline-flex items-center gap-3 rounded-full bg-sand-300 px-8 py-4 text-sm font-semibold tracking-wide text-forest-900 shadow-xl shadow-forest-950/40 transition hover:bg-sand-200"
          >
            Start Your Journey Home
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
