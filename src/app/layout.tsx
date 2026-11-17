import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { openGraphImage, siteUrl } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "King Manu | Independent Digital Agency",
    template: "%s | King Manu",
  },
  description:
    "King Manu is an independent digital agency building distinctive brands and thoughtful digital experiences.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "King Manu",
    title: "King Manu | Independent Digital Agency",
    description:
      "King Manu is an independent digital agency building distinctive brands and thoughtful digital experiences.",
    images: [openGraphImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "King Manu | Independent Digital Agency",
    description:
      "King Manu is an independent digital agency building distinctive brands and thoughtful digital experiences.",
    images: [openGraphImage.url],
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
