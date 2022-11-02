import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
  background: orange;
  display: flex;
  justify-content: space-around;
  margin-top: 0px;
  //  border:2px solid white;
`;

const Banner = styled.nav``;

const Navbar = () => {
  return (
    <div>
      <Parent style={{ margin: 0 }}>
        <Link to="/home" style={{ padding: 5 }}>
          Home
        </Link>
        <Link to="/drinks" style={{ padding: 5 }}>
          Drinks
        </Link>
        <Link to="/new">New</Link>
        <Link to="/about" style={{ padding: 5 }}>
          About
        </Link>
        <Link to="/views" style={{ padding: 5 }}>
          Views
        </Link>
      </Parent>
    </div>
  );
};

export default Navbar;
