"use client";

import Image from "next/image";
import { ShieldCheck, Sun, Landmark, BadgePercent } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Sun,
    title: "UV Protection",
    description:
      "Block 99% of the sun's harmful UV rays, protecting your family and preserving your furniture, floors, and upholstery from fading.",
  },
  {
    icon: ShieldCheck,
    title: "Fade Prevention",
    description:
      "Our films provide solutions for fading furniture, floors, and upholstery — keeping your interiors looking new for years to come.",
  },
  {
    icon: Landmark,
    title: "Historic Preservation",
    description:
      "We help preserve history in the Jersey Shore area by tinting historical landmarks, museums, and more with protective window films.",
  },
  {
    icon: BadgePercent,
    title: "Military & First Responder Discount",
    description:
      "We are proud to offer current military, veterans, and police officers a discount on all window tinting. Thank you for your service.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative h-96 lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/gallery-1.jpg"
                alt="Interior dining room with tinted windows overlooking the ocean"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Content Side */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-ocean-600 font-semibold text-sm uppercase tracking-widest">
                Why Choose Us
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-serif font-bold text-slate-900">
                Protect What Matters Most
              </h2>
              <p className="mt-4 text-lg text-slate-500">
                Our films provide solutions that go beyond aesthetics — they
                protect your health, your investments, and the history of the
                Jersey Shore.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mt-10 space-y-6"
            >
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    variants={itemVariants}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-ocean-100 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-ocean-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {benefit.title}
                      </h3>
                      <p className="mt-1 text-slate-500 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
