import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import { LanguageProvider } from "@/lib/context/LanguageContext";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400"],
});

export const metadata: Metadata = {
  title: "Espiral da Mudança",
  description: "Consultoria moderna de gestão de mudanças orientada por dados, pessoas e propósito.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${plusJakarta.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
          <LanguageProvider>{children}</LanguageProvider>
        </body>
    </html>
  );
}
