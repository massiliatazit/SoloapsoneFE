import { RECEIVE_ALL_STORIES,
    RECEIVE_BOARD_STORIES,
    RECEIVE_STORY,
    RECEIVE_STORY_WITH_CREATE,
    RECEIVE_STORY_WITH_EDIT,
    RECEIVE_STORY_WITH_DELETE,
    RECEIVE_ERRORS } from '../actions/story_actions';

import merge from 'lodash/merge';

// default pin state
const stories = [];
const story= {
title: "",
description: "",
images: "",
categories:"", 
video:"",
duration: "",



};

const PinsReducer = function(state = {stories, story, errors: []}, action){
switch(action.type) {
case RECEIVE_ALL_PINS: {
 const oldStories = state.stories;
 const newStories = [...oldStories, ...action.stories];
 const newState = merge({}, state, {pins: newStories});
 return newState;
}

case RECEIVE_BOARD_PINS: {
 const newState = {stories: action.stories};
 return newState;
}

case RECEIVE_PIN: {
 const oldPins = state.pins;
 return {pins: oldPins, pin: action.pin};
}

case RECEIVE_PIN_WITH_CREATE: {
  const oldPins = state.pins;
  const newPins = [...oldPins, action.pin];
  const newState = merge({}, state, {pins: newPins, pin: action.pin});
  return newState;
 }

case RECEIVE_PIN_WITH_EDIT: {
 let idx = -1;
 for (var i = 0; i < state.pins.length; i++) {
   if (state.pins[i] === action.pin.id) {
     idx = i;
   }
 }

 if (idx === -1) {
   return merge({}, state, {pin: action.pin});
 } else {
   let newPins = [...state.pins.slice(0,idx), action.pin, ...state.pins.slice(idx + 1)];
   let newState = merge({}, state, {pins: newPins, pin: action.pin});
   return newState;
 }
}

case RECEIVE_PIN_WITH_DELETE: {
 let idx2 = -1;
 for (var i = 0; i < state.pins.length; i++) {
   if (state.pins[i].id === action.id) {
     idx2 = i;
   }
 }
 if (idx2 === -1) {
   return state;
 } else {
   let newPins = [...state.pins.slice(0,idx2), ...state.pins.slice(idx2+1)];
   let newStateAfterPinDelete = {pins: newPins, pin: {}};
   return newStateAfterPinDelete;
 }
}

case RECEIVE_ERRORS:
 const errors = action.errors;
 return merge({}, pin, {pin: errors});

default:
 return state;
}
};

export default PinsReducer;