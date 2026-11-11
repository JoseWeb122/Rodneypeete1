import { Mail, MapPin, Phone } from "lucide-react";
import { CONTACT, NAV_LINKS, SUPPORT_SERVICES } from "@/data/site";
import { Logo } from "./ui/Logo";
import { EqualHousingIcon, FacebookIcon } from "./ui/BrandIcons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-forest-950 text-sand-100">
      <div className="pointer-events-none absolute inset-0 pattern-pinstripe opacity-60" />

      {/* CTA strip */}
      <div className="relative border-b border-sand-300/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-14 md:flex-row md:items-center lg:px-8">
          <p className="max-w-2xl font-display text-3xl leading-tight font-semibold text-sand-50 sm:text-4xl">
            Ready to turn your dream into an address? <em className="text-sand-300">Let’s talk.</em>
          </p>
          <a
            href={CONTACT.phoneHref}
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-sand-300 px-7 py-4 text-sm font-semibold tracking-wide text-forest-900 transition hover:bg-sand-200"
          >
            <Phone className="h-4 w-4" />
            Call {CONTACT.phone}
          </a>
        </div>
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr] lg:px-8">
        <div>
          <Logo />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-sand-100/60">
            Real estate done right across Los Angeles, Orange, Riverside and San Diego Counties — with mortgage loan
            and Notary services under one roof.
          </p>
          <a
            href={CONTACT.facebook}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-sand-300/30 text-sand-200 transition hover:bg-sand-300 hover:text-forest-900"
            aria-label="Dreams R Realty on Facebook"
          >
            <FacebookIcon className="h-4.5 w-4.5" />
          </a>
        </div>

        <div>
          <h4 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-sand-300">Explore</h4>
          <ul className="mt-6 space-y-3 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className="text-sand-100/70 transition hover:text-sand-300">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-sand-300">Services</h4>
          <ul className="mt-6 space-y-3 text-sm">
            {SUPPORT_SERVICES.map((s) => (
              <li key={s.key}>
                <a href="#services" className="text-sand-100/70 transition hover:text-sand-300">
                  {s.title}
                </a>
              </li>
            ))}
            <li>
              <a href="#listings" className="text-sand-100/70 transition hover:text-sand-300">
                Commercial & Rentals
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-sand-300">Contact</h4>
          <ul className="mt-6 space-y-4 text-sm text-sand-100/70">
            <li>
              <a href={CONTACT.phoneHref} className="flex items-start gap-3 transition hover:text-sand-300">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-sand-400" />
                {CONTACT.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`} className="flex items-start gap-3 break-all transition hover:text-sand-300">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-sand-400" />
                {CONTACT.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sand-400" />
              <span>
                {CONTACT.addressLine1}
                <br />
                {CONTACT.addressLine2}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-sand-300/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-7 text-xs text-sand-100/50 md:flex-row lg:px-8">
          <p>© {year} Dreams R Real — All Rights Reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <span>Rodney C. Peete · CA DRE #{CONTACT.dre}</span>
            <span className="flex items-center gap-2">
              <EqualHousingIcon className="h-5 w-5 text-sand-300/70" />
              Equal Housing Opportunity
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
