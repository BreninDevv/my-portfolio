import React from "react";
import Image from "next/image";
import AvatarAnime from "../../assets/Avatar.png";
import GithubLogo from "../../assets/githubLo.png";
import LoGod from "../../assets/LogoGod.png";
import Grid from "../../assets/gridFundo.png";
import LinkedinLogo from "../../assets/linkedin.png";
import WebDeveloper from "../../assets/webDev.png";
import Header from "@/app/components/headerComponents/Header";
import Avatar from "@/app/components/heroComponents/avatar";
import Title from "@/app/components/heroComponents/title";
import LogoGod from "@/app/components/heroComponents/logoGod";
import LinkedinGithub from "@/app/components/heroComponents/linkedinGithub";

const HeroSection = () => {
  return (
    <>
      <section className="bg-[#F7F4EC] min-w-screen min-h-screen p-4">
        <Header />
        <LogoGod />
        <LinkedinGithub />
        <Title />
        <Avatar />
      </section>
    </>
  );
};

export default HeroSection;
