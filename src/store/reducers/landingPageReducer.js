import { NEWSFEED } from '../constants/actionTypes';

const initialState = {
  newsFeedData: [],
};
// Handles neewsfeed related actions
const landingPageReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case NEWSFEED:
      return {
        ...state,
        newsFeedData: action.newsFeedData,
      };
    default:
      return state;
  }
};

export default landingPageReducer;
