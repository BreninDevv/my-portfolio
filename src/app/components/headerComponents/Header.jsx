"use client";

import React, { useState } from "react";
import Image from "next/image";
import menuIcon from "../../assets/menuHamburguer.png";

const Header = () => {
  const [on, setOn] = useState(false);

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
        <div onClick={() => setOn(true)}>
          <Image src={menuIcon} alt="menuIcon" width={40} />
        </div>

        <div
          className={`
    bg-white w-3/6 absolute left-0 top-0 h-full z-1000
    transition-transform duration-500 shadow-2xl
    ${on ? "translate-x-0" : "-translate-x-full"}
  `}
        >
          <div className=" list-none font-space   flex flex-col gap-y-6 text-2xl p-5">
            <div className="self-end" onClick={() => setOn(false)}>
              <span className="font-space text-3xl ">X</span>
            </div>
            <ul className="text-cyan-950">
              <li className="py-2 hover:text-cyan-500">
                <a href="#">Home</a>
              </li>
              <li className="py-2 hover:text-cyan-500">
                <a href="#">About</a>
              </li>
              <li className="py-2 hover:text-cyan-500">
                <a href="#">Skills</a>
              </li>
              <li className="py-2 hover:text-cyan-500">
                <a href="#">Projects</a>
              </li>
              <li className="py-2 hover:text-cyan-500">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
