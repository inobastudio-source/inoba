"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

import { brandsTrust } from "@/constants";

const Brands = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const marquee = marqueeRef.current;
      if (!marquee) return;

      const totalWidth = marquee.scrollWidth / 2;

      gsap.fromTo(
        marquee,
        { x: 0 },
        {
          x: -totalWidth,
          duration: 30,
          ease: "linear",
          repeat: -1,
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full h-[30vh] bg-gray-600 text-white overflow-hidden">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="flex flex-col justify-center items-center">
          <span className="font-comfortaa text-xs font-extralight">
            Algunas de las marcas
          </span>
          <h2 className="font-comfortaa font-extrabold">
            que confiaron en nosotros
          </h2>
        </div>

        <div className="py-7 w-full overflow-hidden">
          <div ref={marqueeRef} className="flex gap-20 w-fit">
            {[...brandsTrust, ...brandsTrust].map((brand, i) => (
              <div key={i} className="flex-shrink-0">
                <Image
                  src={brand.image}
                  width={100}
                  height={100}
                  alt={brand.name}
                  className="object-contain w-[80px] sm:w-[100px] h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;