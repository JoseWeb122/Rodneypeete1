import { useEffect, useState, type FormEvent } from "react";
import { ArrowRight, ChevronDown, Search } from "lucide-react";
import { AREAS, BUDGETS, HERO_SLIDES, PROPERTY_TYPES, px } from "@/data/site";
import { cn } from "@/utils/cn";
import type { InquiryInput } from "@/types";

type HeroProps = {
  onSearch: (inquiry: InquiryInput) => void;
};

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <label className="group relative block bg-sand-50 px-5 py-4 transition-colors focus-within:bg-white hover:bg-white">
      <span className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-sand-700">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full cursor-pointer appearance-none bg-transparent pr-6 font-display text-xl font-semibold text-forest-900 focus:outline-none"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-5 bottom-5 h-4 w-4 text-sand-600" />
    </label>
  );
}

export function Hero({ onSearch }: HeroProps) {
  const [index, setIndex] = useState(0);
  const [area, setArea] = useState(AREAS[0]);
  const [type, setType] = useState(PROPERTY_TYPES[0]);
  const [budget, setBudget] = useState(BUDGETS[0]);

  // Advance the slideshow; resets whenever the slide changes (incl. manual)
  useEffect(() => {
    const t = window.setTimeout(() => setIndex((i) => (i + 1) % HERO_SLIDES.length), 7000);
    return () => window.clearTimeout(t);
  }, [index]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const typeText = type === "Any Type" ? "a property" : `a ${type.toLowerCase()}`;
    const areaText = area === "Any Area" ? "Southern California" : area;
    const budgetText = budget === "Any Budget" ? "" : ` with a budget of ${budget}`;
    onSearch({
      interest: type === "Rental" ? "Rentals" : type === "Commercial" ? "Commercial Property" : "Buying a Home",
      area: area === "Any Area" ? "" : area,
      message: `Hi Rodney, I'm looking for ${typeText} in ${areaText}${budgetText}. Please send me your current property listings that match.`,
    });
  };

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-forest-950 text-sand-50"
    >
      {/* Slides */}
      <div className="absolute inset-0 -z-10">
        {HERO_SLIDES.map((slide, i) => (
          <img
            key={slide.id}
            src={px(slide.id, 2000)}
            alt=""
            aria-hidden="true"
            fetchPriority={i === 0 ? "high" : "low"}
            className={cn(
              "absolute inset-0 h-full w-full object-cover",
              i === index ? "scale-100 opacity-100" : "scale-110 opacity-0"
            )}
            style={{ transition: "opacity 1.8s ease-in-out, transform 9s ease-out" }}
          />
        ))}
        <div className="absolute inset-0 bg-linear-to-r from-forest-950/95 via-forest-950/60 to-forest-950/10" />
        <div className="absolute inset-0 bg-linear-to-t from-forest-950 via-forest-950/10 to-forest-950/40" />
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 pt-32 pb-10 lg:px-8 lg:pt-40">
        <div className="max-w-3xl">
          <p
            className="flex animate-fade-up items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.36em] text-sand-300"
            style={{ animationDelay: "150ms" }}
          >
            <span className="h-px w-10 bg-sand-400" />
            Southern California Real Estate
          </p>
          <h1
            className="mt-6 animate-fade-up font-display text-[3.4rem] leading-[0.95] font-semibold text-balance sm:text-7xl lg:text-8xl"
            style={{ animationDelay: "300ms" }}
          >
            Your Dreams <br />
            <em className="font-medium text-sand-300">Are Real.</em>
          </h1>
          <p
            className="mt-7 max-w-xl animate-fade-up text-base leading-relaxed text-sand-100/85 sm:text-lg"
            style={{ animationDelay: "450ms" }}
          >
            Luxury homes, condos, rentals and commercial properties across Los Angeles, Orange,
            Riverside and San Diego Counties — guided by{" "}
            <span className="font-semibold text-sand-200">Rodney C. Peete</span>, with over 25 years
            of real estate, mortgage and Notary expertise.
          </p>
          <div
            className="mt-9 flex animate-fade-up flex-wrap items-center gap-4"
            style={{ animationDelay: "600ms" }}
          >
            <a
              href="#listings"
              className="group inline-flex items-center gap-3 rounded-full bg-sand-300 px-7 py-4 text-sm font-semibold tracking-wide text-forest-900 shadow-xl shadow-forest-950/40 transition hover:bg-sand-200"
            >
              Explore Listings
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-3 rounded-full border border-sand-200/40 px-7 py-4 text-sm font-semibold tracking-wide text-sand-50 backdrop-blur-sm transition hover:border-sand-300 hover:bg-sand-50/10"
            >
              Meet Rodney
            </a>
          </div>
        </div>

        {/* Search panel */}
        <form
          onSubmit={handleSubmit}
          className="mt-14 grid max-w-5xl animate-fade-up gap-px overflow-hidden rounded-2xl bg-sand-300/60 shadow-2xl shadow-forest-950/50 ring-1 ring-sand-300/40 sm:grid-cols-3 lg:grid-cols-[1fr_1fr_1fr_auto]"
          style={{ animationDelay: "800ms" }}
          aria-label="Find your property"
        >
          <SelectField label="Location" value={area} onChange={setArea} options={AREAS} />
          <SelectField label="Property Type" value={type} onChange={setType} options={PROPERTY_TYPES} />
          <SelectField label="Budget" value={budget} onChange={setBudget} options={BUDGETS} />
          <button
            type="submit"
            className="group flex items-center justify-center gap-3 bg-forest-800 px-8 py-5 text-sm font-semibold tracking-wide text-sand-100 transition hover:bg-forest-700 sm:col-span-3 lg:col-span-1"
          >
            <Search className="h-4 w-4 text-sand-300" />
            Find My Home
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </form>
      </div>

      {/* Slide controls */}
      <div className="mx-auto flex w-full max-w-7xl items-end justify-between gap-6 px-6 pb-8 lg:px-8">
        <div className="flex items-center gap-4">
          {HERO_SLIDES.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show slide ${i + 1}: ${slide.caption}`}
              className="group flex flex-col items-start gap-2 text-left"
            >
              <span className="relative block h-px w-14 overflow-hidden bg-sand-100/25 sm:w-20">
                {i === index && (
                  <span key={index} className="absolute inset-0 origin-left animate-progress bg-sand-300" />
                )}
              </span>
              <span
                className={cn(
                  "hidden text-[10px] font-semibold uppercase tracking-[0.22em] transition md:block",
                  i === index ? "text-sand-200" : "text-sand-100/40 group-hover:text-sand-100/70"
                )}
              >
                0{i + 1}
              </span>
            </button>
          ))}
          <p className="ml-2 hidden font-display text-lg text-sand-100/80 italic md:block">
            {HERO_SLIDES[index].caption}
          </p>
        </div>
        <a
          href="#welcome"
          className="hidden items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-sand-200/70 transition hover:text-sand-200 sm:flex"
        >
          Scroll
          <span className="flex h-9 w-5 justify-center rounded-full border border-sand-200/40 pt-1.5">
            <span className="h-1.5 w-1 animate-scroll-dot rounded-full bg-sand-300" />
          </span>
        </a>
      </div>
    </section>
  );
}
