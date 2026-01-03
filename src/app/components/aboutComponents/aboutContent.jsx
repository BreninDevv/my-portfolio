import React from "react";

const aboutContent = () => {
  return (
    <div className="max-w-4xl text-center px-6">
      <h2 className="text-blue-500 text-sm font-black uppercase tracking-[0.3em] mb-4">
        Sobre Mim
      </h2>
      <h3 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
        Transformando ideias em código.
      </h3>
      <p className="text-blue-800/70 leading-relaxed text-lg mb-8">
        Sou um desenvolvedor focado em criar interfaces modernas e funcionais.
        Minha jornada envolve o estudo constante de novas tecnologias para
        entregar experiências digitais que realmente impactam o usuário.
      </p>
      <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all shadow-md">
        Baixar CV
      </button>
    </div>
  );
};

export default aboutContent;
