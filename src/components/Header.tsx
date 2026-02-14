"use client";

import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Benefits", href: "#benefits" },
  { label: "About", href: "#about" },
  { label: "Service Areas", href: "#service-areas" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-ocean-700 flex items-center justify-center">
              <span className="text-white font-bold text-sm">JS</span>
            </div>
            <div className="leading-tight">
              <span className="block text-lg font-bold text-ocean-900 tracking-tight">
                Jersey Shore
              </span>
              <span className="block text-xs text-slate-500 uppercase tracking-widest -mt-0.5">
                Window Tinting
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-ocean-700 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:6098508468"
              className="hidden sm:flex items-center gap-2 text-sm font-medium text-ocean-700 hover:text-ocean-800 transition-colors"
            >
              <Phone className="w-4 h-4" />
              609-850-8468
            </a>
            <a
              href="#quote"
              className="hidden sm:inline-flex items-center px-5 py-2.5 bg-ocean-700 text-white text-sm font-semibold rounded-lg hover:bg-ocean-800 transition-colors shadow-md shadow-ocean-700/25"
            >
              Request a Quote
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-ocean-700"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <nav className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-slate-700 hover:bg-ocean-50 hover:text-ocean-700 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-100 space-y-2">
                <a
                  href="tel:6098508468"
                  className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-ocean-700"
                >
                  <Phone className="w-4 h-4" />
                  609-850-8468
                </a>
                <a
                  href="#quote"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center px-4 py-3 bg-ocean-700 text-white text-sm font-semibold rounded-lg"
                >
                  Request a Quote
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
