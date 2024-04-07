import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <div className="flex-1 py-5 max-w-xl lg:max-w-none sm:mx-auto lg:mx-0">
        <div className="py-24">
          <div className="text-center space-y-5">
            <p className="text-sm font-semibold text-[#6851FF] uppercase tracking-wide">
              404 error
            </p>
            <h1 className="text-4xl font-extrabold text-gray-200 tracking-tight sm:text-5xl">
              Page not found.
            </h1>
            <p className="text-base text-gray-300">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className="mt-6">
              <Link
                className="text-base font-medium text-[#6851FF]"
                to="/"
              >
                Go back home<span aria-hidden="true"> →</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
