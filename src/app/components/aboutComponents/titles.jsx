import React from "react";
import Image from "next/image";
import Aboutme from "../../assets/aboutme.png";

const Titles = () => {
  return (
    <>
      <div className="py-15">
        <div className="flex justify-center ">
          <h1 className="font-boldonse text-white text-5xl">About Me</h1>
        </div>
        <div className="absolute right-1/9 top-224">
          <Image src={Aboutme} alt="AboutMeLogo" width={170} />
        </div>
        <div className="font-space text-[#FDF5E6] flex flex-col gap-y-6 py-16 text-lg">
          <p>
            Sou um desenvolvedor front-end focado em criar interfaces modernas,
            rápidas e bem estruturadas.
          </p>
          <p>
            Trabalho principalmente com JavaScript, React, Next.js e Tailwind,
            sempre buscando boas práticas e código limpo.
          </p>
          <p>
            Estudo programação todos os dias para evoluir e melhorar meus
            projetos.
          </p>
        </div>
        <div className="flex justify-center font-space ">
          <div className="bg-[#FDF5E6] p-2 px-6 rounded-lg text-2xl">
            Read More
          </div>
        </div>
      </div>
    </>
  );
};

export default Titles;
