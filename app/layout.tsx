import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "An Autobiography Told Through Love",
  description: "A collection of things that delighted me, changed me, broke me, and brought me home.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "An Autobiography Told Through Love",
    description: "A collection of things that delighted me, changed me, broke me, and brought me home.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "An Autobiography Told Through Love" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
