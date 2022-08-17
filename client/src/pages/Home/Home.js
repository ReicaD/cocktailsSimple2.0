import React, { useState, useEffect } from "react";
import Hero from "../Home/Components/Hero/Hero";
import Cards from "../Home/Components/Cards/Cards";
import Promotions from "../Promotions/Promotions";
import Deal from "../Promotions/Deal";


// const People= {
//   name: "Kiki",
//   age: 90,
//   city: "Ottawa",
//   deal:50000
// };

const Home = () => {
  return (
    <div>
      <Hero />
      <Cards />
      <Promotions/>
      <Deal/>
    </div>
  );
};

export default Home;
