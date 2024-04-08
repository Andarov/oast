import React from 'react'
import { wallets } from "../data";

const MainModal = ({isValid, handleSubmit, showWalletModal, handleCloseModal}) => {
  return (
    <div className="p-6 bg-oast-main w-full max-w-[360px] rounded-xl">
        {/* Modal Header */}
        <div className="relative mb-5">
          <h1 className="text-center text-oast-light text-lg font-medium">
            Log in or sign up
          </h1>
          {/* Close Button */}
          <button onClick={handleCloseModal} className="absolute right-0 top-0" type="button">
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
                clipRule="evenodd"
                d="M4.41 4.41a.833.833 0 0 1 1.18 0L10 8.822l4.41-4.41a.833.833 0 1 1 1.18 1.178L11.178 10l4.41 4.41a.833.833 0 1 1-1.178 1.18L10 11.177 5.588 15.59a.833.833 0 1 1-1.178-1.178L8.82 10l-4.41-4.41a.833.833 0 0 1 0-1.18Z"
                fill="currentcolor"
              ></path>
            </svg>
          </button>
        </div>

        <div>
          <div className="gap-1.5">
            {/* Email Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-1.5">
              {/* Email Input */}
              <div className="relative">
                <input
                  type="email"
                  id="email_field"
                  className={`w-full p-3 border text-oast-light text-[15px] rounded-xl focus:outline-none ${
                    isValid
                      ? "border-oast-midnight-700 bg-oast-midnight-700"
                      : "border-[#ff6a6a] bg-[#3c1a2f]"
                  }`}
                  placeholder="Enter your email"
                  onFocus={() => (this.placeholder = "")}
                  onBlur={() => (this.placeholder = "Enter your email")}
                />
                <p
                  className={`${
                    isValid ? "hidden" : "block"
                  } text-[11px] font-medium text-[#ff6a6a] pt-1 pl-3`}
                >
                  Invalid or incorrect email. Did you mistype it?
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="h-10 bg-[#4779ff] rounded-xl text-base"
                data-testid="email_submit_button"
              >
                Continue
              </button>
            </form>

            {/* Divider & OR */}
            <div className="flex items-center justify-between gap-3 py-4">
              <div className="w-full h-px bg-oast-midnight-600"></div>
              <p className="text-[#a8a1c5] text-sm font-bold">OR</p>
              <div className="w-full h-px bg-oast-midnight-600"></div>
            </div>

            {/* Wallets */}
            <div className="flex flex-col gap-1.5">
              {wallets.slice(0,3).map((wallet) => {
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
              {/* View All Wallets Button */}
              <button onClick={showWalletModal} className="group flex items-center justify-between w-full text-oast-light p-3 rounded-xl bg-transparent shadow-btn hover:bg-oast-midnight-600 transition-all duration-300">
                <span>View all wallets</span>

                <div className="flex items-center">
                  <span className="inline-block text-[#a8a1c5] whitespace-nowrap px-2 py-1 bg-oast-midnight-700 group-hover:hidden rounded-full text-[10px]">
                    410+ available
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
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default MainModal