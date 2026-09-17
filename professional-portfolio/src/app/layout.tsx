import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kasun Perera | Senior Software Engineer Portfolio",
  description:
    "Senior Full-Stack Software Engineer specializing in cloud architecture, Next.js, React, and distributed systems.",
  keywords: [
    "software engineer",
    "full stack developer",
    "next.js",
    "react",
    "typescript",
    "portfolio",
    "sri lanka",
  ],
  authors: [{ name: "Kasun Perera" }],
  openGraph: {
    title: "Kasun Perera | Senior Software Engineer",
    description:
      "Senior Full-Stack Software Engineer with 6+ years of experience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable} dark scroll-smooth`}
    >
      <body className="bg-slate-950 text-slate-100 antialiased selection:bg-brand-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}