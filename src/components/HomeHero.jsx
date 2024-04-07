import React from "react";
import lego from "../assets/lego.webp";
import ischgl from "../assets/ischgl.webp";
import homehero from "../assets/homehero.webp";
import greenSquare from "../assets/green-square.svg";
import Countdown from "./Countdown";
import { useState } from "react";

const HomeHero = () => {
  const cast = 25000;
  const [bidInputValue, setBidInputValue] = useState("");

  const getBidInputValue = (e) => {
    setBidInputValue(e.target.value);
  };

  return (
    <div className="flex flex-col-reverse justify-between lg:flex-row gap-4 xl:gap-36 lg:gap-8">
      <div className="flex flex-col justify-between mt-7 md:mt-0 w-full">
        <div className="flex justify-between items-center mb-4 lg:mb-2">
          {/* account-number */}
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
          {/* share-btn */}
          <div>
            <button
              aria-label="button"
              className="inline-flex items-center gap-2 whitespace-nowrap text-base leading-none font-medium focus-visible:outline-none disabled:pointer-events-none opacity-90 active:scale-95 hover:scale-105 duration-125 transition-all ease-in-out text-oast-light hover:bg-oast-midnight-600 h-9 w-9 rounded-full justify-center bg-oast-midnight-800"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-share2 text-oast-midnight-300"
              >
                <circle cx="18" cy="5" r="3"></circle>
                <circle cx="6" cy="12" r="3"></circle>
                <circle cx="18" cy="19" r="3"></circle>
                <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
              </svg>
            </button>
          </div>
        </div>

        <div>
          <h1 className="font-montserrat text-3xl lg:text-5xl font-bold">
            #0001
          </h1>
          <p className="text-oast-midnight-200 font-medium mt-5 lg:w-1/2">
            ISCHGL x LEGO® inspired NFT Shapes in White 2024
          </p>
        </div>

        {/* collaboration */}
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
          {/* countdown & bid */}
          <div className="grid grid-cols-2  gap-5 md:gap-12">
            {/* countdown */}
            <div>
              <p className="text-oast-midnight-300 text-sm">Auction ends in</p>
              <div className="text-lg text-oast-midnight-300 font-bold">
                <Countdown date={new Date("2024-04-10T23:59:59")} />
              </div>
            </div>
            {/* highest bid */}
            <div className="flex flex-col">
              <p className="text-oast-midnight-300 text-sm">Highest bid</p>
              <span className="text-lg text-oast-midnight-300 font-bold ">
                {cast} CAST
              </span>
            </div>
          </div>

          {/* bid input & info */}
          <div>
            {/* input for bid */}
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

            {/* bid info */}
            <div className=" flex items-center text-oast-midnight-300 text-sm mt-2 font-medium gap-2">
              <div className="space-y-2">
                <div className="flex space-x-2 items-center">
                  <svg
                    className={`${bidInputValue === '' || bidInputValue > 25000 ? 'hidden' : 'block'}`}
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

          <div className="text-oast-midnight-300 text-sm mt-2 font-medium border-t border-oast-midnight-700 pt-4">
            <span className="text-oast-midnight-200 mb-0.5">
              Don’t have CAST yet?
            </span>
            <p>
              Don’t worry, we can swap your ETH to CAST when a bid is submitted.
              Just follow the steps in the next screen.
            </p>
          </div>
          
          {/* bid-btn */}
          <button
            aria-label="button"
            className="inline-flex items-center gap-2 whitespace-nowrap text-base leading-none font-medium  active:scale-95 hover:scale-105 duration-125 transition-all ease-in-out bg-oast-primary-medium text-midnight-100 hover:bg-oast-primary-dark h-14 rounded-xl p-5 justify-center disabled:pointer-events-none disabled:opacity-50"
            disabled={bidInputValue > 25000 ? false : true}
          >
            Place bid
          </button>
        </div>
      </div>

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
