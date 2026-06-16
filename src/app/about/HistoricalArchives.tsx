'use client';

import React, { useState, useMemo } from 'react';
import { Search, Briefcase, Shield, SlidersHorizontal, Users, Award, Info } from 'lucide-react';

const HISTORICAL_STAFF = {
  pelindung: 'Pengurus Daerah KKI Jabar',
  pembina: ['H. Sofyan Hambally', 'Drs. H Harmon Djusar, MBA'],
  inti: [
    { label: 'Ketua', name: 'Drs. H. Dani Herdiana, M.Si' },
    { label: 'Wakil Ketua', name: 'Teddy M.T' },
    { label: 'Sekretaris', name: 'Eko Hendrawan, S.Sos' },
    { label: 'Wakil Sekretaris', name: 'Adian J Daniel, S.Sos-MST' },
  ],
  bendahara: ['Rina Triyana, A.Md', 'Aat Tedjamahlia'],
  isahi: [
    'Hamid Arif',
    'Dadan Sutardan',
    'Rismawan',
    'Cuncun Mulyana, BA',
    'Drs. Dian Mulyadiansyah, S.Sos',
  ],
  komisi: [
    { title: 'Komisi Teknik', members: ['Cuncun Mulyana, BA', 'Lia Nurlianty', 'Eko Hendrawan, S.Sos', 'Supriyanto'] },
    { title: 'Komisi Disiplin', members: ['Kapten AL Siti Mulyaningrum (Inge)', 'E Yogaswara', 'Asep deddy'] },
    { title: 'Keanggotaan / Organisasi', members: ['Muhtar, S.Ag', 'Dani ramadhan'] },
    { title: 'Litbang', members: ['Saefulloh, A.Md', 'Dodi Hermawan'] },
    { title: 'Perwasitan', members: ['Rambit Pintu Batu', 'Teddy MT', 'Suyono'] },
    { title: 'Koordinator Ranting / Dojo', members: ['Suyono', 'Sando', 'Dang aten', 'Pristo'] },
    { title: 'Pubdok & Humas', members: ['Adian J Daniel, S.Sos-MST', 'Arifin', 'Jajat Sudrajat'] },
    { title: 'Bidang Umum', members: ['Beny Randani', 'Djodjo', 'Elly Rosana', 'Sarjiwanto', 'Reni Rostika, A.Md', 'Linda', 'mariany', 'Dadah', 'Arief'] },
  ]
};

const BLACK_BELTS = [
  { id: 1, name: 'Mayor Anang Alibasyah', dan: 'DAN V', status: 'Alm' },
  { id: 2, name: 'A. Sofyan Hambally', dan: 'DAN VI', status: '' },
  { id: 3, name: 'Saeful Anwar', dan: 'DAN III', status: '' },
  { id: 4, name: 'E Yogaswara', dan: 'DAN III', status: '' },
  { id: 5, name: 'Hendi R', dan: 'DAN II', status: '' },
  { id: 6, name: 'Aam Hidayat', dan: 'DAN V', status: '' },
  { id: 7, name: 'Dadan Sutardan', dan: 'DAN II', status: '' },
  { id: 8, name: 'Cucun Mulyana, BA', dan: 'DAN IV', status: '' },
  { id: 9, name: 'E. Hamid Arif', dan: 'DAN III', status: '' },
  { id: 10, name: 'Rismawan', dan: 'DAN III', status: '' },
  { id: 11, name: 'Ani Rufaidah', dan: 'DAN II', status: '' },
  { id: 12, name: 'Ir. Bambang B', dan: 'DAN II', status: '' },
  { id: 13, name: 'Drs. Zulkarnaen A.S', dan: 'DAN IV', status: '' },
  { id: 14, name: 'Elly Rosana', dan: 'DAN II', status: '' },
  { id: 15, name: 'Aat Tezamahlia', dan: 'DAN III', status: '' },
  { id: 16, name: 'Atin Siraj', dan: 'DAN III', status: '' },
  { id: 17, name: 'Teddy Muhammad Tufiq', dan: 'DAN II', status: '' },
  { id: 18, name: 'Ir. Asep Suratman', dan: 'DAN I', status: '' },
  { id: 19, name: 'Drs. Dian Mulyadiansyah', dan: 'DAN III', status: '' },
  { id: 20, name: 'Dadang', dan: 'DAN II', status: '' },
  { id: 21, name: 'Drs. Indra Solihin', dan: 'DAN I', status: '' },
  { id: 22, name: 'Saefulloh, A.Md.', dan: 'DAN II', status: '' },
  { id: 23, name: 'Asep Suhendar', dan: 'DAN II', status: '' },
  { id: 24, name: 'Lia Nurlianty', dan: 'DAN III', status: '' },
  { id: 25, name: 'Eko Hendrawan, S.Sos', dan: 'DAN II', status: '' },
  { id: 26, name: 'Firman Monardi', dan: 'DAN II', status: '' },
  { id: 27, name: 'Asep Dedi', dan: 'DAN III', status: '' },
  { id: 28, name: 'Drs. Azis Furqon', dan: 'DAN II', status: '' },
  { id: 29, name: 'Ende', dan: 'DAN II', status: '' },
  { id: 30, name: 'Sinaga SE', dan: 'DAN I', status: '' },
  { id: 31, name: 'Suyono', dan: 'DAN II', status: '' },
  { id: 32, name: 'Muchtar, S. Ag', dan: 'DAN II', status: '' },
  { id: 33, name: 'Alan Sutisna', dan: 'DAN II', status: '' },
  { id: 34, name: 'Ajat Sudrajat', dan: 'DAN I', status: '' },
  { id: 35, name: 'Jajat Sudrajat', dan: 'DAN I', status: '' },
  { id: 36, name: 'Reni Rostika, A.Md', dan: 'DAN I', status: '' },
  { id: 37, name: 'Siti Mulyaningrum SH', dan: 'DAN II', status: '' },
  { id: 38, name: 'Dang Alan, S.Pd', dan: 'DAN II', status: '' },
  { id: 39, name: 'Sarjiwanto', dan: 'DAN I', status: '' },
  { id: 40, name: 'Drs. Slamet Riyadi', dan: 'DAN II', status: 'Alm' },
  { id: 41, name: 'Oktavenalo', dan: 'DAN I', status: '' },
  { id: 42, name: 'Sutini', dan: 'DAN I', status: '' },
  { id: 43, name: 'Dodi Hermawan, A.M.d', dan: 'DAN I', status: '' },
  { id: 44, name: 'Beny Ramdani', dan: 'DAN I', status: '' },
  { id: 45, name: 'Supriyanto', dan: 'DAN I', status: '' },
  { id: 46, name: 'Bogie Riyadi', dan: 'DAN I', status: '' },
  { id: 47, name: 'Dang Aten', dan: 'DAN I', status: '' },
];

export default function HistoricalArchives() {
  const [activeTab, setActiveTab] = useState<'pengurus' | 'sabuk-hitam'>('pengurus');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterDan, setFilterDan] = useState('ALL');

  // Filter sabuk hitam
  const filteredBlackBelts = useMemo(() => {
    return BLACK_BELTS.filter((kb) => {
      const matchSearch = kb.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchDan = filterDan === 'ALL' || kb.dan === filterDan;
      return matchSearch && matchDan;
    });
  }, [searchQuery, filterDan]);

  // Dapatkan warna lencana DAN
  const getDanBadgeStyles = (dan: string) => {
    switch (dan) {
      case 'DAN VI':
        return 'bg-amber-600/10 text-amber-600 border border-amber-600/20';
      case 'DAN V':
        return 'bg-amber-500/10 text-amber-500 border border-amber-500/20';
      case 'DAN IV':
        return 'bg-rose-600/10 text-rose-600 border border-rose-600/20';
      case 'DAN III':
        return 'bg-rose-500/10 text-rose-500 border border-rose-500/20';
      case 'DAN II':
        return 'bg-neutral-800/10 text-neutral-800 border border-neutral-800/20';
      case 'DAN I':
      default:
        return 'bg-neutral-600/10 text-neutral-600 border border-neutral-600/20';
    }
  };

  return (
    <section className="py-24 bg-neutral-50 relative border-t border-neutral-200/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Arsip */}
        <div className="text-center max-w-3xl mx-auto mb-16 about-archive-header opacity-0">
          <span className="inline-flex items-center gap-2 bg-kki-black/5 border border-kki-black/10 px-4 py-1.5 rounded-full w-fit mb-4 text-[10px] font-extrabold text-kki-black tracking-widest uppercase">
            ARSIP HISTORIS
          </span>
          <h2 className="text-3xl font-black text-kki-black tracking-tight mb-4">
            Arsip Kepengurusan & Direktori DAN
          </h2>
          <div className="h-1.5 w-24 bg-kki-red mx-auto rounded-full mb-6" />
          <p className="text-sm text-neutral-500 font-medium leading-relaxed">
            Menelusuri jejak administrasi organisasi periode 2004-2008 dan jajaran karateka sabuk hitam (DAN) yang pernah dibina langsung oleh KKI Cabang Kopo.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="about-archive-content opacity-0">
          <div className="flex justify-center mb-12">
            <div className="bg-neutral-200/50 p-1.5 rounded-2xl flex gap-2 w-full max-w-md border border-neutral-200">
              <button
                onClick={() => setActiveTab('pengurus')}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-extrabold tracking-wide transition-all duration-300 cursor-pointer ${
                  activeTab === 'pengurus'
                    ? 'bg-white text-kki-red shadow-sm'
                    : 'text-neutral-500 hover:text-kki-black'
                }`}
              >
                <Briefcase className="w-4 h-4" />
                Struktur Pengurus (2004-2008)
              </button>
              <button
                onClick={() => setActiveTab('sabuk-hitam')}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-extrabold tracking-wide transition-all duration-300 cursor-pointer ${
                  activeTab === 'sabuk-hitam'
                    ? 'bg-white text-kki-red shadow-sm'
                    : 'text-neutral-500 hover:text-kki-black'
                }`}
              >
                <Shield className="w-4 h-4" />
                Daftar Sabuk Hitam / DAN
              </button>
            </div>
          </div>

          {/* TAB CONTENT: PENGURUS */}
          {activeTab === 'pengurus' && (
            <div className="space-y-10 animate-fade-in duration-300">
              {/* Pembina, Pelindung, Inti Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Pelindung & Pembina */}
                <div className="border border-neutral-100 p-8 rounded-3xl bg-white shadow-sm flex flex-col gap-6">
                  <div className="flex items-center gap-3 border-b border-neutral-100 pb-4">
                    <div className="w-10 h-10 rounded-xl bg-kki-red/10 flex items-center justify-center text-kki-red">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-neutral-400 uppercase tracking-wider">Pelindung & Pembina</h4>
                      <p className="text-xs text-neutral-500 font-bold">Masa Bakti 2004 - 2008</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <span className="text-xs font-extrabold text-kki-black block mb-1">Pelindung:</span>
                      <span className="text-sm text-neutral-600 font-medium">{HISTORICAL_STAFF.pelindung}</span>
                    </div>
                    <div>
                      <span className="text-xs font-extrabold text-kki-black block mb-1">Pembina:</span>
                      <ul className="space-y-1 text-sm text-neutral-600 font-medium">
                        {HISTORICAL_STAFF.pembina.map((item, idx) => (
                          <li key={idx} className="flex gap-2 items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-kki-red shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Pengurus Inti */}
                <div className="lg:col-span-2 border border-neutral-100 p-8 rounded-3xl bg-white shadow-sm flex flex-col gap-6">
                  <div className="flex items-center gap-3 border-b border-neutral-100 pb-4">
                    <div className="w-10 h-10 rounded-xl bg-kki-black/10 flex items-center justify-center text-kki-black">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-neutral-400 uppercase tracking-wider">Pengurus Harian Inti</h4>
                      <p className="text-xs text-neutral-500 font-bold">Ketua & Sekretaris</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {HISTORICAL_STAFF.inti.map((item, idx) => (
                      <div key={idx} className="bg-neutral-50 p-4 rounded-2xl border border-neutral-100 flex flex-col">
                        <span className="text-xs font-extrabold text-kki-red uppercase tracking-wider mb-1">{item.label}</span>
                        <span className="text-sm sm:text-base font-black text-kki-black">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bendahara & Isahi */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Bendahara */}
                <div className="border border-neutral-100 p-8 rounded-3xl bg-white shadow-sm flex flex-col gap-6">
                  <h4 className="text-base font-black text-kki-black pb-3 border-b border-neutral-100 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-kki-red" />
                    Bendahara Cabang
                  </h4>
                  <ul className="space-y-3">
                    {HISTORICAL_STAFF.bendahara.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 bg-neutral-50 p-3.5 rounded-xl border border-neutral-100">
                        <Award className="w-4 h-4 text-kki-red" />
                        <span className="text-sm text-neutral-700 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Isahi */}
                <div className="border border-neutral-100 p-8 rounded-3xl bg-white shadow-sm flex flex-col gap-6">
                  <h4 className="text-base font-black text-kki-black pb-3 border-b border-neutral-100 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-kki-red" />
                    ISAHI (Ikatan Sabuk Hitam / Dewan Guru)
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {HISTORICAL_STAFF.isahi.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-neutral-50 p-3 rounded-xl border border-neutral-100">
                        <span className="w-1.5 h-1.5 rounded-full bg-kki-black shrink-0" />
                        <span className="text-xs sm:text-sm text-neutral-700 font-semibold">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Komisi & Seksi Grid */}
              <div className="pt-6">
                <h4 className="text-lg font-black text-kki-black mb-8 text-center flex items-center justify-center gap-2">
                  <span className="h-1.5 w-6 bg-kki-red rounded-full" />
                  Divisi, Komisi & Seksi-Seksi Organisasi
                  <span className="h-1.5 w-6 bg-kki-red rounded-full" />
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {HISTORICAL_STAFF.komisi.map((kom, idx) => (
                    <div key={idx} className="bg-white border border-neutral-100 p-6 rounded-3xl shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-col gap-4">
                      <span className="text-xs font-black text-kki-black pb-2 border-b border-neutral-100 tracking-wide uppercase">
                        {kom.title}
                      </span>
                      <ul className="space-y-2 flex-grow">
                        {kom.members.map((member, mIdx) => (
                          <li key={mIdx} className="flex gap-2 items-start text-xs text-neutral-500 font-medium">
                            <span className="w-1 h-1 rounded-full bg-kki-red shrink-0 mt-1.5" />
                            <span>{member}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB CONTENT: SABUK HITAM */}
          {activeTab === 'sabuk-hitam' && (
            <div className="bg-white border border-neutral-100 p-6 sm:p-8 rounded-3xl shadow-lg space-y-6 animate-fade-in duration-300">
              
              {/* Search & Filter Controls */}
              <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between pb-6 border-b border-neutral-100">
                {/* Search Input */}
                <div className="relative flex-grow max-w-md">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                  <input
                    type="text"
                    placeholder="Cari nama sabuk hitam..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 rounded-2xl border border-neutral-200 focus:border-kki-red focus:outline-hidden text-xs sm:text-sm font-medium transition-all"
                  />
                </div>

                {/* Filter Dropdown */}
                <div className="relative min-w-[160px] flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-neutral-400 shrink-0" />
                  <select
                    value={filterDan}
                    onChange={(e) => setFilterDan(e.target.value)}
                    className="w-full bg-white border border-neutral-200 py-3 px-4 rounded-2xl text-xs sm:text-sm font-bold text-neutral-600 focus:outline-hidden focus:border-kki-red cursor-pointer"
                  >
                    <option value="ALL">Semua DAN</option>
                    <option value="DAN VI">DAN VI</option>
                    <option value="DAN V">DAN V</option>
                    <option value="DAN IV">DAN IV</option>
                    <option value="DAN III">DAN III</option>
                    <option value="DAN II">DAN II</option>
                    <option value="DAN I">DAN I</option>
                  </select>
                </div>
              </div>

              {/* Data Table */}
              <div className="overflow-x-auto">
                <div className="max-h-[500px] overflow-y-auto pr-2 rounded-xl">
                  {filteredBlackBelts.length > 0 ? (
                    <table className="min-w-full divide-y divide-neutral-100">
                      <thead className="bg-neutral-50 sticky top-0 z-10">
                        <tr>
                          <th scope="col" className="px-6 py-4 text-left text-xs font-black text-kki-black uppercase tracking-wider rounded-l-xl">No</th>
                          <th scope="col" className="px-6 py-4 text-left text-xs font-black text-kki-black uppercase tracking-wider">Nama Karateka Sabuk Hitam</th>
                          <th scope="col" className="px-6 py-4 text-center text-xs font-black text-kki-black uppercase tracking-wider">Tingkat Sabuk</th>
                          <th scope="col" className="px-6 py-4 text-center text-xs font-black text-kki-black uppercase tracking-wider rounded-r-xl">Keterangan</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-100 bg-white">
                        {filteredBlackBelts.map((kb, idx) => (
                          <tr key={kb.id} className="hover:bg-neutral-50/50 transition-colors duration-150">
                            <td className="px-6 py-4 text-xs sm:text-sm text-neutral-400 font-bold whitespace-nowrap">{idx + 1}</td>
                            <td className="px-6 py-4 text-xs sm:text-sm text-kki-black font-extrabold whitespace-nowrap">{kb.name}</td>
                            <td className="px-6 py-4 text-center whitespace-nowrap">
                              <span className={`inline-flex px-3 py-1 rounded-full text-[10px] font-extrabold tracking-wider ${getDanBadgeStyles(kb.dan)}`}>
                                {kb.dan}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-center whitespace-nowrap">
                              {kb.status ? (
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-neutral-100 text-neutral-500 border border-neutral-200">
                                  <Info className="w-3 h-3" />
                                  {kb.status}
                                </span>
                              ) : (
                                <span className="text-neutral-300 text-xs">—</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <div className="text-center py-12 flex flex-col items-center justify-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400">
                        <Search className="w-6 h-6" />
                      </div>
                      <p className="text-sm font-bold text-neutral-400">Nama sabuk hitam tidak ditemukan.</p>
                      <button
                        onClick={() => {
                          setSearchQuery('');
                          setFilterDan('ALL');
                        }}
                        className="text-xs text-kki-red font-extrabold hover:underline"
                      >
                        Reset Pencarian & Filter
                      </button>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Jumlah Data Sabuk Hitam */}
              <div className="pt-4 border-t border-neutral-100 flex justify-between items-center text-xs font-bold text-neutral-400">
                <span>Total Direktori: 47 Sabuk Hitam</span>
                <span>Terfilter: {filteredBlackBelts.length} Karateka</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
