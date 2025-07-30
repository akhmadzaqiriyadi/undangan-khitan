'use client'; // Client Component jika ada interaktivitas atau efek

import React from 'react';
import Image from 'next/image';
import { LucideLocate } from 'lucide-react';

export default function MapsPage() {
    // Koordinat lokasi dari gambar (Komplek Perumahan INALUM Tanjung Gading Blok B-12-16)
    // Saya akan menggunakan koordinat perkiraan yang umum untuk area tersebut,
    // Anda bisa menggantinya dengan koordinat yang lebih akurat jika tahu.
    const latitude = 3.318889;  // Contoh: 3°19'08.0"N
    const longitude = 99.337778; // Contoh: 99°20'16.0"E

    // Link Google Maps untuk iframe (sematkan)
    const googleMapsEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_Maps_API_KEY&q=${latitude},${longitude}`;
    // PENTING: Ganti YOUR_Maps_API_KEY dengan API Key Google Maps Anda.
    // Jika Anda tidak memiliki API Key dan hanya ingin demo, Anda bisa hapus `key=...`
    // tapi fungsionalitasnya mungkin terbatas atau tidak muncul sama sekali di produksi.
    // Untuk pengembangan awal tanpa API Key, bisa juga menggunakan link share biasa:
    // const googleMapsEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d...` (dari Google Maps "Share" -> "Embed a map")
    // Mari kita gunakan versi sederhana tanpa API key dulu untuk kemudahan:
    const googleMapsSimpleEmbedUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&hl=en&z=14&output=embed`;

    // Link untuk "Petunjuk Ke Lokasi" (navigasi)
    const googleMapsDirectionUrl = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;

    return (
        <div className="relative w-full h-full flex flex-col items-center text-lightBrown pb-16 pt-8 overflow-y-auto">
            {/* Background Pattern */}
            <Image
                src="/images/texture.png"
                alt="Background Pattern"
                layout="fill"
                objectFit="cover"
                className="opacity-70"
            />

            <div className="relative z-10 flex flex-col items-center p-6 text-center w-full">
                <h1 className="font-display text-3xl font-bold mb-6 text-darkBrown">LOKASI ACARA</h1>

                <div className="w-full max-w-sm h-[300px] bg-white rounded-lg shadow-lg overflow-hidden mb-6 border-2 border-darkBrown">
                    {/* Iframe untuk menyematkan Google Maps */}
                    <iframe
                        src={googleMapsSimpleEmbedUrl} // Menggunakan URL sederhana
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={false} // Atur true jika ingin fitur fullscreen di iframe
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Lokasi Acara"
                    ></iframe>
                </div>

                <p className="font-sans text-base leading-relaxed text-darkBrown mb-6">
                    Komplek Perumahan INALUM Tanjung Gading Blok B-12-16,
                    Perkebunan Sipare-pare, Sei Suka, Batu Bara
                </p>

                <a
                    href={googleMapsDirectionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-darkBrown text-lightBrown rounded-full shadow-lg hover:bg-brownAccent transition-colors duration-300 flex items-center"
                >
                    <LucideLocate size={20} className="mr-2" />
                    Petunjuk Ke Lokasi
                </a>
            </div>
        </div>
    );
}