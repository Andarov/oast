import React from "react";

// This component displays details about an NFT
const NfTDetails = () => {
  return (
    <section className="space-y-5 mt-10 lg:mt-16">
      {/* NFT Details heading */}
      <h2 className="font-bold text-lg leading-6 text-oast-midnight-200">NFT details</h2>
      {/* Container for NFT details */}
      <div className="border border-oast-midnight-700 px-5 pt-5 grid grid-flow-row-dense grid-cols-2 sm:grid-cols-5 gap-5 rounded-lg">
        {/* First row */}
        <div className="pb-5 border-b border-oast-midnight-700">
          {/* Medium */}
          <p className="text-oast-midnight-300 text-sm font-bold capitalize">medium</p>
          {/* Image type */}
          <p className="text-oast-midnight-200 text-sm font-medium">Image (PNG)</p>
        </div>
        {/* Dimension */}
        <div className="pb-5 border-b border-oast-midnight-700">
          <p className="text-oast-midnight-300 text-sm font-bold capitalize">
            dimension
          </p>
          {/* Image size */}
          <p className="text-oast-midnight-200 text-sm font-medium">2000x2000</p>
        </div>
        {/* File size */}
        <div className="pb-5 row-start-3 sm:row-start-auto border-b border-oast-midnight-700">
          <p className="text-oast-midnight-300 text-sm font-bold capitalize">
            File size
          </p>
          {/* Size in MB */}
          <p className="text-oast-midnight-200 text-sm font-medium">4.3MB</p>
        </div>
        {/* IPFS link */}
        <div className="pb-5 col-span-2 row-start-4 sm:row-start-auto border-b border-oast-midnight-700">
          <p className="text-oast-midnight-300  text-sm font-bold capitalize ">
            File IPFS
          </p>
          {/* Link to IPFS */}
          <a
            className="inline-flex group w-full"
            target="_blank"
            href="https://ipfs.io/ipfs/QmYefxv8gs57qBuw7fKV66d3tUGAb6KKuV4RNC65T5kUeX/1"
          >
            {/* IPFS hash */}
            <span className="group hover:text-oast-primary-dark w-full text-sm text-oast-midnight-200 overflow-hidden text-ellipsis inline-flex justify-between items-center gap-2">
              <span className="text-ellipsis font-dm-mono overflow-hidden block">
                QmYefxv8gs57qBuw7fKV66d3tUGAb6KKuV4RNC65T5kUeX
              </span>
              {/* Link icon */}
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
                className="shrink-0 text-oast-midnight-300 group-hover:text-oast-primary-dark"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" x2="21" y1="14" y2="3"></line>
              </svg>
            </span>
          </a>
        </div>
        {/* Second row */}
        {/* Blockchain */}
        <div className="pb-5 border-b border-oast-midnight-700 sm:border-0">
          <p className="text-oast-midnight-300 text-sm font-bold capitalize">
            blockchain
          </p>
          {/* Blockchain type */}
          <p className="text-oast-midnight-200 text-sm font-medium">Ethereum</p>
        </div>
        {/* Token standard */}
        <div className="pb-5 border-b border-oast-midnight-700 sm:border-0">
          <p className="text-oast-midnight-300 text-sm font-bold capitalize">
            Token standard
          </p>
          {/* Token standard */}
          <p className="text-oast-midnight-200 text-sm font-medium">ERC-721</p>
        </div>
        {/* Date created */}
        <div className="pb-5 border-b border-oast-midnight-700 sm:border-0">
          <p className="text-oast-midnight-300 text-sm font-bold capitalize">
            Date created
          </p>
          {/* Creation date */}
          <p className="text-oast-midnight-200 text-sm font-medium">
            Apr 2, 2024 12:24 PM
          </p>
        </div>
        {/* Contract */}
        <div className="pb-5 col-span-2">
          <p className="text-oast-midnight-300  text-sm font-bold capitalize ">
            contract
          </p>
          {/* Contract address */}
          <a
            className="inline-flex group w-full"
            target="_blank"
            href="https://etherscan.io/address/0xa71Fdf27D5e73fE22028957Bb8a0dBBd3409C44f"
          >
            <span className="group hover:text-oast-primary-dark w-full text-sm text-oast-midnight-200 overflow-hidden text-ellipsis inline-flex justify-between items-center gap-2">
              <span className="text-ellipsis font-dm-mono overflow-hidden block ">
                0xa71Fdf27D5e73fE22028957Bb8a0dBBd3409C44f&nbsp;
              </span>
              {/* Link icon */}
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
                className="shrink-0 text-oast-midnight-300 group-hover:text-oast-primary-dark"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" x2="21" y1="14" y2="3"></line>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default NfTDetails;
