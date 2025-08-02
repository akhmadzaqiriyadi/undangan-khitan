'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, CheckCircle } from 'lucide-react';

export default function GiftPage() {
    const [isVisible, setIsVisible] = useState(false);
    const [copiedText, setCopiedText] = useState('');

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopiedText(text);
        setTimeout(() => setCopiedText(''), 2000);
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

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6
            }
        },
        hover: {
            scale: 1.02,
            transition: {
                duration: 0.2
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
                        className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-2xl text-center m-4"
                        variants={itemVariants}
                    >
                        <motion.h1
                            className="font-display text-3xl font-bold mb-6 text-darkBrown"
                            variants={itemVariants}
                        >
                            Amplop Digital
                        </motion.h1>

                        <motion.p
                            className="font-sans text-base leading-relaxed text-darkBrown mb-8 opacity-90"
                            variants={itemVariants}
                        >
                            Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Dan jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless.
                        </motion.p>

                        {/* Payment Methods - 2 Rows */}
                        <motion.div
                            className="space-y-3"
                            variants={itemVariants}
                        >
                            {/* BSI Account */}
                            <motion.div
                                className="bg-white/20 backdrop-blur-sm p-4 rounded-lg border border-white/30 shadow-lg text-darkBrown"
                                variants={cardVariants}
                                whileHover="hover"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 relative flex-shrink-0">
                                        <Image
                                            src="/images/Bsi.png"
                                            alt="BSI Logo"
                                            width={48}
                                            height={48}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    
                                    <div className="flex-1 text-left">
                                        <h2 className="font-semibold text-sm mb-1">Bank Syariah Indonesia</h2>
                                        <p className="font-bold text-base">7152307599</p>
                                        <p className="text-xs opacity-90">a.n. Supriyadi Arramdani</p>
                                    </div>

                                    <motion.button
                                        onClick={() => copyToClipboard('7152307599')}
                                        className="px-3 py-2 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white rounded-full text-xs font-medium shadow-lg border border-yellow-500/30 flex items-center gap-1 flex-shrink-0"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {copiedText === '7152307599' ? (
                                            <>
                                                <CheckCircle size={14} />
                                                Tersalin!
                                            </>
                                        ) : (
                                            <>
                                                <Copy size={14} />
                                                Salin
                                            </>
                                        )}
                                    </motion.button>
                                </div>
                            </motion.div>

                            {/* ShopeePay */}
                            <motion.div
                                className="bg-white/20 backdrop-blur-sm p-4 rounded-lg border border-white/30 shadow-lg text-darkBrown"
                                variants={cardVariants}
                                whileHover="hover"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 relative flex-shrink-0">
                                        <Image
                                            src="/images/Spay.webp"
                                            alt="ShopeePay Logo"
                                            width={48}
                                            height={48}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    
                                    <div className="flex-1 text-left">
                                        <h2 className="font-semibold text-sm mb-1">ShopeePay</h2>
                                        <p className="font-bold text-base">Supri2552</p>
                                        <p className="text-xs opacity-90">Username ShopeePay</p>
                                    </div>

                                    <motion.button
                                        onClick={() => copyToClipboard('Supri2552')}
                                        className="px-3 py-2 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white rounded-full text-xs font-medium shadow-lg border border-yellow-500/30 flex items-center gap-1 flex-shrink-0"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {copiedText === 'Supri2552' ? (
                                            <>
                                                <CheckCircle size={14} />
                                                Tersalin!
                                            </>
                                        ) : (
                                            <>
                                                <Copy size={14} />
                                                Salin
                                            </>
                                        )}
                                    </motion.button>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="mt-6 p-4 bg-yellow-600/20 backdrop-blur-sm rounded-xl border border-yellow-600/30"
                            variants={itemVariants}
                        >
                            <p className="text-sm text-darkBrown opacity-90">
                                ❤️ Terima kasih atas doa dan hadiah yang diberikan
                            </p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}