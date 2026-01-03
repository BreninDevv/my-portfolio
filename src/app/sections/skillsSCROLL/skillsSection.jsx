import Cards from "@/app/components/skillsComponents/cards";
import React from "react";
import ReactIcon from "../../assets/reacticon.png";
import JsIcon from "../../assets/jsicon.png";
import HtmlIcon from "../../assets/htmlicon.png";
import CssIcon from "../../assets/cssicon.png";
import Title from "@/app/components/skillsComponents/title";
import NextIcon from "../../assets/nexticon.png";
import TailwindIcon from "../../assets/tailwindicon.png";
import Button from "@/app/components/skillsComponents/button";
import SkillCard from "../../components/skillsComponents/skillsCard";

const SkillsSection = () => {
  const mySkills = [
    {
      name: "HTML",
      icon: <div className="w-12 h-12 bg-orange-500/20 rounded-lg" />,
    },
    {
      name: "CSS",
      icon: <div className="w-12 h-12 bg-blue-500/20 rounded-lg" />,
    },
    {
      name: "JavaScript",
      icon: <div className="w-12 h-12 bg-yellow-500/20 rounded-lg" />,
    },
    {
      name: "React",
      icon: <div className="w-12 h-12 bg-cyan-500/20 rounded-lg" />,
    },
    {
      name: "Next.js",
      icon: <div className="w-12 h-12 bg-slate-500/20 rounded-lg" />,
    },
    {
      name: "Tailwind",
      icon: <div className="w-12 h-12 bg-teal-500/20 rounded-lg" />,
    },
  ];

  return (
    <section className="min-h-[80vh] w-full bg-[#020617] py-24 px-6 relative overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative mb-20 text-center">
        <h2 className="text-6xl md:text-7xl font-black text-white/5 uppercase tracking-tighter absolute -top-10 left-1/2 -translate-x-1/2 select-none">
          Abilities
        </h2>
        <h3 className="text-4xl font-bold text-white relative z-10">
          Minhas <span className="text-cyan-400">Skills</span>
        </h3>
        <div className="h-1 w-12 bg-cyan-500 mx-auto mt-4 rounded-full" />
      </div>

      <button className="mt-16 px-8 py-3 rounded-full bg-transparent border border-white/20 text-white font-bold text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300">
        View All Stack
      </button>
    </section>
  );
};

export default SkillsSection;
