import Link from "next/link";
import Button from "@/components/Button";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { getServices } from "@/lib/services";

const services = getServices();

export const metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <main>
        <section className="bg-[#17261f] pb-20 pt-36 text-white sm:pb-28 sm:pt-44">
          <Container>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#d5f66f]">How we help</p>
            <h1 className="max-w-4xl text-5xl font-medium leading-[1.02] tracking-[-0.06em] sm:text-7xl">
              Good ideas deserve<br />a <span className="font-serif font-normal italic text-[#d5f66f]">good team.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-7 text-white/65 sm:text-lg">
              The right mix of thinking and making to help your business get somewhere good.
            </p>
          </Container>
        </section>

        <section className="py-20 sm:py-28">
          <Container>
            <SectionHeading eyebrow="What we bring" title="Six ways to make a difference." description="Every project is different. We bring the right people and the right tools to make yours matter." />
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group flex min-h-64 flex-col rounded-2xl border border-[#17261f]/10 bg-white p-6 transition-transform hover:-translate-y-1 hover:border-[#82945e]/50 sm:p-7"
                >
                  <div className="flex items-start justify-between">
                    <span aria-hidden="true" className="text-2xl text-[#82945e]">{service.icon}</span>
                    <span aria-hidden="true" className="text-[#82945e] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                  </div>
                  <h2 className="mt-10 text-xl font-medium tracking-[-0.04em]">{service.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-[#647169]">{service.summary}</p>
                  <p className="mt-auto pt-6 text-xs text-[#647169]">Projects from <span className="font-semibold text-[#17261f]">${service.priceFrom.toLocaleString()}</span></p>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-[#e9ede3] py-16 sm:py-20">
          <Container className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
            <div>
              <SectionHeading eyebrow="A good place to start" title="Tell us what you’re thinking." />
              <p className="mt-4 text-sm text-[#647169]">We’ll help you figure out what comes next.</p>
            </div>
            <Button href="/contact" className="bg-[#17261f] text-white hover:bg-[#2b4338]">Let’s talk</Button>
          </Container>
        </section>
      </main>
    </>
  );
}
