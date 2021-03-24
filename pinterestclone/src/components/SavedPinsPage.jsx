import React, { useState, useEffect } from "react";
import unsplash from "../api/unsplash";
import { connect } from "react-redux";
import Card from "./Card";
import "../styles/index.css";
import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
const mapStateToProps = (state) => state;
function SavedPinsPage(props) {
  const [pins, setPins] = useState([]);

  const { username } = props.match.params;

  useEffect(() => {
    console.log(props.pins);
    setPins(props.pins);
  }, []);
  return (
    <>
      <Container className=" px-4 mb-5 d-flex  justify-content-center align-items-center">
        <CenteredContainer>
          {pins.length > 0 && (
            <div
              style={{
                overflow: "hidden",
                position: "absolute",
                top: "15%",
                left: "24%",
                borderRadius: 30,
                maxHeight: 369,
              }}
            >
              <div
                style={{
                  //position: "absolute",
                  transform: "rotate(-25deg) scale(1.5)",
                  marginLeft: "1rem",
                }}
              >
                {[0, 1, 2, 3].map((i) => (
                  <Row>
                    {pins
                      .slice(0, 4)
                      .sort(() => 0.5 - Math.random())
                      .map((pin) => (
                        <Col className="pr-1 mb-1">
                          <div
                            style={{
                              overflow: "hidden",
                              maxWidth: "170px",
                              maxHeight: "130px",
                            }}
                          >
                            <img
                              src={pin.urls.small}
                              className=" img-fluid "
                              style={{
                                objectFit: "cover",
                                maxWidth: "100%",
                                maxHeight: "100%",
                              }}
                              alt="signupPins"
                            />
                          </div>
                        </Col>
                      ))}
                  </Row>
                ))}
              </div>
            </div>
          )}
        </CenteredContainer>
      </Container>
      {/* {pins.length > 0 && (
        <div style={styles.pin_container}>
          <Card size="medium" />
          <Card size="medium" />
        </div>
      )} */}
    </>
  );
}

const styles = {
  pin_container: {
    margin: 0,
    padding: 0,
    width: "80vw",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 250px)",
    gridAutoRows: "10px",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    justifyContent: "center",
    backgroundColor: "white",
  },
};

export default connect(mapStateToProps)(SavedPinsPage);
const CenteredContainer = styled.div`
  max-width: 656px;
  box-sizing: border-box;
  backgound-color: blue;
  height: 100%;
  width: 100%;
`;
