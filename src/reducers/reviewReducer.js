import uuid from 'uuid/v4';

export const reviewReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_REVIEW':
      return [...state, {
        name: action.review.name,
        email: action.review.email,
        title: action.review.title,
        rating: action.review.rating,
        review: action.review.review,
        date: "Just now",
        id: uuid()}
      ]
    default:
      return state;
  }
}
