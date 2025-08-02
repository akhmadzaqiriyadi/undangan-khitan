'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function OpeningContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [guestName, setGuestName] = useState('Nama Tamu');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const name = searchParams.get('to');
        if (name) {
            setGuestName(decodeURIComponent(name));
        }
        setIsVisible(true);
    }, [searchParams]);

    const handleOpenInvitation = () => {
        // Try to enter fullscreen
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if ((document.documentElement as any).webkitRequestFullscreen) {
            (document.documentElement as any).webkitRequestFullscreen();
        } else if ((document.documentElement as any).msRequestFullscreen) {
            (document.documentElement as any).msRequestFullscreen();
        }

        // Navigate to profile page
        router.push('/profil');
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8
            }
        }
    };

    const ornamentVariants = {
        hidden: { scale: 0, rotate: -180 },
        visible: {
            scale: 1,
            rotate: 0,
            transition: {
                duration: 1.2,
                type: "spring" as const,
                bounce: 0.3
            }
        }
    };

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                delay: 1.5
            }
        },
        hover: {
            scale: 1.05,
            boxShadow: "0 10px 25px rgba(140, 106, 86, 0.3)",
            transition: {
                duration: 0.3
            }
        },
        tap: { scale: 0.95 }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center overflow-hidden"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Decorative Islamic Ornaments */}
                    <motion.div
                        className="absolute top-4 left-4 w-16 h-16"
                        variants={ornamentVariants}
                    >
                        <Image
                            src="/images/ornamen islam.svg"
                            alt="Islamic Ornament"
                            width={64}
                            height={64}
                            className="w-full h-full"
                        />
                    </motion.div>

                    <motion.div
                        className="absolute top-4 right-4 w-16 h-16"
                        variants={ornamentVariants}
                        style={{ rotate: 90 }}
                    >
                        <Image
                            src="/images/ornamen islam.svg"
                            alt="Islamic Ornament"
                            width={64}
                            height={64}
                            className="w-full h-full"
                        />
                    </motion.div>

                    {/* Islamic Star Ornament */}
                    <motion.div
                        className="absolute top-8 left-1/2 transform -translate-x-1/2"
                        variants={ornamentVariants}
                    >
                        <Image
                            src="/images/ornamen islam.svg"
                            alt="Islamic Ornament"
                            width={40}
                            height={40}
                            className="w-full h-full"
                        />
                    </motion.div>

                    {/* Main Content */}
                    <motion.div
                        className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mx-4 border border-white/20 shadow-2xl"
                        variants={itemVariants}
                    >
                        {/* Bismillah or Opening Text */}
                        <motion.div
                            className="mb-6"
                            variants={itemVariants}
                        >
                            <p className="font-arabic text-lg text-darkBrown mb-2">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</p>
                            <p className="text-sm text-darkBrown/80 italic">Bismillahirrahmanirrahim</p>
                        </motion.div>

                        <motion.h1
                            className="font-display text-2xl font-bold mb-2 text-darkBrown tracking-wide"
                            variants={itemVariants}
                        >
                            Undangan
                        </motion.h1>

                        <motion.h2
                            className="font-display text-3xl font-bold mb-6 text-yellow-700 tracking-wider"
                            variants={itemVariants}
                        >
                            TASYAKURAN KHITAN
                        </motion.h2>

                        <motion.h3
                            className="font-display text-2xl font-bold mb-8 text-darkBrown"
                            variants={itemVariants}
                        >
                            Aufar Alif Al Kenzo
                        </motion.h3>

                        <motion.button
                            onClick={handleOpenInvitation}
                            className="px-8 py-4 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white rounded-full shadow-lg font-semibold tracking-wide text-lg"
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            Open Invitation
                        </motion.button>
                    </motion.div>

                    {/* Bottom Decorative Elements */}
                    <motion.div
                        className="absolute bottom-4 left-4 w-12 h-12 opacity-20"
                        variants={ornamentVariants}
                        style={{ rotate: 180 }}
                    >
                        <Image
                            src="/images/ornamen islam.svg"
                            alt="Islamic Ornament"
                            width={48}
                            height={48}
                            className="w-full h-full"
                        />
                    </motion.div>

                    <motion.div
                        className="absolute bottom-4 right-4 w-12 h-12 opacity-20"
                        variants={ornamentVariants}
                        style={{ rotate: 270 }}
                    >
                        <Image
                            src="/images/ornamen islam.svg"
                            alt="Islamic Ornament"
                            width={48}
                            height={48}
                            className="w-full h-full"
                        />
                    </motion.div>

                    {/* Floating particles animation */}
                    <div className="absolute inset-0 pointer-events-none">
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-yellow-600/30 rounded-full"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                }}
                                animate={{
                                    y: [-20, 20],
                                    opacity: [0.3, 1, 0.3],
                                }}
                                transition={{
                                    duration: 3 + Math.random() * 2,
                                    repeat: Infinity,
                                    delay: Math.random() * 2,
                                }}
                            />
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}