"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Navbar from "./Navbar";

const Hero = () => {
  const [count, setCount] = useState(0);
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    if (count < 100) {
      const interval = setInterval(() => {
        setCount((prev) => Math.min(prev + 1, 100));
      }, 20);

      return () => clearInterval(interval);
    }
  }, [count]);


  useEffect(() => {
    if (count === 100 && animationDone) {
      document.body.style.overflow = "auto";
    }
  }, [count, animationDone]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setAnimationDone(true);
      }
    });

    tl.fromTo('#hero-wrapper', {
      opacity: 0,
      translateY: "20%"
    }, {
      opacity: 1,
      translateY: 0,
      ease: "power3.inOut",
      duration: 1
    });

    tl.to('#hero-wrapper', {
      delay: 1.5,
      scale: 1,
      borderRadius: "0px",
      ease: "power3.inOut"
    });

    tl.to('#hero-counter', {
      delay: -0.6,
      opacity: 0,
      ease: "power3.inOut",
      duration: 0.5
    });

    tl.to('.bg-video', {
      opacity: 0.7,
      delay: -0.3
    });

    tl.to('#navbar', {
      opacity: 1
    });

  }, []);

  return (
    <section id="hero" className="w-full h-screen max-sm:h-dvh flex justify-center items-center">
      <div id="hero-wrapper" className="relative w-full h-full scale-75 bg-gray-600 rounded-3xl overflow-hidden">
        <Navbar />

         <video
          className="bg-video2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 w-[70%] max-sm:w-full h-auto"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        >
          <source src="/Logo_hero.webm" type="video/webm" />
        </video>

        <video
          className="bg-video absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 object-cover w-full h-full"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        >
          <source src="/BG_hero.webm" type="video/webm" />
        </video>

        <div>

        </div>

        <div id="hero-counter" className="absolute flex right-0 bottom-0 text-white text-7xl font-light px-10 py-8">
          {count}%
        </div>
      </div>
    </section>
  );
};

export default Hero;