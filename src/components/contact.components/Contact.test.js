import React from 'react';
import { render } from '@testing-library/react';
import Contact from './Contact';

test('Contact renders', () => {
  const {queryByTestId} = render(<Contact/>);
  const contactComponent = queryByTestId('contactId');
  expect(contactComponent).toBeInTheDocument();
})