"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ImageModalProps {
    isOpen: boolean;
    onClose: () => void;
    src: string | null;
    alt: string;
}

export function ImageModal({ isOpen, onClose, src, alt }: ImageModalProps) {
    return (
        <AnimatePresence>
            {isOpen && src && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative overflow-hidden rounded-lg shadow-2xl"
                    >
                        <button
                            onClick={onClose}
                            className="absolute right-2 top-2 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors"
                        >
                            <X className="h-5 w-5" />
                            <span className="sr-only">Close</span>
                        </button>
                        <img
                            src={src}
                            alt={alt}
                            className="max-h-[85vh] max-w-full object-contain"
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
