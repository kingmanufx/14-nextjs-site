import Link from "next/link";
import Button from "@/components/Button";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

const services = [
  { number: "01", name: "Brand strategy", detail: "The clarity and character to stand apart.", mark: "✳" },
  { number: "02", name: "Digital experiences", detail: "Useful, beautiful things people love to use.", mark: "↗" },
  { number: "03", name: "Creative direction", detail: "A distinct point of view, made to last.", mark: "◉" },
];

const testimonials = [
  { quote: "They didn’t just give us a new look. They gave us the confidence to think bigger.", name: "Amara Okafor", role: "Founder, Form & Field" },
  { quote: "Smart people, considered work, and a process that actually felt collaborative.", name: "Daniel Hayes", role: "CEO, Goodkind" },
];

export default function Home() {
  return (
    <>
      <main>
        <section className="relative min-h-[720px] overflow-hidden bg-[#17261f] pt-20 text-white sm:min-h-[780px]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_45%,rgba(157,181,114,0.2),transparent_35%)]" />
          <Container className="relative grid min-h-[660px] items-center gap-12 py-16 sm:min-h-[700px] lg:grid-cols-[1.08fr_0.92fr] lg:gap-8">
            <div className="max-w-2xl">
              <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs text-white/75">
                <span className="size-1.5 rounded-full bg-[#d5f66f]" /> Independent creative studio · Est. 2016
              </p>
              <h1 className="text-[clamp(3.5rem,9vw,7.5rem)] font-medium leading-[0.91] tracking-[-0.075em]">
                Make room
                <br />
                for <span className="font-serif font-normal italic text-[#d5f66f]">better.</span>
              </h1>
              <p className="mt-8 max-w-md text-base leading-7 text-white/65 sm:text-lg">
                We build brands and digital experiences for people making a positive mark on the world.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button href="/contact">Start a conversation</Button>
                <Link href="/services" className="px-3 py-3 text-sm text-white/80 transition-colors hover:text-[#d5f66f]">
                  Explore what we do <span aria-hidden="true">↗</span>
                </Link>
              </div>
              <p className="mt-16 text-xs uppercase tracking-[0.18em] text-white/40">Small team. Big-picture thinking.</p>
            </div>

            <div className="relative mx-auto hidden h-[480px] w-full max-w-[470px] lg:block">
              <div className="absolute right-0 top-2 h-[430px] w-[82%] overflow-hidden rounded-[48%_48%_12px_12px] bg-[linear-gradient(145deg,#c1c78f_0%,#718c71_45%,#344b40_100%)]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(247,237,196,0.9),transparent_28%),linear-gradient(155deg,transparent_48%,rgba(19,38,31,0.7))]" />
                <div className="absolute bottom-8 left-8 text-sm leading-6 text-white/80">A little different<br />by design.</div>
              </div>
              <div className="absolute bottom-0 left-0 flex size-36 flex-col justify-between rounded-full bg-[#d5f66f] p-5 text-[#17261f]">
                <span className="text-2xl">✳</span>
                <span className="text-xs font-semibold uppercase leading-4 tracking-wider">Good things<br />grow here</span>
              </div>
              <span className="absolute right-[4%] top-12 size-3 rounded-full bg-[#d5f66f]" />
            </div>
          </Container>
          <div className="absolute bottom-0 left-0 h-px w-full bg-white/10" />
        </section>

        <section className="py-24 sm:py-32">
          <Container>
            <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
              <SectionHeading eyebrow="What we do" title="Good work starts with good thinking." description="We bring strategy, design and technology together to make the complex feel clear—and the ordinary feel full of possibility." />
              <Link href="/services" className="shrink-0 pb-1 text-sm font-semibold text-[#17261f] hover:text-[#708346]">
                All services <span aria-hidden="true">↗</span>
              </Link>
            </div>
            <div className="mt-14 grid border-t border-[#17261f]/15 md:grid-cols-3">
              {services.map((service) => (
                <article key={service.number} className="group border-b border-[#17261f]/15 py-7 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
                  <div className="flex items-center justify-between text-xs text-[#708078]">
                    <span>{service.number}</span>
                    <span className="text-2xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">{service.mark}</span>
                  </div>
                  <h3 className="mt-12 text-2xl font-medium tracking-[-0.04em]">{service.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#647169]">{service.detail}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-[#e9ede3] py-20 sm:py-24">
          <Container className="grid gap-12 sm:grid-cols-3 sm:gap-8">
            {[
              { value: "08", label: "years making good things" },
              { value: "42", label: "good people we’ve partnered with" },
              { value: "11", label: "industry awards & counting" },
            ].map((stat) => (
              <div key={stat.label} className="border-l border-[#17261f]/20 pl-5">
                <p className="text-5xl font-medium tracking-[-0.07em] sm:text-6xl">{stat.value}<span className="text-[#82945e]">+</span></p>
                <p className="mt-3 text-sm text-[#647169]">{stat.label}</p>
              </div>
            ))}
          </Container>
        </section>

        <section className="py-24 sm:py-32">
          <Container>
            <SectionHeading eyebrow="Kind words" title="Better together. Always." />
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {testimonials.map((testimonial) => (
                <figure key={testimonial.name} className="flex min-h-64 flex-col justify-between rounded-2xl bg-white p-7 sm:p-9">
                  <blockquote className="max-w-lg text-2xl leading-snug tracking-[-0.04em] sm:text-3xl">“{testimonial.quote}”</blockquote>
                  <figcaption className="mt-8 text-sm">
                    <span className="font-semibold">{testimonial.name}</span>
                    <span className="ml-2 text-[#647169]">{testimonial.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-[#17261f] py-20 sm:py-28">
          <Container className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading light eyebrow="Have a good one?" title="Let’s make it happen." description="A big idea, a little question, or just a hello. Our inbox is open." />
            <Button href="/contact" className="shrink-0">Tell us about it</Button>
          </Container>
        </section>
      </main>
    </>
  );
}
