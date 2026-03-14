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
      <section className="py-28 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-50 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-50 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative">
          {/* Featured slide */}
          <div className="bg-white border border-slate-200 shadow-sm rounded-3xl p-8 md:p-14 text-center mb-8 relative">
            <div className="text-8xl text-blue-700/10 font-serif absolute top-4 left-8 leading-none select-none">
              "
            </div>
            <p className="text-slate-700 text-lg md:text-xl leading-relaxed mb-8 font-light italic relative z-10">
              {TESTIMONIALS[active].quote}
            </p>
            <div className="flex items-center justify-center gap-1 mb-6">
              {Array.from({ length: TESTIMONIALS[active].rating }).map(
                (_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-blue-600 fill-blue-600"
                  />
                ),
              )}
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 rounded-full bg-blue-800 flex items-center justify-center text-white font-black text-lg">
                {TESTIMONIALS[active].initials}
              </div>
              <div className="text-left">
                <p className="text-slate-900 font-bold">
                  {TESTIMONIALS[active].name}
                </p>
                <p className="text-slate-400 text-sm">
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
                    ? "w-8 h-2 bg-blue-700"
                    : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
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
                    ? "border-blue-600 bg-blue-50"
                    : "border-slate-200 bg-white hover:border-blue-400/40 hover:shadow-sm"
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center text-white font-black text-sm shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-slate-800 text-sm font-bold leading-tight">
                      {t.name}
                    </p>
                    <p className="text-slate-400 text-xs">
                      {t.role.split(",")[0]}
                    </p>
                  </div>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
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
          <p className="text-blue-400 text-xs font-bold tracking-[0.3em] uppercase mb-3">
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
            className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white font-black text-sm px-10 py-4 rounded-full uppercase tracking-widest transition-all duration-200 hover:scale-105"
          >
            Work With Us <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </>
  );
}
