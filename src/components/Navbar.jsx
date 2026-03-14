import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_LINKS } from "../data";

export default function Navbar({ scrolled, isHome }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const solid = !isHome || scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className={`size-10 rounded-full bg-[#F4F4F4] `}>
            <img
              src="/logo.png"
              alt="Lifters Tech"
              className="w-full h-full object-cover"
            />
          </div>
          <span
            className={`font-black text-xl tracking-widest uppercase font-display transition-colors duration-300 ${
              solid ? "text-slate-900" : "text-white"
            }`}
          >
            LIFTERS<span className="text-blue-700">TECH</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, to }) => (
            <li key={label}>
              <NavLink
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `text-sm font-semibold tracking-widest uppercase transition-colors duration-200 relative group ${
                    isActive
                      ? "text-blue-700"
                      : solid
                        ? "text-slate-600 hover:text-blue-700"
                        : "text-white/80 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {label}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-blue-700 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          onClick={() => navigate("/contact")}
          className="hidden md:flex items-center gap-2 bg-blue-800 hover:bg-blue-700 text-white font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105"
        >
          Book Now <ArrowRight size={14} />
        </button>

        <button
          className={`md:hidden p-2 transition-colors ${
            solid ? "text-slate-900" : "text-white"
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-200 px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink
              key={label}
              to={to}
              end={to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-base font-bold tracking-widest uppercase text-left transition-colors ${
                  isActive
                    ? "text-blue-700"
                    : "text-slate-700 hover:text-blue-700"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <button
            onClick={() => {
              navigate("/contact");
              setOpen(false);
            }}
            className="flex items-center justify-center gap-2 bg-blue-800 hover:bg-blue-700 text-white font-bold text-sm px-5 py-3 rounded-full transition-all duration-200 mt-2"
          >
            Book Now <ArrowRight size={14} />
          </button>
        </div>
      )}
    </nav>
  );
}
