"use client";
import React from "react";
import { motion } from "framer-motion";
import { Inter, Bodoni_Moda } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["900", "400"] });
const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400"],
  style: "italic",
});

const AboutSection = () => {
  return (
    <section className="relative min-h-screen w-full bg-[#0A0F1A] flex flex-col items-center py-20 md:py-32 px-6 overflow-hidden selection:bg-[#0033ff] selection:text-white">
      <div className="relative flex flex-col items-center mb-16 md:mb-24 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`${bodoni.className} text-4xl sm:text-5xl md:text-7xl mb-[-12px] md:mb-[-30px] text-blue-400/80 z-10`}
        >
          um pouco
        </motion.span>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`${inter.className} text-[14vw] md:text-[10rem] font-[900] leading-none tracking-tighter text-white uppercase`}
        >
          SOBRE MIM
        </motion.h2>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-start justify-between w-full max-w-7xl gap-12 md:gap-16">
        <div className="hidden md:flex flex-col items-center">
          <div className="w-[1px] h-32 bg-blue-500/30" />
          <div className="w-2 h-2 bg-blue-500 rounded-full -mt-1 shadow-[0_0_10px_#3b82f6]" />
        </div>

        <div className="flex-1">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`${inter.className} text-xl sm:text-2xl md:text-4xl font-light leading-relaxed text-zinc-300 mb-10`}
          >
            Focado em construir experiências que equilibram{" "}
            <span className={`${bodoni.className} text-white`}>
              estética minimalista
            </span>{" "}
            e performance técnica impecável.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-white/10 pt-10"
          >
            <div className="w-120">
              <h4 className="text-[10px] tracking-[0.4em] uppercase font-black text-blue-400 mb-3">
                Foco Atual
              </h4>
              <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
                Evolução constante através do estudo diário, aprofundamento em
                JavaScript, React e Next.js, e desenvolvimento contínuo de
                projetos práticos para consolidar conhecimento.
              </p>
            </div>
            <div className="w-120">
              <h4 className="text-[10px] tracking-[0.4em] uppercase font-black text-blue-400 mb-3">
                Visão
              </h4>
              <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
                Aprender nunca é um passo inicial, é parte permanente do
                processo de escrever código melhor.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-screen"
        style={{
          backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')`,
        }}
      />
    </section>
  );
};

export default AboutSection;
