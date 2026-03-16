import React from 'react';
import {
  Search,
  User,
  ShoppingCart,
  Target,
  Triangle,
  Layers,
  Compass,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-neo-bg text-[#111] p-4 md:p-8 font-sans selection:bg-neo-blue selection:text-white">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="street-grid absolute inset-0" />
        <div className="street-glow street-glow-1" />
        <div className="street-glow street-glow-2" />
        <div className="street-scanlines absolute inset-0" />
      </div>

      <div className="relative mx-auto max-w-[1600px]">
        <div className="mb-5 overflow-hidden border-y-2 border-black bg-black text-[10px] font-black uppercase tracking-[0.45em] text-white md:text-xs">
          <div className="street-marquee py-2 whitespace-nowrap">
            NEO-STREET / DISTRICT_09 / STREETWEAR SYSTEM / GLITCH MODE / URBAN ARMOR / SIGNAL ONLINE /
          </div>
        </div>

        <header className="relative mb-10 border-2 border-black bg-white/40 p-4 shadow-[8px_8px_0_#111] backdrop-blur-[2px] md:mb-14 md:p-6">
          <div className="absolute -left-2 top-5 h-16 w-1.5 bg-neo-blue md:h-24" />
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1.1fr)_auto] xl:items-start">
            <div className="max-w-[920px]">
              <div className="mb-3 flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-[0.35em] text-black/70 md:text-xs">
                <span className="border border-black px-2 py-1">Drop 03</span>
                <span className="border border-black px-2 py-1">Neo District</span>
                <span className="border border-neo-blue bg-neo-blue px-2 py-1 text-white">Street Override</span>
              </div>

              <div className="hero-lockup relative inline-block">
                <h1 className="hero-title flex flex-wrap items-end gap-x-2 gap-y-0 leading-[0.82]">
                  <span className="text-neo-blue font-stencil">NEO</span>
                  <span className="text-gray-950 font-display">STREET</span>
                </h1>
                <div className="hero-slash" />
              </div>

              <p className="mt-4 max-w-[760px] text-base font-black uppercase leading-snug tracking-[0.18em] md:text-xl">
                The future of urban armor with louder attitude, sharper motion and a proper top-aligned header.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 border-2 border-black bg-neo-blue px-4 py-3 text-sm font-black uppercase tracking-[0.22em] text-white transition-transform duration-300 hover:-translate-y-1"
                >
                  Explore the grid <ArrowUpRight size={18} strokeWidth={3} />
                </a>
                <a
                  href="#new-arrivals"
                  className="inline-flex items-center gap-2 border-2 border-black bg-white px-4 py-3 text-sm font-black uppercase tracking-[0.22em] transition-transform duration-300 hover:-translate-y-1"
                >
                  Enter Drop <Sparkles size={16} strokeWidth={3} />
                </a>
              </div>
            </div>

            <nav className="flex flex-wrap items-start justify-start gap-x-6 gap-y-4 pt-1 text-sm font-black uppercase tracking-[0.3em] xl:max-w-[450px] xl:justify-end">
              <a href="#" className="street-link">Shop</a>
              <a href="#" className="street-link">Collections</a>
              <a href="#" className="street-link">Studio</a>
              <a href="#" className="street-link">Journal</a>
              <a href="#" className="street-link">Archive</a>
              <div className="flex items-center gap-4 text-neo-blue xl:ml-3">
                <button className="street-icon"><Search size={20} strokeWidth={3} /></button>
                <button className="street-icon"><User size={20} strokeWidth={3} /></button>
                <button className="street-icon"><ShoppingCart size={20} strokeWidth={3} /></button>
              </div>
            </nav>
          </div>
        </header>

        <main className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="street-panel p-5">
              <h2 className="text-xl font-black uppercase tracking-[0.28em]">Categories</h2>
              <div className="mt-6 flex flex-col gap-8">
                <CategoryItem number="74" label="Techwear" />
                <CategoryItem number="38" label="Graphic Tees" />
                <CategoryItem number="113" label="Utility Belts" />
                <CategoryItem number="67" label="Footwear" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="street-card street-card-dark relative w-full min-h-[520px] overflow-hidden cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop"
                alt="System Core Philosophy"
                className="absolute inset-0 h-full w-full object-cover grayscale contrast-125 opacity-75 transition-all duration-700 group-hover:scale-105"
              />
              <div className="street-photo-noise absolute inset-0" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,0,0,0.75))]" />

              <div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="max-w-[85%] text-3xl font-black uppercase leading-none text-white md:text-4xl">
                    System Core Philosophy
                  </h3>
                  <span className="rotate-[-6deg] border border-white/40 px-2 py-1 text-[10px] font-mono text-white/80">
                    SEC.01
                  </span>
                </div>

                <div className="relative mt-10 aspect-square max-h-[310px] w-full border border-white/20 bg-black/20 backdrop-blur-[1px]">
                  <div className="absolute left-0 top-0 h-2 w-2 bg-white" />
                  <div className="absolute bottom-0 right-0 h-1 w-8 bg-neo-blue" />
                  <div className="absolute left-0 top-1/2 h-px w-full bg-white/20" />
                  <div className="absolute left-1/2 top-0 h-full w-px bg-white/20" />
                  <div className="absolute inset-[10%] border border-white/10" />
                  <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
                    <line x1="0" y1="0" x2="100%" y2="100%" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
                    <line x1="100%" y1="15%" x2="15%" y2="100%" stroke="rgba(26,54,246,0.55)" strokeWidth="1" />
                  </svg>
                  <div className="absolute bottom-4 left-4 text-[11px] font-mono uppercase tracking-[0.3em] text-white/60">
                    Motion / utility / resistance
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col gap-8">
            <div className="street-card relative aspect-[16/9] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1523398002811-999aa8d9512e?q=80&w=1400&auto=format&fit=crop"
                alt="Techwear Model"
                className="h-full w-full object-cover grayscale transition-all duration-700 hover:scale-105 hover:grayscale-0"
              />
              <div className="street-photo-noise absolute inset-0" />
              <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(0,0,0,0.0),rgba(0,0,0,0.38))]" />
              <div className="pointer-events-none absolute left-4 top-4 flex flex-col gap-1">
                <div className="h-1 w-10 bg-neo-blue" />
                <div className="bg-black/65 px-2 py-1 text-[10px] font-mono font-bold uppercase tracking-[0.28em] text-white">
                  SYS.INIT // 89.04
                </div>
              </div>
              <div className="pointer-events-none absolute bottom-4 right-4 text-right text-[10px] font-mono font-bold uppercase tracking-[0.28em] text-white">
                <div className="bg-neo-blue px-2 py-1 text-white">V3.1.2_ALPHA</div>
                <div className="mt-1 bg-black/70 px-2 py-1">OVERRIDE_ENGAGED</div>
              </div>
              <div className="glitch-bar absolute left-0 top-[30%] h-2 w-1/2 bg-white/80 mix-blend-overlay" />
              <div className="glitch-bar glitch-bar-delay absolute right-0 top-[54%] h-4 w-1/3 bg-neo-blue/50 mix-blend-screen" />
              <div className="absolute -bottom-2 left-6 border-2 border-black bg-white px-3 py-2 text-[11px] font-black uppercase tracking-[0.3em] shadow-[4px_4px_0_#111]">
                Street signal / live
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              <FeatureBox icon={<Target className="h-8 w-8" />} label="Precision Engineering" />
              <FeatureBox icon={<Triangle className="h-8 w-8" />} label="Subtle Dominance" />
              <FeatureBox icon={<Layers className="h-8 w-8" />} label="Material Integration" />
              <FeatureBox icon={<Compass className="h-8 w-8" />} label="Form Follows Function" />
            </div>

            <div id="new-arrivals" className="street-panel p-5 md:p-6">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
                <h3 className="text-xl font-black uppercase tracking-[0.28em]">New Arrivals V3</h3>
                <span className="border border-black px-2 py-1 text-[10px] font-mono uppercase tracking-[0.3em]">drop_ready</span>
              </div>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                <ProductCard
                  image="https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=400&auto=format&fit=crop"
                  name="Technical Jacket"
                  price="$350"
                />
                <ProductCard
                  image="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=400&auto=format&fit=crop"
                  name="Oversized Graphic T-Shirt"
                  price="$120"
                />
                <ProductCard
                  image="https://images.unsplash.com/photo-1628891435222-06592ce39f15?q=80&w=400&auto=format&fit=crop"
                  name="Modular Utility Belt"
                  price="$180"
                  contain
                />
                <ProductCard
                  image="https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=400&auto=format&fit=crop"
                  name="Chunky Platform Boots"
                  price="$420"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function CategoryItem({ number, label }: { number: string; label: string }) {
  return (
    <div className="group flex cursor-pointer items-center gap-4">
      <span className="text-6xl font-stencil text-neo-blue transition-transform duration-300 origin-left group-hover:scale-110 md:text-7xl">
        {number}
      </span>
      <span className="max-w-[110px] text-lg font-black uppercase leading-none tracking-tight md:text-xl">
        {label}
      </span>
    </div>
  );
}

function FeatureBox({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="street-feature group aspect-square cursor-pointer p-4">
      <div className="text-neo-blue transition-transform duration-300 origin-top-left group-hover:scale-110">{icon}</div>
      <span className="mt-4 text-xs font-black uppercase leading-tight tracking-[0.18em]">{label}</span>
    </div>
  );
}

function ProductCard({ image, name, price, contain = false }: { image: string; name: string; price: string; contain?: boolean }) {
  return (
    <div className="group flex cursor-pointer flex-col">
      <div className="street-product mb-3 aspect-square overflow-hidden p-2">
        <img
          src={image}
          alt={name}
          className={`h-full w-full ${contain ? 'object-contain' : 'object-cover'} mix-blend-multiply transition-transform duration-500 group-hover:scale-110`}
        />
      </div>
      <div className="flex items-start justify-between gap-2">
        <span className="text-xs font-black uppercase leading-tight tracking-[0.14em]">{name}</span>
        <span className="text-xs font-black text-neo-blue">{price}</span>
      </div>
    </div>
  );
}
