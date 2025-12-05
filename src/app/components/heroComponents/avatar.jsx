import React from "react";
import Image from "next/image";
import AvatarAnime from "../../assets/Avatar.png";

const Avatar = () => {
  return (
    <>
      <div className="flex justify-center xl:pt-30 lg:pt-30 md:pt-30 pt-40 animate-float">
        <div className="bg-transparent border-4 border-white shadow-2xl w-36 h-36 rounded-full ">
          <Image src={AvatarAnime} alt="Avatar" className="scale-118" />
        </div>
      </div>
    </>
  );
};

export default Avatar;
