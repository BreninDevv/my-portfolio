"use client";
import React from "react";
import { motion } from "framer-motion";
import { Inter, Bodoni_Moda } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import FotoBreno from "../assets/brenoFoto.png";

const inter = Inter({
  subsets: ["latin"],
  weight: ["900", "400", "500", "700"],
});
const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400"],
  style: "italic",
});

const AboutMePage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <main className="min-h-screen w-full bg-[#EBEBEB] selection:bg-black selection:text-white pb-24 overflow-hidden">
      <nav className="p-8 flex justify-between items-center relative z-50">
        <Link
          href="/"
          className={`${inter.className} font-black text-sm tracking-tighter`}
        >
          BRENO<span className="text-zinc-400">.DEV</span>
        </Link>
        <Link
          href="/"
          className={`${inter.className} text-[10px] font-bold tracking-[0.2em] uppercase border-b border-black`}
        >
          Voltar ao Início
        </Link>
      </nav>

      <section className="relative pt-20 md:pt-32 px-6 flex flex-col items-center">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full opacity-[0.03] select-none pointer-events-none uppercase font-black italic text-center">
          <p
            className={`${inter.className} text-[20vw] leading-none whitespace-nowrap`}
          >
            HISTORY HISTORY
          </p>
        </div>

        <motion.div {...fadeInUp} className="text-center z-10">
          <span
            className={`${bodoni.className} text-3xl md:text-6xl text-zinc-900`}
          >
            conheça minha
          </span>
          <h1
            className={`${inter.className} text-[15vw] md:text-[12vw] font-[900] leading-[0.8] tracking-tighter text-[#1A1A1A] uppercase`}
          >
            TRAJETÓRIA
          </h1>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto mt-24 px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <motion.div {...fadeInUp} className="lg:col-span-5 flex flex-col gap-8">
          <div className="w-full aspect-[4/5] bg-zinc-300 border-[3px] border-black rounded-2xl overflow-hidden shadow-2xl relative">
            <div className="absolute inset-0 flex items-center justify-center text-zinc-400 font-bold uppercase tracking-widest italic text-xs">
              <Image
                src={FotoBreno}
                alt="Foto"
                width={300}
                className="rounded-xl"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3
              className={`${inter.className} text-xs tracking-[0.4em] font-black text-zinc-400 uppercase`}
            >
              Localização
            </h3>
            <p
              className={`${inter.className} text-xl font-medium text-zinc-800 uppercase italic`}
            >
              Guarulhos, SP Brasil
            </p>
          </div>
        </motion.div>

        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.2 }}
          className="lg:col-span-7 flex flex-col gap-12"
        >
          <div className="flex flex-col gap-6">
            <p
              className={`${inter.className} text-2xl md:text-4xl font-medium leading-tight text-zinc-900 tracking-tight`}
            >
              Desenvolvedor Front-end focado em entender como as interfaces são
              construídas, do código à experiência final. boas práticas, estudo
              contínuo e soluções bem estruturadas.
            </p>
            <div className="w-20 h-[2px] bg-black" />
          </div>

          <div
            className={`${inter.className} space-y-8 text-zinc-600 leading-relaxed text-lg md:text-xl`}
          >
            <p>
              A tecnologia sempre me atraiu não apenas pelo resultado final, mas
              pelo processo por trás de cada interface. Desde cedo, tive
              curiosidade em entender como aplicações e sites são estruturados e
              como o código se transforma em algo funcional para o usuário.
            </p>
            <p>
              Minha trajetória no desenvolvimento começou pelo{" "}
              <strong>Front-end</strong>, onde encontrei o equilíbrio entre
              lógica, performance e experiência. Hoje, trabalho com{" "}
              <strong>JavaScript, React, Next.js e Tailwind</strong>, buscando
              criar interfaces responsivas, bem organizadas e com código limpo.
            </p>
            <p>
              Acredito que um bom projeto vai além de “funcionar”: envolve
              atenção aos detalhes, acessibilidade, performance e manutenção.
              Atualmente, dedico meu tempo ao estudo constante e à criação de
              projetos práticos, com o objetivo de evoluir tecnicamente e
              expandir minha atuação para o <strong>Full Stack</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-black/10">
            <div>
              <h4
                className={`${inter.className} text-xs font-black tracking-widest uppercase mb-4 text-black`}
              >
                01 / Filosofia
              </h4>
              <p className={`${inter.className} text-sm text-zinc-500`}>
                Escrevo código pensando não apenas em fazer funcionar, mas em
                ser claro, escalável e fácil de evoluir.
              </p>
            </div>
            <div>
              <h4
                className={`${inter.className} text-xs font-black tracking-widest uppercase mb-4 text-black`}
              >
                02 / Aprendizado
              </h4>
              <p className={`${inter.className} text-sm text-zinc-500`}>
                Evolução contínua. O mercado muda, as stacks evoluem e minha
                sede de aprender acompanha esse ritmo.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mt-32 flex flex-col items-center">
        <div className="w-[1px] h-32 bg-black/20" />
        <motion.div {...fadeInUp} className="text-center mt-12 px-6">
          <p className={`${bodoni.className} text-3xl md:text-5xl italic mb-6`}>
            Vamos criar algo incrível juntos?
          </p>
          <a
            href="mailto:breno.devv.contato@gmail.com"
            className={`${inter.className} text-xl md:text-3xl font-black uppercase tracking-tighter hover:text-zinc-500 transition-colors border-b-4 border-black pb-2`}
          >
            ME MANDE UM E-MAIL
          </a>
        </motion.div>
      </section>

      <div className="mt-32 opacity-[0.02] select-none pointer-events-none">
        <p
          className={`${inter.className} text-[15vw] font-black leading-none text-center whitespace-nowrap`}
        >
          NEXT LEVEL FRONTEND NEXT LEVEL
        </p>
      </div>
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.05] mix-blend-multiply z-[100]"
        style={{
          backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')`,
        }}
      />
    </main>
  );
};

export default AboutMePage;
