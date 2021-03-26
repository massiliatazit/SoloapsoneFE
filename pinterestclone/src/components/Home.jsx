import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Pin from "./Pin";
import { postFunction, getFunction } from "../api/index";
import CreatePinCard from "./CreatePinCard";
import "./home.css";
const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  setError: (error) => dispatch({ type: "SET_ERROR", payload: error }),
  showErrors: (boolean) =>
    dispatch({ type: "DISPLAY_ERRORS", payload: boolean }),

  Setuser: (user) => dispatch({ type: "SET_USER", payload: user }),
});
function Home(props) {
  let { pins } = props;
  const [loading, setLoading] = useState(true);
  const [loggedIn, setloggedIn] = useState(true);
  const getUser = async (username) => {
    console.log("here");
    const response = await getFunction("/users");

    if (response) {
      props.Setuser(response);
    } else {
    }
    setLoading(false);
  };
  useEffect(() => {
    console.log("ented useEffect");
    getUser();

    // setLogged(true);
    setLoading(false);
    return () => {
      console.log("clean up");
    };
  }, []);

  return (
    <Wrapper>
      {pins.length > 0 && (
        <Container className="home-container">
          <CreatePinCard />
          {pins.map((pin, index) => {
            const { urls, id } = pin;

            return <Pin key={index} urls={urls} pin={pin} id={id} />;
          })}
        </Container>
      )}
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
  width: calc(100% - 20vw);

  background-color: white;
`;
