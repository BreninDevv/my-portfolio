const SkillCard = ({ name, icon }) => (
  <div className="group flex flex-col items-center p-4 rounded-2xl bg-white/40 border border-white/60 hover:bg-white/80 hover:shadow-lg transition-all duration-300 backdrop-blur-sm">
    <div className="w-12 h-12 mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <span className="text-blue-900/70 font-bold text-[10px] uppercase tracking-widest">
      {name}
    </span>
  </div>
);
