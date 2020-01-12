import React, { createContext, useReducer, useEffect } from 'react';
import { reviewReducer } from '../reducers/reviewReducer';

import initialState from '../data/reviews';

export const ReviewContext = createContext();

const ReviewContextProvider = (props) => {
  const [reviews, dispatch] = useReducer(reviewReducer, initialState, (initialState) => {
    const localData = localStorage.getItem('review');
    return localData ? JSON.parse(localData) : initialState.data;
  });
  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }, [reviews]);
  return (
    <ReviewContext.Provider value={{ reviews, dispatch }}>
      {props.children}
    </ReviewContext.Provider>
  );
}

export default ReviewContextProvider;
