import React, { createContext, useReducer, useEffect } from 'react';
import { reviewReducer } from '../reducers/reviewReducer';

import { data } from '../data/reviews';

export const ReviewContext = createContext();

const ReviewContextProvider = (props) => {

  // Set up initial state
  const [reviews, dispatch] = useReducer(reviewReducer, data, (initialState) => {
    const localData = localStorage.getItem('reviews');
    return localData ? JSON.parse(localData) : initialState;
  });

  // Persist data in localStorage
  useEffect(() => {
    window.localStorage.setItem('reviews', JSON.stringify(reviews));
  }, [reviews]);

  return (
    <ReviewContext.Provider value={{ reviews, dispatch }}>
      {props.children}
    </ReviewContext.Provider>
  );
}

export default ReviewContextProvider;
