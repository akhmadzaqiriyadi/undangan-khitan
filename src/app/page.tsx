import Image from 'next/image';
import { Suspense } from 'react'; // Import Suspense
import OpeningContent from '@/components/OpeningContent'; // Import komponen baru kita

export default function HomePage() {
    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center text-lightBrown pb-16">
            {/* Background Pattern */}
            <Image
                src="/images/texture.png"
                alt="Background Pattern"
                layout="fill"
                objectFit="cover"
                className="opacity-70"
            />
            
            {/* Bungkus OpeningContent dengan Suspense */}
            <Suspense fallback={
                <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center text-darkBrown">
                    <p className="font-sans text-lg">Memuat Undangan...</p>
                    {/* Anda bisa menambahkan spinner atau placeholder yang lebih kompleks di sini */}
                </div>
            }>
                <OpeningContent />
            </Suspense>
        </div>
    );
}