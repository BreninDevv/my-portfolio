import React from "react";
import Header from "@/app/components/headerComponents/Header";
import Avatar from "@/app/components/heroComponents/avatar";
import Title from "@/app/components/heroComponents/title";
import LogoGod from "@/app/components/heroComponents/logoGod";
import LinkedinGithub from "@/app/components/heroComponents/linkedinGithub";
import Grid from "@/app/components/heroComponents/grid";
import Seta from "@/app/components/heroComponents/seta";
import Comentários from "@/app/components/heroComponents/comentários";

const HeroSection = () => {
  return (
    <>
      <section
        className="bg-[#F7F4EC]  min-h-screen p-4 flex 
    flex-col 
    items-center"
      >
        <Header />
        <LogoGod />
        <Grid />
        <Seta />
        <LinkedinGithub />
        <Title />
        <Avatar />
        <Comentários />
      </section>
    </>
  );
};

export default HeroSection;
