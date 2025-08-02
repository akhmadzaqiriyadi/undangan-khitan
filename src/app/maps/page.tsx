'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { LucideLocate } from 'lucide-react';

export default function MapsPage() {
    const [isVisible, setIsVisible] = useState(false);
    // Koordinat lokasi dari: 7°00'06.7"S 109°03'59.5"E
    const latitude = -7.001861;
    const longitude = 109.066528;

    // Link Google Maps untuk iframe (sematkan)
    const googleMapsSimpleEmbedUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&hl=en&z=14&output=embed`;

    // Link untuk "Petunjuk Ke Lokasi" (navigasi)
    const googleMapsDirectionUrl = `https://maps.google.com/maps?daddr=${latitude},${longitude}`;

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
                        className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-4 m-8 border border-white/20 shadow-2xl text-center"
                        variants={itemVariants}
                    >
                        <motion.h1
                            className="font-display text-3xl font-bold mb-4 text-darkBrown"
                            variants={itemVariants}
                        >
                            LOKASI ACARA
                        </motion.h1>

                        {/* Map Container */}
                        <motion.div
                            className="w-full h-[280px] bg-white/20 rounded-xl shadow-lg overflow-hidden mb-6 border-2 border-yellow-600/30 backdrop-blur-sm"
                            variants={itemVariants}
                        >
                            <iframe
                                src={googleMapsSimpleEmbedUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Lokasi Acara"
                                className="rounded-xl"
                            ></iframe>
                        </motion.div>

                        {/* Address */}
                        <motion.div
                            className="bg-yellow-600/20 backdrop-blur-sm p-4 rounded-xl border border-yellow-600/30 mb-6"
                            variants={itemVariants}
                        >
                            <p className="font-sans text-base leading-relaxed text-darkBrown">
                                📍 Ds. Randusari RT 02 RW 02<br />
                                Kec. Pagerbarang Kab. Tegal
                            </p>
                        </motion.div>

                        {/* Direction Button */}
                        <motion.a
                            href={googleMapsDirectionUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white rounded-full shadow-lg font-semibold tracking-wide text-lg"
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <LucideLocate size={20} className="mr-2" />
                            Petunjuk Ke Lokasi
                        </motion.a>
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