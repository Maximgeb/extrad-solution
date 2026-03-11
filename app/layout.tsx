import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Providers from "./providers";

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
  title: "Extrad Solution — Coordination Logistique & Relocation Internationale",
  description:
    "Service premium de coordination logistique et relocation internationale, 100% légal. Spécialistes depuis Dubaï & les Émirats. Accompagnement sur mesure, confidentialité assurée.",
  keywords:
    "relocation internationale, mobilité internationale, coordination logistique, Dubaï, Émirats, Extrad Solution",
  openGraph: {
    title: "Extrad Solution — Relocation Internationale",
    description:
      "Service premium de coordination logistique et relocation internationale depuis Dubaï et dans le monde entier.",
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
        <Providers>{children}</Providers>

        {/* Google Ads — base tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18002543850"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18002543850');
          `}
        </Script>

        {/* Google Ads — conversion tracking (phone call) */}
        <Script id="gtag-conversion" strategy="afterInteractive">
          {`
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                'send_to': 'AW-18002543850/jraGCMmo44YcEOqJpIhD',
                'value': 1.0,
                'currency': 'USD',
                'event_callback': callback
              });
              return false;
            }
          `}
        </Script>
      </body>
    </html>
  );
}
