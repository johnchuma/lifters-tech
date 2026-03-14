import { useNavigate } from "react-router-dom";
import { ArrowRight, Zap, Volume2, Wrench, DollarSign } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { pub } from "../utils";
import { SERVICES } from "../data";

export default function Services() {
  const navigate = useNavigate();

  return (
    <>
      <PageHeader
        label="What We Offer"
        title="Our Services"
        subtitle="From full-scale concert sound systems to intimate classroom music lessons — we have everything you need."
        image="image13.jpeg"
      />

      {/* ── SERVICE CARDS ────────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {SERVICES.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.id}
                  className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200 hover:border-blue-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-700/10"
                >
                  {/* Card image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={pub(svc.image)}
                      alt={svc.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />
                    <span className="absolute top-4 left-4 bg-blue-700 text-white text-xs font-black px-3 py-1 rounded-full tracking-widest uppercase">
                      {svc.badge}
                    </span>
                    <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center shadow-lg">
                      <Icon size={20} className="text-white" />
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-8">
                    <h3 className="text-2xl font-black text-slate-900 uppercase mb-3 font-display">
                      {svc.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed mb-6 text-sm">
                      {svc.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3 mb-7">
                      {svc.features.map((f) => (
                        <div
                          key={f}
                          className="flex items-center gap-2 text-xs text-slate-600"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-700 shrink-0" />
                          {f}
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={() => navigate("/contact")}
                      className="w-full flex items-center justify-center gap-2 border border-blue-700/50 hover:bg-blue-700 hover:text-white text-blue-700 text-sm font-bold py-3 rounded-xl transition-all duration-200 uppercase tracking-wider"
                    >
                      Get a Quote <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────────────── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-blue-700 text-xs font-bold tracking-[0.3em] uppercase">
              Why Lifters Tech
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase mt-2 font-display">
              The Lifters Difference
            </h2>
            <div className="w-16 h-1 bg-blue-700 mx-auto mt-4" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                title: "Fast Setup",
                body: "Rapid deployment with zero compromise on quality — we are always ready when you need us.",
              },
              {
                icon: Volume2,
                title: "Pro Grade Gear",
                body: "Only the best professional audio and visual equipment, maintained to manufacturer standards.",
              },
              {
                icon: Wrench,
                title: "On-site Support",
                body: "Our technicians stay on-site for the full duration of your event so nothing ever goes wrong.",
              },
              {
                icon: DollarSign,
                title: "Fair Pricing",
                body: "Premium quality AV solutions at competitive, transparent prices tailored to your budget.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:border-blue-500/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto mb-4">
                  <Icon size={24} className="text-blue-700" />
                </div>
                <h4 className="text-slate-900 font-black text-sm uppercase tracking-wider mb-2 font-display">
                  {title}
                </h4>
                <p className="text-slate-500 text-xs leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-blue-800">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white uppercase font-display mb-4">
            Ready to Book?
          </h2>
          <p className="text-blue-200 mb-8 text-sm">
            Tell us about your event and we'll put together the perfect AV
            package for you.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="inline-flex items-center gap-2 bg-white hover:bg-blue-50 text-blue-800 font-black text-sm px-10 py-4 rounded-full uppercase tracking-widest transition-all duration-200 hover:scale-105"
          >
            Contact Us <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </>
  );
}
