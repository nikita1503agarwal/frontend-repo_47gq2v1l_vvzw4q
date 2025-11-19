import { motion } from "framer-motion";
import { Bean, CupSoda, Heart, Leaf } from "lucide-react";

const features = [
  {
    icon: Bean,
    title: "Single-Origin Beans",
    desc: "Hand-picked from high-altitude farms with traceable origins.",
  },
  {
    icon: Leaf,
    title: "Ethically Sourced",
    desc: "We partner directly with growers for fair pay and sustainable farming.",
  },
  {
    icon: CupSoda,
    title: "Signature Brews",
    desc: "From velvety flat whites to adventurous cold brews, tailored to your taste.",
  },
  {
    icon: Heart,
    title: "Community First",
    desc: "Your neighborhood hub for warmth, creativity, and connection.",
  },
];

export default function Features() {
  return (
    <section id="craft" className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_circle_at_0_0,rgba(251,191,36,0.08),transparent_40%),radial-gradient(600px_circle_at_100%_100%,rgba(244,114,182,0.08),transparent_40%)]"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            Crafted with obsession
          </motion.h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">
            Every step matters — from bean to brew. We obsess over the details so every sip sings.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 hover:-translate-y-1 transition"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/20">
                <f.icon className="w-5 h-5 text-slate-900" />
              </div>
              <h3 className="mt-4 text-white font-semibold">{f.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
