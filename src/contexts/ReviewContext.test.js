import React, { useContext } from 'react';
import { render } from '@testing-library/react';
import ReviewContextProvider from './ReviewContext';
import { ReviewContext } from './ReviewContext';

const ExampleConsumer = () => {
  const { reviews } = useContext(ReviewContext);
  return reviews ? 'Has reviews from context' : 'No reviews';
};

test('context provides reviews', () => {
  const tree = (
    <ReviewContextProvider>
      <ExampleConsumer />
    </ReviewContextProvider>
  )
  const { getByText } = render(tree)
  expect(getByText(/^Has reviews from context/)).toBeInTheDocument();
});
