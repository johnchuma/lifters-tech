import { useState, useEffect } from "react";
import { Star, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { pub } from "../utils";
import { TESTIMONIALS } from "../data";

export default function Testimonies() {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const t = setInterval(
      () => setActive((p) => (p + 1) % TESTIMONIALS.length),
      5000,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <PageHeader
        label="What People Say"
        title="Testimonies"
        subtitle="Hear directly from the clients, event planners, and students who have experienced the Lifters Tech difference."
        image="image15.jpeg"
      />

      {/* ── FEATURED ─────────────────────────────────────────────── */}
      <section className="py-28 bg-[#0c0c0c] relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative">
          {/* Featured slide */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-14 text-center mb-8 relative">
            <div className="text-8xl text-amber-500/20 font-serif absolute top-4 left-8 leading-none select-none">
              "
            </div>
            <p className="text-white text-lg md:text-xl leading-relaxed mb-8 font-light italic relative z-10">
              {TESTIMONIALS[active].quote}
            </p>
            <div className="flex items-center justify-center gap-1 mb-6">
              {Array.from({ length: TESTIMONIALS[active].rating }).map(
                (_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-amber-400 fill-amber-400"
                  />
                ),
              )}
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 rounded-full bg-amber-500 flex items-center justify-center text-black font-black text-lg">
                {TESTIMONIALS[active].initials}
              </div>
              <div className="text-left">
                <p className="text-white font-bold">
                  {TESTIMONIALS[active].name}
                </p>
                <p className="text-gray-400 text-sm">
                  {TESTIMONIALS[active].role}
                </p>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mb-16">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-8 h-2 bg-amber-500"
                    : "w-2 h-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>

          {/* Cards grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`text-left p-4 rounded-2xl border transition-all duration-300 ${
                  i === active
                    ? "border-amber-500 bg-amber-500/10"
                    : "border-white/10 bg-white/5 hover:border-amber-500/40"
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-black font-black text-sm shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-white text-sm font-bold leading-tight">
                      {t.name}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {t.role.split(",")[0]}
                    </p>
                  </div>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">
                  {t.quote}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROMO STRIP ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={pub("image18.jpeg")}
            alt="Event"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        <div className="relative z-10 py-24 max-w-2xl mx-auto px-6 text-center">
          <p className="text-amber-400 text-xs font-bold tracking-[0.3em] uppercase mb-3">
            Join Our Clients
          </p>
          <h2 className="text-4xl font-black text-white uppercase font-display mb-4">
            Your Experience Awaits
          </h2>
          <p className="text-gray-300 text-sm mb-8">
            Let's create something extraordinary together. Reach out and let us
            take your event to the next level.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-black text-sm px-10 py-4 rounded-full uppercase tracking-widest transition-all duration-200 hover:scale-105"
          >
            Work With Us <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </>
  );
}
