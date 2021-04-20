import React, { useState } from "react";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";
import Header from "../../components/Headers/Header";
import StoryModal from "./StoryModal";

function StoryBuilder() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {" "}
      <Header />
      <Container>
        <div className="d-flex flex-column mt-5 align-items-center">
          <h1>Your Story pins drafts</h1>
          <p>
            Start over with a new Story Pin or continue working on a recent
            draft
          </p>
          <CreateStorybtn onClick={() => setShowModal(true)}>
            Create a new story
          </CreateStorybtn>
        </div>
      </Container>
      <StoryModal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}

export default StoryBuilder;
const CreateStorybtn = styled.button`
  padding: 15px;
  border: none;
  width: 200px;
  color: white;
  font-weight: 700;
  background-color: #ed0000;
  border-radius: 30px;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;
