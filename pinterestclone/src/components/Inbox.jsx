import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "antd/dist/antd.css";
import { Drawer } from "antd";
import { useDispatch } from "react-redux";
import io from "socket.io-client";
import { joinRoom, sendChat, addUserSocketToRoom } from "../api/socket";
import FavoriteIcon from "@material-ui/icons/Favorite";
import TextsmsIcon from "@material-ui/icons/Textsms";
import IconButton from "@material-ui/core/IconButton";
import unsplash from "../api/unsplash";

const Inbox = (props) => {
  const dispatch = useDispatch();
  const [roomName, setRoomName] = useState("");
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");

  const [text, setText] = useState("");
  const [users, setUsers] = useState("");
  const [input, setInput] = useState("");
  const [showSend, setShowSend] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.target.value.length > 0) {
      //SEND MESSAGE
      dispatch({ type: "ADD_MESSAGE_TO_CHAT", payload: text });
      setShowSend(true);
    } else {
    }
  };

  const sendMessage = () => {
    const message = {
      sender: props.user.username,
      text: text,
      createdAt: new Date(),
    };
    sendChat({ ...message, roomId: props.room._id });
    props.newMessage(message);
    setText("");
  };
  const getUsersOnSearch = (input) => {
    return unsplash.get("https://api.unsplash.com/search/users", {
      params: { query: input },
    });
  };
  const onSearchSubmit = (e) => {
    e.preventDefault();
    getUsersOnSearch(input).then((res) => {
      let results = res.data.results;
      console.log(results, "inbox");
      setUsers(results);
    });
  };
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
        <h3>Share Ideas With Your Friends</h3>
        <InboxWrapper>
          <SearchIconWrapper>
            <SearchIcon
              src="https://www.flaticon.com/svg/static/icons/svg/598/598494.svg"
              alt="Icon"
            />
          </SearchIconWrapper>

          <form>
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
        </InboxWrapper>
        {users.length > 0 &&
          users
            .filter((user) => user.username.startsWith(input))
            .map((user) => {
              return (
                <PersonWrap>
                  <Person>
                    <img
                      src={user.profile_image.small}
                      alt=""
                      style={{ height: "40px", borderRadius: "25px" }}
                    />
                  </Person>
                  <a href="">
                    <div>
                      <h3>{user.username}</h3>
                    </div>
                  </a>
                </PersonWrap>
              );
            })}
        <p>Some contacts...</p>
        <PersonWrap>
          <Person>
            <img
              src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
              alt=""
              style={{ height: "40px", borderRadius: "25px" }}
            />
          </Person>
          <a href="">
            <div>
              <h3>following 1</h3>
            </div>
          </a>
        </PersonWrap>
        <PersonWrap>
          <Person>
            <img
              src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
              alt=""
              style={{ height: "40px", borderRadius: "25px" }}
            />
          </Person>
          <a href="">
            <div>
              <h3>following 2</h3>
            </div>
          </a>
        </PersonWrap>
        <PersonWrap>
          <Person>
            <img
              src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
              alt=""
              style={{ height: "40px", borderRadius: "25px" }}
            />
          </Person>
          <a href="">
            <div>
              <h3>following 3</h3>
            </div>
          </a>
        </PersonWrap>
        <MessageContainer>
          <Icon
            src="https://www.flaticon.com/svg/vstatic/svg/889/889668.svg?token=exp=1617026404~hmac=4eecd80899885377e7f4b19eed96ccd3"
            alt="Inbox"
          />

          <form>
            <input type="text" placeholder="Send a Message..." />
          </form>

          <IconButton>
            <FavoriteIcon fontSize="large" />
          </IconButton>
        </MessageContainer>
      </Drawer>
    </>
  );
};
export default Inbox;
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

  bottom: 0;
  input {
    border-radius: 26px;
    border: 1px solid grey;
    min-width: 70%;
    height: 48px;

    :focus {
      outline: none;
    }
    ::placeholder {
      color: black;
      font-size: 14px;
      padding: 10px;
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
`;
const Person = styled.div`
  width: 50px;
  height: 40px;
  border-radius: 25px;
`;
