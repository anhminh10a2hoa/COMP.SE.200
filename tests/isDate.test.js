import isDate from '../src/isDate.js';

describe('Tests for isDate.js', () => {
  // Test case 1: Check if it correctly identifies a Date object
  test('should return true for a Date object', () => {
    expect(isDate(new Date())).toBe(true);
  });

  // Test case 2: Check if it returns false for a string representing a date
  test('should return false for a string representing a date', () => {
    expect(isDate('Mon April 23 2012')).toBe(false); 
  });

  // Test case 3: Check if it returns false for a plain string
  test('should return false for a plain string', () => {
    expect(isDate('Hello World')).toBe(false);
  });

  // Test case 4: Check if it returns false for an object that is not a Date
  test('should return false for a plain object', () => {
    expect(isDate({})).toBe(false);
  });

  // Test case 5: Check if it returns false for null
  test('should return false for null', () => {
    expect(isDate(null)).toBe(false);
  });

  // Test case 6: Check if it returns false for undefined
  test('should return false for undefined', () => {
    expect(isDate(undefined)).toBe(false);
  });

  // Test case 7: Check if it returns true for an actual Date created via new Date
  test('should return true for a Date object created with new Date()', () => {
    const dateInstance = new Date();
    expect(isDate(dateInstance)).toBe(true);
  });

  // Test case 8: Check if it returns false for an object with a date-like structure but not an actual Date
  test('should return false for an object that mimics a Date', () => {
    const fakeDate = { toString: () => 'Mon April 23 2012' };
    expect(isDate(fakeDate)).toBe(false); 
  });
});
