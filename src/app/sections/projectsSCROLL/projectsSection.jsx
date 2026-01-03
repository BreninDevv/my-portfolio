import React from "react";
import Link from "next/link";
import ProjectCard from "../../components/projectsComponents/projectCard";

const ProjectsSection = () => {
  const projectsData = [
    {
      id: 1,
      title: "E-commerce Pro",
      description:
        "Plataforma completa de vendas online com checkout integrado.",
      link: "#",
      github: "#",
      icons: <div className="w-5 h-5 bg-blue-500/20 rounded" />,
    },
    {
      id: 2,
      title: "Task Manager",
      description: "App de gerenciamento de tarefas com foco em produtividade.",
      link: "#",
      github: "#",
      icons: <div className="w-5 h-5 bg-purple-500/20 rounded" />,
    },
    {
      id: 3,
      title: "Weather App",
      description: "Consulta de previsão do tempo em tempo real via API.",
      link: "#",
      github: "#",
      icons: <div className="w-5 h-5 bg-cyan-500/20 rounded" />,
    },
  ];

  return (
    <section className="h-screen w-full bg-[#050811] flex flex-col justify-center px-6 md:px-20 relative">
      <div className="max-w-7xl mx-auto w-full">
        {/* Cabeçalho */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.4em] mb-2 block">
              Portfólio
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">
              Projetos
            </h2>
          </div>

          <Link
            href="/projects"
            className="text-slate-500 hover:text-white text-[10px] font-black uppercase tracking-widest border-b border-slate-800 pb-1 transition-all"
          >
            Ver tudo
          </Link>
        </div>

        {/* Grid ajustado para caber no h-screen */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
