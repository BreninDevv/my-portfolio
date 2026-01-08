"use client";
import React, { useState } from "react";
import { Inter, Bodoni_Moda } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "900"] });
const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400"],
  style: "italic",
});

const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const email = "breno.devv.contato@gmail.com";

  const handleCopyEmail = (e) => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer
      className={`w-full bg-[#1c2230] text-slate-300 pt-20 pb-10 px-6 ${inter.className}`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-16 border-b border-white/10 items-center">
          <div className="flex flex-col justify-center">
            <span
              className={`${bodoni.className} text-blue-500 text-3xl md:text-4xl mb-[-10px]`}
            >
              vamos criar
            </span>
            <h2 className="text-5xl md:text-7xl font-[900] text-white mb-6 tracking-tighter uppercase leading-none">
              Algo <span className="text-blue-500">Incrível?</span>
            </h2>
            <p
              className={`${bodoni.className} text-zinc-400 text-xl mb-8 max-w-md italic`}
            >
              Estou sempre aberto a novos projetos, colaborações ou apenas para
              trocar uma ideia sobre tecnologia.
            </p>

            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <a
                  href={`mailto:${email}`}
                  onClick={handleCopyEmail}
                  className="xl:flex lg:flex items-center gap-4 group w-fit cursor-pointer"
                  title="Clique para enviar e-mail ou copiar"
                >
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-500 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <span className="text-white text-sm font-black tracking-widest group-hover:text-blue-400 transition-colors lowercase">
                    {email}
                  </span>
                </a>
                <p className="text-[10px] font-bold tracking-[0.2em] text-blue-500 uppercase h-4">
                  {copied
                    ? "✓ E-mail copiado para a área de transferência"
                    : ""}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 py-16 md:py-24 px-10 rounded-[2rem] border border-white/5 flex flex-col justify-center relative overflow-hidden group">
            <h3 className="text-zinc-500 font-black mb-8 uppercase tracking-[0.4em] text-[10px]">
              Contato _
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
              <a
                href="https://linkedin.com/in/seu-usuario"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-[#0A0F1A] hover:bg-blue-600 text-white transition-all duration-500 flex items-center justify-between border border-white/5 hover:border-blue-400 group/link"
              >
                <span className="font-black text-[10px] uppercase tracking-widest">
                  LinkedIn
                </span>
                <span className="group-hover/link:translate-x-1 transition-transform">
                  ↗
                </span>
              </a>
              <a
                href="https://github.com/BreninDevv"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-[#0A0F1A] hover:bg-zinc-800 text-white transition-all duration-500 flex items-center justify-between border border-white/5 hover:border-zinc-500 group/link"
              >
                <span className="font-black text-[10px] uppercase tracking-widest">
                  GitHub
                </span>
                <span className="group-hover/link:translate-x-1 transition-transform">
                  ↗
                </span>
              </a>
            </div>
            <div className="absolute left-20 -bottom-4 text-white/[0.02] text-9xl font-black italic select-none">
              Social
            </div>
          </div>
        </div>

        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-white font-[900] text-2xl tracking-tighter mb-1 uppercase">
              BRENO<span className="text-blue-500">HENRIQUE</span>
            </span>
            <p className="text-zinc-600 text-[9px] uppercase tracking-[0.3em]">
              © 2026 Crafted with precision
            </p>
          </div>

          <nav className="flex gap-8 text-[9px] font-[900] uppercase tracking-[0.3em] text-zinc-500">
            <a href="#home" className="hover:text-blue-500 transition-colors">
              Home
            </a>
            <a
              href="#projects"
              className="hover:text-blue-500 transition-colors"
            >
              Projetos
            </a>
            <a href="#about" className="hover:text-blue-500 transition-colors">
              Sobre
            </a>
            <a href="#skills" className="hover:text-blue-500 transition-colors">
              Skills
            </a>
          </nav>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-500 group"
          >
            <span className="group-hover:-translate-y-1 transition-transform text-lg">
              ↑
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
