/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ArrowCounterClockwiseIcon } from '../../../utils/icons/arrowCounterClockwise';

test('Load and verify ArrowCounterClockwiseIcon', async () => {
  // Set up DOM.
  render(<ArrowCounterClockwiseIcon />);

  // Fetch rendered element.
  await screen.findByLabelText('Arrow counter clockwise icon');

  // Verify element.
  expect(
    screen.getByLabelText('Arrow counter clockwise icon')
  ).toBeInTheDocument();
});
