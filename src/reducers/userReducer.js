import {SET_USER, REMOVE_USER} from '../actions/userAction';

const intitalState = {
  user: null,
};

const userReducer = (state = intitalState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case REMOVE_USER:
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
};

export default userReducer;
