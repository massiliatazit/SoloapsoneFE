import React, { useState } from "react";
import PinterestIcon from "@material-ui/icons/Pinterest";
import styled from "styled-components";
import { connect } from "react-redux";
import Dropdownmenu from "../Dropdownmenu";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

import TextsmsIcon from "@material-ui/icons/Textsms";
import Notifications from "../Notifications";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Inbox from "../Inbox";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
const mapStateToProps = (state) => state;
function Header(props) {
  let location = useLocation();
  let history = useHistory();

  const [input, setInput] = useState("");

  const [showDropdown, setDropdown] = useState(false);
  const [animatePanel, setAnimatePanel] = useState(false);
  const [currentPage, setCurrentPage] = useState(location.pathname);
  const onSearchSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(input);
  };

  const handleShowSavedPins = (username) => {
    history.push(`/${username}/saved`);
  };
  const toggleProfileDropdownHandler = () => {
    if (showDropdown) {
      setAnimatePanel(true);
      setTimeout(() => {
        setCurrentPage(location.pathname);
        setDropdown(false);
        setAnimatePanel(false);
      }, 200);
    } else {
      setCurrentPage(undefined);
      setDropdown(true);
    }
  };

  return (
    <Wrapper>
      <LogoWrapper>
        <LogoWrapper>
          <IconButton>
            <PinterestIcon />
          </IconButton>
        </LogoWrapper>
      </LogoWrapper>
      <HomePageButton>
        <a href="/homefeed">Homepage</a>
      </HomePageButton>
      <TodaysButton>
        <a href="/Today">Today's</a>
      </TodaysButton>
      {/* <FollowingButton>
        {" "}
        <a href="/">Following</a>
      </FollowingButton> */}
      <SearchWrapper>
        <SearchBarWrapper>
          {" "}
          <IconButton>
            {" "}
            <SearchIcon />{" "}
          </IconButton>
          <form>
            <input type="text" onChange={(e) => setInput(e.target.value)} />
            <button type="submit" onClick={(e) => onSearchSubmit(e)}></button>
          </form>
        </SearchBarWrapper>
      </SearchWrapper>
      <IconsWrapper>
        <IconButton>
          <Notifications />
        </IconButton>
        <IconButton>
          {/* <TextsmsIcon
            onClick={() => {
              handleShowInbox();
            }}
          /> */}
          <Inbox />
        </IconButton>

        <IconButton>
          <img
            src={props.user.img}
            alt=""
            onClick={() => {
              handleShowSavedPins(props.user.username);
            }}
            style={{
              backgroundImage:
                "https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </IconButton>
        {/* {showDropdown && ( */}
        <IconButton onClick={toggleProfileDropdownHandler}>
          {/* <KeyboardArrowDownIcon /> */}
          <Dropdownmenu />
        </IconButton>
      </IconsWrapper>
    </Wrapper>
  );
}
export default connect(mapStateToProps)(Header);
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  padding: 12px 4px 4px 16px;
  background-color: white;
  color: black;
`;
const LogoWrapper = styled.div`
  .MuiSvgIcon-root {
    color: #e60023;
    font-size: 32px;
    cursor: pointer;
  }
`;
const HomeButtons = styled.div`
  display: flex;
  height: 48px;
  min-width: 100px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  cursor: pointer;
`;
const HomePageButton = styled(HomeButtons)`
  background-color: rgba(17, 17, 17);
  margin: 10px;
  a {
    text-decoration: none;
    color: white;
    font-weight: 700;
  }
`;
const TodaysButton = styled(HomeButtons)`
  background-color: white;
  a {
    text-decoration: none;
    color: black;
    font-weight: 700;
  }

  :hover {
    background-color: #e1e1e1;
  }
`;
const SearchWrapper = styled.div`
  flex: 1;
`;
const SearchBarWrapper = styled.div`
  background-color: #efefef;
  display: flex;
  height: 48px;
  width: 100%;
  border-radius: 50px;
  border: none;
  margin-bottom: 10px;
  padding-left: 10px;
  form {
    display: flex;
    flex: 1;
  }
  form > input {
    background-color: transparent;
    border: none;
    width: 100%;
    margin-left: 5px;

    font-size: 16px;
  }
  form > button {
    display: none;
  }
  input:focus {
    outline: none;
  }
`;
const IconsWrapper = styled.div`
  img {
    height: 25px;
    width: 25px;
    background-color: #111111;
    border-radius: 50%;

    padding: 3px;
  }
`;
