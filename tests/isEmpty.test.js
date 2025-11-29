import isEmpty from "../src/isEmpty";

describe('isEmpty', () => {

  it('should return true for null', () => {
    expect(isEmpty(null)).toBe(true);
  });

  it('should return true for undefined', () => {
    expect(isEmpty(undefined)).toBe(true);
  });

  it('should return true for booleans as they have no own enumerable properties', () => {
    expect(isEmpty(true)).toBe(true);
    expect(isEmpty(false)).toBe(true);
  });

  it('should return false for a non-empty array', () => {
    expect(isEmpty([1, 2, 3])).toBe(false);
  });

  it('should return true for an empty array', () => {
    expect(isEmpty([])).toBe(true);
  });

  it('should return false for a non-empty string', () => {
    expect(isEmpty('abc')).toBe(false);
  });
  
  it('should return true for an empty string', () => {
    expect(isEmpty('')).toBe(true);
  });

  it('should return false for a non-empty plain object', () => {
    expect(isEmpty({ 'a': 1 })).toBe(false);
  });
  
  it('should return true for an empty plain object', () => {
    // Falls through to for...in loop, which completes and returns true.
    expect(isEmpty({})).toBe(true);
  });

  it('should return true for an empty Map', () => {
    // tag == '[object Map]' && !value.size
    expect(isEmpty(new Map())).toBe(true);
  });
  
  it('should return true for an object with only inherited or non-enumerable properties', () => {
    // Falls through to for...in loop, which only checks own enumerable properties.
    const obj = Object.create({ a: 1 }); // Inherited property 'a'
    Object.defineProperty(obj, 'b', { value: 2, enumerable: false }); // Non-enumerable property 'b'
    expect(isEmpty(obj)).toBe(true);
  });
});