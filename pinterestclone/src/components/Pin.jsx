import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import LaunchIcon from "@material-ui/icons/Launch";
import IconButton from "@material-ui/core/IconButton";
import ShareIcon from "@material-ui/icons/Share";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Col } from "react-bootstrap";
import { postFunction, getFunction } from "../api/index";
import { useHistory } from "react-router-dom";
import { pink } from "@material-ui/core/colors";
const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  SetSavedPins: (pin) => dispatch({ type: "PINS_SAVED_BY_USER", payload: pin }),
});

function Pin(props) {
  let history = useHistory();

  // const [user, SetUser] = useState();
  const [logged, setLogged] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pinsaved, setSaved] = useState(false);
  useEffect(() => {
    // setLogged(true);

    setLoading(false);
    return () => {
      console.log("clean up");
    };
  }, []);
  const savePin = async (pin) => {
    props.SetSavedPins(pin);
    setSaved(true);
  };
  const handlePinClick = (id) => {
    history.push(`/${id}`);
  };

  return (
    <Col xs={6} md={4} lg={2}>
      {" "}
      <Wrapper>
        {props.pin && (
          <Container>
            <div>
              <img
                src={props.urls.regular}
                alt="pin"
                onClick={() => handlePinClick(props.id)}
              />
            </div>
            {pinsaved ? (
              <button className="btn mt-4" onClick={() => savePin(props.pin)}>
                Saved
              </button>
            ) : (
              <button className="btn mt-4" onClick={() => savePin(props.pin)}>
                Save
              </button>
            )}

            <ModelFoot>
              <Destination className="ml-3 py-0">
                <IconButton>
                  <LaunchIcon />
                  {/* <span>destination</span> */}
                </IconButton>
              </Destination>
              <IconButton>
                <ShareIcon
                  style={{
                    backgroundColor: "#f0f0f0",
                    borderRadius: "50%",
                    padding: "4px",
                  }}
                />
              </IconButton>
              <IconButton>
                <MoreHorizIcon
                  style={{
                    backgroundColor: "#f0f0f0",
                    borderRadius: "50%",
                    padding: "4px",
                    marginRight: "22px",
                    padding: "0",
                  }}
                />
              </IconButton>
            </ModelFoot>
          </Container>
        )}
      </Wrapper>
    </Col>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Pin);
const Wrapper = styled.div`
  display: inline-flex;
  padding: 8px;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  // :before {
  //   content: "";
  //   position: absolute;
  //   width: 100%;
  //   height: 100%;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  //   background-color: rgba(0, 0, 0, 0);
  // }
  // :hover::before {
  //   // background-color: rgba(0, 0, 0, 0.2);
  //   border-radius: 16px;
  //   cursor: zoom-in;
  //   ovisibility: hidden;
  // }
  img {
    display: flex;
    width: 100%;
    height: 300px;
    border-radius: 16px;
    object-fit: cover;
    visibility: visible;
    transition-duration: 0.3s;
    display: block;
  }
  img:hover {
    cursor: zoom-in;
  }
  .btn {
    position: absolute;
    top: 0;
    right: 0;
    width: 53px;
    height: 35px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;

    color: white;
    background-color: #e60023;
    cursor: pointer;
    transform: translate(-30%, -30%);
    -ms-transform: translate(-50%, -50%);
    opacity: 0;
    visibility: hidden;
  }
  :hover button {
    opacity: 1;
    visibility: visible;
  }
`;
const ModelFoot = styled.div`
  width: 100%;
  height: 15%;
  position: absolute;
  bottom: 0;
  margin-bottom: 5%;
  left: 3%;
  opacity: 0;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  :hover {
    opacity: 1;
  }
`;
const Destination = styled.div`
  width: 110px;
  height: 30px;
  border-radius: 18px;
 
  display: flex;
  align-items: center;
 justify-content: center
  font-size: 14px;
  font-weight: 700;

  background-color: #f0f0f0;
  cursor: pointer;

  span {
    font-size: 16px;
    font-weight: 700;
    overflow: hidden;
    white-space: nowrap;
  }
`;
