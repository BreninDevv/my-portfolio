"use client";
import React, { useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["900", "700"] });

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const { scrollY } = useScroll();

  const email = "breno.devv.contato@gmail.com";

  const handleContact = () => {
    navigator.clipboard.writeText(email);

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);

    window.location.href = `mailto:${email}`;
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    const triggerPoint = window.innerHeight * 0.8;
    if (latest > triggerPoint) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
      setIsMobileMenuOpen(false);
    }
  });

  const menuItems = [
    { name: "HOME", href: "#" },
    { name: "SOBRE", href: "#about" },
    { name: "SKILLS", href: "#skills" },
    { name: "PROJECTS", href: "#projects" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{
          y: isVisible ? 20 : -100,
          x: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-1/2 z-[1000] w-[95%] max-w-[1200px]"
      >
        <div className="bg-white/85 backdrop-blur-xl border border-black/10 shadow-[0_10px_40px_rgba(0,0,0,0.08)] rounded-full px-4 md:px-8 py-3 flex justify-between items-center transition-all">
          <div className="flex-1">
            <span
              className={`${inter.className} text-sm md:text-lg font-black tracking-tighter text-black uppercase`}
            >
              BRENO<span className="text-zinc-400">.DEV</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6 lg:gap-10">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`${inter.className} text-[10px] tracking-[0.2em] text-zinc-500 hover:text-black transition-all hover:scale-105`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="flex-1 flex justify-end items-center">
            <button
              onClick={handleContact}
              className={`${inter.className} cursor-pointer hidden sm:block text-[10px] md:text-xs font-bold uppercase tracking-widest bg-black text-white px-5 py-2.5 rounded-full hover:bg-zinc-800 transition-colors shadow-lg shadow-black/10`}
            >
              {copied ? "E-MAIL COPIADO!" : "Contato"}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden ml-4 p-2 text-black hover:bg-black/5 rounded-full transition-colors"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                {isMobileMenuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 10, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="absolute top-full left-0 right-0 mt-2 mx-auto w-full bg-white/95 backdrop-blur-2xl rounded-3xl border border-black/10 shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-6 md:hidden"
            >
              <ul className="flex flex-col gap-6 items-center">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`${inter.className} text-sm font-bold tracking-[0.3em] text-zinc-800 hover:text-black transition-colors`}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
                <hr className="w-full border-black/5" />
                <li>
                  <button
                    onClick={() => {
                      handleContact();
                      setIsMobileMenuOpen(false);
                    }}
                    className={`${inter.className} text-xs font-black uppercase tracking-widest text-black`}
                  >
                    {copied ? "E-MAIL COPIADO!" : "ME MANDE UM E-MAIL"}
                  </button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;
