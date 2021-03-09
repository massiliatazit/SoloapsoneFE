import React from "react";
import styled from "styled-components";

function Pin() {
  return (
    <Wrapper>
      <Container>
        <img
          src="https://i.pinimg.com/564x/20/4d/64/204d64cd0b7f5b465e50aaab4f50c81b.jpg"
          alt=""
        />
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
  img {
    display: flex;
    width: 100%;
    cursor: zoom-in;
    border-radius: 16px;
    object-fit: cover;
  }
`;
