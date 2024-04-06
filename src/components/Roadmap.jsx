import React from 'react'

const Roadmap = () => {
  return (
    <section class="flex flex-col justify-center items-center">
        <h2 class="px-6 py-2 my-2 text-lg text-oast-midnight-200 rounded-full bg-oast-midnight-700">Roadmap</h2>
        {/* roadmap */}
        {/* 1 */}
        <div class="h-12 w-[4px] my-1 bg-oast-midnight-700"></div>
        <div class="flex justify-center text-center my-3 gap-3 items-center flex-col">
            <h4 class="sm:text-5xl font-montserrat text-3xl font-bold">Supply</h4>
            <span class="sm:text-2xl font-montserrat  text-lg">3300 ISCHGL x LEGO® inspired NFTs</span>
        </div>
        {/* 2 */}
        <div class="h-12 w-[4px] my-1 bg-oast-midnight-800"></div>
        <div class="flex justify-center text-center my-2 gap-3 items-center flex-col">
            <h4 class="sm:text-5xl font-montserrat text-3xl font-bold">Auction</h4>
            <span class="sm:text-2xl text-lg">03.04. - 07.04.</span>
            <span class="max-w-xs font-montserrat leading-7 text-oast-midnight-300 text-center text-base">The proceeds from this auction will be donated to a good cause</span>
        </div>
        {/* 3 */}
        <div class="h-12 w-[4px] my-1 bg-oast-midnight-800"></div>
        <div class="flex justify-center text-center my-2 gap-3 items-center flex-col">
            <h4 class="sm:text-5xl font-montserrat text-3xl font-semibold">Pre-sale whitelist</h4>
            <span class="sm:text-2xl text-lg">10.04. - 13.04.</span>
            <span class="max-w-[290px] font-montserrat  leading-7 text-oast-midnight-300 text-center text-base">Guaranteed right of first refusal</span>
        </div>
        {/* 4 */}
        <div class="h-12 w-[4px] my-1 bg-oast-midnight-800"></div>
        <div class="flex justify-center text-center my-2 gap-3 items-center flex-col">
            <h4 class="sm:text-5xl font-montserrat text-3xl font-semibold">Public sale</h4>
            <span class="sm:text-2xl font-montserrat  text-lg">15.04. - 21.04.</span>
        </div>
        {/* 5 */}
        <div class="h-12 w-[4px] my-1 bg-oast-midnight-800"></div>
        <div class="flex justify-center text-center my-2 gap-3 items-center flex-col">
            <h4 class="sm:text-5xl font-montserrat text-3xl font-semibold">Reveal</h4>
            <span class="sm:text-2xl font-montserrat  text-lg">To be announced </span>
        </div>
        {/* 6 */}
        <div class="h-12 w-[4px] my-1 bg-oast-midnight-800"></div>
        <div class="flex justify-center text-center my-2 gap-3 items-center flex-col">
            <h4 class="sm:text-5xl font-montserrat text-3xl font-semibold">Utilities</h4>
            <span class="sm:text-2xl font-montserrat  text-lg">To be announced</span>
        </div>

        <div class="w-full my-3 max-w-md">
            <div>
                {/* join waitlist */}
                <div class="flex max-w-xs mx-auto flex-col gap-6">
                    <button aria-label="button" class="inline-flex items-center gap-2 whitespace-nowrap text-base leading-none font-medium focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 active:scale-95 hover:scale-105 duration-125 transition-all ease-in-out bg-oast-primary-medium text-oast-light hover:bg-oast-primary-dark h-14 rounded-xl p-5 justify-center w-full">Join Waitlist</button>
                </div>

                <div class="bg-midnight-900 rounded-2xl gap-4 items-center px-4 py-5 shadow-5xl mt-5 hidden flex-row">
                    <div class="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#6851FF" stroke-width="1.2857142857142858" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-circle ">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <path d="m9 11 3 3L22 4"></path>
                        </svg>
                        <div class="text-oast-light flex flex-col ">
                            <span class="text-lg font-bold">Great, you are in the list!</span>
                            <span class="text-sm font-medium">You will soon receive news from us</span>
                        </div>
                    </div>
                </div>
            </div>
            <p class="text-sm font-medium text-oast-midnight-300 text-center leading-6 my-3">Subscribe to the newsletter now to receive all the information for the sale</p>
        </div>
    </section>
  )
}

export default Roadmap