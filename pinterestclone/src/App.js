import React, { useState, useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Pages/Home/Home";
import 'animate.css'
import Signup from "./Pages/Signup/Signup"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import unsplash from "./api/unsplash";
import Loaders from "./components/Loaders/Loaders";
import CreatedStoryModal from "./Pages/PinBuilder/CreatedStoryModal"
import ViewPin from "./Pages/ViewPin";
import PinBuilder from "./Pages/PinBuilder/PinBuilder";
import StoryBuilder from "./Pages/PinBuilder/StoryBuilder";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SavedPins from "./components/SavedPins";
import CreatedPins from "./components/CreatedPins";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch({ type: "SET_USER", payload: user }),
  setError: (error) => dispatch({ type: "SET_ERROR", payload: error }),
  showErrors: (boolean) => dispatch({ type: "DISPLAY_ERRORS", payload: boolean }),
  setLoading: (boolean) => dispatch({ type: "SET_LOADING", payload: boolean }),
})
function App(props) {
  const [pins, setNewPins] = useState([]);
  const {loading}=props.status
  const getImageOnSearch = (term) => {
    return unsplash.get("https://api.unsplash.com/search/photos", {
      params: { query: term,h:300 },
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
    let pins = ["food", "city", "sahara", "yellow", "travel", "art", "nature","moon","books","flowers","love"];
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
     props.setLoading(true);
    getNewPins();
  }, []);

  return (
    
    <Router>
      {/* {!(loading || props.errors.show) ? ( */}
        
     
      <Switch>
        <Route path="/homefeed" >
         
          <Home pins={pins} onSubmit={onSearchSubmit}/>
        </Route>
<Route path="/story-pin-builder">
  <StoryBuilder/>
</Route>
       
        <Route path="/PinBuilder" render={() => <PinBuilder />}></Route>
        <Route path="/" exact render={() => <Signup />}></Route>
        <Route path="/Login" exact render={() => <LoginPage pins={pins}/>}></Route>
        <Route path="/:username/saved" exact render={(props) => <SavedPins pins={pins} {...props}/>}></Route>
        <Route path="/:username/created" exact render={(props) => <CreatedPins pins={pins} {...props}/>}></Route>
        <Route path="/:id" exact render={(props) => <ViewPin {...props} />} />
        <Route path="/pin/:storyId"  exact render = {(props) => <CreatedStoryModal {...props}/>}/>
      </Switch>
       {/* ): */}
       {/* <Loaders show={loading} error={props.errors.status} /> */}
       {/* } */}
    </Router>
     
  );
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
