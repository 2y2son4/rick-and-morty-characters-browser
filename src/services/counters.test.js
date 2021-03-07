import counters from './counters';

const testSetFuncState = () => {
  return 42;
};

test('If state is > 1 funcSetState should be called', () => {
  // Arrange
  const testState = 27;

  // Act
  const result = counters.less(testState, testSetFuncState);

  // Assert
  expect(result).toBe(42);
});

test('If state is = 1 funcSetState should not be called', () => {
  // Arrange
  const testState = 1;

  // Act
  const result = counters.less(testState, testSetFuncState);

  // Assert
  expect(result).toBe(0);
});

test('If state is < 1 funcSetState should not be called', () => {
  // Arrange
  const testState = -42;

  // Act
  const result = counters.less(testState, testSetFuncState);

  // Assert
  expect(result).toBe(-43);
});
