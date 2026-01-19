"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Inter, Bodoni_Moda } from "next/font/google";
import Image from "next/image";

// Assets
import NextIcon from "../assets/nexticon.png";
import TailwindIcon from "../assets/tailwindicon.png";
import DashboardProject from "../assets/dashboardFinance.png";
import ApiClima from "../assets/apiClima.png";
import Ecommerce from "../assets/ecommerce.png";
import LandingPage from "../assets/landingpage.png";
import TodoList from "../assets/todolist.png";
import MyPortfolio from "../assets/myportfolio.png";
import AngularProject from "../assets/projetoAngular.png";
import Nodeicon from "../assets/nodeicon.png";
import Mongoicon from "../assets/mongoicon.png";
import Htmlicon from "../assets/htmlicon.png";
import Cssicon from "../assets/cssicon.png";
import Jsicon from "../assets/jsicon.png";
import Reacticon from "../assets/reacticon.png";
import AngularIcon from "../assets/angularicon.png";

const inter = Inter({ subsets: ["latin"], weight: ["900", "400", "700"] });
const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400"],
  style: "italic",
});

const ProjectsPage = () => {
  const projects = [
    {
      id: "01",
      title: "Dashboard Finance",
      type: "Fullstack App",
      description:
        "Sistema completo de controle financeiro com gráficos dinâmicos e autenticação.",
      image: DashboardProject,
      link: "https://dashboard-finance-gray.vercel.app/dashboard",
      tech: [NextIcon, TailwindIcon, Nodeicon, Mongoicon],
    },
    {
      id: "02",
      title: "SkyCast API",
      type: "Integration",
      description:
        "Aplicação de clima que altera visualmente conforme a condição meteorológica local.",
      image: ApiClima,
      link: "https://brenindevv.github.io/consumo-api-clima/front-end/",
      tech: [Htmlicon, Cssicon, Jsicon],
    },
    {
      id: "03",
      title: "Mini E-commerce",
      type: "React / UX",
      description:
        "Interface de vendas focada em performance e usabilidade do carrinho de compras.",
      image: Ecommerce,
      link: "https://e-commerce-breno-ten-pi.vercel.app",
      tech: [Reacticon, TailwindIcon],
    },
    {
      id: "04",
      title: "Landing Page",
      type: "Performance",
      description:
        "Página institucional totalmente responsiva criada com foco em otimização de SEO.",
      image: LandingPage,
      link: "https://brenindevv.github.io/landing-page-responsiva/",
      tech: [Htmlicon, Cssicon],
    },
    {
      id: "05",
      title: "Todo List React",
      type: "study",
      description:
        "Gerenciador de tarefas para praticar conceitos de hooks e persistência de dados local.",
      image: TodoList,
      link: "https://todo-list-react-zeta-lovat.vercel.app",
      tech: [Reacticon, Cssicon],
    },
    {
      id: "06",
      title: "Nutrition Angular",
      type: "improvement",
      description:
        "Este projeto, é focado no estudo do framework angular, conceitos e fundamentos.",
      image: AngularProject,
      link: "https://angular-project-nutrition.vercel.app",
      tech: [AngularIcon, TailwindIcon, Nodeicon],
    },
    {
      id: "07",
      title: "My Portfólio",
      type: "Concept Design",
      description:
        "Este site, focado em animações premium e apresentação limpa de projetos.",
      image: MyPortfolio,
      link: "/",
      tech: [NextIcon, TailwindIcon],
    },
  ];

  return (
    <main className="min-h-screen w-full bg-[#050510] text-white overflow-x-hidden">
      <nav className="fixed top-0 w-full p-8 flex justify-between items-center z-50 bg-[#050510]/80 backdrop-blur-md">
        <Link
          href="/"
          className={`${inter.className} font-black text-lg uppercase`}
        >
          BRENO<span className="text-zinc-500">.DEV</span>
        </Link>
        <Link
          href="/"
          className={`${inter.className} text-[10px] font-black tracking-[0.3em] uppercase border-b border-blue-500`}
        >
          FECHAR
        </Link>
      </nav>

      <section className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <header className="mb-20">
          <h1 className={`${bodoni.className} text-blue-500 text-3xl mb-2`}>
            meus trabalhos
          </h1>
          <h2
            className={`${inter.className} text-5xl md:text-[8vw] font-black uppercase tracking-tighter`}
          >
            PROJETOS<span className="text-blue-500">.</span>
          </h2>
        </header>

        <div className="flex flex-col border-t border-white/10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group border-b border-white/10 py-10 flex flex-col md:flex-row md:items-center justify-between gap-8 hover:bg-white/[0.02] transition-all"
            >
              <div className="flex items-center gap-6 md:gap-12 flex-1">
                <span
                  className={`${inter.className} text-zinc-600 text-sm font-bold`}
                >
                  {project.id}
                </span>
                <div className="relative w-28 md:w-48 aspect-video rounded-lg overflow-hidden border border-white/10 bg-zinc-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="flex flex-col max-w-xl">
                  <a
                    href={project.link}
                    target="_blank"
                    className={`${inter.className} text-2xl md:text-5xl font-bold uppercase hover:text-blue-400 transition-colors`}
                  >
                    {project.title}
                  </a>
                  <p className="text-zinc-400 text-sm mt-2 italic">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-8 shrink-0">
                <div className="flex gap-3">
                  {project.tech.map((icon, i) => (
                    <div
                      key={i}
                      className="w-5 h-5 relative opacity-30 group-hover:opacity-100"
                    >
                      <Image
                        src={icon}
                        alt="icon"
                        fill
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-blue-600 transition-all"
                >
                  <span className="text-xl">↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="py-20 text-center border-t border-white/5">
        <h3 className={`${bodoni.className} text-2xl text-blue-500 mb-4`}>
          Vamos criar algo incrível?
        </h3>
        <Link
          href="/#contact"
          className="uppercase text-xs font-bold tracking-widest border-b border-white pb-1"
        >
          vamos lá
        </Link>
      </footer>
    </main>
  );
};

export default ProjectsPage;
