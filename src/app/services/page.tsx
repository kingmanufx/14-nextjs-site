import Button from "@/components/Button";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    number: "01",
    title: "Brand strategy",
    intro: "Find the thread that makes you unmistakably you.",
    detail: "We help you understand your audience, sharpen your story, and find a clear position you can build on.",
    deliverables: ["Research & discovery", "Positioning & messaging", "Brand architecture"],
  },
  {
    number: "02",
    title: "Identity & design",
    intro: "A distinctive look with something to say.",
    detail: "From a new visual identity to the everyday details, we create design systems that look good and work hard.",
    deliverables: ["Visual identity", "Art direction", "Design systems"],
  },
  {
    number: "03",
    title: "Digital experiences",
    intro: "Thoughtful digital, made for real people.",
    detail: "We design and build websites that bring your brand to life, make the complex feel simple, and give people a reason to stay.",
    deliverables: ["Web design & development", "Digital products", "Content & campaigns"],
  },
];

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
            <SectionHeading eyebrow="What we bring" title="Three ways to make a difference." description="Every project is different. We bring the right people and the right tools to make yours matter." />
            <div className="mt-14">
              {services.map((service) => (
                <article key={service.number} className="grid gap-6 border-t border-[#17261f]/15 py-9 md:grid-cols-[0.12fr_0.9fr_1fr_0.85fr] md:gap-8 md:py-12">
                  <span className="text-xs text-[#82945e]">{service.number}</span>
                  <div>
                    <h2 className="text-2xl font-medium tracking-[-0.04em]">{service.title}</h2>
                    <p className="mt-3 text-sm font-medium leading-6">{service.intro}</p>
                  </div>
                  <p className="text-sm leading-7 text-[#647169]">{service.detail}</p>
                  <ul className="space-y-2 text-sm text-[#647169]">
                    {service.deliverables.map((item) => <li key={item}><span className="mr-2 text-[#82945e]">↗</span>{item}</li>)}
                  </ul>
                </article>
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
