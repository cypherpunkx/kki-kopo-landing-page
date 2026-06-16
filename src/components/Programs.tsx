'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, Calendar, Target, Award } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PROGRAMS = [
  {
    title: 'Kelas Anak (Kids/Cadet)',
    age: 'Usia 6 - 12 Tahun',
    desc: 'Melatih kedisiplinan sejak dini, fokus, koordinasi fisik, serta teknik pertahanan diri anti-bullying dengan metode belajar yang menyenangkan dan interaktif.',
    image: '/images/kids.png',
    features: ['Disiplin Dasar & Karakter', 'Peningkatan Motorik', 'Bela Diri Praktis & Percaya Diri'],
    waText: 'Halo Dojo KKI Kopo, saya tertarik untuk mendaftarkan anak saya ke Kelas Anak-Anak.',
  },
  {
    title: 'Kelas Reguler (Remaja & Dewasa)',
    age: 'Usia 13 Tahun ke Atas',
    desc: 'Fokus pada teknik tradisional karate (Kihon, Kata, Kumite), latihan fisik menyeluruh untuk kebugaran, kekuatan, pertahanan diri tingkat lanjut, dan pembentukan karakter.',
    image: '/images/hero.png',
    features: ['Kihon, Kata & Kumite', 'Kekuatan & Kebugaran Fisik', 'Teknik Sabuk Hitam Tradisional'],
    waText: 'Halo Dojo KKI Kopo, saya ingin mendaftar untuk Kelas Reguler Karate.',
  },
  {
    title: 'Kelas Prestasi (Atlet Kompetisi)',
    age: 'Rekomendasi Pelatih / Uji Kelayakan',
    desc: 'Dirancang khusus untuk pembinaan atlet kompetisi. Latihan intensif strategi tanding (Kumite kompetitif), ketahanan kardio, kekuatan eksplosif, dan persiapan kejuaraan FORKI.',
    image: '/images/sparring.png',
    features: ['Taktik & Simulasi Tanding', 'Latihan Fisik Keras Atletis', 'Pendampingan Kejuaraan Resmi'],
    waText: 'Halo Dojo KKI Kopo, saya berminat bergabung ke Kelas Prestasi/Persiapan Kompetisi.',
  },
];

export default function Programs() {
  useEffect(() => {
    // Animasi Header Program
    gsap.fromTo(
      '.program-header',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.program-section',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Animasi Kartu Program
    gsap.fromTo(
      '.program-card',
      { opacity: 0, scale: 0.9, y: 50 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.program-grid',
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <section id="program" className="program-section py-24 bg-neutral-50 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="program-header opacity-0 text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-extrabold text-kki-red tracking-widest uppercase mb-3">
            PROGRAM LATIHAN DOJO
          </h2>
          <p className="text-3xl sm:text-4xl font-black text-kki-black tracking-tight mb-6">
            Pilih Kelas Sesuai Kebutuhan Anda
          </p>
          <div className="h-1.5 w-24 bg-kki-red mx-auto mb-8 rounded-full" />
          <p className="text-neutral-600 font-medium leading-relaxed">
            Kami menyediakan program pelatihan berjenjang yang disesuaikan dengan kelompok umur dan tujuan latihan Anda, baik untuk kesehatan fisik, hobi bela diri, maupun jalur prestasi atlet nasional.
          </p>
        </div>

        {/* Program Cards Grid */}
        <div className="program-grid grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROGRAMS.map((prog, index) => (
            <Card
              key={index}
              className="program-card opacity-0 border border-neutral-100 bg-white shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-3xl overflow-hidden flex flex-col justify-between"
            >
              {/* Gambar Program */}
              <div className="relative w-full aspect-[16/10] overflow-hidden group">
                <Image
                  src={prog.image}
                  alt={prog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 right-4 bg-kki-black/80 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/20">
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">
                    {prog.age}
                  </span>
                </div>
              </div>

              {/* Konten Program */}
              <CardHeader className="pt-6 pb-2 px-6">
                <h3 className="text-xl font-extrabold text-kki-black group-hover:text-kki-red transition-colors">
                  {prog.title}
                </h3>
              </CardHeader>

              <CardContent className="px-6 flex-grow">
                <p className="text-sm text-neutral-500 leading-relaxed mb-6 font-medium">
                  {prog.desc}
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  {prog.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-kki-red/10 flex items-center justify-center text-kki-red shrink-0">
                        <Sparkles className="w-3 h-3" />
                      </div>
                      <span className="text-xs font-bold text-neutral-600">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              {/* Tombol Daftar */}
              <CardFooter className="p-6 pt-0 mt-6">
                <a
                  href={`https://wa.me/6289676682030?text=${encodeURIComponent(prog.waText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-kki-black hover:bg-kki-red text-white font-extrabold w-full py-4 transition-all duration-300 shadow-md hover:shadow-lg gap-2 cursor-pointer text-sm"
                >
                  Daftar Kelas Ini
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
