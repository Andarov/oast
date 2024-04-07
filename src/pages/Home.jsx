import React, { useEffect } from "react";
import ActivityHistory from "../components/ActivityHistory";
import HomeHero from "../components/HomeHero";
import NfTDetails from "../components/NfTDetails";
import NFTProps from "../components/NFTProps";

const Home = () => {
  useEffect(() => {
    document.title =
      "CASTSTUDIO | The Bridge Between Web2 and Web3 | Castellocoin";
  }, []);
  return (
    <div className="flex-1 py-5 max-w-xl lg:max-w-none sm:mx-auto lg:mx-0">
      <HomeHero/>
      <ActivityHistory/>
      <NFTProps/>
      <br />
      <NfTDetails/>
    </div>
  );
};

export default Home;
