import React from "react";
import { nftProps } from "../data";

const NFTProps = () => {
  return (
    <section>
      <h2 className="font-bold text-lg leading-6 text-oast-midnight-200">
        NFT Properties
      </h2>
      <div className="inline-block min-w-full align-middle px-5 mt-5 border border-oast-midnight-700 border-solid rounded-xl">
        <table className="min-w-full divide-y divide-oast-midnight-700">
          <tbody className="divide-y divide-oast-midnight-700">
            {nftProps.map((prop) => {
              return (
                <tr key={prop.id} className="md:space-x-24">
                  <td className="py-4 pr-3 text-sm font-medium text-oast-midnight-300 md:pl-0">
                    <span className="font-bold">{prop.title}</span>
                    <p className="py-3 md:py-5 text-sm text-oast-midnight-200 md:hidden whitespace-normal">
                      {prop.description}
                    </p>
                  </td>
                  <td className="px-3 md:px-0 py-5 text-sm text-oast-midnight-200 hidden md:block">
                    {prop.description}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default NFTProps;
