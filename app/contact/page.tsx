import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact — Neev Seedani",
  description:
    "Get in touch with Neev Seedani for design and development projects. Let's create something together.",
};

export default function ContactPage() {
  return (
    <div className="px-6 py-16">
      <div className="mx-auto max-w-[600px]">
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-[var(--text-primary)] mb-4">
          Let&apos;s create something together
        </h1>
        <p className="text-lg text-[var(--text-secondary)] mb-12">
          Have a project in mind or just want to say hi? I&apos;d love to hear from you.
        </p>

        <ContactForm />

        <div className="mt-12 pt-12 border-t border-[var(--border)]">
          <p className="text-sm font-semibold text-[var(--text-muted)] mb-4">Find me elsewhere</p>
          <ul className="flex gap-6">
            <li>
              <a
                href="https://linkedin.com/in/neevseedani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] font-medium hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 rounded"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/neevseedani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] font-medium hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 rounded"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
