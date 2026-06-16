'use client';

import React, { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Calendar, Clock, MapPin, CheckCircle, ShieldAlert } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SCHEDULES = [
  {
    day: 'Selasa',
    time: '16.00 - 18.00 WIB',
    class: 'Kelas Anak & Kelas Reguler',
    focus: 'Kihon (Teknik Dasar), Penguatan Fisik, Kata Tingkat Awal',
  },
  {
    day: 'Kamis',
    time: '16.00 - 18.00 WIB',
    class: 'Kelas Anak & Kelas Reguler',
    focus: 'Kumite Dasar (Aplikasi Pertahanan), Penguasaan Kata, Kebugaran',
  },
  {
    day: 'Sabtu',
    time: '09.00 - 11.30 WIB',
    class: 'Kelas Reguler & Kelas Prestasi',
    focus: 'Sparring Intensif (Kumite), Taktik Tanding, Pemantapan Sabuk Tinggi',
  },
];

const FAQS = [
  {
    q: 'Apakah pemula yang tidak punya dasar bela diri bisa bergabung?',
    a: 'Sangat bisa! Sebagian besar siswa baru kami memulainya benar-benar dari nol. Kurikulum kami dirancang ramah untuk pemula dari segala usia, dengan bimbingan personal dari pelatih bersertifikat.',
  },
  {
    q: 'Berapa usia minimal untuk mendaftar kelas karate?',
    a: 'Usia minimal untuk bergabung adalah 6 tahun (Kelas Anak). Pada usia ini anak sudah memiliki fokus yang cukup untuk mengikuti instruksi gerakan dasar dengan baik.',
  },
  {
    q: 'Apakah dojo ini terafiliasi dengan federasi resmi?',
    a: 'Ya, Dojo KKI Situsaeur berada di bawah naungan resmi Kushin Ryu M Karate-Do Indonesia (KKI) yang terafiliasi langsung dengan FORKI (Federasi Olahraga Karate-Do Indonesia). Sertifikasi sabuk kami diakui secara nasional.',
  },
  {
    q: 'Peralatan apa saja yang harus disiapkan saat awal masuk?',
    a: 'Pada awal masuk, Anda hanya perlu mengenakan kaos olahraga yang nyaman. Setelah mendaftar resmi, Anda dapat memesan seragam karate (Karategi) resmi dojo kami.',
  },
];

export default function Schedule() {
  useEffect(() => {
    // Animasi Header
    gsap.fromTo(
      '.schedule-header',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.schedule-section',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Animasi Grid Jadwal
    gsap.fromTo(
      '.schedule-card',
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.schedules-grid',
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Animasi Accordion FAQ
    gsap.fromTo(
      '.faq-container',
      { opacity: 0, x: 30 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.faq-section-trigger',
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <section id="jadwal" className="schedule-section py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="schedule-header opacity-0 text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-extrabold text-kki-red tracking-widest uppercase mb-3">
            WAKTU LATIHAN & FAQ
          </h2>
          <p className="text-3xl sm:text-4xl font-black text-kki-black tracking-tight mb-6">
            Jadwal Latihan & Pertanyaan Umum
          </p>
          <div className="h-1.5 w-24 bg-kki-red mx-auto mb-8 rounded-full" />
        </div>

        {/* Main Grid: Left Schedules, Right FAQ */}
        <div className="faq-section-trigger grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Bagian Kiri: Jadwal Latihan */}
          <div className="lg:col-span-6 flex flex-col gap-6 w-full schedules-grid">
            <h3 className="text-xl font-extrabold text-kki-black mb-2 flex items-center gap-3">
              <Calendar className="w-6 h-6 text-kki-red" />
              Agenda Latihan Mingguan
            </h3>

            {SCHEDULES.map((sch, index) => (
              <Card
                key={index}
                className="schedule-card opacity-0 border border-neutral-100 bg-neutral-50 hover:bg-white transition-all duration-300 hover:shadow-xl hover:shadow-kki-red/5 rounded-2xl overflow-hidden"
              >
                <CardContent className="p-6 flex items-start gap-4">
                  {/* Hari Container */}
                  <div className="w-16 h-16 rounded-xl bg-kki-black flex flex-col items-center justify-center text-white shrink-0 shadow-md">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-kki-red">HARI</span>
                    <span className="text-base font-extrabold leading-none mt-1">{sch.day}</span>
                  </div>

                  {/* Detail Jadwal */}
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-1">
                      <Clock className="w-4 h-4 text-neutral-400" />
                      <span className="text-sm font-extrabold text-kki-red">
                        {sch.time}
                      </span>
                    </div>
                    <h4 className="text-base font-black text-kki-black mb-1">
                      {sch.class}
                    </h4>
                    <p className="text-xs text-neutral-500 font-medium leading-relaxed">
                      Fokus: {sch.focus}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Catatan Penting */}
            <div className="mt-2 p-4 rounded-2xl bg-kki-red/5 border border-kki-red/10 flex gap-3 items-start">
              <ShieldAlert className="w-5 h-5 text-kki-red shrink-0 mt-0.5" />
              <p className="text-xs text-neutral-600 font-medium leading-relaxed">
                <span className="font-extrabold text-kki-red block mb-1">Catatan Dojo:</span>
                Harap datang 15 menit sebelum latihan dimulai untuk melakukan pemanasan mandiri dan persiapan seragam.
              </p>
            </div>
          </div>

          {/* Bagian Kanan: FAQ */}
          <div className="lg:col-span-6 w-full faq-container opacity-0">
            <h3 className="text-xl font-extrabold text-kki-black mb-6 flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-kki-red" />
              Pertanyaan yang Sering Diajukan
            </h3>

            <Accordion className="w-full space-y-4">
              {FAQS.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-neutral-100 bg-neutral-50/50 rounded-2xl px-6 transition-all duration-300 data-[state=open]:bg-white data-[state=open]:border-kki-red/20 data-[state=open]:shadow-lg data-[state=open]:shadow-kki-red/5"
                >
                  <AccordionTrigger className="text-sm sm:text-base font-bold text-kki-black hover:no-underline py-4 text-left">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-medium pb-4 pt-1">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>

      </div>
    </section>
  );
}
