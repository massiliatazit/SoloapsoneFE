import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  justify-content: center;
  align-items: center;
`;
const LeftSide = styled.div`
  width: 70%;
  height: 100%;
  padding: 10px;
  border-right: 1px solid rgb(239, 239, 239);
  // display: flex;
  // justify-content: center;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  margin-right: 10px;
  margin-left: 10px;
  padding: 10px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;

  border-radius: 16px;
`;

const ModalImg = styled.img`
  width: 100%;
  height: 80%;
  padding: 5px;
  border-radius: 40px;
  background: #fff;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;
const RedBtn = styled.button`
  padding: 15px;
  border: none;
  width: 150px;
  color: white;
  background-color: #ed0000;
  border-radius: 30px;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;
const GreyBtn = styled.button`
  padding: 15px;
  border: none;
  min-width: 60px;
  max-height:53px;
background-color:"grey";
  margin-right: 10px;
  border-radius: 30px;
  font-weight: 700;
  display:flex;
  justify-content: center
  align-items: center
  &:hover {
    background-color: #ddd;
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

const mapStateToProps = (state) => state;
const Modal = (props) => {
  let history = useHistory();
  let { showModal, setShowModal, pinsReducers } = props;
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
        console.log("I pressed");
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            {pinsReducers.pin.images.length > 0 && (
              <ModalWrapper showModal={showModal}>
                <LeftSide>
                  <ModalImg src={pinsReducers.pin.images[0]} alt="pins" />
                  <div className="mt-4">
                    <img
                      src={props.user.img}
                      alt=""
                      srcSet=""
                      height="26px"
                      style={{
                        borderRadius: "50%",
                        objectFit: "cover",
                        marginLeft: 20,

                        marginRight: 20,
                      }}
                    />
                    <span>{props.user.username}</span>
                  </div>
                </LeftSide>
                <ModalContent>
                  <h1>{pinsReducers.pin.title}</h1>
                  <p>{pinsReducers.pin.description}</p>
                  <div className="d-flex" style={{ marginTop: 100 }}>
                    <GreyBtn
                      onClick={() =>
                        history.push(`/${props.user.username}/created`)
                      }
                    >
                      See created Pins
                    </GreyBtn>
                    <RedBtn>Sponsor</RedBtn>
                  </div>
                </ModalContent>
                <CloseModalButton
                  aria-label="Close modal"
                  onClick={() => setShowModal((prev) => !prev)}
                />
              </ModalWrapper>
            )}
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
export default connect(mapStateToProps)(Modal);
