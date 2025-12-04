import React from "react";
import SetaDown from "../../assets/seta.png";
import Image from "next/image";

const Seta = () => {
  return (
    <div className="absolute bottom-16 left-1/2 animate-arrow transform -translate-x-1/2">
      <Image src={SetaDown} alt="seta" width={50} />
    </div>
  );
};

export default Seta;
