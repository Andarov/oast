import React from "react";
import lego from "../assets/lego.webp";
import ischgl from "../assets/ischgl.webp";
import homehero from "../assets/homehero.webp";
import greenSquare from "../assets/green-square.svg";
import Countdown from "./Countdown";

const HomeHero = () => {
  return (
    <div class="flex flex-col-reverse justify-between lg:flex-row gap-4 xl:gap-36 lg:gap-8">
      <div class="flex flex-col justify-between mt-7 md:mt-0 w-full">
        <div class="flex justify-between items-center mb-4 lg:mb-2">
          {/* account-number */}
          <div class="rounded-full text-sm font-medium w-fit pl-1.5 pr-4 py-1.5 bg-oast-midnight-800">
            <div class="flex items-center gap-2 text-oast-midnight-200 text-sm">
              <span class="relative flex shrink-0 overflow-hidden rounded-full h-6 w-6">
                <img
                  class="aspect-square h-full w-full"
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
              class="inline-flex items-center gap-2 whitespace-nowrap text-base leading-none font-medium focus-visible:outline-none disabled:pointer-events-none opacity-90 active:scale-95 hover:scale-105 duration-125 transition-all ease-in-out text-oast-light hover:bg-oast-midnight-600 h-9 w-9 rounded-full justify-center bg-oast-midnight-800"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-share2 text-oast-midnight-300"
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
          <h1 class="font-montserrat text-3xl lg:text-5xl font-bold">#0001</h1>
          <p class="text-oast-midnight-200 font-medium mt-5 lg:w-1/2">
            ISCHGL x LEGO® inspired NFT Shapes in White 2024
          </p>
        </div>

        {/* collaboration */}
        <div class="flex items-center gap-2.5 py-4 border-y border-oast-midnight-700 mt-4">
          <div class="flex flex-shrink-0 items-center gap-2.5">
            <img src={lego} width={40} height={40} alt="lego logo" />
            <img src={ischgl} width={58} height={28} alt="ischgl logo" />
          </div>
          <span class="flex flex-col text-oast-midnight-300 text-sm max-w-50">
            <span>This drop is an official collaboration</span>
            <span>with ISCHGL x LEGO®.</span>
          </span>
        </div>

        <div class="flex flex-col gap-5 md:gap-4 mt-5 md:mt-8">
          {/* countdown & bid */}
          <div class="grid grid-cols-2  gap-5 md:gap-12">
            {/* countdown */}
            <div>
              <p class="text-oast-midnight-300 text-sm">Auction ends in</p>
              <div class="text-lg text-oast-midnight-300 font-bold">
                <Countdown />
              </div>
            </div>
            {/* highest bid */}
            <div class="flex flex-col">
              <p class="text-oast-midnight-300 text-sm">Highest bid</p>
              <span class="text-lg text-oast-midnight-300 font-bold ">
                25000 CAST
              </span>
            </div>
          </div>

          {/* bid input & info */}
          <div>
            {/* input for bid */}
            <div class="shadow-sm p-3 rounded-lg bg-oast-midnight-800">
              <label
                for="bid"
                class="block text-sm font-medium text-oast-midnight-300"
              >
                Price (≈ 0 € + Fees)
              </label>
              <div class="flex justify-between items-center gap-2">
                <input
                  type="number"
                  class="flex h-10 w-full rounded-md border-input file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none font-bold bg-transparent text-oast-light placeholder:text-oast-midnight-300 text-2xl p-0 border-0 appearance-none"
                  id="bid"
                  placeholder="0.00"
                />
                <p class="text-2xl text-oast-midnight-300 font-bold">CAST</p>
              </div>
            </div>
            {/* bid info */}
            <div class="flex items-center text-oast-midnight-300 text-sm mt-2 font-medium gap-2">
              <div class="space-y-2">
                <div class="flex space-x-2 items-center">
                  <span> Your bid should be higher than</span>
                  <span class="text-oast-midnight-200"> 25000 CAST</span>
                </div>
                <p>
                  Gas prices are changing rapidly, you might need to add more
                  ETH and re-start from your last step.
                </p>
              </div>
            </div>
          </div>

          <div class="text-oast-midnight-300 text-sm mt-2 font-medium border-t border-oast-midnight-700 pt-4">
            <span class="text-oast-midnight-200 mb-0.5">
              Don’t have CAST yet?
            </span>
            <p>
              Don’t worry, we can swap your ETH to CAST when a bid is submitted.
              Just follow the steps in the next screen.
            </p>
          </div>

          <button
            aria-label="button"
            class="inline-flex items-center gap-2 whitespace-nowrap text-base leading-none font-medium  active:scale-95 hover:scale-105 duration-125 transition-all ease-in-out bg-oast-primary-medium text-midnight-100 hover:bg-oast-primary-dark h-14 rounded-xl p-5 justify-center disabled:pointer-events-none disabled:opacity-50"
            disabled="true"
          >
            Place bid
          </button>
        </div>
      </div>

      <div class="relative aspect-square lg:min-w-[654px] rounded-lg overflow-hidden">
        <img
          alt="bid"
          class="absolute inset-0 text-transparent"
          src={homehero}
        />
      </div>
    </div>
  );
};

export default HomeHero;
