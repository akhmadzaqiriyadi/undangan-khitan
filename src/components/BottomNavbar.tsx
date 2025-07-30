'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, User, Calendar, MapPin, CheckSquare, Image as ImageIcon, Gift} from 'lucide-react';

interface NavItem {
    name: string;
    href: string;
    icon: React.ElementType; // Tipe untuk komponen ikon
}

const navItems: NavItem[] = [
    { name: 'Opening', href: '/', icon: Home },
    { name: 'Profil', href: '/profil', icon: User },
    { name: 'Event', href: '/event', icon: Calendar },
    { name: 'Maps', href: '/maps', icon: MapPin },
    { name: 'RSVP', href: '/rsvp', icon: CheckSquare },
    { name: 'Gallery', href: '/gallery', icon: ImageIcon },
    { name: 'Thanks', href: '/thanks', icon: Home }, // Bisa pakai ikon lain atau Home lagi
];

export default function BottomNavbar() {
    const pathname = usePathname(); // Hook untuk mendapatkan path saat ini

    // Filter nav items sesuai dengan yang terlihat di gambar Anda.
    // Untuk saat ini, kita akan tampilkan semua, nanti bisa diatur dinamis per halaman
    // atau memiliki beberapa set navbar berbeda.
    // Berdasarkan gambar yang Anda berikan, jumlah item di navbar berbeda-beda di setiap halaman.
    // Untuk kesederhanaan awal, kita akan membuat navbar penuh, kemudian kita akan sesuaikan.
    // Anda bisa membuat array navItems yang berbeda untuk setiap halaman atau
    // mengatur visibilitas berdasarkan `pathname`.

    // Mari kita buat navbar yang lebih dinamis berdasarkan halaman aktif.
    // Namun, untuk start awal, kita tampilkan 5 item yang umum di awal (Opening, Profil, Event, Maps, RSVP)
    // dan nanti kita bisa extend ini lebih lanjut.

    // Untuk mempermudah, mari kita buat 5 item default dulu, seperti di image_ede9a0.jpg
    const defaultNavItems: NavItem[] = [
        { name: 'Opening', href: '/', icon: Home },
        { name: 'Profil', href: '/profil', icon: User },
        { name: 'Event', href: '/event', icon: Calendar },
        { name: 'Maps', href: '/maps', icon: MapPin },
        { name: 'Gallery', href: '/gallery', icon: ImageIcon },
        { name: 'Thanks', href: '/thanks', icon: Gift },
    ];

    // Jika Anda ingin navbar yang lebih komplit sejak awal, gunakan `navItems` di atas.
    // Untuk demo pertama, kita pakai `defaultNavItems`.
    const currentNavItems = defaultNavItems; // Atau filter `navItems` berdasarkan `pathname`

    return (
        <nav className="absolute bottom-0 left-0 right-0 w-full bg-darkBrown text-lightBrown p-2 shadow-lg z-20 bg-[#8c6a56]">
            <ul className="flex justify-around items-center h-full">
                {currentNavItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <li key={item.name} className="flex-1 text-center">
                            <Link href={item.href} className={`flex flex-col items-center justify-center p-2 text-sm transition-colors duration-200 ${isActive ? 'text-white font-semibold' : 'text-lightBrown hover:text-white'}`}>
                                <item.icon size={20} className="mb-1" />
                                <span className="text-xs">{item.name}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}