import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Header from "./Header";
import styled from "styled-components";
import PostPostModal from "./PostPostModal";
import { Row, Col, Container } from "react-bootstrap";
function PinBuilder() {
  const [pins, setPins] = useState([<PostPostModal />]);
  const addPin = () => {
    setPins([...pins, <PostPostModal />]);
    console.log(pins);
  };
  return (
    <>
      <Wrapper>
        <ButtonADD type="button" onClick={addPin}>
          <AddIcon />
        </ButtonADD>
        <div style={{ paddingLeft: "5em" }}>
          <Row>
            {pins.map((pin, index) => (
              <Col xs={12}>
                <PostPostModal key={index} />
              </Col>
            ))}
          </Row>
        </div>
      </Wrapper>
    </>
  );
}

export default PinBuilder;
const Wrapper = styled.div`
  padding: 8px;
  background-color: #efefef;
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
