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
      <div className="w-screen h-screen fixed top-0 left-0 bg-red-500/80 z-50">
        <div className="w-full h-full flex flex-col gap-2 items-center justify-center">
          <h1 className="font-extrabold text-white text-4xl text-center">PÁGINA WEB DESHABILITADA</h1>
          <p className="font-base text-white text-xl text-center">Debido a demoras en pagos, esta pagina web ha sido deshabilitada</p>
        </div>
      </div>

      <body className={`${comfortaa.variable} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
};