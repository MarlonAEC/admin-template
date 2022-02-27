import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders APP component', () => {
  render(<App />);
  const linkElement = screen.getByText(/Algo/);
  expect(linkElement).toBeInTheDocument();
});
