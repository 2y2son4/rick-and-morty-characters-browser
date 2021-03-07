import ChangePage from './ChangePage';
import { render, screen } from '@testing-library/react';

test('ChangePage should show 42 as page prop', () => {
  const page = 42;
  const handleLess = () => {};
  const handleMore = () => {};

  // Arrange
  render(<ChangePage handleLess={handleLess} handleMore={handleMore} page={page} />);

  // Act
  const pageCounter = screen.getByText('| Page 42 |');
  const prevText = screen.getByText('Previous page');

  // Assert
  expect(pageCounter.nodeName).toBe('SPAN');
  expect(prevText.nodeName).toBe('P');
});
