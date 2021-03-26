import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function LoginModal(props) {
  return (
    <Container fluid>
      <Row>
        {Array.from(
          new Set(
            props.pins.map((i) => (
              <Col xs={3} lg={2} className="pr-1">
                {props.pins
                  .sort(() => 0.5 - Math.random())

                  .map((pin) => (
                    <img
                      src={pin.urls.regular}
                      className="item img-fluid"
                      style={{ objectFit: "cover" }}
                      alt="signupPins"
                    />
                  ))}
              </Col>
            ))
          )
        )}
      </Row>
    </Container>
  );
}

export default LoginModal;
