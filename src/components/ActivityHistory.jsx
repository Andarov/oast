import React, { useState, useEffect } from "react";
import { histories } from "../data";

const ActivityHistory = () => {
  const [first, setFirst] = useState(1);
  const [last, setLast] = useState(6);
  const [isPrevActive, setIsPrevActive] = useState(false);
  const [isNextActive, setIsNextActive] = useState(true);

  const sortedHistories = histories.sort((a, b) => b.dateTime - a.dateTime);

  useEffect(() => {
    // Previous button state
    setIsPrevActive(first > 1);
    // Next button state
    setIsNextActive(last * first < histories.length);
  }, [first, last]);

  const handlePreviousClick = () => {
    setFirst(first - 1);
  };

  const handleNextClick = () => {
    setFirst(first + 1);
  };

  const lastIndex = first * last;
  const firstIndex = lastIndex - last;

  const carsSlicedArr = sortedHistories.slice(firstIndex, lastIndex);

  function formatTimeDifference(dateTime) {
    const now = new Date();
    const diffMilliseconds = now - dateTime;

    const minuteMilliseconds = 60 * 1000;
    const hourMilliseconds = 60 * minuteMilliseconds;
    const dayMilliseconds = 24 * hourMilliseconds;
    const yearMilliseconds = 365 * dayMilliseconds;

    if (diffMilliseconds < minuteMilliseconds) {
      const diffSeconds = Math.round(diffMilliseconds / 1000);
      return `${diffSeconds} seconds ago`;
    } else if (diffMilliseconds < hourMilliseconds) {
      const diffMinutes = Math.round(diffMilliseconds / minuteMilliseconds);
      return `${diffMinutes} minutes ago`;
    } else if (diffMilliseconds < dayMilliseconds) {
      const diffHours = Math.round(diffMilliseconds / hourMilliseconds);
      return `${diffHours} hours ago`;
    } else if (diffMilliseconds < 2 * dayMilliseconds) {
      return `1 day ago`;
    } else if (diffMilliseconds < yearMilliseconds) {
      const diffDays = Math.round(diffMilliseconds / dayMilliseconds);
      return `${diffDays} days ago`;
    } else {
      const diffYears = Math.round(diffMilliseconds / yearMilliseconds);
      return `${diffYears} years ago`;
    }
  }

  return (
    <div>
      <div className="flex flex-col mt-10 lg:mt-20 mb-5">
        <h1 className="text-lg font-bold text-oast-midnight-200 font-montserrat">
          Activity history
        </h1>
        <div className="inline-block min-w-full align-middle px-5 mt-5 border border-oast-midnight-700 border-solid rounded-xl overflow-x-auto custom-scrollbar">
          <table className="min-w-full divide-y divide-oast-midnight-700">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="py-5 pl-4- pr-3 text-left text-sm font-semibold text-oast-midnight-300 md:pl-0"
                >
                  Activity
                </th>
                <th
                  scope="col"
                  className="py-5 pl-4 pr-3 text-left text-sm font-semibold text-oast-midnight-300 md:pl-0"
                >
                  Account
                </th>
                <th
                  scope="col"
                  className="py-5 pl-4 pr-3 text-left text-sm font-semibold text-oast-midnight-300 md:pl-0"
                >
                  Amount
                </th>
                <th
                  scope="col"
                  className="py-5 pl-4 pr-3 text-left text-sm font-semibold text-oast-midnight-300 md:pl-0"
                >
                  Time
                </th>
                <th
                  scope="col"
                  className="py-5 pl-4 pr-3 text-left text-sm font-semibold text-oast-midnight-300 md:pl-0"
                >
                  Transaction
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-oast-midnight-700">
              {carsSlicedArr.map((tab, index) => {
                return (
                  <tr key={index}>
                    <td className="whitespace-nowrap py-4 pr-3 text-sm font-medium text-oast-midnight-700 md:pl-0">
                      <div className="rounded-full text-sm font-medium w-fit px-2 py-0.5 items-center inline-flex bg-[#ACDFF7] capitalize">
                        bid
                      </div>
                    </td>
                    <td className="whitespace-nowrap font-dmSans px-3 md:px-0 py-5 text-sm text-oast-midnight-200">
                      <div className="flex items-center gap-2 text-oast-midnight-200 text-sm">
                        <span className="relative flex shrink-0 overflow-hidden rounded-full h-6 w-6">
                          <img
                            className="aspect-square h-full w-full"
                            alt="gradient"
                            src={tab.acountImg}
                          />
                        </span>
                        <span>{tab.account}</span>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 md:px-0 py-5 text-sm text-oast-midnight-200">
                      <div className="flex gap-2">
                        <span className="text-oast-light font-bold">
                          {tab.ammountCast}
                        </span>
                        <span className="text-oast-midnight-200">
                          {tab.ammountevro} €
                        </span>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 md:px-0 py-5 text-sm text-oast-midnight-200">
                      {formatTimeDifference(tab.dateTime)}
                    </td>
                    <td className="whitespace-nowrap font-dmSans px-3 md:px-0 py-5 text-sm text-oast-midnight-200">
                      <a
                        className="inline-flex group w-full"
                        target="_blank"
                        href="https://etherscan.io/tx/0xda50d5d246a0e8bce150cf8931ff2d10735edff78eadad0c324f7bfb4d8ce40a"
                      >
                        <span className="hover:text-brand-hover w-full text-sm text-oast-midnight-200 overflow-hidden text-ellipsis inline-flex justify-between items-center gap-2 hover:text-oast-primary-dark">
                          <span className="font-dmSans">{tab.transaction}</span>
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
                            className="lucide lucide-external-link w-4 h-4 text-oast-midnight-300 group-hover:text-oast-primary-dark"
                          >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" x2="21" y1="14" y2="3"></line>
                          </svg>
                        </span>
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
        className="mx-auto flex w-full justify-center"
      >
        <ul className="flex flex-row items-center gap-1">
          <li>
            <button
              onClick={handlePreviousClick}
              className={`inline-flex items-center whitespace-nowrap text-base leading-none font-medium duration-125 transition-all ease-in-out border border-oast-midnight-600 text-oast-light h-10 rounded-lg py-3 px-5 justify-center gap-1 pl-2.5 ${
                isPrevActive
                  ? "active:scale-95 hover:scale-105"
                  : "opacity-50 cursor-not-allowed"
              } active:transition-none active:scale-100 hover:scale-100 hover:bg-oast-midnight-800`}
              aria-label="Go to previous page"
              disabled={!isPrevActive}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-left h-4 w-4"
              >
                <path d="m15 18-6-6 6-6"></path>
              </svg>
              <span>Previous</span>
            </button>
          </li>
          <li>
            <button
              onClick={handleNextClick}
              className={`inline-flex items-center whitespace-nowrap text-base leading-none font-medium duration-125 transition-all ease-in-out border border-oast-midnight-600 text-oast-light h-10 rounded-lg py-3 px-5 justify-center gap-1 pr-2.5 ${
                isNextActive
                  ? "active:scale-95 hover:scale-105"
                  : "opacity-50 cursor-not-allowed"
              } active:transition-none active:scale-100 hover:scale-100 hover:bg-oast-midnight-800`}
              aria-label="Go to next page"
              disabled={!isNextActive}
            >
              <span>Next</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-right h-4 w-4"
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
