import React from "react";
import precalehero from "../assets/precalehero.webp";
import lego from "../assets/lego.webp";
import ischgl from "../assets/ischgl.webp";
import Countdown from "./Countdown";

const PresaleHero = () => {
  return (
    <div class="flex justify-between flex-col lg:flex-row items-start gap-8">
      {/* hero-content */}
      <div class="max-w-md w-full">
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

        <h1 class="font-semibold text-3xl sm:text-5xl mt-9 -tracking-[0.09rem] font-montserrat">
          Open the door to a world of NFT art!
        </h1>
        <p className="text-oast-midnight-200 mt-5">
          For the 30th anniversary of SHAPES IN WHITE, our snow artists will
          create beautiful LEGO Snow Sculptures.
          <br />
          <br />
          Each ISCHGL LEGO Snow Sculptures NFT will include various utilities,
          most importantly the breathtaking world of LEGO. The details will be
          published in the newsletter and on this page from January.
        </p>
        {/* mobile hero img */}
        <div class="lg:hidden mt-8 relative aspect-[217/307] rounded-lg">
          <img
            className="absolute h-full w-full inset-0 text-transparent"
            src={precalehero}
            alt="precale hero mobile"
          />
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
        <div class="mt-8 gap-6 mb-6 flex flex-col">
          {/* first drop countdown */}
          <div>
            <p class="text-oast-midnight-300 text-sm">First Drop in</p>
            <div class="text-lg text-oast-midnight-300 font-bold">
              <Countdown/>
            </div>
          </div>
          <div>
            <div class="flex flex-col gap-6">
              {/* primary-btn */}
              <button
                aria-label="button"
                class="inline-flex items-center gap-2 whitespace-nowrap text-base leading-none font-medium focus-visible:outline-none focus-visible:ring-2 active:scale-95 hover:scale-105 duration-125 transition-all ease-in-out bg-oast-primary-medium text-oast-light hover:bg-oast-primary-dark h-14 rounded-xl p-5 justify-center w-1/2"
              >
                Join Waitlist
              </button>
              <p class="text-base font-medium text-oast-midnight-200">
                {" "}
                Join the list in order to get a chance to have access to
                presale.
              </p>
            </div>
            {/* mobile text */}
            <div class="bg-midnight-900 rounded-2xl gap-4 items-center px-4 py-5 shadow-5xl mt-5 hidden flex-row">
              <div class="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="56"
                  height="56"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#6851FF"
                  stroke-width="1.2857142857142858"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check-circle "
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                <div class="text-midnight-100 flex flex-col ">
                  <span class="text-lg font-bold">
                    Great, you are in the list!
                  </span>
                  <span class="text-sm font-medium">
                    You will soon receive news from us
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* hero-img */}
      <div class="hidden lg:flex relative h-full aspect-[217/307] w-full max-w-[651px] rounded-lg">
        <img
          className="absolute h-full w-full inset-0 text-transparent"
          src={precalehero}
          alt="ISCHGL"
        />
      </div>
    </div>
  );
};

export default PresaleHero;