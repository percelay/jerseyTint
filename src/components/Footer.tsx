import { Phone, MapPin, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-ocean-700 flex items-center justify-center">
                <span className="text-white font-bold text-sm">JS</span>
              </div>
              <div className="leading-tight">
                <span className="block text-base font-bold text-white">
                  Jersey Shore
                </span>
                <span className="block text-xs text-slate-500 uppercase tracking-widest">
                  Window Tinting
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Your source for residential home window tinting at the Jersey
              Shore. Clean, affordable, quality window film installations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-white transition-colors">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#service-areas" className="hover:text-white transition-colors">
                  Service Areas
                </a>
              </li>
              <li>
                <a href="#quote" className="hover:text-white transition-colors">
                  Get a Quote
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:6098508468"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  609-850-8468
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  353 East 46th Place
                  <br />
                  Sea Isle City, NJ 08243
                </span>
              </li>
            </ul>
          </div>

          {/* Social & Service Areas */}
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3 mb-6">
              {/* ============================================= */}
              {/* Replace # with actual social media URLs        */}
              {/* ============================================= */}
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-ocean-700 transition-colors"
              >
                <Facebook className="w-5 h-5 text-slate-400 hover:text-white" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-ocean-700 transition-colors"
              >
                <Instagram className="w-5 h-5 text-slate-400 hover:text-white" />
              </a>
            </div>
            <h4 className="text-white font-semibold mb-2 text-sm">Areas Served</h4>
            <p className="text-xs leading-relaxed">
              LBI, Brigantine, Margate, Longport, Ocean City, Sea Isle City,
              Avalon, Stone Harbor, Cape May & beyond.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {currentYear} Jersey Shore Window Tinting. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Authorized dealer of Vista, Llumar, Avery & 3M films.
          </p>
        </div>
      </div>
    </footer>
  );
}
