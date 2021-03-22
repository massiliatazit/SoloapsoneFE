import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
function CreatePinCard(props) {
  let history = useHistory();
  function handleClick() {
    history.push("/PinBuilder");
  }
  return (
    <Wrapper>
      <CreatePin>
        <img
          src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
          alt=""
        ></img>
        <h3>Username</h3>
        <p>
          {" "}
          <span>0</span> Monthly views
        </p>
        <SponsorButton>Sponsor</SponsorButton>
        <CreatePinButton type="button" onClick={handleClick}>
          Create a pin
        </CreatePinButton>
      </CreatePin>
    </Wrapper>
  );
}

export default CreatePinCard;
const Wrapper = styled.div`
  display: block;
  padding: 8px;
  background-clor: #efefef;
`;
const CreatePin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  width: 236px;

  height: 268px;

  img {
    width: 50%;
    cursor: zoom-in;
    border-radius: 50%;
    margin: 5px;
  }
  h3 {
    font-size: 16px;
    font-weight: 700;
    color: #333;
  }
  p {
    font-size: 14px;
    space-letter: 10px;
    margin-bottom: 0;
  }

  :hover {
    box-shadow: 0 0 15px rgba(33, 33, 33, 0.2);
    transition: box-shadow 0.3s ease-in-out;
  }
`;

const HomeButtons = styled.div`
  display: flex;
  height: 32px;
  min-width: 152px;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  cursor: pointer;
  overflow: hidden;
  font-weight: 700;
  margin-top: 10px;
`;
const SponsorButton = styled(HomeButtons)`
  background-color: #e60023;
  color: white;
  :hover {
    background-color: #a3182e;
  }
`;
const CreatePinButton = styled(HomeButtons)`
  background-color: #efefef;
  color: black;
  :hover {
    background-color: #c9c3c3;
  }
`;
