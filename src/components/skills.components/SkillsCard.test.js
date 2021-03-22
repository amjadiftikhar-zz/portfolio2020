import React from 'react';
import { render } from '@testing-library/react';
import SkillsCard from './SkillsCard';

test('SkillsCard renders', () => {
  const {queryByTestId} = render(<SkillsCard/>);
  const linkTopElement = queryByTestId('skillsCard');
  expect(linkTopElement).toBeTruthy()
})