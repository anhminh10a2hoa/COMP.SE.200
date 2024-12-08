import toNumber from '../src/toNumber.js';

describe('toNumber', () => {
  it('should return the same number if the value is already a number', () => {
    expect(toNumber(42)).toBe(42);
    expect(toNumber(0)).toBe(0);
    expect(toNumber(-5)).toBe(-5);
  });

  it('should return NaN for symbols', () => {
    const symbol = Symbol('test');
    expect(toNumber(symbol)).toBeNaN();
  });

  it('should handle object with valueOf method returning a number', () => {
    const obj = { valueOf: () => 123 };
    expect(toNumber(obj)).toBe(123);
  });

  it('should handle object with valueOf method returning a string', () => {
    const obj = { valueOf: () => '456' };
    expect(toNumber(obj)).toBe(456);
  });

  it('should handle strings representing numbers', () => {
    expect(toNumber('3.14')).toBe(3.14);
    expect(toNumber('42')).toBe(42);
    expect(toNumber('   100  ')).toBe(100);
  });

  it('should return NaN for invalid string numbers', () => {
    expect(toNumber('abc')).toBeNaN();
    expect(toNumber('   ')).toBe(0);
  });

  it('should handle binary strings', () => {
    expect(toNumber('0b1010')).toBe(10);
    expect(toNumber('0b111')).toBe(7);
  });

  it('should handle octal strings', () => {
    expect(toNumber('0o12')).toBe(10);
    expect(toNumber('0o7')).toBe(7);
  });

  it('should handle hexadecimal strings', () => {
    expect(toNumber('0x10')).toBe(16);
    expect(toNumber('0x1a')).toBe(26);
    expect(toNumber('0x7f')).toBe(127);
    expect(toNumber('0xg12')).toBeNaN(); 
  });

  it('should return 0 for falsy values', () => {
    expect(toNumber(null)).toBe(0);
    expect(toNumber(undefined)).toBeNaN();
    expect(toNumber('')).toBe(0);
    expect(toNumber(false)).toBe(0);
  });
});
