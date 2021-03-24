import React, { useState, useEffect } from "react";
import unsplash from "../api/unsplash";
import { connect } from "react-redux";
import Card from "./Card";
import "../styles/index.css";
import { Row, Col, Container } from "react-bootstrap";
const mapStateToProps = (state) => state;
function SavedPinsPage(props) {
  const [pins, setPins] = useState([]);

  const { username } = props.match.params;

  useEffect(() => {
    console.log(props.pins);
    setPins(props.pins);
  }, []);
  return (
    <>
      <Container className="hero px-4 mb-5" fluid></Container>
      {pins.length > 0 && (
        <div style={styles.pin_container}>
          <Card size="medium" />
          <Card size="medium" />
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

export default connect(mapStateToProps)(SavedPinsPage);
