import React from "react";
import LoGod from "../../assets/LogoGod.png";
import Image from "next/image";

const LogoGod = () => {
  return (
    <>
      <div className="absolute left-4 top-2 xl:block lg:block md:block hidden">
        <Image src={LoGod} alt="LogoGod" width={130} />
      </div>
    </>
  );
};

export default LogoGod;
