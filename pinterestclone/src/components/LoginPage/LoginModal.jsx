import React, { useState, useEffect } from "react";
import unsplash from "../../api/unsplash";
import { Container, Row, Col } from "react-bootstrap";

function LoginModal(props) {
  const [pins, setPins] = useState([]);
  const getPins = async () => {
    unsplash.get(`https://api.unsplash.com/topics`, {}).then((res) => {
      let results = res.data;
      console.log(results);
      setPins(results);
    });
  };
  useEffect(() => {
    getPins();
  }, []);

  return (
    <Container fluid>
      <Row>
        {Array.from(
          new Set(
            pins.slice(0, 6).map((i) => (
              <Col xs={3} lg={6} className="pr-1">
                {pins
                  .sort(() => 0.5 - Math.random())
                  .slice(0, 6)

                  .map((pin) =>
                    pin.preview_photos.map((image) => {
                      <img
                        src={image.urls.regular}
                        className="item img-fluid"
                        style={{ objectFit: "cover" }}
                        alt="signupPins"
                      />;
                    })
                  )}
              </Col>
            ))
          )
        )}
      </Row>
    </Container>
  );
}

export default LoginModal;
