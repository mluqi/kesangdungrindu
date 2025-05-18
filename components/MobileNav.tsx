"use client";

import { useState, useRef, useEffect } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Photography",
    path: "/photography",
  },
  {
    name: "Videography",
    path: "/videography",
  },
  {
    name: "about",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // State untuk mengontrol popup
  const [activeHash, setActiveHash] = useState(""); // State untuk hash aktif
  const triggerRef = useRef<HTMLButtonElement>(null); // Referensi ke tombol trigger

  useEffect(() => {
    // Update activeHash berdasarkan hash di URL
    const handleHashChange = () => {
      setActiveHash(window.location.hash || "/");
    };

    // Jalankan saat komponen dimount
    handleHashChange();

    // Tambahkan event listener untuk perubahan hash
    window.addEventListener("hashchange", handleHashChange);

    // Cleanup event listener saat komponen di-unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    if (path.startsWith("#")) {
      e.preventDefault(); // Mencegah perilaku default tautan
      const targetElement = document.querySelector(path);
      const navbarHeight = document.getElementById("navbar")?.offsetHeight || 0; // Ambil tinggi navbar
      const additionalOffset = 85; // Tambahkan offset tambahan untuk margin/padding
      if (targetElement) {
        window.scrollTo({
          top:
            targetElement.getBoundingClientRect().top +
            window.scrollY -
            navbarHeight -
            additionalOffset,
          behavior: "smooth",
        });
      }
    } else if (path === "/") {
      // Jika sudah di halaman utama, cegah navigasi default dan scroll ke atas
      if (pathname === "/") {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    }
    setIsOpen(false); // Tutup popup setelah klik
  };

  return (
    <>
      {/* Trigger untuk membuka popup */}
      <button
        ref={triggerRef}
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-center items-center"
      >
        <CiMenuBurger className="text-[32px] text-accent" />
      </button>

      {/* Popup */}
      {isOpen && (
        <div
          className="absolute bg-white shadow-lg rounded-lg top-10 p-4 z-50 pr-16 border-b-2 border-accent"
          style={{
            top: (triggerRef.current?.getBoundingClientRect().bottom || 0) + 30, // Posisi di bawah tombol trigger
            left: Math.min(
              triggerRef.current?.getBoundingClientRect().left || 0,
              window.innerWidth - 200 // Pastikan popup tidak keluar dari viewport (200px adalah lebar popup)
            ),
          }}
        >
          {/* Navigation Links */}
          <div className="flex flex-col space-y-4">
            {links.map((link, index) => (
              <a
                href={link.path}
                key={index}
                onClick={(e) => handleScroll(e, link.path)} // Tambahkan handler scroll
                className="text-gray-800 border-b-2 border-white/20 capitalize text-lg hover:text-accent transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;
