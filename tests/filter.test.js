import filter from '../src/filter.js';

describe('Tests for filter.js', () => {
  // Basic filtering
  test('should filter elements where predicate returns true', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'fred', 'active': false }
    ];
    expect(filter(users, ({ active }) => active)).toEqual([
      { 'user': 'barney', 'active': true }
    ]);
  });

  // Test with empty array
  test('should return an array containing an empty array for an empty input array', () => {
    const emptyArray = [];
    expect(filter(emptyArray, (value) => value)).toEqual([[]]); 
  });

  // Test when no elements match the predicate
  test('should return an array containing an empty array when no elements match the predicate', () => {
    const users = [
      { 'user': 'barney', 'active': false },
      { 'user': 'fred', 'active': false }
    ];
    expect(filter(users, ({ active }) => active)).toEqual([[]]); 
  });

  // Test when all elements match the predicate
  test('should return all elements when they all match the predicate', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'fred', 'active': true }
    ];
    expect(filter(users, ({ active }) => active)).toEqual([
      { 'user': 'barney', 'active': true },
      { 'user': 'fred', 'active': true }
    ]);
  });

  // Test with numbers filtering even numbers
  test('should filter out even numbers', () => {
    const numbers = [1, 2, 3, 4, 5];
    expect(filter(numbers, (num) => num % 2 !== 0)).toEqual([1, 3, 5]);
  });

  // Test with strings filtering based on the first letter
  test('should filter strings based on the starting letter', () => {
    const strings = ['apple', 'banana', 'cherry', 'date'];
    expect(filter(strings, (str) => str.startsWith('b'))).toEqual(['banana']);
  });

  // Test with complex objects
  test('should filter based on multiple properties', () => {
    const items = [
      { 'name': 'item1', 'type': 'A', 'price': 100 },
      { 'name': 'item2', 'type': 'B', 'price': 150 },
      { 'name': 'item3', 'type': 'A', 'price': 200 }
    ];
    expect(filter(items, ({ type, price }) => type === 'A' && price > 100)).toEqual([
      { 'name': 'item3', 'type': 'A', 'price': 200 }
    ]);
  });

  // Test with falsy values
  test('should handle falsy values correctly', () => {
    const values = [0, 1, null, undefined, '', 'hello'];
    expect(filter(values, (value) => value)).toEqual([1, 'hello']);
  });

  // Test with filtering based on index
  test('should filter elements based on index condition', () => {
    const arr = [10, 20, 30, 40, 50];
    expect(filter(arr, (_, index) => index % 2 === 0)).toEqual([10, 30, 50]);
  });

  // Test with null or undefined array
  test('should return an array containing an empty array for null or undefined input', () => {
    expect(filter(null, (value) => value)).toEqual([[]]);
    expect(filter(undefined, (value) => value)).toEqual([[]]);
  });
});
