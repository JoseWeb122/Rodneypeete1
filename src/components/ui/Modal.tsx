import { useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { cn } from "@/utils/cn";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  label: string;
  className?: string;
  onKeyNav?: (dir: -1 | 1) => void;
};

export function Modal({ open, onClose, children, label, className, onKeyNav }: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (onKeyNav && e.key === "ArrowRight") onKeyNav(1);
      if (onKeyNav && e.key === "ArrowLeft") onKeyNav(-1);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose, onKeyNav]);

  if (!open) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={label}
      className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-8"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 animate-[fade-up_0.4s_ease_both] cursor-zoom-out bg-forest-950/90 backdrop-blur-md"
      />
      <button
        type="button"
        onClick={onClose}
        aria-label="Close dialog"
        className="absolute top-4 right-4 z-10 grid h-12 w-12 place-items-center rounded-full border border-sand-300/40 text-sand-100 transition hover:bg-sand-300 hover:text-forest-900 sm:top-6 sm:right-6"
      >
        <X className="h-5 w-5" />
      </button>
      <div className={cn("relative z-[1] w-full animate-fade-up", className)}>{children}</div>
    </div>,
    document.body
  );
}
