import React from "react";
import Image from "next/image";
import GithubLogo from "../../assets/githubLo.png";
import LinkedinLogo from "../../assets/linkedin.png";

const LinkedinGithub = () => {
  return (
    <>
      <div className="absolute  right-1/15 xl:block lg:block md:block  hidden top-27 ">
        <div className="flex gap-x-8">
          <Image
            src={LinkedinLogo}
            alt="linkedinLogo"
            width={50}
            className="hover:scale-120 duration-200 cursor-pointer"
          />
          <Image
            src={GithubLogo}
            alt="githubLogo"
            width={50}
            className="hover:scale-120 duration-200 cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export default LinkedinGithub;
