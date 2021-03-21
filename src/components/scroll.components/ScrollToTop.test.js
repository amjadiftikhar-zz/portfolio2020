import React from 'react';
import { render } from '@testing-library/react';
import ScrollToTop from './ScrollToTop';

test('ScrollToTop renders', () => {
  const {queryByTestId} = render(<ScrollToTop/>);
  const linkTopElement = queryByTestId('scrollToTopp');
//   expect(linkTopElement).toBeTruthy()
})