"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Quote() {
  return (
    <section id="quote" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-ocean-600 font-semibold text-sm uppercase tracking-widest">
            Get Started
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-serif font-bold text-slate-900">
            Request a Free Quote
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Ready to protect your home or business? Reach out today for a free,
            no-obligation estimate.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 border border-slate-100">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-ocean-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-ocean-700" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Call Us Directly</h3>
                  <a
                    href="tel:6098508468"
                    className="text-xl font-semibold text-ocean-700 hover:text-ocean-800 transition-colors"
                  >
                    609-850-8468
                  </a>
                  <p className="text-sm text-slate-400 mt-1">
                    Available for calls and texts
                  </p>
                </div>
              </div>

              <hr className="border-slate-100" />

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-ocean-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-ocean-700" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Email Us</h3>
                  <p className="text-slate-500">
                    Send us details about your project and we&apos;ll get back to
                    you with a quote.
                  </p>
                </div>
              </div>

              <hr className="border-slate-100" />

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-ocean-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-ocean-700" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Visit Us</h3>
                  <p className="text-slate-500">
                    353 East 46th Place
                    <br />
                    Sea Isle City, NJ 08243
                  </p>
                </div>
              </div>
            </div>

            <a
              href="tel:6098508468"
              className="mt-8 w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-ocean-700 text-white font-semibold rounded-lg hover:bg-ocean-800 transition-colors shadow-md shadow-ocean-700/25 text-lg"
            >
              <Phone className="w-5 h-5" />
              Call Now for a Free Quote
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
