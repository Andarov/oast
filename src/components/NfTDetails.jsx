import React from "react";

const NfTDetails = () => {
  return (
    <div className="space-y-5 mt-10 lg:mt-16">
      <p className="font-bold text-lg leading-6 text-oast-midnight-200">NFT details</p>
      <div className="border border-oast-midnight-700 px-5 pt-5 grid grid-flow-row-dense grid-cols-2 sm:grid-cols-5 gap-5 rounded-lg">
        <div className="pb-5 border-b border-oast-midnight-700">
          <p className="text-oast-midnight-300 text-sm font-bold capitalize">medium</p>
          <p className="text-oast-midnight-200 text-sm font-medium">Image (PNG)</p>
        </div>
        <div className="pb-5 border-b border-oast-midnight-700">
          <p className="text-oast-midnight-300 text-sm font-bold capitalize">
            dimension
          </p>
          <p className="text-oast-midnight-200 text-sm font-medium">2000x2000</p>
        </div>
        <div className="pb-5 row-start-3 sm:row-start-auto border-b border-oast-midnight-700">
          <p className="text-oast-midnight-300 text-sm font-bold capitalize">
            File size
          </p>
          <p className="text-oast-midnight-200 text-sm font-medium">4.3MB</p>
        </div>
        <div className="pb-5 col-span-2 row-start-4 sm:row-start-auto border-b border-oast-midnight-700">
          <p className="text-oast-midnight-300  text-sm font-bold capitalize ">
            File IPFS
          </p>
          <a
            className="inline-flex group w-full"
            target="_blank"
            href="https://ipfs.io/ipfs/QmYefxv8gs57qBuw7fKV66d3tUGAb6KKuV4RNC65T5kUeX/1"
          >
            <button className="hover:text-brand-hover w-full text-sm text-oast-midnight-200 overflow-hidden text-ellipsis inline-flex justify-between items-center gap-2">
              <span className="text-ellipsis font-dm-mono overflow-hidden block">
                QmYefxv8gs57qBuw7fKV66d3tUGAb6KKuV4RNC65T5kUeX
              </span>
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
                className="lucide lucide-external-link shrink-0 text-oast-midnight-300 group-hover:text-brand-hover"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" x2="21" y1="14" y2="3"></line>
              </svg>
            </button>
          </a>
        </div>
        <div className="pb-5 border-b border-oast-midnight-700 sm:border-0">
          <p className="text-oast-midnight-300 text-sm font-bold capitalize">
            blockchain
          </p>
          <p className="text-oast-midnight-200 text-sm font-medium">Ethereum</p>
        </div>
        <div className="pb-5 border-b border-oast-midnight-700 sm:border-0">
          <p className="text-oast-midnight-300 text-sm font-bold capitalize">
            Token standard
          </p>
          <p className="text-oast-midnight-200 text-sm font-medium">ERC-721</p>
        </div>
        <div className="pb-5 border-b border-oast-midnight-700 sm:border-0">
          <p className="text-oast-midnight-300 text-sm font-bold capitalize">
            Date created
          </p>
          <p className="text-oast-midnight-200 text-sm font-medium">
            Apr 2, 2024 12:24 PM
          </p>
        </div>
        <div className="pb-5 col-span-2">
          <p className="text-oast-midnight-300  text-sm font-bold capitalize ">
            contract
          </p>
          <a
            className="inline-flex group w-full"
            target="_blank"
            href="https://etherscan.io/address/0xa71Fdf27D5e73fE22028957Bb8a0dBBd3409C44f"
          >
            <button className="hover:text-brand-hover w-full text-sm text-oast-midnight-200 overflow-hidden text-ellipsis inline-flex justify-between items-center gap-2">
              <span className="text-ellipsis font-dm-mono overflow-hidden block ">
                0xa71Fdf27D5e73fE22028957Bb8a0dBBd3409C44f&nbsp;
              </span>
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
                className="lucide lucide-external-link shrink-0 text-oast-midnight-300 group-hover:text-brand-hover"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" x2="21" y1="14" y2="3"></line>
              </svg>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NfTDetails;
