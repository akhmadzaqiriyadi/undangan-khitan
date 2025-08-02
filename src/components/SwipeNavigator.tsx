'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useRef, useState, useCallback } from 'react';
import { Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';

interface SwipeNavigatorProps {
    children: React.ReactNode;
}

const routes = [
    '/',
    '/profil',
    '/event',
    '/maps',
    '/gift',
    '/gallery',
    '/thanks'
];

export default function SwipeNavigator({ children }: SwipeNavigatorProps) {
    const router = useRouter();
    const pathname = usePathname();
    const touchStartRef = useRef<{ x: number; y: number } | null>(null);
    const touchEndRef = useRef<{ x: number; y: number } | null>(null);
    const [isAutoNavigating, setIsAutoNavigating] = useState(true);
    const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);
    const [countdown, setCountdown] = useState(15);
    const [showSwipeHint, setShowSwipeHint] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const countdownRef = useRef<NodeJS.Timeout | null>(null);
    const hintTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const currentIndex = routes.indexOf(pathname);

    const navigateToPage = useCallback((direction: 'next' | 'prev') => {
        let newIndex;
        if (direction === 'next') {
            newIndex = currentIndex < routes.length - 1 ? currentIndex + 1 : 0;
        } else {
            newIndex = currentIndex > 0 ? currentIndex - 1 : routes.length - 1;
        }
        router.push(routes[newIndex]);
        
        // Reset countdown when manually navigating
        if (isAutoNavigating) {
            setCountdown(15);
        }
    }, [currentIndex, router, isAutoNavigating]);

    // Show swipe hint after a delay
    useEffect(() => {
        hintTimeoutRef.current = setTimeout(() => {
            setShowSwipeHint(true);
        }, 3000); // Show hint after 3 seconds

        return () => {
            if (hintTimeoutRef.current) {
                clearTimeout(hintTimeoutRef.current);
            }
        };
    }, []);

    // Auto navigation every 15 seconds
    useEffect(() => {
        if (isAutoNavigating) {
            setCountdown(15);
            
            intervalRef.current = setInterval(() => {
                navigateToPage('next');
                setCountdown(15); // Reset countdown
            }, 15000);

            countdownRef.current = setInterval(() => {
                setCountdown(prev => prev > 0 ? prev - 1 : 15);
            }, 1000);
        } else {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
            if (countdownRef.current) {
                clearInterval(countdownRef.current);
            }
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
            if (countdownRef.current) {
                clearInterval(countdownRef.current);
            }
        };
    }, [isAutoNavigating, navigateToPage]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') {
                navigateToPage('prev');
            } else if (e.key === 'ArrowRight') {
                navigateToPage('next');
            } else if (e.key === ' ' || e.key === 'Spacebar') {
                e.preventDefault();
                setIsAutoNavigating(!isAutoNavigating);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [navigateToPage, isAutoNavigating]);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartRef.current = {
            x: e.targetTouches[0].clientX,
            y: e.targetTouches[0].clientY
        };
        // Hide swipe hint when user starts interacting
        setShowSwipeHint(false);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndRef.current = {
            x: e.targetTouches[0].clientX,
            y: e.targetTouches[0].clientY
        };
    };

    const handleTouchEnd = () => {
        if (!touchStartRef.current || !touchEndRef.current) return;

        const deltaX = touchEndRef.current.x - touchStartRef.current.x;
        const deltaY = touchEndRef.current.y - touchStartRef.current.y;

        // Check if it's a horizontal swipe (not vertical scroll)
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
            if (deltaX > 0) {
                // Swipe right - go to previous page
                setSwipeDirection('right');
                setTimeout(() => {
                    navigateToPage('prev');
                    setSwipeDirection(null);
                }, 150);
            } else {
                // Swipe left - go to next page
                setSwipeDirection('left');
                setTimeout(() => {
                    navigateToPage('next');
                    setSwipeDirection(null);
                }, 150);
            }
        }

        touchStartRef.current = null;
        touchEndRef.current = null;
    };

    const toggleAutoNavigation = () => {
        setIsAutoNavigating(!isAutoNavigating);
        if (!isAutoNavigating) {
            setCountdown(15); // Reset countdown when resuming
        }
    };

    return (
        <>
            {/* Swipe Navigation Hint */}
            {showSwipeHint && (
                <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-black bg-opacity-75 text-white px-2 py-2 rounded-full text-sm animate-pulse">
                    <div className="flex items-center space-x-2">
                        <span>👈 Geser untuk navigasi 👉</span>
                    </div>
                </div>
            )}

            <div
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                className="w-full h-full relative"
            >
                {children}
                
                {/* Swipe indicators */}
                {swipeDirection && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
                        <div className="bg-black bg-opacity-50 rounded-full p-4">
                            {swipeDirection === 'left' ? 
                                <ChevronRight size={40} className="text-white" /> : 
                                <ChevronLeft size={40} className="text-white" />
                            }
                        </div>
                    </div>
                )}
            </div>

            {/* Auto Navigation Toggle Button with Countdown */}
            <div className="fixed top-20 right-4 md:right-[calc(50%-190px)] z-40 flex flex-col items-center">
                <button
                    onClick={toggleAutoNavigation}
                    className="p-3 bg-darkBrown text-lightBrown rounded-full shadow-lg hover:bg-brownAccent transition-colors duration-300"
                    aria-label={isAutoNavigating ? 'Pause auto navigation' : 'Resume auto navigation'}
                    title={`Auto navigation: ${isAutoNavigating ? 'ON' : 'OFF'}`}
                >
                    {isAutoNavigating ? <Pause size={20} /> : <Play size={20} />}
                </button>
                {isAutoNavigating && (
                    <div className="mt-1 text-xs text-darkBrown bg-lightBrown px-2 py-1 rounded-full shadow">
                        {countdown}s
                    </div>
                )}
            </div>

            {/* Page Indicator */}
            <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-40 flex space-x-2">
                {routes.map((_, index) => (
                    <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                            index === currentIndex ? 'bg-darkBrown' : 'bg-brownAccent opacity-50'
                        }`}
                    />
                ))}
            </div>
        </>
    );
}
