import React from "react";

const ContactSection = () => {
  return (
    <footer className="w-full bg-[#0f172a] text-slate-300 pt-20 pb-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Área Principal de Contato */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-16 border-b border-slate-800">
          {/* Lado Esquerdo: Chamada para Ação */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter">
              Vamos criar algo <span className="text-blue-500">incrível?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-md">
              Estou sempre aberto a novos projetos, colaborações ou apenas para
              trocar uma ideia sobre tecnologia.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:seuemail@gmail.com"
                className="flex items-center gap-4 group w-fit"
              >
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
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
                <span className="text-white font-medium group-hover:text-blue-400 transition-colors">
                  seuemail@gmail.com
                </span>
              </a>
            </div>
          </div>

          {/* Lado Direito: Apenas os links solicitados */}
          <div className="bg-slate-800/30 p-8 rounded-3xl border border-slate-700/50 flex flex-col justify-center">
            <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">
              Redes Sociais
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://linkedin.com/in/seu-usuario"
                target="_blank"
                className="p-4 rounded-xl bg-slate-900/50 hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-3 border border-transparent hover:border-blue-400"
              >
                <span className="font-semibold text-sm italic">LinkedIn</span>
              </a>
              <a
                href="https://github.com/seu-usuario"
                target="_blank"
                className="p-4 rounded-xl bg-slate-900/50 hover:bg-slate-700 hover:text-white transition-all flex items-center justify-center gap-3 border border-transparent hover:border-slate-500"
              >
                <span className="font-semibold text-sm italic">GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Rodapé Inferior */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-white font-black text-xl tracking-tighter mb-1">
              SEU<span className="text-blue-500">NOME</span>
            </span>
            <p className="text-slate-500 text-xs">
              © 2026 Todos os direitos reservados.
            </p>
          </div>

          <nav className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
            <a href="#" className="hover:text-white transition-colors">
              Home
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Projetos
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Sobre
            </a>
          </nav>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-300 group"
          >
            <span className="group-hover:-translate-y-1 transition-transform">
              ↑
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
