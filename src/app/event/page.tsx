'use client';

import React, { JSX, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Komponen Countdown Timer (akan kita buat sebentar lagi)
function Countdown({ targetDate }: { targetDate: Date }) {
    const calculateTimeLeft = () => {
        const difference = +targetDate - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        // Clear timeout if the component is unmounted
        return () => clearTimeout(timer);
    });

    const timerComponents: JSX.Element[] = [];

    Object.keys(timeLeft).forEach((interval) => {
        const value = timeLeft[interval as keyof typeof timeLeft];
        if (!value && value !== 0) {
            return;
        }

        timerComponents.push(
            <motion.div 
                key={interval} 
                className="flex flex-col items-center mx-1 p-2 bg-gradient-to-br from-yellow-600 to-yellow-700 text-white rounded-lg min-w-[55px] shadow-lg border border-yellow-500/30"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ scale: 1.05 }}
            >
                <span className="font-bold text-lg">{String(value).padStart(2, '0')}</span>
                <span className="text-[10px] mt-1 opacity-90">{interval.toUpperCase()}</span>
            </motion.div>
        );
    });

    return (
        <div className="flex justify-center mt-6">
            {timerComponents.length ? (
                <motion.div 
                    className="flex justify-center gap-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    {timerComponents}
                </motion.div>
            ) : (
                <motion.span 
                    className="text-xl text-darkBrown font-semibold"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    Acara telah dimulai!
                </motion.span>
            )}
        </div>
    );
}

export default function EventPage() {
    const [isVisible, setIsVisible] = useState(false);
    // Tanggal target untuk countdown (Sabtu, 09 Agustus 2025, 10.00 AM)
    const targetDate = new Date('2025-08-09T10:00:00');

    useEffect(() => {
        setIsVisible(true);
    }, []);

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

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="relative w-full h-full flex flex-col items-center justify-center text-lightBrown overflow-hidden"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <Image
                        src="/images/texture.png"
                        alt="Background Pattern"
                        layout="fill"
                        objectFit="cover"
                        className="opacity-70"
                    />

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
                        className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-8 mx-4 border border-white/20 shadow-2xl text-center max-w-md"
                        variants={itemVariants}
                    >
                        <motion.h1
                            className="font-display text-3xl font-bold mb-6 text-darkBrown"
                            variants={itemVariants}
                        >
                            TASYAKURAN AQIQAH & KHITAN
                        </motion.h1>

                        <motion.div
                            className="bg-yellow-600/20 backdrop-blur-sm p-6 rounded-xl border border-yellow-600/30 text-darkBrown mb-6"
                            variants={itemVariants}
                        >
                            <motion.p
                                className="font-sans text-lg font-semibold mb-4 text-yellow-700"
                                variants={itemVariants}
                            >
                                Akan dilaksanakan pada:
                            </motion.p>
                            
                            <motion.div
                                className="space-y-2 mb-4"
                                variants={itemVariants}
                            >
                                <p className="font-display text-xl font-bold">
                                    Sabtu, Minggu, Senin
                                </p>
                                <p className="font-display text-xl font-bold text-yellow-700">
                                    09, 10, 11 Agustus 2025
                                </p>
                                <p className="font-sans text-base font-semibold">
                                    10.00 AM - Selesai
                                </p>
                            </motion.div>
                            
                            <motion.div
                                className="pt-4 border-t border-yellow-600/30"
                                variants={itemVariants}
                            >
                                <p className="font-sans text-sm leading-relaxed">
                                    📍 Ds. Randusari RT 02 RW 02<br />
                                    Kec. Pagerbarang Kab. Tegal
                                </p>
                            </motion.div>
                        </motion.div>

                        {/* Countdown Timer */}
                        <motion.div variants={itemVariants}>
                            <Countdown targetDate={targetDate} />
                        </motion.div>
                    </motion.div>

                    {/* Bottom Decorative Elements */}
                    <motion.div
                        className="absolute bottom-4 left-4 w-12 h-12"
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
                        className="absolute bottom-4 right-4 w-12 h-12"
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