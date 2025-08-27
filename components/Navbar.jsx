"use client";

import gsap from "gsap";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { ArrowUpRightIcon, Bars3BottomRightIcon } from '@heroicons/react/24/solid';
import { SplitText } from "gsap/SplitText";

import { navLinks, navLinksSections, socialLinks } from "@/constants";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

gsap.registerPlugin(SplitText);

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const linksRef = useRef([]);
  const container = useRef();
  const tl = useRef();

  const handleOpenNav = () => {
    setOpenNav(!openNav)
  };

  useEffect(() => {
    gsap.set(".navLinks_mobile", {
      translateY: 50,
      opacity: 0,
      clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
    });

    tl.current = gsap.timeline({ paused: true })
      .to("#mobile-nav", {
        duration: .5,
        translateY: 0,
        ease: "power4.inOut"
      })
    // .to(".navLinks_mobile", {
    //   duration: .5,
    //   stagger: 0.1,
    //   opacity: 1,
    //   ease: "power4.inOut",
    //   translateY: 0,
    //   clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    //   delay: -0.50,
    // })
    // .to(".navLinks_mobile-btn", {
    //   duration: .5,
    //   stagger: 0.1,
    //   opacity: 1,
    //   ease: "power4.inOut",
    // })
  }, []);

  useEffect(() => {
    if (openNav) {
      tl.current.play();
      document.body.style.overflow = 'hidden';
    } else {
      tl.current.reverse();
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [openNav]);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to('.navLinks', {
      opacity: 1,
      delay: 2.3,
      stagger: {
        each: 0.2,
        from: "end"
      },
    });
  }, []);

  useEffect(() => {
    linksRef.current.forEach((linkEl) => {
      const split = new SplitText(linkEl, { type: "chars" });

      linkEl.addEventListener("mouseenter", () => {
        gsap.fromTo(split.chars, {
          y: 0,
        }, {
          y: -10,
          opacity: 0,
          duration: 0.3,
          stagger: 0.02,
          ease: "back.in",
          onComplete: () => {
            gsap.set(split.chars, { y: 10, opacity: 0 });
            gsap.to(split.chars, {
              y: 0,
              opacity: 1,
              duration: 0.3,
              stagger: 0.02,
              ease: "back.out"
            });
          }
        });
      });
    });
  }, []);

  return (
    <header ref={container} className="w-full">
      <nav className="flex flex-row justify-center items-center w-full">
        <div className={`flex flex-row justify-between items-center w-full px-10 py-8 transition-all duration-500 z-50 ${openNav ? 'max-sm:bg-white max-sm:shadow-xs' : 'bg-transparent'}`}>
          <Link href="/" className={`flex flex-col justify-start font-comfortaa ${openNav ? 'text-gray-600' : 'text-white'} transition-all duration-500 z-50`}>
            <span className="font-bold text-2xl">INOBA</span>
            <span className="font-light text-[9px] leading-0">Soluciones</span>
          </Link>

          <div className="flex">
            <Image
              src="/logo.svg"
              alt="logo INOBA"
              width={50}
              height={50}
              className="w-12 h-12 bg-white ring-1 hover:shadow-sm shadow-white/30 ring-black/5 rounded-full p-2 navLinks opacity-0 cursor-pointer z-50"
              onClick={handleOpenNav}
            />
          </div>
        </div>
      </nav>

      <div id="mobile-nav" className="fixed top-0 left-0 w-full h-screen max-sm:h-dvh bg-white translate-y-[-150%] z-40 max-sm:overflow-y-auto max-sm:overflow-x-hidden">
        <div className="relative w-full h-full flex flex-col justify-between px-10 pt-36 pb-8 gap-20">
          <div className="flex flex-row max-sm:flex-col w-full justify-between items-start gap-20">
            <div className="flex flex-col gap-5">
              {navLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="font-comfortaa text-gray-600 text-5xl max-md:text-4xl max-sm:text-3xl uppercase font-light text-nowrap"
                  ref={(el) => (linksRef.current[i] = el)}
                  onClick={handleOpenNav}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col w-full">
            <div className="flex flex-row max-sm:flex-col w-full justify-between items-center gap-10">
              {navLinksSections.map((link, i) => (
                <Link key={i} href={link.href} className="relative shadow-xs hover:shadow-md w-full h-full px-10 py-10 rounded-xl transition-all duration-500 flex flex-col font-comfortaa overflow-hidden group">
                  <Image src={link.image} alt={link.principalName + link.secondName} width={1920} height={1080} className="absolute top-0 left-0 rounded-xl object-cover w-full h-full -z-10 opacity-0 group-hover:opacity-75 max-sm:opacity-75 transition-all duration-500" />

                  <span className="font-extrabold text-2xl group-hover:text-white max-sm:text-white">{link.principalName}</span>
                  <span className="font-extralight text-sm group-hover:text-white max-sm:text-white">{link.secondName}</span>
                </Link>
              ))}
            </div>

            <div className="flex flex-row max-sm:flex-col max-sm:gap-2 w-full justify-start items-center max-sm:items-start gap-10 py-10">
              {socialLinks.map((link, i) => (
                <Link key={i} href={link.href} className="flex flex-row items-center justify-center gap-1 text-sm text-gray-600">
                  {link.name}
                  <ArrowUpRightIcon className="w-4 h-4 fill-gray-600" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;  