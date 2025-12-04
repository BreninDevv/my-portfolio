import React from "react";
import GridFundo from "../../assets/gridFundo.png";
import Image from "next/image";

const Grid = () => {
  return (
    <>
      <div className="absolute opacity-50 bottom-0 ">
        <Image src={GridFundo} alt="grid" />
      </div>
      <div className="absolute opacity-40 right-108 top-80">
        <Image src={GridFundo} alt="grid" />
      </div>
    </>
  );
};

export default Grid;
