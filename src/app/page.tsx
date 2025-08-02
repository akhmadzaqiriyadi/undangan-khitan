import Image from 'next/image';
import { Suspense } from 'react';
import OpeningContent from '@/components/OpeningContent';

export default function HomePage() {
    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center text-lightBrown pb-16">
            {/* Background Pattern */}
            <Image
                src="/images/texture.png"
                alt="Background Pattern"
                fill
                style={{ objectFit: 'cover' }}
                className="opacity-70"
            />
            
            {/* Bungkus OpeningContent dengan Suspense */}
            <Suspense fallback={
                <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center text-darkBrown">
                    <p className="font-sans text-lg">Memuat Undangan...</p>
                </div>
            }>
                <OpeningContent />
            </Suspense>
        </div>
    );
}