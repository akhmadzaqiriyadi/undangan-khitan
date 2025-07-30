'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Volume2, VolumeX } from 'lucide-react'; // Ikon volume

export default function AudioPlayer() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showControls, setShowControls] = useState(false); // Untuk menampilkan tombol musik
    const [userInteracted, setUserInteracted] = useState(false); // Lacak interaksi pengguna

    // Path ke file musik Anda
    const audioSrc = '/audio/Mohamed Youssef-ALHIJRATU.mp3'; // Ganti dengan nama file Anda

    const playAudio = useCallback(() => {
        if (audioRef.current) {
            audioRef.current.play().then(() => {
                setIsPlaying(true);
            }).catch(error => {
                console.warn("Autoplay was prevented:", error);
                setIsPlaying(false);
                // Jika autoplay diblokir, kita bisa mencoba lagi setelah interaksi
            });
        }
    }, []);

    const pauseAudio = useCallback(() => {
        if (audioRef.current) {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    }, []);

    const togglePlay = useCallback(() => {
        if (audioRef.current) {
            if (isPlaying) {
                pauseAudio();
            } else {
                playAudio();
            }
        }
    }, [isPlaying, playAudio, pauseAudio]);

    useEffect(() => {
        // Pasang event listener untuk melacak interaksi pengguna
        const handleUserInteraction = () => {
            if (!userInteracted) {
                setUserInteracted(true);
                // Coba putar musik setelah interaksi pertama
                playAudio();
            }
            // Hapus event listener setelah interaksi pertama
            window.removeEventListener('click', handleUserInteraction);
            window.removeEventListener('keydown', handleUserInteraction);
            window.removeEventListener('touchstart', handleUserInteraction);
        };

        // Tambahkan event listener saat komponen pertama kali dimuat
        window.addEventListener('click', handleUserInteraction);
        window.addEventListener('keydown', handleUserInteraction);
        window.addEventListener('touchstart', handleUserInteraction);

        // Bersihkan event listener saat komponen dilepas
        return () => {
            window.removeEventListener('click', handleUserInteraction);
            window.removeEventListener('keydown', handleUserInteraction);
            window.removeEventListener('touchstart', handleUserInteraction);
        };
    }, [playAudio, userInteracted]);

    useEffect(() => {
        // Otomatis coba putar saat komponen dimuat (mungkin diblokir browser)
        playAudio();
    }, [playAudio]); // Panggil playAudio sekali saat mount

    // Tampilkan kontrol hanya setelah interaksi atau jika musik sudah diputar
    useEffect(() => {
        if (userInteracted || isPlaying) {
            setShowControls(true);
        }
    }, [userInteracted, isPlaying]);


    return (
        <>
            <audio ref={audioRef} src={audioSrc} loop preload="auto" />

            {/* Tombol kontrol musik yang mengambang di pojok kanan bawah */}
            {showControls && (
                <button
                    onClick={togglePlay}
                    className="fixed bottom-20 right-4 md:right-[calc(50%-190px)] z-40 p-3 bg-darkBrown text-lightBrown rounded-full shadow-lg hover:bg-brownAccent transition-colors duration-300"
                    aria-label={isPlaying ? 'Pause music' : 'Play music'}
                >
                    {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
                </button>
            )}
        </>
    );
}