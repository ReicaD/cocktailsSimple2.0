import React from "react";
import Slide from "react-reveal/Slide";
import { Link } from "react-router-dom";

function Cards() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <Slide left>
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/3">
                <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                  <img
                    src="./olDfashion1.jpg"
                    // classNameName="max-w-full h-auto"
                    className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                    alt="..."
                    // classNameName="relative"
                    // alt="food illustration"
                    // loading="lazy"
                    // width="300"
                    // height="300"
                    // text-align="cover"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"></h2>
                    <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
                      The OldFashions
                    </h1>
                    <p className="leading-relaxed mb-3">
                      This isn’t just about drink reviews or recipes, but the
                      Tales of the Cocktail event and other great liquor
                      gatherings around the world
                    </p>
                    <div className="flex items-center flex-wrap ">
                      <button className="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">
                        <Link to="/Oldfashion">Learn more</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full rounded-xl shadow-cla-violate bg-gradient-to-r from-pink-50 to-red-50 overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                    src="./dinercockT.jpg"
                    alt="blog"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"></h2>
                    <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
                      The Introverts
                    </h1>
                    <p className="leading-relaxed mb-3">
                      The name says it all,cocktails that are easy to make and
                      confidently whip up as part of your repertoire.
                    </p>
                    <div className="flex items-center flex-wrap ">
                      <button className="bg-gradient-to-r from-orange-300 to-amber-400 hover:scale-105 drop-shadow-md shadow-cla-violate px-4 py-1 rounded-lg">
                        <Link to="/Introverts">Learn more</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
                  <img
                    // src="./margaritas.jpg"
                    className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                    alt="..."
                    src="./tamanna1.png"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"></h2>
                    <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
                      The Catalyzer
                    </h1>
                    <p className="leading-relaxed mb-3">
                      A great way to enjoy Your hot day at home with our ice
                      cold margarita recipies.
                    </p>
                    <div className="flex items-center flex-wrap ">
                      <button className="bg-gradient-to-r from-fuchsia-300 to-pink-400 hover:scale-105  shadow-cla-blue px-4 py-1 rounded-lg">
                        <Link to="/Catalyzer">Learn more</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    </div>
  );
}

export default Cards;
