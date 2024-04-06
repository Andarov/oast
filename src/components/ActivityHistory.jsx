import React, { useState } from "react";
import { histories } from "../data";

const ActivityHistory = () => {
  histories.sort((a, b) => a.time.count - b.time.count);
  const [first, setfirst] = useState(1);
  const [last, setlast] = useState(6);

  const lastIndex = first * last;
  const firstIndex = lastIndex - last;

  const carsSlicedArr = histories.slice(firstIndex, lastIndex);

  const pages = [];

  for (let i = 0; i <= Math.ceil(histories.length / last); i++) {
    pages.push(i);
  }

  const numberOfPages = pages.filter((e) => e !== 0);

  if (first < 1) {
    setfirst(numberOfPages.length);
  } else if (first > numberOfPages.length) {
    setfirst(1);
  }

  const [isprev, setisprev] = useState(true);
  const [isnext, setisnext] = useState(true);

  return (
    <div>
      <div class="flex flex-col mt-10 lg:mt-20 mb-5">
        <h1 class="text-lg font-bold text-oast-midnight-200 font-montserrat">
          Activity history
        </h1>
        <div class="inline-block min-w-full align-middle px-5 mt-5 border border-oast-midnight-700 border-solid rounded-xl overflow-x-auto custom-scrollbar">
          <table class="min-w-full divide-y divide-oast-midnight-700">
            <thead>
              <tr>
                <th
                  scope="col"
                  class="py-5 pl-4- pr-3 text-left text-sm font-semibold text-oast-midnight-300 md:pl-0"
                >
                  Activity
                </th>
                <th
                  scope="col"
                  class="py-5 pl-4 pr-3 text-left text-sm font-semibold text-oast-midnight-300 md:pl-0"
                >
                  Account
                </th>
                <th
                  scope="col"
                  class="py-5 pl-4 pr-3 text-left text-sm font-semibold text-oast-midnight-300 md:pl-0"
                >
                  Amount
                </th>
                <th
                  scope="col"
                  class="py-5 pl-4 pr-3 text-left text-sm font-semibold text-oast-midnight-300 md:pl-0"
                >
                  Time
                </th>
                <th
                  scope="col"
                  class="py-5 pl-4 pr-3 text-left text-sm font-semibold text-oast-midnight-300 md:pl-0"
                >
                  Transaction
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-oast-midnight-700">
              {carsSlicedArr.map((tab) => {
                return (
                  <tr>
                    <td class="whitespace-nowrap py-4 pr-3 text-sm font-medium text-oast-midnight-700 md:pl-0">
                      <div class="rounded-full text-sm font-medium w-fit px-2 py-0.5 items-center inline-flex bg-[#ACDFF7] capitalize">
                        bid
                      </div>
                    </td>
                    <td class="whitespace-nowrap font-dmSans px-3 md:px-0 py-5 text-sm text-oast-midnight-200">
                      <div class="flex items-center gap-2 text-oast-midnight-200 text-sm">
                        <span class="relative flex shrink-0 overflow-hidden rounded-full h-6 w-6">
                          <img
                            class="aspect-square h-full w-full"
                            alt="gradient"
                            src={tab.acountImg}
                          />
                        </span>
                        <span>{tab.account}</span>
                      </div>
                    </td>
                    <td class="whitespace-nowrap px-3 md:px-0 py-5 text-sm text-oast-midnight-200">
                      <div class="flex gap-2">
                        <span class="text-oast-light font-bold">
                          {tab.ammountCast}
                        </span>
                        <span class="text-oast-midnight-200">
                          {tab.ammountevro} €
                        </span>
                      </div>
                    </td>
                    <td class="whitespace-nowrap px-3 md:px-0 py-5 text-sm text-oast-midnight-200">
                      {tab.time.count} {tab.time.watch}
                    </td>
                    <td class="whitespace-nowrap font-dmSans px-3 md:px-0 py-5 text-sm text-oast-midnight-200">
                      <a
                        class="inline-flex group w-full"
                        target="_blank"
                        href="https://etherscan.io/tx/0xda50d5d246a0e8bce150cf8931ff2d10735edff78eadad0c324f7bfb4d8ce40a"
                      >
                        <button class="hover:text-brand-hover w-full text-sm text-oast-midnight-200 overflow-hidden text-ellipsis inline-flex justify-between items-center gap-2">
                          <span class="font-dmSans">{tab.transaction}</span>
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
                            class="lucide lucide-external-link w-4 h-4 text-oast-midnight-300 group-hover:text-brand-hover"
                          >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" x2="21" y1="14" y2="3"></line>
                          </svg>
                        </button>
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* pagination */}
      <nav
        role="navigation"
        aria-label="pagination"
        class="mx-auto flex w-full justify-center"
      >
        <ul class="flex flex-row items-center gap-1">
          <li class="">
            <button onClick={() => setfirst(first - 1)}
              class="inline-flex items-center whitespace-nowrap text-base leading-none font-medium duration-125 transition-all ease-in-out border border-oast-midnight-600 text-oast-light h-10 rounded-lg py-3 px-5 justify-center gap-1 pl-2.5 opacity-50 cursor-not-allowed active:transition-none active:scale-100 hover:scale-100 hover:bg-oast-midnight-800"
              aria-label="Go to previous page"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-chevron-left h-4 w-4"
              >
                <path d="m15 18-6-6 6-6"></path>
              </svg>
              <span>Previous</span>
            </button>
          </li>
          <li class="">
            <button onClick={() => setfirst(first + 1)}
              class="inline-flex items-center whitespace-nowrap text-base leading-none font-medium duration-125 transition-all ease-in-out border border-oast-midnight-600 text-oast-light h-10 rounded-lg py-3 px-5 justify-center gap-1 pl-2.5 opacity-50 cursor-not-allowed active:transition-none active:scale-100 hover:scale-100 hover:bg-oast-midnight-800"
              aria-label="Go to next page"
            >
              <span>Next</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-chevron-right h-4 w-4"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ActivityHistory;
