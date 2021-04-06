import React, { useState, useEffect } from "react";

import { connect } from "react-redux";

import "../styles/index.css";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import Board from "../Pages/Board";
const mapStateToProps = (state) => state;
function SavedPins(props) {
  const [savedPins, setSavedPins] = useState([]);
  console.log(props.user.saved);

  useEffect(() => {
    setSavedPins(props.user.saved);
  }, []);
  return (
    <>
      <Board pins={props.pins} />
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
    </>
  );
}

export default connect(mapStateToProps)(SavedPins);
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
