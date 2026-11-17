import Link from "next/link";
import Container from "@/components/Container";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <main className="flex flex-1 items-center bg-[#17261f] pb-20 pt-36 text-white sm:pb-28 sm:pt-44">
        <Container className="grid w-full gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#d5f66f]">Get in touch</p>
            <h1 className="max-w-3xl text-5xl font-medium leading-[1.02] tracking-[-0.06em] sm:text-7xl">
              Have something<br />good in <span className="font-serif font-normal italic text-[#d5f66f]">mind?</span>
            </h1>
            <p className="mt-8 max-w-lg text-base leading-7 text-white/65 sm:text-lg">
              We’d love to hear what you’re working on. This contact page is just getting started—drop us a line and we’ll take it from here.
            </p>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/[0.04] p-7 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">For new projects & good conversations</p>
            <Link href="mailto:hello@kingmanu.studio" className="mt-5 inline-block text-xl font-medium text-[#d5f66f] hover:text-white sm:text-2xl">
              hello@kingmanu.studio <span aria-hidden="true">↗</span>
            </Link>
            <div className="mt-8 border-t border-white/15 pt-5">
              <p className="text-sm text-white/55">A small independent studio, working everywhere.</p>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
