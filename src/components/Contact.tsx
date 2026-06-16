'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, MessageSquare, Send, Calendar } from 'lucide-react';

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    program: 'Kids',
    notes: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format pesan WhatsApp
    const programName = 
      formData.program === 'Kids' ? 'Kelas Anak-Anak' :
      formData.program === 'Reguler' ? 'Kelas Reguler' : 'Kelas Prestasi';
      
    const message = `Halo Admin Dojo KKI Kopo,\n\nSaya ingin mendaftar/tanya-tanya mengenai latihan karate:\n- Nama: ${formData.name}\n- Usia: ${formData.age} Tahun\n- Pilihan Kelas: ${programName}\n- Catatan Tambahan: ${formData.notes || '-'}\n\nTerima kasih.`;
    
    const waUrl = `https://wa.me/6289676682030?text=${encodeURIComponent(message)}`;
    
    // Buka tautan WhatsApp di tab baru
    window.open(waUrl, '_blank');
  };

  useEffect(() => {
    // Animasi Header
    gsap.fromTo(
      '.contact-header',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.contact-section',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Animasi Info (Kiri)
    gsap.fromTo(
      '.contact-info',
      { opacity: 0, x: -40 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.contact-grid',
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Animasi Form (Kanan)
    gsap.fromTo(
      '.contact-form',
      { opacity: 0, x: 40 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.contact-grid',
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <section id="lokasi" className="contact-section py-24 bg-neutral-50 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="contact-header opacity-0 text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-extrabold text-kki-red tracking-widest uppercase mb-3">
            LOKASI & PENDAFTARAN
          </h2>
          <p className="text-3xl sm:text-4xl font-black text-kki-black tracking-tight mb-6">
            Kunjungi Dojo Kami & Mulai Berlatih
          </p>
          <div className="h-1.5 w-24 bg-kki-red mx-auto mb-8 rounded-full" />
        </div>

        {/* Contact Grid */}
        <div className="contact-grid grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Bagian Kiri: Info Kontak & Peta */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-8 contact-info opacity-0">
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-black text-kki-black mb-2">
                Informasi Kontak Dojo
              </h3>
              
              {/* Alamat */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-kki-red/10 flex items-center justify-center text-kki-red shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-extrabold text-kki-black">Alamat Dojo:</span>
                  <p className="text-sm text-neutral-500 font-medium leading-relaxed mt-1">
                    Gg. Cetarip Timur II No.4, Situsaeur, Kec. Bojongloa Kidul, Kota Bandung, Jawa Barat 40234
                  </p>
                </div>
              </div>

              {/* Telepon */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-kki-black/10 flex items-center justify-center text-kki-black shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-extrabold text-kki-black">Telepon / WhatsApp:</span>
                  <a
                    href="https://wa.me/6289676682030"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-kki-red font-bold hover:underline mt-1"
                  >
                    0896-7668-2030
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center text-pink-600 shrink-0">
                  <InstagramIcon className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-extrabold text-kki-black">Instagram Dojo:</span>
                  <a
                    href="https://www.instagram.com/kki_kopo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-pink-600 font-bold hover:underline mt-1"
                  >
                    @kki_kopo
                  </a>
                </div>
              </div>
            </div>

            {/* Peta Google Maps Terintegrasi */}
            <div className="relative w-full h-[320px] rounded-3xl overflow-hidden border border-neutral-200 shadow-lg bg-neutral-100 mt-2">
              <iframe
                title="Peta Dojo KKI Kopo"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.6720491741584!2d107.5947702!3d-6.9297491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e61e05d03b07%3A0xe5a1c3d11b228b3f!2sGg.%20Cetarip%20Timur%20II%20No.4%2C%20Situsaeur%2C%20Kec.%20Bojongloa%20Kidul%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040234!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>
          </div>

          {/* Bagian Kanan: Formulir Pendaftaran */}
          <div className="lg:col-span-5 contact-form opacity-0">
            <Card className="border border-neutral-100 bg-white shadow-xl rounded-3xl overflow-hidden h-full">
              <CardContent className="p-6 sm:p-8 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-extrabold text-kki-black mb-2 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-kki-red" />
                    Formulir Pendaftaran
                  </h3>
                  <p className="text-xs text-neutral-400 font-bold tracking-wide mb-8">
                    Isi data Anda dan hubungi admin kami untuk uji coba gratis!
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Nama Lengkap */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-xs font-extrabold text-neutral-600 uppercase tracking-wider">
                        Nama Lengkap
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Contoh: Budi Santoso"
                        className="rounded-xl border-neutral-200 focus:border-kki-red px-4 py-6 text-sm font-semibold"
                      />
                    </div>

                    {/* Usia */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="age" className="text-xs font-extrabold text-neutral-600 uppercase tracking-wider">
                        Usia Calon Siswa (Tahun)
                      </label>
                      <Input
                        type="number"
                        id="age"
                        name="age"
                        required
                        min="5"
                        max="80"
                        value={formData.age}
                        onChange={handleChange}
                        placeholder="Contoh: 10"
                        className="rounded-xl border-neutral-200 focus:border-kki-red px-4 py-6 text-sm font-semibold"
                      />
                    </div>

                    {/* Program Pilihan */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="program" className="text-xs font-extrabold text-neutral-600 uppercase tracking-wider">
                        Pilihan Kelas Latihan
                      </label>
                      <div className="relative">
                        <select
                          id="program"
                          name="program"
                          value={formData.program}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-neutral-200 focus:border-kki-red focus:outline-none bg-white px-4 py-4 text-sm font-semibold text-neutral-700 appearance-none cursor-pointer"
                        >
                          <option value="Kids">Kelas Anak-Anak (6 - 12 Tahun)</option>
                          <option value="Reguler">Kelas Reguler (13+ Tahun)</option>
                          <option value="Prestasi">Kelas Prestasi (Kompetisi)</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400">
                          ▼
                        </div>
                      </div>
                    </div>

                    {/* Catatan / Pesan */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="notes" className="text-xs font-extrabold text-neutral-600 uppercase tracking-wider">
                        Pertanyaan atau Catatan Tambahan (Opsional)
                      </label>
                      <Textarea
                        id="notes"
                        name="notes"
                        rows={3}
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="Contoh: Punya riwayat asma / ingin tahu biaya seragam..."
                        className="rounded-xl border-neutral-200 focus:border-kki-red px-4 py-4 text-sm font-semibold resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full bg-kki-red hover:bg-kki-black text-white font-extrabold py-7 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      Kirim ke WhatsApp
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>

      </div>
    </section>
  );
}
