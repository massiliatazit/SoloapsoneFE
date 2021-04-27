import { RECEIVE_ALL_STORIES,
    RECEIVE_BOARD_STORIES,
    RECEIVE_STORY,
    RECEIVE_STORY_WITH_CREATE,
    RECEIVE_STORY_WITH_EDIT,
    RECEIVE_STORY_WITH_DELETE,
    RECEIVE_ERRORS } from '../actions/story_actions';

import merge from 'lodash/merge';

// default story state
const stories = [];
const story= {
title: "",
description: "",
images: "",
categories:"", 
video:"",
duration: "",



};

const storiesReducer = function(state = {stories, story, errors: []}, action){
switch(action.type) {
case RECEIVE_ALL_STORIES: {
 const oldStories = state.stories;
 const newStories = [...oldStories, ...action.stories];
 const newState = merge({}, state, {stories: newStories});
 return newState;
}

case RECEIVE_BOARD_STORIES: {
 const newState = {stories: action.stories};
 return newState;
}

case RECEIVE_STORY: {
 const oldStories = state.stories;
 return {stories: oldStories, story: action.story};
}

case RECEIVE_STORY_WITH_CREATE: {
  const oldStories = state.stories;
  const newStories = [...oldStories, action.story];
  const newState = merge({}, state, {stories: newStories, story: action.story});
  return newState;
 }

case RECEIVE_STORY_WITH_EDIT: {
 let idx = -1;
 for (var i = 0; i < state.stories.length; i++) {
   if (state.stories[i] === action.story.id) {
     idx = i;
   }
 }

 if (idx === -1) {
   return merge({}, state, {story: action.story});
 } else {
   let newStories = [...state.stories.slice(0,idx), action.story, ...state.stories.slice(idx + 1)];
   let newState = merge({}, state, {stories: newStories, story: action.story});
   return newState;
 }
}

case RECEIVE_STORY_WITH_DELETE: {
 let idx2 = -1;
 for (var i = 0; i < state.stories.length; i++) {
   if (state.stories[i].id === action.id) {
     idx2 = i;
   }
 }
 if (idx2 === -1) {
   return state;
 } else {
   let newstories = [...state.stories.slice(0,idx2), ...state.stories.slice(idx2+1)];
   let newStateAfterStoryDelete = {stories: newstories, story: {}};
   return newStateAfterStoryDelete;
 }
}

case RECEIVE_ERRORS:
 const errors = action.errors;
 return merge({}, story, {story: errors});

default:
 return state;
}
};

export default storiesReducer;