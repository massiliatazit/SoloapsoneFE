import React from "react";
import styled from "styled-components";
function CreatePinCard() {
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
        <CreatePinButton>Create a pin</CreatePinButton>
      </CreatePin>
    </Wrapper>
  );
}

export default CreatePinCard;
const Wrapper = styled.div`
  display: block;
  padding: 8px;
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
    margin-bottom: 5px;
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
  margin-top: 10px;
`;
const SponsorButton = styled(HomeButtons)`
  background-color: #e60023;
  color: white;
`;
const CreatePinButton = styled(HomeButtons)`
  background-color: #efefef;
  color: black;
`;