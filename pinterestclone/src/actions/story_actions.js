

export const RECEIVE_ALL_STORIES = "RECEIVE_ALL_STORIES";
export const RECEIVE_BOARD_STORIES = "RECEIVE_BOARD_STORIES";
export const RECEIVE_STORY_WITH_CREATE = "RECEIVE_STORY_WITH_CREATE";
export const RECEIVE_STORY_WITH_EDIT = "RECEIVE_STORY_WITH_EDIT";
export const RECEIVE_STORY_WITH_DELETE = "RECEIVE_STORY_WITH_DELETE";

export const RECEIVE_STORY = "RECEIVE_STORY";

export const CREATE_STORY = "CREATE_STORY";
export const UPDATE_STORY = "UPDATE_STORY";
export const DELETE_STORY = "DELETE_STORY";

export const RECEIVE_ERRORS = "RECEIVE_ERRORS";



export const receiveAllStory= stories => ({
    type: RECEIVE_ALL_STORIES,
    stories
  });
  
  export const receiveBoardStories = stories => ({
    type: RECEIVE_BOARD_STORIES,
    stories
  });
  
  export const receiveStory= story => ({
    type: RECEIVE_STORY,
    story
  });
  
  export const receiveStoryWithCreate = story => ({
    type: RECEIVE_STORY_WITH_CREATE,
    story
  });
  
  export const receiveStoryWithEdit = story => ({
    type: RECEIVE_STORY_WITH_EDIT,
    story
  });
  
  export const receiveStoryWithDelete = id => ({
    type: RECEIVE_STORY_WITH_DELETE,
    id
  });
  
  export const createStory= story => ({
    type: CREATE_STORY,
    story
  });
  
  export const updateStory= story => ({
    type: UPDATE_STORY,
    story
  });
  
  export const deleteStory = id => ({
    type: DELETE_STORY,
    id
  });
  
  export const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
  });