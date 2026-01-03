"use client";
import React from "react";
import { motion } from "framer-motion";
import GithubIcon from "../../assets/githubLo.png";
import LinkedinIcon from "../../assets/linkedin.png";
import Image from "next/image";

const HeroSection = () => {
  // Variantes para os pontos animados
  const dotVariants = {
    animate: (i) => ({
      opacity: [0, 1, 0],
      transition: {
        repeat: Infinity,
        duration: 1.5,
        delay: i * 0.3,
      },
    }),
  };

  return (
    <section className="relative min-h-screen w-full bg-[#f3efe8] flex flex-col items-center justify-center overflow-hidden selection:bg-[#0033ff] selection:text-white">
      {/* --- BACKGROUND ANIMATION --- */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{ opacity: [0.4, 0.6, 0.4], x: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-[-5%] right-[-5%] w-[70vw] h-[70vw] bg-[#5cecff]/20 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{ opacity: [0.3, 0.5, 0.3], x: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-[-10%] left-[-5%] w-[60vw] h-[60vw] bg-[#0033ff]/10 blur-[100px] rounded-full"
        />
      </div>

      {/* --- FRAME LINES --- */}
      <div className="absolute inset-0 z-0 pointer-events-none px-6 md:px-16 py-10 md:py-16">
        <div className="relative w-full h-full border border-[#1a1a1a]/5">
          <div className="absolute left-[8%] top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#1a1a1a]/10 to-transparent" />
          <div className="absolute right-[8%] top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#1a1a1a]/10 to-transparent" />
          <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-[#0033ff]/40" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-[#0033ff]/40" />
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-5xl text-center">
        {/* Título Principal: Cargo (Front-end) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-2"
        >
          <h1
            className="text-[14vw] md:text-[8rem] lg:text-[10rem] font-bold text-[#101e31] leading-none uppercase tracking-tighter"
            style={{ fontFamily: "'Boldonse', sans-serif" }}
          >
            Front-end
          </h1>
        </motion.div>

        {/* Subtítulo: Portfólio com pontos animados */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-1 mb-10"
        >
          <span className="text-3xl md:text-5xl font-light italic text-[#0f253d]">
            Developer
          </span>
          <div className="flex text-3xl md:text-5xl font-light text-[#0033ff] ml-1">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                custom={i}
                variants={dotVariants}
                animate="animate"
              >
                .
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* SOCIAL LINKS */}
        <div className="flex items-center gap-8 mb-12">
          <motion.a
            whileHover={{ y: -5 }}
            href="#"
            className="transition-opacity hover:opacity-70"
          >
            <Image src={GithubIcon} alt="Github" width={45} height={45} />
          </motion.a>
          <div className="w-[1px] h-8 bg-[#1a1a1a]/10" />
          <motion.a
            whileHover={{ y: -5 }}
            href="#"
            className="transition-opacity hover:opacity-70"
          >
            <Image src={LinkedinIcon} alt="Linkedin" width={45} height={45} />
          </motion.a>
        </div>

        {/* DESCRIÇÃO */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          className="text-[#1a1a1a] text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase max-w-sm leading-relaxed"
        >
          Equilibrando engenharia técnica e <br /> estética de alto padrão.
        </motion.p>
      </div>

      {/* --- SCROLL INDICATOR COM SETA --- */}
      <footer className="absolute bottom-10 w-full flex flex-col items-center">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[8px] font-black text-[#0033ff]/40 uppercase tracking-[0.6em] ml-[0.6em]">
            Scroll
          </span>
          <div className="relative flex flex-col items-center">
            <div className="w-[1px] h-10 bg-gradient-to-b from-[#0033ff]/60 to-transparent" />
            <div className="w-1.5 h-1.5 border-r border-b border-[#0033ff]/60 rotate-45 -mt-1.5" />
          </div>
        </motion.div>
      </footer>

      {/* NOISE OVERLAY */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')`,
        }}
      />
    </section>
  );
};

export default HeroSection;
