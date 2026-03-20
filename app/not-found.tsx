import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6">
      <h1 className="font-display text-4xl font-bold text-[var(--text-primary)] mb-2">
        404
      </h1>
      <p className="text-[var(--text-secondary)] mb-8">
        This page couldn’t be found.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3.5 text-base font-semibold text-white hover:bg-[var(--accent-hover)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
      >
        Back to home
      </Link>
    </div>
  );
}
