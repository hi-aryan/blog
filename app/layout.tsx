import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import { SITE_NAME } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: "aryan's blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className={`${inter.className} flex min-h-screen flex-col`}>
        <Navbar />
        <main className="flex-1 w-full max-w-3xl mx-auto px-4 py-8 md:py-12">
          {children}
        </main>
      </body>
    </html>
  );
}