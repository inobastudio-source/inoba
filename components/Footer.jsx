import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full h-screen max-sm:h-dvh">
      <div className="relative paddingX pt-20 w-full h-full flex flex-col justify-end items-end gap-4">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image src="/logo3D.png" alt="Logo" width={444} height={477} className="object-contain w-80" />
        </div>

        <div className="flex flex-row py-6 justify-between items-center w-full h-auto text-xs text-gray-300">
          <p>&copy; 2025 INOBA Soluciones y Publicidad</p>
          <p>Diseñado por <Link href="/" className="hover:underline"> INOBA Studio </Link> & Desarrollado por <Link href="/" className="hover:underline"> SGuzmanR</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;