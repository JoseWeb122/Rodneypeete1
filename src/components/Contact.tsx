import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { ArrowRight, BadgeCheck, ChevronDown, CircleCheck, Mail, MapPin, Phone, Send } from "lucide-react";
import { AREAS, CONTACT, INTERESTS } from "@/data/site";
import type { Inquiry } from "@/types";
import { cn } from "@/utils/cn";
import { Reveal } from "./ui/Reveal";
import { Eyebrow } from "./ui/SectionHeading";
import { FacebookIcon } from "./ui/BrandIcons";

type FormState = {
  name: string;
  email: string;
  phone: string;
  interest: string;
  area: string;
  message: string;
};

const EMPTY: FormState = {
  name: "",
  email: "",
  phone: "",
  interest: INTERESTS[0],
  area: AREAS[0],
  message: "",
};

const inputBase =
  "w-full rounded-xl border bg-white px-4 py-3.5 text-[0.95rem] text-forest-900 placeholder:text-forest-800/35 transition focus:border-forest-700 focus:ring-4 focus:ring-forest-700/10 focus:outline-none";

function Field({
  label,
  error,
  children,
  className,
}: {
  label: string;
  error?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={cn("block", className)}>
      <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-sand-800">{label}</span>
      {children}
      {error && <span className="mt-1.5 block text-xs font-medium text-forest-700">⚠ {error}</span>}
    </label>
  );
}

export function Contact({ prefill }: { prefill: Inquiry | null }) {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sent, setSent] = useState(false);
  const [highlight, setHighlight] = useState(false);

  // Apply inquiries coming from the hero search / listings
  useEffect(() => {
    if (!prefill) return;
    setSent(false);
    setErrors({});
    setForm((f) => ({
      ...f,
      message: prefill.message,
      interest: prefill.interest && INTERESTS.includes(prefill.interest) ? prefill.interest : f.interest,
      area: prefill.area && AREAS.includes(prefill.area) ? prefill.area : f.area,
    }));
    setHighlight(true);
    const t = window.setTimeout(() => setHighlight(false), 2000);
    return () => window.clearTimeout(t);
  }, [prefill]);

  const update = (key: keyof FormState) => (value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim() && !form.phone.trim()) next.email = "Please add an email or phone number.";
    if (form.email.trim() && !/^\S+@\S+\.\S+$/.test(form.email.trim())) next.email = "Please enter a valid email.";
    if (!form.message.trim()) next.message = "Please tell us how we can help.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const subject = `Website Inquiry: ${form.interest} (${form.name.trim()})`;
    const body = [
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim() || "-"}`,
      `Phone: ${form.phone.trim() || "-"}`,
      `Interested in: ${form.interest}`,
      `Preferred area: ${form.area}`,
      "",
      form.message.trim(),
    ].join("\n");
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-sand-100 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 pattern-linen opacity-60" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow align="center">Get in Touch</Eyebrow>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] font-semibold text-balance text-forest-900 sm:text-5xl lg:text-6xl">
            Let’s make your dream <em className="text-sand-700">a real address.</em>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-forest-800/75">
            Questions about buying, selling, mortgage loans or Notary services? Drop us a line — Rodney will personally
            follow up.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-[5fr_7fr]">
          {/* Contact details */}
          <Reveal direction="left" className="flex flex-col gap-6">
            <div className="relative overflow-hidden rounded-3xl bg-forest-900 pattern-pinstripe p-8 text-sand-100 sm:p-10">
              <div className="pointer-events-none absolute -top-20 -right-20 h-60 w-60 rounded-full bg-forest-600/30 blur-3xl" />
              <h3 className="relative font-display text-3xl font-semibold text-sand-50">Dreams R Real</h3>
              <p className="relative mt-1 text-[11px] font-semibold uppercase tracking-[0.26em] text-sand-300">
                Rodney C. Peete · Real Estate Agent
              </p>
              <ul className="relative mt-8 space-y-6">
                <li>
                  <a href={CONTACT.phoneHref} className="group flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-sand-300 text-forest-900">
                      <Phone className="h-4.5 w-4.5" />
                    </span>
                    <span>
                      <span className="block text-[10px] font-semibold uppercase tracking-[0.24em] text-sand-300/80">Call or Text</span>
                      <span className="mt-0.5 block font-display text-2xl font-semibold text-sand-50 transition group-hover:text-sand-300">
                        {CONTACT.phone}
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${CONTACT.email}`} className="group flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-sand-300 text-forest-900">
                      <Mail className="h-4.5 w-4.5" />
                    </span>
                    <span>
                      <span className="block text-[10px] font-semibold uppercase tracking-[0.24em] text-sand-300/80">Email</span>
                      <span className="mt-0.5 block break-all text-base font-semibold text-sand-50 transition group-hover:text-sand-300">
                        {CONTACT.email}
                      </span>
                    </span>
                  </a>
                </li>
                <li className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-sand-300 text-forest-900">
                    <MapPin className="h-4.5 w-4.5" />
                  </span>
                  <span>
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.24em] text-sand-300/80">Office</span>
                    <span className="mt-0.5 block text-base font-semibold text-sand-50">
                      {CONTACT.addressLine1}
                      <br />
                      {CONTACT.addressLine2}
                    </span>
                  </span>
                </li>
              </ul>
              <div className="relative mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-sand-300/15 pt-6">
                <span className="flex items-center gap-2 text-xs font-semibold tracking-wide text-sand-200/80">
                  <BadgeCheck className="h-4 w-4 text-sand-400" />
                  CA DRE #{CONTACT.dre}
                </span>
                <a
                  href={CONTACT.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full border border-sand-300/40 text-sand-200 transition hover:bg-sand-300 hover:text-forest-900"
                  aria-label="Dreams R Realty on Facebook"
                >
                  <FacebookIcon className="h-4.5 w-4.5" />
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-sand-300 bg-sand-200 shadow-sm">
              <iframe
                title="Dreams R Real office location map"
                src={CONTACT.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="map-tint block h-64 w-full border-0 lg:h-full lg:min-h-64"
              />
            </div>
          </Reveal>

          {/* Form */}
          <Reveal direction="right">
            <div
              className={cn(
                "h-full rounded-3xl border bg-sand-50 p-7 shadow-xl shadow-forest-950/5 transition duration-700 sm:p-10",
                highlight ? "border-forest-700 ring-4 ring-forest-700/15" : "border-sand-300"
              )}
            >
              {sent ? (
                <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                  <span className="grid h-20 w-20 place-items-center rounded-full bg-forest-800 text-sand-300">
                    <CircleCheck className="h-9 w-9" />
                  </span>
                  <h3 className="mt-7 font-display text-4xl font-semibold text-forest-900">Almost there, {form.name.split(" ")[0]}!</h3>
                  <p className="mt-4 max-w-md leading-relaxed text-forest-800/75">
                    Your email app should now be open with your message ready to go — just press send. Prefer to talk?
                    Call Rodney directly at{" "}
                    <a href={CONTACT.phoneHref} className="font-semibold text-forest-800 underline decoration-sand-500 underline-offset-4">
                      {CONTACT.phone}
                    </a>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setForm(EMPTY);
                      setSent(false);
                    }}
                    className="mt-8 inline-flex items-center gap-2 rounded-full border border-forest-800/20 px-6 py-3 text-sm font-semibold text-forest-800 transition hover:bg-forest-800 hover:text-sand-100"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <h3 className="font-display text-3xl font-semibold text-forest-900">Send a Message</h3>
                    <p className="mt-1 text-sm text-forest-800/65">Fields marked * are required.</p>
                  </div>
                  <Field label="Full Name *" error={errors.name} className="sm:col-span-2">
                    <input
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) => update("name")(e.target.value)}
                      placeholder="Your name"
                      className={cn(inputBase, errors.name ? "border-forest-700" : "border-sand-300")}
                    />
                  </Field>
                  <Field label="Email *" error={errors.email}>
                    <input
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => update("email")(e.target.value)}
                      placeholder="you@example.com"
                      className={cn(inputBase, errors.email ? "border-forest-700" : "border-sand-300")}
                    />
                  </Field>
                  <Field label="Phone">
                    <input
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={(e) => update("phone")(e.target.value)}
                      placeholder="(555) 555-5555"
                      className={cn(inputBase, "border-sand-300")}
                    />
                  </Field>
                  <Field label="I’m Interested In">
                    <div className="relative">
                      <select
                        value={form.interest}
                        onChange={(e) => update("interest")(e.target.value)}
                        className={cn(inputBase, "cursor-pointer appearance-none border-sand-300 pr-10")}
                      >
                        {INTERESTS.map((o) => (
                          <option key={o}>{o}</option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 text-sand-700" />
                    </div>
                  </Field>
                  <Field label="Preferred Area">
                    <div className="relative">
                      <select
                        value={form.area}
                        onChange={(e) => update("area")(e.target.value)}
                        className={cn(inputBase, "cursor-pointer appearance-none border-sand-300 pr-10")}
                      >
                        {AREAS.map((o) => (
                          <option key={o}>{o}</option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 text-sand-700" />
                    </div>
                  </Field>
                  <Field label="Message *" error={errors.message} className="sm:col-span-2">
                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={(e) => update("message")(e.target.value)}
                      placeholder="Tell Rodney about the home of your dreams…"
                      className={cn(inputBase, "resize-none", errors.message ? "border-forest-700" : "border-sand-300")}
                    />
                  </Field>
                  <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs leading-relaxed text-forest-800/60">
                      Submitting opens your email app with your message addressed to Rodney.
                    </p>
                    <button
                      type="submit"
                      className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-forest-800 px-8 py-4 text-sm font-semibold tracking-wide text-sand-100 shadow-lg shadow-forest-900/20 transition hover:bg-forest-700"
                    >
                      <Send className="h-4 w-4 text-sand-300" />
                      Send Message
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
