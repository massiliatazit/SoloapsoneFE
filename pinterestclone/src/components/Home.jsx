import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Pin from "./Pin";
import CreatePinCard from "./CreatePinCard";
import "./home.css";
const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  setError: (error) => dispatch({ type: "SET_ERROR", payload: error }),
  showErrors: (boolean) =>
    dispatch({ type: "DISPLAY_ERRORS", payload: boolean }),
});
function Home(props) {
  let { pins } = props;
  console.log("home", pins);
  return (
    <Wrapper>
      <Container className="home-container">
        <CreatePinCard />
        {pins.map((pin, index) => {
          const { urls } = pin;
          return <Pin key={index} urls={urls} pins={pins} />;
        })}
      </Container>
    </Wrapper>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
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
