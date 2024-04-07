import React from "react";
import precalehero from "../assets/precalehero.webp";
import lego from "../assets/lego.webp";
import ischgl from "../assets/ischgl.webp";
import Countdown from "./Countdown";
import ShareBtn from "./ShareBtn";

const PresaleHero = () => {
  return (
    <div className="flex justify-between flex-col lg:flex-row items-start gap-8">
      {/* hero-content */}
      <div className="w-full lg:max-w-md">
        {/* share-btn */}
        <ShareBtn/>

        <h1 className="font-semibold text-3xl sm:text-5xl mt-9 -tracking-[0.09rem] font-montserrat">
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
        <div className="lg:hidden mt-8 relative aspect-[217/307] rounded-lg">
          <img
            className="absolute h-full w-full inset-0 text-transparent"
            src={precalehero}
            alt="precale hero mobile"
          />
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
        <div className="mt-8 gap-6 mb-6 flex flex-col">
          {/* first drop countdown */}
          <div>
            <p className="text-oast-midnight-300 text-sm">First Drop in</p>
            <div className="text-lg text-oast-midnight-300 font-bold">
            <Countdown date={new Date("2024-04-09T23:59:59")}/>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-6">
              {/* primary-btn */}
              <button
                aria-label="button"
                className="inline-flex items-center gap-2 whitespace-nowrap text-base leading-none font-medium focus-visible:outline-none focus-visible:ring-2 active:scale-95 hover:scale-105 duration-125 transition-all ease-in-out bg-oast-primary-medium text-oast-light hover:bg-oast-primary-dark h-14 rounded-xl p-5 justify-center lg:w-1/2"
              >
                Join Waitlist
              </button>
              <p className="text-base font-medium text-oast-midnight-200">
                {" "}
                Join the list in order to get a chance to have access to
                presale.
              </p>
            </div>
            {/* mobile text */}
            <div className="bg-midnight-900 rounded-2xl gap-4 items-center px-4 py-5 shadow-5xl mt-5 hidden flex-row">
              <div className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="56"
                  height="56"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#6851FF"
                  strokeWidth="1.2857142857142858"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-check-circle "
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                <div className="text-midnight-100 flex flex-col ">
                  <span className="text-lg font-bold">
                    Great, you are in the list!
                  </span>
                  <span className="text-sm font-medium">
                    You will soon receive news from us
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* hero-img */}
      <div className="hidden lg:flex relative h-full aspect-square w-full max-w-[651px] rounded-lg">
        <img
          className="absolute h-full w-full inset-0 text-transparent"
          src={precalehero}
          alt="ISCHGL"
          sizes="100vw"
        />
      </div>
    </div>
  );
};

export default PresaleHero;
