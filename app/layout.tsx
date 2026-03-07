import type { Metadata } from "next";
import "./globals.css";
import Masthead from "@/components/Masthead";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "David Rodas — Desde el Lago de Atitlán",
  description:
    "Sitio editorial personal de David Rodas. Ventures, escritura y vida desde el Lago de Atitlán, Guatemala.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Courier+Prime:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-paper text-ink">
        <Masthead />
        <main className="bg-paper min-h-screen pt-[105px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
