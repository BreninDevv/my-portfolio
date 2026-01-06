"use client";
import React from "react";
import { Inter, Bodoni_Moda } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "900"] });
const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400"],
  style: "italic",
});

const ProjectCard = ({ title, description, link, github }) => {
  return (
    <div
      className={`group flex flex-col border-t border-white/10 pt-4 md:pt-6 h-full ${inter.className}`}
    >
      <div className="hidden md:block aspect-video bg-zinc-900 mb-6 border border-white/5 grayscale group-hover:grayscale-0 transition-all duration-500" />

      <div className="flex justify-between items-baseline mb-1 md:mb-2">
        <h3 className="text-lg md:text-2xl font-black text-white uppercase tracking-tighter">
          {title}
        </h3>
        <span className="text-[8px] md:text-[10px] text-zinc-600 font-bold uppercase">
          © 2026
        </span>
      </div>

      <p
        className={`${bodoni.className} text-zinc-500 text-sm md:text-lg leading-tight mb-4 md:mb-6 line-clamp-2 md:line-clamp-none`}
      >
        {description}
      </p>

      <div className="mt-auto flex gap-4 md:gap-6">
        <a
          href={link}
          className="text-[9px] font-black uppercase tracking-widest text-blue-500 hover:text-white transition-colors"
        >
          Live Site _
        </a>
        <a
          href={github}
          className="text-[9px] font-black uppercase tracking-widest text-zinc-600 hover:text-white transition-colors"
        >
          Source Code _
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
