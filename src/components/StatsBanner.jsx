import { STATS } from "../data";

export default function StatsBanner() {
  return (
    <div className="bg-blue-800 py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {STATS.map(({ value, label }) => (
          <div key={label}>
            <div className="text-4xl font-black text-white font-display">
              {value}
            </div>
            <div className="text-white/70 text-xs font-bold uppercase tracking-widest mt-1">
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
