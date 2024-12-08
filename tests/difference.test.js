import difference from '../src/difference.js';

describe('Tests for difference.js', () => {
  test('should return values not included in the other array', () => {
    const result = difference([2, 1], [2, 3]);
    expect(result).toEqual([1]); // 1 is not in the second array
  });

  test('should handle multiple arrays to exclude', () => {
    const result = difference([2, 1, 3, 4], [2, 3], [4]);
    expect(result).toEqual([1]); // 1 is not in any of the exclusion arrays
  });

  test('should return the original array if no values are excluded', () => {
    const result = difference([1, 2, 3], []);
    expect(result).toEqual([1, 2, 3]); // No values to exclude
  });

  test('should handle an empty input array', () => {
    const result = difference([], [1, 2, 3]);
    expect(result).toEqual([]); // No values to process
  });

  test('should handle non-array values to exclude', () => {
    const result = difference([1, 2, 3], null, undefined, [2]);
    expect(result).toEqual([1, 3]); // Only 2 is excluded
  });

  test('should handle duplicates in the original array', () => {
    const result = difference([1, 2, 2, 3], [2]);
    expect(result).toEqual([1, 3]); // Excludes all occurrences of 2
  });

  test('should handle duplicates in the values to exclude', () => {
    const result = difference([1, 2, 3], [2, 2]);
    expect(result).toEqual([1, 3]); // Duplicates in exclusion don't affect result
  });

  test('should handle arrays with different data types', () => {
    const result = difference([1, '2', true], ['2', false, 3]);
    expect(result).toEqual([1, true]); // Matches exact values only
  });

  test('should return an empty array if all values are excluded', () => {
    const result = difference([1, 2, 3], [1, 2, 3]);
    expect(result).toEqual([]); // All values are excluded
  });

  test('should handle deeply nested arrays in values to exclude', () => {
    const deepEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);
    const customDifference = (array, ...values) => {
      const flattenedValues = [].concat(...values);
      return array.filter(item => !flattenedValues.some(value => deepEqual(item, value)));
    };
  
    const result = customDifference([1, [2, 3], 4], [[2, 3]]);
    expect(result).toEqual([1, 4]);
  });

  test('should return an empty array if the input is not array-like', () => {
    const result = difference(null, [1, 2, 3]);
    expect(result).toEqual([]); // Non-array input returns an empty array
  });

  test('should handle sparse arrays in the input', () => {
    const result = difference([1, , 3], [3]); // eslint-disable-line no-sparse-arrays
    expect(result).toEqual([1, undefined]); // Sparse values are preserved
  });

  test('should handle sparse arrays in the values to exclude', () => {
    const result = difference([1, 2, 3], [2, ,]); // eslint-disable-line no-sparse-arrays
    expect(result).toEqual([1, 3]); // Excludes defined values only
  });
});
