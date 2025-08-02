'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function GalleryPage() {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Data gambar galeri
    const photos = [
        { id: 1, src: '/images/galery1.jpeg', alt: 'Galeri Foto 1', title: 'Galeri 1' },
        { id: 2, src: '/images/galery2.jpeg', alt: 'Galeri Foto 2', title: 'Galeri 2' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.2,
                delayChildren: 0.3
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

    const photoVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6
            }
        },
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.3
            }
        }
    };

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.3
            }
        },
        exit: {
            opacity: 0,
            scale: 0.5,
            transition: {
                duration: 0.3
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
                        className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-6 mx-6 border border-white/20 shadow-2xl text-center max-w-xs w-full"
                        variants={itemVariants}
                    >
                        <motion.h1
                            className="font-display text-2xl font-bold mb-4 text-darkBrown"
                            variants={itemVariants}
                        >
                            Galeri Foto
                        </motion.h1>

                        <motion.p
                            className="font-sans text-sm leading-relaxed text-darkBrown mb-6 opacity-90"
                            variants={itemVariants}
                        >
                            Momen-momen berharga acara khitan Aufar Alif Al Kenzo
                        </motion.p>

                        {/* Gallery Grid */}
                        <motion.div
                            className="space-y-3 w-3/4 mx-auto"
                            variants={itemVariants}
                        >
                            {photos.map((photo, index) => (
                                <motion.div
                                    key={photo.id}
                                    className={`relative w-full bg-white/20 backdrop-blur-sm rounded-lg  overflow-hidden shadow-lg border border-white/30 cursor-pointer ${
                                        index === 0 ? 'aspect-[3/3]' : 'aspect-video'
                                    }`}
                                    variants={photoVariants}
                                    whileHover="hover"
                                    onClick={() => setSelectedImage(index)}
                                >
                                    <Image
                                        src={photo.src}
                                        alt={photo.alt}
                                        layout="fill"
                                        objectFit="cover"
                                        className="transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-2 left-2 right-2">
                                            <p className="text-white text-xs font-medium">{photo.title}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Image Modal */}
                    <AnimatePresence>
                        {selectedImage !== null && (
                            <motion.div
                                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedImage(null)}
                            >
                                <motion.div
                                    className={`relative w-full bg-white rounded-2xl overflow-hidden shadow-2xl ${
                                        selectedImage === 0 ? 'max-w-lg aspect-[3/4]' : 'max-w-4xl aspect-video'
                                    }`}
                                    variants={modalVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <Image
                                        src={photos[selectedImage].src}
                                        alt={photos[selectedImage].alt}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                    <div className="absolute top-4 right-4">
                                        <button
                                            onClick={() => setSelectedImage(null)}
                                            className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-darkBrown hover:bg-white transition-colors"
                                        >
                                            ✕
                                        </button>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                        <h3 className="text-white font-semibold">{photos[selectedImage].title}</h3>
                                        <p className="text-white/80 text-sm">{photos[selectedImage].alt}</p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            )}
        </AnimatePresence>
    );
}