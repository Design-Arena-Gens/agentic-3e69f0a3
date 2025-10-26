import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Sora 2 Studio — Unlimited, Watermark-Free Video Creation",
  description:
    "Craft cinematic AI videos with the next evolution of Sora. Unlimited renders, zero watermark, and instant sharing straight from the browser.",
  openGraph: {
    title: "Sora 2 Studio — Unlimited, Watermark-Free Video Creation",
    description:
      "Unlock the full power of Sora 2 with unrestricted, watermark-free video generation. Built for creators, teams, and studios.",
    siteName: "Sora 2 Studio",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Sora 2 Studio preview showcasing cinematic AI videos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sora 2 Studio — Unlimited, Watermark-Free Video Creation",
    description:
      "Generate cinematic AI videos with Sora 2. Free forever, no watermark, and blazing fast previews.",
    images: [
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1200&q=80",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
