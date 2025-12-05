import React from "react";
import Image from "next/image";
import menuIcon from "../../assets/menuHamburguer.png";

const Header = () => {
  return (
    <>
      <div className="justify-center xl:block lg:block md:block hidden">
        <ul className="flex justify-center gap-x-8 text-2xl bg-white w-136 h-12 rounded-3xl items-center shadow-xl font-space text-cyan-950 ">
          <li className="hover:text-cyan-500 duration-100">
            <a href="#">About</a>
          </li>
          <li className="hover:text-cyan-500 duration-200">
            <a href="#">Skills</a>
          </li>
          <li className="hover:text-cyan-500 duration-200">
            <a href="#">Projects</a>
          </li>
          <li className="hover:text-cyan-500 duration-200">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="flex justify-start xl:hidden lg:hidden md:hidden w-full">
        <Image src={menuIcon} alt="menuIcon" width={40} />
      </div>
    </>
  );
};

export default Header;
