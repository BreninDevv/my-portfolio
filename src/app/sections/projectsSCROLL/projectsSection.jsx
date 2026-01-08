"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Inter, Bodoni_Moda } from "next/font/google";
import Image from "next/image";

// Assets
import NextIcon from "../../assets/nexticon.png";
import TailwindIcon from "../../assets/tailwindicon.png";
import DashboardProject from "../../assets/dashboardFinance.png";
import ApiClima from "../../assets/apiClima.png";
import Ecommerce from "../../assets/ecommerce.png";
import LandingPage from "../../assets/landingpage.png";
import Cssicon from "../../assets/cssicon.png";
import Htmlicon from "../../assets/htmlicon.png";
import Jsicon from "../../assets/jsicon.png";
import Reacticon from "../../assets/reacticon.png";
import Nodeicon from "../../assets/nodeicon.png";
import Mongoicon from "../../assets/mongoicon.png";

const inter = Inter({ subsets: ["latin"], weight: ["900", "400", "500"] });
const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400"],
  style: "italic",
});

const ProjectsSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const projectData = [
    {
      title: "Dashboard Finance",
      description:
        "Dashboard financeiro com login e autenticação totalmente funcional.",
      image: DashboardProject,
      featured: true,
      tech: [
        { name: "Next.js", icon: NextIcon },
        { name: "Tailwind", icon: TailwindIcon },
        { name: "Node.js", icon: Nodeicon },
        { name: "MongoDB", icon: Mongoicon },
      ],
      link: "https://dashboard-finance-gray.vercel.app/dashboard",
      github: "https://github.com/BreninDevv/dashboard-finance",
      size: "md:col-span-2",
    },
    {
      title: "Mini E-commerce",
      description: "Mini E-commerce com funcionalidades de modal e cart.",
      image: Ecommerce,
      tech: [
        { name: "React", icon: Reacticon },
        { name: "Tailwind", icon: TailwindIcon },
      ],
      link: "https://e-commerce-breno-ten-pi.vercel.app",
      github: "https://github.com/BreninDevv/e-commerce-react",
      size: "md:col-span-1",
    },
    {
      title: "SkyCast API",
      description: "Dashboard meteorológico com dados em tempo real.",
      image: ApiClima,
      tech: [
        { name: "HTML5", icon: Htmlicon },
        { name: "CSS3", icon: Cssicon },
        { name: "JavaScript", icon: Jsicon },
      ],
      link: "https://brenindevv.github.io/consumo-api-clima/front-end/",
      github: "https://github.com/BreninDevv/consumo-api-clima",
      size: "md:col-span-1",
    },
    {
      title: "Landing Page Responsiva",
      description: "Interface com objetivo em responsividade",
      image: LandingPage,
      tech: [
        { name: "HTML5", icon: Htmlicon },
        { name: "CSS3", icon: Cssicon },
      ],
      link: "https://brenindevv.github.io/landing-page-responsiva/",
      github: "https://github.com/BreninDevv/landing-page-responsiva",
      size: "md:col-span-2",
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full bg-[#050510] py-24 px-6 md:px-12 lg:px-20 selection:bg-blue-500 selection:text-white overflow-hidden"
    >
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-10">
          <motion.div {...fadeInUp} className="relative flex flex-col">
            <span
              className={`${bodoni.className} text-3xl md:text-5xl lg:text-6xl text-blue-500 mb-[-15px] md:mb-[-25px] block ml-1 z-20`}
            >
              meus
            </span>
            <h2
              className={`${inter.className} text-[18vw] lg:text-[10vw] xl:text-[9.5rem] font-[900] text-white leading-none uppercase tracking-tighter relative z-10`}
            >
              PROJETOS
            </h2>
          </motion.div>

          <Link
            href="/projects"
            className={`${inter.className} group flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.3em] text-zinc-500 hover:text-white transition-all mb-4 outline-none`}
          >
            <span className="border-b border-zinc-800 group-hover:border-white pb-1 transition-colors">
              Ver catálogo completo
            </span>
            <span className="text-xl group-hover:translate-x-2 transition-transform duration-300">
              →
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-24">
          {projectData.map((project, idx) => (
            <motion.div
              key={idx}
              {...fadeInUp}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className={`${project.size} flex flex-col`}
            >
              <div className="flex flex-col items-start mb-6">
                <div className="w-[1px] h-8 bg-white/20" />
                <div
                  className={`w-1.5 h-1.5 rounded-full -mt-1 ${
                    project.featured
                      ? "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                      : "bg-white/40"
                  }`}
                />
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-white/5 rounded-2xl border border-white/10 shadow-2xl transition-all duration-500 block"
              >
                <div className="relative w-full aspect-video md:aspect-[16/9] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors duration-500" />
                </div>
              </a>

              <div className="mt-8 px-2">
                <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                  <div className="flex flex-col flex-1">
                    <h3
                      className={`${inter.className} text-2xl md:text-4xl text-white font-bold tracking-tight flex items-center gap-3`}
                    >
                      {project.title}
                      {project.featured && (
                        <span
                          className="text-blue-500 text-xl animate-pulse"
                          title="Projeto em destaque"
                        >
                          ★
                        </span>
                      )}
                    </h3>
                    <p
                      className={`${inter.className} text-zinc-400 text-sm md:text-lg mt-3 max-w-2xl leading-relaxed`}
                    >
                      {project.description}
                    </p>
                  </div>

                  <div className="flex gap-3 bg-white/5 backdrop-blur-md p-2.5 rounded-xl border border-white/10 shrink-0">
                    {project.tech.map((t, i) => (
                      <div
                        key={i}
                        className="relative w-5 h-5 md:w-6 md:h-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-125 transition-all duration-300 cursor-pointer"
                        title={t.name}
                      >
                        <Image
                          src={t.icon}
                          alt={t.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-6 mt-8">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 text-[10px] md:text-xs font-black uppercase tracking-widest hover:text-blue-300 transition-all border-b border-blue-500/0 hover:border-blue-300"
                  >
                    VISITAR PROJETO
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 text-[10px] md:text-xs font-black uppercase tracking-widest hover:text-white transition-colors"
                  >
                    GITHUB
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
