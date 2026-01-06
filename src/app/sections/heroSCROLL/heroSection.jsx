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
    <section className="relative min-h-screen w-full bg-[#0A0F1A] flex flex-col items-center justify-center overflow-hidden px-4">
      <div className="flex flex-col items-center z-10 text-center pb-10 md:pb-30">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          className={`${bodoni.className} text-3xl sm:text-4xl md:text-6xl mb-[-10px] sm:mb-[-20px] md:mb-[-40px] pb-6 md:pb-10 text-blue-600`}
        >
          portfólio
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className={`${inter.className} text-[16vw] sm:text-[18vw] md:text-[16rem] font-[900] leading-none tracking-tighter text-white`}
        >
          FRONT
          <span
            className={`${inter.className} inline-block blur-[4px] hover:blur-[0px] transition-all duration-1000 opacity-80`}
          >
            -End
          </span>
        </motion.h1>

        <div className="flex gap-4 sm:gap-8 items-center mt-6 md:mt-0 text-[10px] md:text-xs tracking-[0.5em] uppercase font-bold text-zinc-900">
          <div className="cursor-pointer hover:scale-110 md:hover:scale-120 duration-300 w-8 sm:w-12 md:w-[50px]">
            <a href="https://github.com/BreninDevv">
              <Image src={GithubLogo} alt="Github Logo" layout="responsive" />
            </a>
          </div>
          <div className="w-[1px] bg-gray-400 h-6 sm:h-10"></div>
          <div className="cursor-pointer hover:scale-110 md:hover:scale-120 duration-300 w-8 sm:w-12 md:w-[50px]">
            <Image src={LinkedinLogo} alt="Linkedin Logo" layout="responsive" />
          </div>
        </div>
      </div>

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.12] mix-blend-multiply"
        style={{
          backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')`,
        }}
      />

      <div className="absolute bottom-6 md:bottom-10 w-full text-center px-4">
        <p
          className={`${inter.className} text-[8px] sm:text-[10px] md:text-[12px] tracking-[0.4em] sm:tracking-[0.8em] uppercase text-blue-600 opacity-50`}
        >
          Breno Henrique Ribeiro • © 2026
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
