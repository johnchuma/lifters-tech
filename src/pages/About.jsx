import { useNavigate } from "react-router-dom";
import { ArrowRight, Award, Zap, Users } from "lucide-react";
import PageHeader from "../components/PageHeader";
import StatsBanner from "../components/StatsBanner";
import { pub } from "../utils";

export default function About() {
  const navigate = useNavigate();

  return (
    <>
      <PageHeader
        label="Who We Are"
        title="About Lifters Tech"
        subtitle="Tanzania's trusted partner for professional audio-visual solutions — powering events that leave audiences speechless."
        image="image3.jpeg"
      />

      {/* ── STORY ───────────────────────────────────────────────── */}
      <section className="py-28 bg-[#0c0c0c]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <span className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase mt-2 mb-6 font-display leading-tight">
                Born From a<br />
                <span className="text-amber-400">Passion for Sound</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-5">
                Lifters Tech was born out of a deep passion for powerful sound
                and breathtaking visual experiences. We have spent years
                powering events that leave audiences speechless — from intimate
                corporate sessions to massive outdoor concerts.
              </p>
              <p className="text-gray-400 leading-relaxed mb-5">
                Our team of skilled engineers and technicians delivers precision
                and reliability every single time. We believe great events start
                with great sound — and we are here to make that happen for every
                client, every time.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Beyond events, we are passionate about growing Tanzania's music
                culture through equipment sales and music lessons — empowering
                the next generation of artists and sound engineers.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { icon: Award, label: "Premium Quality" },
                  { icon: Zap, label: "Fast Deployment" },
                  { icon: Users, label: "Expert Team" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3"
                  >
                    <Icon size={18} className="text-amber-500" />
                    <span className="text-white text-sm font-semibold">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => navigate("/contact")}
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-black text-sm px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 uppercase tracking-widest"
              >
                Work With Us <ArrowRight size={16} />
              </button>
            </div>

            {/* Image mosaic */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden h-52">
                  <img
                    src={pub("image12.jpeg")}
                    alt="Event"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-36">
                  <img
                    src={pub("image14.jpeg")}
                    alt="Event"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="rounded-2xl overflow-hidden h-36">
                  <img
                    src={pub("image20.jpeg")}
                    alt="Event"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-52">
                  <img
                    src={pub("image7.jpeg")}
                    alt="Event"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ───────────────────────────────────────────────── */}
      <StatsBanner />

      {/* ── MISSION / VALUES ────────────────────────────────────── */}
      <section className="py-28 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase">
              What Drives Us
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase mt-2 font-display">
              Mission & Values
            </h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                emoji: "🎯",
                title: "Our Mission",
                body: "To deliver world-class audio-visual experiences that make every event memorable, while nurturing Tanzania's audio culture through education and accessible equipment.",
              },
              {
                emoji: "👁️",
                title: "Our Vision",
                body: "To be the most trusted AV partner across East Africa — known for precision, innovation, and a relentless commitment to excellence in every project we undertake.",
              },
              {
                emoji: "🤝",
                title: "Our Promise",
                body: "We show up on time, set up flawlessly, and deliver more than expected — every single time. Your event's success is our success, and we take that responsibility seriously.",
              },
            ].map(({ emoji, title, body }) => (
              <div
                key={title}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{emoji}</div>
                <h3 className="text-white font-black uppercase text-lg mb-3 font-display">
                  {title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
