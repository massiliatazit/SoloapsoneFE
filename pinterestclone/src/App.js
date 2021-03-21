import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import unsplash from "./api/unsplash";
import SavedPinsPage from "./components/SavedPinsPage";

import PinBuilder from "./components/PinBuilder";

function App() {
  const [pins, setNewPins] = useState([]);
  
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
    getNewPins();
  }, []);

  return (
    
    <Router>
      <Switch>
        <Route path="/homefeed">
          <Header onSubmit={onSearchSubmit} />
          <Home pins={pins} />
        </Route>
        {/* <Route path='/homefeed' exact render={()=> }> */}

        {/* </Route> */}
        <Route path="/PinBuilder" render={() => <PinBuilder />}></Route>
        <Route path="/" exact render={() => <Signup />}></Route>
        <Route path="/username/created" exact render={() => <SavedPinsPage pins={pins}/>}></Route>
      </Switch>
    </Router>
  );
}

export default App;
