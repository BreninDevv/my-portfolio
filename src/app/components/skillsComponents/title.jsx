import React from "react";
import Image from "next/image";
import LogoSkills from "../../assets/skillslogo.png";

const Title = () => {
  return (
    <>
      <Image src={LogoSkills} alt="Logo Skills" width={200} />
    </>
  );
};

export default Title;
