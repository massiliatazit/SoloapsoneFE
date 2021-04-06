import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../../components/Headers/Header";
import { connect } from "react-redux";
import Pin from "../../components/Pin";
import { postFunction, getFunction } from "../../api/index";
import CreatePinCard from "../../components/CreatePinCard";
import "./home.css";
import Loaders from "../../components/Loaders/Loaders";
import { Row, Container } from "react-bootstrap";
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
    getUser();

    // setLogged(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <Header onSubmit={props.onSubmit} />
      <Wrapper>
        <Container fluid>
          <Row>
            {!loading ? (
              <>
                {" "}
                <CreatePinCard />
                {pins.length > 0 &&
                  pins.map((pin, index) => {
                    const { urls, id } = pin;

                    return <Pin key={index} urls={urls} pin={pin} id={id} />;
                  })}{" "}
              </>
            ) : (
              <Loaders />
            )}
          </Row>
        </Container>
      </Wrapper>
    </>
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
// const Container = styled.div`
//   margin: 0 auto;
//   height: 100%;
//   width: calc(100% - 20vw);

//   background-color: white;
// `;
