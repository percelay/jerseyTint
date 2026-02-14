"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

const towns = [
  "LBI (Long Beach Island)",
  "Brigantine",
  "Margate",
  "Longport",
  "Ocean City",
  "Sea Isle City",
  "Avalon",
  "Stone Harbor",
  "Cape May",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export default function ServiceArea() {
  return (
    <section id="service-areas" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/beach-sunset.jpeg"
          alt="Jersey Shore beachfront homes at sunset"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ocean-950/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-ocean-300 font-semibold text-sm uppercase tracking-widest">
            Where We Work
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-serif font-bold text-white">
            Serving the NJ Shore Points & Beyond
          </h2>
          <p className="mt-4 text-lg text-ocean-200/70">
            From Long Beach Island to Cape May, we bring professional window
            tinting services to the entire Jersey Shore coastline.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 max-w-3xl mx-auto"
        >
          {towns.map((town) => (
            <motion.div
              key={town}
              variants={itemVariants}
              className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-4 hover:bg-white/10 transition-colors"
            >
              <MapPin className="w-5 h-5 text-ocean-400 flex-shrink-0" />
              <span className="text-sm font-medium text-white">{town}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* ============================================= */}
        {/* IMAGE PLACEHOLDER: Map / Service Area Visual   */}
        {/* Recommended: Stylized map of the NJ Shore      */}
        {/* showing service area coverage, or aerial photo  */}
        {/* Dimensions: 800x400                            */}
        {/* Could replace the grid above or sit below it    */}
        {/* ============================================= */}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-10 text-ocean-300 text-sm"
        >
          Don&apos;t see your town? We likely serve your area too —{" "}
          <a
            href="tel:6098508468"
            className="underline underline-offset-2 hover:text-white transition-colors"
          >
            call us to check
          </a>
          .
        </motion.p>
      </div>
    </section>
  );
}
