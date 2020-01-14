import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

test('calls "onClick" prop on button click', () => {
  const onClick = jest.fn();
  const { getByText } = render(<Button onClick={onClick}>Click Me</Button>);

  fireEvent.click(getByText(/Click Me/i));
  expect(onClick).toHaveBeenCalled();
});
