import Button from "@/components/Button";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

const values = [
  { number: "01", title: "Stay curious", detail: "Ask better questions. Look a little closer. Leave room for the unexpected." },
  { number: "02", title: "Care deeply", detail: "The details matter, the people matter, and the work should prove it." },
  { number: "03", title: "Make it matter", detail: "We choose thoughtful work with a positive impact over noise for noise’s sake." },
];

const team = [
  { initials: "KM", name: "Kemi Manu", role: "Founder & Creative Director", color: "bg-[#e7c7aa]" },
  { initials: "AD", name: "Alex Davis", role: "Strategy Director", color: "bg-[#b8c5a2]" },
  { initials: "JL", name: "Jamie Lee", role: "Design Director", color: "bg-[#d4c3df]" },
];

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <main>
        <section className="bg-[#17261f] pb-20 pt-36 text-white sm:pb-28 sm:pt-44">
          <Container>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#d5f66f]">A little about us</p>
            <h1 className="max-w-4xl text-5xl font-medium leading-[1.02] tracking-[-0.06em] sm:text-7xl">
              Independent in spirit.<br />Together in <span className="font-serif font-normal italic text-[#d5f66f]">purpose.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-7 text-white/65 sm:text-lg">
              King Manu is a small, independent creative studio for the people moving things forward. We bring good people together to do work that means something.
            </p>
          </Container>
        </section>

        <section className="py-20 sm:py-28">
          <Container className="grid gap-12 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
            <SectionHeading eyebrow="Our story" title="Built on a simple belief." />
            <div className="space-y-5 text-base leading-8 text-[#647169]">
              <p>We started King Manu in 2016 with one big idea: the best creative work happens when you bring the right people together, give them room to think, and make something worth caring about.</p>
              <p>Today, we’re still an independent team by choice. That means no layers, no handoffs, and no one-size-fits-all answers. Just thoughtful, hands-on collaboration from the first conversation to the final details.</p>
              <p>We work with ambitious people who believe business can be a force for good—and help them turn that belief into something the world can see, feel, and use.</p>
            </div>
          </Container>
        </section>

        <section className="bg-[#e9ede3] py-20 sm:py-28">
          <Container>
            <SectionHeading eyebrow="What we believe" title="A few things we’ll never outgrow." />
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {values.map((value) => (
                <article key={value.number} className="min-h-56 rounded-2xl bg-[#f7f7f2] p-7">
                  <span className="text-xs text-[#82945e]">{value.number}</span>
                  <h3 className="mt-10 text-2xl font-medium tracking-[-0.04em]">{value.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#647169]">{value.detail}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-20 sm:py-28">
          <Container>
            <SectionHeading eyebrow="The people" title="Good humans. Good at what they do." description="A close-knit crew of curious thinkers, generous collaborators, and detail people." />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
              {team.map((person) => (
                <article key={person.name}>
                  <div className={`flex aspect-[4/4.5] items-center justify-center rounded-2xl ${person.color}`}>
                    <span aria-hidden="true" className="font-serif text-8xl italic text-[#17261f]/75">{person.initials}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-medium">{person.name}</h3>
                  <p className="mt-1 text-sm text-[#647169]">{person.role}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-[#17261f] py-16 text-white">
          <Container className="flex flex-col items-start justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="text-2xl font-medium tracking-[-0.04em] sm:text-3xl">Have a good idea? We’re listening.</p>
              <p className="mt-2 text-sm text-white/60">Let’s make something meaningful together.</p>
            </div>
            <Button href="/contact">Say hello</Button>
          </Container>
        </section>
      </main>
    </>
  );
}
