import React from 'react';
import { render } from '@testing-library/react';
import Experience from './Experience';

test('Experience renders', () => {
  const {queryByTestId} = render(<Experience/>);
  const linkTopElement = queryByTestId('experience');
  expect(linkTopElement).toBeTruthy()
})