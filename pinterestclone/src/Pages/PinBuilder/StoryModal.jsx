import React, { useRef, useState, useEffect, useCallback } from "react";
import IconButton from "@material-ui/core/IconButton";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { useHistory } from "react-router-dom";
import { postFunction, putMediaFunction } from "../../api";
import { connect } from "react-redux";
import "antd/dist/antd.css";

import { Steps } from "antd";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
const Background = styled.div`
  width: 100%;
  height: 100%;
  background: #999999;
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
  width: 1300px;
  height: 700px;
  margin-right: 10px;
  margin-left: 10px;
  padding: 10px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;

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
  h3 {
    font-weight: bold;
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
const Section2 = styled.div`
  padding: 40px;
  width: 100%;
  height: 600px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  label {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  input {
    width: 0;
    height: 0;
    opacity: 0;
  }
`;

const UploadImageContainer = styled.div`
  padding: 10px;
  width: 100%;
  height: 100%;
  border-radius: 8px;

  background-color: #ffffff;
`;
const DotedBorder = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  border: 2px dashed #dadada;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const ModalPin = styled.div`
  width: 252px;
  height: 512px;
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  display: none;
`;
const IconContainer = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  background-color: #f0f0f0;
  cursor: pointer;
`;
const Iconsection2Container = styled(IconContainer)`
  background-color: #767676;
`;
const PinImage = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const Stepscreatestory = styled.div`
  width: 40%;
`;
const mapStateToProps = (state) => state;
function StoryModal(props) {
  let history = useHistory();
  const { Step } = Steps;

  let { showModal, setShowModal } = props;
  const [showLabel, setShowLabel] = useState(true);
  const [showModalPin, setShowModalPin] = useState(false);
  const [newPostImage, setNewPostImage] = useState();
  const modalRef = useRef();
  function showImagePin(e) {
    setNewPostImage(e.currentTarget.files[0]);
    setShowLabel(false);
    setShowModalPin(true);
  }

  //   const postImage = async (id) => {
  //     const formData = new FormData();
  //     formData.append("image", newPostImage);
  //     const postMedia = await putMediaFunction(
  //       "/pins/" + id + "/picture",
  //       formData
  //     );

  //     if (postMedia._id) {
  //       props.SetCreatedPins(postMedia);
  //       console.log(postMedia);
  //       // window.location.replace("/massylialala/created");
  //     }
  //   };
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
            <ModalWrapper showModal={showModal}>
              <ModalContent>
                <h3>Add up to 20 images or videos</h3>
                <Section2>
                  <label
                    htmlFor="upload_img"
                    id="upload_img_label"
                    style={{
                      display: showLabel ? "block" : "none",
                    }}
                  >
                    <UploadImageContainer>
                      <DotedBorder>
                        <Iconsection2Container>
                          <IconButton>
                            <ArrowUpwardIcon />
                          </IconButton>
                        </Iconsection2Container>
                        <div>Click to upload</div>
                        <div>
                          Recommendation: Use high-quality .jpg less than 20MB
                        </div>
                      </DotedBorder>
                    </UploadImageContainer>
                    <input
                      type="file"
                      name="upload_img"
                      id="upload_img"
                      maxFileSize={5242880}
                      singleImage={true}
                      withPreview={true}
                      withLabel={false}
                      accept="image/*"
                      onChange={(e) => {
                        showImagePin(e);
                      }}
                      imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                    ></input>
                  </label>
                  <ModalPin
                    style={{
                      display: showModalPin ? "block" : "none",
                    }}
                  >
                    <PinImage>
                      {newPostImage && (
                        <img
                          onLoad=""
                          src={URL.createObjectURL(newPostImage)}
                          alt="pin_image"
                          id="pin_image"
                        />
                      )}
                    </PinImage>
                  </ModalPin>
                </Section2>
                <Stepscreatestory>
                  <Steps size="small" current={0}>
                    <Step title="Load" />
                    <Step title="Design" />
                    <Step title="Details" />
                    <Step title="Audience" />
                  </Steps>
                </Stepscreatestory>
              </ModalContent>
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
}

export default StoryModal;
