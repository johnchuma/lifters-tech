import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_LINKS } from "../data";

export default function Navbar({ scrolled, isHome }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const alwaysDark = !isHome;
  const dark = alwaysDark || scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        dark
          ? "bg-black/90 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-amber-500 ring-offset-2 ring-offset-black">
            <img
              src="/logo.png"
              alt="Lifters Tech"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-white font-black text-xl tracking-widest uppercase font-display">
            LIFTERS<span className="text-amber-400">TECH</span>
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
                      ? "text-amber-400"
                      : "text-gray-300 hover:text-amber-400"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {label}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-amber-400 transition-all duration-300 ${
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
          className="hidden md:flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105"
        >
          Book Now <ArrowRight size={14} />
        </button>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink
              key={label}
              to={to}
              end={to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-base font-bold tracking-widest uppercase text-left transition-colors ${
                  isActive
                    ? "text-amber-400"
                    : "text-gray-200 hover:text-amber-400"
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
            className="mt-2 bg-amber-500 text-black font-bold text-sm px-6 py-3 rounded-full"
          >
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
}
