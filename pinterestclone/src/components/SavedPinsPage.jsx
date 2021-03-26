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
  const [savedPins, setSavedPins] = useState([]);
  console.log(props.user.saved);

  const { username } = props.match.params;
  const uniqPins = [...new Set(pins)];

  useEffect(() => {
    console.log(props.pins);
    setPins(props.pins);
    setSavedPins(props.user.saved);
  }, []);
  return (
    <>
      <Container className=" px-4 mb-5 d-flex  flex-column justify-content-center align-items-center">
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
                    {uniqPins
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
                                backgroundPosition: "center",
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

        <Row>
          <Col>
            <div
              style={{ width: "100%", textAlign: "center", marginTop: "215%" }}
            >
              <img
                src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
                alt="photo"
                width="120px"
                height="120px"
                style={{ borderRadius: "60px" }}
              />
              <h3 style={{ fontWeight: "bold", marginTop: "10px" }}>
                {props.user.name}
              </h3>
              <div>{props.user.email}</div>
              <div>
                {props.user.following.length} following •{" "}
                {props.user.followers.length} followers
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <CreatePinsButton>
            <a href="/:username/created">Created</a>
          </CreatePinsButton>
          <SavePinsButton>
            <a href="/">Saved</a>
          </SavePinsButton>
        </Row>
        <Row>
          <Col>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                flexWrap: "wrap",
                flexDirection: "row",
              }}
            >
              {savedPins &&
                savedPins.map((pin) => (
                  <ImageCard>
                    <Image src={pin.urls.regular} alt="pin" />
                    <h3 style={{ margin: "10px" }}>
                      Photo by {pin.user.username}
                    </h3>
                  </ImageCard>
                ))}
            </div>
          </Col>
        </Row>
      </Container>
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
const styledButtons = styled.div`
  display: flex;
  height: 48px;
  min-width: 123px;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  cursor: pointer;
  margin-top: 20px;
`;
const CreatePinsButton = styled(styledButtons)`
  background-color: rgba(17, 17, 17);

  a {
    text-decoration: none;
    color: white;
    font-weight: 700;
  }
`;
const SavePinsButton = styled(styledButtons)`
  background-color: white;
  a {
    text-decoration: none;
    color: black;
    font-weight: 700;
  }

  :hover {
    background-color: #e1e1e1;
  }
`;
const CenteredContainer = styled.div`
  max-width: 656px;
  box-sizing: border-box;
  backgound-color: blue;
  height: 100%;
  width: 100%;
`;
const Wrapper = styled.div`
  box-sizing: border-box;
  max-width: 79%;
  height: 700px;
  display: flex;
  flex-flow: column wrap;
`;
const ImageCard = styled.div`
  width: 18%;
  margin: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
  background-size: cover;
  border-radius: 20px;
`;
