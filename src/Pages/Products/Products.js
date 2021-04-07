import React from "react";
import HeroSection from "../../Components/HeroSection";
import Pricing from "../../Components/Pricing";
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from "./Data";

function Products() {
  return (
    <>
      <HeroSection {...homeObjFour} />
    </>
  );
}

export default Products;
