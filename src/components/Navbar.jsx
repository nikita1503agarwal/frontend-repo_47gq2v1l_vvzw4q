import { Menu, Coffee, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-40">
      <div className="backdrop-blur-md bg-slate-900/40 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            <motion.a
              href="#"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <div className="bg-gradient-to-br from-amber-400 to-orange-600 p-2 rounded-xl shadow-lg shadow-amber-500/20">
                <Coffee className="w-5 h-5 text-slate-900" />
              </div>
              <span className="text-white font-semibold tracking-tight text-lg">
                Aurora Coffee
              </span>
            </motion.a>

            <div className="hidden md:flex items-center gap-8 text-sm">
              <a href="#menu" className="text-slate-300 hover:text-white transition-colors">Menu</a>
              <a href="#story" className="text-slate-300 hover:text-white transition-colors">Our Story</a>
              <a href="#craft" className="text-slate-300 hover:text-white transition-colors">Craft</a>
              <a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="tel:+123456789"
                className="hidden sm:flex items-center gap-2 text-amber-300 hover:text-amber-200 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">Order</span>
              </a>
              <button className="inline-flex md:hidden items-center justify-center w-9 h-9 rounded-xl border border-white/10 text-slate-200 hover:bg-white/5">
                <Menu className="w-5 h-5" />
              </button>
              <a
                href="#order"
                className="hidden md:inline-block bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 text-slate-900 font-semibold px-4 py-2 rounded-xl shadow-lg shadow-amber-500/20 hover:opacity-95 transition"
              >
                Order Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
