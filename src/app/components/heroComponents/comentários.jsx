import React from "react";

const Comentários = () => {
  return (
    <>
      <div className="hidden absolute xl:block lg:block md:block left-1/7 bottom-1/6 font-space text-lg hover:scale-107 duration-200">
        <div className="w-90 h-70  flex flex-col">
          <div className="flex justify-start">
            <span className="text-2xl">{"<p>"}</span>
          </div>
          <div className="px-10 ">
            <span>
              Front-end focado em criar interfaces limpas e modernas. Sempre
              buscando evoluir e aprender mais.
            </span>
          </div>
          <div className="flex justify-end">
            <span className="text-2xl">{"</p>"}</span>
          </div>
        </div>
      </div>
      <div className="absolute right-1/10 bottom-1/30 font-space text-lg hover:scale-107 duration-200">
        <div className="w-90 h-70  flex flex-col">
          <div className="flex justify-start">
            <span className="text-2xl">{"<p>"}</span>
          </div>
          <div className="px-10">
            <span>
              Código limpo, boas práticas sendo mais produtivo a cada dia...
            </span>
          </div>
          <div className="flex justify-end">
            <span className="text-2xl">{"</p>"}</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Comentários;
