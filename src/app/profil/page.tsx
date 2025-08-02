'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProfilPage() {
    const [isVisible, setIsVisible] = useState(false);

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
                        className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-8 mx-4 border border-white/20 shadow-2xl text-center"
                        variants={itemVariants}
                    >
                        <motion.h1
                            className="font-display text-3xl font-bold mb-6 text-darkBrown"
                            variants={itemVariants}
                        >
                            Dikhitan
                        </motion.h1>

                        {/* Profile Image with Frame */}
                        <motion.div
                            className="relative w-32 h-32 mx-auto mb-6"
                            variants={itemVariants}
                        >
                            <div className="absolute inset-0 rounded-full border-4 border-yellow-600 shadow-lg"></div>
                            <div className="w-full h-full rounded-full overflow-hidden bg-gray-200">
                                <Image
                                    src="/images/kenzo.png"
                                    alt="Child Profile"
                                    width={128}
                                    height={128}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>

                        <motion.h2
                            className="font-display text-2xl font-bold mb-4 text-darkBrown"
                            variants={itemVariants}
                        >
                            Aufar Alif Al Kenzo
                        </motion.h2>

                        <motion.p
                            className="font-sans text-base text-darkBrown mb-6"
                            variants={itemVariants}
                        >
                            Putra dari Bpk. Supriyadi A. & Bunda Reni Dwi H.
                        </motion.p>

                        <motion.p
                            className="text-darkBrown text-sm leading-relaxed"
                            variants={itemVariants}
                        >
                            Assalamu'alaikum Wr. Wb. Tanpa mengurangi rasa hormat kami bermaksud mengundang Bapak/Ibu/Saudara/i pada acara syukuran khitan anak kami.
                        </motion.p>
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