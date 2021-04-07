import React from "react";
import HeroSection from "../../Components/HeroSection";
import Pricing from "../../Components/Pricing";
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from "./Data";

function Services() {
  return (
    <>
      <Pricing />
      <HeroSection {...homeObjOne} />
    </>
  );
}

export default Services;
