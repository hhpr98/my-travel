import React from 'react';

import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";

import App from './App';

// https://github.com/facebook/jest/issues/9538
// eslint-disable-next-line no-undef
test('renders app test', () => {
  // eslint-disable-next-line react/jsx-filename-extension
  render(<Router><App /></Router>);
  const text = screen.getByText(/(Hành trình của tôi)/i);
  expect(text).toBeInTheDocument();
});
