import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Award, ShieldCheck, Users, Target, Calendar } from 'lucide-react';
import AboutClientAnimations from './AboutClientAnimations';

export const metadata: Metadata = {
  title: "Tentang Kami | KKI Dojo Situsaeur Bandung",
  description: "Pelajari sejarah aliran karate Kushin Ryu, visi misi Dojo KKI Situsaeur Bandung, serta profil pengajar (sensei) berlisensi resmi FORKI kami.",
  keywords: ["sejarah kushin ryu", "karate kki bandung", "sejarah kki", "pelatih karate bandung", "visi misi dojo"],
};

const STATS = [
  { label: 'Tahun Didirikan KKI', value: '1967' },
  { label: 'Dojo Aktif Bandung', value: '10+' },
  { label: 'Instruktur Bersertifikat', value: '4' },
  { label: 'Total Siswa Aktif', value: '80+' },
];

const TEACHERS = [
  {
    name: 'Sensei Dedi S. Mulyana',
    role: 'Pelatih Kepala (Head Instructor)',
    rank: 'Sabuk Hitam Dan IV KKI',
    experience: '25+ Tahun Pengalaman',
    desc: 'Pelatih berlisensi nasional FORKI yang telah mencetak puluhan atlet berprestasi di tingkat daerah dan nasional.',
  },
  {
    name: 'Senpai Rian Hidayat',
    role: 'Asisten Instruktur (Kelas Anak)',
    rank: 'Sabuk Hitam Dan II KKI',
    experience: '8 Tahun Pengalaman',
    desc: 'Spesialis dalam pelatihan dasar anak-anak (Kids/Cadet), melatih motorik kasar dan kedisiplinan dasar dengan metode interaktif.',
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
      {/* Client-side GSAP Animations */}
      <AboutClientAnimations />

      {/* Navigasi Utama */}
      <Navbar />

      <main className="flex-grow pt-24">
        {/* About Hero Section */}
        <section className="relative py-20 bg-neutral-50 overflow-hidden">
          <div className="absolute inset-0 bg-radial from-white via-neutral-50 to-neutral-100/30 -z-10" />
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
            <span className="about-hero-element opacity-0 inline-flex items-center gap-2 bg-kki-red/10 border border-kki-red/20 px-4 py-1.5 rounded-full w-fit mb-6 text-xs font-extrabold text-kki-red tracking-widest uppercase">
              TENTANG PERGURUAN KAMI
            </span>
            <h1 className="about-hero-element opacity-0 text-4xl sm:text-5xl md:text-6xl font-black text-kki-black tracking-tight mb-6 leading-tight">
              Membangun Karakter Melalui <br className="hidden md:inline" />
              <span className="text-kki-red">Kushin Ryu Karate-Do</span>
            </h1>
            <p className="about-hero-element opacity-0 text-base sm:text-lg text-neutral-500 font-medium max-w-2xl mx-auto leading-relaxed">
              Mengenal lebih dekat Dojo KKI Situsaeur Bandung, dedikasi kami dalam mengajarkan bela diri karate tradisional Jepang yang diakui FORKI secara profesional.
            </p>
          </div>
        </section>

        {/* Sejarah Section */}
        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Kiri: Ilustrasi Logo SVG Besar */}
            <div className="lg:col-span-5 flex justify-center items-center about-history-visual opacity-0">
              <div className="relative w-72 h-72 md:w-80 md:h-80 border-4 border-neutral-100 rounded-full bg-white shadow-2xl flex items-center justify-center aspect-square shrink-0">
                <div className="relative w-44 h-44 md:w-52 md:h-52">
                  <Image
                    src="/logo-kki.svg"
                    alt="Logo Besar KKI"
                    fill
                    className="object-contain animate-pulse-slow"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Kanan: Teks Sejarah */}
            <div className="lg:col-span-7 flex flex-col justify-center about-history-text opacity-0">
              <h2 className="text-xs font-extrabold text-kki-red tracking-widest uppercase mb-3">
                SEJARAH ALIRAN
              </h2>
              <h3 className="text-2xl sm:text-3xl font-black text-kki-black mb-6">
                Asal-usul Kushin Ryu M Karate-Do
              </h3>
              <div className="h-1.5 w-16 bg-kki-red mb-8 rounded-full" />
              
              <div className="space-y-6 text-sm sm:text-base text-neutral-600 font-medium leading-relaxed">
                <p>
                  Aliran <strong className="font-extrabold text-kki-black">Kushin Ryu</strong> didirikan di Jepang oleh <strong className="font-extrabold text-kki-black">Horyu Matsutatsu Sano</strong> (Soke). Nama <span className="italic font-bold">Kushin</span> (空心) sendiri memiliki arti secara harfiah <strong className="font-extrabold text-kki-black">"Hati yang Damai dan Kosong"</strong>, merujuk pada ketenangan batin yang absolut saat menghadapi konflik fisik maupun kehidupan.
                </p>
                <p>
                  Di Indonesia, aliran ini secara resmi diperkenalkan pada tahun <strong className="font-extrabold text-kki-black">1967</strong> dan bernaung di bawah organisasi <strong className="font-extrabold text-kki-black">Kushin Ryu M Karate-Do Indonesia (KKI)</strong>. KKI merupakan salah satu dari 25 perguruan karate anggota resmi <strong className="font-extrabold text-kki-black">FORKI</strong> (Federasi Olahraga Karate-Do Indonesia) yang memiliki hak suara dalam pembinaan prestasi olahraga karate tingkat nasional.
                </p>
                <p>
                  <strong className="font-extrabold text-kki-black">Dojo Situsaeur Bandung</strong> didirikan untuk mendekatkan pelatihan karate berkualitas bagi warga Kota Bandung, khususnya di wilayah Bojongloa Kidul. Kami berdedikasi menjaga warisan teknik bela diri tradisional yang mengutamakan kecepatan reaksi, keefektifan kuncian, sapuan kaki, serta ketahanan mental beladiri praktis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Visi & Misi Section */}
        <section className="py-24 bg-neutral-50 relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20 about-vision-header opacity-0">
              <h2 className="text-xs font-extrabold text-kki-red tracking-widest uppercase mb-3">
                HALUAN DOJO
              </h2>
              <p className="text-3xl font-black text-kki-black tracking-tight mb-6">
                Visi & Misi Dojo Bandung
              </p>
              <div className="h-1.5 w-24 bg-kki-red mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch about-vision-grid opacity-0">
              {/* Visi */}
              <div className="bg-white border border-neutral-100 p-8 rounded-3xl shadow-lg flex flex-col gap-6">
                <div className="w-14 h-14 rounded-2xl bg-kki-red/10 flex items-center justify-center text-kki-red shrink-0">
                  <Target className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-extrabold text-kki-black">Visi Perguruan</h4>
                <p className="text-sm sm:text-base text-neutral-500 font-medium leading-relaxed">
                  Menjadi dojo karate pilihan utama di Bandung yang diakui secara nasional dalam melahirkan karateka yang tidak hanya tangguh secara fisik dan teknik kompetitif, tetapi juga memiliki integritas moral yang tinggi, kerendahan hati, dan kedisiplinan sosial yang kokoh.
                </p>
              </div>

              {/* Misi */}
              <div className="bg-white border border-neutral-100 p-8 rounded-3xl shadow-lg flex flex-col gap-6">
                <div className="w-14 h-14 rounded-2xl bg-kki-black/10 flex items-center justify-center text-kki-black shrink-0">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-extrabold text-kki-black">Misi Perguruan</h4>
                <ul className="space-y-4 text-xs sm:text-sm text-neutral-500 font-medium leading-relaxed">
                  <li className="flex gap-3 items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-kki-red shrink-0 mt-2" />
                    <span>Menyelenggarakan metode latihan karate Kushin Ryu yang komprehensif, aman, dan berstandar regulasi FORKI secara berkala.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-kki-red shrink-0 mt-2" />
                    <span>Membina kebugaran fisik, refleks motorik, pertahanan diri praktis (anti-bullying), dan kedisiplinan mental untuk segala jenjang usia.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-kki-red shrink-0 mt-2" />
                    <span>Menyalurkan potensi bakat karateka berprestasi ke jalur kejuaraan olahraga daerah (Kejurda) dan nasional (Kejurnas FORKI).</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Statistik Dojo */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-neutral-200/50 about-stats opacity-0">
              {STATS.map((stat, idx) => (
                <div key={idx} className="text-center flex flex-col">
                  <span className="text-3xl sm:text-4xl font-black text-kki-black">{stat.value}</span>
                  <span className="text-xs text-neutral-400 font-bold uppercase tracking-wider mt-2">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Profil Pengajar Section */}
        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20 about-teachers-header opacity-0">
              <h2 className="text-xs font-extrabold text-kki-red tracking-widest uppercase mb-3">
                INSTRUKTUR DOJO
              </h2>
              <p className="text-3xl font-black text-kki-black tracking-tight mb-6">
                Mengenal Profil Pelatih Kami
              </p>
              <div className="h-1.5 w-24 bg-kki-red mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch about-teachers-grid opacity-0">
              {TEACHERS.map((teacher, idx) => (
                <div
                  key={idx}
                  className="border border-neutral-100 p-8 rounded-3xl bg-neutral-50 hover:bg-white transition-all duration-300 hover:shadow-xl hover:shadow-kki-red/5 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div className="flex flex-col gap-4">
                    {/* Badge Tingkatan */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="bg-kki-red/10 border border-kki-red/20 px-3 py-1 rounded-full text-[10px] font-extrabold text-kki-red uppercase tracking-wider">
                        {teacher.rank}
                      </span>
                      <span className="bg-kki-black/10 border border-kki-black/20 px-3 py-1 rounded-full text-[10px] font-extrabold text-kki-black uppercase tracking-wider">
                        {teacher.experience}
                      </span>
                    </div>

                    {/* Nama & Peran */}
                    <div className="flex flex-col mt-2">
                      <h4 className="text-xl font-black text-kki-black">{teacher.name}</h4>
                      <span className="text-xs text-neutral-400 font-bold tracking-wide mt-1">{teacher.role}</span>
                    </div>

                    {/* Deskripsi */}
                    <p className="text-sm text-neutral-500 font-medium leading-relaxed mt-2">
                      {teacher.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-neutral-200/50 flex gap-2 items-center text-xs font-bold text-neutral-400">
                    <Users className="w-4 h-4 text-kki-red" />
                    Lisensi Resmi Perguruan KKI Pusat
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Bawah */}
        <section className="py-20 bg-kki-black text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-4">
              Siap Mengasah Potensi Anda Bersama Kami?
            </h2>
            <p className="text-sm text-neutral-400 font-medium max-w-lg mx-auto mb-8 leading-relaxed">
              Dapatkan kelas uji coba gratis (<span className="italic">free trial</span>) pertama Anda dengan menghubungi admin pendaftaran kami sekarang.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://wa.me/6289676682030"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-kki-red hover:bg-white hover:text-kki-black text-white font-extrabold px-8 py-4 rounded-full text-sm transition-all duration-300 shadow-md transform hover:-translate-y-0.5 cursor-pointer"
              >
                Hubungi WhatsApp
              </a>
              <Link
                href="/"
                className="border border-neutral-800 hover:border-white text-white font-extrabold px-8 py-4 rounded-full text-sm transition-all duration-300 transform hover:-translate-y-0.5"
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
