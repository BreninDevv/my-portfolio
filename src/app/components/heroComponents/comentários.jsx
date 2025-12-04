import React from "react";

const Comentários = () => {
  return (
    <>
      <div className=" font-space text-lg ">
        <div className=" text-2xl">
          <div className="absolute left-1/7 bottom-7/16">
            <span>{"<p> "}</span>
          </div>
          <div className="absolute left-3/11 bottom-2/7">
            <span>{"</p> "}</span>
          </div>
          <div className="absolute right-1/7 bottom-2/15">
            <span>{"</p> "}</span>
          </div>
          <div className="absolute right-5/19 bottom-2/8">
            <span>{"<p> "}</span>
          </div>
        </div>
        <div className="absolute left-1/6 bottom-5/17 w-64 leading-relaxed text-left hover:scale-105 duration-100">
          <span>
            Front-end focado em criar interfaces limpas e modernas. Sempre
            buscando evoluir e aprender mais.
          </span>
        </div>
        <div className="absolute right-1/7 bottom-1/7 w-56 text-left hover:scale-105 duration-100">
          <span>
            Código limpo, boas práticas sendo mais produtivo a cada dia...
          </span>
        </div>
      </div>
    </>
  );
};

export default Comentários;
