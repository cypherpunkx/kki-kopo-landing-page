'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, PhoneCall } from 'lucide-react';
import gsap from 'gsap';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection('');
      return;
    }

    const sections = ['filosofi', 'program', 'jadwal', 'lokasi'];
    const handleScrollActive = () => {
      const scrollPosition = window.scrollY + 280;

      if (window.scrollY < 100) {
        setActiveSection('');
        return;
      }

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollActive);
    handleScrollActive();

    return () => window.removeEventListener('scroll', handleScrollActive);
  }, [pathname]);

  const isLinkActive = (href: string) => {
    if (href === '/about') {
      return pathname === '/about';
    }
    if (href === '/gallery') {
      return pathname === '/gallery';
    }
    if (href.startsWith('/#')) {
      const targetHash = href.substring(2);
      return pathname === '/' && activeSection === targetHash;
    }
    if (href === '/') {
      return pathname === '/' && activeSection === '';
    }
    return false;
  };

  // Animasi logo & menu dengan GSAP saat pertama kali masuk
  useEffect(() => {
    gsap.fromTo(
      '.nav-item',
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.2, stagger: 0.1, ease: 'power3.out' }
    );
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-neutral-100 shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo KKI */}
        <Link href="/" className="flex items-center gap-3 nav-item">
          <div className="relative w-12 h-12">
            <Image
              src="/logo-kki.svg"
              alt="Logo KKI Kushin Ryu"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base tracking-widest text-kki-black leading-none">
              KKI KOPO
            </span>
            <span className="text-[9px] text-kki-red font-bold tracking-wider mt-0.5">
              KUSHIN RYU KARATE-DO
            </span>
          </div>
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-8 nav-item">
          <Link
            href="/about"
            className={`relative text-sm font-semibold transition-all duration-300 ${
              isLinkActive('/about') ? 'text-kki-red font-bold' : 'text-neutral-600 hover:text-kki-red'
            }`}
          >
            Tentang Kami
            {isLinkActive('/about') && (
              <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-kki-red rounded-full animate-pulse" />
            )}
          </Link>
          <Link
            href="/#filosofi"
            className={`relative text-sm font-semibold transition-all duration-300 ${
              isLinkActive('/#filosofi') ? 'text-kki-red font-bold' : 'text-neutral-600 hover:text-kki-red'
            }`}
          >
            Filosofi
            {isLinkActive('/#filosofi') && (
              <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-kki-red rounded-full animate-pulse" />
            )}
          </Link>
          <Link
            href="/#program"
            className={`relative text-sm font-semibold transition-all duration-300 ${
              isLinkActive('/#program') ? 'text-kki-red font-bold' : 'text-neutral-600 hover:text-kki-red'
            }`}
          >
            Program Latihan
            {isLinkActive('/#program') && (
              <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-kki-red rounded-full animate-pulse" />
            )}
          </Link>
          <Link
            href="/gallery"
            className={`relative text-sm font-semibold transition-all duration-300 ${
              isLinkActive('/gallery') ? 'text-kki-red font-bold' : 'text-neutral-600 hover:text-kki-red'
            }`}
          >
            Galeri Foto
            {isLinkActive('/gallery') && (
              <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-kki-red rounded-full animate-pulse" />
            )}
          </Link>
          <Link
            href="/#jadwal"
            className={`relative text-sm font-semibold transition-all duration-300 ${
              isLinkActive('/#jadwal') ? 'text-kki-red font-bold' : 'text-neutral-600 hover:text-kki-red'
            }`}
          >
            Jadwal Dojo
            {isLinkActive('/#jadwal') && (
              <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-kki-red rounded-full animate-pulse" />
            )}
          </Link>
          <Link
            href="/#lokasi"
            className={`relative text-sm font-semibold transition-all duration-300 ${
              isLinkActive('/#lokasi') ? 'text-kki-red font-bold' : 'text-neutral-600 hover:text-kki-red'
            }`}
          >
            Lokasi & Kontak
            {isLinkActive('/#lokasi') && (
              <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-kki-red rounded-full animate-pulse" />
            )}
          </Link>
        </div>

        {/* CTA Desktop */}
        <div className="hidden md:block nav-item">
          <a
            href="https://wa.me/6289676682030"
            target="_blank"
            rel="noopener noreferrer"
            className="group/button inline-flex shrink-0 items-center justify-center rounded-full border border-transparent bg-kki-black hover:bg-kki-red text-white font-bold px-6 py-2.5 text-sm transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg gap-2 cursor-pointer"
          >
            <PhoneCall className="w-4 h-4" />
            Gabung Sekarang
          </a>
        </div>

        {/* Toggle Mobile Menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-kki-black focus:outline-none nav-item"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-neutral-100 shadow-xl py-6 px-8 flex flex-col gap-6 animate-fade-in-down">
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className={`text-base font-bold transition-all duration-300 pl-3 border-l-2 ${
              isLinkActive('/about')
                ? 'text-kki-red border-kki-red'
                : 'text-neutral-700 hover:text-kki-red border-transparent'
            }`}
          >
            Tentang Kami
          </Link>
          <Link
            href="/#filosofi"
            onClick={() => setIsOpen(false)}
            className={`text-base font-bold transition-all duration-300 pl-3 border-l-2 ${
              isLinkActive('/#filosofi')
                ? 'text-kki-red border-kki-red'
                : 'text-neutral-700 hover:text-kki-red border-transparent'
            }`}
          >
            Filosofi
          </Link>
          <Link
            href="/#program"
            onClick={() => setIsOpen(false)}
            className={`text-base font-bold transition-all duration-300 pl-3 border-l-2 ${
              isLinkActive('/#program')
                ? 'text-kki-red border-kki-red'
                : 'text-neutral-700 hover:text-kki-red border-transparent'
            }`}
          >
            Program Latihan
          </Link>
          <Link
            href="/gallery"
            onClick={() => setIsOpen(false)}
            className={`text-base font-bold transition-all duration-300 pl-3 border-l-2 ${
              isLinkActive('/gallery')
                ? 'text-kki-red border-kki-red'
                : 'text-neutral-700 hover:text-kki-red border-transparent'
            }`}
          >
            Galeri Foto
          </Link>
          <Link
            href="/#jadwal"
            onClick={() => setIsOpen(false)}
            className={`text-base font-bold transition-all duration-300 pl-3 border-l-2 ${
              isLinkActive('/#jadwal')
                ? 'text-kki-red border-kki-red'
                : 'text-neutral-700 hover:text-kki-red border-transparent'
            }`}
          >
            Jadwal Dojo
          </Link>
          <Link
            href="/#lokasi"
            onClick={() => setIsOpen(false)}
            className={`text-base font-bold transition-all duration-300 pl-3 border-l-2 ${
              isLinkActive('/#lokasi')
                ? 'text-kki-red border-kki-red'
                : 'text-neutral-700 hover:text-kki-red border-transparent'
            }`}
          >
            Lokasi & Kontak
          </Link>
          <a
            href="https://wa.me/6289676682030"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-kki-red hover:bg-kki-black text-white font-bold w-full py-4 transition-all duration-300 gap-2 cursor-pointer text-base"
          >
            <PhoneCall className="w-5 h-5" />
            WhatsApp: 0896-7668-2030
          </a>
        </div>
      )}
    </nav>
  );
}
