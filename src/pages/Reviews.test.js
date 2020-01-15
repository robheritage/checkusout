import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Reviews from './Reviews';
import { ReviewContext } from '../contexts/ReviewContext';

test('renders list of reviews from context', () => {
  const reviews = [
    {
      id: "b3717102-90b4-4755-b666-3192cfcfba4d",
      name: "AJ",
      title: "Pretty good",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis fringilla tortor. Pellentesque vulputate ante justo, a vestibulum enim tempus sit amet.",
      rating: 3,
      date: "4 hours ago"
    },
    {
      id: "c640a381-00f9-4eca-9568-f53919a28ea7",
      name: "Peter Jones",
      title: null,
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis fringilla tortor.",
      rating: 4,
      date: "1 day ago"
    }
  ];

  // Create context to provide example reviews above.
  const ReviewContextProvider = ({ children }) => (
    <ReviewContext.Provider value={{ reviews }}>
      { children }
    </ReviewContext.Provider>
  );

  // Render the Reviews page
  const { getAllByRole } = render(
    <ReviewContextProvider>
      <Router>
        <Reviews />
      </Router>
    </ReviewContextProvider>
  );

  // Should have 2 reviews in the list
  const listItems = getAllByRole('listitem');
  expect(listItems).toHaveLength(2);
});
