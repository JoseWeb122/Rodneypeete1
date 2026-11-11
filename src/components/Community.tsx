import { BookOpen, HeartHandshake, Sparkles, type LucideIcon } from "lucide-react";
import { COMMUNITY, px } from "@/data/site";
import { Reveal } from "./ui/Reveal";
import { Eyebrow } from "./ui/SectionHeading";

const ICONS: Record<(typeof COMMUNITY)[number]["key"], LucideIcon> = {
  smart: HeartHandshake,
  dreams: Sparkles,
  reading: BookOpen,
};

export function Community() {
  return (
    <section id="community" className="relative overflow-hidden bg-forest-900 pattern-pinstripe py-24 text-sand-50 sm:py-32">
      <div className="pointer-events-none absolute -top-32 right-0 h-[30rem] w-[30rem] rounded-full bg-forest-600/25 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[6fr_5fr] lg:gap-20 lg:px-8">
        <div>
          <Reveal>
            <Eyebrow tone="dark">Giving Back</Eyebrow>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] font-semibold text-balance sm:text-5xl lg:text-6xl">
              Building homes — and <em className="text-sand-300">brighter futures.</em>
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-sand-100/75">
              Beyond real estate, Rodney actively engages with today’s youth through his company,{" "}
              <span className="font-semibold text-sand-200">Smart Choices 501c3</span>, promoting the initiative{" "}
              <span className="font-semibold text-sand-200">Dreams R Real</span>. He has also volunteered with reading
              programs for children, encouraging the youth to expand past normal expectations.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {COMMUNITY.map((item, i) => {
              const Icon = ICONS[item.key];
              return (
                <Reveal key={item.key} delay={i * 110}>
                  <div className="group h-full rounded-2xl border border-sand-300/15 bg-forest-950/40 p-6 transition duration-500 hover:-translate-y-1.5 hover:border-sand-300/50 hover:bg-forest-950/70">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-sand-300 text-forest-900 transition duration-500 group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 font-display text-xl leading-tight font-semibold text-sand-50">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-sand-100/65">{item.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal direction="right" className="relative">
          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-3 overflow-hidden rounded-t-[999px] rounded-b-3xl border-4 border-sand-300/20">
              <img
                src={px(8500625, 900)}
                alt="Children reading books together in a library"
                loading="lazy"
                className="aspect-[3/4.4] h-full w-full object-cover"
              />
            </div>
            <div className="col-span-2 flex flex-col gap-4 pt-16">
              <div className="overflow-hidden rounded-3xl border-4 border-sand-300/20">
                <img
                  src={px(8926840, 700)}
                  alt="Two young girls enjoying books in a school library"
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover"
                />
              </div>
              <div className="rounded-3xl bg-sand-300 p-5 text-forest-900">
                <p className="font-display text-4xl leading-none font-bold">Dreams</p>
                <p className="font-display text-4xl leading-none font-bold italic">R Real.</p>
                <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.22em] text-forest-800/80">A Smart Choices Initiative</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
