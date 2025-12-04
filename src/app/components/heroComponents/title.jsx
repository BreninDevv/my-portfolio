import React from "react";
import WebDeveloper from "../../assets/webDev.png";
import Image from "next/image";

const Title = () => {
  return (
    <>
      <div className="font-bebas w-full flex justify-center py-16 ">
        <h2 className="text-4xl typewriter">{"HI THERE, I 'M BRENO"}</h2>
      </div>
      <div className="flex items-center flex-col text-7xl gap-y-2">
        <div className="flex ">
          <h1 className="font-space ">FRONT-END</h1>
          <span className="font-space">...</span>
          <span className="font-luckiest text-gray-900">{"</>"}</span>
        </div>
        <h1 className="font-boldonse text-gray-900">WEB DEVELOPER</h1>
        <div className="absolute right-150 top-97">
          <Image src={WebDeveloper} alt="WebDeveloper" width={250} />
        </div>
      </div>
    </>
  );
};

export default Title;
