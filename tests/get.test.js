import get from '../src/get.js'; 

describe('Tests for get.js', () => {
  const object = { 
    'a': [{ 'b': { 'c': 3 } }], 
    'd': 5 
  };

  // Test case 1: Accessing a deep nested property using string path
  test('should return the value at the specified path', () => {
    expect(get(object, 'a[0].b.c')).toBe(3);
  });

  // Test case 2: Accessing a deep nested property using array path
  test('should return the value at the specified path when path is an array', () => {
    expect(get(object, ['a', '0', 'b', 'c'])).toBe(3);
  });

  // Test case 3: When the property does not exist, should return default value
  test('should return default value when the property is undefined', () => {
    expect(get(object, 'a[0].b.d', 'default')).toBe('default');
    expect(get(object, ['d', 'e'], 'default')).toBe('default');
  });

  // Test case 4: When the property exists, should return the value
  test('should return the value when the property exists', () => {
    expect(get(object, 'd')).toBe(5);
  });

  // Test case 5: When object is null or undefined, should return default value
  test('should return default value for null or undefined object', () => {
    expect(get(null, 'a[0].b.c', 'default')).toBe('default');
    expect(get(undefined, 'a[0].b.c', 'default')).toBe('default');
  });

  // Test case 6: When path is an empty string, should return undefined (not the object itself)
  test('should return undefined when path is an empty string', () => {
    expect(get(object, '')).toBeUndefined(); 
  });

  // Test case 7: When path is an empty array, should return undefined (not the object itself)
  test('should return undefined when path is an empty array', () => {
    expect(get(object, [])).toBeUndefined();
  });

  // Test case 8: When the resolved value is undefined, return the default value
  test('should return default value when resolved value is undefined', () => {
    expect(get(object, 'a[0].b.d', 'default')).toBe('default');
    expect(get(object, 'nonexistent.property', 'default')).toBe('default');
  });

  // Test case 9: Handling primitive types in the object
  test('should return the value of a primitive type property', () => {
    expect(get(object, 'd')).toBe(5);
    expect(get(object, 'nonexistent', 'default')).toBe('default');
  });
});
