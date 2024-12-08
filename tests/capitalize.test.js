import capitalize from '../src/capitalize.js';

describe('Tests for capitalize.js', () => {
  // Basic cases
  test('should capitalize a single word', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('world')).toBe('World');
  });

  test('should handle strings with mixed case', () => {
    expect(capitalize('hELLo')).toBe('Hello');
    expect(capitalize('WOrLd')).toBe('World');
  });

  // Edge cases
  test('should handle empty strings', () => {
    expect(capitalize('')).toBe('');
  });

  test('should handle strings with only special characters', () => {
    expect(capitalize('!@#$')).toBe('!@#$');
  });

  // Numbers and non-alphabetic characters
  test('should handle strings with numbers', () => {
    expect(capitalize('123abc')).toBe('123abc');
    expect(capitalize('abc123')).toBe('Abc123');
  });

  test('should handle strings with spaces', () => {
    expect(capitalize(' hello')).toBe(' hello');
    expect(capitalize('hello world')).toBe('Hello world');
  });

  // Unicode and accented characters
  test('should handle strings with accented characters', () => {
    expect(capitalize('éclair')).toBe('Éclair');
    expect(capitalize('çirque')).toBe('Çirque');
  });

  // Strings with nullish or non-string inputs
  test('should handle nullish values gracefully', () => {
    expect(capitalize(null)).toBe('Null'); 
    expect(capitalize(undefined)).toBe('Undefined'); 
  });

  test('should handle non-string inputs', () => {
    expect(capitalize(12345)).toBe('12345');
    expect(capitalize(['foo'])).toBe('Foo');
    expect(capitalize({ toString: () => 'bar' })).toBe('Bar');
  });
});
