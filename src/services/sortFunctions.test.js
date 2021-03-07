import sortFunctions from './sortFunctions';

test('sortAZ returns an array sorted by name from a to z', () => {
  //Arrange
  const arr = [{ name: 'a' }, { name: 'x' }, { name: 'Z' }, { name: 't' }];

  //Act
  const result = sortFunctions.sortAZ(arr);

  //Assert
  expect(result).toEqual([{ name: 'a' }, { name: 't' }, { name: 'x' }, { name: 'Z' }]);
});

test('sortZA returns an array sorted by name from z to a', () => {
  //Arrange
  const arr = [{ name: 'a' }, { name: 'x' }, { name: 'Z' }, { name: 't' }];

  //Act
  const result = sortFunctions.sortZA(arr);

  //Assert
  expect(result).toEqual([{ name: 'Z' }, { name: 'x' }, { name: 't' }, { name: 'a' }]);
});
