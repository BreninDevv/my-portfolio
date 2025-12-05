import React from "react";
import WebDeveloper from "../../assets/webDev.png";
import Image from "next/image";

const Title = () => {
  return (
    <>
      <div className="font-bebas w-full flex justify-center xl:h-42 lg:h-42 md:h-42 sm:h-42 xl:items-center lg:items-center md:items-center sm:items-center h-50  items-end xl:py-16 lg:py-16 md:py-16 py-16 ">
        <h2 className="xl:text-4xl lg:text-4xl md:text-4x text-3xl typewriter">
          {"HI THERE, I 'M BRENO"}
        </h2>
      </div>
      <div className="flex items-center flex-col xl:text-7xl gap-y-2 lg:text:7x1 md:text-7xl sm:text-5xl text-3xl ">
        <div className="flex ">
          <h1 className="font-space ">FRONT-END</h1>
          <span className="font-space">...</span>
          <span className="font-luckiest text-gray-900">{"</>"}</span>
        </div>
        <h1 className="font-boldonse text-gray-900">WEB DEVELOPER</h1>
        <div className="absolute 2xl:right-10/31 xl:block lg:block md:block xl:right-5/18 lg:right-5/20 md:right-1/11 xl:top-97 lg:top-97 md:top-97 top-86 right-2/12 hidden">
          <Image src={WebDeveloper} alt="WebDeveloper" width={250} />
        </div>
      </div>
    </>
  );
};

export default Title;
