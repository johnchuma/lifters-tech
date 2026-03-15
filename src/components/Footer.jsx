import { NavLink, useNavigate } from "react-router-dom";
import { Phone, Mail, Instagram, Facebook, Youtube } from "lucide-react";
import { NAV_LINKS } from "../data";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-10 h-10 rounded-full overflow-hidden bg-white">
                <img
                  src="logo.png"
                  alt="Lifters Tech"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-white font-black text-xl tracking-widest uppercase font-display">
                LIFTERS <span className="text-blue-400">TECH</span>
              </span>
            </button>
            <p className="text-slate-400 text-sm leading-relaxed">
              Tanzania's premier audio-visual solutions provider. Powering
              unforgettable events and growing Tanzania's music culture.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Facebook, label: "Facebook" },
                { icon: Youtube, label: "YouTube" },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  onClick={() => {
                    open(
                      "https://www.instagram.com/lifterstech_pick_and_sound?igsh=Y3c5MmZuODVxbHdo&utm_source=qr",
                    );
                  }}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all duration-200"
                >
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map(({ label, to }) => (
                <li key={label}>
                  <NavLink
                    to={to}
                    end={to === "/"}
                    className={({ isActive }) =>
                      `text-sm transition-colors duration-200 ${
                        isActive
                          ? "text-blue-400"
                          : "text-slate-400 hover:text-blue-400"
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-widest mb-5">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+255753688548"
                className="flex items-center gap-2 text-slate-400 hover:text-blue-400 text-sm transition-colors"
              >
                <Phone size={14} /> 0753 688 548
              </a>
              <a
                href="tel:+255718568563"
                className="flex items-center gap-2 text-slate-400 hover:text-blue-400 text-sm transition-colors"
              >
                <Phone size={14} /> 0718 568 563
              </a>
              <a
                href="mailto:lifterstech@gmail.com"
                className="flex items-center gap-2 text-slate-400 hover:text-blue-400 text-sm transition-colors"
              >
                <Mail size={14} /> lifterstech@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Lifters Tech. All Rights Reserved.
          </p>
          <p className="text-slate-500 text-xs">
            Designed with passion for Tanzania's events industry.
          </p>
        </div>
      </div>
    </footer>
  );
}
