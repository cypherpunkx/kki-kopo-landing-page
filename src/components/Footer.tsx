'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Phone, MapPin, Award } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-kki-black text-neutral-400 py-16 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* Kolom Kiri: Logo & Slogan */}
        <div className="md:col-span-5 flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 bg-white rounded-full p-0.5">
              <Image
                src="/logo-kki.svg"
                alt="Logo KKI Kushin Ryu"
                fill
                className="object-contain p-1"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base tracking-widest text-white leading-none">
                KKI BANDUNG
              </span>
              <span className="text-[9px] text-kki-red font-bold tracking-wider mt-0.5">
                KUSHIN RYU KARATE-DO
              </span>
            </div>
          </div>
          <p className="text-sm font-medium leading-relaxed max-w-sm text-neutral-500">
            Dojo resmi Kushin Ryu M Karate-Do Indonesia (KKI) di Kota Bandung, Situsaeur. Membina mental disiplin, ketangkasan bela diri fisik, serta melahirkan atlet-atlet karate berprestasi nasional.
          </p>
        </div>

        {/* Kolom Tengah: Tautan Cepat */}
        <div className="md:col-span-3 flex flex-col gap-6">
          <h4 className="text-sm font-extrabold text-white tracking-widest uppercase">
            Navigasi Dojo
          </h4>
          <ul className="space-y-3 flex flex-col text-sm font-medium">
            <li>
              <Link href="#filosofi" className="hover:text-kki-red transition-colors">
                Filosofi Aliran
              </Link>
            </li>
            <li>
              <Link href="#program" className="hover:text-kki-red transition-colors">
                Program Latihan
              </Link>
            </li>
            <li>
              <Link href="#jadwal" className="hover:text-kki-red transition-colors">
                Jadwal Latihan
              </Link>
            </li>
            <li>
              <Link href="#lokasi" className="hover:text-kki-red transition-colors">
                Hubungi Kami
              </Link>
            </li>
          </ul>
        </div>

        {/* Kolom Kanan: Detail Kontak */}
        <div className="md:col-span-4 flex flex-col gap-6">
          <h4 className="text-sm font-extrabold text-white tracking-widest uppercase">
            Hubungi Dojo
          </h4>
          <ul className="space-y-4 text-sm font-medium">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-kki-red shrink-0 mt-0.5" />
              <span className="text-neutral-500 leading-relaxed">
                Gg. Cetarip Timur II No.4, Situsaeur, Kec. Bojongloa Kidul, Kota Bandung, Jawa Barat 40234
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-kki-red shrink-0" />
              <a
                href="https://wa.me/6289676682030"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-kki-red transition-colors"
              >
                0896-7668-2030 (WhatsApp)
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Baris Bawah: Hak Cipta */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-neutral-600">
        <span>
          © {new Date().getFullYear()} KKI Dojo Situsaeur Bandung. All Rights Reserved.
        </span>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-kki-red" />
            FORKI Afilated
          </span>
          <span>|</span>
          <span className="flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-kki-red" />
            KKI Indonesia
          </span>
        </div>
      </div>
    </footer>
  );
}
