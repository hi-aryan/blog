import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/sidebar";
import { SITE_NAME } from "@/lib/constants";
import { StaticNoise } from "@/components/ui/static-noise";

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
      <body className={`${inter.className} min-h-screen`}>
        <StaticNoise opacity={0.15} className="fixed inset-0 z-0" />
        <Sidebar />
        <main className="relative z-10 min-h-screen md:ml-48 px-4 pt-16 pb-8 md:py-12">
          <div className="max-w-3xl mx-auto">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}