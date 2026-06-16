'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Compass, ShieldAlert, Award, Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const VALUES = [
  {
    title: 'Kejujuran (Gi)',
    desc: 'Menjunjung tinggi kebenaran dan kejujuran dalam setiap tindakan, perkataan, dan keputusan, baik di dalam maupun di luar dojo.',
    icon: Compass,
    color: 'text-kki-red bg-kki-red/10',
  },
  {
    title: 'Rasa Hormat (Rei)',
    desc: 'Menghormati guru, sesama karateka, lawan bertanding, serta masyarakat dengan sikap rendah hati dan etika yang mulia.',
    icon: Heart,
    color: 'text-kki-black bg-kki-black/10',
  },
  {
    title: 'Keberanian (Yu)',
    desc: 'Memiliki keberanian mental dan fisik untuk menghadapi rintangan, membela kebenaran, serta mengatasi rasa takut diri sendiri.',
    icon: ShieldAlert,
    color: 'text-kki-gold bg-kki-gold/10',
  },
  {
    title: 'Kontrol Diri (Jisei)',
    desc: 'Mampu menahan emosi dan nafsu, menggunakan kekuatan bela diri hanya untuk pertahanan diri dan perlindungan sesama.',
    icon: Award,
    color: 'text-emerald-600 bg-emerald-50',
  },
  {
    title: 'Ketekunan (Shin)',
    desc: 'Semangat pantang menyerah dalam berlatih, mengasah teknik secara konsisten untuk mencapai kesempurnaan karakter.',
    icon: Star,
    color: 'text-blue-600 bg-blue-50',
  },
];

export default function Philosophy() {
  useEffect(() => {
    // Animasi judul Filosofi saat scroll
    gsap.fromTo(
      '.philo-header',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.philo-section',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Animasi kartu filosofi berurutan (stagger) saat scroll
    gsap.fromTo(
      '.value-card',
      { opacity: 0, y: 40, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.values-grid',
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Animasi tombol link sejarah selengkapnya saat scroll
    gsap.fromTo(
      '.philo-more',
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.philo-more',
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <section id="filosofi" className="philo-section py-24 bg-white relative overflow-hidden">
      {/* Background visual sakura watermark tipis */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 opacity-[0.02] pointer-events-none">
        <Image
          src="/logo-kki.svg"
          alt="Watermark Sakura"
          fill
          className="object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="philo-header opacity-0 text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-extrabold text-kki-red tracking-widest uppercase mb-3">
            FILOSOFI KUSHIN RYU
          </h2>
          <p className="text-3xl sm:text-4xl font-black text-kki-black tracking-tight mb-6">
            "Hati yang Damai, Jiwa yang Kosong"
          </p>
          <div className="h-1.5 w-24 bg-kki-red mx-auto mb-8 rounded-full" />
          <p className="text-neutral-600 font-medium leading-relaxed">
            Kushin Ryu M Karate-Do menekankan keselarasan antara pikiran yang tenang bagaikan air dan pertahanan yang kokoh bagaikan gunung. Lambang Kelopak Bunga Sakura melambangkan lima prinsip hidup karateka untuk meraih keluhuran budi pekerti.
          </p>
        </div>

        {/* 5 Nilai Utama Grid */}
        <div className="values-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {VALUES.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="value-card opacity-0 border border-neutral-100 hover:border-kki-red/30 bg-neutral-50/50 hover:bg-white transition-all duration-300 hover:shadow-xl hover:shadow-kki-red/5 hover:-translate-y-2 group rounded-2xl flex flex-col justify-between"
              >
                <CardContent className="p-6 flex flex-col items-center text-center">
                  {/* Icon Container */}
                  <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-kki-black mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-neutral-500 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Link Ke Halaman About */}
        <div className="philo-more opacity-0 text-center mt-14 flex justify-center">
          <Link
            href="/about"
            className="group/btn inline-flex items-center gap-2 px-6 py-3 border border-neutral-200 hover:border-kki-red/30 hover:bg-neutral-50 rounded-full text-xs font-bold text-neutral-600 hover:text-kki-red transition-all duration-300 shadow-xs cursor-pointer"
          >
            <span>Pelajari Sejarah Kushin Ryu Selengkapnya</span>
            <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
