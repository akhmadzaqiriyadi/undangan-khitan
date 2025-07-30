'use client'; // Ini adalah Client Component

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState, type FormEvent } from 'react';
import Image from 'next/image';

export default function OpeningContent() {
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
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center">
            <Image
                src="/images/stroller.png"
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
    );
}