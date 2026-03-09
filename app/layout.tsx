import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Extrad Solution — Relocation Internationale Discrète & Sécurisée",
  description:
    "Service de relocation internationale d'urgence, 100% légal et consenti. Spécialistes Dubaï & Émirats. Discrétion absolue, accompagnement sur mesure.",
  keywords:
    "relocation internationale, évacuation Dubai, départ discret, mobilité internationale urgente, Extrad Solution",
  openGraph: {
    title: "Extrad Solution — Relocation Internationale Discrète",
    description:
      "Service premium de relocation internationale depuis Dubaï et dans le monde entier.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-black text-offwhite font-inter antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
