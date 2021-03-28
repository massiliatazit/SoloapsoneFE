import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Loaders from "./Loaders/Loaders";
import { postFunction, getFunction } from "../api";
import unsplash from "../api/unsplash";
import { connect } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import PublishTwoToneIcon from "@material-ui/icons/PublishTwoTone";
import { Container, Row, Col } from "react-bootstrap";
const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  SetSavedPins: (pin) => dispatch({ type: "PINS_SAVED_BY_USER", payload: pin }),
});
function ViewPin(props) {
  const [loading, Setloading] = useState(false);
  const [pinsaved, setSaved] = useState(false);
  const [pins, setPins] = useState([]);
  const [ShowComments, SetShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [commentInput, setCommentInput] = useState("");

  const { id } = props.match.params;
  const getPinsById = async () => {
    console.log("hello");
    unsplash.get(`https://api.unsplash.com/photos/${id}`, {}).then((res) => {
      let results = res.data;
      console.log(results);
      setPins(results);
    });
  };

  useEffect(() => {
    getPinsById();
  }, []);
  const savePin = async (pin) => {
    props.SetSavedPins(pin);
    setSaved(true);
  };
  const SeeComments = () => {
    SetShowComments(!ShowComments);
  };
  const postComment = async (text) => {
    const response = await postFunction("comments/" + pins.id, { text: text });
    if (response) {
      getComments();
    }
  };
  const getComments = async () => {
    const response = await getFunction("comments/" + pins.id);
    if (response && response.length > 0) {
      setComments(response);
    }
  };
  const postCommentHandler = () => {
    setCommentInput("");
    postComment(commentInput);
  };
  return (
    <>
      {" "}
      {pins.length === 0 ? (
        <Loaders />
      ) : (
        <Container
          fluid
          className="flex-column justify-content-center align-items-center"
        >
          <Row>
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "white",
                padding: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "800px",
                  margin: "auto",
                  boxShadow: "0px 2px 6px #bbb",
                  justifyContent: "space-evenly",
                  alignItems: "center",

                  maxHeight: "max-content",
                  border: "none",
                  borderRadius: "24px",
                  backgroundColor: "#fff",
                  overflow: "hidden",
                  padding: 20,
                }}
              >
                <div style={{ padding: 20 }}>
                  <img
                    src={pins.urls.regular}
                    className="img-fluid "
                    style={{
                      borderRadius: 32,
                      minHeight: 400,
                      objectFit: "cover",
                    }}
                    alt=""
                    srcSet=""
                    width="100%"
                  />
                </div>
                <Details>
                  <div className="d-flex justify-content-between ">
                    <div>
                      <IconButton>
                        <MoreHorizIcon></MoreHorizIcon>
                      </IconButton>
                      <IconButton>
                        <PublishTwoToneIcon></PublishTwoToneIcon>
                      </IconButton>
                    </div>
                    <RedBtn onClick={() => savePin(pins)}>Save</RedBtn>
                  </div>
                  <div>
                    <h2 style={{ fontWeight: 700, whiteSpace: "nowrap" }}>
                      Photo by: {pins.user.username}
                    </h2>
                    <a
                      href={pins.links.self}
                      style={{
                        maxWidth: "300px",
                        color: "#000",
                        fontWeight: 400,
                        textDecoration: "underline",
                      }}
                    >
                      {pins.links.self}
                    </a>
                    <div className="d-flex justify-content-between ">
                      <h6 className="mt-4" style={{ fontWeight: 600 }}>
                        {pins.description}
                      </h6>
                      <GreyBtn className="mt-2">Follow</GreyBtn>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex">
                      <div
                        style={{
                          maxHeight: "48px",
                          maxWidth: "48px",

                          verticalAlign: "middle",
                        }}
                      >
                        <div className="d-flex flex-column">
                          <img
                            src={pins.user.profile_image.medium}
                            alt=""
                            srcSet=""
                            height="100%"
                            style={{ borderRadius: "50%", objectFit: "cover" }}
                          />
                          <Likes className="my-3 ml-3">
                            <span className="ml-4 ">{pins.likes}</span>
                          </Likes>
                        </div>
                      </div>
                      <p className="mt-3 ml-4">{pins.user.first_name}</p>
                    </div>
                  </div>
                  <div>
                    {!ShowComments ? (
                      <>
                        {" "}
                        <button
                          onClick={() => {
                            SeeComments();
                          }}
                          className="active"
                          style={{
                            width: "100px",
                            backgroundColor: "white",
                            border: "none",
                            borderBottom: "2px solid",
                          }}
                        >
                          Photos
                        </button>
                        <button
                          onClick={() => {
                            SeeComments();
                          }}
                          style={{
                            width: "100px",
                            backgroundColor: "white",
                            border: "none",
                            marginLeft: "20px",
                            color: "grey",
                            borderBottom: "none",
                          }}
                        >
                          Comments
                        </button>
                        <div className="d-flex " style={{ margin: "20px" }}>
                          <div>
                            Tried this Pin?
                            <br />
                            Add a photo to show how it went
                          </div>
                          <GreyBtn>Add Photo</GreyBtn>
                        </div>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => {
                            SeeComments();
                          }}
                          style={{
                            width: "100px",
                            backgroundColor: "white",
                            border: "none",
                            color: "grey",
                          }}
                        >
                          Photos
                        </button>
                        <button
                          onClick={() => {
                            SeeComments();
                          }}
                          style={{
                            width: "100px",
                            backgroundColor: "white",
                            border: "none",
                            marginLeft: "20px",
                            color: "black",
                            borderBottom: "2px solid",
                          }}
                        >
                          Comments
                        </button>
                        <PopupPostNewComment>
                          <div className="left">
                            <img
                              src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
                              alt=""
                              srcSet=""
                              height="48"
                              style={{
                                borderRadius: "50%",
                                objectFit: "cover",
                                marginRight: 8,
                              }}
                            />

                            <input
                              type="text"
                              placeholder="Add a comment..."
                              value={commentInput}
                              onChange={(event) =>
                                setCommentInput(event.target.value)
                              }
                            />
                          </div>

                          <div>
                            {" "}
                            <button
                              ClassName="m-5 right"
                              // disabled={commentInput.length === 0}
                              onClick={postCommentHandler}
                            >
                              Post
                            </button>
                          </div>
                          {/* <button
                            // disabled={commentInput.length === 0}
                            onClick={postCommentHandler}
                          >
                            Cancel
                          </button> */}
                        </PopupPostNewComment>
                      </>
                    )}
                  </div>
                </Details>
              </div>
            </div>
          </Row>
          <Row>
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
                            <h6 style={{ margin: "10px" }}>
                              {pinrelated.title}
                            </h6>
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
          </Row>
        </Container>
      )}
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewPin);
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

const GreyBtn = styled.button`
  padding: 15px;
  border: none;
  min-width: 60px;
  max-height:53px
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
const Details = styled.div`
  padding: 20px;
  & > div {
    margin-bottom: 30px;
  }
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
  align-items: center;
  flex-direction:column;
  justify-content: space-between;
   border-top: 1px solid grey;
  padding: 12px 10px;
  .left {
    display: flex;
    align-items: center;
   input{
     flex: 1;
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
  button {
    margin-top:14px;
    margin-left:50;
   border-radius: 30px;
    background-color: #efefef;
    border: none;
    font-size: 14px;
    font-weight: 600;
    color: black;
    min-height: 40px;
    min-width: 60px;
`;
