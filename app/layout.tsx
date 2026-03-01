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
  title: "Aliyan Sajid | Full-Stack Developer",
  description:
    "Next-generation full-stack development. Building scalable, high-performance web systems and intelligent user interfaces.",
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
