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
  background: Black;
`;

const Banner = styled.nav``;

const Views = () => {
  return (
    <div>
      {/* <nav style={{ margin: 10 }}>
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
      </nav> */}
      <Parent>
        <Wrapper>
          <Header>Vegeterian</Header>
          <Header>Proteins</Header>
          <Header>Daily</Header>
        </Wrapper>
        <Container>
          <Image
            src="https://images.unsplash.com/photo-1606791422814-b32c705e3e2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHZlZ2V0YXJpYW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt="porsche"
          />
          <Image2
            src="https://images.unsplash.com/photo-1530554764233-e79e16c91d08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGZvb2QlMjB2ZWd8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
            alt="porsche"
          />
          {/* <Text>People who love to eat are always the best people.</Text> */}
        </Container>
        <Container>
          <Image2
            src="https://images.unsplash.com/photo-1530554764233-e79e16c91d08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGZvb2QlMjB2ZWd8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
            alt="porsche"
          />
          <Image
            src="https://images.unsplash.com/photo-1606791422814-b32c705e3e2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHZlZ2V0YXJpYW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt="porsche"
          />
          {/* <Text>People who love to eat are always the best people.</Text> */}
        </Container>
        <Container>
          {/* <Text>To live a full life, you have to fill your stomach first.</Text> */}
          <Image
            src="https://images.unsplash.com/photo-1504632236107-4ae29a44f388?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fGZvb2QlMjB2ZWd8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
            alt="#"
            style={{
              margin: "5px",
            }}
          />
        </Container>
        <Banner>
          <Box1>
            <Image
              src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
              alt=""
            />{" "}
            <Image
              src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
              alt=""
            />{" "}
          </Box1>
          <Box2>
            {/* <h2>We are Earth</h2> */}
            <Image
              src="https://images.unsplash.com/photo-1543353071-873f17a7a088?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
              alt="We are Earth"
            />
          </Box2>
        </Banner>
      </Parent>
    </div>
  );
};

export default Views;
