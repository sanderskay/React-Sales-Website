import React from "react";
import HeroSection from "../../Components/HeroSection";
import Pricing from "../../Components/Pricing";
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from "./Data";

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      <Pricing />
      <HeroSection {...homeObjFour} />
    </>
  );
}

export default Home;
