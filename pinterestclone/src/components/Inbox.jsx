import React, { useState, useEffect } from "react";
import styled from "styled-components";

import "antd/dist/antd.css";
import { Drawer } from "antd";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import io from "socket.io-client";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import { createRoomFetch, addUserToRoom, getFunction } from "../api/index";
import { joinRoom, sendChat, getRoomId, listenChat } from "../api/socket";
import FavoriteIcon from "@material-ui/icons/Favorite";
import TextsmsIcon from "@material-ui/icons/Textsms";
import IconButton from "@material-ui/core/IconButton";
import unsplash from "../api/unsplash";
const mapStateToProps = (state) => state;
/**
 * 
 * ---make yourself online update your socketId  (when yo are online (logged in ))
 * ---------
 *  downgrade fe socket to 2.3.0
 *  when someone logged in  emit event  called SET_ONLINE
 * 
 *    and send this data {_id:"ajslkdjaslkdjaskllsakdjasl"}
 *    this will update your socketId and make you joined all the conversations that you are onlineParticipants
 *  
 * 
 * ------ create new chat or join to room----- ( when you click on chat)
 * when you want to chat with someone
 *    if you have chat history before (it means you have roomId) if you click on the chat
 *      emit event JOIN_ROOM {roomId}
 *    else
 *       emit event JOIN_ROOM {participants:["asdas"],userId}
 *    
      ----- chat -------------------------------- (you wrote message and press enter)

   emit this event -< CHAT_MESSAGE
   send  this ->  
        data= {
            sender,
           text,
           roomId,
          attachment,
        }

} props 
 * @returns 
 */
const Inbox = (props) => {
  const dispatch = useDispatch();
  const [roomName, setRoomName] = useState("");
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");

  const [text, setText] = useState("");
  const [users, setUsers] = useState("");
  const [input, setInput] = useState("");
  const [userjoin, setUserjoin] = useState(false);
  const [showSend, setShowSend] = useState(false);
  const [attachment, setAttachment] = useState("");
  const showDrawer = () => {
    setVisible(true);
  };
  // client = 2.3.0 backend = 2.3.0
  const onClose = () => {
    setVisible(false);
  };
  const setRoom = (RoomId) => {
    dispatch({ type: "SET_ROOM", payload: RoomId });
  };
  const receiveMessage = (message) => {
    dispatch({ type: "ADD_MESSAGE_TO_CHAT", payload: message });
  };

  const sendMessage = () => {
    const message = {
      sender: props.user.username,
      text: text,
      roomId: props.chat.roomId,
      // attachment: ,

      createdAt: new Date(),
    };

    sendChat({ ...message });
    setText(" ");
  };
  // const getUsersOnSearch = (input) => {
  //   return unsplash.get("https://api.unsplash.com/search/users", {
  //     params: { query: input },
  //   });
  // };

  const getUsersOnSearch = async (input) => {
    const response = await getFunction("/users");
    const filteredArray = response.filter((filtereduser) => {
      return filtereduser.username.includes(input);
    });
    return filteredArray;
  };
  const onSearchSubmit = async (e) => {
    e.preventDefault();
    const results = await getUsersOnSearch(input);
    console.log(results);
    setUsers(results);
  };
  useEffect(() => {
    getRoomId(setRoom);
    listenChat(receiveMessage);
  }, []);
  return (
    <>
      <div onClick={showDrawer}>
        <TextsmsIcon />
      </div>
      <Drawer
        title="Inbox"
        style={{ textAlign: "center", overflow: "hidden" }}
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        width={380}
      >
        <h5 style={{ fontWeight: "bold" }}>Share Ideas With Your Friends</h5>
        {!userjoin && (
          <InboxWrapper>
            <>
              {" "}
              <SearchIconWrapper>
                <SearchIcon
                  src="https://www.flaticon.com/svg/static/icons/svg/598/598494.svg"
                  alt="Icon"
                />
              </SearchIconWrapper>
              <form
                style={{
                  backgroundColor: "#efefef",
                  borderRadius: "0px 25px 25px 0px",
                  width: "100%",
                }}
              >
                <Search
                  type="text"
                  placeholder="Search by name or email"
                  onChange={(e) => setInput(e.target.value)}
                />
                <button
                  className="d-none"
                  type="submit"
                  onClick={(e) => onSearchSubmit(e)}
                ></button>
              </form>
            </>
          </InboxWrapper>
        )}
        {users.length > 0 &&
          !userjoin &&
          users
            .filter((user) => user.username.startsWith(input))
            .map((user) => {
              return (
                <PersonWrap>
                  <Person>
                    {user.img && (
                      <img
                        src={user.img}
                        alt=""
                        style={{ height: "40px", borderRadius: "25px" }}
                        onClick={() => {
                          joinRoom({
                            userId: props.user._id,
                            participants: [user._id],
                          });
                          setUserjoin(true);
                        }}
                      />
                    )}
                  </Person>

                  <div>
                    <p className="mb-0">{user.name}</p>
                    <span>{user.username}</span>
                  </div>
                </PersonWrap>
              );
            })}
        {!input &&
          users.length === 0 &&
          props.user.following.map((user) => (
            <>
              {console.log("here user", user)}
              <p>Suggestions</p>
              <PersonWrap>
                <Person>
                  <img
                    src={user.profile_image.medium}
                    alt=""
                    style={{ height: "40px", borderRadius: "25px" }}
                  />
                </Person>

                <div className="text-align-left">
                  <p className="mb-0">{user.username}</p>
                  <span>following</span>
                </div>
              </PersonWrap>
            </>
          ))}
        {userjoin &&
          props.chat.chatHistory.map((msg, i) => (
            <div
              className={
                msg.sender === props.user.username ? "text-right" : "text-left"
              }
              key={i}
            >
              <div style={{ fontWeight: 400, fontSize: 11, color: "#767676" }}>
                {msg.sender}
              </div>
              <div>{msg.text}</div>{" "}
            </div>
          ))}
        <MessageContainer>
          <Icon
            src="https://www.flaticon.com/svg/vstatic/svg/889/889668.svg?token=exp=1617026404~hmac=4eecd80899885377e7f4b19eed96ccd3"
            alt="Inbox"
          />

          <form>
            <input
              type="text"
              value={text}
              placeholder="Send a Message..."
              onChange={(e) => setText(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  {
                    sendMessage();
                  }
                }
              }}
            />
          </form>
          {input && (
            <IconButton style={{ backgroundColor: "#e60023", marginLeft: 6 }}>
              <SendOutlinedIcon
                style={{ fill: "white" }}
                onClick={() => sendMessage()}
              />
            </IconButton>
          )}
          <IconButton style={{ padding: 0 }}>
            <FavoriteIcon
              fontSize="large"
              onClick={() => {
                console.log(
                  setText(
                    <svg
                      class="gUZ lZJ U9O kVc"
                      height="48"
                      width="48"
                      viewBox="0 0 24 24"
                      aria-label="cœur"
                      role="img"
                    >
                      <path d="M22.178 13.583l-9.131 8.992a1.502 1.502 0 0 1-2.094 0l-9.131-8.992a6.192 6.192 0 0 1 0-8.773c2.439-2.413 6.395-2.413 8.834 0L12 6.154l1.344-1.344c2.439-2.413 6.395-2.413 8.834 0a6.192 6.192 0 0 1 0 8.773"></path>
                    </svg>
                  )
                );
                sendMessage();
              }}
            />
          </IconButton>
        </MessageContainer>
      </Drawer>
    </>
  );
};
export default connect(mapStateToProps)(Inbox);
const Icon = styled.img`
  padding: 12px;
  height: 48px;
  opacity: 0.6;
  margin-left: 0px;
  border-radius: 50%;
  color: #767676;
  fill: currentColor;

  &:hover {
    background-color: #eee;
    cursor: pointer;
  }
`;
const InboxWrapper = styled.div`
  padding: 8px;
  font-weight: 500;

  font-size: 16px;
  display: flex;
  align-items: center;
  background-color: white;
  & a {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    text-decoration: none;
    color: black;
  }
  & a:hover {
    background-color: #eee;
    border-radius: 35px;
  }
  & * {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    font-weight: 600;
  }
`;
const MessageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: absolute;
  padding: 8px;
  background-color: white;
  bottom: 0;
  input {
    border-radius: 26px;
    border: 1px solid grey;
    min-width: 70%;
    height: 48px;
    padding: 15px;

    :focus {
      outline: none;
    }
    ::placeholder {
      color: black;
      font-size: 14px;
      padding: 15px;
    }
  }
`;
const Search = styled.input`
  padding: 7px 10px 7px 5px;
  border: none;
  border-radius: 0px 25px 25px 0px;
  border: 4px solid #eee;
  background-color: #eee;
  width: 90%;
  &::placeholder {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    font-size: 16px;
  }
  &:focus {
    outline: none;
  }
`;
const SearchIcon = styled.img`
  height: 15px;
  background-color: #eee;
  opacity: 1;
`;
const SearchIconWrapper = styled.div`
  padding: 10px 0px 10px 15px;
  border: 1px solid #eee;
  background-color: #eee;
  border-radius: 25px 0px 0px 25px;
`;
const PersonWrap = styled.div`
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 20px;
  display: flex;
  p {
    font-weight: 600;
  }
  span {
    color: #767676;
    font-weight: 400;
    font-size: 12;
  }
`;
const Person = styled.div`
  width: 50px;
  height: 40px;
  border-radius: 25px;
`;
