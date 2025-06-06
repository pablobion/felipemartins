import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Felipe Martins | Psicólogo Clínico em Florianópolis",
  description: "Atendimento psicológico em Florianópolis com Felipe Martins. Psicólogo Clínico CRP-12-28726. Agende sua consulta e comece sua jornada de autoconhecimento.",
  keywords: "psicólogo, psicologia, terapia, Florianópolis, saúde mental, atendimento psicológico, Felipe Martins",
  authors: [{ name: "Felipe Martins" }],
  creator: "Felipe Martins",
  publisher: "Felipe Martins",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Felipe Martins | Psicólogo Clínico em Florianópolis",
    description: "Atendimento psicológico em Florianópolis. Psicólogo Clínico CRP-12-28726",
    url: "https://felipemartins.com.br",
    siteName: "Felipe Martins Psicologia",
    locale: "pt-BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Felipe Martins | Psicólogo Clínico",
    description: "Atendimento psicológico em Florianópolis. CRP-12-28726",
    creator: "@felipemartins",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-[var(--navy-900)]`}>
        <Header />
        <div className="pt-16">
          {children}
        </div>
        <WhatsAppButton />
      </body>
    </html>
  );
}
