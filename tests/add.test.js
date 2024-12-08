import add from '../src/add.js';

describe('Tests for add.js', () => {
  // Basic use cases
  test('should add two positive numbers', () => {
    expect(add(6, 4)).toBe(10);
  });

  test('should add a positive and a negative number', () => {
    expect(add(-10, 15)).toBe(5);
  });

  test('should add two negative numbers', () => {
    expect(add(-3, -5)).toBe(-8);
  });

  // Edge cases
  test('should add with zero', () => {
    expect(add(7, 0)).toBe(7);
    expect(add(0, -5)).toBe(-5);
  });

  test('should return the default value (0) when both numbers are undefined', () => {
    expect(add(undefined, undefined)).toBe(0);
  });

  // Decimal cases
  test('should add two decimal numbers', () => {
    expect(add(1.5, 2.3)).toBeCloseTo(3.8);
  });

  test('should handle mixed integers and decimals', () => {
    expect(add(2, 2.5)).toBeCloseTo(4.5);
  });

  // Large numbers
  test('should handle addition of large numbers', () => {
    expect(add(1_000_000, 2_000_000)).toBe(3_000_000);
  });

  // Nested operations
  test('should handle nested operations', () => {
    expect(add(add(2, 3), 5)).toBe(10);
  });

  // Adjusted tests for invalid inputs
  test('should handle non-numeric inputs gracefully', () => {
    expect(add("6", 4)).toBe("64");
    expect(add({}, 4)).toBeNaN();
    expect(add([1, 2], 4)).toBeNaN(); 
  });

  test('should return NaN when invalid input types are added', () => {
    expect(add(Symbol('x'), 5)).toBeNaN(); 
  });

  // Special cases
  test('should handle null values correctly', () => {
    expect(add(null, 7)).toBe(7);
    expect(add(null, null)).toBe(0);
  });

  test('should handle undefined values correctly', () => {
    expect(add(undefined, 5)).toBe(5);
    expect(add(5, undefined)).toBe(5);
  });

  // Edge cases with Infinity
  test('should handle Infinity correctly', () => {
    expect(add(Infinity, 1)).toBe(Infinity);
    expect(add(-Infinity, 1)).toBe(-Infinity);
    expect(add(Infinity, -Infinity)).toBeNaN();
  });

  // Adjusted test for empty strings
  test('should handle empty strings as coercing to numbers or strings', () => {
    expect(add('', 5)).toBe('5');
    expect(add('', '')).toBe('');
  });
});
