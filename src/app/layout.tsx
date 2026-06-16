import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kushin Ryu M Karate-Do Indonesia (KKI) Kopo | Dojo Kopo",
  description: "Bergabunglah dengan KKI Dojo Kopo. Pelatihan bela diri karate Kushin Ryu terbaik untuk anak-anak, remaja, dewasa, dan kelas prestasi atlet di Kopo Bandung. Latih fisik, mental, dan disiplin tinggi.",
  keywords: ["karate kopo", "bela diri kopo", "dojo kopo", "kki kopo", "kushin ryu indonesia", "les karate anak kopo", "atlet karate bandung", "karate bojongloa kidul", "karate kopo bandung"],
  authors: [{ name: "Dojo KKI Kopo" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Kushin Ryu M Karate-Do Indonesia (KKI) Kopo | Dojo Kopo",
    description: "Bergabunglah dengan KKI Dojo Kopo. Pelatihan bela diri karate Kushin Ryu terbaik untuk anak-anak, remaja, dewasa, dan kelas prestasi atlet di Kopo Bandung. Latih fisik, mental, dan disiplin tinggi.",
    url: "https://kki-bandung.com",
    siteName: "KKI Dojo Kopo",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://kki-bandung.com/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Dojo KKI Kopo Karate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kushin Ryu M Karate-Do Indonesia (KKI) Kopo | Dojo Kopo",
    description: "Pelatihan bela diri karate KKI terbaik di Kopo Bandung. Bentuk karakter, fisik, dan raih prestasi olahraga karate.",
    images: ["https://kki-bandung.com/images/hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${outfit.variable} ${plusJakartaSans.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-kki-black selection:bg-kki-red selection:text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
