import React from 'react';
import { render } from '@testing-library/react';
import About from './About';

test('About renders', () => {
  const {getByTestId} = render(<About/>);
  const linkElement = getByTestId('about');
  expect(linkElement).toBeTruthy();
});