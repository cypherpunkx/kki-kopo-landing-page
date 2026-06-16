import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Programs from "@/components/Programs";
import Schedule from "@/components/Schedule";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: "Dojo KKI Situsaeur Bandung",
    description:
      "Dojo resmi Kushin Ryu M Karate-Do Indonesia (KKI) di Kota Bandung, Situsaeur. Melatih fisik, mental, pertahanan diri, dan membina atlet berprestasi.",
    image: "https://kki-bandung.com/images/hero.png",
    "@id": "https://kki-bandung.com/#dojo",
    url: "https://kki-bandung.com",
    telephone: "+6289676682030",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Gg. Cetarip Timur II No.4, Situsaeur, Kec. Bojongloa Kidul",
      addressLocality: "Kota Bandung",
      addressRegion: "Jawa Barat",
      postalCode: "40234",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -6.9297491,
      longitude: 107.5947702,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Thursday"],
        opens: "16:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "11:30",
      },
    ],
    sameAs: ["https://wa.me/6289676682030"],
  };

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Navigasi Utama */}
      <Navbar />

      <main className="grow">
        {/* Section 1: Hero & Visual 3D */}
        <Hero />

        {/* Section 2: Filosofi Aliran Kushin Ryu */}
        <Philosophy />

        {/* Section 3: Program Kelas Latihan */}
        <Programs />

        {/* Section 4: Jadwal Latihan & FAQ */}
        <Schedule />

        {/* Section 5: Lokasi Dojo & Form WhatsApp */}
        <Contact />
      </main>

      {/* Footer Navigasi & Hak Cipta */}
      <Footer />
    </div>
  );
}
