import Container from "@/components/Container";

export default function LoadingService() {
  return (
    <main aria-busy="true" aria-label="Loading service details">
      <section className="animate-pulse bg-[#17261f] pb-20 pt-36 sm:pb-28 sm:pt-44">
        <Container>
          <div className="h-4 w-24 rounded bg-white/15" />
          <div className="mt-12 h-4 w-28 rounded bg-[#d5f66f]/40" />
          <div className="mt-6 h-12 max-w-xl rounded bg-white/15 sm:h-16" />
          <div className="mt-6 h-5 max-w-lg rounded bg-white/10" />
        </Container>
      </section>
      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 md:grid-cols-[1fr_0.8fr] md:gap-20">
          <div className="space-y-5">
            <div className="h-4 w-28 rounded bg-[#17261f]/10" />
            <div className="h-10 max-w-md rounded bg-[#17261f]/10" />
            <div className="h-24 max-w-xl rounded bg-[#17261f]/10" />
          </div>
          <div className="h-56 rounded-2xl bg-[#e9ede3]" />
        </Container>
      </section>
    </main>
  );
}
