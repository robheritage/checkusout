import uuid from 'uuid/v4';
import { ADD_REVIEW } from '../constants/reviewTypes';

export const reviewReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_REVIEW:
      return [{
        ...(action.review || {}),
        date: "Just now",
        id: uuid()}, ...state]
    default:
      return state;
  }
}
