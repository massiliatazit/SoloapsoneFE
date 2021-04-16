import React, { useState, useEffect } from "react";

import styled from "styled-components";
import "./signup.css";
import "../../styles/styles.scss";
import "../../styles/styles.css.map";
import { FaChevronDown, FaSignInAlt } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import SignupForm from "./SignupForm";
import "../../styles/_reset.scss";

import "../../styles/_animations.scss";

import unsplash from "../../api/unsplash";
function Signup(props) {
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState("");
  const [pins, setPins] = useState([]);

  const getPins = async () => {
    unsplash
      .get(`https://api.unsplash.com/topics/animals`, {
        params: { quantity: 30 },
      })
      .then((res) => {
        let results = res.data.preview_photos;
        console.log(results);
        setPins(results);
      });
  };
  useEffect(() => {
    getPins();
  }, []);

  window.onload = () => {
    let scrollY = Math.round(window.scrollY);
    const grids = document.querySelectorAll(".grid");
    const headings = document.querySelectorAll(".heading .wrapper .text");
    window.scroll(0, 0);
    if (scrollY === 0) {
      function enterScreen(index) {
        const grid = grids[index];
        const heading = headings[index];
        const gridColumns = grid.querySelectorAll(".column");
        const slide = document.querySelectorAll(".slide");
        slide.forEach((element) => {
          element.classList.add("colored");
        });
        grid.classList.add("active");

        gridColumns.forEach((element) => {
          element.classList.remove("animate-before", "animate-after");
        });

        heading.classList.remove("animate-before", "animate-after");
      }

      function exitScreen(index, exitDelay) {
        const grid = grids[index];
        const heading = headings[index];
        const gridColumns = grid.querySelectorAll(".column");

        gridColumns.forEach((element) => {
          element.classList.add("animate-after");
        });

        heading.classList.add("animate-after");

        setTimeout(() => {
          grid.classList.remove("active");
        }, exitDelay);
      }

      function setupAnimationCycle({ timePerScreen, exitDelay }) {
        const cycleTime = timePerScreen + exitDelay;
        let nextIndex = 0;

        function nextCycle() {
          const currentIndex = nextIndex;

          enterScreen(currentIndex);

          // setTimeout(() => exitScreen(currentIndex, exitDelay), timePerScreen);

          nextIndex = nextIndex >= grids.length - 1 ? 0 : nextIndex + 1;
        }

        nextCycle();

        setInterval(nextCycle, cycleTime);
      }

      setupAnimationCycle({
        timePerScreen: 10000, // ms
        exitDelay: 300 * 7, // ms
      });
    }

    window.addEventListener("scroll", () => {
      let scrollY = Math.round(window.scrollY);
      //console.log(scrollY);

      if (scrollY === 100) {
        setTimeout(function name() {
          let wrapper = document.querySelector(".wrappy");
          wrapper.classList.remove("dinone");
          wrapper.classList.add("d-none");
        }, 0);
        window.scroll(0, 1100);
      } else if (scrollY === 1000) {
        setTimeout(function name() {
          let wrapper = document.querySelector(".wrappy");
          wrapper.classList.remove("d-none");
          wrapper.classList.add("dinone");
        }, 0);
        window.scroll(0, 0);
      }
    });
  };
  return (
    <>
      <Wrapper>
        <SignUp>
          <a href="/">Sign up</a>
        </SignUp>
        <Login className="mx-4">
          <a href="/Login">Login</a>
        </Login>
      </Wrapper>
      <div className="scroll">
        <button
          onClick={function () {
            window.scrollTo(0, 1100);
          }}
          className="button-arrow-down"
        >
          <FaChevronDown className="arrow-down" />
        </button>
        <div className="heading">
          <span className="text">Get your Next</span>
          <div className="wrapper">
            <div className="offset">
              <h2
                style={{ color: "#c28b00", fontWeight: "normal" }}
                className="text animate-before"
              >
                weeknight dinner idea
              </h2>
            </div>
            <div className="offset">
              <h2
                style={{ color: "#618c7b", fontWeight: "normal" }}
                className="text animate-before"
              >
                home décor idea
              </h2>
            </div>
            <div className="offset">
              <h2
                style={{ color: "#0076d3", fontWeight: "normal" }}
                className="text animate-before"
              >
                new outfit
              </h2>
            </div>
            <div className="offset">
              <h2
                style={{ color: "#407a57", fontWeight: "normal" }}
                className="text animate-before"
              >
                green thumb idea
              </h2>
            </div>
          </div>
          <ul
            style={{ display: "flex", marginTop: "100px" }}
            className="slick-dots"
          >
            <li className>
              <button
                className="slide -1"
                style={{
                  height: "10px",
                  width: "10px",
                  cursor: "pointer",
                  backgroundColor: "#E1E1E1",
                  outline: "none",
                  content: "none",
                  border: "none",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              ></button>
            </li>
            <li className>
              <button
                className="slide -2"
                style={{
                  height: "10px",
                  width: "10px",
                  cursor: "pointer",
                  backgroundColor: "#E1E1E1",
                  outline: "none",
                  content: "none",
                  border: "none",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              ></button>
            </li>
            <li className>
              <button
                className="slide -3"
                style={{
                  height: "10px",
                  width: "10px",
                  cursor: "pointer",
                  backgroundColor: "#E1E1E1",
                  outline: "none",
                  content: "none",
                  border: "none",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              ></button>
            </li>
            <li className>
              <button
                className="slide -4"
                style={{
                  height: "10px",
                  width: "10px",
                  cursor: "pointer",
                  backgroundColor: "#E1E1E1",
                  outline: "none",
                  content: "none",
                  border: "none",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              ></button>
            </li>
          </ul>
        </div>

        <div className="grid-container">
          <div className="grid">
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <div className="column animate-before">
                {pins &&
                  Array.from(
                    new Set(
                      pins
                        .sort(() => 0.4 - Math.random())
                        .slice(0, 5)
                        .map((pin) => (
                          <img
                            src={pin.urls.regular}
                            className="item"
                            alt="signupPins"
                          />
                        ))
                    )
                  )}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            zIndex: "100",
            backgroundColor: "rgba(17, 17, 17, 0.644)",
            height: "100vh",
            width: "100%",
            position: "absolute",
            bottom: "-1000px",
          }}
          className=" wrappy"
        >
          <button
            onClick={function () {
              window.scrollTo(0, 0);
            }}
            className="button-arrow-up"
          >
            <FaChevronUp className="arrow-up" />
          </button>
          <SignupForm />
        </div>
      </div>
    </>
  );
}
export default Signup;

const Container = styled.div`
  margin: 0 auto;
  height: 60%;
  position: absolute;
  z-index: 1;
  top: 50vh;

  background-color: white;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  height: 56px;
  padding: 12px 4px 4px 16px;
  background-color: white;
  color: black;
`;
const buttons = styled.div`
  display: flex;
  min-height: 40px;
  min-width: 60px;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  cursor: pointer;
  overflow: hidden;
  font-size: 14px;
`;
const SignUp = styled(buttons)`
  background-color: #e2e2e2;
  a {
    text-decoration: none;
    color: black;
    font-weight: 600;
  }
`;
const Login = styled(buttons)`
  background-color: #e60023;

  a {
    text-decoration: none;
    color: white;
    font-weight: 600;
  }
`;
