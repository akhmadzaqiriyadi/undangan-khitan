import React from 'react';
import Image from 'next/image';

export default function ProfilPage() {
    return (
        // Halaman ini juga akan mengisi 100% tinggi dan lebar dari container 9:16 di layout
        <div className="relative w-full h-full flex flex-col items-center justify-center text-lightBrown">
            <Image
                src="/images/texture.png" // Gunakan background yang sama
                alt="Background Pattern"
                layout="fill"
                objectFit="cover"
                className="opacity-70"
            />
            <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center">
                <h1 className="font-display text-3xl font-bold mb-4 text-darkBrown">Profil Anak</h1>
                {/* Placeholder untuk gambar anak */}
                <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden mb-4">
                    {/* Jika Anda punya gambar anak, letakkan di sini */}
                    {/* <Image src="/images/child-profile.jpg" alt="Child Profile" width={128} height={128} objectFit="cover" /> */}
                    <span className="text-gray-600 text-sm">Gambar Anak</span>
                </div>
                <p className="font-sans text-xl font-semibold text-darkBrown">Rashad Hakeem Darmawan</p>
                <p className="font-sans text-base text-darkBrown mt-2">Putra dari Bapak Fulan & Ibu Fulana</p>
                <p className="mt-8 text-darkBrown text-sm leading-relaxed">
                    Assalamu'alaikum Wr. Wb. Tanpa mengurangi rasa hormat kami bermaksud mengundang Bapak/Ibu/Saudara/i pada acara syukuran khitan anak kami.
                </p>
            </div>
        </div>
    );
}