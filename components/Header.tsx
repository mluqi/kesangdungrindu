"use client"

import Link from "next/link"
import Image from "next/image";
import { useState, useEffect } from "react";

import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`text-accent w-full sticky top-0 z-50 transition-all duration-300 ease-in-out ${
      isScrolled
        ? "bg-white/30 backdrop-blur-md shadow-md border-b border-accent"
        : "py-3 xl:py-4 bg-transparent border-b border-transparent" 
    }`}>
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
        <Image 
            src="/assets/logo-2.png" 
            alt="Logo" 
            width={500} 
            height={500}
            className="w-20 xl:w-36 h-auto object-contain"
            priority
          />
        </Link>

        <div className="hidden xl:flex gap-8">
            <Nav />
        </div>

        <div className="xl:hidden">
            <MobileNav />
        </div>
      </div>
    </header>
  )
}



export default Header
