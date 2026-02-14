"use client";

import { Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-20">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-ocean-900 via-ocean-800 to-slate-900">
        {/* ============================================= */}
        {/* IMAGE PLACEHOLDER: Hero Background            */}
        {/* Recommended: Wide shot of a coastal home with */}
        {/* tinted windows, or Jersey Shore beachfront     */}
        {/* Dimensions: 1920x1080 minimum                  */}
        {/* Replace this div with <Image> component        */}
        {/* ============================================= */}
        <div className="absolute inset-0 bg-[url('/placeholder-hero.jpg')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/80 via-ocean-900/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-ocean-500/20 border border-ocean-400/30 text-ocean-200 text-sm font-medium rounded-full mb-6">
              Authorized Vista, Llumar, Avery & 3M Dealer
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
              Professional Window Tinting at the{" "}
              <span className="text-ocean-300">Jersey Shore</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
              Your source for residential home window tinting at the Jersey Shore.
              We offer a variety of clean, affordable, quality window film
              installations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-ocean-500 text-white font-semibold rounded-lg hover:bg-ocean-400 transition-colors shadow-lg shadow-ocean-500/30 text-lg"
            >
              Request a Free Quote
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:6098508468"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors text-lg"
            >
              <Phone className="w-5 h-5" />
              609-850-8468
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 40L48 36C96 32 192 24 288 28C384 32 480 48 576 52C672 56 768 48 864 40C960 32 1056 24 1152 28C1248 32 1344 48 1392 56L1440 64V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0V40Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
