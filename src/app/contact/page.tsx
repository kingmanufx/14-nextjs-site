import Container from "@/components/Container";
import ContactForm from "./ContactForm";

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
              Tell us what you’re working on, what you have in mind, and where you’d like to go next.
            </p>
          </div>
          <ContactForm />
        </Container>
      </main>
    </>
  );
}
