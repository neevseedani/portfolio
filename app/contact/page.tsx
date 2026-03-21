import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact — Neev Seedani",
  description: "Get in touch with Neev Seedani for design and development projects. Let's create something together.",
};

export default function ContactPage() {
  return (
    <>
      {/* Dark cinematic header */}
      <header
        className="relative -mt-[72px] overflow-hidden flex flex-col justify-end"
        style={{ background: "var(--dark)", minHeight: "42vh", paddingBottom: "3.5rem" }}
      >
        {/* Grain texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ opacity: 0.04, backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize: "192px 192px" }}
          aria-hidden
        />
        <div className="relative px-6 mx-auto max-w-[1200px] w-full">
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.2em] mb-3"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            Contact
          </p>
          <h1
            className="font-display font-bold leading-[0.90] max-w-2xl"
            style={{ fontSize: "clamp(2.2rem,5.5vw,5rem)", color: "rgba(255,255,255,0.95)", letterSpacing: "-0.04em" }}
          >
            Let&apos;s create something together
          </h1>
          <p
            className="mt-4 text-lg max-w-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,0.50)" }}
          >
            Have a project in mind or just want to say hi?
          </p>
        </div>
      </header>

      {/* Cream form area */}
      <div className="px-6 py-16" style={{ background: "var(--background)" }}>
        <div className="mx-auto max-w-[600px]">
          <ContactForm />

          <div className="mt-12 pt-12 border-t border-[var(--border)]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)] mb-4">
              Find me elsewhere
            </p>
            <ul className="flex gap-6">
              <li>
                <a
                  href="https://linkedin.com/in/neevseedani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] font-medium hover:underline underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 rounded text-sm"
                >
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/neevseedani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] font-medium hover:underline underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 rounded text-sm"
                >
                  GitHub ↗
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
