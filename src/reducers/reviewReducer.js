import uuid from 'uuid/v4';

export const reviewReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_REVIEW':
      return [...state, {
        name: action.review.name,
        email: action.review.email,
        title: action.review.title,
        review: action.review.review,
        rating: action.review.rating,
        date: "Just now",
        id: uuid()}
      ]
    default:
      return state;
  }
}
