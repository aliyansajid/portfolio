import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AudioSystemProvider } from "@/components/AudioSystem";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aliyansajid.com"),
  title: {
    default: "Aliyan Sajid | Full-Stack Developer",
    template: "%s | Aliyan Sajid",
  },
  description:
    "Next-generation full-stack development. Building scalable, high-performance web systems and intelligent user interfaces.",
  keywords: [
    "Full-Stack Developer",
    "Web Development",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Software Engineer",
    "Aliyan Sajid",
    "Portfolio",
    "Web Applications",
  ],
  authors: [{ name: "Aliyan Sajid" }],
  creator: "Aliyan Sajid",
  publisher: "Aliyan Sajid",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aliyansajid.com",
    title: "Aliyan Sajid | Full-Stack Developer",
    description:
      "Next-generation full-stack development. Building scalable, high-performance web systems and intelligent user interfaces.",
    siteName: "Aliyan Sajid Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aliyan Sajid - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aliyan Sajid | Full-Stack Developer",
    description:
      "Next-generation full-stack development. Building scalable, high-performance web systems and intelligent user interfaces.",
    images: ["/og-image.jpg"],
    creator: "@aliyansajid",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-blue-500/30 selection:text-blue-200`}
      >
        <AudioSystemProvider>{children}</AudioSystemProvider>
      </body>
    </html>
  );
}
