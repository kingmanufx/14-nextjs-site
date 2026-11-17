import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: "primary" | "secondary";
};

export default function Button({
  href,
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-[#d5f66f] text-[#17261f] hover:bg-[#c3e85c]"
      : "border border-white/25 text-white hover:border-white/60 hover:bg-white/10";

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 text-sm font-semibold transition-colors ${styles} ${className}`}
      {...props}
    >
      {children}
      <span aria-hidden="true">↗</span>
    </Link>
  );
}
