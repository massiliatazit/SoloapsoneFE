import React, { useState, useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import unsplash from "./api/unsplash";
import Loaders from "./components/Loaders/Loaders";
import SavedPinsPage from "./components/SavedPinsPage";

import PinBuilder from "./components/PinBuilder";
const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch({ type: "SET_USER", payload: user }),
  setError: (error) => dispatch({ type: "SET_ERROR", payload: error }),
  showErrors: (boolean) => dispatch({ type: "DISPLAY_ERRORS", payload: boolean }),
  setLoading: (boolean) => dispatch({ type: "SET_LOADING", payload: boolean }),
})
function App({ setUser, setLoading, user, status, errors, setError }) {
  const [pins, setNewPins] = useState([]);
  const {loading}=status
  const getImageOnSearch = (term) => {
    return unsplash.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
    });
  };

  const onSearchSubmit = (term) => {
    getImageOnSearch(term).then((res) => {
      let results = res.data.results;

      let newPins = [
        ...results,
        // ...pins,
      ];
      newPins.sort(function (a, b) {
        return 0.5 - Math.random();
      });
      setNewPins(newPins);
    });
  };
  const getNewPins = () => {
    let promises = [];
    let pinData = [];
    let pins = ["nails", "hair", "bali", "beauty", "cats", "heals", "nature"];
    pins.forEach((pinTerm) => {
      promises.push(
        getImageOnSearch(pinTerm).then((res) => {
          let results = res.data.results;
          // pinData.splice(0,pinData.length,...results)
          pinData = pinData.concat(results);
          pinData.sort(function (a, b) {
            return 0.5 - Math.random();
          });
        })
      );

      Promise.all(promises).then(() => {
        setNewPins(pinData);
      });
    });
  };

  useEffect(() => {
    setLoading(true);
    getNewPins();
  }, []);

  return (
    
    <Router>
      {!(loading || errors.show) ? (
      <Switch>
        <Route path="/homefeed">
          <Header onSubmit={onSearchSubmit} />
          <Home pins={pins} />
        </Route>
       
        <Route path="/PinBuilder" render={() => <PinBuilder />}></Route>
        <Route path="/" exact render={() => <Signup />}></Route>
        <Route path="/username/created" exact render={() => <SavedPinsPage pins={pins}/>}></Route>
      </Switch>
       ):
       <Loaders show={loading} error={errors.status} />
       }
    </Router>
     
  );
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
