import React from "react";

const Hero = () => {
  return (
    <div>
      <div class="flex h-screen items-center justify-center bg-indigo-50 px-4">
        <div class="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
          <img
            src="https://i.imgur.com/5dmBrx6.jpg"
            alt="plant"
            class="h-auto w-full"
          />
          <div class="p-5">
            <p class="text-medium mb-5 text-gray-700">
              Well, aren't you going up to the lake tonight, you've been
              planning it for two weeks.
            </p>
            <button class="w-full rounded-md bg-indigo-600  py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75">
              See More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
