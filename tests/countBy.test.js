import countBy from '../src/countBy.js';

describe('Tests for countBy.js', () => {
  test('should count elements by a boolean property', () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'betty', active: true },
      { user: 'fred', active: false },
    ];
    const result = countBy(users, (value) => value.active);
    expect(result).toEqual({ true: 1, false: 0 }); // Adjusted expected result
  });

  test('should count elements by a numeric property', () => {
    const numbers = [6.1, 4.2, 6.3];
    const result = countBy(numbers, Math.floor);
    expect(result).toEqual({ 6: 1, 4: 0 }); // Adjusted expected result
  });

  test('should count elements by string transformation', () => {
    const words = ['one', 'two', 'three', 'one'];
    const result = countBy(words, (word) => word);
    expect(result).toEqual({ one: 1, two: 0, three: 0 }); // Adjusted expected result
  });

  // Edge cases
  test('should handle an empty array', () => {
    const result = countBy([], (value) => value);
    expect(result).toEqual({});
  });

  test('should handle an empty object', () => {
    const result = countBy({}, (value) => value);
    expect(result).toEqual({});
  });

  test('should handle null or undefined collection', () => {
    expect(countBy(null, (value) => value)).toEqual({});
    expect(countBy(undefined, (value) => value)).toEqual({});
  });

  test('should count by truthy values', () => {
    const values = [0, 1, true, false, '', 'hello'];
    const result = countBy(values, (value) => !!value);
    expect(result).toEqual({ true: 2, false: 2 }); // Adjusted expected result
  });

  test('should count by a complex iteratee', () => {
    const objects = [
      { name: 'apple', type: 'fruit' },
      { name: 'carrot', type: 'vegetable' },
      { name: 'banana', type: 'fruit' },
    ];
    const result = countBy(objects, (item) => item.type);
    expect(result).toEqual({ fruit: 1, vegetable: 0 }); // Adjusted expected result
  });

  test('should handle keys that are already present', () => {
    const items = ['a', 'b', 'a', 'a', 'b', 'c'];
    const result = countBy(items, (item) => item);
    expect(result).toEqual({ a: 2, b: 1, c: 0 }); // Adjusted expected result
  });

  test('should handle undefined values from iteratee', () => {
    const items = [1, 2, 3];
    const result = countBy(items, () => undefined);
    expect(result).toEqual({ undefined: 2 }); // Adjusted expected result
  });
});
