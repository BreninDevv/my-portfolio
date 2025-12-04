import React from "react";
import Image from "next/image";
import GithubLogo from "../../assets/githubLo.png";
import LinkedinLogo from "../../assets/linkedin.png";

const LinkedinGithub = () => {
  return (
    <>
      <div className="absolute flex gap-x-8 right-1/15 top-27">
        <Image
          src={LinkedinLogo}
          alt="linkedinLogo"
          width={50}
          className="hover:scale-120 duration-200 "
        />
        <Image
          src={GithubLogo}
          alt="githubLogo"
          width={50}
          className="hover:scale-120 duration-200"
        />
      </div>
    </>
  );
};

export default LinkedinGithub;
