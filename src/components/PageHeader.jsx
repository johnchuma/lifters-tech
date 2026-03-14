import { pub } from "../utils";

/**
 * Reusable hero banner for all non-home pages.
 * @param {string} label    - small tag above title e.g. "Who We Are"
 * @param {string} title    - big heading text
 * @param {string} subtitle - optional subtitle paragraph
 * @param {string} image    - filename from public/ (not encoded yet)
 */
export default function PageHeader({ label, title, subtitle, image }) {
  return (
    <section className="relative pt-32 pb-20 flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={pub(image)}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/60 to-[#0c0c0c]" />
        <div className="absolute inset-0 bg-linear-to-r from-black/60 via-transparent to-black/60" />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,158,11,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center w-full">
        <span className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
          {label}
        </span>
        <h1 className="text-5xl md:text-7xl font-black text-white uppercase font-display leading-none">
          {title}
        </h1>
        {subtitle && (
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto mt-4 font-light leading-relaxed">
            {subtitle}
          </p>
        )}
        <div className="w-16 h-1 bg-amber-500 mx-auto mt-6" />
      </div>
    </section>
  );
}
