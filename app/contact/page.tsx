"use client"; // Diperlukan jika ada interaksi atau hook di masa depan, aman untuk ditambahkan

import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="py-12 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-accent mb-4">
            Hubungi Kami
          </h1>
          <p className="text-lg text-accent/80 leading-relaxed">
            Kami senang mendengar dari Anda! Baik itu pertanyaan, masukan, atau sekadar ingin menyapa, jangan ragu untuk menghubungi kami.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Kolom Informasi Kontak */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-accent mb-6">Detail Kontak</h2>
              <div className="flex items-start space-x-4 mb-5">
                <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-accent/90 text-lg">Alamat</h3>
                  <p className="text-gray-400">Jl. Rindu Selalu No. 123, Kota Kenangan, Nusantara</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 mb-5">
                <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-accent/90 text-lg">Email</h3>
                  <a href="mailto:info@kesandungrindu.com" className="text-gray-400 hover:text-accent transition-colors">
                    info@kesandungrindu.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-accent/90 text-lg">Telepon</h3>
                  <a href="tel:+621234567890" className="text-gray-400 hover:text-accent transition-colors">
                    +62 123 4567 890
                  </a>
                </div>
              </div>
            </div>
            {/* Placeholder untuk Peta Google Maps jika diperlukan */}
            {/*
            <div>
              <h2 className="text-2xl font-semibold text-accent mb-4">Lokasi Kami</h2>
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d..."
                  width="100%"
                  height="100%"
                  style={{ border:0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>
            */}
          </div>

          {/* Kolom Formulir Kontak */}
          <div className="bg-card p-6 md:p-8 rounded-lg shadow-lg border border-border">
            <h2 className="text-2xl font-semibold text-accent mb-6">Kirim Pesan</h2>
            {/* Ganti action dengan endpoint Anda atau gunakan library form handling */}
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-accent/80 mb-1.5">Nama Lengkap</label>
                <Input type="text" name="name" id="name" required placeholder="Nama Anda" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-accent/80 mb-1.5">Alamat Email</label>
                <Input type="email" name="email" id="email" required placeholder="email@anda.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-accent/80 mb-1.5">Pesan Anda</label>
                <Textarea name="message" id="message" rows={5} required placeholder="Tulis pesan Anda di sini..." />
              </div>
              <div>
                <Button type="submit" className="w-full bg-accent" variant="default" size="lg">
                  Kirim Pesan
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;