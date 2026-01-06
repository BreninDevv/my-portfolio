"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Inter, Bodoni_Moda } from "next/font/google";
import ProjectCard from "../../components/projectsComponents/projectCard";

const inter = Inter({ subsets: ["latin"], weight: ["900", "400"] });
const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400"],
  style: "italic",
});

const ProjectsSection = () => {
  const projectsData = [
    {
      id: 1,
      title: "E-commerce Pro",
      description: "Plataforma de alta performance com checkout otimizado.",
      link: "#",
      github: "#",
    },
    {
      id: 2,
      title: "Task Manager",
      description: "Gerenciamento de fluxo de trabalho para equipes remotas.",
      link: "#",
      github: "#",
    },
    {
      id: 3,
      title: "Weather App",
      description: "Visualização de dados meteorológicos em tempo real.",
      link: "#",
      github: "#",
    },
  ];

  return (
    <section className="relative h-screen w-full bg-[#0A0F1A] flex flex-col px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl w-full z-10 mx-auto pt-10 md:pt-20 flex flex-col h-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span
              className={`${bodoni.className} text-2xl md:text-5xl text-blue-500 block mb-[-10px] md:mb-[-22px]`}
            >
              projetos
            </span>
            <h2
              className={`${inter.className} text-[13vw] md:text-[8rem] font-[900] text-white leading-none uppercase tracking-tighter`}
            >
              Selecionados
            </h2>
          </motion.div>

          <Link
            href="/projects"
            className={`${inter.className} hidden md:block text-[9px] font-black uppercase tracking-[0.5em] text-zinc-600 hover:text-white border-b border-zinc-800 pb-2 mb-4 transition-all`}
          >
            Ver catálogo completo
          </Link>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-12 flex-1 pb-10">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')`,
        }}
      />
    </section>
  );
};

export default ProjectsSection;
