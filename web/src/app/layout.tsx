import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "nano",
  description: "nano, app para posts sobre outros projetos de S. Silva.",
  creator: "https://github.com/IsaacGSS",
  appleWebApp: true,
  category: 'Blog Profissional.',
  abstract: 'nano, app para posts sobre outros projetos de S. Silva.'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-zinc-950`}>{children}</body>
    </html>
  );
}
