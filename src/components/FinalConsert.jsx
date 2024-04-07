import React from 'react';
import finalConsertImg from '../assets/finalconsert.webp';

/**
 * Component for displaying information about the final concert.
 */
const FinalConsert = () => {
  return (
    <div className="lg:max-w-full bg-oast-midnight-700 py-10 px-4 rounded-xl flex flex-col-reverse lg:flex-row gap-8 mt-20">
      {/* Image */}
      <img
        className="aspect-[653/633]"
        style={{ color: 'transparent' }}
        src={finalConsertImg}
        alt="Final concert ticket"
        width={753}
        height={733}
      />
      {/* Content */}
      <div className="text-oast-light space-y-5 place-self-center lg:w-1/3">
        {/* Location */}
        <p className="text-lg font-medium text-center lg:text-start">ISCHGL</p>
        {/* Details */}
        <div className="space-y-5">
          <p className="text-3xl md:text-5xl font-bold text-center lg:text-start font-montserrat">Exclusive VIP Area</p>
          <p className="text-lg md:text-2xl text-center lg:text-start">Right at the front of the stage for 100 NFT owners</p>
        </div>
      </div>
    </div>
  );
};

export default FinalConsert;
