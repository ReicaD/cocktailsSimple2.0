import React, { useState, useEffect } from "react";
import Hero from "../Home/Components/Hero/Hero";
import Cards from "../Home/Components/Cards/Cards";
import Promotions from "../Promotions/Promotions";
import Deal from "../Promotions/Deal";
import styled from "styled-components";

// const People= {
//   name: "Kiki",
//   age: 90,
//   city: "Ottawa",
//   deal:50000
// };

const Header = styled.div`
background: #c19a6b;
`;

const Parent = styled.div`
  background-color: lime;
`;

const Home = () => {
  return (
    <Parent> 
    <Header>
      <Hero />
      <Cards />
      <Promotions/>
      <Deal/>
    </Header>
    </Parent>
  );
};

export default Home;
