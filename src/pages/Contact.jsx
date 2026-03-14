import { useState } from "react";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
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
    "w-full bg-white/10 border border-white/10 focus:border-amber-500 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm outline-none transition-colors duration-200";

  return (
    <>
      <PageHeader
        label="Get In Touch"
        title="Contact Us"
        subtitle="Ready to elevate your event? Our team is standing by to create the perfect AV experience for you."
        image="image21.jpeg"
      />

      {/* ── CONTACT BODY ─────────────────────────────────────────── */}
      <section className="py-28 bg-[#0c0c0c]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Info column */}
            <div>
              <span className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase">
                Let's Connect
              </span>
              <h2 className="text-4xl font-black text-white uppercase mt-2 mb-4 font-display leading-tight">
                Let's Talk About
                <br />
                <span className="text-amber-400">Your Event</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-10 text-sm">
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
                    <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center group-hover:bg-amber-500 transition-colors duration-200 shrink-0">
                      <Icon
                        size={20}
                        className="text-amber-400 group-hover:text-black transition-colors"
                      />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs uppercase tracking-widest">
                        {label}
                      </p>
                      <p className="text-white font-semibold text-sm">
                        {value}
                      </p>
                    </div>
                  </a>
                ))}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-amber-400" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-widest">
                      Location
                    </p>
                    <p className="text-white font-semibold text-sm">Tanzania</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-white/5 border border-white/10 rounded-3xl p-8"
            >
              {sent && (
                <div className="mb-6 bg-green-500/20 border border-green-500/40 text-green-400 text-sm font-semibold px-4 py-3 rounded-xl">
                  ✓ Message sent! We'll get back to you shortly.
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-gray-400 text-xs uppercase tracking-widest font-semibold block mb-2">
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
                  <label className="text-gray-400 text-xs uppercase tracking-widest font-semibold block mb-2">
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
                  <label className="text-gray-400 text-xs uppercase tracking-widest font-semibold block mb-2">
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
                  <label className="text-gray-400 text-xs uppercase tracking-widest font-semibold block mb-2">
                    Service
                  </label>
                  <select
                    value={form.service}
                    onChange={set("service")}
                    className={inputCls + " appearance-none"}
                  >
                    <option value="" className="bg-[#1a1a1a]">
                      Select service…
                    </option>
                    <option value="sound-rental" className="bg-[#1a1a1a]">
                      Sound Rental
                    </option>
                    <option value="led-rental" className="bg-[#1a1a1a]">
                      LED Screen Rental
                    </option>
                    <option value="sound-sales" className="bg-[#1a1a1a]">
                      Sound Equipment Sales
                    </option>
                    <option value="music-lessons" className="bg-[#1a1a1a]">
                      Music Lessons
                    </option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="text-gray-400 text-xs uppercase tracking-widest font-semibold block mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Tell us about your event or enquiry…"
                  value={form.message}
                  onChange={set("message")}
                  required
                  rows={5}
                  className={inputCls + " resize-none"}
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-black text-sm px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-2xl hover:shadow-amber-500/30 uppercase tracking-widest"
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
