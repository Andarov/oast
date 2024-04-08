import React from "react";
import FinalConsert from "../components/FinalConsert";
import PresaleHero from "../components/PresaleHero";
import Roadmap from "../components/Roadmap";

const Presale = ({handleOpenModal}) => {
  return (
    <div className="flex-1 py-5">
      <PresaleHero handleOpenModal={handleOpenModal}/>
      <FinalConsert />
      <div aria-hidden="true" className="h-px bg-oast-midnight-700 my-10"></div>
      <Roadmap />
    </div>
  );
};

export default Presale;
