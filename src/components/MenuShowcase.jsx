import { motion } from "framer-motion";

const items = [
  {
    name: "Aurora Latte",
    desc: "Silky microfoam with caramel notes",
    price: "$5.20",
    img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1200&auto=format&fit=crop",
    tint: "from-amber-400/20 to-orange-600/20",
  },
  {
    name: "Midnight Cold Brew",
    desc: "Slow-steeped, chocolate finish",
    price: "$4.80",
    img: "https://images.unsplash.com/photo-1494314671902-399b18174975?q=80&w=1200&auto=format&fit=crop",
    tint: "from-cyan-400/20 to-indigo-600/20",
  },
  {
    name: "Cardamom Flat White",
    desc: "Spiced aroma, velvety body",
    price: "$5.60",
    img: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1200&auto=format&fit=crop",
    tint: "from-rose-400/20 to-fuchsia-600/20",
  },
];

export default function MenuShowcase() {
  return (
    <section id="menu" className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Signature menu</h2>
            <p className="mt-2 text-slate-300 max-w-xl">Fan favorites designed by our head roaster. Seasonal and made to order.</p>
          </div>
          <a href="#order" className="hidden sm:inline-flex rounded-xl border border-white/15 px-4 py-2 text-white/90 hover:bg-white/10 transition">View Full Menu</a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
            >
              <div className="absolute inset-0">
                <img src={it.img} alt={it.name} className="w-full h-full object-cover" />
                <div className={`absolute inset-0 bg-gradient-to-br ${it.tint}`}></div>
                <div className="absolute inset-0 bg-slate-950/40"></div>
              </div>
              <div className="relative z-10 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold text-lg">{it.name}</h3>
                  <span className="text-amber-300 font-semibold">{it.price}</span>
                </div>
                <p className="mt-1 text-slate-200/90 text-sm">{it.desc}</p>
                <button className="mt-4 inline-flex rounded-lg bg-white text-slate-900 text-sm font-semibold px-3 py-2 hover:opacity-95">Add to order</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
