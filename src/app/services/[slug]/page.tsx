import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/Button";
import Container from "@/components/Container";
import { getService, getServices } from "@/lib/services";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getServices().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {
      title: "Service not found",
      description: "We couldn't find the service you're looking for.",
    };
  }

  return {
    title: service.title,
    description: service.summary,
    openGraph: {
      title: service.title,
      description: service.summary,
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  return (
    <main>
      <section className="bg-[#17261f] pb-20 pt-36 text-white sm:pb-28 sm:pt-44">
        <Container>
          <Link href="/services" className="mb-10 inline-flex text-sm text-white/65 transition-colors hover:text-[#d5f66f]">
            <span aria-hidden="true" className="mr-2">←</span> All services
          </Link>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#d5f66f]">How we help</p>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span aria-hidden="true" className="mb-5 block text-3xl text-[#d5f66f]">{service.icon}</span>
              <h1 className="max-w-3xl text-5xl font-medium leading-[1.02] tracking-[-0.06em] sm:text-7xl">{service.title}</h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">{service.summary}</p>
            </div>
            <p className="shrink-0 text-sm text-white/60">Projects from <span className="font-semibold text-white">${service.priceFrom.toLocaleString()}</span></p>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 md:grid-cols-[1fr_0.8fr] md:gap-20">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#75877a]">The approach</p>
            <h2 className="text-3xl font-medium leading-tight tracking-[-0.05em] sm:text-4xl">Good work, made together.</h2>
            <p className="mt-6 text-base leading-8 text-[#647169]">{service.description}</p>
          </div>
          <div className="rounded-2xl bg-[#e9ede3] p-7 sm:p-9">
            <h2 className="text-xl font-medium tracking-[-0.04em]">What&apos;s included</h2>
            <ul className="mt-6 space-y-4">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-[#46564c]">
                  <span aria-hidden="true" className="mt-0.5 text-[#82945e]">✳</span>{feature}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-[#17261f] py-16 text-white sm:py-20">
        <Container className="flex flex-col items-start justify-between gap-7 sm:flex-row sm:items-center">
          <div>
            <p className="text-2xl font-medium tracking-[-0.04em] sm:text-3xl">Have a good idea? Let&apos;s talk.</p>
            <p className="mt-2 text-sm text-white/60">We&apos;ll help you find a good way forward.</p>
          </div>
          <Button href="/contact">Start a conversation</Button>
        </Container>
      </section>
    </main>
  );
}
