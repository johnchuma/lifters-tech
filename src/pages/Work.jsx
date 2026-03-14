import { useState } from "react";
import {
  X,
  Play,
  Mic,
  Heart,
  Building2,
  Music,
  GraduationCap,
  Sparkles,
} from "lucide-react";
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
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* CSS masonry columns — no gaps regardless of image count or ratio */}
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-3">
            {GALLERY.map((filename, i) => (
              <button
                key={i}
                onClick={() => setLightbox(pub(filename))}
                className="group relative overflow-hidden rounded-2xl bg-slate-100 w-full mb-3 break-inside-avoid block"
              >
                <img
                  src={pub(filename)}
                  alt={`Lifters Tech event ${i + 1}`}
                  className="w-full h-auto block group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center rounded-2xl">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center">
                    <Play
                      size={18}
                      className="text-white ml-0.5"
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
            className="absolute top-6 right-6 text-white hover:text-blue-400 transition-colors z-10"
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
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-blue-700 text-xs font-bold tracking-[0.3em] uppercase">
              Events We Cover
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase mt-2 font-display">
              Any Occasion
            </h2>
            <div className="w-16 h-1 bg-blue-700 mx-auto mt-4" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: Mic,
                title: "Concerts & Live Music",
                body: "Full PA setups, stage monitors, and LED screens for concerts of any size.",
              },
              {
                icon: Heart,
                title: "Weddings & Receptions",
                body: "Elegant sound and lighting solutions for your most important day.",
              },
              {
                icon: Building2,
                title: "Corporate Events",
                body: "Conferences, product launches, and company events with professional AV.",
              },
              {
                icon: Music,
                title: "Church Services",
                body: "Crystal-clear speech and music reinforcement for places of worship.",
              },
              {
                icon: GraduationCap,
                title: "Graduations & Ceremonies",
                body: "Professional audio ensuring every word is heard clearly on your big day.",
              },
              {
                icon: Sparkles,
                title: "Private Parties",
                body: "From birthdays to anniversaries — we make your celebration unforgettable.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="flex gap-4 bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-500/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-blue-700" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-black text-sm uppercase tracking-wide mb-1 font-display">
                    {title}
                  </h4>
                  <p className="text-slate-500 text-xs leading-relaxed">
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
