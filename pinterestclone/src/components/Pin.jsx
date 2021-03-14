import React, { useState } from "react";
import styled from "styled-components";
import LaunchIcon from "@material-ui/icons/Launch";
import IconButton from "@material-ui/core/IconButton";
import ShareIcon from "@material-ui/icons/Share";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
function Pin(props) {
  const { urls } = props;
  const { pins } = props;

  return (
    <Wrapper>
      <Container>
        <img src={urls.regular} alt="pin" />
        <button className="btn mt-4">Save</button>

        <ModelFoot>
          <Destination>
            <IconButton>
              <LaunchIcon />
              <span>destination</span>
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
              }}
            />
          </IconButton>
        </ModelFoot>
      </Container>
    </Wrapper>
  );
}

export default Pin;
const Wrapper = styled.div`
  display: inline-flex;
  padding: 8px;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  width: 236px;
  position: relative;
  :before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0);
  }
  :hover::before {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 16px;
  }
  img {
    display: flex;
    width: 100%;
    cursor: zoom-in;
    border-radius: 16px;
    object-fit: cover;
    opacity: 1;
    transition-duration: 0.3s;
    display: block;
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
  }
  :hover button {
    opacity: 1;
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
  width: 132px;
  height: 32px;
  border-radius: 18px;

  display: flex;
  align-items: center;

  font-size: 16px;
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
