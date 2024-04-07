import React from "react";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";

import {
  FacebookShareButton,
  EmailShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  TwitterShareButton,
} from "react-share";

const ShareBtn = () => {
  const url = 'https://nft.caststudio.io/';
  return (
    <Popover placement="bottom-start">
      <PopoverHandler>
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
      </PopoverHandler>
      <PopoverContent className="z-50 w-72 p-4 shadow-md outline-none bg-oast-midnight-800 rounded-xl border-none gap-3 flex flex-col">
        <FacebookShareButton url={url} className="w-full">
          <div className="inline-flex items-center gap-2 whitespace-nowrap text-base leading-none font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 hover:scale-105 duration-125 transition-all ease-in-out border border-oast-midnight-600 hover:bg-oast-midnight-600 text-oast-light h-10 rounded-lg py-3 px-5 justify-start w-full">
            <div class="flex items-center justify-start gap-2 capitalize">
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
                class="lucide lucide-facebook "
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
              <span>facebook</span>
            </div>
          </div>
        </FacebookShareButton>
        <EmailShareButton url={url} className="w-full">
          <div className="inline-flex items-center gap-2 whitespace-nowrap text-base leading-none font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 hover:scale-105 duration-125 transition-all ease-in-out border border-oast-midnight-600 hover:bg-oast-midnight-600 text-oast-light h-10 rounded-lg py-3 px-5 justify-start w-full">
            <div class="flex items-center justify-start gap-2 capitalize">
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
                class="lucide lucide-mail "
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
              <span>email</span>
            </div>
          </div>
        </EmailShareButton>
        <WhatsappShareButton url={url} className="w-full">
          <div className="inline-flex items-center gap-2 whitespace-nowrap text-base leading-none font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 hover:scale-105 duration-125 transition-all ease-in-out border border-oast-midnight-600 hover:bg-oast-midnight-600 text-oast-light h-10 rounded-lg py-3 px-5 justify-start w-full">
            <div class="flex items-center justify-start gap-2 capitalize">
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
                class="lucide lucide-message-circle-more "
              >
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                <path d="M8 12h.01"></path>
                <path d="M12 12h.01"></path>
                <path d="M16 12h.01"></path>
              </svg>
              <span>whatsapp</span>
            </div>
          </div>
        </WhatsappShareButton>
        <TelegramShareButton url={url} className="w-full">
          <div className="inline-flex items-center gap-2 whitespace-nowrap text-base leading-none font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 hover:scale-105 duration-125 transition-all ease-in-out border border-oast-midnight-600 hover:bg-oast-midnight-600 text-oast-light h-10 rounded-lg py-3 px-5 justify-start w-full">
            <div class="flex items-center justify-start gap-2 capitalize">
              <svg viewBox="0 0 64 64" width="16" height="16">
                <rect
                  width="64"
                  height="64"
                  rx="0"
                  ry="0"
                  fill="#25A3E3"
                ></rect>
                <path
                  d="m45.90873,15.44335c-0.6901,-0.0281 -1.37668,0.14048 -1.96142,0.41265c-0.84989,0.32661 -8.63939,3.33986 -16.5237,6.39174c-3.9685,1.53296 -7.93349,3.06593 -10.98537,4.24067c-3.05012,1.1765 -5.34694,2.05098 -5.4681,2.09312c-0.80775,0.28096 -1.89996,0.63566 -2.82712,1.72788c-0.23354,0.27218 -0.46884,0.62161 -0.58825,1.10275c-0.11941,0.48114 -0.06673,1.09222 0.16682,1.5716c0.46533,0.96052 1.25376,1.35737 2.18443,1.71383c3.09051,0.99037 6.28638,1.93508 8.93263,2.8236c0.97632,3.44171 1.91401,6.89571 2.84116,10.34268c0.30554,0.69185 0.97105,0.94823 1.65764,0.95525l-0.00351,0.03512c0,0 0.53908,0.05268 1.06412,-0.07375c0.52679,-0.12292 1.18879,-0.42846 1.79109,-0.99212c0.662,-0.62161 2.45836,-2.38812 3.47683,-3.38552l7.6736,5.66477l0.06146,0.03512c0,0 0.84989,0.59703 2.09312,0.68132c0.62161,0.04214 1.4399,-0.07726 2.14229,-0.59176c0.70766,-0.51626 1.1765,-1.34683 1.396,-2.29506c0.65673,-2.86224 5.00979,-23.57745 5.75257,-27.00686l-0.02107,0.08077c0.51977,-1.93157 0.32837,-3.70159 -0.87096,-4.74991c-0.60054,-0.52152 -1.2924,-0.7498 -1.98425,-0.77965l0,0.00176zm-0.2072,3.29069c0.04741,0.0439 0.0439,0.0439 0.00351,0.04741c-0.01229,-0.00351 0.14048,0.2072 -0.15804,1.32576l-0.01229,0.04214l-0.00878,0.03863c-0.75858,3.50668 -5.15554,24.40802 -5.74203,26.96472c-0.08077,0.34417 -0.11414,0.31959 -0.09482,0.29852c-0.1756,-0.02634 -0.50045,-0.16506 -0.52679,-0.1756l-13.13468,-9.70175c4.4988,-4.33199 9.09945,-8.25307 13.744,-12.43229c0.8218,-0.41265 0.68483,-1.68573 -0.29852,-1.70681c-1.04305,0.24584 -1.92279,0.99564 -2.8798,1.47502c-5.49971,3.2626 -11.11882,6.13186 -16.55882,9.49279c-2.792,-0.97105 -5.57873,-1.77704 -8.15298,-2.57601c2.2336,-0.89555 4.00889,-1.55579 5.75608,-2.23009c3.05188,-1.1765 7.01687,-2.7042 10.98537,-4.24067c7.94051,-3.06944 15.92667,-6.16346 16.62028,-6.43037l0.05619,-0.02283l0.05268,-0.02283c0.19316,-0.0878 0.30378,-0.09658 0.35471,-0.10009c0,0 -0.01756,-0.05795 -0.00351,-0.04566l-0.00176,0zm-20.91715,22.0638l2.16687,1.60145c-0.93418,0.91311 -1.81743,1.77353 -2.45485,2.38812l0.28798,-3.98957"
                  fill="white"
                ></path>
              </svg>
              <span>telegram</span>
            </div>
          </div>
        </TelegramShareButton>
        <TwitterShareButton url={url} className="w-full">
          <div className="inline-flex items-center gap-2 whitespace-nowrap text-base leading-none font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 hover:scale-105 duration-125 transition-all ease-in-out border border-oast-midnight-600 hover:bg-oast-midnight-600 text-oast-light h-10 rounded-lg py-3 px-5 justify-start w-full">
            <div class="flex items-center justify-start gap-2 capitalize">
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
                class="lucide lucide-twitter "
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
              <span>x</span>
            </div>
          </div>
        </TwitterShareButton>
      </PopoverContent>
    </Popover>
  );
};

export default ShareBtn;
