import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-10 xl:py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-12 mb-10 xl:mb-12 items-start">
          {/* Kolom 1: Logo dan Deskripsi Singkat */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="mb-4 inline-block">
              <Image
                src="/assets/logo-2.png" // Pastikan path logo ini benar
                alt="Kesandung Rindu Logo"
                width={500} // Lebar intrinsik gambar
                height={500} // Tinggi intrinsik gambar
                className="w-28 h-auto object-contain" // Ukuran tampilan logo di footer
              />
            </Link>
            <p className="text-sm text-accent/80 leading-relaxed">
              Menemukan kembali kehangatan tradisi dalam setiap sajian. Kesandung Rindu, tempat di mana rasa dan cerita berpadu.
            </p>
          </div>

          {/* Kolom 2: Link Pintas */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-xl font-semibold text-accent mb-5">Tautan Pintas</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-accent/80 hover:text-accent transition-colors duration-300">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-sm text-accent/80 hover:text-accent transition-colors duration-300">
                  Menu Kami
                </Link>
              </li>
              <li>
                <Link href="/tentang-kami" className="text-sm text-accent/80 hover:text-accent transition-colors duration-300">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="text-sm text-accent/80 hover:text-accent transition-colors duration-300">
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Informasi Kontak */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-xl font-semibold text-accent mb-5">Alamat Kami</h3>
            <p className="text-sm text-accent/80 mb-1 leading-relaxed">Jl. Rindu Selalu No. 123</p>
            <p className="text-sm text-accent/80 mb-3 leading-relaxed">Kota Kenangan, Nusantara</p>
            <h3 className="text-xl font-semibold text-accent mb-3 mt-2">Email</h3>
            <Link href="mailto:info@kesandungrindu.com" className="text-sm text-accent/80 hover:text-accent transition-colors duration-300">
              info@kesandungrindu.com
            </Link>
          </div>
        {/* Kolom Media Sosial */}
        <div className=" mb-8 text-center md:text-left">
          <h3 className="text-xl font-semibold text-accent mb-5">Ikuti Kami</h3>
          <div className="flex justify-center md:justify-start space-x-5">
            <Link href="https://facebook.com/kesandungrindu" target="_blank" rel="noopener noreferrer" aria-label="Facebook Kesandung Rindu" className="text-accent/80 hover:text-accent transition-colors duration-300">
              <FaFacebookF size={22} />
            </Link>
            <Link href="https://instagram.com/kesandungrindu" target="_blank" rel="noopener noreferrer" aria-label="Instagram Kesandung Rindu" className="text-accent/80 hover:text-accent transition-colors duration-300">
              <FaInstagram size={22} />
            </Link>
            <Link href="https://x.com/kesandungrindu" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter) Kesandung Rindu" className="text-accent/80 hover:text-accent transition-colors duration-300">
              <FaTwitter size={22} />
            </Link>
            <Link href="https://tiktok.com/@kesandungrindu" target="_blank" rel="noopener noreferrer" aria-label="TikTok Kesandung Rindu" className="text-accent/80 hover:text-accent transition-colors duration-300">
              <FaTiktok size={22} />
            </Link>
          </div>
        </div>
        </div>


        {/* Garis Pemisah dan Hak Cipta */}
        <div className="border-t border-accent/30 pt-8">
          <p className="text-accent text-center text-sm">
            &copy; {currentYear} Kesandung Rindu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer