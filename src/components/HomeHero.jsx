import React, { useState } from "react";
import lego from "../assets/lego.webp";
import ischgl from "../assets/ischgl.webp";
import homehero from "../assets/homehero.webp";
import greenSquare from "../assets/green-square.svg";
import Countdown from "./Countdown";
import ShareBtn from "./ShareBtn";

const HomeHero = () => {
  // The current highest bid value
  const cast = 25000;
  // State for bid input value
  const [bidInputValue, setBidInputValue] = useState("");

  // Function to handle bid input value change
  const getBidInputValue = (e) => {
    setBidInputValue(e.target.value);
  };

  return (
    <div className="flex flex-col-reverse justify-between lg:flex-row gap-4 xl:gap-36 lg:gap-8">
      {/* Content */}
      <div className="flex flex-col justify-between mt-7 md:mt-0 w-full">
        <div className="flex justify-between items-center mb-4 lg:mb-2">
          {/* Account number */}
          <div className="rounded-full text-sm font-medium w-fit pl-1.5 pr-4 py-1.5 bg-oast-midnight-800">
            <div className="flex items-center gap-2 text-oast-midnight-200 text-sm">
              <span className="relative flex shrink-0 overflow-hidden rounded-full h-6 w-6">
                <img
                  className="aspect-square h-full w-full"
                  src={greenSquare}
                  alt="gradient"
                />
              </span>
              <span>0x5d07...77D7</span>
            </div>
          </div>
          {/* Share button */}
          <ShareBtn />
        </div>

        <div>
          <h1 className="font-montserrat text-3xl lg:text-5xl font-bold">
            #0001
          </h1>
          <p className="text-oast-midnight-200 font-medium mt-5 lg:w-1/2">
            ISCHGL x LEGO® inspired NFT Shapes in White 2024
          </p>
        </div>

        {/* Collaboration info */}
        <div className="flex items-center gap-2.5 py-4 border-y border-oast-midnight-700 mt-4">
          <div className="flex flex-shrink-0 items-center gap-2.5">
            <img src={lego} width={40} height={40} alt="lego logo" />
            <img src={ischgl} width={58} height={28} alt="ischgl logo" />
          </div>
          <span className="flex flex-col text-oast-midnight-300 text-sm max-w-50">
            <span>This drop is an official collaboration</span>
            <span>with ISCHGL x LEGO®.</span>
          </span>
        </div>

        <div className="flex flex-col gap-5 md:gap-4 mt-5 md:mt-8">
          {/* Countdown & bid */}
          <div className="grid grid-cols-2 gap-5 md:gap-12">
            {/* Countdown */}
            <div>
              <p className="text-oast-midnight-300 text-sm">Auction ends in</p>
              <div className="text-lg text-oast-midnight-300 font-bold">
                <Countdown date={new Date("2024-04-10T23:59:59")} />
              </div>
            </div>
            {/* Highest bid */}
            <div className="flex flex-col">
              <p className="text-oast-midnight-300 text-sm">Highest bid</p>
              <span className="text-lg text-oast-midnight-300 font-bold ">
                {cast} CAST
              </span>
            </div>
          </div>

          {/* Bid input & info */}
          <div>
            {/* Input for bid */}
            <div className="shadow-sm ring-inset focus-within:ring-2 focus-within:ring-oast-primary-dark p-3 rounded-lg bg-oast-midnight-800">
              <label
                htmlFor="bid"
                className="block text-sm font-medium text-oast-midnight-300"
              >
                <span>
                  Price (≈{" "}
                  {bidInputValue === ""
                    ? 0
                    : `${Math.round(bidInputValue * 0.096 * 100) / 100}`}{" "}
                  € + Fees)
                </span>
              </label>
              <div className="flex justify-between items-center gap-2">
                <input
                  type="number"
                  onChange={getBidInputValue}
                  value={bidInputValue}
                  className="flex h-10 w-full rounded-md border-input file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none font-bold bg-transparent text-oast-light placeholder:text-oast-midnight-300 text-2xl p-0 border-0 appearance-none"
                  id="bid"
                  placeholder="0.00"
                />
                <p className="text-2xl text-oast-midnight-300 font-bold">
                  CAST
                </p>
              </div>
            </div>

            {/* Bid info */}
            <div className="flex items-center text-oast-midnight-300 text-sm mt-2 font-medium gap-2">
              <div className="space-y-2">
                <div className="flex space-x-2 items-center">
                  <svg
                    className={`${
                      bidInputValue === "" || bidInputValue > 25000
                        ? "hidden"
                        : "block"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#f80612"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                    <path d="M12 9v4"></path>
                    <path d="M12 17h.01"></path>
                  </svg>
                  <span> Your bid should be higher than</span>
                  <span className="text-midnight-200"> {cast} CAST</span>
                </div>
                <p>
                  Gas prices are changing rapidly, you might need to add more
                  ETH and re-start from your last step.
                </p>
              </div>
            </div>
          </div>

          {/* Bid button */}
          <button
            aria-label="button"
            className="inline-flex items-center gap-2 whitespace-nowrap text-base leading-none font-medium  active:scale-95 hover:scale-105 duration-125 transition-all ease-in-out bg-oast-primary-medium text-midnight-100 hover:bg-oast-primary-dark h-14 rounded-xl p-5 justify-center disabled:pointer-events-none disabled:opacity-50"
            disabled={bidInputValue > 25000 ? false : true}
          >
            Place bid
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="relative aspect-square lg:min-w-[654px] rounded-lg overflow-hidden">
        <img
          alt="bid"
          className="absolute inset-0 text-transparent rounded-lg"
          src={homehero}
        />
      </div>
    </div>
  );
};

export default HomeHero;
