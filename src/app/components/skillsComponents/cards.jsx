import React from "react";
import Image from "next/image";

const Cards = ({ icon, name }) => {
  return (
    <>
      <div className="bg-[#102131] w-30 h-40 rounded-xl hover:scale-105 duration-100 shadow-lg">
        <div className="flex flex-col items-center gap-y-4">
          <div className="">
            <Image src={icon} alt="Icone" width={100} />
          </div>
          <h1 className="text-white text-2xl font-space">{name}</h1>
        </div>
      </div>
    </>
  );
};

export default Cards;
