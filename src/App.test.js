import React from 'react';

import { render, screen } from '@testing-library/react';
import App from './App';

// https://github.com/facebook/jest/issues/9538
// eslint-disable-next-line no-undef
test('renders learn react link', () => {
  // eslint-disable-next-line react/jsx-filename-extension
  render(<App />);
  const text = screen.getByText(/(MapExample)/i);
  expect(text).toBeInTheDocument();
});
