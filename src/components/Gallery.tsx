"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const galleryImages = [
  { src: "/images/gallery-1.jpg", alt: "Dining room with ocean view through tinted windows" },
  { src: "/images/gallery-2.jpg", alt: "Window tinting on a residential property" },
  { src: "/images/gallery-3.jpg", alt: "Tinted windows on a large home exterior" },
  { src: "/images/gallery-4.jpg", alt: "Conservatory window tinting project" },
  { src: "/images/gallery-5.jpg", alt: "Decorative window film installation" },
  { src: "/images/gallery-6.jpg", alt: "Commercial building window tinting" },
  { src: "/images/gallery-7.jpg", alt: "Residential window film close-up" },
  { src: "/images/gallery-8.jpg", alt: "Large home with tinted windows" },
  { src: "/images/gallery-9.jpg", alt: "Completed window tinting project" },
  { src: "/images/gallery-10.jpg", alt: "Interior view of tinted windows" },
  { src: "/images/gallery-11.jpg", alt: "Window tinting on shore home" },
  { src: "/images/gallery-12.jpg", alt: "Professional tinting result" },
  { src: "/images/gallery-13.jpg", alt: "UV protection window film" },
  { src: "/images/gallery-14.jpg", alt: "Residential tinting project" },
  { src: "/images/gallery-15.jpg", alt: "Conservatory with tinted glass panels" },
  { src: "/images/gallery-16.jpg", alt: "Window film on historic property" },
  { src: "/images/gallery-17.jpg", alt: "Shore home window tinting" },
  { src: "/images/gallery-18.jpg", alt: "Commercial window film project" },
  { src: "/images/gallery-19.jpg", alt: "Privacy film installation" },
  { src: "/images/gallery-20.jpg", alt: "Tinted windows on luxury home" },
  { src: "/images/gallery-21.jpg", alt: "Window film exterior view" },
  { src: "/images/gallery-22.jpg", alt: "Residential window tinting project" },
  { src: "/images/gallery-23.jpg", alt: "Professional installation result" },
  { src: "/images/gallery-24.jpg", alt: "Completed tinting on coastal property" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
};

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % galleryImages.length);
    }
  };

  const goPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        (lightboxIndex - 1 + galleryImages.length) % galleryImages.length
      );
    }
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-ocean-600 font-semibold text-sm uppercase tracking-widest">
            Our Work
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-serif font-bold text-slate-900">
            Project Gallery
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Browse our portfolio of residential and commercial window tinting
            projects across the Jersey Shore.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          {galleryImages.map((image, index) => (
            <motion.button
              key={image.src}
              variants={itemVariants}
              onClick={() => openLightbox(index)}
              className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-ocean-900/0 group-hover:bg-ocean-900/30 transition-colors duration-300" />
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 text-white/70 hover:text-white transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Previous */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-4 z-10 p-2 text-white/70 hover:text-white transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-[90vw] h-[80vh] max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].alt}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </motion.div>

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-4 z-10 p-2 text-white/70 hover:text-white transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">
              {lightboxIndex + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
