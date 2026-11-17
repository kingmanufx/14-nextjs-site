export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://kingmanu.studio",
);

export const openGraphImage = {
  url: new URL("/og-image.png", siteUrl).toString(),
  width: 1200,
  height: 630,
  alt: "King Manu — independent creative studio",
};
