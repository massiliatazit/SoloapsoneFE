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
  const uniqPins = [...new Set(pins)];

  useEffect(() => {
    console.log(props.pins);
    setPins(props.pins);
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
              style={{ width: "100%", textAlign: "center", marginTop: "205%" }}
            >
              <img
                src="https://i.imgur.com/D5wcicT.jpg"
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
              <h1 style={{ marginTop: "40px", color: "darkred" }}>
                Saved Pins
              </h1>
              {/* <div style={{width:"100%", marginTop:"100px", display:"flex", justifyContent:"space-evenly"}}> 
                    <div>
                        <div style={{width:"230px", height:"150px", border:"1px solid black", borderRadius:"20px"}}>LOVE</div>
                        <br/>
                        <div>All Pins</div>
                    </div>
                    {
                        curruser.saved_pins.map( pin => (
                            <div  key={pin.id} >
                                <div style={{width:"230px", height:"150px", border:"1px solid black", borderRadius:"20px"}}>LOVE</div><br/>
                                <div>{pin.title}</div>
                            </div>
                        ))
                    }
                </div> */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  flexWrap: "wrap",
                  flexDirection: "row",
                }}
              >
                {props.user.saved?.map((pin) => (
                  <ImageCard>
                    <Image src={pin.urls.regular} alt="pin" />
                    <h3 style={{ margin: "10px" }}>
                      Photo by {pins.user.username}
                    </h3>
                  </ImageCard>
                ))}
              </div>
            </div>
          </Col>
        </Row>
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
