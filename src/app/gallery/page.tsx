import React from 'react';
import Image from 'next/image';

export default function GalleryPage() {
    // Data placeholder untuk gambar (ganti dengan path gambar Anda)
    const photos = [
        { id: 1, src: '/images/placeholder-1.jpg', alt: 'Galeri Foto 1' },
        { id: 2, src: '/images/placeholder-2.jpg', alt: 'Galeri Foto 2' },
        { id: 3, src: '/images/placeholder-3.jpg', alt: 'Galeri Foto 3' },
        { id: 4, src: '/images/placeholder-4.jpg', alt: 'Galeri Foto 4' },
        // Tambahkan lebih banyak gambar jika diperlukan
    ];

    return (
        <div className="relative w-full h-full flex flex-col items-center text-darkBrown pb-16 pt-8 overflow-y-auto">
            {/* Background Pattern */}
            <Image
                src="/images/texture.png"
                alt="Background Pattern"
                layout="fill"
                objectFit="cover"
                className="opacity-70"
            />

            <div className="relative z-10 flex flex-col items-center p-6 text-center w-full max-w-sm mx-auto">
                <h1 className="font-display text-3xl font-bold mb-8">Galeri Foto</h1>

                <div className="grid grid-cols-2 gap-4 w-full">
                    {photos.map((photo) => (
                        <div key={photo.id} className="relative w-full aspect-square bg-gray-300 rounded-lg overflow-hidden shadow-md">
                            {/* Gunakan gambar asli Anda di sini */}
                            <Image
                                src={photo.src}
                                alt={photo.alt}
                                layout="fill"
                                objectFit="cover"
                                className="hover:scale-105 transition-transform duration-300"
                            />
                            {/* Overlay atau teks bisa ditambahkan di sini */}
                        </div>
                    ))}
                </div>

                {/* Jika ada lebih banyak gambar, bisa tambahkan tombol "Lihat Semua" atau lazy loading */}
            </div>
        </div>
    );
}