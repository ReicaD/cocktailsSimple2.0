import React from "react";
import Slide from "react-reveal/Slide";

const Hero = () => {
  return (
    <div>
      <div className="relative w-full">
        <div className="relative bg-blue">
          <div className="container m-auto px-6 pt-32 md:px-12 lg:pt-[4.8rem] lg:px-7">
            <div className="flex items-center flex-wrap px-2 md:px-0">
              <div className="relative lg:w-6/12 lg:py-24 xl:py-32">
                <h1 className="font-bold text-4xl text-green-900 md:text-5xl lg:w-10/12">
                  Just great cocktail recipes!
                </h1>
                {/* <form action="" className="w-full mt-12"> */}
                  {/* <div className="relative flex p-1 rounded-full bg-white border border-green-200 shadow-md md:p-2"> */}
                    {/* <select */}
                      {/* // className="hidden p-3 rounded-full bg-transparent md:block md:p-4"
                      // name="domain"
                      // id="domain" 
                    {/* // > */}
                      {/* <option value="design">All Cocktails</option> */}
                      {/* <option value="development">Free samples</option> */}
                      {/* <option value="marketing">Marketing</option> */}
                    {/* </select> */}
                    {/* <input */}
                      {/* // placeholder="Your favorite food"
                      // className="w-full p-4 rounded-full"
                      // type="text"
                    {/* // /> */}
                    {/* <button */}
                      {/* // type="button"
                      // title="Start buying"
                      // className="ml-auto py-3 px-6 rounded-full text-center transition bg-gradient-to-b from-green-200 to-green-300 hover:to-red-300 active:from-green-400 focus:from-red-400 md:px-12" */} 
                    {/* // > */}
                      {/* <span className="hidden text-green-900 font-semibold md:block"> */}
                        {/* Search All */}
                      {/* </span> */}
                      {/* <svg */}
                        {/* // xmlns="http://www.w3.org/2000/svg"
                        // className="w-5 mx-auto text-green-900 md:hidden"
                        // fill="currentColor"
                        // className="bi bi-search"
                        // viewBox="0 0 16 16" */}
                      {/* // > */}
                        {/* <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" /> */}
                      {/* </svg> */}
                    {/* </button> */}
                  {/* </div> */}
                {/* </form> */}
                <br></br>
                <strong>
                  {" "}
                  <p className="mt-8 text-gray-700 lg:w-10/12">
                    CocktailsSimple is a great website for those specifically{" "}
                    <a href="#" className="text-green-700">
                      looking
                    </a>{" "}
                    to make drinks from the comfort of their own home.
                  </p>
                </strong>
              </div>
              <Slide right>
                <div className="ml-auto -mb-24 lg:-mb-56 lg:w-6/12">
                  <img
                    //src="https://tailus.io/sources/blocks/food-delivery/preview/images/food.webp"
                    src="./introdp3.png"
                    className="relative"
                    alt="food illustration"
                    loading="lazy"
                    width="450000"
                    height="55000"
                    alt="img"
                  />
                </div>
              </Slide>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
