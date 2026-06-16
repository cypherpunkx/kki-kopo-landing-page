import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Galeri Foto | KKI Dojo Situsaeur Bandung",
  description: "Lihat galeri dokumentasi foto kegiatan latihan karate Kushin Ryu, upacara ujian kenaikan sabuk, sparring tanding, dan selebrasi prestasi atlet KKI Bandung.",
  keywords: ["galeri karate bandung", "foto latihan karate", "atlet karate kki", "dokumentasi dojo"],
};

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
      {/* Navigasi Utama */}
      <Navbar />

      <main className="flex-grow pt-20">
        {/* Menyematkan Komponen Galeri Utama */}
        <Gallery />

        {/* Call to Action Kembali */}
        <section className="py-12 bg-neutral-50 border-t border-neutral-100 text-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-6">
            <span className="text-sm text-neutral-500 font-semibold">
              Tertarik bergabung dengan keseruan latihan kami?
            </span>
            <div className="flex gap-4">
              <a
                href="https://wa.me/6289676682030?text=Halo%20Admin%20Dojo%20KKI%20Bandung%2C%20saya%20tertarik%20mendaftar%20kelas%20karate%20setelah%20melihat%20galeri."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-kki-red hover:bg-kki-black text-white font-extrabold px-6 py-3 rounded-full text-xs transition-all duration-300 shadow-md cursor-pointer"
              >
                Daftar Kelas Latihan
              </a>
              <Link
                href="/"
                className="border border-neutral-200 hover:border-kki-black text-kki-black font-extrabold px-6 py-3 rounded-full text-xs bg-white transition-all duration-300"
              >
                Kembali ke Beranda
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Navigasi & Hak Cipta */}
      <Footer />
    </div>
  );
}
