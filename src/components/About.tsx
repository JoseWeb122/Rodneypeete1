import { ArrowRight, BadgeCheck, GraduationCap, Phone, Quote } from "lucide-react";
import rodneyPhoto from "@/assets/rodney-peete.jpg";
import { BIO, CONTACT, EDUCATION, ROLES, TAGLINE } from "@/data/site";
import { Reveal } from "./ui/Reveal";
import { Eyebrow } from "./ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-sand-100 py-24 sm:py-32">
      <div className="pointer-events-none absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-sand-200/70 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[5fr_7fr] lg:gap-20 lg:px-8">
        {/* Portrait */}
        <Reveal direction="left" className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative">
            <div className="absolute inset-0 translate-x-5 translate-y-5 rounded-t-[999px] rounded-b-3xl border-2 border-sand-500/60" />
            <div className="relative overflow-hidden rounded-t-[999px] rounded-b-3xl bg-forest-800 shadow-2xl shadow-forest-950/30">
              <img
                src={rodneyPhoto}
                alt="Portrait of Rodney C. Peete, real estate agent"
                className="aspect-[4/5] w-full object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-forest-950/85 via-forest-950/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 pb-20 text-sand-50 sm:pb-24">
                <p className="font-display text-3xl font-semibold">Rodney C. Peete</p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-sand-300">
                  Real Estate Agent · CA DRE #{CONTACT.dre}
                </p>
              </div>
            </div>

            {/* Experience badge */}
            <div className="absolute -top-4 -right-3 grid h-28 w-28 place-items-center rounded-full bg-sand-300 text-center text-forest-900 shadow-xl ring-8 ring-sand-100 sm:-right-6 sm:h-32 sm:w-32">
              <div>
                <p className="font-display text-4xl leading-none font-bold sm:text-5xl">25+</p>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em]">Years of
                  <br />
                  Experience
                </p>
              </div>
            </div>
          </div>

          {/* Quote card */}
          <figure className="relative z-10 mx-4 -mt-10 rounded-2xl bg-forest-900 p-7 text-sand-100 shadow-2xl shadow-forest-950/30 sm:mx-8">
            <Quote className="absolute -top-4 left-7 h-9 w-9 rounded-full bg-sand-300 p-2 text-forest-900" />
            <blockquote className="font-display text-xl leading-snug italic sm:text-2xl">“{TAGLINE}”</blockquote>
          </figure>
        </Reveal>

        {/* Bio */}
        <div className="lg:pt-6">
          <Reveal>
            <Eyebrow>Meet Your Agent</Eyebrow>
            <h2 className="mt-5 font-display text-5xl leading-[0.95] font-semibold text-forest-900 sm:text-6xl lg:text-7xl">
              Rodney <em className="text-sand-700">Peete</em>
            </h2>
            <ul className="mt-7 flex flex-wrap gap-2.5">
              {ROLES.map((role) => (
                <li
                  key={role}
                  className="inline-flex items-center gap-2 rounded-full border border-forest-800/15 bg-sand-50 px-4 py-2 text-xs font-semibold tracking-wide text-forest-800"
                >
                  <BadgeCheck className="h-4 w-4 text-sand-600" />
                  {role}
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="mt-9 space-y-5 text-[1.05rem] leading-relaxed text-forest-800/80">
            {BIO.map((p, i) => (
              <Reveal key={i} delay={100 + i * 80}>
                <p className={i === 0 ? "text-lg text-forest-900 sm:text-xl" : undefined}>{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300}>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {EDUCATION.map((item) => (
                <div
                  key={item.degree}
                  className="group rounded-2xl border border-sand-300 bg-sand-50 p-6 transition hover:-translate-y-1 hover:border-forest-700/30 hover:shadow-xl hover:shadow-forest-950/10"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-forest-800 text-sand-300 transition group-hover:bg-sand-300 group-hover:text-forest-900">
                    <GraduationCap className="h-5 w-5" />
                  </span>
                  <p className="mt-4 font-display text-xl leading-tight font-semibold text-forest-900">
                    {item.degree}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-forest-800/70">{item.school}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={380}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full bg-forest-800 px-7 py-4 text-sm font-semibold tracking-wide text-sand-100 shadow-lg shadow-forest-900/20 transition hover:bg-forest-700"
              >
                Work With Rodney
                <ArrowRight className="h-4 w-4 text-sand-300 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center gap-3 rounded-full border border-forest-800/20 px-7 py-4 text-sm font-semibold tracking-wide text-forest-800 transition hover:border-forest-800 hover:bg-forest-800 hover:text-sand-100"
              >
                <Phone className="h-4 w-4" />
                {CONTACT.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
