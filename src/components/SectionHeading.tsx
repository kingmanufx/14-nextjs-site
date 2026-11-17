type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className={`mb-4 text-xs font-semibold uppercase tracking-[0.2em] ${light ? "text-[#d5f66f]" : "text-[#75877a]"}`}>
        {eyebrow}
      </p>
      <h2 className={`text-4xl font-medium leading-[1.08] tracking-[-0.05em] sm:text-5xl ${light ? "text-white" : "text-[#17261f]"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-5 max-w-xl text-base leading-7 ${light ? "text-white/65" : "text-[#647169]"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
