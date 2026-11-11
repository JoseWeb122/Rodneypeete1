import { KeyRound } from "lucide-react";
import { PROCESS, px } from "@/data/site";
import { Reveal } from "./ui/Reveal";
import { Eyebrow } from "./ui/SectionHeading";

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-sand-50 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-24 lg:px-8">
        <Reveal direction="left" className="relative order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-forest-950/20">
            <img
              src={px(8470844, 1200)}
              alt="Real estate agent and client shaking hands over a signed agreement"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover sm:aspect-[5/5]"
            />
            <div className="absolute inset-0 bg-linear-to-t from-forest-950/60 via-transparent to-transparent" />
          </div>
          <div className="absolute -right-2 -bottom-8 max-w-[17rem] rounded-2xl bg-forest-900 p-6 text-sand-100 shadow-2xl shadow-forest-950/30 sm:-right-8">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-sand-300 text-forest-900">
              <KeyRound className="h-5 w-5" />
            </span>
            <p className="mt-4 font-display text-2xl leading-tight font-semibold">Confident & educated every step of the way.</p>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <Eyebrow>How We Work</Eyebrow>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] font-semibold text-balance text-forest-900 sm:text-5xl lg:text-6xl">
              A clear path from <em className="text-sand-700">dream to keys.</em>
            </h2>
          </Reveal>

          <ol className="relative mt-12 space-y-9 before:absolute before:top-2 before:bottom-2 before:left-[1.4rem] before:w-px before:bg-sand-300">
            {PROCESS.map((step, i) => (
              <Reveal key={step.title} delay={i * 110}>
                <li className="group relative flex gap-6">
                  <span className="relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-sand-400 bg-sand-50 font-display text-lg font-semibold text-forest-800 transition duration-500 group-hover:border-forest-800 group-hover:bg-forest-800 group-hover:text-sand-300">
                    {i + 1}
                  </span>
                  <div className="pt-1.5">
                    <h3 className="font-display text-2xl font-semibold text-forest-900">{step.title}</h3>
                    <p className="mt-2 leading-relaxed text-forest-800/75">{step.body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
