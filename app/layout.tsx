// app/layout.tsx
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";
import { Nav } from "@/components/nav";
import { Toaster } from "sonner";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Laurynas Miskinis",
  description: "Personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${roboto.variable} antialiased bg-black overflow-x-hidden`}
      >
        <StarsBackground className="fixed inset-0 -z-10 size-full" />

        <div className="mx-auto max-w-5xl bg-black/80 min-h-screen">
          <Nav />
          <main className="sm:px-18 sm:py-12 px-4 py-8 sm:pb-6 pb-0">
            {children}
          </main>
        </div>
        <Toaster theme="dark" />
      </body>
    </html>
  );
}
