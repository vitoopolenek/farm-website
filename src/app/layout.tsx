import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SiteFooter, SiteHeader } from "@/components/layout";
import { siteDescription } from "@/config/site";
import { rootMetadata } from "@/lib/metadata";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  ...rootMetadata,
  description: siteDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sl" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col text-ink">
        <a
          href="#vsebina"
          className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:block focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Preskoči na vsebino
        </a>
        <SiteHeader />
        <div id="vsebina" className="flex-1">
          {children}
        </div>
        <SiteFooter />
      </body>
    </html>
  );
}
