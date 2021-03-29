import React from "react";
import styled from "styled-components";
import "antd/dist/antd.css";
import { Drawer } from "antd";

const Icon = styled.img`
  padding: 12px;
  height: 50px;
  opacity: 0.6;
  margin-left: 5px;
  border-radius: 50%;
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

const Inbox = () => {
  const [visible, setVisible] = React.useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <div onClick={showDrawer}>
        <Icon
          src="https://www.flaticon.com/svg/static/icons/svg/684/684849.svg"
          alt="Inbox"
        />
      </div>
      <Drawer
        title="Inbox"
        style={{ textAlign: "center" }}
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        width={350}
      >
        <h1>Share Ideas With Your Friends</h1>
        <InboxWrapper>
          <SearchIconWrapper>
            <SearchIcon
              src="https://www.flaticon.com/svg/static/icons/svg/598/598494.svg"
              alt="Icon"
            />
          </SearchIconWrapper>
          <Search type="text" placeholder="Search by name or email" />
        </InboxWrapper>
        <p>Some contacts...</p>
        <PersonWrap>
          <Person>
            <img
              src="https://i.pinimg.com/236x/8a/72/19/8a72196d76ff6c2f42a49fc65b67d8fc.jpg"
              alt=""
              style={{ height: "40px", borderRadius: "25px" }}
            />
          </Person>
          <a href="">
            <div>
              <h3>Margestivu</h3>
            </div>
          </a>
        </PersonWrap>
        <PersonWrap>
          <Person>
            <img
              src="https://i.pinimg.com/236x/72/ac/45/72ac455e393eed9b22d4f0dd0fb19323.jpg"
              alt=""
              style={{ height: "40px", borderRadius: "25px" }}
            />
          </Person>
          <a href="">
            <div>
              <h3>Hellen Margret</h3>
            </div>
          </a>
        </PersonWrap>
        <PersonWrap>
          <Person>
            <img
              src="https://i.pinimg.com/236x/0f/7d/c4/0f7dc42e7fd48ac880e2b137e427bdf8.jpg"
              alt=""
              style={{ height: "40px", borderRadius: "25px" }}
            />
          </Person>
          <a href="">
            <div>
              <h3>Suryan</h3>
            </div>
          </a>
        </PersonWrap>
      </Drawer>
    </>
  );
};
export default Inbox;
