import React from 'react';
import { render } from '@testing-library/react';
import Project from './Project';

test('Project renders', () => {
  const {queryByTestId} = render(<Project/>);
  const linkTopElement = queryByTestId('project');
  expect(linkTopElement).toBeTruthy()
})