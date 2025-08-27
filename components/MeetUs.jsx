"use client"; 

import { gsap } from "gsap";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

import { socialLinks } from "@/constants";

const MeetUs = () => {
  const logoRef = useRef(null);

  useEffect(() => {
    gsap.to(logoRef.current, {
      y: -20, 
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
  }, []);

  return (
    <div className="flex justify-center items-center w-full h-full">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-80"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      >
        <source src="/BG_hero.webm" type="video/webm" />
      </video>

      <section className="relative z-10 justify-center items-center w-full h-full paddingX max-[1100px]:py-20">
        <div className="flex flex-row max-[1100px]:flex-col w-full h-full items-center justify-between max-[1100px]:justify-center max-[1100px]:gap-20">

          {/* Imagen con animación */}
          <div className="flex flex-col justify-center items-center gap-4">
            <Image
              ref={logoRef}
              src="/logo3D.png"
              alt="logo INOBA"
              width={444}
              height={477}
              className="object-contain w-100 max-[1100px]:w-60 h-auto"
            />
          </div>

          <div className="flex flex-col justify-start items-center">
            <ul className="flex flex-col max-[1100px]:flex-row gap-3">
              {socialLinks.map((link, i) => (
                <li key={i} className="cursor-pointer">
                  <Link
                    href={link.href}
                    target="_blank"
                    className="flex flex-row-reverse gap-3 items-center group"
                  >
                    <div className="bg-white rounded-full p-2">
                      <Image
                        src={link.icon}
                        alt={link.name}
                        width={30}
                        height={30}
                        className="object-contain w-10"
                      />
                    </div>
                    <div
                      className="bg-white px-8 py-2 rounded-2xl font-comfortaa
                        opacity-0 translate-x-2 transition-all duration-300
                        group-hover:opacity-100 group-hover:translate-x-0
                        max-[1100px]:hidden"
                    >
                      {link.name}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MeetUs