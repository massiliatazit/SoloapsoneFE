import React from "react";
import styled from "styled-components";
import Pin from "./Pin";

import "./home.css";
function Home(props) {
  let { pins } = props;
  console.log(pins);
  return (
    <Wrapper>
      <Container className="home-container">
        {pins.map((pin, index) => {
          const { urls } = pin;
          return <Pin key={index} urls={urls} pins={pins} />;
        })}
      </Container>
    </Wrapper>
  );
}
export default Home;
const Wrapper = styled.div`
  background-color: white;
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 15px;
  justify-content: center;
`;
const Container = styled.div`
  margin: 0 auto;
  height: 100%;

  background-color: white;
`;
