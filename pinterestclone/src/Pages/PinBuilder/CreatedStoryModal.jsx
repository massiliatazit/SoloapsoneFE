import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { postFunction, getFunction } from "../../api";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import PublishTwoToneIcon from "@material-ui/icons/PublishTwoTone";
import { Container, Row, Col } from "react-bootstrap";
import Loaders from "../../components/Loaders/Loaders";
import IconButton from "@material-ui/core/IconButton";
import styled from "styled-components";
import { Menu, Dropdown } from "antd";
import "./story.css";
import { DownOutlined } from "@ant-design/icons";
import { divide } from "lodash";
import Header from "../../components/Headers/Header";
const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  setError: (error) => dispatch({ type: "SET_ERROR", payload: error }),
  showErrors: (boolean) =>
    dispatch({ type: "DISPLAY_ERRORS", payload: boolean }),
  SetcreatedStory: (story) =>
    dispatch({ type: "RECEIVE_STORY_WITH_CREATE", story: story }),
});
function CreatedStoryModal(props) {
  const [loading, Setloading] = useState(false);
  const [createdStory, setcreatedStory] = useState([]);
  const [user, setuser] = useState({});
  const [story, setstory] = useState([]);
  const [storyPaused, setStoryPaused] = useState(false);
  const [storyIndex, setStoryIndex] = useState(0);
  const storyIndexRef = useRef(0);

  const { storyId } = props.match.params;
  const getStorybyId = async () => {
    const response = await getFunction(`/stories/${storyId}`);
    console.log(response);
    if (response) {
      setcreatedStory(response);
      console.log(response);
      props.SetcreatedStory(response);
      //   response.links && setNext(response.links.next);
    }
  };
  const getme = async () => {
    const response = await getFunction("/users/me");
    console.log(response);
    if (response) {
      setuser(response);
      console.log(response);

      //   response.links && setNext(response.links.next);
    }
  };
  useEffect(() => {
    getStorybyId();
    getme();
  }, []);
  //   const menu = (
  //     <Menu>
  //       {createdStory.categories.length > 0 &&
  //         createdStory.categories.map((category, index) => (
  //           <Menu.Item key={index}>
  //             <a
  //               target="_blank"
  //               rel="noopener noreferrer"
  //               href="https://www.antgroup.com"
  //             >
  //               {category}
  //             </a>
  //           </Menu.Item>
  //         ))}
  //     </Menu>
  //   );
  useEffect(() => {
    storyIndexRef.current = storyIndex;
  }, [storyIndex]);
  function getProgressBarClassName(index) {
    if (index < storyIndex) {
      return "progress-bar progress-bar-finished";
    } else if (index === storyIndex) {
      return storyPaused
        ? "progress-bar progress-bar-active progress-bar-paused"
        : "progress-bar progress-bar-active";
    } else {
      return "progress-bar";
    }
  }
  return (
    <>
      <Header />
      <Container
        fluid
        className="flex-column justify-content-center align-items-center"
      >
        {createdStory.length == 0 ? (
          <Loaders />
        ) : (
          createdStory.images.length > 0 && (
            <Row>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "white",
                  padding: "30px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width: "1300px",
                    margin: "auto",
                    boxShadow: "0px 2px 6px #bbb",
                    justifyContent: "space-evenly",

                    maxHeight: "max-content",
                    border: "none",
                    borderRadius: "24px",
                    backgroundColor: "#fff",
                    overflow: "hidden",
                    padding: 20,
                  }}
                >
                  <Col md={8}>
                    <div
                      height="100%"
                      width="100%"
                      className="d-flex  justify-content-center"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.03)",
                        padding: 10,
                      }}
                    >
                      <div
                        style={{ padding: 20 }}
                        className="d-flex  flex-column justify-content-center"
                        style={{ width: "370px" }}
                      >
                        <div className="progress-bars">
                          {/* {createdStory.images.map((story, index) => (
                            <div className="progress-bar-container">
                              <div
                                style={{
                                  animationDuration: `${createdStory.duration}s`,
                                }}
                                className={getProgressBarClassName(index)}
                              ></div>
                            </div>
                          ))} */}

                          <div className="progress-bar-container">
                            <div
                              style={{
                                animationDuration: `${createdStory.duration}s`,
                              }}
                              className={getProgressBarClassName(0)}
                            ></div>
                          </div>
                        </div>
                        <img
                          src={createdStory.images[0]}
                          className="img-fluid "
                          style={{
                            borderRadius: 32,
                            minHeight: 300,
                            objectFit: "cover",
                          }}
                          alt=""
                          srcSet=""
                          width="100%"
                        />
                      </div>
                    </div>
                  </Col>
                  <Col md={4}>
                    {" "}
                    <Details>
                      <Row>
                        {" "}
                        <div className="d-flex justify-content-between">
                          <div style={{ position: "relative" }}>
                            <IconButton>
                              <MoreHorizIcon></MoreHorizIcon>
                            </IconButton>
                            <IconButton>
                              <PublishTwoToneIcon></PublishTwoToneIcon>
                            </IconButton>
                            <IconButton>
                              <LikeDiv></LikeDiv>
                            </IconButton>
                          </div>

                          <RedBtn>Save</RedBtn>
                        </div>
                      </Row>
                      <Row className="d-flex flex-column align-items-center mt-4 ml-4 justify-content-center">
                        {" "}
                        <h2>{createdStory.title}</h2>
                        {createdStory.description.length > 0 && (
                          <p
                            className=""
                            style={{
                              fontWeight: 600,
                              textOverflow: "ellipsis",
                            }}
                          >
                            {createdStory.description}
                          </p>
                        )}
                      </Row>
                      <Row></Row>

                      <div className="d-flex mt-5">
                        <div
                          style={{
                            maxHeight: "48px",
                            maxWidth: "48px",

                            verticalAlign: "middle",
                          }}
                        >
                          <div className="d-flex flex-column align-items-center">
                            <img
                              src={user.img}
                              alt=""
                              srcSet=""
                              height="40px"
                              style={{
                                borderRadius: "50%",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                        </div>
                        <p className="mt-3 ml-4">{user.username}</p>
                      </div>

                      {/* <div>
                      {createdStory.categories.length > 0 && (
                        <Dropdown overlay={menu}>
                          <a
                            style={{ decoration: "none" }}
                            className="ant-dropdown-link"
                            onClick={(e) => e.preventDefault()}
                          >
                            {createdStory.categories[0]} <DownOutlined />
                          </a>
                        </Dropdown>
                      )}
                    </div> */}
                      <div className="d-flex " style={{ marginTop: "100px" }}>
                        <div style={{ marginRight: "20px" }}>
                          Tried this Pin?
                          <br />
                          Add a photo to show how it went
                        </div>
                        <GreyBtn>Add Photo</GreyBtn>
                      </div>
                    </Details>
                  </Col>
                </div>
              </div>
            </Row>
          )
        )}
        {/* <Row>
        <Col>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              flexDirection: "column",
            }}
          >
            <div>
              {" "}
              <h6
                style={{
                  textAlign: "center",
                  fontSize: 21,
                  fontWeight: 700,
                  marginTop: 40,
                }}
              >
                More similar content
              </h6>
            </div>
            <div className="d-flex justify-content-center mt-1">
              {pins.related_collections.results.length > 0 &&
                pins.related_collections.results.map((pinrelated) => (
                  <>
                    <ImagerelatedPins>
                      <Image
                        src={pinrelated.cover_photo.urls.regular}
                        alt="pin"
                      />
                      <div className="d-flex flex-column justify-content-start">
                        <h6 style={{ margin: "10px" }}>{pinrelated.title}</h6>
                        <div>
                          <img
                            src={pinrelated.user.profile_image.small}
                            alt=""
                            srcSet=""
                            height="100%"
                            style={{
                              borderRadius: "50%",
                              objectFit: "cover",
                              marginRight: 15,
                            }}
                          />
                          <span>{pinrelated.user.username}</span>
                        </div>
                      </div>
                    </ImagerelatedPins>
                  </>
                ))}
            </div>
          </div>
        </Col>
      </Row> */}
      </Container>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatedStoryModal);
const ImagerelatedPins = styled.div`
  width: 18%;
  margin: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
  background-size: cover;
  border-radius: 20px;
`;
const LikeDiv = styled.div`
  height: 24px;
  width: 24px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(https://s.pinimg.com/webapp/heartOutline-1f1b1ac2.svg);
`;
const GreyBtn = styled.button`
  padding: 15px;
  border: none;
  min-width: 60px;
  max-height: 53px;

  margin-right: 10px;
  border-radius: 30px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #ddd;
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;
const RedBtn = styled.button`
  padding: 15px;
  border: none;
  width: 100px;
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
const Details = styled.div`
  padding: 20px;
  height: 100%;
  width: 100%;

  /* & > div {
    margin-bottom: 30px;
  } */
`;
const Likes = styled.div`
  background-image: url(https://s.pinimg.com/webapp/love-c31e0b8d.svg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 19px;
  width: 19px;
`;
const PopupPostNewComment = styled.div`
  display: flex;
  margin-top: 25px;
  // align-items: center;
  // flex-direction:column;
  // justify-content: space-between;

  padding: 12px 10px;
  .left {
    display: flex;
    align-items: center;
   input{
    //  flex: 1;
     border-radius:26px;
     border:1px solid grey;
     width: 100%;
     height:48px;
  :focus {
    outline: none;
  }
      ::placeholder {
        color: black;
        font-size: 14px;
        padding:10px
      }
    }
    }
  }
  .right {
    button {
      text-align: right;
      :disabled {
        opacity: 0.4;
      }
    }
  }
  .post {
    margin-top:8px;
    margin-left:20%;
   border-radius: 30px;
    background-color: #efefef;
    border: none;
    font-size: 14px;
    font-weight: 600;
    color: black;
    min-height: 40px;
    min-width: 60px;
`;
const CommentsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
