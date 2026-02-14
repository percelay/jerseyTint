"use client";

import { Home, Ship, Sparkles, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Home,
    title: "Residential Window Tinting",
    description:
      "Protect your home from harmful UV rays and reduce glare with our premium residential window films. We use Vista, Llumar, Avery, and 3M products for lasting quality.",
  },
  {
    icon: Ship,
    title: "Boat & Marine Tinting",
    description:
      "Keep your vessel cool and protected on the water. Our marine-grade window films are designed to withstand the harsh coastal environment.",
  },
  {
    icon: Sparkles,
    title: "Decorative Films",
    description:
      "Transform your space with decorative window films. Choose from blackout films, opaque privacy films, and decorative designs for any aesthetic.",
  },
  {
    icon: Building2,
    title: "Commercial Window Film",
    description:
      "Reduce energy costs and create a comfortable work environment. We provide commercial window film solutions for offices, storefronts, and more.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-ocean-600 font-semibold text-sm uppercase tracking-widest">
            Our Services
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-serif font-bold text-slate-900">
            Professional Window Film Solutions
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Authorized dealer of Vista, Llumar, Avery, and 3M Decorative films.
            We utilize the finest products to provide quality service in
            commercial and residential window film.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="group relative bg-slate-50 rounded-2xl p-8 hover:bg-ocean-700 transition-colors duration-300 cursor-default"
              >
                <div className="w-14 h-14 rounded-xl bg-ocean-100 group-hover:bg-ocean-600 flex items-center justify-center mb-6 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-ocean-700 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-white mb-3 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-500 group-hover:text-ocean-100 leading-relaxed transition-colors duration-300">
                  {service.description}
                </p>

                {/* ============================================= */}
                {/* IMAGE PLACEHOLDER: Service Card Image          */}
                {/* Recommended: Photo relevant to each service    */}
                {/* e.g., tinted home window, boat, decorative     */}
                {/* Dimensions: 400x300                            */}
                {/* Add <Image> above the icon if desired          */}
                {/* ============================================= */}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
