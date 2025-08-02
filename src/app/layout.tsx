import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import BottomNavbar from '@/components/BottomNavbar';
import AudioPlayer from '@/components/AudioPlayer';
import SwipeNavigator from '@/components/SwipeNavigator';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfairDisplay = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-playfair-display',
});

export const metadata: Metadata = {
    title: 'Undangan Khitaman Kenzo',
    description: 'Bapak Supriyadi Arramdani & Bunda Reni Dwi Hastuti',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`}>
            <body className="font-sans bg-brownAccent flex justify-center items-center min-h-screen">
                {/* Ini adalah container utama yang akan mensimulasikan layar ponsel */}
                <div
                    className="
                        relative
                        w-full
                        max-w-sm
                        md:max-w-[420px]
                        aspect-[9/16]
                        bg-lightBrown
                        overflow-hidden
                        shadow-2xl
                        rounded-lg
                        flex flex-col
                    "
                >
                    {/* Konten halaman akan berada di sini dan mengisi sisa ruang di atas navbar */}
                    <div className="flex-grow overflow-y-auto"> {/* Tambahkan flex-grow dan overflow-y-auto */}
                        <SwipeNavigator>
                            {children}
                        </SwipeNavigator>
                    </div>

                    {/* Bottom Navbar */}
                    <BottomNavbar />
                </div>
                <AudioPlayer />
            </body>
        </html>
    );
}