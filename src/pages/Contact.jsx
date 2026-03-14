import { useState } from "react";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
  CheckCircle2,
} from "lucide-react";
import PageHeader from "../components/PageHeader";
import { pub } from "../utils";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  function set(field) {
    return (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
  }

  const inputCls =
    "w-full bg-white border border-slate-200 focus:border-blue-600 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 text-sm outline-none transition-colors duration-200";

  return (
    <>
      <PageHeader
        label="Get In Touch"
        title="Contact Us"
        subtitle="Ready to elevate your event? Our team is standing by to create the perfect AV experience for you."
        image="image21.jpeg"
      />

      {/* ── CONTACT BODY ─────────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Info column */}
            <div>
              <span className="text-blue-700 text-xs font-bold tracking-[0.3em] uppercase">
                Let's Connect
              </span>
              <h2 className="text-4xl font-black text-slate-900 uppercase mt-2 mb-4 font-display leading-tight">
                Let's Talk About
                <br />
                <span className="text-blue-700">Your Event</span>
              </h2>
              <p className="text-slate-500 leading-relaxed mb-10 text-sm">
                Ready to elevate your event or start your music journey? Reach
                out to us — our team is always ready to craft an exceptional
                experience tailored exactly to your needs and budget.
              </p>

              <div className="space-y-6 mb-10">
                {[
                  {
                    href: "tel:+255753688548",
                    icon: Phone,
                    label: "Call Us",
                    value: "0753 688 548 / 0718 568 563",
                  },
                  {
                    href: "mailto:lifterstech@gmail.com",
                    icon: Mail,
                    label: "Email Us",
                    value: "lifterstech@gmail.com",
                  },
                ].map(({ href, icon: Icon, label, value }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-blue-700 transition-colors duration-200 shrink-0">
                      <Icon
                        size={20}
                        className="text-blue-700 group-hover:text-white transition-colors"
                      />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase tracking-widest">
                        {label}
                      </p>
                      <p className="text-slate-800 font-semibold text-sm">
                        {value}
                      </p>
                    </div>
                  </a>
                ))}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-blue-700" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs uppercase tracking-widest">
                      Location
                    </p>
                    <p className="text-slate-800 font-semibold text-sm">Tanzania</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                {[
                  { icon: Instagram, label: "Instagram" },
                  { icon: Facebook, label: "Facebook" },
                  { icon: Youtube, label: "YouTube" },
                ].map(({ icon: Icon, label }) => (
                  <button
                    key={label}
                    aria-label={label}
                    className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-blue-700 hover:border-blue-500/50 hover:bg-blue-50 transition-all duration-200"
                  >
                    <Icon size={18} />
                  </button>
                ))}
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-slate-50 border border-slate-200 rounded-3xl p-8"
            >
              {sent && (
                <div className="mb-6 bg-green-50 border border-green-200 text-green-700 text-sm font-semibold px-4 py-3 rounded-xl flex items-center gap-2">
                  <CheckCircle2 size={16} /> Message sent! We'll get back to you shortly.
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-slate-500 text-xs uppercase tracking-widest font-semibold block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={set("name")}
                    required
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className="text-slate-500 text-xs uppercase tracking-widest font-semibold block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={set("email")}
                    required
                    className={inputCls}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-slate-500 text-xs uppercase tracking-widest font-semibold block mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="+255 ..."
                    value={form.phone}
                    onChange={set("phone")}
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className="text-slate-500 text-xs uppercase tracking-widest font-semibold block mb-2">
                    Service
                  </label>
                  <select
                    value={form.service}
                    onChange={set("service")}
                    className={inputCls + " appearance-none"}
                  >
                    <option value="">Select service…</option>
                    <option value="sound-rental">Sound Rental</option>
                    <option value="led-rental">LED Screen Rental</option>
                    <option value="sound-sales">Sound Equipment Sales</option>
                    <option value="music-lessons">Music Lessons</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="text-slate-500 text-xs uppercase tracking-widest font-semibold block mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your event or inquiry…"
                  value={form.message}
                  onChange={set("message")}
                  required
                  className={inputCls + " resize-none"}
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-blue-800 hover:bg-blue-700 text-white font-black text-sm py-4 rounded-xl uppercase tracking-widest transition-all duration-200 hover:scale-[1.02]"
              >
                Send Message <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
