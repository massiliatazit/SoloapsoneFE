import React, { useRef, useState, useEffect, useCallback } from "react";
import IconButton from "@material-ui/core/IconButton";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { useHistory } from "react-router-dom";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import { postFunction, putMediaFunction } from "../../api";
import { connect } from "react-redux";
import "antd/dist/antd.css";
import { Menu, Dropdown, Button, message, Space, Tooltip } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { BlockPicker } from "react-color";
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import { Steps } from "antd";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";
import AddIcon from "@material-ui/icons/Add";
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
  overflow-y: auto;

  position: relative;
  z-index: 10;

  border-radius: 16px;
`;
const DesignButtons = styled.div`
  display: flex;
  height: 48px;
  min-width: 100px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  cursor: pointer;
  margin-bottom: 10px;
  margin-right: 10px;
  background-color: #fff;

  font-weight: 700;

  :hover {
    background-color: #e1e1e1;
    color: black;
  }
  :active {
    background-color: rgba(17, 17, 17);
    color: white;
  }
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
  padding: 10px;
  width: 100%;
  height: 666px;

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
  width: 320px;
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

  input:focus,
  textarea:focus,
  select:focus {
    outline: none;
  }
`;

const StoryDetails = styled.div`
  height: 500px;
  width: 375px;
`;
const AdjustpictureModal = styled.div`
  height: 200px;
  width: 272px;
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  display: none;
`;
const AdjustPicture = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const Addstoryimage = styled.div`
  height: 138px;
  width: 78px;
  display: flex;
  padding-left: 0;
  /* transform: scale(0.208);
  transform-origin: left top; */
  img {
    width: 100%;
    height: 100%;
    border-radius: 16px;
    // border: 2px solid rgb(255, 255, 255);
  }
`;
const Stepscreatestory = styled.div`
  position: absolute;
  right: 29%;
  width: 40%;
`;
const Colorselect = styled.div`
  border: none;
  border-radius: 16px 0px 0px 16px;
  display: flex;
  height: 40px;
  width: 120px;
  align-self: center;
  justify-self: center;
`;
const RedBtn = styled.button`
  padding: 15px;
  border: none;
  width: 88px;
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
const Section3 = styled.div`
  width: 100%;
  height: 50px;
  position: relative;
  display: flex;
  bottom: fixed;
`;
const Details = styled.div`
  max-width: "420px";
  input {
    width: 100%;
    opacity: 1;
    height: 48px;
    border: 1px solid #dbdbdb;
    padding: 8px;
    border-radius: 16px;
    margin-top: 6px;
  }
  label {
    font-weight: 400;
    font-size: 12px;
  }
`;

const mapStateToProps = (state) => state;

function StoryModal(props) {
  let history = useHistory();
  const { Step } = Steps;
  const [newPostImage, setNewPostImage] = useState();
  const [otherStory, setOtherStory] = useState();

  let { showModal, setShowModal } = props;
  const [showLabel, setShowLabel] = useState(true);
  const [showModalPin, setShowModalPin] = useState(false);
  const [addOtherStory, setaddOtherStory] = useState(false);
  const [backgroundcolor, setbackgroundcolor] = useState("#913c3c");
  const [showbgpicker, setbgpicker] = useState(false);

  const [imagewithtext, setimagewithtext] = useState(false);
  const [showPictureAdjust, setShowPictureAdjust] = useState(false);
  const [showLayout, setShowLayout] = useState(false);
  const [showDetails, setshowDetails] = useState(false);
  const [text, settext] = useState("");
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState("");
  const modalRef = useRef();
  const handleChangeComplete = (color) => {
    setbackgroundcolor(color.hex);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    settext(e.target.value);
  };
  const bgstyle = { background: backgroundcolor };
  let border;
  const selectimagewithtext = () => {
    setimagewithtext(true);
    imagewithtext
      ? (border = {
          border: "2px solid #000",
        })
      : (border = {
          border: "2px solid #efefef",
        });
    console.log(border);
  };
  function showImagePin(e) {
    const [file] = e.target.files;

    setImages((arr) => [...arr, file]);
    setShowLabel(false);
    setShowModalPin(true);
    setShowLayout(true);
  }
  function showother(e) {
    console.log("showother");
    setOtherStory(e.currentTarget.files[0]);
    setImages((arr) => [...arr, e.currentTarget.files[0]]);
    setShowLabel(false);
    setShowModalPin(true);
    console.log(images);
    setaddOtherStory(true);
  }
  const postImage = async (id) => {
    const formData = new FormData();
    formData.append("image", newPostImage);
    const postMedia = await putMediaFunction(
      "/stories/" + id + "/media",
      formData
    );

    if (postMedia._id) {
      // props.SetCreatedPins(postMedia);
      console.log(postMedia);
      // window.location.replace("/massylialala/created");
    }
  };
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
  const selector = () => setbgpicker(!showbgpicker);

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  const addStory = () => {
    const last = images[images.length - 1];
    setImages((arr) => [...arr, last]);
  };
  let currentstep = 0;
  if (showLabel == true) {
    currentstep = 0;
  } else currentstep = showModalPin ? 1 : 2;
  // if (currentstep == 2) setshowDetails(true);
  console.log("other console", currentstep);

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
                      onChange={showImagePin}
                      imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                    ></input>
                  </label>
                  {showModalPin ? (
                    <Container fluid>
                      <Row>
                        <Col md={3} className="px-3">
                          {" "}
                          <Row className="d-flex justify-content-between">
                            <span className="px-3">
                              page {images.length} of {images.length}{" "}
                            </span>
                            <div className="d-flex justify-content-around">
                              <AddToPhotosIcon
                                style={{
                                  cursor: "pointer",
                                }}
                                onClick={() => addStory()}
                              />{" "}
                              <DeleteRoundedIcon className="mx-3" />
                              <label htmlFor="upload_img" id="upload_img_label">
                                <input
                                  type="file"
                                  name="upload_img"
                                  id="upload_img"
                                  maxFileSize={5242880}
                                  singleImage={true}
                                  withPreview={true}
                                  withLabel={false}
                                  accept="image/*"
                                  onChange={showother}
                                  imgExtension={[
                                    ".jpg",
                                    ".gif",
                                    ".png",
                                    ".gif",
                                  ]}
                                ></input>
                                <AddIcon />
                              </label>
                            </div>
                          </Row>
                          <Row>
                            {/* <Col md={4} className=" mt-3 ">
                              {" "}
                              <Addstoryimage>
                                <img
                                  onLoad=""
                                  src={URL.createObjectURL(newPostImage)}
                                  alt="pin_image"
                                  id="pin_image"
                                />
                              </Addstoryimage>
                            </Col>
                            {addstory ? (
                              <Col md={4} className=" mt-3">
                                {" "}
                                <Addstoryimage>
                                  <img
                                    onLoad=""
                                    src={URL.createObjectURL(newPostImage)}
                                    alt="pin_image"
                                    id="pin_image"
                                  />
                                </Addstoryimage>
                              </Col>
                            ) : (
                              <div></div>
                            )} */}

                            {images.length > 0 ? (
                              <>
                                {images.map((image) => (
                                  <Col md={4} className=" mt-3">
                                    {" "}
                                    <Addstoryimage>
                                      <img
                                        onLoad=""
                                        src={URL.createObjectURL(image)}
                                        alt="story_image"
                                        id="story_image"
                                      />
                                    </Addstoryimage>
                                  </Col>
                                ))}
                              </>
                            ) : (
                              <div></div>
                            )}
                          </Row>
                        </Col>
                        <Col
                          md={6}
                          className="d-flex justify-content-center"
                          style={{ backgroundColor: "#efefef" }}
                        >
                          {images.length > 0 && imagewithtext ? (
                            <ModalPin
                              style={{
                                display: showModalPin ? "block" : "none",
                              }}
                            >
                              <PinImage
                                className="d-block"
                                style={{
                                  backgroundColor: "white",
                                  borderRadius: "16px",
                                  border: "2px solid #efefef",
                                }}
                              >
                                <img
                                  style={{
                                    height: "50%",
                                    position: "relative",
                                    width: "100%",
                                    zIndex: "100",
                                    borderBottomLeftRadius: "unset",
                                    borderBottomRightRadius: "unset",
                                  }}
                                  onClick={() => setimagewithtext(true)}
                                  onLoad=""
                                  src={URL.createObjectURL(
                                    images[images.length - 1]
                                  )}
                                  alt="pin_image"
                                  id="pin_image"
                                />
                                <div
                                  style={{
                                    backgroundColor: backgroundcolor,
                                    height: "50%",
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                  }}
                                >
                                  <div
                                    style={{
                                      color: "#efefef",

                                      fontSize: "36px",
                                    }}
                                  >
                                    <form onSubmit={handleSubmit}>
                                      <textarea
                                        placeholder="Add your text"
                                        style={{
                                          background: "transparent",
                                          outline: "none",
                                          width: "100%",
                                          outlineWidth: 0,
                                          textAlign: "center",
                                          border: "none",
                                        }}
                                        value={text}
                                        onChange={handleChange}
                                      />

                                      <input type="submit" value="Submit" />
                                    </form>
                                  </div>
                                </div>
                              </PinImage>
                            </ModalPin>
                          ) : (
                            <ModalPin
                              style={{
                                display: showModalPin ? "block" : "none",
                              }}
                            >
                              <PinImage>
                                {images.length > 0 && (
                                  <img
                                    onLoad=""
                                    src={URL.createObjectURL(
                                      images[images.length - 1]
                                    )}
                                    alt="pin_image"
                                    id="_image"
                                  />
                                )}
                              </PinImage>
                            </ModalPin>
                          )}
                        </Col>
                        <Col md={3}>
                          <div className="d-flex">
                            <DesignButtons
                              onClick={() => {
                                setShowLayout(true);
                                setShowPictureAdjust(false);
                              }}
                            >
                              {" "}
                              Layout
                            </DesignButtons>
                            <DesignButtons
                              onClick={() => {
                                setShowPictureAdjust(true);
                                setShowLayout(false);
                              }}
                            >
                              {" "}
                              picture
                            </DesignButtons>
                            <DesignButtons> text</DesignButtons>
                          </div>
                          {images.length > 0 && showLayout ? (
                            <>
                              <p
                                style={{
                                  color: "#211922",
                                }}
                              >
                                Choose a background to make your page stand out.
                                Add a background if you resize your image or
                                video.
                              </p>
                              <div>
                                <h6 style={{ fontWeight: "bold" }}>Layout</h6>
                              </div>
                              <div className="d-flex">
                                <Addstoryimage className="mr-3" style={border}>
                                  {images.length > 0 && (
                                    <img
                                      onLoad=""
                                      src={URL.createObjectURL(
                                        images[images.length - 1]
                                      )}
                                      alt="pin_image"
                                      id="_image"
                                    />
                                  )}
                                </Addstoryimage>
                                <Addstoryimage
                                  className="d-block"
                                  style={{
                                    backgroundColor: "white",
                                    borderRadius: "16px",
                                  }}
                                  style={border}
                                  onClick={() => selectimagewithtext()}
                                >
                                  {images.length > 0 && (
                                    <img
                                      onLoad=""
                                      src={URL.createObjectURL(
                                        images[images.length - 1]
                                      )}
                                      alt="pin_image"
                                      id="_image"
                                      style={{
                                        height: "50%",
                                        position: "relative",
                                        zIndex: "100",
                                        borderBottomLeftRadius: "unset",
                                        borderBottomRightRadius: "unset",
                                      }}
                                    />
                                  )}

                                  <div
                                    style={{
                                      backgroundColor: "white",
                                      height: "50%",
                                      width: "100%",
                                      display: "flex",
                                      flexDirection: "column",
                                      alignItems: "center",
                                      justifyContent: "center",
                                    }}
                                  >
                                    <div
                                      style={{
                                        width: "48px",
                                        height: "4px",
                                        backgroundColor: "#efefef",
                                        marginBottom: "5px",
                                      }}
                                    ></div>
                                    <div
                                      style={{
                                        width: "40px",
                                        height: "4px",
                                        backgroundColor: "#efefef",
                                      }}
                                    ></div>
                                  </div>
                                </Addstoryimage>
                              </div>
                              <div>
                                <h6
                                  style={{
                                    fontWeight: "bold",
                                    marginTop: "28px",
                                  }}
                                >
                                  Background
                                </h6>
                              </div>
                              {/* <Dropdown.Button
                            overlay={selector}
                            placement="bottomCenter"
                            icon={<DownOutlined />}
                          
                          >
                            {backgroundcolor}
                          </Dropdown.Button> */}
                              <Colorselect
                                className="my-3 ml-5 mr-0"
                                style={bgstyle}
                              >
                                <div width="60%" height="100%"></div>
                                <div
                                  style={{
                                    background: "#efefef",
                                    width: "40%",
                                    height: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: "inherit",
                                  }}
                                >
                                  <DownOutlined onClick={() => selector()} />
                                </div>
                              </Colorselect>
                              {showbgpicker && (
                                <BlockPicker
                                  color={backgroundcolor}
                                  onChangeComplete={handleChangeComplete}
                                />
                              )}
                            </>
                          ) : (
                            <di></di>
                          )}

                          {showPictureAdjust && (
                            <div>
                              <p>
                                Adjust your image to focus on the most
                                interesting part.
                              </p>
                              {/* <AdjustPicture
                                style={{
                                  display: showModalPin ? "block" : "none",
                                }}
                              >
                                <AdjustPicture>
                                  <img
                                    onLoad=""
                                    src={URL.createObjectURL(newPostImage)}
                                    alt="pin_image"
                                    id="_image"
                                  />
                                </AdjustPicture>
                              </AdjustPicture> */}
                            </div>
                          )}
                        </Col>
                      </Row>
                    </Container>
                  ) : (
                    showDetails && (
                      <Row>
                        {images.length > 0 && (
                          <Col md={6}>
                            {" "}
                            <StoryDetails
                              className="d-block"
                              style={{
                                backgroundColor: "white",
                                borderRadius: "16px",
                                border: "2px solid #efefef",
                              }}
                            >
                              <img
                                style={{
                                  height: "100%",

                                  width: "100%",

                                  borderRadius: "16px",
                                }}
                                onClick={() => setimagewithtext(true)}
                                onLoad=""
                                src={URL.createObjectURL(
                                  images[images.length - 1]
                                )}
                                alt="pin_image"
                                id="pin_image"
                              />
                            </StoryDetails>
                          </Col>
                        )}

                        <Col md={6}>
                          <p>
                            Tag topics related to your Story Pin to reach people
                            looking for ideas like yours.
                          </p>
                          {/* <div maxWidth="420px">
                            <label>
                              Story Pin Title Required
                              <input
                                style={{ border: "1px solid red" }}
                                minHeight="48px"
                                width="100%"
                                type="text"
                                placeholder="Add a title"
                                value={title}
                              ></input>
                            </label>
                          </div> */}
                          <Details>
                            <label>
                              Story Pin Title Required
                              {/* <InputGroup className="mb-3">
                              <InputGroup.Prepend></InputGroup.Prepend>
                              <FormControl
                                style={{
                                  border: "1px solid #E2E2E2",
                                  borderRadius: "10px",
                                  minHeight: "48px",
                                }}
                                aria-describedby="inputGroup-sizing-default"
                              />
                            </InputGroup> */}
                              <input
                                style={{ border: "1px solid red" }}
                                minHeight="48px"
                                width="100%"
                                type="text"
                                placeholder="Add a title"
                                value={title}
                              ></input>
                            </label>
                          </Details>
                        </Col>
                      </Row>
                    )
                  )}
                </Section2>{" "}
                <Section3>
                  <Stepscreatestory>
                    <Steps size="small" current={currentstep}>
                      <Step title="Load" />
                      <Step title="Design" />
                      <Step title="Details" />
                    </Steps>
                  </Stepscreatestory>

                  <div
                    style={{ position: "absolute", left: "90%", bottom: "30%" }}
                  >
                    {" "}
                    <RedBtn
                      onClick={() => {
                        currentstep++;
                        setShowModalPin(false);
                        setshowDetails(true);
                        console.log(currentstep);
                      }}
                    >
                      Next
                    </RedBtn>
                  </div>
                </Section3>
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
