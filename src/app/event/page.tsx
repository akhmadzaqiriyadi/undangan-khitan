'use client'; // Client Component karena ada countdown timer dan mungkin state lainnya

import React, { JSX, useEffect, useState } from 'react';
import Image from 'next/image';

// Komponen Countdown Timer (akan kita buat sebentar lagi)
function Countdown({ targetDate }: { targetDate: Date }) {
    const calculateTimeLeft = () => {
        const difference = +targetDate - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        // Clear timeout if the component is unmounted
        return () => clearTimeout(timer);
    });

    const timerComponents: JSX.Element[] = [];

    Object.keys(timeLeft).forEach((interval) => {
        const value = timeLeft[interval as keyof typeof timeLeft];
        if (!value && value !== 0) {
            return;
        }

        timerComponents.push(
            <div key={interval} className="flex flex-col items-center mx-2 p-2 bg-darkBrown text-lightBrown rounded-lg min-w-[60px]">
                <span className="font-bold text-2xl">{String(value).padStart(2, '0')}</span>
                <span className="text-xs mt-1">{interval.toUpperCase()}</span>
            </div>
        );
    });

    return (
        <div className="flex justify-center mt-6">
            {timerComponents.length ? timerComponents : <span className="text-xl text-darkBrown">Acara telah dimulai!</span>}
        </div>
    );
}

export default function EventPage() {
    // Tanggal target untuk countdown (Saturday, 24 December 2022, 10.00 AM)
    // Perhatikan bahwa tanggal ini sudah lewat dari waktu saat ini (July 30, 2025).
    // Untuk tujuan demonstrasi, saya akan memajukan tanggalnya ke masa depan
    // agar countdownnya terlihat berfungsi. Misalnya, 1 minggu dari sekarang.
    // Jika Anda ingin menggunakan tanggal asli 24 Dec 2022, countdown akan langsung menunjukkan 00.

    // Tanggal asli dari gambar:
    const targetDate = new Date('2025-08-11T10:00:00');

    // Untuk demo, kita set 7 hari dari sekarang:
    targetDate.setDate(targetDate.getDate()); // Set 7 hari dari tanggal hari ini

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
                <h1 className="font-display text-3xl font-bold mb-6 text-darkBrown">TASYAKURAN KHITAN</h1>

                <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-lg text-darkBrown w-full max-w-xs mx-auto">
                    <p className="font-sans text-lg font-semibold mb-2">Akan dilaksanakan pada:</p>
                    <p className="font-display text-xl mb-1">
                        Saturday, 24 December 2022 {/* Teks tanggal tetap sesuai gambar */}
                    </p>
                    <p className="font-sans text-base mb-4">
                        10.00 AM - 01.00 PM
                    </p>
                    <p className="font-sans text-sm leading-relaxed">
                        Komplek Perumahan INALUM Tanjung Gading Blok B-12-16,
                        Perkebunan Sipare-pare, Sei Suka, Batu Bara
                    </p>
                </div>

                {/* Countdown Timer */}
                <Countdown targetDate={targetDate} />
            </div>
        </div>
    );
}