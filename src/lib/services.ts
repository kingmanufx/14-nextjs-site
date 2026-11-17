export interface Service {
  slug: string;
  title: string;
  summary: string;
  description: string;
  features: string[];
  priceFrom: number;
  icon: string;
}

const services: Service[] = [
  {
    slug: "brand-strategy",
    title: "Brand strategy",
    summary: "Find the thread that makes you unmistakably you.",
    description:
      "We get to know your business, your people, and the world you work in. Then we turn what we learn into a clear, compelling direction your whole team can get behind.",
    features: ["Research & discovery", "Positioning & messaging", "Brand architecture", "Naming & verbal identity"],
    priceFrom: 3500,
    icon: "✳",
  },
  {
    slug: "brand-identity",
    title: "Brand identity",
    summary: "A distinctive look with something to say.",
    description:
      "We shape a visual identity that feels unmistakably yours, then build a flexible design system that helps your brand show up consistently everywhere.",
    features: ["Visual identity system", "Logo suite & typography", "Art direction", "Brand guidelines"],
    priceFrom: 5000,
    icon: "◉",
  },
  {
    slug: "web-design",
    title: "Web design",
    summary: "Digital experiences made for real people.",
    description:
      "We make websites that bring your brand to life and make the complex feel simple. Every page is thoughtfully designed around your goals and the people using it.",
    features: ["UX research & planning", "Information architecture", "Responsive interface design", "Prototyping & testing"],
    priceFrom: 4500,
    icon: "↗",
  },
  {
    slug: "web-development",
    title: "Web development",
    summary: "Thoughtful design, brought to life with care.",
    description:
      "We build fast, accessible websites that are easy to use and ready to grow. From the first component to launch day, we make the technical feel effortless.",
    features: ["Custom front-end development", "CMS integration", "Accessibility & performance", "Launch support"],
    priceFrom: 6000,
    icon: "⌘",
  },
  {
    slug: "digital-products",
    title: "Digital products",
    summary: "Useful tools that make everyday better.",
    description:
      "We help turn promising ideas into useful digital products. Together, we find the right problem to solve and make a product people will want to come back to.",
    features: ["Product discovery", "User journeys & flows", "Interface design", "Product prototyping"],
    priceFrom: 7500,
    icon: "✦",
  },
  {
    slug: "creative-direction",
    title: "Creative direction",
    summary: "A clear point of view, carried through every detail.",
    description:
      "We bring a strong creative idea to life across your brand and campaigns. Our hands-on direction keeps every detail connected, distinctive, and true to you.",
    features: ["Creative concept development", "Campaign direction", "Content & art direction", "Ongoing creative partnership"],
    priceFrom: 3000,
    icon: "✺",
  },
];

export function getServices(): Service[] {
  return services;
}

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
