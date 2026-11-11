import { useCallback, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { GALLERY, px } from "@/data/site";
import { cn } from "@/utils/cn";
import { Modal } from "./ui/Modal";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

const layout = [
  "col-span-2 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
];

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (dir: -1 | 1) => setOpen((i) => (i === null ? i : (i + dir + GALLERY.length) % GALLERY.length)),
    []
  );

  return (
    <section id="gallery" className="bg-sand-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Inside the Lifestyle"
          title={
            <>
              Spaces that feel like <em className="text-sand-700">a dream come true.</em>
            </>
          }
          subtitle="Primary suites, spa baths and dining rooms made for gathering — the details that turn a house into your home."
        />

        <div className="mt-16 grid auto-rows-[160px] grid-cols-2 gap-4 sm:auto-rows-[220px] md:grid-cols-4 lg:auto-rows-[250px]">
          {GALLERY.map((item, i) => (
            <Reveal key={item.id} delay={i * 80} className={cn(layout[i], "h-full")}>
              <button
                type="button"
                onClick={() => setOpen(i)}
                className="group relative block h-full w-full overflow-hidden rounded-3xl text-left"
                aria-label={`Open photo: ${item.caption}`}
              >
                <img
                  src={px(item.id, i === 0 ? 1400 : 800)}
                  alt={item.caption}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1600ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-forest-950/75 via-forest-950/0 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 sm:p-6">
                  <p className={cn("font-display font-semibold text-sand-50", i === 0 ? "text-3xl sm:text-4xl" : "text-xl sm:text-2xl")}>
                    {item.caption}
                  </p>
                  <span className="grid h-10 w-10 shrink-0 translate-y-2 place-items-center rounded-full bg-sand-300 text-forest-900 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <Maximize2 className="h-4 w-4" />
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Modal open={open !== null} onClose={close} label="Photo gallery" onKeyNav={step} className="max-w-6xl">
        {open !== null && (
          <figure className="relative">
            <img
              key={GALLERY[open].id}
              src={px(GALLERY[open].id, 1800)}
              alt={GALLERY[open].caption}
              className="max-h-[78vh] w-full animate-fade-up rounded-3xl object-contain"
            />
            <figcaption className="mt-5 flex items-center justify-between gap-4 text-sand-100">
              <span className="font-display text-2xl italic">{GALLERY[open].caption}</span>
              <span className="flex items-center gap-3">
                <span className="text-xs tracking-[0.25em] text-sand-300">
                  {String(open + 1).padStart(2, "0")} / {String(GALLERY.length).padStart(2, "0")}
                </span>
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Previous photo"
                  className="grid h-11 w-11 place-items-center rounded-full border border-sand-300/40 transition hover:bg-sand-300 hover:text-forest-900"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Next photo"
                  className="grid h-11 w-11 place-items-center rounded-full border border-sand-300/40 transition hover:bg-sand-300 hover:text-forest-900"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </span>
            </figcaption>
          </figure>
        )}
      </Modal>
    </section>
  );
}
