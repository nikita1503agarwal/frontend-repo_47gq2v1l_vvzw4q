import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="contact" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(500px_circle_at_80%_20%,rgba(251,191,36,0.07),transparent_40%)]"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 backdrop-blur">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white">Visit us today</h3>
              <p className="mt-2 text-slate-300">Open daily 7am – 8pm • 123 Brew St, Roastery District</p>
              <div className="mt-4 text-slate-200">
                <p>Fresh roasts every morning. Indoor and patio seating. Pets welcome.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
              <a href="https://maps.google.com" target="_blank" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 font-semibold px-6 py-3 shadow-lg hover:-translate-y-0.5 transition">Get Directions</a>
              <a href="tel:+123456789" className="inline-flex items-center justify-center rounded-xl border border-white/15 text-white px-6 py-3 backdrop-blur bg-white/5 hover:bg-white/10 transition">Call Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
