import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import styled from "styled-components";
import PostPostModal from "./PostPostModal";
function PinBuilder() {
  const [pins, setPins] = useState([<PostPostModal />]);
  const addPin = () => {
    setPins([...pins, <PostPostModal />]);
    console.log(pins);
  };
  return (
    <Wrapper>
      <ButtonADD type="button" onClick={addPin}>
        <AddIcon />
      </ButtonADD>

      {pins.map((pin, index) => (
        <PostPostModal key={index} />
      ))}
    </Wrapper>
  );
}

export default PinBuilder;
const Wrapper = styled.div`
  display: inline-flex;
  padding: 8px;
`;
const ButtonADD = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
  width: 40px;
  height: 60px;
  cursor: pointer;
  background-color: white;
  position: fixed;
  top: 50px;
  left: 1%;
  z-index: 99999;
`;
