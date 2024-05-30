import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";

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
      <body className={`${roboto.className} min-h-screen`}>{children}</body>
    </html>
  );
}
