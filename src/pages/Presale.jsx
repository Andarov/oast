import React from "react";
import FinalConsert from "../components/FinalConsert";
import PresaleHero from "../components/PresaleHero";
import Roadmap from "../components/Roadmap";

const Presale = () => {
  return (
    <div class="flex-1 py-5 lg:mt-5 max-w-xl lg:max-w-none sm:mx-auto lg:mx-0">
      <PresaleHero />
      <FinalConsert />
      <div aria-hidden="true" class="h-px bg-oast-midnight-700 my-10"></div>
      <Roadmap />
    </div>
  );
};

export default Presale;
