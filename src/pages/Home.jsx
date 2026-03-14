import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Play,
  ChevronDown,
  Zap,
  Award,
  Users,
  Star,
} from "lucide-react";
import StatsBanner from "../components/StatsBanner";
import { pub } from "../utils";
import { SERVICES, TESTIMONIALS, GALLERY } from "../data";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1920&q=80"
            alt="Professional audio mixing console"
            className="w-full h-full object-cover object-center scale-105"
            style={{ filter: "brightness(0.55) saturate(1.3)" }}
          />
          {/* Deep blue-black colour grade */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(10,20,60,0.72) 0%, rgba(0,0,0,0.45) 50%, rgba(10,20,60,0.72) 100%)",
            }}
          />
          {/* Vignette */}
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black/90" />
          {/* Subtle horizontal scanlines for tech feel */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.08) 3px, rgba(0,0,0,0.08) 4px)",
            }}
          />
        </div>

        {/* Tech grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(96,165,250,1) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        {/* Corner accent lines */}
        <div className="absolute top-0 left-0 w-48 h-48 border-t-2 border-l-2 border-blue-500/30 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-48 h-48 border-b-2 border-r-2 border-blue-500/30 pointer-events-none" />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-700/20 border border-blue-500/40 text-blue-300 text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
            <Zap size={12} />
            Tanzania's Premier AV Experience
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white uppercase leading-none mb-6 font-display">
            We Power
            <br />
            <span className="text-blue-400 italic">Your Events</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Professional sound systems · Stunning LED screens ·&nbsp; Equipment
            sales · Music lessons — all under one roof.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/services")}
              className="flex items-center justify-center gap-2 bg-blue-800 hover:bg-blue-700 text-white font-black text-sm px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:shadow-blue-700/40 uppercase tracking-widest"
            >
              Explore Services <ArrowRight size={16} />
            </button>
            <button
              onClick={() => navigate("/work")}
              className="flex items-center justify-center gap-2 border-2 border-white/30 hover:border-blue-400 text-white hover:text-blue-300 font-black text-sm px-8 py-4 rounded-full transition-all duration-200 uppercase tracking-widest"
            >
              <Play size={16} fill="currentColor" /> Our Work
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
          <span className="text-gray-400 text-xs tracking-widest uppercase">
            Scroll
          </span>
          <ChevronDown size={18} className="text-blue-400" />
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────── */}
      <StatsBanner />

      {/* ── SERVICES PREVIEW ─────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-700 text-xs font-bold tracking-[0.3em] uppercase">
              What We Offer
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 uppercase mt-2 font-display">
              Our Services
            </h2>
            <div className="w-16 h-1 bg-blue-700 mx-auto mt-4" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {SERVICES.map((svc) => {
              const Icon = svc.icon;
              return (
                <button
                  key={svc.id}
                  onClick={() => navigate("/services")}
                  className="group text-left bg-white border border-slate-200 hover:border-blue-500/60 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-blue-700/10"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={pub(svc.image)}
                      alt={svc.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />
                    <div className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-blue-700 flex items-center justify-center">
                      <Icon size={16} className="text-white" />
                    </div>
                  </div>
                  <div className="p-5">
                    <span className="text-blue-700 text-[10px] font-black tracking-widest uppercase">
                      {svc.badge}
                    </span>
                    <h3 className="text-slate-900 font-black uppercase text-base mt-1 mb-2 font-display">
                      {svc.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
                      {svc.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="text-center">
            <button
              onClick={() => navigate("/services")}
              className="inline-flex items-center gap-2 border-2 border-blue-700/50 hover:bg-blue-700 hover:text-white text-blue-700 font-black text-sm px-8 py-4 rounded-full transition-all duration-200 uppercase tracking-widest"
            >
              View All Services <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ── ABOUT US PREVIEW ─────────────────────────────────────── */}
      <section className="py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* 2×2 image grid */}
            <div className="grid grid-cols-2 gap-3">
              {[
                "image16.jpeg",
                "image6.jpeg",
                "image20.jpeg",
                "image13.jpeg",
              ].map((img, i) => (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden aspect-square"
                >
                  <img
                    src={pub(img)}
                    alt="Lifters Tech"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>

            {/* Text */}
            <div>
              <span className="text-blue-700 text-xs font-bold tracking-[0.3em] uppercase">
                Who We Are
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase mt-2 mb-5 font-display leading-tight">
                About
                <br />
                <span className="text-blue-700">Lifters Tech</span>
              </h2>
              <p className="text-slate-500 leading-relaxed mb-4 text-sm">
                Born from a deep passion for powerful sound and breathtaking
                visual experiences, Lifters Tech is Tanzania's trusted partner
                for professional audio-visual solutions. We have spent years
                powering events that leave audiences speechless — from intimate
                corporate sessions to massive outdoor concerts.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8 text-sm">
                Beyond events, we are passionate about growing Tanzania's music
                culture through equipment sales and hands-on music lessons —
                empowering the next generation of artists and sound engineers.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { icon: Award, label: "Premium Quality" },
                  { icon: Zap, label: "Fast Deployment" },
                  { icon: Users, label: "Expert Team" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-xl px-4 py-2.5"
                  >
                    <Icon size={16} className="text-blue-700" />
                    <span className="text-slate-700 text-xs font-semibold">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => navigate("/about")}
                className="inline-flex items-center gap-2 bg-blue-800 hover:bg-blue-700 text-white font-black text-sm px-8 py-3.5 rounded-full transition-all duration-200 hover:scale-105 uppercase tracking-widest"
              >
                Learn More <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR WORK PREVIEW ─────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-blue-700 text-xs font-bold tracking-[0.3em] uppercase">
              Portfolio
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 uppercase mt-2 font-display">
              Our Work
            </h2>
            <div className="w-16 h-1 bg-blue-700 mx-auto mt-4" />
            <p className="text-slate-500 mt-4 max-w-xl mx-auto text-sm">
              A glimpse of events we have powered and the experiences we have
              created across Tanzania.
            </p>
          </div>

          {/* Featured + grid layout — fixed height so both columns align perfectly */}
          <div className="grid md:grid-cols-2 gap-3 mb-10 h-[600px]">
            {/* Left: tall featured image fills full height */}
            <button
              onClick={() => navigate("/work")}
              className="group relative overflow-hidden rounded-2xl bg-slate-100 h-full"
            >
              <img
                src={pub(GALLERY[0])}
                alt="Featured event"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center">
                  <Play
                    size={16}
                    className="text-white ml-0.5"
                    fill="currentColor"
                  />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-linear-to-t from-black/80 to-transparent">
                <span className="text-blue-300 text-xs font-bold uppercase tracking-widest">
                  Featured Event
                </span>
              </div>
            </button>

            {/* Right: 2×2 grid fills the same height */}
            <div className="grid grid-cols-2 grid-rows-2 gap-3 h-full">
              {GALLERY.slice(1, 5).map((filename, i) => (
                <button
                  key={i}
                  onClick={() => navigate("/work")}
                  className="group relative overflow-hidden rounded-2xl bg-slate-100 h-full"
                >
                  <img
                    src={pub(filename)}
                    alt={`Event ${i + 2}`}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-9 h-9 rounded-full bg-blue-700 flex items-center justify-center">
                      <Play
                        size={14}
                        className="text-white ml-0.5"
                        fill="currentColor"
                      />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => navigate("/work")}
              className="inline-flex items-center gap-2 border-2 border-blue-700/50 hover:bg-blue-700 hover:text-white text-blue-700 font-black text-sm px-8 py-4 rounded-full transition-all duration-200 uppercase tracking-widest"
            >
              View Full Gallery <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIES PREVIEW ──────────────────────────────────── */}
      <section className="py-28 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/60 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-14">
            <span className="text-blue-700 text-xs font-bold tracking-[0.3em] uppercase">
              What People Say
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 uppercase mt-2 font-display">
              Testimonies
            </h2>
            <div className="w-16 h-1 bg-blue-700 mx-auto mt-4" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col gap-4 hover:border-blue-500/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star
                      key={s}
                      size={13}
                      className="text-blue-600 fill-blue-600"
                    />
                  ))}
                </div>
                <p className="text-slate-500 text-xs leading-relaxed italic flex-1 line-clamp-4">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                  <div className="w-9 h-9 rounded-full bg-blue-800 flex items-center justify-center text-white font-black text-xs shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-slate-800 text-xs font-bold leading-tight">
                      {t.name}
                    </p>
                    <p className="text-slate-400 text-[10px]">
                      {t.role.split(",")[0]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => navigate("/testimonies")}
              className="inline-flex items-center gap-2 border-2 border-blue-700/50 hover:bg-blue-700 hover:text-white text-blue-700 font-black text-sm px-8 py-4 rounded-full transition-all duration-200 uppercase tracking-widest"
            >
              Read More Stories <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ────────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={pub("image9.jpeg")}
            alt="Event"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase font-display mb-4">
            Ready to Elevate
            <br />
            <span className="text-blue-400">Your Next Event?</span>
          </h2>
          <p className="text-gray-300 mb-8 text-sm leading-relaxed">
            Contact our team today and let's craft an AV experience your
            audience will never forget.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white font-black text-sm px-10 py-4 rounded-full uppercase tracking-widest transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:shadow-blue-700/40"
          >
            Get in Touch <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </>
  );
}
