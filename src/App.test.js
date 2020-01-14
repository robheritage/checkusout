import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Customer Reviews title', () => {
  const { getByText } = render(<App />);
  const title = getByText(/Customer Reviews/i);
  expect(title).toBeInTheDocument();
});
