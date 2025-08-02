import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display, Amiri, Poppins } from 'next/font/google';
import BottomNavbar from '@/components/BottomNavbar';
import AudioPlayer from '@/components/AudioPlayer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfairDisplay = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800', '900'],
    variable: '--font-playfair-display',
});
const amiri = Amiri({
    subsets: ['arabic', 'latin'],
    weight: ['400', '700'],
    variable: '--font-amiri',
});
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-poppins',
});

export const metadata: Metadata = {
    title: 'Undangan Tasyakuran Khitan - Rashad Hakeem Darmawan',
    description: 'Undangan Digital Tasyakuran Khitan - Dibuat dengan Next.js',
    keywords: 'undangan, tasyakuran, khitan, digital invitation',
    authors: [{ name: 'Digital Invitation' }],
    openGraph: {
        title: 'Undangan Tasyakuran Khitan - Rashad Hakeem Darmawan',
        description: 'Dengan senang hati kami mengundang Anda dalam acara tasyakuran khitan',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="id" className={`${inter.variable} ${playfairDisplay.variable} ${amiri.variable} ${poppins.variable}`}>
            <body className="font-poppins bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex justify-center items-center min-h-screen antialiased">
                {/* Main container that simulates mobile screen */}
                <div
                    className="
                        relative
                        w-full
                        max-w-sm
                        md:max-w-[420px]
                        aspect-[9/16]
                        bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50
                        overflow-hidden
                        shadow-2xl
                        rounded-2xl
                        flex flex-col
                        border border-amber-200/50
                    "
                    style={{
                        backgroundImage: `
                            radial-gradient(circle at 20% 20%, rgba(251, 191, 36, 0.1) 0%, transparent 50%),
                            radial-gradient(circle at 80% 80%, rgba(217, 119, 6, 0.1) 0%, transparent 50%),
                            radial-gradient(circle at 40% 60%, rgba(245, 158, 11, 0.05) 0%, transparent 50%)
                        `
                    }}
                >
                    {/* Islamic pattern overlay */}
                    <div className="absolute inset-0 opacity-5">
                        <svg className="w-full h-full" viewBox="0 0 400 600">
                            <defs>
                                <pattern id="islamicPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                    <path d="M20 5 L35 20 L20 35 L5 20 Z" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#islamicPattern)" />
                        </svg>
                    </div>

                    {/* Content area with flex-grow and scroll */}
                    <div className="flex-grow overflow-y-auto relative z-10">
                        {children}
                    </div>

                    {/* Bottom Navbar */}
                    <BottomNavbar />
                </div>
                <AudioPlayer />
            </body>
        </html>
    );
}