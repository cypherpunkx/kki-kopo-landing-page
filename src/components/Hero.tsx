'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Shield, ArrowRight, Award } from 'lucide-react';
import dynamic from 'next/dynamic';

const ThreeCanvas = dynamic(() => import('./ThreeCanvas'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-radial from-white via-neutral-50 to-neutral-100/50 -z-10" />
});

import gsap from 'gsap';

export default function Hero() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animasi GSAP untuk elemen teks Hero
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.fromTo(
        '.hero-tag',
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, delay: 0.5 }
      )
        .fromTo(
          '.hero-title',
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.15 },
          '-=0.5'
        )
        .fromTo(
          '.hero-desc',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          '.hero-cta',
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.6, stagger: 0.1 },
          '-=0.4'
        )
        .fromTo(
          '.hero-image-container',
          { opacity: 0, x: 50 },
          { opacity: 1, x: 0, duration: 1.2 },
          '-=0.8'
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Latar Belakang 3D Three.js */}
      <ThreeCanvas />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Konten Kiri (Teks & CTA) */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          {/* Badge Tagline */}
          <div className="hero-tag opacity-0 inline-flex items-center gap-2 bg-kki-red/10 border border-kki-red/20 px-4 py-1.5 rounded-full w-fit mb-6">
            <Shield className="w-4 h-4 text-kki-red" />
            <span className="text-xs font-extrabold text-kki-red tracking-widest uppercase">
              Dojo Situsaeur - Bandung
            </span>
          </div>

          {/* Judul Utama */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-kki-black leading-tight tracking-tight mb-6">
            <span className="hero-title opacity-0 block">BENTUK</span>
            <span className="hero-title opacity-0 block text-kki-red font-extrabold">
              KARAKTER & DISIPLIN
            </span>
            <span className="hero-title opacity-0 block">BERSAMA KKI</span>
          </h1>

          {/* Deskripsi */}
          <p className="hero-desc opacity-0 text-base sm:text-lg text-neutral-600 font-medium leading-relaxed max-w-xl mb-10">
            Bergabunglah dengan Kushin Ryu M Karate-Do Indonesia (KKI) Bandung. Kami melatih teknik bela diri legendaris Jepang, ketahanan fisik maksimal, serta kedisiplinan mental untuk segala usia dari tingkat pemula hingga atlet berprestasi.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="https://wa.me/6289676682030"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta opacity-0 bg-kki-red hover:bg-kki-black text-white font-extrabold px-8 py-4 rounded-full text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-kki-red/20 transform hover:-translate-y-1 flex items-center justify-center gap-2 cursor-pointer"
            >
              Gabung Sekarang
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#program"
              className="hero-cta opacity-0 border-2 border-neutral-200 hover:border-kki-black bg-white/50 backdrop-blur-sm text-kki-black font-extrabold px-8 py-4 rounded-full text-base transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 cursor-pointer"
            >
              Pelajari Program Latihan
            </a>
          </div>

          {/* Social Proof / Stats */}
          <div className="hero-cta opacity-0 grid grid-cols-3 gap-6 pt-8 border-t border-neutral-100 max-w-lg">
            <div className="flex flex-col">
              <span className="text-3xl font-black text-kki-black">20+</span>
              <span className="text-xs text-neutral-500 font-bold tracking-wide mt-1">
                Tahun Pengalaman
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-black text-kki-red">300+</span>
              <span className="text-xs text-neutral-500 font-bold tracking-wide mt-1">
                Sabuk Hitam Lahir
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-black text-kki-black">50+</span>
              <span className="text-xs text-neutral-500 font-bold tracking-wide mt-1">
                Medali Emas Juara
              </span>
            </div>
          </div>
        </div>

        {/* Konten Kanan (Gambar Hero Karate Action) */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          <div className="hero-image-container opacity-0 relative w-full aspect-[4/5] max-w-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
            <Image
              src="/images/hero.png"
              alt="Karate Action Master Kick"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-w-720px) 100vw, 500px"
              priority
            />
            {/* Overlay Gradient Aksen */}
            <div className="absolute inset-0 bg-gradient-to-t from-kki-black/40 via-transparent to-transparent pointer-events-none" />
            
            {/* Floater Medali di Gambar */}
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-neutral-100">
              <div className="w-10 h-10 rounded-full bg-kki-gold/15 flex items-center justify-center text-kki-gold">
                <Award className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-black text-kki-black leading-none">
                  DOJO TERBAIK 2026
                </span>
                <span className="text-[10px] text-neutral-500 font-bold mt-1">
                  Pengcab KKI Bandung
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
