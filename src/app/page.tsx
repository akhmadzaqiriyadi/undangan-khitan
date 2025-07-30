'use client';

import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function HomePage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [guestName, setGuestName] = useState('Nama Tamu');

    useEffect(() => {
        const name = searchParams.get('to');
        if (name) {
            setGuestName(decodeURIComponent(name));
        }
    }, [searchParams]);

    const handleOpenInvitation = () => {
        // Coba masuk mode fullscreen
        // Ini harus dipanggil pada event user interaction (klik tombol)
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if ((document.documentElement as any).webkitRequestFullscreen) { /* Safari */
            (document.documentElement as any).webkitRequestFullscreen();
        } else if ((document.documentElement as any).msRequestFullscreen) { /* IE11 */
            (document.documentElement as any).msRequestFullscreen();
        }

        // Navigasi ke halaman profil
        router.push('/profil');
    };

    return (
        // Halaman ini sekarang akan mengisi 100% tinggi dan lebar dari container 9:16 di layout
        <div className="relative w-full h-full flex flex-col items-center justify-center text-lightBrown">
            {/* Background Pattern di dalam container 9:16 */}
            <Image
                src="/images/texture.png"
                alt="Background Pattern"
                layout="fill"
                objectFit="cover"
                className="opacity-70"
            />
            {/* Konten halaman */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center">
                <Image
                    src="/images/stroller.png" // Pastikan gambar ini ada di public/images
                    alt="Stroller Icon"
                    width={80}
                    height={80}
                    className="mb-6"
                />
                <h1 className="font-display text-4xl font-bold mb-4 text-darkBrown">TASYAKURAN</h1>
                <p className="font-display text-2xl mb-2 text-darkBrown">4 Bulanan Anak Pertama</p>
                <h2 className="font-display text-3xl font-bold mb-8 text-darkBrown">Helga & Dedie</h2>

                <p className="font-sans text-lg mb-8 text-darkBrown">Kepada Yth:</p>
                <p className="font-sans text-xl font-semibold mb-12 text-darkBrown">{guestName}</p>

                <button
                    onClick={handleOpenInvitation}
                    className="px-8 py-3 bg-darkBrown text-lightBrown rounded-full shadow-lg hover:bg-brownAccent transition-colors duration-300"
                >
                    Open Invitation
                </button>
            </div>
        </div>
    );
}