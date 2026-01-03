import React from "react";
import AboutContent from "../../components/aboutComponents/aboutContent";
import SkillCard from "../../components/skillsComponents/skillsCard";

const AboutSection = () => {
  const skills = [
    { name: "HTML", icon: <div className="w-10 h-10 bg-orange-100 rounded" /> },
    { name: "CSS", icon: <div className="w-10 h-10 bg-blue-100 rounded" /> },
    { name: "React", icon: <div className="w-10 h-10 bg-cyan-100 rounded" /> },
    {
      name: "Next.js",
      icon: <div className="w-10 h-10 bg-slate-100 rounded" />,
    },
    {
      name: "Tailwind",
      icon: <div className="w-10 h-10 bg-teal-100 rounded" />,
    },
    { name: "Node", icon: <div className="w-10 h-10 bg-green-100 rounded" /> },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-[#e0f2fe] via-[#f0f9ff] to-[#e0f2fe]">
      <section className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-300/20 blur-[100px] rounded-full" />

        <AboutContent />

        <div className="absolute bottom-10 animate-bounce">
          <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">
            Skills
          </span>
          <div className="w-[1px] h-10 bg-blue-300 mx-auto mt-2" />
        </div>
      </section>

      <section className="h-screen w-full flex flex-col items-center justify-center px-6">
        <div className="max-w-5xl w-full text-center">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-blue-900 uppercase">
              Minha Stack
            </h2>
            <div className="h-1 w-12 bg-blue-500 mx-auto mt-4 rounded-full" />
          </div>

          <button className="mt-20 text-blue-600 font-bold border-b-2 border-blue-200 hover:border-blue-600 transition-all pb-1 uppercase text-xs tracking-widest">
            Ver todas as competências
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
