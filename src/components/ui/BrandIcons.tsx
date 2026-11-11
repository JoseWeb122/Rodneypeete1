export function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-7.5h2.53l.38-2.94H13.5V8.69c0-.85.24-1.43 1.46-1.43h1.56V4.63A20.9 20.9 0 0 0 14.25 4.5c-2.25 0-3.79 1.37-3.79 3.89v2.17H7.92v2.94h2.54V21h3.04Z" />
    </svg>
  );
}

export function EqualHousingIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 14 16 4l13 10" strokeLinecap="round" />
      <path d="M6.5 12v15h19V12" />
      <path d="M11.5 17h9M11.5 21.5h9" strokeLinecap="round" />
    </svg>
  );
}
