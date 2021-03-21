import React, { useState, useEffect } from "react";
import unsplash from "../api/unsplash";

import Card from "./Card";
import "../styles/index.css";
import { Row, Col, Container } from "react-bootstrap";

function SavedPinsPage() {
  const [pins, setPins] = useState([]);
  const getPins = async () => {
    unsplash
      .get(`https://api.unsplash.com/topics/fashion/photos`, {
        params: { quantity: 30 },
      })
      .then((res) => {
        let results = res.data;
        console.log(results);
        setPins(results);
      });
  };
  useEffect(() => {
    getPins();
  }, []);
  return (
    <>
      <Container className="hero px-4 mb-5" fluid></Container>
      {pins.length > 0 && (
        <div style={styles.pin_container}>
          <Card
            size="small"
            style={{ backgroundImage: `url(${pins[0].urls.small})` }}
          />
        </div>
      )}
    </>
  );
}

const styles = {
  pin_container: {
    margin: 0,
    padding: 0,
    width: "80vw",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 250px)",
    gridAutoRows: "10px",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    justifyContent: "center",
    backgroundColor: "white",
  },
};

export default SavedPinsPage;
