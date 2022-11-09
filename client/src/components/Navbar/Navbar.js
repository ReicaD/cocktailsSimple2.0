import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Input } from "@chakra-ui/react";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;

  flex-direction: row-reverse;
  margin: 10px;
`;

const Header = styled.h1`
  color: red;
  margin: 10px;
`;
const Box1 = styled.div`
  display: flex;
  height: 45%;
  width: 50%;
  background: black;
`;
const Box2 = styled.div`
  border: 3px solid #cc7722;
  width: 35%;
  background: #273746;
`;

const Text = styled.p`
  color: purple;
  padding: 25px;
  display: flex;
  align-items: center;
  background: #7393b3;
`;

const Container = styled.div`
  width: 100vw;
  height: 650px;
  display: flex;
  background: #273746;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  margin: 5px;
`;

const Image2 = styled.img`
  width: 50%;
  height: 100%;
  margin: 5px;
`;
const Parent = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 2rem;
  overflow: hidden;
  z-index: 1;
  width:100%; 
  margin: auto;
  top: 0;
  //border-bottom: solid 1px var(--primary-color);
  opacity: 0.9;
  top: 0;
   
   background: orange;

  // display: flex;
  // justify-content: space-around;
  // margin-top: 0px;
  // //  border:2px solid white;
  // font-family: sans;
  // // position: fixed;
   
}
   
`;


// const sticky = styled.nav` {
//   position: fixed;
//   top: 0;
//   width:0;
// }`;

const Banner = styled.nav``;

const Navbar = () => {
  return (
    <div>
      <Parent style={{ margin: 0 }}>
        {/* <sticky style={{  }}></sticky> */}

        <Link to="/home" style={{ padding: 5 }}>
          Home
        </Link>

        <Link to="/new" style={{ padding: 5 }}>
          New
        </Link>
        <Link to="/about" style={{ padding: 5 }}>
          About
        </Link>
        <Input
          htmlSize={4}
          width="20%"
          placeholder="Search!"
          background={"#F5CBA7"}
          color={"black"}
        />
      </Parent>
    </div>
  );
};

export default Navbar;
