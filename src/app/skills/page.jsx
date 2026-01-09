"use client";
import React from "react";
import { motion } from "framer-motion";
import { Inter, Bodoni_Moda } from "next/font/google";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  weight: ["900", "400", "500", "700"],
});
const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400"],
  style: "italic",
});

const SkillsPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const skillGroups = [
    {
      title: "Core / Fundamentos",
      skills: ["JavaScript (ES6+)", "HTML5 Semantic", "CSS3 / Flexbox / Grid"],
      description:
        "A base de tudo. Domínio sólido da estrutura e lógica essencial para a web.",
    },
    {
      title: "Frameworks & Estilização",
      skills: ["React.js", "Next.js (App Router)", "Tailwind CSS"],
      description:
        "Criação de interfaces modernas, performáticas e escaláveis com foco em UX.",
    },
    {
      title: "Ecossistema Fullstack (Em estudo)",
      skills: ["Node.js", "TypeScript", "MongoDB", "Express"],
      description:
        "Expandindo horizontes para o desenvolvimento do lado do servidor e banco de dados.",
    },
  ];

  return (
    <main className="min-h-screen w-full bg-[#050510] text-white selection:bg-blue-500 selection:text-white pb-24 overflow-hidden">
      <nav className="p-8 flex justify-between items-center relative z-50">
        <Link
          href="/"
          className={`${inter.className} font-black text-sm md:text-lg tracking-tighter uppercase`}
        >
          BRENO<span className="text-zinc-500">.DEV</span>
        </Link>
        <Link
          href="/"
          className={`${inter.className} text-[10px] font-bold tracking-[0.2em] uppercase border-b border-blue-500 hover:text-blue-400 transition-colors`}
        >
          Voltar ao Início
        </Link>
      </nav>

      <section className="relative pt-20 md:pt-32 px-6 flex flex-col items-center">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full opacity-[0.05] select-none pointer-events-none uppercase font-black italic text-center">
          <p
            className={`${inter.className} text-[18vw] leading-none whitespace-nowrap text-blue-900`}
          >
            TECH STACK TECH
          </p>
        </div>

        <motion.div {...fadeInUp} className="text-center z-10">
          <span
            className={`${bodoni.className} text-3xl md:text-6xl text-blue-500 block mb-4`}
          >
            meu arsenal de
          </span>
          <h1
            className={`${inter.className} text-[15vw] md:text-[12vw] font-[900] leading-[0.8] tracking-tighter text-white uppercase`}
          >
            SKILLS
          </h1>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto mt-32 px-6 flex flex-col gap-24">
        <motion.div {...fadeInUp} className="lg:w-2/3">
          <p
            className={`${inter.className} text-2xl md:text-3xl font-medium leading-tight text-zinc-300`}
          >
            Acredito na evolução constante. Meu foco principal é o Front-end de
            alta performance, mas estou mergulhando profundamente no{" "}
            <span className="text-white italic">universo Fullstack</span> para
            construir soluções completas de ponta a ponta.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skillGroups.map((group, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              transition={{ delay: index * 0.2 }}
              className="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-blue-900/10 hover:border-blue-500/50 transition-all duration-500"
            >
              <h3
                className={`${inter.className} text-xs font-black tracking-widest text-blue-500 uppercase mb-6`}
              >
                {group.title}
              </h3>
              <ul className="space-y-4 mb-8">
                {group.skills.map((skill, i) => (
                  <li
                    key={i}
                    className={`${inter.className} text-xl md:text-2xl font-bold text-white uppercase tracking-tighter`}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
              <p
                className={`${inter.className} text-sm text-zinc-500 leading-relaxed`}
              >
                {group.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...fadeInUp}
          className="bg-blue-600/10 border border-blue-500/20 p-8 md:p-12 rounded-[40px] relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-8 opacity-20 text-6xl italic font-black text-blue-500">
            {"{ }"}
          </div>
          <h4
            className={`${inter.className} text-xl font-black uppercase mb-4`}
          >
            Visão de Futuro: Fullstack
          </h4>
          <p
            className={`${inter.className} text-zinc-400 text-lg md:text-xl max-w-4xl leading-relaxed`}
          >
            Atualmente, meus estudos estão focados na stack{" "}
            <strong>MERN (MongoDB, Express, React, Node)</strong> aliada ao
            poder do <strong>TypeScript</strong>. Já possuo noções sólidas sobre
            como arquitetar APIs, gerenciar estados no servidor e estruturar
            bancos de dados não relacionais, buscando sempre aplicar as melhores
            práticas de desenvolvimento.
          </p>
        </motion.div>
      </section>

      <section className="mt-32 opacity-[0.03] select-none pointer-events-none">
        <p
          className={`${inter.className} text-[15vw] font-black leading-none text-center whitespace-nowrap`}
        >
          LEARN CODE REPEAT LEARN CODE
        </p>
      </section>

      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100]"
        style={{
          backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')`,
        }}
      />
    </main>
  );
};

export default SkillsPage;
