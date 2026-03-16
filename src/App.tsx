import React from "react";
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
  Shield,
  Radio,
  ScanLine,
  Flame,
  Clock3,
  Star,
  ChevronRight,
  Play,
  Headphones,
  Shirt,
  BadgeAlert,
} from "lucide-react";

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
            NEO-STREET / DISTRICT_09 / STREETWEAR SYSTEM / GLITCH MODE / URBAN
            ARMOR / SIGNAL ONLINE / NEO-STREET / DISTRICT_09 / STREETWEAR SYSTEM
            / GLITCH MODE / URBAN ARMOR / SIGNAL ONLINE /
          </div>
        </div>

        <header className="relative mb-10 border-2 border-black bg-white/40 p-4 shadow-[8px_8px_0_#111] backdrop-blur-[2px] md:mb-14 md:p-6">
          <div className="absolute -left-2 top-5 h-16 w-1.5 bg-neo-blue md:h-24" />
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1.1fr)_auto] xl:items-start">
            <div className="max-w-[920px]">
              <div className="mb-3 flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-[0.35em] text-black/70 md:text-xs">
                <span className="border border-black px-2 py-1">Drop 03</span>
                <span className="border border-black px-2 py-1">
                  Neo District
                </span>
                <span className="border border-neo-blue bg-neo-blue px-2 py-1 text-white">
                  Street Override
                </span>
              </div>

              <div className="hero-lockup relative inline-block">
                <h1 className="hero-title flex flex-wrap items-end gap-x-2 gap-y-0 leading-[0.82]">
                  <span className="text-neo-blue font-stencil">NEO</span>
                  <span className="text-gray-950 font-display">STREET</span>
                </h1>
                <div className="hero-slash" />
              </div>

              <p className="mt-4 max-w-[760px] text-base font-black uppercase leading-snug tracking-[0.18em] md:text-xl">
                The future of urban armor with louder attitude, sharper motion
                and a proper top-aligned header.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a
                  href="#collections"
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
              <a href="#shop" className="street-link">
                Shop
              </a>
              <a href="#collections" className="street-link">
                Collections
              </a>
              <a href="#studio" className="street-link">
                Studio
              </a>
              <a href="#journal" className="street-link">
                Journal
              </a>
              <a href="#archive" className="street-link">
                Archive
              </a>
              <div className="flex items-center gap-4 text-neo-blue xl:ml-3">
                <button className="street-icon">
                  <Search size={20} strokeWidth={3} />
                </button>
                <button className="street-icon">
                  <User size={20} strokeWidth={3} />
                </button>
                <button className="street-icon">
                  <ShoppingCart size={20} strokeWidth={3} />
                </button>
              </div>
            </nav>
          </div>
        </header>

        <section className="mb-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <SignalCard
            icon={<Shield className="h-6 w-6" />}
            title="Urban Protection"
            text="Reinforced silhouettes, layered texture and functional intent made for faster city movement."
          />
          <SignalCard
            icon={<Radio className="h-6 w-6" />}
            title="Signal Active"
            text="A visual language inspired by transit maps, warning systems, industrial labels and street coding."
          />
          <SignalCard
            icon={<ScanLine className="h-6 w-6" />}
            title="Glitch Identity"
            text="Hard contrast, scanning overlays and digital noise built into every screen block."
          />
        </section>

        <main className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-3 flex flex-col gap-6 min-w-0">
            <div className="street-panel p-5">
              <h2 className="text-xl font-black uppercase tracking-[0.28em]">
                Categories
              </h2>
              <div className="mt-6 flex flex-col gap-8">
                <CategoryItem number="74" label="Techwear" />
                <CategoryItem number="38" label="Graphic Tees" />
                <CategoryItem number="113" label="Utility Belts" />
                <CategoryItem number="67" label="Footwear" />
              </div>
            </div>

            <div className="street-panel p-5">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-sm font-black uppercase tracking-[0.28em]">
                  Live Feed
                </h3>
                <span className="h-2.5 w-2.5 rounded-full bg-neo-blue animate-pulse" />
              </div>
              <div className="mt-5 space-y-4">
                <FeedItem time="22:14" label="Drop 03 queued" />
                <FeedItem time="22:32" label="District scan complete" />
                <FeedItem time="23:08" label="Studio editorial live" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
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
                  <svg
                    className="absolute inset-0 h-full w-full"
                    preserveAspectRatio="none"
                  >
                    <line
                      x1="0"
                      y1="0"
                      x2="100%"
                      y2="100%"
                      stroke="rgba(255,255,255,0.25)"
                      strokeWidth="1"
                    />
                    <line
                      x1="100%"
                      y1="15%"
                      x2="15%"
                      y2="100%"
                      stroke="rgba(26,54,246,0.55)"
                      strokeWidth="1"
                    />
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
                src="https://i.pinimg.com/736x/0f/06/94/0f06940bf546e59f61c2b9ae3e5298e4.jpg"
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
                <div className="bg-neo-blue px-2 py-1 text-white">
                  V3.1.2_ALPHA
                </div>
                <div className="mt-1 bg-black/70 px-2 py-1">
                  OVERRIDE_ENGAGED
                </div>
              </div>
              <div className="glitch-bar absolute left-0 top-[30%] h-2 w-1/2 bg-white/80 mix-blend-overlay" />
              <div className="glitch-bar glitch-bar-delay absolute right-0 top-[54%] h-4 w-1/3 bg-neo-blue/50 mix-blend-screen" />
              <div className="absolute -bottom-2 left-6 border-2 border-black bg-white px-3 py-2 text-[11px] font-black uppercase tracking-[0.3em] shadow-[4px_4px_0_#111]">
                Street signal / live
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              <FeatureBox
                icon={<Target className="h-8 w-8" />}
                label="Precision Engineering"
              />
              <FeatureBox
                icon={<Triangle className="h-8 w-8" />}
                label="Subtle Dominance"
              />
              <FeatureBox
                icon={<Layers className="h-8 w-8" />}
                label="Material Integration"
              />
              <FeatureBox
                icon={<Compass className="h-8 w-8" />}
                label="Form Follows Function"
              />
            </div>

            <div id="new-arrivals" className="street-panel p-5 md:p-6">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
                <h3 className="text-xl font-black uppercase tracking-[0.28em]">
                  New Arrivals V3
                </h3>
                <span className="border border-black px-2 py-1 text-[10px] font-mono uppercase tracking-[0.3em]">
                  drop_ready
                </span>
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
                  image="https://img.ltwebstatic.com/v4/j/pi/2025/12/10/06/17653392369a1b8092a2be3a47ded596b4240c88ce_thumbnail_420x.webp"
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

        <section
          id="collections"
          className="mt-10 grid grid-cols-1 gap-8 xl:grid-cols-12"
        >
          <div className="xl:col-span-4">
            <div className="street-panel h-full p-6 md:p-8">
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="border border-black px-2 py-1 text-[10px] font-mono uppercase tracking-[0.3em]">
                  curated_systems
                </span>
                <Flame className="h-5 w-5 text-neo-blue" />
              </div>
              <h2 className="max-w-[12ch] text-3xl font-black uppercase leading-none md:text-4xl">
                Collections for every district mood
              </h2>
              <p className="mt-5 max-w-[52ch] text-sm font-medium uppercase leading-7 tracking-[0.14em] text-black/70">
                Designed as visual identities instead of simple product groups.
                Each collection brings its own signal, silhouette and movement
                logic.
              </p>
              <div className="mt-8 space-y-3">
                <CollectionMini label="Night Transit" count="12 pieces" />
                <CollectionMini label="Concrete Pulse" count="08 pieces" />
                <CollectionMini label="Signal Error" count="16 pieces" />
                <CollectionMini label="Mono Utility" count="09 pieces" />
              </div>
            </div>
          </div>

          <div className="xl:col-span-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            <CollectionCard
              image="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1000&auto=format&fit=crop"
              title="Night Transit"
              subtitle="Minimal armor for night movement"
            />
            <CollectionCard
              image="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1000&auto=format&fit=crop"
              title="Signal Error"
              subtitle="Glitch typography and electric contrast"
            />
            <CollectionCard
              image="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1000&auto=format&fit=crop"
              title="Concrete Pulse"
              subtitle="Heavy silhouettes for raw street rhythm"
            />
            <CollectionCard
              image="https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1000&auto=format&fit=crop"
              title="Mono Utility"
              subtitle="Sharp functional layers and modular detail"
            />
          </div>
        </section>

        <section
          id="studio"
          className="mt-10 grid grid-cols-1 gap-8 xl:grid-cols-12"
        >
          <div className="xl:col-span-7">
            <div className="street-card street-card-dark relative overflow-hidden min-h-[520px]">
              <img
                src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1400&auto=format&fit=crop"
                alt="Studio edit"
                className="absolute inset-0 h-full w-full object-cover grayscale opacity-70"
              />
              <div className="street-photo-noise absolute inset-0" />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.25),rgba(0,0,0,0.86))]" />

              <div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="border border-white/30 px-2 py-1 text-[10px] font-mono uppercase tracking-[0.3em] text-white/75">
                    studio_visual_04
                  </span>
                  <button className="inline-flex h-12 w-12 items-center justify-center border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-transform duration-300 hover:scale-105">
                    <Play className="h-5 w-5 fill-current" />
                  </button>
                </div>

                <div>
                  <h2 className="max-w-[10ch] text-4xl font-black uppercase leading-[0.9] text-white md:text-6xl">
                    Editorial motion in raw format
                  </h2>
                  <p className="mt-4 max-w-[55ch] text-sm font-medium uppercase leading-7 tracking-[0.14em] text-white/75">
                    Neo-Street studio explores contrast, kinetic framing and
                    loud spatial composition. More campaign than catalog.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                  <StatChip value="24" label="Frames" />
                  <StatChip value="08" label="Sets" />
                  <StatChip value="12k" label="Views" />
                  <StatChip value="97%" label="Heat" />
                </div>
              </div>
            </div>
          </div>

          <div className="xl:col-span-5 flex flex-col gap-4">
            <StudioNote
              icon={<Headphones className="h-5 w-5" />}
              title="Sound Design"
              text="Industrial ambience, low bass pulses and mechanical accents for immersive previews."
            />
            <StudioNote
              icon={<Shirt className="h-5 w-5" />}
              title="Garment Direction"
              text="Oversized proportions, structured outerwear and visual layering built around function."
            />
            <StudioNote
              icon={<BadgeAlert className="h-5 w-5" />}
              title="Warning System"
              text="Typography and symbols behave like city signage, alert labels and coded infrastructure."
            />

            <div className="street-panel flex-1 p-6">
              <div className="mb-4 flex items-center justify-between gap-3">
                <h3 className="text-lg font-black uppercase tracking-[0.24em]">
                  Material Notes
                </h3>
                <span className="border border-black px-2 py-1 text-[10px] font-mono uppercase tracking-[0.3em]">
                  textile_scan
                </span>
              </div>
              <div className="space-y-4">
                <MaterialRow label="Ripstop nylon" value="88%" />
                <MaterialRow label="Matte cotton" value="67%" />
                <MaterialRow label="Reflective accents" value="52%" />
                <MaterialRow label="Layer density" value="91%" />
              </div>
            </div>
          </div>
        </section>

        <section
          id="archive"
          className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12"
        >
          <div className="lg:col-span-3">
            <div className="street-panel h-full p-6">
              <span className="border border-black px-2 py-1 text-[10px] font-mono uppercase tracking-[0.3em]">
                archive_node
              </span>
              <h2 className="mt-4 text-3xl font-black uppercase leading-none">
                Past drops remain part of the signal
              </h2>
              <p className="mt-4 text-sm font-medium uppercase leading-7 tracking-[0.14em] text-black/70">
                Previous editions still define the visual code. Archive pieces
                are preserved as artifacts and references.
              </p>
            </div>
          </div>

          <div className="lg:col-span-9 grid grid-cols-1 gap-4 md:grid-cols-3">
            <ArchiveCard
              code="DROP_01"
              title="Static Voltage"
              desc="Hard monochrome and first-generation utility wear."
            />
            <ArchiveCard
              code="DROP_02"
              title="Null Concrete"
              desc="Structured layering and industrial geometry."
            />
            <ArchiveCard
              code="DROP_03"
              title="District Override"
              desc="Glitch energy, blue pulse and more exposed motion."
            />
          </div>
        </section>

        <section
          id="journal"
          className="mt-10 grid grid-cols-1 gap-8 xl:grid-cols-12"
        >
          <div className="xl:col-span-4">
            <div className="street-panel h-full p-6 md:p-8">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-2xl font-black uppercase tracking-[0.24em]">
                  Journal
                </h2>
                <Clock3 className="h-5 w-5 text-neo-blue" />
              </div>
              <p className="mt-4 text-sm font-medium uppercase leading-7 tracking-[0.14em] text-black/70">
                Editorial fragments, process logs and visual notes from the city
                grid.
              </p>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 border-2 border-black bg-white px-4 py-3 text-xs font-black uppercase tracking-[0.22em] transition-transform duration-300 hover:-translate-y-1"
              >
                Open full journal <ChevronRight size={16} strokeWidth={3} />
              </a>
            </div>
          </div>

          <div className="xl:col-span-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            <JournalCard
              image="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop"
              tag="Field Note"
              title="Why oversized silhouettes still dominate urban fashion"
            />
            <JournalCard
              image="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop"
              tag="Studio Log"
              title="Building a louder visual identity with street signage cues"
            />
            <JournalCard
              image="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop"
              tag="Drop Report"
              title="How technical layers changed the rhythm of everyday wear"
            />
          </div>
        </section>

        <section className="mt-10">
          <div className="relative overflow-hidden border-2 border-black bg-black px-5 py-6 text-white shadow-[8px_8px_0_#111] md:px-8 md:py-8">
            <div className="pointer-events-none absolute inset-0 opacity-30">
              <div className="street-grid absolute inset-0" />
            </div>

            <div className="relative grid grid-cols-1 gap-6 xl:grid-cols-[1.2fr_auto] xl:items-center">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 border border-white/20 bg-white/10 px-2 py-1 text-[10px] font-mono uppercase tracking-[0.3em]">
                  <Star className="h-3.5 w-3.5 text-neo-blue" />
                  signal subscription
                </div>
                <h2 className="max-w-[14ch] text-3xl font-black uppercase leading-none md:text-5xl">
                  Get notified when the next district opens
                </h2>
              </div>

              <form className="grid grid-cols-1 gap-3 md:grid-cols-[minmax(300px,1fr)_auto]">
                <input
                  type="email"
                  placeholder="ENTER YOUR EMAIL"
                  className="border-2 border-white bg-transparent px-4 py-3 text-sm font-black uppercase tracking-[0.18em] text-white placeholder:text-white/45 outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white bg-neo-blue px-5 py-3 text-sm font-black uppercase tracking-[0.22em] text-white transition-transform duration-300 hover:-translate-y-1"
                >
                  Join Signal <ArrowUpRight size={18} strokeWidth={3} />
                </button>
              </form>
            </div>
          </div>
        </section>

        <footer className="mt-10 border-t-2 border-black pt-5">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div>
              <div className="hero-lockup relative inline-block">
                <h3 className="flex flex-wrap items-end gap-x-2 leading-[0.82] text-3xl font-black uppercase">
                  <span className="text-neo-blue font-stencil">NEO</span>
                  <span className="text-gray-950 font-display">STREET</span>
                </h3>
              </div>
              <p className="mt-3 max-w-[28ch] text-xs font-bold uppercase leading-6 tracking-[0.16em] text-black/70">
                Urban armor for a louder future. Built with coded aesthetics,
                modular energy and district attitude.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs font-black uppercase tracking-[0.2em]">
              <a href="#" className="street-link">
                Shop
              </a>
              <a href="#" className="street-link">
                Collections
              </a>
              <a href="#" className="street-link">
                Studio
              </a>
              <a href="#" className="street-link">
                Journal
              </a>
              <a href="#" className="street-link">
                Shipping
              </a>
              <a href="#" className="street-link">
                Support
              </a>
            </div>

            <div className="flex items-end md:justify-end">
              <div className="border-2 border-black bg-white px-4 py-3 text-[10px] font-mono uppercase tracking-[0.3em] shadow-[4px_4px_0_#111]">
                DISTRICT_09 / NEO_SIGNAL / 2026
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

function CategoryItem({ number, label }: { number: string; label: string }) {
  return (
    <div className="group grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 cursor-pointer">
      <span className="text-6xl font-stencil text-neo-blue transition-transform duration-300 origin-left group-hover:scale-110 md:text-7xl">
        {number}
      </span>

      <span className="min-w-0 text-sm font-black uppercase leading-tight tracking-tight md:text-lg">
        {label}
      </span>
    </div>
  );
}

function FeatureBox({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="street-feature group aspect-square cursor-pointer p-4">
      <div className="text-neo-blue transition-transform duration-300 origin-top-left group-hover:scale-110">
        {icon}
      </div>
      <span className="mt-4 text-xs font-black uppercase leading-tight tracking-[0.18em]">
        {label}
      </span>
    </div>
  );
}

function ProductCard({
  image,
  name,
  price,
  contain = false,
}: {
  image: string;
  name: string;
  price: string;
  contain?: boolean;
}) {
  return (
    <div className="group flex cursor-pointer flex-col">
      <div className="street-product mb-3 aspect-square overflow-hidden p-2">
        <img
          src={image}
          alt={name}
          className={`h-full w-full ${
            contain ? "object-contain" : "object-cover"
          } mix-blend-multiply transition-transform duration-500 group-hover:scale-110`}
        />
      </div>
      <div className="flex items-start justify-between gap-2">
        <span className="text-xs font-black uppercase leading-tight tracking-[0.14em]">
          {name}
        </span>
        <span className="text-xs font-black text-neo-blue">{price}</span>
      </div>
    </div>
  );
}

function SignalCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="street-panel group p-5 transition-transform duration-300 hover:-translate-y-1">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center border-2 border-black bg-white text-neo-blue shadow-[4px_4px_0_#111]">
        {icon}
      </div>
      <h3 className="text-lg font-black uppercase tracking-[0.18em]">
        {title}
      </h3>
      <p className="mt-3 text-xs font-bold uppercase leading-6 tracking-[0.15em] text-black/65">
        {text}
      </p>
    </div>
  );
}

function FeedItem({ time, label }: { time: string; label: string }) {
  return (
    <div className="flex items-start gap-3 border-b border-black/10 pb-3 last:border-none last:pb-0">
      <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-neo-blue">
        {time}
      </span>
      <span className="text-xs font-black uppercase leading-5 tracking-[0.14em]">
        {label}
      </span>
    </div>
  );
}

function CollectionMini({ label, count }: { label: string; count: string }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-black pb-3 last:pb-0 last:border-none">
      <span className="text-sm font-black uppercase tracking-[0.16em]">
        {label}
      </span>
      <span className="text-[10px] font-mono uppercase tracking-[0.28em] text-black/60">
        {count}
      </span>
    </div>
  );
}

function CollectionCard({
  image,
  title,
  subtitle,
}: {
  image: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="street-card group relative min-h-[320px] overflow-hidden">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
      />
      <div className="street-photo-noise absolute inset-0" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.06),rgba(0,0,0,0.72))]" />
      <div className="absolute left-4 top-4 h-1 w-12 bg-neo-blue" />

      <div className="relative z-10 flex h-full flex-col justify-end p-5">
        <h3 className="text-2xl font-black uppercase leading-none text-white md:text-3xl">
          {title}
        </h3>
        <p className="mt-3 max-w-[28ch] text-[11px] font-bold uppercase leading-5 tracking-[0.16em] text-white/75">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

function StatChip({ value, label }: { value: string; label: string }) {
  return (
    <div className="border border-white/20 bg-white/10 p-3 backdrop-blur-sm">
      <div className="text-2xl font-black uppercase text-white">{value}</div>
      <div className="mt-1 text-[10px] font-mono uppercase tracking-[0.28em] text-white/60">
        {label}
      </div>
    </div>
  );
}

function StudioNote({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="street-panel p-5">
      <div className="mb-3 flex items-center gap-3 text-neo-blue">
        {icon}
        <h3 className="text-sm font-black uppercase tracking-[0.2em] text-black">
          {title}
        </h3>
      </div>
      <p className="text-xs font-bold uppercase leading-6 tracking-[0.15em] text-black/65">
        {text}
      </p>
    </div>
  );
}

function MaterialRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-3">
        <span className="text-xs font-black uppercase tracking-[0.15em]">
          {label}
        </span>
        <span className="text-[10px] font-mono uppercase tracking-[0.28em] text-neo-blue">
          {value}
        </span>
      </div>
      <div className="h-2 border border-black bg-white">
        <div className="h-full bg-neo-blue" style={{ width: value }} />
      </div>
    </div>
  );
}

function ArchiveCard({
  code,
  title,
  desc,
}: {
  code: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="street-panel group p-5 transition-transform duration-300 hover:-translate-y-1">
      <div className="mb-8 flex items-center justify-between gap-3">
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-neo-blue">
          {code}
        </span>
        <ArrowUpRight className="h-4 w-4 text-black transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
      </div>
      <h3 className="text-2xl font-black uppercase leading-none">{title}</h3>
      <p className="mt-4 text-xs font-bold uppercase leading-6 tracking-[0.15em] text-black/65">
        {desc}
      </p>
    </div>
  );
}

function JournalCard({
  image,
  tag,
  title,
}: {
  image: string;
  tag: string;
  title: string;
}) {
  return (
    <div className="group flex cursor-pointer flex-col">
      <div className="street-card relative mb-3 aspect-[4/5] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
        />
        <div className="street-photo-noise absolute inset-0" />
        <div className="absolute left-3 top-3 border border-white/30 bg-black/55 px-2 py-1 text-[10px] font-mono uppercase tracking-[0.28em] text-white">
          {tag}
        </div>
      </div>
      <h3 className="text-sm font-black uppercase leading-6 tracking-[0.14em]">
        {title}
      </h3>
    </div>
  );
}
