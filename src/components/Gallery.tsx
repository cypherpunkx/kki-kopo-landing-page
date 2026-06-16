'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog';
import { ZoomIn, Eye } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const IMAGES = [
  {
    src: '/images/gallery-kata.png',
    alt: 'Latihan Kata Karate Tradisional',
    title: 'Pelatihan Seni Kata (Jurus)',
    desc: 'Penguasaan teknik jurus tradisional Kushin Ryu dengan ketepatan dan fokus gerakan tinggi.',
  },
  {
    src: '/images/gallery-exam.png',
    alt: 'Upacara Kenaikan Sabuk Dojo KKI',
    title: 'Ujian Kenaikan Sabuk',
    desc: 'Momen penganugerahan sabuk baru sebagai bukti ketekunan dan perkembangan karakter siswa.',
  },
  {
    src: '/images/gallery-medal.png',
    alt: 'Prestasi Juara Medali Emas Karate FORKI',
    title: 'Prestasi Kejuaraan Resmi',
    desc: 'Membina atlet bermental juara untuk meraih medali emas di ajang kejuaraan resmi FORKI.',
  },
  {
    src: '/images/gallery-training.png',
    alt: 'Latihan Fisik Kecepatan Kicking Pad',
    title: 'Latihan Fisik & Kecepatan',
    desc: 'Latihan kardio dan reaksi menggunakan pad sasaran tendangan untuk melatih ketangkasan.',
  },
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<typeof IMAGES[0] | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animasi masuk instan saat halaman dimuat (tanpa ScrollTrigger agar selalu tampil di mobile/desktop)
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.gallery-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.1,
        }
      ).fromTo(
        '.gallery-item',
        { opacity: 0, scale: 0.95, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
        },
        '-=0.4'
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="galeri" className="gallery-section py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="gallery-header text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-extrabold text-kki-red tracking-widest uppercase mb-3">
            GALERI AKTIVITAS DOJO
          </h2>
          <p className="text-3xl sm:text-4xl font-black text-kki-black tracking-tight mb-6">
            Momen & Kegiatan Latihan KKI
          </p>
          <div className="h-1.5 w-24 bg-kki-red mx-auto mb-8 rounded-full" />
          <p className="text-neutral-600 font-medium leading-relaxed">
            Intip keseruan latihan di dojo kami, mulai dari upacara adat kenaikan sabuk, latihan penguasaan teknik dasar, sparring kompetitif, hingga selebrasi prestasi kejuaraan.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {IMAGES.map((img, index) => (
            <Dialog key={index}>
              <DialogTrigger
                nativeButton={false}
                render={
                  <div
                    className="gallery-item group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-neutral-100 cursor-pointer bg-neutral-100"
                    onClick={() => setSelectedImg(img)}
                  >
                  {/* Foto Galeri */}
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 25vw"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-kki-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform duration-300">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-extrabold text-kki-red tracking-widest uppercase mb-1">
                      KKI BANDUNG
                    </span>
                    <h3 className="text-base font-extrabold leading-tight mb-1">
                      {img.title}
                    </h3>
                    <p className="text-[11px] text-neutral-300 font-medium leading-relaxed line-clamp-2">
                      {img.desc}
                    </p>
                  </div>
                </div>
              } />

              {/* Lightbox Dialog Popup */}
              <DialogContent className="max-w-3xl w-[90vw] p-0 overflow-hidden bg-white border border-neutral-100 rounded-3xl shadow-2xl">
                {selectedImg && (
                  <div className="flex flex-col md:flex-row items-stretch">
                    {/* Sisi Gambar */}
                    <div className="relative w-full md:w-3/5 aspect-[4/3] bg-neutral-900 shrink-0">
                      <Image
                        src={selectedImg.src}
                        alt={selectedImg.alt}
                        fill
                        className="object-contain"
                        sizes="(max-w-768px) 100vw, 600px"
                      />
                    </div>

                    {/* Sisi Keterangan */}
                    <div className="p-8 flex flex-col justify-center bg-white">
                      <DialogTitle className="text-xs font-extrabold text-kki-red tracking-widest uppercase mb-2">
                        GALERI DOKUMENTASI
                      </DialogTitle>
                      <h4 className="text-xl font-black text-kki-black mb-3">
                        {selectedImg.title}
                      </h4>
                      <p className="text-sm text-neutral-500 font-medium leading-relaxed">
                        {selectedImg.desc}
                      </p>
                      <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-3">
                        <div className="relative w-8 h-8 rounded-full overflow-hidden bg-neutral-100 border">
                          <Image
                            src="/logo-kki.svg"
                            alt="Logo KKI"
                            fill
                            className="object-contain p-0.5"
                          />
                        </div>
                        <span className="text-xs font-bold text-neutral-400">
                          Pengcab KKI Bandung - Dojo Situsaeur
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </DialogContent>
            </Dialog>
          ))}
        </div>

      </div>
    </section>
  );
}
