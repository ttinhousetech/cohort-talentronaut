import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MetaPixel } from "@/components/MetaPixel";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Talentronaut — Cohort 2.0 | MVP in 11 Days",
  description: "Accelerate your startup journey. Build and launch your MVP in record time with Cohort 2.0.",
  openGraph: {
    title: "Talentronaut — Cohort 2.0 | MVP in 11 Days",
    description: "Launch your MVP in 11 days. Join the next cohort of high-impact founders.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Talentronaut Cohort 2.0 Flyer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Talentronaut — Cohort 2.0 | MVP in 11 Days",
    description: "Build and launch your MVP in 11 days.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
