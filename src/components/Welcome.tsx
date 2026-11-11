import { ArrowRight } from "lucide-react";
import { STATS, WELCOME_TEXT, px } from "@/data/site";
import { Reveal } from "./ui/Reveal";
import { Eyebrow } from "./ui/SectionHeading";
import { HouseMark } from "./ui/Logo";

function RotatingSeal() {
  return (
    <div className="relative grid h-32 w-32 place-items-center rounded-full bg-forest-900 text-sand-300 shadow-2xl shadow-forest-950/40 ring-8 ring-sand-50 sm:h-36 sm:w-36">
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-spin-slow" aria-hidden="true">
        <defs>
          <path id="seal-circle" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
        </defs>
        <text className="fill-current text-[8.4px] font-semibold tracking-[0.32em] uppercase">
          <textPath href="#seal-circle">Realtor 4 Life • Dreams R Real • </textPath>
        </text>
      </svg>
      <HouseMark className="h-9 w-9" />
    </div>
  );
}

export function Welcome() {
  return (
    <section id="welcome" className="relative overflow-hidden bg-sand-50 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 pattern-linen opacity-70" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        {/* Collage */}
        <Reveal direction="left" className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="relative pr-10 pb-16 sm:pr-16">
            <div className="overflow-hidden rounded-t-[999px] rounded-b-3xl border-[10px] border-sand-100 shadow-2xl shadow-forest-950/20">
              <img
                src={px(8082312, 1200)}
                alt="Grand living room with arched floor-to-ceiling windows and a crystal chandelier"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-[2000ms] hover:scale-105"
              />
            </div>
            <div className="absolute right-0 bottom-0 w-[52%] overflow-hidden rounded-3xl border-[8px] border-sand-50 shadow-2xl shadow-forest-950/30">
              <img
                src={px(36777882, 800)}
                alt="White designer kitchen with a marble island and pendant lighting"
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
            </div>
            <div className="absolute top-10 -left-4 sm:-left-8">
              <RotatingSeal />
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <div>
          <Reveal>
            <Eyebrow>Welcome to Dreams R Real</Eyebrow>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] font-semibold text-balance text-forest-900 sm:text-5xl lg:text-6xl">
              There’s much to see here at <em className="text-sand-700">Dreams R Real.</em>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-8 text-lg leading-relaxed text-forest-800/80">{WELCOME_TEXT}</p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-6">
              <div>
                <p className="font-display text-4xl text-forest-800 italic">Rodney C. Peete</p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-sand-700">
                  Your Realtor 4 Life
                </p>
              </div>
              <a
                href="#services"
                className="group inline-flex items-center gap-3 rounded-full bg-forest-800 px-7 py-4 text-sm font-semibold tracking-wide text-sand-100 shadow-lg shadow-forest-900/20 transition hover:bg-forest-700"
              >
                Explore Our Services
                <ArrowRight className="h-4 w-4 text-sand-300 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Stats */}
      <div className="relative mx-auto mt-24 max-w-7xl px-6 lg:px-8">
        <Reveal>
          <dl className="grid gap-px overflow-hidden rounded-3xl bg-sand-300/15 text-sand-50 shadow-2xl shadow-forest-950/25 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className="relative bg-forest-900 pattern-pinstripe px-8 py-10 text-center"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-5xl font-semibold text-sand-300 lg:text-6xl">{stat.value}</dd>
                <dd className="mt-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-sand-100/70">
                  {stat.label}
                </dd>
                {i === 0 && <span className="absolute top-0 left-1/2 h-1 w-12 -translate-x-1/2 bg-sand-400" />}
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
