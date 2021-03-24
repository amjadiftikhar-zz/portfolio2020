import React from 'react';
import { render } from '@testing-library/react';
import Education from './Education';

test('Education renders', () => {
  const {queryByTestId} = render(<Education/>);
  const linkTopElement = queryByTestId('education');
  expect(linkTopElement).toBeTruthy()
})