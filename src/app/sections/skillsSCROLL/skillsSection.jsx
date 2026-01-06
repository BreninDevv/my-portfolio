"use client";
import React from "react";
import { motion } from "framer-motion";
import { Inter, Bodoni_Moda } from "next/font/google";
import Image from "next/image";
import Js from "../../assets/jsicon.png";
import Html from "../../assets/htmlicon.png";
import Css from "../../assets/cssicon.png";
import Next from "../../assets/nexticon.png";
import ReactIcon from "../../assets/reacticon.png";
import tailwind from "../../assets/tailwindicon.png";

const inter = Inter({ subsets: ["latin"], weight: ["900", "400"] });
const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400"],
  style: "italic",
});

const skills = [
  {
    category: "Core",
    items: [
      { name: "Javascript", icon: Js },
      { name: "HTML", icon: Html },
      { name: "CSS", icon: Css },
    ],
  },
  {
    category: "Frameworks",
    items: [
      { name: "Next.js", icon: Next },
      { name: "React", icon: ReactIcon },
      { name: "Tailwind", icon: tailwind },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section className="relative h-screen w-full bg-[#EBEBEB] flex flex-col items-center justify-center overflow-hidden selection:bg-black selection:text-white px-6">
      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center">
        <div className="relative flex flex-col items-center mb-8 md:mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`${bodoni.className} text-3xl md:text-6xl mb-[-8px] md:mb-[-25px] text-zinc-900 z-10`}
          >
            minhas
          </motion.span>

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className={`${inter.className} text-[15vw] md:text-[10rem] font-[900] leading-none tracking-tighter text-[#1A1A1A] uppercase`}
          >
            SKILLS
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 w-full">
          {skills.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex flex-col items-center md:items-start"
            >
              <div className="flex flex-col items-center md:items-start mb-4">
                <div className="w-[1px] h-8 bg-black/20" />
                <div className="w-1.5 h-1.5 bg-black rounded-full -mt-1" />
                <h3
                  className={`${inter.className} mt-2 text-[9px] tracking-[0.4em] uppercase font-black text-zinc-400`}
                >
                  {group.category}
                </h3>
              </div>

              <ul className="space-y-4 md:space-y-6">
                {group.items.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center gap-3 group justify-center md:justify-start"
                  >
                    <div className="w-6 md:w-10">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={40}
                        height={40}
                        className="grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    <span
                      className={`${inter.className} text-2xl md:text-5xl font-[900] text-[#1A1A1A] uppercase tracking-tighter group-hover:text-blue-600 transition-colors`}
                    >
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-12 md:mt-16 flex flex-col items-center group cursor-pointer">
          <div className="w-[1px] h-10 bg-black/30 group-hover:h-14 transition-all" />
          <a
            href="/all-skills"
            className={`${bodoni.className} text-xl md:text-3xl mt-4 text-zinc-800 hover:italic transition-all`}
          >
            ver stack completa
          </a>
        </motion.div>
      </div>

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.08] mix-blend-multiply"
        style={{
          backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')`,
        }}
      />
      <div className="absolute bottom-6 opacity-30">
        <p className={`${inter.className} text-[8px] tracking-[1em] uppercase`}>
          Stack 2026
        </p>
      </div>
    </section>
  );
};

export default SkillsSection;
