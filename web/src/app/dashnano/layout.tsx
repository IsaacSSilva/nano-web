import type { Metadata } from "next";
import { Inter, Roboto_Flex } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto_Flex({ subsets: ["latin"], variable: '--roboto' });

export const metadata: Metadata = {
  title: "Dashnano",
  description: "Dashnano e o Dashboard e app para gerenciar aplicacoes futuras.",
  creator: "https://github.com/IsaacGSS",
  appleWebApp: true,
  category: 'Dashboard.'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} min-h-screen`}>{children}</body>
    </html>
  );
}
