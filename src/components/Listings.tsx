import { useCallback, useMemo, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, MapPin, Maximize2, Sparkles } from "lucide-react";
import { CATEGORIES, LISTINGS, px, type Listing } from "@/data/site";
import type { InquiryInput } from "@/types";
import { cn } from "@/utils/cn";
import { Modal } from "./ui/Modal";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

type ListingsProps = {
  onInquire: (inquiry: InquiryInput) => void;
};

function categoryToInterest(category: Listing["category"]) {
  if (category === "Rentals") return "Rentals";
  if (category === "Commercial") return "Commercial Property";
  if (category === "Luxury Homes") return "Luxury Homes";
  return "Buying a Home";
}

export function Listings({ onInquire }: ListingsProps) {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("All");
  const [selected, setSelected] = useState<number | null>(null);

  const visible = useMemo(
    () => (filter === "All" ? LISTINGS : LISTINGS.filter((l) => l.category === filter)),
    [filter]
  );

  const current = selected !== null ? visible[selected] : null;

  const close = useCallback(() => setSelected(null), []);
  const step = useCallback(
    (dir: -1 | 1) =>
      setSelected((i) => (i === null ? i : (i + dir + visible.length) % visible.length)),
    [visible.length]
  );

  const askAbout = (listing: Listing) => {
    setSelected(null);
    onInquire({
      interest: categoryToInterest(listing.category),
      area: listing.area,
      message: `Hi Rodney, I'm interested in properties like the "${listing.title}" in ${listing.area}. Please share current listings and availability.`,
    });
  };

  return (
    <section id="listings" className="relative bg-sand-100 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 pattern-linen opacity-60" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Property Showcase"
            title={
              <>
                Condo or mansion — <em className="text-sand-700">explore the collection.</em>
              </>
            }
            subtitle="TICs, fixer-uppers, luxury homes, rentals and commercial spaces. Browse the styles we help clients find every day."
          />
          <Reveal delay={150}>
            <div className="flex flex-wrap gap-2 lg:max-w-md lg:justify-end" role="tablist" aria-label="Filter properties">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={filter === cat}
                  onClick={() => setFilter(cat)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-xs font-semibold tracking-wide transition",
                    filter === cat
                      ? "border-forest-800 bg-forest-800 text-sand-100 shadow-lg shadow-forest-900/20"
                      : "border-forest-800/15 bg-sand-50 text-forest-800 hover:border-forest-800/50"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((listing, i) => (
            <Reveal key={`${filter}-${listing.id}`} delay={(i % 3) * 100}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-sand-200 transition duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-forest-950/15">
                <button
                  type="button"
                  onClick={() => setSelected(i)}
                  className="relative block overflow-hidden text-left"
                  aria-label={`View ${listing.title}`}
                >
                  <img
                    src={px(listing.id, 900)}
                    alt={listing.title}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-forest-950/70 via-transparent to-forest-950/10" />
                  <span className="absolute top-4 left-4 rounded-full bg-sand-50/95 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-forest-900">
                    {listing.category}
                  </span>
                  <span className="absolute top-4 right-4 grid h-10 w-10 scale-75 place-items-center rounded-full bg-forest-900/80 text-sand-200 opacity-0 backdrop-blur transition duration-500 group-hover:scale-100 group-hover:opacity-100">
                    <Maximize2 className="h-4 w-4" />
                  </span>
                  <span className="absolute bottom-4 left-4 flex items-center gap-1.5 text-xs font-semibold tracking-wide text-sand-100">
                    <MapPin className="h-3.5 w-3.5 text-sand-300" />
                    {listing.area}
                  </span>
                </button>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-[1.65rem] leading-tight font-semibold text-forest-900">
                    {listing.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-forest-800/70">{listing.blurb}</p>
                  <ul className="mt-5 mb-6 flex flex-wrap gap-2">
                    {listing.features.map((f) => (
                      <li key={f} className="rounded-full bg-sand-100 px-3 py-1 text-[11px] font-semibold text-sand-800">
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex items-center justify-between gap-4 border-t border-sand-200 pt-5">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sand-700">
                      Price upon request
                    </span>
                    <button
                      type="button"
                      onClick={() => askAbout(listing)}
                      className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-forest-800 transition hover:text-sand-700"
                    >
                      Inquire
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-sand-300 bg-sand-50 p-8 text-center sm:p-10 md:flex-row md:text-left">
            <div className="flex items-start gap-4">
              <span className="hidden h-12 w-12 shrink-0 place-items-center rounded-full bg-forest-800 text-sand-300 md:grid">
                <Sparkles className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-2xl font-semibold text-forest-900 sm:text-3xl">
                  We always maintain an updated list of property listings.
                </p>
                <p className="mt-1.5 text-sm text-forest-800/70">
                  Showcase photos represent the property styles we help clients find. Ask Rodney for today’s available listings.
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() =>
                onInquire({
                  interest: "Buying a Home",
                  message: "Hi Rodney, please send me your current, updated list of property listings.",
                })
              }
              className="inline-flex shrink-0 items-center gap-3 rounded-full bg-forest-800 px-7 py-4 text-sm font-semibold tracking-wide text-sand-100 transition hover:bg-forest-700"
            >
              Request Current Listings
              <ArrowRight className="h-4 w-4 text-sand-300" />
            </button>
          </div>
        </Reveal>
      </div>

      {/* Detail lightbox */}
      <Modal open={current !== null} onClose={close} label={current?.title ?? "Property details"} onKeyNav={step} className="max-w-6xl">
        {current && (
          <div className="grid overflow-hidden rounded-3xl bg-sand-50 shadow-2xl lg:grid-cols-[3fr_2fr]">
            <div className="relative bg-forest-950">
              <img
                key={current.id}
                src={px(current.id, 1600)}
                alt={current.title}
                className="aspect-[4/3] h-full max-h-[70vh] w-full animate-fade-up object-cover lg:max-h-none"
              />
              {visible.length > 1 && (
                <div className="absolute inset-x-4 bottom-4 flex justify-between">
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    aria-label="Previous property"
                    className="grid h-11 w-11 place-items-center rounded-full bg-sand-50/90 text-forest-900 transition hover:bg-sand-300"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => step(1)}
                    aria-label="Next property"
                    className="grid h-11 w-11 place-items-center rounded-full bg-sand-50/90 text-forest-900 transition hover:bg-sand-300"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              )}
            </div>
            <div className="flex flex-col p-8 sm:p-10">
              <span className="w-fit rounded-full bg-forest-800 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-sand-200">
                {current.category}
              </span>
              <h3 className="mt-5 font-display text-4xl leading-tight font-semibold text-forest-900">{current.title}</h3>
              <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-sand-700">
                <MapPin className="h-4 w-4" /> {current.area}
              </p>
              <p className="mt-5 leading-relaxed text-forest-800/75">{current.blurb}</p>
              <ul className="mt-6 space-y-2.5">
                {current.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-forest-900">
                    <span className="h-1.5 w-1.5 rounded-full bg-sand-500" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <button
                  type="button"
                  onClick={() => askAbout(current)}
                  className="flex w-full items-center justify-center gap-3 rounded-full bg-forest-800 px-7 py-4 text-sm font-semibold tracking-wide text-sand-100 transition hover:bg-forest-700"
                >
                  Ask Rodney About Similar Homes
                  <ArrowRight className="h-4 w-4 text-sand-300" />
                </button>
                <p className="mt-3 text-center text-xs text-forest-800/55">Representative photo · Price upon request</p>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
