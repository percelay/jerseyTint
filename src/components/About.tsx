"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const commitments = [
  "Certified professional installers",
  "100% customer satisfaction guarantee",
  "Reliable and friendly service",
  "Professional atmosphere",
  "Ready to answer all your questions",
  "Premium products from trusted brands",
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-ocean-600 font-semibold text-sm uppercase tracking-widest">
              Our Commitment
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-serif font-bold text-slate-900">
              Your Satisfaction Is Our Priority
            </h2>
            <p className="mt-6 text-lg text-slate-500 leading-relaxed">
              Striving to be reliable and friendly, maintaining a professional
              atmosphere for 100% customer satisfaction. Our certified installers
              are prepared to answer all your questions.
            </p>
            <p className="mt-4 text-lg text-slate-500 leading-relaxed">
              As authorized dealers of Vista, Llumar, Avery, and 3M Decorative
              films, we utilize only the finest products to deliver quality
              service you can trust.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {commitments.map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-ocean-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-slate-700">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            <a
              href="#quote"
              className="mt-10 inline-flex items-center px-8 py-4 bg-ocean-700 text-white font-semibold rounded-lg hover:bg-ocean-800 transition-colors shadow-md shadow-ocean-700/25"
            >
              Get a Free Estimate
            </a>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative h-96 lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/gallery-15.jpg"
                alt="Professional window tinting installation on a conservatory"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
