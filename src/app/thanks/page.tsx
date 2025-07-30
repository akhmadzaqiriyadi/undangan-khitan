import React from 'react';
import Image from 'next/image';

export default function ThanksPage() {
    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center text-lightBrown pb-16 pt-8 overflow-y-auto">
            {/* Background Pattern */}
            <Image
                src="/images/texture.png"
                alt="Background Pattern"
                layout="fill"
                objectFit="cover"
                className="opacity-70"
            />

            <div className="relative z-10 flex flex-col items-center p-6 text-center w-full max-w-sm mx-auto">
                <h1 className="font-display text-4xl font-bold mb-8 text-darkBrown">Terima Kasih</h1>

                <p className="font-sans text-lg leading-relaxed text-darkBrown mb-8">
                    Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila
                    teman-teman, berkenan hadir dan memberikan do'a.
                </p>

                <p className="font-display text-2xl font-semibold text-darkBrown mb-2">Best regards,</p>
                <p className="font-display text-3xl font-bold text-darkBrown">MUHAMMAD RIZANI</p>

                {/* Fitur Music (jika ingin diimplementasikan nanti) */}
                <div className="mt-8 text-darkBrown text-sm">
                    {/* Contoh Placeholder untuk kontrol musik */}
                    <p>Music: Judul Lagu - Artis</p>
                    {/* <button className="mt-2 px-4 py-2 bg-darkBrown text-lightBrown rounded-full">
                        Play/Pause Music
                    </button> */}
                </div>
            </div>
        </div>
    );
}