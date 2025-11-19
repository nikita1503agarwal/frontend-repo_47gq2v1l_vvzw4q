import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import MenuShowcase from "./components/MenuShowcase";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      <Features />
      <MenuShowcase />
      <CTA />
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Aurora Coffee — Crafted with love and caffeine.
        </div>
      </footer>
    </div>
  );
}

export default App;
