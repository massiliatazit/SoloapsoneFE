import React, { useState, useEffect } from "react";
import { postFunction } from "../api/index";
import { FaFacebook } from "react-icons/fa";
import { Container } from "react-bootstrap";
import styled from "styled-components";

function LoginModal(props) {
  console.log("loginPins", props);
  const [email, setEmail] = useState("");

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(true);
  const Login = async (e) => {
    try {
      e.preventDefault();
      const login = await postFunction("/users/login", {
        email: email,
        username: username,
        password: password,
      });
      localStorage.setItem("token", login.tokens.token);
      localStorage.setItem("refreshToken", login.tokens.refreshToken);
      window.location.replace("/homefeed");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (email && username && password) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email && username && password]);
  return (
    <Container style={{ position: "relative" }}>
      <div
        className="grid-container"
        style={{ position: "absolute", zIndex: "-1" }}
      >
        <div className="grid">
          {props.pins.map((i) => (
            <PinsContainer>
              {props.pins
                .sort(() => 0.5 - Math.random())
                .slice(0, 5)
                .map((pin) => (
                  <img
                    src={pin.urls.regular}
                    className="item"
                    alt="LoginPins"
                  />
                ))}
            </PinsContainer>
          ))}
        </div>
      </div>

      <div
        className="container"
        xs={12}
        d-flex
        justify-content-center
        style={{ height: "100%", zIndex: "55555" }}
      >
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
                      onSubmit={Login}
                    >
                      <div data-test-id="ageInputField" className="zI7 iyn Hsu">
                        <span>
                          <input
                            aria-invalid="false"
                            autoComplete="off"
                            className="input-signup"
                            id="Username"
                            name="Username"
                            placeholder="Username"
                            type="text"
                            onChange={(e) => setUserName(e.target.value)}
                            required
                          />
                        </span>
                      </div>
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
                            onChange={(e) => setEmail(e.target.value)}
                            required
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
                            placeholder="Enter password"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                        </span>
                      </div>
                      <div
                        data-test-id="password-reset-button"
                        className="zI7 iyn Hsu"
                      />

                      <button className="button-red" type="submit">
                        <span>Continue</span>
                      </button>
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
                        <a
                          href={
                            process.env.REACT_APP_URL + "users/facebookLogin"
                          }
                          className="text-white"
                        >
                          <span>
                            {" "}
                            <FaFacebook className="facebook" />
                            Continue with Facebook
                          </span>
                        </a>
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
                  <div className="business-acc">Create a business account</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default LoginModal;
const PinsContainer = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  width: 236px;
  position: relative;
  :before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0);
  }
  :hover::before {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 16px;
  }
  img {
    display: flex;
    width: 100%;
    cursor: zoom-in;
    border-radius: 16px;
    object-fit: cover;
    opacity: 1;
    transition-duration: 0.3s;
    display: block;
  }
`;
