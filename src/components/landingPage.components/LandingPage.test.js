import React from 'react';
import { render } from '@testing-library/react';
import LandingPage from './LandingPage';

test('LandingPage renders', () => {
  const {queryByTestId} = render(<LandingPage/>);
  const linkTopElement = queryByTestId('landingPage');
  expect(linkTopElement).toBeTruthy()
})