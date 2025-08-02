'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, User, Calendar, MapPin, CheckSquare, Image as ImageIcon, Gift, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState, useCallback } from 'react';

interface NavItem {
    name: string;
    href: string;
    icon: React.ElementType;
}

const navItems: NavItem[] = [
    { name: 'Opening', href: '/', icon: Home },
    { name: 'Profil', href: '/profil', icon: User },
    { name: 'Event', href: '/event', icon: Calendar },
    { name: 'Maps', href: '/maps', icon: MapPin },
    { name: 'Gift', href: '/gift', icon: Gift },
    { name: 'Gallery', href: '/gallery', icon: ImageIcon },
    { name: 'Thanks', href: '/thanks', icon: Heart },
];

export default function BottomNavbar() {
    const pathname = usePathname();
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<{ [key: string]: HTMLLIElement | null }>({});
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const currentNavItems = navItems;

    // Function to set item ref
    const setItemRef = useCallback((href: string) => (el: HTMLLIElement | null) => {
        itemRefs.current[href] = el;
    }, []);

    // Check scroll position to show/hide gradient indicators
    const checkScrollPosition = useCallback(() => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
        }
    }, []);

    // Auto scroll to active item when pathname changes
    const scrollToActiveItem = useCallback(() => {
        const container = scrollContainerRef.current;
        const activeItem = itemRefs.current[pathname];
        
        if (activeItem && container) {
            // Add a small delay to ensure DOM is updated
            setTimeout(() => {
                const containerWidth = container.offsetWidth;
                const containerScrollLeft = container.scrollLeft;
                const itemLeft = activeItem.offsetLeft;
                const itemWidth = activeItem.offsetWidth;
                
                // Calculate if item is visible
                const itemRight = itemLeft + itemWidth;
                const containerRight = containerScrollLeft + containerWidth;
                
                let scrollPosition = containerScrollLeft;
                
                // If item is to the right of visible area
                if (itemRight > containerRight) {
                    scrollPosition = itemLeft - containerWidth + itemWidth + 20; // 20px padding
                }
                // If item is to the left of visible area
                else if (itemLeft < containerScrollLeft) {
                    scrollPosition = itemLeft - 20; // 20px padding
                }
                // If item is partially visible or we want to center it
                else {
                    // Center the active item
                    scrollPosition = itemLeft - (containerWidth / 2) + (itemWidth / 2);
                }
                
                // Ensure scroll position is within bounds
                const maxScroll = container.scrollWidth - container.clientWidth;
                scrollPosition = Math.max(0, Math.min(scrollPosition, maxScroll));
                
                // Smooth scroll to the calculated position
                container.scrollTo({
                    left: scrollPosition,
                    behavior: 'smooth'
                });
                
                // Update scroll indicators after scrolling
                setTimeout(checkScrollPosition, 300);
            }, 100);
        }
    }, [pathname, checkScrollPosition]);

    // Effect for pathname changes
    useEffect(() => {
        scrollToActiveItem();
    }, [scrollToActiveItem]);

    // Add scroll event listener
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            // Use passive listener for better performance
            const handleScroll = () => {
                checkScrollPosition();
            };

            container.addEventListener('scroll', handleScroll, { passive: true });
            
            // Initial check with delay to ensure proper rendering
            setTimeout(() => {
                checkScrollPosition();
                scrollToActiveItem();
            }, 100);
            
            return () => {
                container.removeEventListener('scroll', handleScroll);
            };
        }
    }, [checkScrollPosition, scrollToActiveItem]);

    // Handle click on nav item
    const handleNavClick = useCallback((href: string) => {
        // Small delay to let Next.js navigation happen first
        setTimeout(() => {
            const container = scrollContainerRef.current;
            const targetItem = itemRefs.current[href];
            
            if (targetItem && container) {
                const containerWidth = container.offsetWidth;
                const itemLeft = targetItem.offsetLeft;
                const itemWidth = targetItem.offsetWidth;
                
                // Center the clicked item
                const scrollPosition = itemLeft - (containerWidth / 2) + (itemWidth / 2);
                const maxScroll = container.scrollWidth - container.clientWidth;
                const finalPosition = Math.max(0, Math.min(scrollPosition, maxScroll));
                
                container.scrollTo({
                    left: finalPosition,
                    behavior: 'smooth'
                });
            }
        }, 50);
    }, []);

    return (
        <nav className="absolute bottom-0 left-0 right-0 w-full bg-gradient-to-r from-amber-800/85 via-amber-700/85 to-amber-800/85 backdrop-blur-md border-t border-amber-600/20 shadow-lg z-20">
            {/* Decorative top border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-300/30 to-transparent"></div>
            
            {/* Islamic pattern overlay */}
            <div className="absolute inset-0 opacity-3">
                <svg className="w-full h-full" viewBox="0 0 400 80">
                    <defs>
                        <pattern id="islamicNavPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M10 2 L18 10 L10 18 L2 10 Z" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#islamicNavPattern)" className="text-amber-100" />
                </svg>
            </div>

            {/* Scrollable container */}
            <div 
                ref={scrollContainerRef} 
                className="relative overflow-x-auto scrollbar-hide scroll-snap-x"
                style={{ 
                    scrollbarWidth: 'none',  // Firefox
                    msOverflowStyle: 'none'  // IE/Edge
                }}
            >
                {/* Hide scrollbar for WebKit browsers */}
                <style jsx>{`
                    div::-webkit-scrollbar {
                        display: none;
                    }
                `}</style>
                
                <ul className="relative flex items-center h-full py-2 min-w-max px-2">
                    {/* Left gradient fade with scroll indicator */}
                    {canScrollLeft && (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-amber-800/85 via-amber-800/50 to-transparent pointer-events-none z-10"
                        >
                            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-4 bg-amber-300/50 rounded-full animate-pulse"></div>
                        </motion.div>
                    )}
                    
                    {/* Right gradient fade with scroll indicator */}
                    {canScrollRight && (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-amber-800/85 via-amber-800/50 to-transparent pointer-events-none z-10"
                        >
                            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-4 bg-amber-300/50 rounded-full animate-pulse"></div>
                        </motion.div>
                    )}
                    
                    {currentNavItems.map((item, index) => {
                        const isActive = pathname === item.href;
                        return (
                            <motion.li 
                                key={item.name} 
                                ref={setItemRef(item.href)}
                                className="flex-shrink-0 text-center relative min-w-[60px] scroll-snap-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ 
                                    duration: 0.4, 
                                    delay: index * 0.1,
                                    type: "spring",
                                    stiffness: 100
                                }}
                            >
                                <Link 
                                    href={item.href} 
                                    className="relative block"
                                    onClick={() => handleNavClick(item.href)}
                                >
                                    <motion.div 
                                        className={`flex flex-col items-center justify-center p-2 mx-1 transition-all duration-300 relative ${
                                            isActive 
                                                ? 'text-amber-50' 
                                                : 'text-amber-100/70 hover:text-amber-50'
                                        }`}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {/* Active indicator background */}
                                        {isActive && (
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-lg border border-amber-300/15"
                                                layoutId="activeTab"
                                                initial={false}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 300,
                                                    damping: 30
                                                }}
                                            />
                                        )}
                                        
                                        {/* Icon with subtle glow effect for active state */}
                                        <motion.div
                                            className={`relative mb-1 ${isActive ? 'drop-shadow-[0_0_4px_rgba(251,191,36,0.3)]' : ''}`}
                                        >
                                            <item.icon size={isActive ? 18 : 16} className="relative z-10" />
                                        </motion.div>
                                        
                                        {/* Label with clean typography */}
                                        <span className={`text-xs relative z-10 ${
                                            isActive ? 'font-medium tracking-wide' : 'font-normal'
                                        }`}>
                                            {item.name}
                                        </span>
                                    </motion.div>
                                </Link>
                            </motion.li>
                        );
                    })}
                </ul>
            </div>
            
            {/* Bottom gradient glow */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>
        </nav>
    );
}