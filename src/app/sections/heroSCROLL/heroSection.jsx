"use client";
import React from "react";
import { motion } from "framer-motion";
import { Inter, Bodoni_Moda } from "next/font/google";
import Image from "next/image";
import GithubLogo from "../../assets/githublogo.webp";
import LinkedinLogo from "../../assets/linkedin.png";

const inter = Inter({ subsets: ["latin"], weight: ["900"] });
const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400"],
  style: "italic",
});

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full bg-[#EBEBEB] flex flex-col items-center justify-center overflow-hidden">
      <div className="flex flex-col items-center z-10 text-center pb-30">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          className={`${bodoni.className} text-4xl md:text-6xl mb-[-20px] md:mb-[-40px] pb-10 text-zinc-800`}
        >
          portfólio
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className={`${inter.className} text-[18vw] md:text-[16rem] font-[900] leading-none tracking-tighter text-[#1A1A1A] uppercase`}
        >
          FRONT
          <span className="inline-block blur-[4px] opacity-80 hover:blur-[0px] transition-all duration-1000">
            -END
          </span>
        </motion.h1>

        <div className="flex gap-8 text-[10px] md:text-xs tracking-[0.5em] uppercase font-bold text-zinc-900">
          <div className="cursor-pointer hover:scale-120 duration-300">
            <Image src={GithubLogo} alt="Github Logo" width={50} />
          </div>
          <div className="w-[1px] bg-gray-400 h-10"></div>
          <div className="cursor-pointer hover:scale-120 duration-300">
            <Image src={LinkedinLogo} alt="Linkedin Logo" width={50} />
          </div>
        </div>
      </div>

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.12] mix-blend-multiply"
        style={{
          backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')`,
        }}
      />

      <div className="absolute bottom-10 w-full text-center">
        <p
          className={`${inter.className} text-[12px] tracking-[0.8em] uppercase text-zinc-800 opacity-50`}
        >
          Breno Henrique Ribeiro • © 2026
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
