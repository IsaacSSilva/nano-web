import type { Metadata } from "next";
import { Inter, Roboto_Flex } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "nano X",
  description: "Nano X e o blog de projetos.",
  creator: "https://github.com/IsaacGSS",
  category: 'rede social',
  icons: '/favicon.ico',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} min-h-screen max-w-full bg-zinc-950`}>{children}</body>
    </html>
  );
}
