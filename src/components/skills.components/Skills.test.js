import React from 'react';
import { render } from '@testing-library/react';
import Skills from './Skills';

test('Skills renders', () => {
  const {queryByTestId} = render(<Skills/>);
  const linkTopElement = queryByTestId('skills');
  expect(linkTopElement).toBeTruthy()
})