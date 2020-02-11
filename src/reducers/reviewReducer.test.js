import { reviewReducer } from './reviewReducer';
import { ADD_REVIEW } from '../constants/reviewTypes';

describe('review reducer', () => {
  it('should return blank initial state', () => {
    expect(reviewReducer(undefined, {})).toEqual([]);
  });

  const review = {
    name: "Testy McTestface",
    email: "testymctestface@example.com",
    title: "This is a test",
    rating: 5,
    review: "I love testing reducers!",
    date: "Just now",
  };
  it('should add a new review to state', () => {
    const actual = reviewReducer([], {
      type: ADD_REVIEW,
      review
    });
    const expected = [{ ...review }];
    expect(actual).toMatchObject(expected);
  });
})
