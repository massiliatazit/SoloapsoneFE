import React from "react";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { Menu, Dropdown } from "antd";

function Dropdownmenu() {
  const logOut = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    window.location.replace("/");
  };

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Alink href="https://www.antgroup.com">Add another account</Alink>
      </Menu.Item>
      <Menu.Item key="1">
        <Alink href="https://www.antgroup.com">
          Personalize your home page
        </Alink>
      </Menu.Item>
      <Menu.Item key="2">
        <Alink href="https://www.aliyun.com">Settings</Alink>
      </Menu.Item>
      <Menu.Divider />

      <Menu.Item key="3">
        <Link to="/" onClick={logOut}>
          Log Out
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <Alink
        className="ant-dropdown-link"
        onClick={(e) => e.preventDefault()}
        style={{ color: "#767676" }}
      >
        <KeyboardArrowDownIcon />
      </Alink>
    </Dropdown>
  );
}

export default Dropdownmenu;
const Alink = styled.a`
  font-weight: 600;
  text-decoration: "none";
`;
