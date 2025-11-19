import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/MscgRj2doJR2RRa2/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/40 to-slate-950"></div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            World-class beans • Single origin • Roasted daily
          </div>

          <h1 className="mt-6 text-5xl sm:text-6xl font-black tracking-tight text-white drop-shadow-2xl">
            The best coffee in the world
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-slate-200/90">
            Discover bold flavors, silky textures, and the craft behind every cup. Sourced ethically, roasted to perfection, served with love.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#menu" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 font-semibold px-6 py-3 shadow-lg hover:shadow-amber-500/20 hover:-translate-y-0.5 transition">
              Explore Menu
            </a>
            <a href="#story" className="inline-flex items-center justify-center rounded-xl border border-white/15 text-white px-6 py-3 backdrop-blur bg-white/5 hover:bg-white/10 transition">
              Our Story
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
