import React from 'react';
import { render } from '@testing-library/react';
import Accordion from './Accordion';

test('Accordion renders', () => {
  const {getByTestId} = render(<Accordion/>);
  const linkElement = getByTestId('accordion');
  expect(linkElement).toBeTruthy()
})