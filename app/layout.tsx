import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hannah | Portfolio",
  description:
    "Minimal portfolio for a Cognitive Systems graduate and UBC Computer Science student.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-white font-sans text-zinc-950">
        {children}
      </body>
    </html>
  );
}
