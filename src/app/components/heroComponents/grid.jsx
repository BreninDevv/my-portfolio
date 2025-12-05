import React from "react";
import GridFundo from "../../assets/gridFundo.png";
import Image from "next/image";

const Grid = () => {
  return (
    <>
      <div className="absolute opacity-40 xl:block lg:block  hidden bottom-0 left-0">
        <Image src={GridFundo} alt="grid" />
      </div>
      <div className="absolute opacity-20 xl:right-2/10 xl:block lg:block lg:right-2/10 md:right-2/10 sm:right-2/10 hidden top-80">
        <Image src={GridFundo} alt="grid" />
      </div>
    </>
  );
};

export default Grid;
