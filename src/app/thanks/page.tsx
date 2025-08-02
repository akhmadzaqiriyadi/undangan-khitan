'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function ThanksPage() {
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
                    {/* Background Pattern */}
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
                        className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-8 mx-4 border border-white/20 shadow-2xl text-center max-w-sm"
                        variants={itemVariants}
                    >
                        <motion.h1 
                            className="font-playfair text-4xl font-bold mb-6 text-amber-900"
                            variants={itemVariants}
                        >
                            Terima Kasih
                        </motion.h1>

                        <motion.p 
                            className="font-poppins text-base leading-relaxed text-amber-800 mb-8"
                            variants={itemVariants}
                        >
                            Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila
                            teman-teman berkenan hadir dan memberikan do'a restu.
                        </motion.p>

                        <motion.div 
                            className="space-y-2"
                            variants={itemVariants}
                        >
                            <p className="font-playfair text-lg font-semibold text-amber-900">
                                Hormat Kami,
                            </p>
                            <p className="font-playfair text-xl font-bold text-amber-900 leading-tight">
                                Bpk. Supriyadi Arramdani<br />
                                & Bunda Reni Dwi Hastuti
                            </p>
                        </motion.div>

                        {/* Music Credit */}
                        <motion.div 
                            className="mt-8 pt-6 border-t border-amber-200/30"
                            variants={itemVariants}
                        >
                            <p className="font-poppins text-xs text-amber-700/80">
                                ♪ Mohamed Youssef - Al Hijratu ♪
                            </p>
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
                </motion.div>
            )}
        </AnimatePresence>
    );
}