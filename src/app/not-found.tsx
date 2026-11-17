import Link from "next/link";
import Container from "@/components/Container";

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center bg-[#17261f] py-24 text-white">
      <Container className="w-full">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#d5f66f]">404 · Page not found</p>
        <h1 className="max-w-3xl text-5xl font-medium leading-[1.02] tracking-[-0.06em] sm:text-7xl">
          Looks like this<br />page took a <span className="font-serif font-normal italic text-[#d5f66f]">wrong turn.</span>
        </h1>
        <p className="mt-7 max-w-lg text-base leading-7 text-white/65">
          The page you&apos;re looking for may have moved, or it may never have been here.
        </p>
        <Link href="/" className="mt-9 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#d5f66f] px-6 text-sm font-semibold text-[#17261f] transition-colors hover:bg-[#c3e85c]">
          Back to home <span aria-hidden="true">↗</span>
        </Link>
      </Container>
    </main>
  );
}
