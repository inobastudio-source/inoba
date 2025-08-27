import { Comfortaa } from "next/font/google";

import "../globals.css";
import Footer from "@/components/Footer";

const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
});

export const metadata = {
  title: "INOBA | Innovación y publicidad de alto impacto",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${comfortaa.variable} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
};