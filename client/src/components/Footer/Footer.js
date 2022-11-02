import React from "react";

{/* <footer>
    copyright &copy; Blog VereD 2022
</footer> */}

function Footer() {
  return (
    <div class="h-screen flex justify-center items-center">
      <card class="grid grid-cols-6 max-w-5xl mx-8 rounded-xl bg-blue-800">
        <div class="col-span-4">
          <h2 class="font-bold text-3xl text-white ml-10 mt-8">
            A Taste for your Entire Journey!
          </h2>

          <strong>
            <p class="font-light text-white text-sm ml-10 mt-5">
              There is no better cocktail for those hot summer days than a
              Mojito.!!
            </p>
          </strong>
          <button class="text-white font-semibold ml-10 mt-5 mb-8 group ">
            View cocktails here
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline-block h-6 w-6 group-hover:translate-x-2 transition delay-100 transition-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>

        <div class="col-span-2 relative">
          <img src="./margaritas.jpg" class="absolute bottom-0 right-0"/>
        </div>
      </card>
    </div>
  );
}

export default Footer;
