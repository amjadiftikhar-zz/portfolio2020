import React from 'react';
import { render } from '@testing-library/react';
import Layout from './Layout';

test('Layout renders', () => {
  const {queryByTestId} = render(<Layout/>);
  const linkTopElement = queryByTestId('layout');
  expect(linkTopElement).toBeTruthy()
})