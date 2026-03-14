import { useState } from "react";
import { X, Play } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { pub } from "../utils";
import { GALLERY } from "../data";

export default function Work() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <>
      <PageHeader
        label="Portfolio"
        title="Our Work"
        subtitle="A glimpse of the events we have powered and the experiences we have created across Tanzania."
        image="image17.jpeg"
      />

      {/* ── GALLERY ──────────────────────────────────────────────── */}
      <section className="py-28 bg-[#0c0c0c]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {GALLERY.map((filename, i) => (
              <button
                key={i}
                onClick={() => setLightbox(pub(filename))}
                className={`group relative overflow-hidden rounded-2xl bg-white/5 ${
                  i === 0 ? "col-span-2 row-span-2" : ""
                }`}
                style={{ aspectRatio: i === 0 ? "16/9" : "1 / 1" }}
              >
                <img
                  src={pub(filename)}
                  alt={`Lifters Tech event ${i + 1}`}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center">
                    <Play
                      size={18}
                      className="text-black ml-0.5"
                      fill="currentColor"
                    />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX ─────────────────────────────────────────────── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-amber-400 transition-colors z-10"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X size={32} />
          </button>
          <img
            src={lightbox}
            alt="Event photo"
            className="max-w-full max-h-[90vh] rounded-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* ── EVENT TYPES ──────────────────────────────────────────── */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase">
              Events We Cover
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase mt-2 font-display">
              Any Occasion
            </h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto mt-4" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: "🎤",
                title: "Concerts & Live Music",
                body: "Full PA setups, stage monitors, and LED screens for concerts of any size.",
              },
              {
                icon: "💍",
                title: "Weddings & Receptions",
                body: "Elegant sound and lighting solutions for your most important day.",
              },
              {
                icon: "🏢",
                title: "Corporate Events",
                body: "Conferences, product launches, and company events with professional AV.",
              },
              {
                icon: "⛪",
                title: "Church Services",
                body: "Crystal-clear speech and music reinforcement for places of worship.",
              },
              {
                icon: "🎓",
                title: "Graduations & Ceremonies",
                body: "Professional audio ensuring every word is heard clearly on your big day.",
              },
              {
                icon: "🎉",
                title: "Private Parties",
                body: "From birthdays to anniversaries — we make your celebration unforgettable.",
              },
            ].map(({ icon, title, body }) => (
              <div
                key={title}
                className="flex gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="text-3xl shrink-0">{icon}</div>
                <div>
                  <h4 className="text-white font-black text-sm uppercase tracking-wide mb-1 font-display">
                    {title}
                  </h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
