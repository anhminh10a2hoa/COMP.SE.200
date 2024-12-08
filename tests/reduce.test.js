import reduce from '../src/reduce.js';

describe('Tests for reduce.js', () => {

  // Test case 1: Reduce an array of numbers
  test('should reduce an array of numbers to a sum', () => {
    const result = reduce([1, 2, 3, 4], (sum, n) => sum + n, 0);
    expect(result).toBe(10);
  });

  // Test case 2: Reduce an object based on its values
  test('should reduce an object to group values by keys', () => {
    const result = reduce(
      { 'a': 1, 'b': 2, 'c': 1 },
      (result, value, key) => {
        (result[value] || (result[value] = [])).push(key);
        return result;
      },
      {}
    );
    expect(result).toEqual({ '1': ['a', 'c'], '2': ['b'] });
  });

  // Test case 3: Reduce an array without an accumulator (default behavior)
  test('should reduce an array without initial accumulator', () => {
    const result = reduce([5, 10, 15], (accum, value) => accum + value);
    expect(result).toBe(30); 
  });

  // Test case 4: Reduce an array with string elements to join them
  test('should join strings in an array into a single string', () => {
    const result = reduce(['hello', ' ', 'world'], (accum, value) => accum + value, '');
    expect(result).toBe('hello world');
  });

  // Test case 5: Reduce an array with no elements should return the initial value
  test('should return the initial accumulator if array is empty', () => {
    const result = reduce([], (sum, n) => sum + n, 0);
    expect(result).toBe(0); 
  });

  // Test case 6: Reduce with a complex object
  test('should reduce an object to a flattened object', () => {
    const result = reduce(
      { 'a': { 'x': 1 }, 'b': { 'y': 2 }, 'c': { 'z': 3 } },
      (accum, value, key) => {
        return { ...accum, [key]: value };
      },
      {}
    );
    expect(result).toEqual({ 'a': { 'x': 1 }, 'b': { 'y': 2 }, 'c': { 'z': 3 } });
  });

  // Test case 7: Reduce an array of mixed types
  test('should reduce an array of mixed types to a result', () => {
    const result = reduce([1, 'a', 2, 'b'], (accum, value) => {
      return accum + (typeof value === 'number' ? value : value.charCodeAt(0));
    }, 0);
    expect(result).toBe(198); 
  });
});
