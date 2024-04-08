import React, { useState } from "react";
import { wallets } from "../data";

const WalletModal = ({showMainModal}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredWallets = wallets.filter((wallet) =>
    wallet.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative p-6 bg-oast-main w-full max-w-[360px] rounded-xl">
      {/* Modal Header */}
      <div className="flex justify-between items-center mb-5">
        {/* prev-btn */}
        <button onClick={showMainModal}>
          <svg
            className="text-oast-midnight-300 w-6 h-6"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clip-rule="evenodd"
              d="M10.707 4.293a1 1 0 0 1 0 1.414L5.414 11H21a1 1 0 1 1 0 2H5.414l5.293 5.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 0Z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
        <h1 className="text-center text-oast-light text-lg font-medium">
          Select your wallet
        </h1>
        {/* Info Button */}
        <button>
          <svg
            className="text-oast-midnight-300 w-6 h-6"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clip-rule="evenodd"
              d="M10 3.25a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM1.667 10a8.333 8.333 0 1 1 16.666 0 8.333 8.333 0 0 1-16.666 0Z"
              fill="currentcolor"
            ></path>
            <path
              fillRule="evenodd"
              clip-rule="evenodd"
              d="M10.31 7.044a1.784 1.784 0 0 0-1.133.192 1.513 1.513 0 0 0-.699.783.792.792 0 0 1-1.481-.559c.26-.689.768-1.257 1.42-1.613a3.368 3.368 0 0 1 2.144-.367 3.262 3.262 0 0 1 1.908 1.023c.496.55.775 1.254.774 1.99 0 1.201-.948 1.972-1.587 2.369a6.63 6.63 0 0 1-1.354.635l-.028.01-.008.002h-.003l-.002.001-.235-.756.235.756A.792.792 0 0 1 9.789 10h.001m0 0 .014-.005.06-.021a5.054 5.054 0 0 0 .956-.456c.575-.357.84-.717.84-1.024 0-.332-.125-.66-.367-.928a1.68 1.68 0 0 0-.982-.521M9.265 13.77c0-.438.355-.792.792-.792h.01a.792.792 0 1 1 0 1.584h-.01a.792.792 0 0 1-.792-.792Z"
              fill="currentcolor"
            ></path>
          </svg>
        </button>
      </div>

      <div className="gap-1.5">
        {/* search */}
        <div className="relative flex items-center py-1 px-3 bg-[#1b1d22] rounded-2xl cursor-text h-10 text-oast-midnight-300 mb-2 border border-oast-midnight-700 focus:bg-oast-midnight-700">
          <svg
            className="absolute top-3 left-3"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clip-rule="evenodd"
              d="M6.667 2.667a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-5.333 4a5.333 5.333 0 1 1 9.546 3.27l3.592 3.592a.667.667 0 0 1-.943.942L9.937 10.88a5.333 5.333 0 0 1-8.604-4.213Z"
              fill="currentColor"
            ></path>
          </svg>

          <input
            type="text"
            className="bg-transparent pl-8 focus:outline-none text-xs w-full text-[#6d6788]"
            placeholder={`Search through ${wallets.length} wallets...`}
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        {/* Wallets */}
        <div className="flex flex-col gap-1.5 max-h-[330px] overflow-x-auto">
          {filteredWallets.map((wallet) => {
            return (
              <button
                key={wallet.id}
                type="button"
                className="group flex items-center justify-between w-full text-oast-light p-3 rounded-xl bg-oast-midnight-700 shadow-btn hover:bg-oast-midnight-600 transition-all duration-300"
              >
                <span className="flex items-center gap-2.5">
                  <img
                    className="w-7 h-7"
                    alt={wallet.title}
                    src={wallet.img}
                  />
                  <span>{wallet.title}</span>
                </span>

                <svg
                  className="hidden text-oast-light w-4 h-4 duration-500 opacity-0 group-hover:opacity-100 group-hover:inline-block"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.293 19.707a1 1 0 0 1 0-1.414L14.586 12 8.293 5.707a1 1 0 0 1 1.414-1.414l7 7a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414 0Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WalletModal;
