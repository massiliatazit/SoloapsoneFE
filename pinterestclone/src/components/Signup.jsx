import React from "react";
import Pin from "./Pin";
import styled from "styled-components";
import "../styles/signup.css";
import "../styles/styles.scss";
import "../styles/styles.css.map";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import "../styles/_reset.scss";
import "../styles/_grid.scss";
import "../styles/_animations.scss";

function Signup(props) {
  let { pins } = props;

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

          setTimeout(() => exitScreen(currentIndex, exitDelay), timePerScreen);

          nextIndex = nextIndex >= grids.length - 1 ? 0 : nextIndex + 1;
        }

        nextCycle();

        setInterval(nextCycle, cycleTime);
      }

      setupAnimationCycle({
        timePerScreen: 8000, // ms
        exitDelay: 200 * 7, // ms
      });
    }

    window.addEventListener("scroll", () => {
      let scrollY = Math.round(window.scrollY);
      console.log(scrollY);

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
          <div className="column animate-before">
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
          </div>
          <div className="column animate-before">
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
          </div>
          <div className="column animate-before">
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
          </div>
          <div className="column animate-before">
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
          </div>
          <div className="column animate-before">
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
          </div>
          <div className="column animate-before">
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
          </div>
          <div className="column animate-before">
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
          </div>
        </div>
        <div className="grid">
          <div className="column animate-before">
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
          </div>
          <div className="column animate-before">
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
          </div>
          <div className="column animate-before">
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
          </div>
          <div className="column animate-before">
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
          </div>
          <div className="column animate-before">
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
          </div>
          <div className="column animate-before">
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
          </div>
          <div className="column animate-before">
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
          </div>
        </div>
        <div className="grid">
          <div className="column animate-before">
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
          </div>
          <div className="column animate-before">
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
          </div>
          <div className="column animate-before">
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
          </div>
          <div className="column animate-before">
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
          </div>
          <div className="column animate-before">
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
          </div>
          <div className="column animate-before">
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
          </div>
          <div className="column animate-before">
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
          </div>
        </div>
        <div className="grid">
          <div className="column animate-before">
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
          </div>
          <div className="column animate-before">
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
          </div>
          <div className="column animate-before">
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
          </div>
          <div className="column animate-before">
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
          </div>
          <div className="column animate-before">
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
          </div>
          <div className="column animate-before">
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
          </div>
          <div className="column animate-before">
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
            <img
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              className="item"
              alt="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
            />
          </div>
        </div>
      </div>
      <div
        style={{
          zIndex: "100",
          backgroundColor: "rgba(17, 17, 17, 0.644)",
          height: "100vh",
          width: "100%",
          position: "absolute",
          bottom: "-1100px",
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
        <div className="container">
          {" "}
          <div
            style={{
              margin: "130px 0px",
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <p
              className="unauth-homepage-signup-title"
              style={{
                color: "white",
                alignSelf: "center",
                marginLeft: "4%",
                width: "30%",
                fontSize: "70px",
                fontWeight: 600,
              }}
            >
              Sign up to get your ideas
            </p>
            <div
              className="unauth-homepage-conversion-modal"
              data-test-id="signup-default-modal"
            >
              <div style={{ minHeight: "400px", padding: "20px 10px 24px" }}>
                <div
                  style={{
                    display: "block",
                    height: "45px",
                    margin: "5px auto 8px",
                    width: "45px",
                  }}
                >
                  <svg
                    height={40}
                    viewBox="-3 -3 82 82"
                    width={40}
                    style={{ display: "block" }}
                  >
                    <circle cx={38} cy={38} fill="white" r={40} />
                    <path
                      d="M27.5 71c3.3 1 6.7 1.6 10.3 1.6C57 72.6 72.6 57 72.6 37.8 72.6 18.6 57 3 37.8 3 18.6 3 3 18.6 3 37.8c0 14.8 9.3 27.5 22.4 32.5-.3-2.7-.6-7.2 0-10.3l4-17.2s-1-2-1-5.2c0-4.8 3-8.4 6.4-8.4 3 0 4.4 2.2 4.4 5 0 3-2 7.3-3 11.4C35.6 49 38 52 41.5 52c6.2 0 11-6.6 11-16 0-8.3-6-14-14.6-14-9.8 0-15.6 7.3-15.6 15 0 3 1 6 2.6 8 .3.2.3.5.2 1l-1 3.8c0 .6-.4.8-1 .4-4.4-2-7-8.3-7-13.4 0-11 7.8-21 22.8-21 12 0 21.3 8.6 21.3 20 0 12-7.4 21.6-18 21.6-3.4 0-6.7-1.8-7.8-4L32 61.7c-.8 3-3 7-4.5 9.4z"
                      fill="#e60023"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
                <div style={{ margin: "0px auto 18px", width: "400px" }}>
                  <h3
                    style={{
                      color: "rgb(51, 51, 51)",
                      fontSize: "36px",
                      fontWeight: 600,
                      WebkitFontSmoothing: "antialiased",
                      letterSpacing: "-1.2px",
                      wordBreak: "break-word",
                    }}
                  >
                    Welcome to Pinterest
                  </h3>
                </div>
                <div style={{ margin: "0px auto 18px", width: "270px" }}>
                  <h3
                    style={{
                      textAlign: "center",
                      color: "rgb(51, 51, 51)",
                      fontSize: "16px",
                      fontWeight: "normal",
                      margin: "-15px 0px 32px",
                    }}
                  >
                    Find new ideas to try
                  </h3>
                </div>
                <div
                  data-test-id="signup-options"
                  style={{
                    margin: "0px auto",
                    position: "relative",
                    textAlign: "center",
                  }}
                >
                  <div style={{ margin: "0px auto", width: "268px" }}>
                    <div>
                      <form
                        data-test-id="registerForm"
                        method="POST"
                        noValidate
                      >
                        <div
                          data-test-id="emailInputField"
                          className="zI7 iyn Hsu"
                        >
                          <span>
                            <input
                              aria-invalid="false"
                              autoComplete="username"
                              className="input-signup"
                              id="email"
                              name="id"
                              placeholder="Email"
                              type="email"
                            />
                          </span>
                        </div>
                        <div
                          data-test-id="passwordInputField"
                          className="zI7 iyn Hsu"
                        >
                          <span>
                            <input
                              aria-invalid="false"
                              autoComplete="new-password"
                              className="input-signup"
                              id="password"
                              name="password"
                              placeholder="Create a password"
                              type="password"
                            />
                          </span>
                        </div>
                        <div
                          data-test-id="password-reset-button"
                          className="zI7 iyn Hsu"
                        />
                        <div
                          data-test-id="ageInputField"
                          className="zI7 iyn Hsu"
                        >
                          <span>
                            <input
                              aria-invalid="false"
                              autoComplete="off"
                              className="input-signup"
                              id="age"
                              name="age"
                              placeholder="Age"
                              type="text"
                            />
                          </span>
                        </div>
                        <div className="button-red">
                          <span>Continue</span>
                        </div>
                      </form>
                      <p
                        className
                        style={{
                          marginBottom: "16px",
                          marginTop: "16px",
                          overflow: "hidden",
                          textAlign: "center",
                          fontSize: "14px",
                          color: "rgb(51, 51, 51)",
                          fontWeight: "bold",
                        }}
                      >
                        OR
                      </p>
                      <div style={{ marginTop: "10px" }}>
                        <div className="button-blue">
                          <span>
                            {" "}
                            <FaFacebook className="facebook" />
                            Continue with Facebook
                          </span>
                        </div>
                        <div style={{ height: "10px" }} />
                      </div>
                    </div>
                    <div className="button">
                      <span>Continue with Google</span>
                    </div>
                    <div style={{ marginTop: "16px" }}>
                      <span
                        style={{
                          WebkitFontSmoothing: "antialiased",
                          fontSize: "11px",
                          fontWeight: "normal",
                          textAlign: "center",
                          transition: "opacity 0.2s linear 0s",
                          color: "rgb(118, 118, 118)",
                          width: "224px",
                        }}
                      >
                        <span>
                          {" "}
                          By continuing, you agree to Pinterest's{" "}
                          <a
                            rel="noopener noreferrer"
                            target="_blank"
                            data-test-id="tos"
                            href="/_/_/policy/terms-of-service/"
                          >
                            Terms of Service
                          </a>
                          ,{" "}
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            data-test-id="privacy"
                            href="/_/_/policy/privacy-policy/"
                          >
                            Privacy policy
                          </a>{" "}
                          and{" "}
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            data-test-id="cookies"
                            href="https://www.pinterest.com/_/_/policy/cookies/"
                          >
                            Cookie use
                          </a>
                          .{" "}
                        </span>
                      </span>
                    </div>
                    <div className="Hvp zI7 iyn Hsu">
                      <div
                        style={{
                          margin: "0px auto 5px",
                          width: "fit-content",
                          alignItems: "baseline",
                        }}
                      >
                        <div className="zI7 iyn Hsu">
                          <a
                            data-test-id="login-signup-toggle"
                            style={{
                              color: "rgb(51, 51, 51)",
                              cursor: "pointer",
                              marginLeft: "5px",
                            }}
                          >
                            Already a member? Log in
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-test-id="create-business-account-button"
                className="MIw Rym gpV ojN zI7 iyn Hsu"
                style={{
                  height: "62px",
                  width: "100%",
                  borderRadius: "0px 0px 32px 32px",
                }}
              >
                <div
                  aria-disabled="false"
                  className="CCY czT eEj XJa FTD L4E DI9 BG7"
                  role="button"
                  tabIndex={0}
                >
                  <div
                    className="Jea gjz mQ8 zI7 iyn Hsu"
                    style={{ height: "100%" }}
                  >
                    <div className="business-acc">
                      Create a business account
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Signup;
const Wrapper = styled.div`
  background-color: white;
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 15px;
  justify-content: center;
  position: relative;
  z-index: -1;
`;
const Container = styled.div`
  margin: 0 auto;
  height: 60%;
  position: absolute;
  z-index: 1;
  top: 50vh;

  background-color: white;
`;
