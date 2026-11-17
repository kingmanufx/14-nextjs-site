import Link from "next/link";
import Container from "./Container";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#17261f] py-10 text-white">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Link href="/" className="text-lg font-semibold tracking-[-0.04em]">king manu</Link>
          <p className="mt-2 text-sm text-white/55">Independent by nature. Digital by design.</p>
        </div>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-3">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} className="text-sm text-white/65 transition-colors hover:text-[#d5f66f]">
              {label}
            </Link>
          ))}
        </nav>
        <p className="text-xs text-white/40">© King Manu Studio</p>
      </Container>
    </footer>
  );
}
