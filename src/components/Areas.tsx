import { Compass, MapPin } from "lucide-react";
import { COUNTIES, SPOTLIGHTS, px } from "@/data/site";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function Areas() {
  return (
    <section
      id="areas"
      className="relative isolate overflow-hidden bg-forest-950 bg-cover bg-center py-24 text-sand-50 sm:py-32 lg:bg-fixed"
      style={{ backgroundImage: `url(${px(9137653, 2000)})` }}
    >
      <div className="absolute inset-0 -z-10 bg-forest-950/70" />
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-forest-950 via-forest-950/20 to-forest-950" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          tone="dark"
          eyebrow="Where We Work"
          title={
            <>
              From Carson to the coast — <em className="text-sand-300">Southern California, covered.</em>
            </>
          }
          subtitle="Growing up in Carson, California, this area has become Rodney’s center of gravity for zip code farming — with coverage from Los Angeles County to San Diego County."
        />

        {/* Counties */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {COUNTIES.map((county, i) => (
            <Reveal key={county.name} delay={i * 90}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-sand-300/20 bg-forest-900/50 p-7 backdrop-blur-md transition duration-500 hover:-translate-y-1.5 hover:border-sand-300/60 hover:bg-forest-900/80">
                <span className="font-display text-6xl leading-none font-semibold text-sand-300/20 transition group-hover:text-sand-300/40">
                  0{i + 1}
                </span>
                <h3 className="mt-6 flex items-center gap-2.5 font-display text-2xl font-semibold text-sand-50">
                  <MapPin className="h-5 w-5 shrink-0 text-sand-400" />
                  {county.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-sand-100/65">{county.note}</p>
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-sand-300 transition-all duration-700 group-hover:w-full" />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Spotlights */}
        <Reveal className="mt-14">
          <div className="grid overflow-hidden rounded-3xl bg-sand-100 text-forest-900 shadow-2xl shadow-forest-950/50 lg:grid-cols-[1fr_3fr]">
            <div className="flex flex-col justify-center bg-sand-300 p-8 lg:p-10">
              <Compass className="h-8 w-8 text-forest-800" />
              <h3 className="mt-4 font-display text-3xl leading-tight font-semibold">Market Updates & Local Spotlights</h3>
              <p className="mt-3 text-sm leading-relaxed text-forest-900/75">
                Keeping you informed on the neighborhoods reshaping Southern California.
              </p>
            </div>
            <div className="grid gap-px bg-sand-300/70 sm:grid-cols-3">
              {SPOTLIGHTS.map((spot) => (
                <div key={spot.city} className="bg-sand-50 p-8 transition-colors hover:bg-white">
                  <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-sand-700">{spot.label}</p>
                  <p className="mt-3 font-display text-3xl font-semibold text-forest-900">{spot.city}</p>
                  <p className="mt-2 text-sm leading-relaxed text-forest-800/75">{spot.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
