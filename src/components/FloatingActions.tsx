import { useEffect, useState } from "react";
import { ArrowUp, Phone } from "lucide-react";
import { CONTACT } from "@/data/site";
import { cn } from "@/utils/cn";

export function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed right-5 bottom-5 z-40 flex flex-col items-end gap-3 transition-all duration-500 sm:right-8 sm:bottom-8",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      )}
    >
      <a
        href={CONTACT.phoneHref}
        className="flex items-center gap-2 rounded-full bg-sand-300 px-5 py-3.5 text-sm font-semibold text-forest-900 shadow-xl shadow-forest-950/30 transition hover:bg-sand-200 md:hidden"
      >
        <Phone className="h-4 w-4" />
        Call Rodney
      </a>
      <a
        href="#home"
        aria-label="Back to top"
        className="grid h-12 w-12 place-items-center rounded-full border border-sand-300/30 bg-forest-900 text-sand-300 shadow-xl shadow-forest-950/30 transition hover:bg-forest-700"
      >
        <ArrowUp className="h-5 w-5" />
      </a>
    </div>
  );
}
