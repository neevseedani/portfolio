import Link from "next/link";

const socialLinks = [
  { href: "https://linkedin.com/in/neevseedani", label: "LinkedIn", external: true },
  { href: "https://github.com/neevseedani", label: "GitHub", external: true },
  { href: "mailto:neev@stanford.edu", label: "Email", external: true },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background-alt)]">
      <div className="mx-auto max-w-[1200px] px-6 py-12">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-[var(--text-muted)] text-sm">
            © {new Date().getFullYear()} Neev Seedani
          </p>
          <nav aria-label="Social links">
            <ul className="flex items-center gap-6">
              {socialLinks.map(({ href, label, external }) => (
                <li key={label}>
                  <Link
                    href={href}
                    {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                    className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 rounded"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-6 text-center text-xs text-[var(--text-muted)]">
          Built with Next.js
        </p>
      </div>
    </footer>
  );
}
