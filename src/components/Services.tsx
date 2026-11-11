import { ArrowUpRight, House, Landmark, Stamp, TrendingUp, type LucideIcon } from "lucide-react";
import { SERVICES, SUPPORT_SERVICES } from "@/data/site";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

const SUPPORT_ICONS: Record<(typeof SUPPORT_SERVICES)[number]["key"], LucideIcon> = {
  buying: House,
  mortgage: Landmark,
  notary: Stamp,
  market: TrendingUp,
};

export function Services() {
  return (
    <section id="services" className="relative bg-sand-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title={
            <>
              Real estate, mortgage & Notary — <em className="text-sand-700">under one roof.</em>
            </>
          }
          subtitle="Large or small, condo or mansion — every client receives the same white-glove guidance, from the first conversation to the final signature."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 120}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-sand-200 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-forest-950/15">
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-forest-950/60 via-forest-950/0 to-transparent opacity-80" />
                  <span className="absolute top-5 left-5 rounded-full bg-sand-50/90 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-forest-900 backdrop-blur">
                    Service {service.number}
                  </span>
                </div>
                <div className="relative flex flex-1 flex-col p-8">
                  <span className="absolute -top-7 right-8 grid h-14 w-14 place-items-center rounded-full bg-forest-800 font-display text-xl font-semibold text-sand-300 shadow-xl ring-4 ring-white transition duration-500 group-hover:rotate-[360deg] group-hover:bg-sand-300 group-hover:text-forest-900">
                    {service.number}
                  </span>
                  <h3 className="pr-14 font-display text-[1.9rem] leading-tight font-semibold text-forest-900">
                    {service.title}
                  </h3>
                  <div className="mt-4 h-px w-12 bg-sand-500 transition-all duration-500 group-hover:w-24" />
                  <p className="mt-5 flex-1 text-[0.95rem] leading-relaxed text-forest-800/75">{service.body}</p>
                  <a
                    href="#contact"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-forest-800 transition hover:text-sand-700"
                  >
                    Start a conversation
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Support services */}
        <Reveal className="mt-20">
          <div className="relative overflow-hidden rounded-[2rem] bg-forest-900 pattern-pinstripe p-8 sm:p-12 lg:p-14">
            <div className="pointer-events-none absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-forest-600/30 blur-3xl" />
            <div className="relative grid gap-10 lg:grid-cols-[1fr_2.2fr] lg:items-center">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-sand-400">Full-Service Support</p>
                <h3 className="mt-4 font-display text-4xl leading-tight font-semibold text-sand-50">
                  One trusted partner for <em className="text-sand-300">every step.</em>
                </h3>
                <p className="mt-4 text-sand-100/70">
                  Real estate expertise, mortgage loan guidance and Notary skills — all from the agent you already trust.
                </p>
              </div>
              <div className="grid gap-px overflow-hidden rounded-2xl bg-sand-300/15 sm:grid-cols-2">
                {SUPPORT_SERVICES.map((item) => {
                  const Icon = SUPPORT_ICONS[item.key];
                  return (
                    <div key={item.key} className="group bg-forest-900 p-7 transition-colors duration-500 hover:bg-forest-800">
                      <span className="grid h-12 w-12 place-items-center rounded-full border border-sand-300/40 text-sand-300 transition duration-500 group-hover:border-sand-300 group-hover:bg-sand-300 group-hover:text-forest-900">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h4 className="mt-5 font-display text-2xl font-semibold text-sand-50">{item.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-sand-100/65">{item.body}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
