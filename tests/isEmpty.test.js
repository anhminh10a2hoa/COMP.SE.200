import isEmpty from '../src/isEmpty.js';

describe('Tests for isEmpty.js', () => {
  // Test case 1: Check if null is considered empty
  test('should return true for null', () => {
    expect(isEmpty(null)).toBe(true);  
  });

  // Test case 2: Check if undefined is considered empty
  test('should return true for undefined', () => {
    expect(isEmpty(undefined)).toBe(true);  
  });

  // Test case 3: Check if a boolean value is considered empty
  test('should return true for boolean values (true)', () => {
    expect(isEmpty(true)).toBe(true); 
  });

  // Test case 4: Check if a number is considered empty
  test('should return true for number values', () => {
    expect(isEmpty(1)).toBe(true); 
  });

  // Test case 5: Check if an empty array is considered empty
  test('should return true for an empty array', () => {
    expect(isEmpty([])).toBe(true);  
  });

  // Test case 6: Check if a non-empty array is considered empty
  test('should return false for a non-empty array', () => {
    expect(isEmpty([1, 2, 3])).toBe(false); 
  });

  // Test case 7: Check if an empty string is considered empty
  test('should return true for an empty string', () => {
    expect(isEmpty('')).toBe(true); 
  });

  // Test case 8: Check if a non-empty string is considered empty
  test('should return false for a non-empty string', () => {
    expect(isEmpty('abc')).toBe(false); 
  });

  // Test case 9: Check if an empty object is considered empty
  test('should return true for an empty object', () => {
    expect(isEmpty({})).toBe(true); 
  });

  // Test case 10: Check if a non-empty object is considered empty
  test('should return false for a non-empty object', () => {
    expect(isEmpty({ a: 1 })).toBe(false);
  });

  // Test case 11: Check if an empty Set is considered empty
  test('should return true for an empty Set', () => {
    expect(isEmpty(new Set())).toBe(true);
  });

  // Test case 12: Check if a non-empty Set is considered empty
  test('should return false for a non-empty Set', () => {
    const mySet = new Set([1, 2, 3]);
    expect(isEmpty(mySet)).toBe(false);
  });

  // Test case 13: Check if an empty Map is considered empty
  test('should return true for an empty Map', () => {
    expect(isEmpty(new Map())).toBe(true);  
  });

  // Test case 14: Check if a non-empty Map is considered empty
  test('should return false for a non-empty Map', () => {
    const myMap = new Map();
    myMap.set('a', 1);
    expect(isEmpty(myMap)).toBe(false); 
  });

  // Test case 15: Check if a custom object with no properties is considered empty
  test('should return true for an object with no properties (prototype-based)', () => {
    const obj = Object.create(null);
    expect(isEmpty(obj)).toBe(true);
  });

  // Test case 16: Check if an object with prototype properties is considered empty
  test('should return false for an object with prototype properties', () => {
    const obj = Object.create({ a: 1 });
    obj.b = 2;
    expect(isEmpty(obj)).toBe(false); 
  });
});
