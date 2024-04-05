import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <div class="flex-1 py-5 max-w-xl lg:max-w-none sm:mx-auto lg:mx-0">
        <div class="py-24">
          <div class="text-center space-y-5">
            <p class="text-sm font-semibold text-[#6851FF] uppercase tracking-wide">
              404 error
            </p>
            <h1 class="text-4xl font-extrabold text-gray-200 tracking-tight sm:text-5xl">
              Page not found.
            </h1>
            <p class="text-base text-gray-300">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div class="mt-6">
              <Link
                class="text-base font-medium text-[#6851FF]"
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
