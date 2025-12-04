import React from "react";
import GridFundo from "../../assets/gridFundo.png";
import Image from "next/image";

const Grid = () => {
  return (
    <>
      <div className="absolute opacity-40 bottom-0 left-0">
        <Image src={GridFundo} alt="grid" />
      </div>
      <div className="absolute opacity-20 right-2/10  top-80">
        <Image src={GridFundo} alt="grid" />
      </div>
    </>
  );
};

export default Grid;
