import React from 'react'
import finalconsert from '../assets/finalconsert.webp'

const FinalConsert = () => {
  return (
    <div class="max-w-md lg:max-w-full bg-oast-midnight-700 py-10 px-4 rounded-xl flex flex-col-reverse lg:flex-row gap-8 mt-20">
        <img className='aspect-[653/633]' style={{color: 'transparent'}} src={finalconsert} alt="final consert ticket" width={753} height={733} />
        <div class="text-oast-light space-y-5 place-self-center lg:w-1/3">
            <p class="text-lg font-medium text-center lg:text-start">ISCHGL</p>
            <div class="space-y-5">
                <p class="text-3xl md:text-5xl font-bold text-center lg:text-start font-montserrat">Exclusive VIP Area</p>
                <p class="text-lg md:text-2xl text-center lg:text-start">Right at the front of the stage for 100 NFT owners</p>
            </div>
        </div>
    </div>
  )
}

export default FinalConsert