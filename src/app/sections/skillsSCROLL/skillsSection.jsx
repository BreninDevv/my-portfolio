"use client";
import React from "react";
import { motion } from "framer-motion";
import { Inter, Bodoni_Moda } from "next/font/google";
import Image from "next/image";

// Assets
import Js from "../../assets/jsicon.png";
import Html from "../../assets/htmlicon.png";
import Css from "../../assets/cssicon.png";
import Next from "../../assets/nexticon.png";
import ReactIcon from "../../assets/reacticon.png";
import tailwind from "../../assets/tailwindicon.png";

const inter = Inter({ subsets: ["latin"], weight: ["900", "400", "500"] });
const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400"],
  style: "italic",
});

const skills = [
  {
    category: "CORE",
    items: [
      { name: "JAVASCRIPT", icon: Js },
      { name: "HTML", icon: Html },
      { name: "CSS", icon: Css },
    ],
  },
  {
    category: "FRAMEWORKS",
    items: [
      { name: "NEXT.JS", icon: Next },
      { name: "REACT", icon: ReactIcon },
      { name: "TAILWIND", icon: tailwind },
    ],
  },
];

const AboutSkillsSection = () => {
  const bgTextAbout = "FRONT-END FRONT-END FRONT-END FRONT-END FRONT-END";
  const bgTextSkills =
    "MINHAS SKILLS MINHAS SKILLS MINHAS SKILLS MINHAS SKILLS";

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <section className="relative min-h-screen w-full bg-[#EBEBEB] flex flex-col items-center py-12 md:py-24 selection:bg-black selection:text-white overflow-hidden">
      <div
        id="about"
        className="relative z-10 w-full max-w-7xl flex flex-col items-center mb-32 md:mb-60"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200vw] flex flex-col gap-2 md:gap-4 opacity-[0.03] select-none pointer-events-none uppercase font-black italic">
          {[...Array(4)].map((_, i) => (
            <p
              key={i}
              className={`${inter.className} text-[10vw] md:text-[5vw] leading-none text-center whitespace-nowrap`}
            >
              {bgTextAbout}
            </p>
          ))}
        </div>

        <motion.div
          {...fadeInUp}
          className="relative flex flex-col items-center mb-8 md:mb-12 text-center z-10 px-4"
        >
          <span
            className={`${bodoni.className} text-2xl md:text-5xl lg:text-6xl mb-[-8px] md:mb-[-25px] lg:mb-[-30px] text-zinc-900 z-20`}
          >
            um pouco
          </span>
          <h2
            className={`${inter.className} text-[16vw] md:text-[10vw] lg:text-[10rem] font-[900] leading-none tracking-tighter text-[#1A1A1A] uppercase`}
          >
            SOBRE MIM
          </h2>
        </motion.div>

        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.2 }}
          className="relative z-10 max-w-5xl text-center px-6"
        >
          <div className="w-32 h-32 md:w-64 md:h-64 border-[2px] md:border-[3px] border-black rounded-full mx-auto mb-8 md:mb-10 bg-zinc-200 overflow-hidden shadow-2xl" />
          <p
            className={`${inter.className} text-lg md:text-3xl lg:text-4xl font-medium text-zinc-800 tracking-tight leading-tight`}
          >
            Sou desenvolvedor front-end focado em evolução constante, estudando
            diariamente para escrever código limpo e criar projetos práticos que
            resolvem problemas reais.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 w-full max-w-5xl mt-16 md:mt-24 px-6">
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-start px-6 border-l border-black/10"
          >
            <h4
              className={`${inter.className} text-xs md:text-sm tracking-[0.4em] uppercase font-black text-zinc-900`}
            >
              FOCO ATUAL
            </h4>
            <p
              className={`${inter.className} text-[10px] md:text-xs text-zinc-400 mt-2 uppercase leading-relaxed max-w-xs`}
            >
              Evolução constante através do estudo diário, aprofundamento em JS,
              React e Next.js.
            </p>
          </motion.div>
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-start px-6 border-l border-black/10"
          >
            <h4
              className={`${inter.className} text-xs md:text-sm tracking-[0.4em] uppercase font-black text-zinc-900`}
            >
              VISÃO
            </h4>
            <p
              className={`${inter.className} text-[10px] md:text-xs text-zinc-400 mt-2 uppercase leading-relaxed max-w-xs`}
            >
              Aprender nunca é um passo final, é parte permanente do processo de
              escrever código melhor.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="relative w-full py-16 md:py-32 opacity-[0.03] select-none pointer-events-none uppercase font-black italic overflow-hidden">
        <div className="w-[200vw] flex flex-col gap-2 md:gap-4 relative left-1/2 -translate-x-1/2">
          {[...Array(3)].map((_, i) => (
            <p
              key={i}
              className={`${inter.className} text-[10vw] md:text-[6vw] leading-none text-center whitespace-nowrap`}
            >
              {bgTextSkills}
            </p>
          ))}
        </div>
      </div>

      <div
        id="skills"
        className="relative z-10 w-full max-w-[95rem] px-6 md:px-10 mt-10 md:mt-20"
      >
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-10 xl:gap-20">
          <div className="w-full lg:w-7/12 flex flex-col">
            <motion.div
              {...fadeInUp}
              className="flex flex-col items-center lg:items-start mb-12 md:mb-20"
            >
              <span
                className={`${bodoni.className} text-2xl md:text-5xl mb-[-10px] md:mb-[-22px] text-zinc-900 z-10`}
              >
                minhas
              </span>
              <h2
                className={`${inter.className} text-[18vw] md:text-[12vw] lg:text-[8rem] font-[900] leading-none tracking-tighter text-[#1A1A1A] uppercase text-center lg:text-left`}
              >
                SKILLS
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 lg:gap-x-30 gap-y-12">
              {skills.map((group, idx) => (
                <div key={idx} className="flex flex-col items-start">
                  <motion.div
                    {...fadeInUp}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col items-start mb-6 md:mb-10"
                  >
                    <div className="w-[1px] h-8 md:h-10 bg-black/20" />
                    <div className="w-2 h-2 bg-black rounded-full -mt-1.5" />
                    <h3
                      className={`${inter.className} mt-3 text-[10px] md:text-xs tracking-[0.5em] uppercase font-black text-zinc-400`}
                    >
                      {group.category}
                    </h3>
                  </motion.div>
                  <ul className="space-y-6 md:space-y-8 w-full">
                    {group.items.map((skill, i) => (
                      <motion.li
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 md:gap-6 group cursor-pointer w-full"
                      >
                        <div className="w-8 h-8 md:w-10 lg:w-12 md:h-10 lg:h-12 relative shrink-0">
                          <Image
                            src={skill.icon}
                            alt={skill.name}
                            fill
                            className="grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all object-contain"
                          />
                        </div>
                        <span
                          className={`${inter.className} text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-6xl font-black text-[#1A1A1A] tracking-tighter group-hover:translate-x-2 md:group-hover:translate-x-4 group-hover:text-zinc-600 transition-all duration-300 whitespace-nowrap`}
                        >
                          {skill.name}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-5/12 flex relative pl-0 lg:pl-10 xl:pl-16 pt-10 lg:pt-20">
            <div className="hidden lg:block absolute left-0 top-0 w-[2px] h-full bg-black/10" />

            <div className="flex flex-col w-full justify-around py-10 gap-12 md:gap-16 lg:gap-24">
              {[
                { title: "INTERFACE DESIGN", align: "left" },
                { title: "CLEAN CODE", align: "right" },
                { title: "RESPONSIVE UI", align: "left" },
                { title: "USER EXPERIENCE", align: "right" },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: item.align === "left" ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ x: item.align === "left" ? 10 : -10 }}
                  transition={{ delay: 0.2 * i }}
                  className={`relative flex items-center w-full ${
                    item.align === "right"
                      ? "justify-end lg:pr-6"
                      : "justify-start"
                  } group cursor-pointer`}
                >
                  {item.align === "left" && (
                    <div className="hidden lg:flex absolute -left-[49px] xl:-left-[71px] flex-col items-center">
                      <div className="w-2 h-2 bg-black rounded-full mb-1" />
                      <div className="w-[2px] h-8 md:h-10 bg-black/20" />
                    </div>
                  )}
                  <p
                    className={`${inter.className} text-2xl md:text-3xl lg:text-2xl xl:text-4xl font-black uppercase tracking-tighter text-zinc-800 group-hover:text-zinc-500 transition-all duration-300`}
                  >
                    {item.title}
                  </p>
                  {item.align === "right" && (
                    <div className="hidden lg:flex absolute -right-[6px] flex-col items-center">
                      <div className="w-[2px] h-8 md:h-10 bg-black/20" />
                      <div className="w-2 h-2 bg-black rounded-full mt-1" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center mt-20 md:mt-40">
          <div className="w-[1px] h-12 md:h-20 bg-black/20" />
          <a
            href="#"
            className={`${bodoni.className} text-xl md:text-3xl mt-4 italic text-zinc-800 hover:tracking-widest transition-all duration-500`}
          >
            ver stack completa
          </a>
        </div>
      </div>

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-multiply"
        style={{
          backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')`,
        }}
      />
    </section>
  );
};

export default AboutSkillsSection;
