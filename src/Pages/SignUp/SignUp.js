import React from "react";
import HeroSection from "../../Components/HeroSection";
import Pricing from "../../Components/Pricing";
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from "./Data";

function SignUp() {
  return (
    <>
      <HeroSection {...homeObjThree} />
    </>
  );
}

export default SignUp;
