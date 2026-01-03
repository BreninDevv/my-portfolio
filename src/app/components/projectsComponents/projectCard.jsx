import React from "react";

const ProjectCard = ({ title, description, icons, link, github }) => {
  return (
    <div className="group relative bg-[#0d1526] border border-blue-900/30 p-6 rounded-[2rem] h-full flex flex-col hover:border-blue-500/50 transition-all duration-500 shadow-xl">
      {/* Preview do Projeto */}
      <div className="w-full h-40 bg-[#162035] rounded-2xl mb-5 flex items-center justify-center border border-blue-900/20 overflow-hidden">
        <span className="text-blue-900 font-black text-xs tracking-widest uppercase opacity-40">
          Preview
        </span>
      </div>

      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-400 text-sm mb-4 line-clamp-2">{description}</p>

      {/* Ícones/Tags */}
      <div className="flex flex-wrap gap-2 mb-6">{icons}</div>

      {/* Links simples e diretos */}
      <div className="mt-auto pt-4 border-t border-blue-900/40 flex flex-col gap-3">
        <a
          href={link}
          target="_blank"
          className="text-blue-400 hover:text-white text-xs font-bold uppercase tracking-widest flex items-center justify-between group/link"
        >
          Ver Site <span>→</span>
        </a>
        <a
          href={github}
          target="_blank"
          className="text-slate-500 hover:text-slate-300 text-xs font-bold uppercase tracking-widest flex items-center justify-between"
        >
          Repositório <span>↗</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
