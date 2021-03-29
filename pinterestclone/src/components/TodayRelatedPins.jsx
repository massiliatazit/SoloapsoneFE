import React, { useState, useEffect } from "react";
import unsplash from "../api/unsplash";
import { connect } from "react-redux";

import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
const mapStateToProps = (state) => state;
function TodayRelatedPins(props) {
  const [savedPins, setSavedPins] = useState([]);
  const [relatedCollection, SetRelatedCollection] = useState([]);
  const { id } = props.user.saved.id;
  const getTodayRelatedCollection = () => {
    return unsplash.get(`https://api.unsplash.com/collections/:${id}/related`);
  };

  useEffect(() => {
    setSavedPins(props.user.saved);
  }, []);
  return <div></div>;
}

export default connect(mapStateToProps)(TodayRelatedPins);
