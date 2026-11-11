import { useEffect, useState } from "react";
import { MapPin, Menu, Phone, X } from "lucide-react";
import { CONTACT, NAV_LINKS } from "@/data/site";
import { cn } from "@/utils/cn";
import { Logo } from "./ui/Logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the section currently in view
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Utility bar */}
      <div
        className={cn(
          "hidden overflow-hidden border-b border-sand-300/10 bg-forest-950/80 text-sand-200/80 backdrop-blur-sm transition-[max-height,opacity] duration-500 md:block",
          scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
        )}
      >
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-6 text-xs tracking-wide lg:px-8">
          <div className="flex items-center gap-6">
            <a href={CONTACT.phoneHref} className="flex items-center gap-2 transition hover:text-sand-300">
              <Phone className="h-3.5 w-3.5 text-sand-400" />
              {CONTACT.phone}
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-sand-400" />
              {CONTACT.addressLine1}, {CONTACT.addressLine2}
            </span>
          </div>
          <span className="uppercase tracking-[0.24em] text-sand-300/70">
            Real Estate · Mortgage Loans · Notary · CA DRE #{CONTACT.dre}
          </span>
        </div>
      </div>

      {/* Main navigation */}
      <nav
        className={cn(
          "transition-all duration-500",
          scrolled
            ? "border-b border-sand-300/10 bg-forest-950/92 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)] backdrop-blur-xl"
            : "bg-linear-to-b from-forest-950/60 to-transparent"
        )}
        aria-label="Primary"
      >
        <div
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 lg:px-8",
            scrolled ? "h-[4.5rem]" : "h-20 lg:h-24"
          )}
        >
          <Logo />

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={cn(
                    "relative px-3.5 py-2 text-[13px] font-medium tracking-wide text-sand-100/85 transition hover:text-sand-300",
                    active === link.id && "text-sand-300"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute inset-x-3.5 -bottom-0.5 h-px origin-left bg-sand-300 transition-transform duration-500",
                      active === link.id ? "scale-x-100" : "scale-x-0"
                    )}
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-full bg-sand-300 px-6 py-3 text-[13px] font-semibold tracking-wide text-forest-900 shadow-lg shadow-forest-950/30 transition hover:bg-sand-200 sm:inline-flex"
            >
              Schedule a Consultation
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="grid h-11 w-11 place-items-center rounded-full border border-sand-300/40 text-sand-100 transition hover:bg-sand-300 hover:text-forest-900 lg:hidden"
              aria-label="Open menu"
              aria-expanded={open}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-[60] flex flex-col bg-forest-950 pattern-pinstripe transition-all duration-500 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        <div className="flex h-20 items-center justify-between px-6">
          <Logo onClick={() => setOpen(false)} />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="grid h-11 w-11 place-items-center rounded-full border border-sand-300/40 text-sand-100"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <ul className="flex flex-1 flex-col justify-center gap-1 px-8">
          {NAV_LINKS.map((link, i) => (
            <li
              key={link.id}
              className={cn(
                "transition-all duration-500",
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              )}
              style={{ transitionDelay: open ? `${120 + i * 50}ms` : "0ms" }}
            >
              <a
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-baseline gap-4 py-2 font-display text-4xl font-semibold text-sand-50 transition hover:text-sand-300 sm:text-5xl",
                  active === link.id && "text-sand-300"
                )}
              >
                <span className="font-sans text-xs font-semibold tracking-widest text-sand-400/70">
                  0{i + 1}
                </span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="space-y-3 border-t border-sand-300/15 px-8 py-8 text-sm text-sand-200/80">
          <a href={CONTACT.phoneHref} className="flex items-center gap-3">
            <Phone className="h-4 w-4 text-sand-400" /> {CONTACT.phone}
          </a>
          <p className="flex items-center gap-3">
            <MapPin className="h-4 w-4 text-sand-400" /> {CONTACT.addressLine1}, {CONTACT.addressLine2}
          </p>
        </div>
      </div>
    </header>
  );
}
